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
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeWalletsRequest,
  DescribeWalletsByUserIdRequest,
  QueryWalletsRequest,
  GetWalletRequest,
  GetWalletByUserIdRequest,
  DepositByUserIdRequest,
  WithdrawRequest,
  WithdrawByUserIdRequest,
  DepositByStampSheetRequest,
  WithdrawByStampTaskRequest,
  DescribeReceiptsRequest,
  GetByUserIdAndTransactionIdRequest,
  RecordReceiptRequest,
  RecordReceiptByStampTaskRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeWalletsResult,
  DescribeWalletsByUserIdResult,
  QueryWalletsResult,
  GetWalletResult,
  GetWalletByUserIdResult,
  DepositByUserIdResult,
  WithdrawResult,
  WithdrawByUserIdResult,
  DepositByStampSheetResult,
  WithdrawByStampTaskResult,
  DescribeReceiptsResult,
  GetByUserIdAndTransactionIdResult,
  RecordReceiptResult,
  RecordReceiptByStampTaskResult,
} from './result';

import {
  Namespace,
  Wallet,
  Receipt,
  ResponseCache,
  WalletDetail,
  ScriptSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2MoneyRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'money';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * ネームスペースの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'money')
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
   * ネームスペースを新規作成します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.priority !== undefined && request.priority !== '') {
      body['priority'] = request.priority;
    }
    if (request.shareFree !== undefined) {
      body['shareFree'] = request.shareFree;
    }
    if (request.currency !== undefined && request.currency !== '') {
      body['currency'] = request.currency;
    }
    if (request.appleKey !== undefined && request.appleKey !== '') {
      body['appleKey'] = request.appleKey;
    }
    if (request.googleKey !== undefined && request.googleKey !== '') {
      body['googleKey'] = request.googleKey;
    }
    if (request.enableFakeReceipt !== undefined) {
      body['enableFakeReceipt'] = request.enableFakeReceipt;
    }
    if (request.createWalletScript !== undefined) {
      body['createWalletScript'] = request.createWalletScript ? request.createWalletScript.toDict() : null;
    }
    if (request.depositScript !== undefined) {
      body['depositScript'] = request.depositScript ? request.depositScript.toDict() : null;
    }
    if (request.withdrawScript !== undefined) {
      body['withdrawScript'] = request.withdrawScript ? request.withdrawScript.toDict() : null;
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
   * ネームスペースの状態を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'money')
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
   * ネームスペースを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'money')
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
   * ネームスペースを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'money')
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
    if (request.priority !== undefined && request.priority !== '') {
      body['priority'] = request.priority;
    }
    if (request.appleKey !== undefined && request.appleKey !== '') {
      body['appleKey'] = request.appleKey;
    }
    if (request.googleKey !== undefined && request.googleKey !== '') {
      body['googleKey'] = request.googleKey;
    }
    if (request.enableFakeReceipt !== undefined) {
      body['enableFakeReceipt'] = request.enableFakeReceipt;
    }
    if (request.createWalletScript !== undefined) {
      body['createWalletScript'] = request.createWalletScript ? request.createWalletScript.toDict() : null;
    }
    if (request.depositScript !== undefined) {
      body['depositScript'] = request.depositScript ? request.depositScript.toDict() : null;
    }
    if (request.withdrawScript !== undefined) {
      body['withdrawScript'] = request.withdrawScript ? request.withdrawScript.toDict() : null;
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
   * ネームスペースを削除します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'money')
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
   * ウォレット一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeWallets(request: DescribeWalletsRequest): Promise<DescribeWalletsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/wallet')
      .replace('{service}', 'money')
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
        return new DescribeWalletsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ウォレット一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeWalletsByUserId(request: DescribeWalletsByUserIdRequest): Promise<DescribeWalletsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/wallet')
      .replace('{service}', 'money')
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
        return new DescribeWalletsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ウォレット一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public queryWallets(request: QueryWalletsRequest): Promise<QueryWalletsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/wallet/query')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }
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
        return new QueryWalletsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ウォレットを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getWallet(request: GetWalletRequest): Promise<GetWalletResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/wallet/{slot}')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{slot}',
        request.slot !== undefined ? String(request.slot) : 'null',
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
        return new GetWalletResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してウォレットを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getWalletByUserId(request: GetWalletByUserIdRequest): Promise<GetWalletByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/wallet/{slot}')
      .replace('{service}', 'money')
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
        '{slot}',
        request.slot !== undefined ? String(request.slot) : 'null',
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
        return new GetWalletByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してウォレットに残高を加算します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public depositByUserId(request: DepositByUserIdRequest): Promise<DepositByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/wallet/{slot}/deposit')
      .replace('{service}', 'money')
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
        '{slot}',
        request.slot !== undefined ? String(request.slot) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.price !== undefined) {
      body['price'] = request.price;
    }
    if (request.count !== undefined) {
      body['count'] = request.count;
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
        return new DepositByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ウォレットから残高を消費します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public withdraw(request: WithdrawRequest): Promise<WithdrawResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/wallet/{slot}/withdraw')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{slot}',
        request.slot !== undefined ? String(request.slot) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.count !== undefined) {
      body['count'] = request.count;
    }
    if (request.paidOnly !== undefined) {
      body['paidOnly'] = request.paidOnly;
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
        return new WithdrawResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してウォレットから残高を消費します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public withdrawByUserId(request: WithdrawByUserIdRequest): Promise<WithdrawByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/wallet/{slot}/withdraw')
      .replace('{service}', 'money')
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
        '{slot}',
        request.slot !== undefined ? String(request.slot) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.count !== undefined) {
      body['count'] = request.count;
    }
    if (request.paidOnly !== undefined) {
      body['paidOnly'] = request.paidOnly;
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
        return new WithdrawByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートを使用してウォレットに残高を加算します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public depositByStampSheet(request: DepositByStampSheetRequest): Promise<DepositByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/deposit')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.stampSheet !== undefined && request.stampSheet !== '') {
      body['stampSheet'] = request.stampSheet;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
        return new DepositByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ウォレットから残高を消費します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public withdrawByStampTask(request: WithdrawByStampTaskRequest): Promise<WithdrawByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/withdraw')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.stampTask !== undefined && request.stampTask !== '') {
      body['stampTask'] = request.stampTask;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
        return new WithdrawByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * レシートの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeReceipts(request: DescribeReceiptsRequest): Promise<DescribeReceiptsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/receipt')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }
    if (request.slot !== undefined ) {
      params['slot'] = Number(request.slot);
    }
    if (request.begin !== undefined ) {
      params['begin'] = Number(request.begin);
    }
    if (request.end !== undefined ) {
      params['end'] = Number(request.end);
    }
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
        return new DescribeReceiptsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * レシートの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getByUserIdAndTransactionId(request: GetByUserIdAndTransactionIdRequest): Promise<GetByUserIdAndTransactionIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/receipt/{transactionId}')
      .replace('{service}', 'money')
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
        '{transactionId}',
        request.transactionId ? String(request.transactionId) : 'null',
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
        return new GetByUserIdAndTransactionIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * レシートを記録<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public recordReceipt(request: RecordReceiptRequest): Promise<RecordReceiptResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/receipt')
      .replace('{service}', 'money')
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
    if (request.contentsId !== undefined && request.contentsId !== '') {
      body['contentsId'] = request.contentsId;
    }
    if (request.receipt !== undefined && request.receipt !== '') {
      body['receipt'] = request.receipt;
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
        return new RecordReceiptResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートを使用してレシートを記録<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public recordReceiptByStampTask(request: RecordReceiptByStampTaskRequest): Promise<RecordReceiptByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/receipt/record')
      .replace('{service}', 'money')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.stampTask !== undefined && request.stampTask !== '') {
      body['stampTask'] = request.stampTask;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
        return new RecordReceiptByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
