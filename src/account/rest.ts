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

import AbstractGs2RestClient from '@/gs2/core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '@/gs2/core/model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeAccountsRequest,
  CreateAccountRequest,
  UpdateTimeOffsetRequest,
  GetAccountRequest,
  DeleteAccountRequest,
  AuthenticationRequest,
  DescribeTakeOversRequest,
  DescribeTakeOversByUserIdRequest,
  CreateTakeOverRequest,
  CreateTakeOverByUserIdRequest,
  GetTakeOverRequest,
  GetTakeOverByUserIdRequest,
  UpdateTakeOverRequest,
  UpdateTakeOverByUserIdRequest,
  DeleteTakeOverRequest,
  DeleteTakeOverByUserIdentifierRequest,
  DoTakeOverRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeAccountsResult,
  CreateAccountResult,
  UpdateTimeOffsetResult,
  GetAccountResult,
  DeleteAccountResult,
  AuthenticationResult,
  DescribeTakeOversResult,
  DescribeTakeOversByUserIdResult,
  CreateTakeOverResult,
  CreateTakeOverByUserIdResult,
  GetTakeOverResult,
  GetTakeOverByUserIdResult,
  UpdateTakeOverResult,
  UpdateTakeOverByUserIdResult,
  DeleteTakeOverResult,
  DeleteTakeOverByUserIdentifierResult,
  DoTakeOverResult,
} from './result';

