/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IGs2Credential from './interface/IGs2Credential';
import IModel from './interface/IModel';
import axios from 'axios';
import waitUntil from "async-wait-until";
import {randomUUID} from "crypto";
const WebSocket = require('ws');

export class BasicGs2Credential implements IGs2Credential {

  public clientId: string;
  public clientSecret: string;

  constructor(
      clientId: string,
      clientSecret: string,
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}


export class Gs2RestSession {

  public credential: IGs2Credential;
  public region: string;
  public projectToken: string | null;
  public expiresAt: number | null;

  constructor(credential: IGs2Credential, region: string) {
    this.credential = credential;
    this.region = region;
    this.projectToken = null;
    this.expiresAt = null;
  }

  public connect() {

    const service = 'identifier';
    const url = Gs2Constant.ENDPOINT_HOST
            .replace('{service}', service)
            .replace('{region}', this.region)
        + '/projectToken/login';

    if (this.credential instanceof BasicGs2Credential) {
      const data = {
        client_id: (this.credential as BasicGs2Credential).clientId,
        client_secret: (this.credential as BasicGs2Credential).clientSecret,
      };

      return axios.post(
          url,
          data,
      )
          .then((response: any) => {
            const result = new LoginResult(response.data);
            this.projectToken = result.accessToken;
            this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
            return result;
          }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
          });
    } else if (this.credential instanceof ProjectTokenGs2Credential) {
      this.projectToken = (this.credential as ProjectTokenGs2Credential).projectToken;
    }
  }

  public disconnect() {
    this.projectToken = null;
  }
}


export class Gs2WebSocketSession {

  public credential: IGs2Credential;
  private client: WebSocket | null = null;
  public region: string;
  public projectToken: string | null;
  public expiresAt: number | null;

  private inflightRequest: any = {};

  private onOpenHandlers: Function[] = [];
  private onErrorHandlers: Function[] = [];
  private onCloseHandlers: Function[] = [];

  private onNotificationHandlers: Function[] = [];

  constructor(credential: IGs2Credential, region: string) {
    this.credential = credential;
    this.region = region;
    this.projectToken = null;
    this.expiresAt = null;
  }

  public async connect(): Promise<any> {

    const service = 'identifier';
    const url = Gs2Constant.ENDPOINT_HOST
            .replace('{service}', service)
            .replace('{region}', this.region)
        + '/projectToken/login';

    if (this.credential instanceof BasicGs2Credential) {
      const data = {
        client_id: (this.credential as BasicGs2Credential).clientId,
        client_secret: (this.credential as BasicGs2Credential).clientSecret,
      };

      const response = await axios.post(
          url,
          data,
      )
      const result = new LoginResult(response.data);
      this.projectToken = result.accessToken;
      this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
    } else if (this.credential instanceof ProjectTokenGs2Credential) {
      this.projectToken = (this.credential as ProjectTokenGs2Credential).projectToken;
    }

    this.client = new WebSocket(Gs2Constant.WS_ENDPOINT_HOST.replace('{region}', this.region));
    this.client!.onopen = (event: Event): any => {
      for (let i=0; i<this.onOpenHandlers.length; i++) {
        this.onOpenHandlers[i]();
      }
    };
    this.client!.onmessage = (message: MessageEvent) => {
      const payload = JSON.parse(message.data);
      if (payload.type == 'notification') {
        for (let i=0; i<this.onNotificationHandlers.length; i++) {
          this.onNotificationHandlers[i](payload.body);
        }
      } else {
        this.inflightRequest[payload.requestId] = payload;
      }
    };
    this.client!.onerror = (error: Event) => {
      for (let i = 0; i < this.onErrorHandlers.length; i++) {
        this.onErrorHandlers[i](error);
      }
    };
    this.client!.onclose = () => {
      for (let i=0; i<this.onCloseHandlers.length; i++) {
        this.onCloseHandlers[i]();
      }
    };
    await waitUntil(() => this.client == null || this.client.readyState == WebSocket.CLOSED || this.client.readyState == WebSocket.OPEN);
  }

  public async send(
      service: string,
      component: string,
      func: string,
      payload: any,
  ): Promise<any> {

    const requestId = randomUUID();

    this.inflightRequest[requestId] = null;
    this.client?.send(JSON.stringify(Object.assign({}, payload, {
      xGs2ClientId: this.credential.clientId,
      xGs2ProjectToken: this.projectToken,
      x_gs2: {
        service: service,
        component: component,
        function: func,
        contentType: "application/json",
        requestId : requestId,
      },
    })));

    await waitUntil(() => this.inflightRequest[requestId] != null);

    const result = this.inflightRequest[requestId];
    delete this.inflightRequest[requestId];
    if (result.status != 200) {
      throw result.body;
    }
    return result.body;
  }

  public onOpen(func: (ev: Event) => any) {
    this.onOpenHandlers.push(func);
  }

  public onError(func: (ev: Event) => any) {
    this.onErrorHandlers.push(func);
  }

  public onClose(func: (ev: CloseEvent) => any) {
    this.onCloseHandlers.push(func);
  }

  public onNotification(func: (message: {
    subject: string,
    issuer: string,
    payload: any,
  }) => any) {
    this.onNotificationHandlers.push(func);
  }

  public async disconnect(): Promise<any> {
    if (this.client != null) {
      this.client.close();
      await waitUntil(() => this.client == null || this.client.readyState == WebSocket.CLOSED);
      this.client = null;
    }
    this.projectToken = null;
  }
}

class LoginResult {

  public accessToken!: string;
  public tokenType!: string;
  public expiresIn!: number;

  constructor(
      data?: { [key: string]: any },
  ) {
    if (data) {
      this.accessToken = data.access_token;
      this.tokenType = data.token_type;
      this.expiresIn = data.expires_in;
    }
  }
}

export class ProjectToken implements IModel {

  public token: string | null = null;
  public expiresAt: number | null = null;

  constructor(
      data: { [key: string]: any },
  ) {
    this.token = data.token;
    this.expiresAt = data.expiresAt;
  }
}

export class ProjectTokenGs2Credential implements IGs2Credential {

  public clientId: string;
  public projectToken: string;

  constructor(
      clientId: string,
      projectToken: string,
  ) {
    this.clientId = clientId;
    this.projectToken = projectToken;
  }
}

export const Gs2Constant = {
  ENDPOINT_HOST: 'https://{service}.{region}.gen2.gs2io.com',
  WS_ENDPOINT_HOST: 'wss://gateway-ws.{region}.gen2.gs2io.com',
};

export const Region = {
  AP_NORTHEAST_1: 'ap-northeast-1',
  US_EAST_1: 'us-east-1',
  EU_WEST_1: 'eu-west-1',
  AP_SOUTHEAST_1: 'ap-southeast-1',
};
