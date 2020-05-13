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
  DescribeMessagesRequest,
  DescribeMessagesByUserIdRequest,
  SendMessageByUserIdRequest,
  GetMessageRequest,
  GetMessageByUserIdRequest,
  ReceiveGlobalMessageRequest,
  ReceiveGlobalMessageByUserIdRequest,
  OpenMessageRequest,
  OpenMessageByUserIdRequest,
  ReadMessageRequest,
  ReadMessageByUserIdRequest,
  DeleteMessageRequest,
  DeleteMessageByUserIdRequest,
  OpenByStampTaskRequest,
  ExportMasterRequest,
  GetCurrentMessageMasterRequest,
  UpdateCurrentMessageMasterRequest,
  UpdateCurrentMessageMasterFromGitHubRequest,
  DescribeGlobalMessageMastersRequest,
  CreateGlobalMessageMasterRequest,
  GetGlobalMessageMasterRequest,
  UpdateGlobalMessageMasterRequest,
  DeleteGlobalMessageMasterRequest,
  DescribeGlobalMessagesRequest,
  GetGlobalMessageRequest,
  GetReceivedByUserIdRequest,
  UpdateReceivedByUserIdRequest,
  DeleteReceivedByUserIdRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeMessagesResult,
  DescribeMessagesByUserIdResult,
  SendMessageByUserIdResult,
  GetMessageResult,
  GetMessageByUserIdResult,
  ReceiveGlobalMessageResult,
  ReceiveGlobalMessageByUserIdResult,
  OpenMessageResult,
  OpenMessageByUserIdResult,
  ReadMessageResult,
  ReadMessageByUserIdResult,
  DeleteMessageResult,
  DeleteMessageByUserIdResult,
  OpenByStampTaskResult,
  ExportMasterResult,
  GetCurrentMessageMasterResult,
  UpdateCurrentMessageMasterResult,
  UpdateCurrentMessageMasterFromGitHubResult,
  DescribeGlobalMessageMastersResult,
  CreateGlobalMessageMasterResult,
  GetGlobalMessageMasterResult,
  UpdateGlobalMessageMasterResult,
  DeleteGlobalMessageMasterResult,
  DescribeGlobalMessagesResult,
  GetGlobalMessageResult,
  GetReceivedByUserIdResult,
  UpdateReceivedByUserIdResult,
  DeleteReceivedByUserIdResult,
} from './result';

import {
  Namespace,
  Message,
  CurrentMessageMaster,
  GlobalMessageMaster,
  GlobalMessage,
  Received,
  ResponseCache,
  Config,
  ScriptSetting,
  NotificationSetting,
  GitHubCheckoutSetting,
  LogSetting,
  TimeSpan,
  AcquireAction,
} from './model';

import axios from 'axios';