import {
  Namespace,
  Account,
  TakeOver,
  ResponseCache,
  ScriptSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2AccountRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'account';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * ネームスペースの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.pageToken !== undefined ) {
      params['pageToken'] = String(request.pageToken);
    }
    if (request.limit !== undefined ) {
      params['limit'] = Number(request.limit);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new DescribeNamespacesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ネームスペースを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.changePasswordIfTakeOver !== undefined) {
      body['changePasswordIfTakeOver'] = request.changePasswordIfTakeOver;
    }
    if (request.createAccountScript !== undefined) {
      body['createAccountScript'] = request.createAccountScript ? request.createAccountScript.toDict() : null;
    }
    if (request.authenticationScript !== undefined) {
      body['authenticationScript'] = request.authenticationScript ? request.authenticationScript.toDict() : null;
    }
    if (request.createTakeOverScript !== undefined) {
      body['createTakeOverScript'] = request.createTakeOverScript ? request.createTakeOverScript.toDict() : null;
    }
    if (request.doTakeOverScript !== undefined) {
      body['doTakeOverScript'] = request.doTakeOverScript ? request.doTakeOverScript.toDict() : null;
    }
    if (request.logSetting !== undefined) {
      body['logSetting'] = request.logSetting ? request.logSetting.toDict() : null;
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
        return new CreateNamespaceResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ネームスペースを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new GetNamespaceStatusResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ネームスペースを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new GetNamespaceResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ネームスペースを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.changePasswordIfTakeOver !== undefined) {
      body['changePasswordIfTakeOver'] = request.changePasswordIfTakeOver;
    }
    if (request.createAccountScript !== undefined) {
      body['createAccountScript'] = request.createAccountScript ? request.createAccountScript.toDict() : null;
    }
    if (request.authenticationScript !== undefined) {
      body['authenticationScript'] = request.authenticationScript ? request.authenticationScript.toDict() : null;
    }
    if (request.createTakeOverScript !== undefined) {
      body['createTakeOverScript'] = request.createTakeOverScript ? request.createTakeOverScript.toDict() : null;
    }
    if (request.doTakeOverScript !== undefined) {
      body['doTakeOverScript'] = request.doTakeOverScript ? request.doTakeOverScript.toDict() : null;
    }
    if (request.logSetting !== undefined) {
      body['logSetting'] = request.logSetting ? request.logSetting.toDict() : null;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new UpdateNamespaceResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ネームスペースを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteNamespaceResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ゲームプレイヤーアカウントの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.pageToken !== undefined ) {
      params['pageToken'] = String(request.pageToken);
    }
    if (request.limit !== undefined ) {
      params['limit'] = Number(request.limit);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new DescribeAccountsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ゲームプレイヤーアカウントを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createAccount(request: CreateAccountRequest): Promise<CreateAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new CreateAccountResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ゲームプレイヤーアカウントの現在時刻に対する補正値を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateTimeOffset(request: UpdateTimeOffsetRequest): Promise<UpdateTimeOffsetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/time_offset')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new UpdateTimeOffsetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ゲームプレイヤーアカウントを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getAccount(request: GetAccountRequest): Promise<GetAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new GetAccountResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ゲームプレイヤーアカウントを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteAccountResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ゲームプレイヤーアカウントを認証<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public authentication(request: AuthenticationRequest): Promise<AuthenticationResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new AuthenticationResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 引き継ぎ設定の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeTakeOvers(request: DescribeTakeOversRequest): Promise<DescribeTakeOversResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.pageToken !== undefined ) {
      params['pageToken'] = String(request.pageToken);
    }
    if (request.limit !== undefined ) {
      params['limit'] = Number(request.limit);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }
    if (request.accessToken) {
      headers['X-GS2-ACCESS-TOKEN'] = request.accessToken;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new DescribeTakeOversResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して引き継ぎ設定の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeTakeOversByUserId(request: DescribeTakeOversByUserIdRequest): Promise<DescribeTakeOversByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.pageToken !== undefined ) {
      params['pageToken'] = String(request.pageToken);
    }
    if (request.limit !== undefined ) {
      params['limit'] = Number(request.limit);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new DescribeTakeOversByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 引き継ぎ設定を新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createTakeOver(request: CreateTakeOverRequest): Promise<CreateTakeOverResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.type !== undefined) {
      body['type'] = request.type;
    }
    if (request.userIdentifier !== undefined && request.userIdentifier !== '') {
      body['userIdentifier'] = request.userIdentifier;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }
    if (request.accessToken) {
      headers['X-GS2-ACCESS-TOKEN'] = String(request.accessToken);
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
        return new CreateTakeOverResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定して引き継ぎ設定を新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createTakeOverByUserId(request: CreateTakeOverByUserIdRequest): Promise<CreateTakeOverByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.type !== undefined) {
      body['type'] = request.type;
    }
    if (request.userIdentifier !== undefined && request.userIdentifier !== '') {
      body['userIdentifier'] = request.userIdentifier;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
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
        return new CreateTakeOverByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 引き継ぎ設定を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getTakeOver(request: GetTakeOverRequest): Promise<GetTakeOverResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }
    if (request.accessToken) {
      headers['X-GS2-ACCESS-TOKEN'] = request.accessToken;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new GetTakeOverResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して引き継ぎ設定を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getTakeOverByUserId(request: GetTakeOverByUserIdRequest): Promise<GetTakeOverByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new GetTakeOverByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 引き継ぎ設定を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateTakeOver(request: UpdateTakeOverRequest): Promise<UpdateTakeOverResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.oldPassword !== undefined && request.oldPassword !== '') {
      body['oldPassword'] = request.oldPassword;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }
    if (request.accessToken) {
      headers['X-GS2-ACCESS-TOKEN'] = String(request.accessToken);
    }

    const config = {
      headers,
    };
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new UpdateTakeOverResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 引き継ぎ設定を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateTakeOverByUserId(request: UpdateTakeOverByUserIdRequest): Promise<UpdateTakeOverByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.oldPassword !== undefined && request.oldPassword !== '') {
      body['oldPassword'] = request.oldPassword;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new UpdateTakeOverByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 引き継ぎ設定を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteTakeOver(request: DeleteTakeOverRequest): Promise<DeleteTakeOverResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.userIdentifier !== undefined ) {
      params['userIdentifier'] = String(request.userIdentifier);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }
    if (request.accessToken) {
      headers['X-GS2-ACCESS-TOKEN'] = request.accessToken;
    }

    const config = {
      params,
      headers,
    };
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteTakeOverResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 引き継ぎ設定を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteTakeOverByUserIdentifier(request: DeleteTakeOverByUserIdentifierRequest): Promise<DeleteTakeOverByUserIdentifierResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/takeover/type/{type}/userIdentifier/{userIdentifier}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      )
      .replace(
        '{userIdentifier}',
        request.userIdentifier ? String(request.userIdentifier) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteTakeOverByUserIdentifierResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 引き継ぎ設定を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public doTakeOver(request: DoTakeOverRequest): Promise<DoTakeOverResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/takeover/type/{type}')
      .replace('{service}', 'account')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{type}',
        request.type !== undefined ? String(request.type) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.userIdentifier !== undefined && request.userIdentifier !== '') {
      body['userIdentifier'] = request.userIdentifier;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
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
        return new DoTakeOverResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
