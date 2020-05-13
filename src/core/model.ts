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

import IRequest from './interface/IRequest';

export class Gs2Request implements IRequest {

  public requestId: string | null = null;
  public contextStack: string | null = null;

  constructor(
      data: { [key: string]: any | null } | null = null,
  ) {
    if (data) {
      this.requestId = data.requestId;
      this.contextStack = data.contextStack;
    }
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
};

export const Region = {
  AP_NORTHEAST_1: 'ap-northeast-1',
  US_EAST_1: 'us-east-1',
  EU_WEST_1: 'eu-west-1',
  AP_SOUTHEAST_1: 'ap-southeast-1',
};
