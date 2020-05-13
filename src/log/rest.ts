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
  QueryAccessLogRequest,
  CountAccessLogRequest,
  QueryIssueStampSheetLogRequest,
  CountIssueStampSheetLogRequest,
  QueryExecuteStampSheetLogRequest,
  CountExecuteStampSheetLogRequest,
  QueryExecuteStampTaskLogRequest,
  CountExecuteStampTaskLogRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  QueryAccessLogResult,
  CountAccessLogResult,
  QueryIssueStampSheetLogResult,
  CountIssueStampSheetLogResult,
  QueryExecuteStampSheetLogResult,
  CountExecuteStampSheetLogResult,
  QueryExecuteStampTaskLogResult,
  CountExecuteStampTaskLogResult,
} from './result';

import {
  Namespace,
  AccessLog,
  AccessLogCount,
  IssueStampSheetLog,
  IssueStampSheetLogCount,
  ExecuteStampSheetLog,
  ExecuteStampSheetLogCount,
  ExecuteStampTaskLog,
  ExecuteStampTaskLogCount,
} from './model';

import axios from 'axios';

export class Gs2LogRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'log';

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
      .replace('{service}', 'log')
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
      .replace('{service}', 'log')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.type !== undefined && request.type !== '') {
      body['type'] = request.type;
    }
    if (request.gcpCredentialJson !== undefined && request.gcpCredentialJson !== '') {
      body['gcpCredentialJson'] = request.gcpCredentialJson;
    }
    if (request.bigQueryDatasetName !== undefined && request.bigQueryDatasetName !== '') {
      body['bigQueryDatasetName'] = request.bigQueryDatasetName;
    }
    if (request.logExpireDays !== undefined) {
      body['logExpireDays'] = request.logExpireDays;
    }
    if (request.awsRegion !== undefined && request.awsRegion !== '') {
      body['awsRegion'] = request.awsRegion;
    }
    if (request.awsAccessKeyId !== undefined && request.awsAccessKeyId !== '') {
      body['awsAccessKeyId'] = request.awsAccessKeyId;
    }
    if (request.awsSecretAccessKey !== undefined && request.awsSecretAccessKey !== '') {
      body['awsSecretAccessKey'] = request.awsSecretAccessKey;
    }
    if (request.firehoseStreamName !== undefined && request.firehoseStreamName !== '') {
      body['firehoseStreamName'] = request.firehoseStreamName;
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
   * ネームスペースの状態を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'log')
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
      .replace('{service}', 'log')
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
      .replace('{service}', 'log')
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
    if (request.type !== undefined && request.type !== '') {
      body['type'] = request.type;
    }
    if (request.gcpCredentialJson !== undefined && request.gcpCredentialJson !== '') {
      body['gcpCredentialJson'] = request.gcpCredentialJson;
    }
    if (request.bigQueryDatasetName !== undefined && request.bigQueryDatasetName !== '') {
      body['bigQueryDatasetName'] = request.bigQueryDatasetName;
    }
    if (request.logExpireDays !== undefined) {
      body['logExpireDays'] = request.logExpireDays;
    }
    if (request.awsRegion !== undefined && request.awsRegion !== '') {
      body['awsRegion'] = request.awsRegion;
    }
    if (request.awsAccessKeyId !== undefined && request.awsAccessKeyId !== '') {
      body['awsAccessKeyId'] = request.awsAccessKeyId;
    }
    if (request.awsSecretAccessKey !== undefined && request.awsSecretAccessKey !== '') {
      body['awsSecretAccessKey'] = request.awsSecretAccessKey;
    }
    if (request.firehoseStreamName !== undefined && request.firehoseStreamName !== '') {
      body['firehoseStreamName'] = request.firehoseStreamName;
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
      .replace('{service}', 'log')
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
   * アクセスログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public queryAccessLog(request: QueryAccessLogRequest): Promise<QueryAccessLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = String(request.method);
    }
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
        return new QueryAccessLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アクセスログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public countAccessLog(request: CountAccessLogRequest): Promise<CountAccessLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/count')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = Boolean(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = Boolean(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = Boolean(request.userId);
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
        return new CountAccessLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシート発行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public queryIssueStampSheetLog(request: QueryIssueStampSheetLogRequest): Promise<QueryIssueStampSheetLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = String(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = String(request.action);
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
        return new QueryIssueStampSheetLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシート発行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public countIssueStampSheetLog(request: CountIssueStampSheetLogRequest): Promise<CountIssueStampSheetLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet/count')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = Boolean(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = Boolean(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = Boolean(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = Boolean(request.action);
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
        return new CountIssueStampSheetLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシート実行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public queryExecuteStampSheetLog(request: QueryExecuteStampSheetLogRequest): Promise<QueryExecuteStampSheetLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = String(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = String(request.action);
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
        return new QueryExecuteStampSheetLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシート実行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public countExecuteStampSheetLog(request: CountExecuteStampSheetLogRequest): Promise<CountExecuteStampSheetLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet/count')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = Boolean(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = Boolean(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = Boolean(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = Boolean(request.action);
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
        return new CountExecuteStampSheetLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプタスク実行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public queryExecuteStampTaskLog(request: QueryExecuteStampTaskLogRequest): Promise<QueryExecuteStampTaskLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = String(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = String(request.action);
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
        return new QueryExecuteStampTaskLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプタスク実行ログの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public countExecuteStampTaskLog(request: CountExecuteStampTaskLogRequest): Promise<CountExecuteStampTaskLogResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task/count')
      .replace('{service}', 'log')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = Boolean(request.service);
    }
    if (request.method !== undefined ) {
      params['method'] = Boolean(request.method);
    }
    if (request.userId !== undefined ) {
      params['userId'] = Boolean(request.userId);
    }
    if (request.action !== undefined ) {
      params['action'] = Boolean(request.action);
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
        return new CountExecuteStampTaskLogResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
