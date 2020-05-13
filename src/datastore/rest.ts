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
  DescribeDataObjectsRequest,
  DescribeDataObjectsByUserIdRequest,
  PrepareUploadRequest,
  PrepareUploadByUserIdRequest,
  UpdateDataObjectRequest,
  UpdateDataObjectByUserIdRequest,
  PrepareReUploadRequest,
  PrepareReUploadByUserIdRequest,
  DoneUploadRequest,
  DoneUploadByUserIdRequest,
  DeleteDataObjectRequest,
  DeleteDataObjectByUserIdRequest,
  PrepareDownloadRequest,
  PrepareDownloadByUserIdRequest,
  PrepareDownloadByGenerationRequest,
  PrepareDownloadByGenerationAndUserIdRequest,
  PrepareDownloadOwnDataRequest,
  PrepareDownloadOwnDataByGenerationRequest,
  PrepareDownloadOwnDataByGenerationAndUserIdRequest,
  DescribeDataObjectHistoriesRequest,
  DescribeDataObjectHistoriesByUserIdRequest,
  GetDataObjectHistoryRequest,
  GetDataObjectHistoryByUserIdRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeDataObjectsResult,
  DescribeDataObjectsByUserIdResult,
  PrepareUploadResult,
  PrepareUploadByUserIdResult,
  UpdateDataObjectResult,
  UpdateDataObjectByUserIdResult,
  PrepareReUploadResult,
  PrepareReUploadByUserIdResult,
  DoneUploadResult,
  DoneUploadByUserIdResult,
  DeleteDataObjectResult,
  DeleteDataObjectByUserIdResult,
  PrepareDownloadResult,
  PrepareDownloadByUserIdResult,
  PrepareDownloadByGenerationResult,
  PrepareDownloadByGenerationAndUserIdResult,
  PrepareDownloadOwnDataResult,
  PrepareDownloadOwnDataByGenerationResult,
  PrepareDownloadOwnDataByGenerationAndUserIdResult,
  DescribeDataObjectHistoriesResult,
  DescribeDataObjectHistoriesByUserIdResult,
  GetDataObjectHistoryResult,
  GetDataObjectHistoryByUserIdResult,
} from './result';

