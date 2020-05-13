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
  DescribeRoomsRequest,
  CreateRoomRequest,
  CreateRoomFromBackendRequest,
  GetRoomRequest,
  UpdateRoomRequest,
  DeleteRoomRequest,
  DeleteRoomFromBackendRequest,
  DescribeMessagesRequest,
  PostRequest,
  PostByUserIdRequest,
  GetMessageRequest,
  DeleteMessageRequest,
  DescribeSubscribesRequest,
  DescribeSubscribesByUserIdRequest,
  DescribeSubscribesByRoomNameRequest,
  SubscribeRequest,
  SubscribeByUserIdRequest,
  GetSubscribeRequest,
  GetSubscribeByUserIdRequest,
  UpdateNotificationTypeRequest,
  UpdateNotificationTypeByUserIdRequest,
  UnsubscribeRequest,
  UnsubscribeByUserIdRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeRoomsResult,
  CreateRoomResult,
  CreateRoomFromBackendResult,
  GetRoomResult,
  UpdateRoomResult,
  DeleteRoomResult,
  DeleteRoomFromBackendResult,
  DescribeMessagesResult,
  PostResult,
  PostByUserIdResult,
  GetMessageResult,
  DeleteMessageResult,
  DescribeSubscribesResult,
  DescribeSubscribesByUserIdResult,
  DescribeSubscribesByRoomNameResult,
  SubscribeResult,
  SubscribeByUserIdResult,
  GetSubscribeResult,
  GetSubscribeByUserIdResult,
  UpdateNotificationTypeResult,
  UpdateNotificationTypeByUserIdResult,
  UnsubscribeResult,
  UnsubscribeByUserIdResult,
} from './result';

