/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '../core/model';
import {
  LoginRequest,
  LoginBySignatureRequest,
} from './request';

import {
  LoginResult,
  LoginBySignatureResult,
} from './result';

import {
  AccessToken,
} from './model';

import axios from 'axios';

export class Gs2AuthRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'auth';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * 指定したユーザIDでGS2にログインし、アクセストークンを取得します<br>
   *   本APIは信頼出来るゲームサーバーから呼び出されることを想定しています。<br>
   *   ユーザIDの値の検証処理が存在しないため、クライアントから呼び出すのは不適切です。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public login(request: LoginRequest): Promise<LoginResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/login')
      .replace('{service}', 'auth')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.userId !== undefined && request.userId !== '') {
      body['userId'] = request.userId;
    }
    if (request.timeOffset !== undefined) {
      body['timeOffset'] = request.timeOffset;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new LoginResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 指定したユーザIDでGS2にログインし、アクセストークンを取得します<br>
   *   ユーザIDの署名検証を実施することで、本APIはクライアントから呼び出しても安全です。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public loginBySignature(request: LoginBySignatureRequest): Promise<LoginBySignatureResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/login/signed')
      .replace('{service}', 'auth')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.userId !== undefined && request.userId !== '') {
      body['userId'] = request.userId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.body !== undefined && request.body !== '') {
      body['body'] = request.body;
    }
    if (request.signature !== undefined && request.signature !== '') {
      body['signature'] = request.signature;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new LoginBySignatureResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