import {
  Namespace,
  DataObject,
  DataObjectHistory,
  ResponseCache,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2DatastoreRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'datastore';

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
      .replace('{service}', 'datastore')
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
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
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
      .replace('{service}', 'datastore')
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
      .replace('{service}', 'datastore')
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
      .replace('{service}', 'datastore')
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
      .replace('{service}', 'datastore')
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
   * データオブジェクトの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeDataObjects(request: DescribeDataObjectsRequest): Promise<DescribeDataObjectsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.status !== undefined ) {
      params['status'] = String(request.status);
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
        return new DescribeDataObjectsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * オーナーIDを指定してデータオブジェクトの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeDataObjectsByUserId(request: DescribeDataObjectsByUserIdRequest): Promise<DescribeDataObjectsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data')
      .replace('{service}', 'datastore')
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
    if (request.status !== undefined ) {
      params['status'] = String(request.status);
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
        return new DescribeDataObjectsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * データオブジェクトをアップロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareUpload(request: PrepareUploadRequest): Promise<PrepareUploadResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/file')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.contentType !== undefined && request.contentType !== '') {
      body['contentType'] = request.contentType;
    }
    if (request.scope !== undefined && request.scope !== '') {
      body['scope'] = request.scope;
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
    }
    if (request.updateIfExists !== undefined) {
      body['updateIfExists'] = request.updateIfExists;
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
        return new PrepareUploadResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトをアップロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareUploadByUserId(request: PrepareUploadByUserIdRequest): Promise<PrepareUploadByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/file')
      .replace('{service}', 'datastore')
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
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.contentType !== undefined && request.contentType !== '') {
      body['contentType'] = request.contentType;
    }
    if (request.scope !== undefined && request.scope !== '') {
      body['scope'] = request.scope;
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
    }
    if (request.updateIfExists !== undefined) {
      body['updateIfExists'] = request.updateIfExists;
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
        return new PrepareUploadByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトを更新する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateDataObject(request: UpdateDataObjectRequest): Promise<UpdateDataObjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.scope !== undefined && request.scope !== '') {
      body['scope'] = request.scope;
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
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
        return new UpdateDataObjectResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトを更新する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateDataObjectByUserId(request: UpdateDataObjectByUserIdRequest): Promise<UpdateDataObjectByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.scope !== undefined && request.scope !== '') {
      body['scope'] = request.scope;
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
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
        return new UpdateDataObjectByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトを再アップロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareReUpload(request: PrepareReUploadRequest): Promise<PrepareReUploadResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/file')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.contentType !== undefined && request.contentType !== '') {
      body['contentType'] = request.contentType;
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
        return new PrepareReUploadResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトを再アップロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareReUploadByUserId(request: PrepareReUploadByUserIdRequest): Promise<PrepareReUploadByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/file')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.contentType !== undefined && request.contentType !== '') {
      body['contentType'] = request.contentType;
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
        return new PrepareReUploadByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトのアップロード完了を報告する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public doneUpload(request: DoneUploadRequest): Promise<DoneUploadResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/done')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new DoneUploadResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトのアップロード完了を報告する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public doneUploadByUserId(request: DoneUploadByUserIdRequest): Promise<DoneUploadByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/done')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
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
        return new DoneUploadByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトを削除する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteDataObject(request: DeleteDataObjectRequest): Promise<DeleteDataObjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
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
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteDataObjectResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトを削除する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteDataObjectByUserId(request: DeleteDataObjectByUserIdRequest): Promise<DeleteDataObjectByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}')
      .replace('{service}', 'datastore')
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
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
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
        return new DeleteDataObjectByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * データオブジェクトをダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownload(request: PrepareDownloadRequest): Promise<PrepareDownloadResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/file')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.dataObjectId !== undefined && request.dataObjectId !== '') {
      body['dataObjectId'] = request.dataObjectId;
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
        return new PrepareDownloadResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトをダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadByUserId(request: PrepareDownloadByUserIdRequest): Promise<PrepareDownloadByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/file')
      .replace('{service}', 'datastore')
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
    if (request.dataObjectId !== undefined && request.dataObjectId !== '') {
      body['dataObjectId'] = request.dataObjectId;
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
        return new PrepareDownloadByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトを世代を指定してダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadByGeneration(request: PrepareDownloadByGenerationRequest): Promise<PrepareDownloadByGenerationResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/file/generation/{generation}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{generation}',
        request.generation ? String(request.generation) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.dataObjectId !== undefined && request.dataObjectId !== '') {
      body['dataObjectId'] = request.dataObjectId;
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
        return new PrepareDownloadByGenerationResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトを世代を指定してダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadByGenerationAndUserId(request: PrepareDownloadByGenerationAndUserIdRequest): Promise<PrepareDownloadByGenerationAndUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/file/generation/{generation}')
      .replace('{service}', 'datastore')
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
        '{generation}',
        request.generation ? String(request.generation) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.dataObjectId !== undefined && request.dataObjectId !== '') {
      body['dataObjectId'] = request.dataObjectId;
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
        return new PrepareDownloadByGenerationAndUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトをダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadOwnData(request: PrepareDownloadOwnDataRequest): Promise<PrepareDownloadOwnDataResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/file')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new PrepareDownloadOwnDataResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクトを世代を指定してダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadOwnDataByGeneration(request: PrepareDownloadOwnDataByGenerationRequest): Promise<PrepareDownloadOwnDataByGenerationResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/generation/{generation}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{generation}',
        request.generation ? String(request.generation) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new PrepareDownloadOwnDataByGenerationResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクトを世代を指定してダウンロード準備する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public prepareDownloadOwnDataByGenerationAndUserId(request: PrepareDownloadOwnDataByGenerationAndUserIdRequest): Promise<PrepareDownloadOwnDataByGenerationAndUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/generation/{generation}')
      .replace('{service}', 'datastore')
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
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{generation}',
        request.generation ? String(request.generation) : 'null',
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
        return new PrepareDownloadOwnDataByGenerationAndUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * データオブジェクト履歴の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeDataObjectHistories(request: DescribeDataObjectHistoriesRequest): Promise<DescribeDataObjectHistoriesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/history')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
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
        return new DescribeDataObjectHistoriesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクト履歴の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeDataObjectHistoriesByUserId(request: DescribeDataObjectHistoriesByUserIdRequest): Promise<DescribeDataObjectHistoriesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/history')
      .replace('{service}', 'datastore')
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
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
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
        return new DescribeDataObjectHistoriesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * データオブジェクト履歴を取得する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getDataObjectHistory(request: GetDataObjectHistoryRequest): Promise<GetDataObjectHistoryResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/history/{generation}')
      .replace('{service}', 'datastore')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{generation}',
        request.generation ? String(request.generation) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new GetDataObjectHistoryResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してデータオブジェクト履歴を取得する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getDataObjectHistoryByUserId(request: GetDataObjectHistoryByUserIdRequest): Promise<GetDataObjectHistoryByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/history/{generation}')
      .replace('{service}', 'datastore')
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
        '{dataObjectName}',
        request.dataObjectName ? String(request.dataObjectName) : 'null',
      )
      .replace(
        '{generation}',
        request.generation ? String(request.generation) : 'null',
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
        return new GetDataObjectHistoryByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