export class Gs2InboxRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'inbox';

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
      .replace('{service}', 'inbox')
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
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.isAutomaticDeletingEnabled !== undefined) {
      body['isAutomaticDeletingEnabled'] = request.isAutomaticDeletingEnabled;
    }
    if (request.receiveMessageScript !== undefined) {
      body['receiveMessageScript'] = request.receiveMessageScript ? request.receiveMessageScript.toDict() : null;
    }
    if (request.readMessageScript !== undefined) {
      body['readMessageScript'] = request.readMessageScript ? request.readMessageScript.toDict() : null;
    }
    if (request.deleteMessageScript !== undefined) {
      body['deleteMessageScript'] = request.deleteMessageScript ? request.deleteMessageScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.receiveNotification !== undefined) {
      body['receiveNotification'] = request.receiveNotification ? request.receiveNotification.toDict() : null;
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
   * ネームスペースの状態を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'inbox')
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
      .replace('{service}', 'inbox')
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
      .replace('{service}', 'inbox')
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
    if (request.isAutomaticDeletingEnabled !== undefined) {
      body['isAutomaticDeletingEnabled'] = request.isAutomaticDeletingEnabled;
    }
    if (request.receiveMessageScript !== undefined) {
      body['receiveMessageScript'] = request.receiveMessageScript ? request.receiveMessageScript.toDict() : null;
    }
    if (request.readMessageScript !== undefined) {
      body['readMessageScript'] = request.readMessageScript ? request.readMessageScript.toDict() : null;
    }
    if (request.deleteMessageScript !== undefined) {
      body['deleteMessageScript'] = request.deleteMessageScript ? request.deleteMessageScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.receiveNotification !== undefined) {
      body['receiveNotification'] = request.receiveNotification ? request.receiveNotification.toDict() : null;
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
      .replace('{service}', 'inbox')
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
   * メッセージの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMessages(request: DescribeMessagesRequest): Promise<DescribeMessagesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/message')
      .replace('{service}', 'inbox')
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
        return new DescribeMessagesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMessagesByUserId(request: DescribeMessagesByUserIdRequest): Promise<DescribeMessagesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/message')
      .replace('{service}', 'inbox')
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
        return new DescribeMessagesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public sendMessageByUserId(request: SendMessageByUserIdRequest): Promise<SendMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/message')
      .replace('{service}', 'inbox')
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
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.readAcquireActions !== undefined) {
      body['readAcquireActions'] = request.readAcquireActions.map((item) => item.toDict());
    }
    if (request.expiresAt !== undefined) {
      body['expiresAt'] = request.expiresAt;
    }
    if (request.expiresTimeSpan !== undefined) {
      body['expiresTimeSpan'] = request.expiresTimeSpan ? request.expiresTimeSpan.toDict() : null;
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
        return new SendMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * メッセージを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMessage(request: GetMessageRequest): Promise<GetMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/{messageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new GetMessageResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してメッセージを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMessageByUserId(request: GetMessageByUserIdRequest): Promise<GetMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/{messageName}')
      .replace('{service}', 'inbox')
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
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new GetMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * グローバルメッセージのうちまだ受け取っていないメッセージを受信<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public receiveGlobalMessage(request: ReceiveGlobalMessageRequest): Promise<ReceiveGlobalMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/{messageName}/globalMessage/receive')
      .replace('{service}', 'inbox')
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
        return new ReceiveGlobalMessageResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してグローバルメッセージのうちまだ受け取っていないメッセージを受信<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public receiveGlobalMessageByUserId(request: ReceiveGlobalMessageByUserIdRequest): Promise<ReceiveGlobalMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/{messageName}/globalMessage/receive')
      .replace('{service}', 'inbox')
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
        return new ReceiveGlobalMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * メッセージを開封<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public openMessage(request: OpenMessageRequest): Promise<OpenMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/{messageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new OpenMessageResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してメッセージを開封<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public openMessageByUserId(request: OpenMessageByUserIdRequest): Promise<OpenMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/{messageName}')
      .replace('{service}', 'inbox')
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
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new OpenMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * メッセージを開封<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public readMessage(request: ReadMessageRequest): Promise<ReadMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/{messageName}/read')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.config !== undefined) {
      body['config'] = request.config.map((item) => item.toDict());
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
        return new ReadMessageResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してメッセージを開封<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public readMessageByUserId(request: ReadMessageByUserIdRequest): Promise<ReadMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/{messageName}/read')
      .replace('{service}', 'inbox')
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
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.config !== undefined) {
      body['config'] = request.config.map((item) => item.toDict());
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
        return new ReadMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * メッセージを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMessage(request: DeleteMessageRequest): Promise<DeleteMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/{messageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new DeleteMessageResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してメッセージを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMessageByUserId(request: DeleteMessageByUserIdRequest): Promise<DeleteMessageByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/{messageName}')
      .replace('{service}', 'inbox')
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
        '{messageName}',
        request.messageName ? String(request.messageName) : 'null',
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
        return new DeleteMessageByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージを作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public openByStampTask(request: OpenByStampTaskRequest): Promise<OpenByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/open')
      .replace('{service}', 'inbox')
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
        return new OpenByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なグローバルメッセージ設定のマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'inbox')
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
        return new ExportMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なグローバルメッセージ設定を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentMessageMaster(request: GetCurrentMessageMasterRequest): Promise<GetCurrentMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'inbox')
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
        return new GetCurrentMessageMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なグローバルメッセージ設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentMessageMaster(request: UpdateCurrentMessageMasterRequest): Promise<UpdateCurrentMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.settings !== undefined && request.settings !== '') {
      body['settings'] = request.settings;
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
        return new UpdateCurrentMessageMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なグローバルメッセージ設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentMessageMasterFromGitHub(request: UpdateCurrentMessageMasterFromGitHubRequest): Promise<UpdateCurrentMessageMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.checkoutSetting !== undefined) {
      body['checkoutSetting'] = request.checkoutSetting ? request.checkoutSetting.toDict() : null;
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
        return new UpdateCurrentMessageMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 全ユーザに向けたメッセージの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeGlobalMessageMasters(request: DescribeGlobalMessageMastersRequest): Promise<DescribeGlobalMessageMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/globalMessage')
      .replace('{service}', 'inbox')
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
        return new DescribeGlobalMessageMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 全ユーザに向けたメッセージを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createGlobalMessageMaster(request: CreateGlobalMessageMasterRequest): Promise<CreateGlobalMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/globalMessage')
      .replace('{service}', 'inbox')
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
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.readAcquireActions !== undefined) {
      body['readAcquireActions'] = request.readAcquireActions.map((item) => item.toDict());
    }
    if (request.expiresTimeSpan !== undefined) {
      body['expiresTimeSpan'] = request.expiresTimeSpan ? request.expiresTimeSpan.toDict() : null;
    }
    if (request.expiresAt !== undefined) {
      body['expiresAt'] = request.expiresAt;
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
        return new CreateGlobalMessageMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 全ユーザに向けたメッセージを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getGlobalMessageMaster(request: GetGlobalMessageMasterRequest): Promise<GetGlobalMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/globalMessage/{globalMessageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{globalMessageName}',
        request.globalMessageName ? String(request.globalMessageName) : 'null',
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
        return new GetGlobalMessageMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 全ユーザに向けたメッセージを開封<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateGlobalMessageMaster(request: UpdateGlobalMessageMasterRequest): Promise<UpdateGlobalMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/globalMessage/{globalMessageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{globalMessageName}',
        request.globalMessageName ? String(request.globalMessageName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.readAcquireActions !== undefined) {
      body['readAcquireActions'] = request.readAcquireActions.map((item) => item.toDict());
    }
    if (request.expiresTimeSpan !== undefined) {
      body['expiresTimeSpan'] = request.expiresTimeSpan ? request.expiresTimeSpan.toDict() : null;
    }
    if (request.expiresAt !== undefined) {
      body['expiresAt'] = request.expiresAt;
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
        return new UpdateGlobalMessageMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 全ユーザに向けたメッセージを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteGlobalMessageMaster(request: DeleteGlobalMessageMasterRequest): Promise<DeleteGlobalMessageMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/globalMessage/{globalMessageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{globalMessageName}',
        request.globalMessageName ? String(request.globalMessageName) : 'null',
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
        return new DeleteGlobalMessageMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 全ユーザに向けたメッセージの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeGlobalMessages(request: DescribeGlobalMessagesRequest): Promise<DescribeGlobalMessagesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/globalMessage')
      .replace('{service}', 'inbox')
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
        return new DescribeGlobalMessagesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 全ユーザに向けたメッセージを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getGlobalMessage(request: GetGlobalMessageRequest): Promise<GetGlobalMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/globalMessage/{globalMessageName}')
      .replace('{service}', 'inbox')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{globalMessageName}',
        request.globalMessageName ? String(request.globalMessageName) : 'null',
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
        return new GetGlobalMessageResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して受信済みグローバルメッセージ名を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getReceivedByUserId(request: GetReceivedByUserIdRequest): Promise<GetReceivedByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/received')
      .replace('{service}', 'inbox')
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
        return new GetReceivedByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して受信済みグローバルメッセージ名を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateReceivedByUserId(request: UpdateReceivedByUserIdRequest): Promise<UpdateReceivedByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/received')
      .replace('{service}', 'inbox')
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
    if (request.receivedGlobalMessageNames !== undefined) {
      body['receivedGlobalMessageNames'] = request.receivedGlobalMessageNames;
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
        return new UpdateReceivedByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定して受信済みグローバルメッセージ名を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteReceivedByUserId(request: DeleteReceivedByUserIdRequest): Promise<DeleteReceivedByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/received')
      .replace('{service}', 'inbox')
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
        return new DeleteReceivedByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