import {
  Namespace,
  Room,
  Message,
  Subscribe,
  ResponseCache,
  NotificationType,
  ScriptSetting,
  NotificationSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2ChatRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'chat';

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
      .replace('{service}', 'chat')
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
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.allowCreateRoom !== undefined) {
      body['allowCreateRoom'] = request.allowCreateRoom;
    }
    if (request.postMessageScript !== undefined) {
      body['postMessageScript'] = request.postMessageScript ? request.postMessageScript.toDict() : null;
    }
    if (request.createRoomScript !== undefined) {
      body['createRoomScript'] = request.createRoomScript ? request.createRoomScript.toDict() : null;
    }
    if (request.deleteRoomScript !== undefined) {
      body['deleteRoomScript'] = request.deleteRoomScript ? request.deleteRoomScript.toDict() : null;
    }
    if (request.subscribeRoomScript !== undefined) {
      body['subscribeRoomScript'] = request.subscribeRoomScript ? request.subscribeRoomScript.toDict() : null;
    }
    if (request.unsubscribeRoomScript !== undefined) {
      body['unsubscribeRoomScript'] = request.unsubscribeRoomScript ? request.unsubscribeRoomScript.toDict() : null;
    }
    if (request.postNotification !== undefined) {
      body['postNotification'] = request.postNotification ? request.postNotification.toDict() : null;
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
      .replace('{service}', 'chat')
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
      .replace('{service}', 'chat')
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
      .replace('{service}', 'chat')
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
    if (request.allowCreateRoom !== undefined) {
      body['allowCreateRoom'] = request.allowCreateRoom;
    }
    if (request.postMessageScript !== undefined) {
      body['postMessageScript'] = request.postMessageScript ? request.postMessageScript.toDict() : null;
    }
    if (request.createRoomScript !== undefined) {
      body['createRoomScript'] = request.createRoomScript ? request.createRoomScript.toDict() : null;
    }
    if (request.deleteRoomScript !== undefined) {
      body['deleteRoomScript'] = request.deleteRoomScript ? request.deleteRoomScript.toDict() : null;
    }
    if (request.subscribeRoomScript !== undefined) {
      body['subscribeRoomScript'] = request.subscribeRoomScript ? request.subscribeRoomScript.toDict() : null;
    }
    if (request.unsubscribeRoomScript !== undefined) {
      body['unsubscribeRoomScript'] = request.unsubscribeRoomScript ? request.unsubscribeRoomScript.toDict() : null;
    }
    if (request.postNotification !== undefined) {
      body['postNotification'] = request.postNotification ? request.postNotification.toDict() : null;
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
      .replace('{service}', 'chat')
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
   * ルームの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeRooms(request: DescribeRoomsRequest): Promise<DescribeRoomsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room')
      .replace('{service}', 'chat')
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
        return new DescribeRoomsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ルームを作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createRoom(request: CreateRoomRequest): Promise<CreateRoomResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/user')
      .replace('{service}', 'chat')
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
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    if (request.whiteListUserIds !== undefined) {
      body['whiteListUserIds'] = request.whiteListUserIds;
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
        return new CreateRoomResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ルームを作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createRoomFromBackend(request: CreateRoomFromBackendRequest): Promise<CreateRoomFromBackendResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room')
      .replace('{service}', 'chat')
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
    if (request.userId !== undefined && request.userId !== '') {
      body['userId'] = request.userId;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    if (request.whiteListUserIds !== undefined) {
      body['whiteListUserIds'] = request.whiteListUserIds;
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
        return new CreateRoomFromBackendResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ルームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getRoom(request: GetRoomRequest): Promise<GetRoomResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new GetRoomResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ルームを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateRoom(request: UpdateRoomRequest): Promise<UpdateRoomResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    if (request.whiteListUserIds !== undefined) {
      body['whiteListUserIds'] = request.whiteListUserIds;
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
        return new UpdateRoomResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ルームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/user')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new DeleteRoomResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ルームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRoomFromBackend(request: DeleteRoomFromBackendRequest): Promise<DeleteRoomFromBackendResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.userId !== undefined ) {
      params['userId'] = String(request.userId);
    }

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
        return new DeleteRoomFromBackendResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMessages(request: DescribeMessagesRequest): Promise<DescribeMessagesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.password !== undefined ) {
      params['password'] = String(request.password);
    }
    if (request.startAt !== undefined ) {
      params['startAt'] = Number(request.startAt);
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
        return new DescribeMessagesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージを投稿<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public post(request: PostRequest): Promise<PostResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.category !== undefined) {
      body['category'] = request.category;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
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
        return new PostResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してメッセージを投稿<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public postByUserId(request: PostByUserIdRequest): Promise<PostByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/user/{userId}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.category !== undefined) {
      body['category'] = request.category;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
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
        return new PostByUserIdResult(response.data);
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
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/{messageName}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new GetMessageResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * メッセージを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMessage(request: DeleteMessageRequest): Promise<DeleteMessageResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/message/{messageName}')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new DeleteMessageResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 購読しているルームの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSubscribes(request: DescribeSubscribesRequest): Promise<DescribeSubscribesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/subscribe')
      .replace('{service}', 'chat')
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
        return new DescribeSubscribesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して購読しているルームの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSubscribesByUserId(request: DescribeSubscribesByUserIdRequest): Promise<DescribeSubscribesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/subscribe')
      .replace('{service}', 'chat')
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
        return new DescribeSubscribesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ルーム名を指定して購読しているユーザの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSubscribesByRoomName(request: DescribeSubscribesByRoomNameRequest): Promise<DescribeSubscribesByRoomNameResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new DescribeSubscribesByRoomNameResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ルームを購読<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public subscribe(request: SubscribeRequest): Promise<SubscribeResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.notificationTypes !== undefined) {
      body['notificationTypes'] = request.notificationTypes.map((item) => item.toDict());
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
        return new SubscribeResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してルームを購読<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public subscribeByUserId(request: SubscribeByUserIdRequest): Promise<SubscribeByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.notificationTypes !== undefined) {
      body['notificationTypes'] = request.notificationTypes.map((item) => item.toDict());
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
        return new SubscribeByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 購読を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getSubscribe(request: GetSubscribeRequest): Promise<GetSubscribeResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new GetSubscribeResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して購読を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getSubscribeByUserId(request: GetSubscribeByUserIdRequest): Promise<GetSubscribeByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new GetSubscribeByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 通知方法を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateNotificationType(request: UpdateNotificationTypeRequest): Promise<UpdateNotificationTypeResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe/notification')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.notificationTypes !== undefined) {
      body['notificationTypes'] = request.notificationTypes.map((item) => item.toDict());
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
        return new UpdateNotificationTypeResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定して通知方法を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateNotificationTypeByUserId(request: UpdateNotificationTypeByUserIdRequest): Promise<UpdateNotificationTypeByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe/notification')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.notificationTypes !== undefined) {
      body['notificationTypes'] = request.notificationTypes.map((item) => item.toDict());
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
        return new UpdateNotificationTypeByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 購読の購読を解除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unsubscribe(request: UnsubscribeRequest): Promise<UnsubscribeResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new UnsubscribeResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して購読の購読を解除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unsubscribeByUserId(request: UnsubscribeByUserIdRequest): Promise<UnsubscribeByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/room/{roomName}/subscribe')
      .replace('{service}', 'chat')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{roomName}',
        request.roomName ? String(request.roomName) : 'null',
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
        return new UnsubscribeByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
