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
  DescribeProfilesRequest,
  GetProfileRequest,
  GetProfileByUserIdRequest,
  UpdateProfileRequest,
  UpdateProfileByUserIdRequest,
  DeleteProfileByUserIdRequest,
  GetPublicProfileRequest,
  DescribeFollowsRequest,
  DescribeFollowsByUserIdRequest,
  GetFollowRequest,
  GetFollowByUserIdRequest,
  FollowRequest,
  FollowByUserIdRequest,
  UnfollowRequest,
  UnfollowByUserIdRequest,
  DescribeFriendsRequest,
  DescribeFriendsByUserIdRequest,
  GetFriendRequest,
  GetFriendByUserIdRequest,
  DeleteFriendRequest,
  DeleteFriendByUserIdRequest,
  DescribeSendRequestsRequest,
  DescribeSendRequestsByUserIdRequest,
  GetSendRequestRequest,
  GetSendRequestByUserIdRequest,
  SendRequestRequest,
  SendRequestByUserIdRequest,
  DeleteRequestRequest,
  DeleteRequestByUserIdRequest,
  DescribeReceiveRequestsRequest,
  DescribeReceiveRequestsByUserIdRequest,
  GetReceiveRequestRequest,
  GetReceiveRequestByUserIdRequest,
  AcceptRequestRequest,
  AcceptRequestByUserIdRequest,
  RejectRequestRequest,
  RejectRequestByUserIdRequest,
  DescribeBlackListRequest,
  DescribeBlackListByUserIdRequest,
  RegisterBlackListRequest,
  RegisterBlackListByUserIdRequest,
  UnregisterBlackListRequest,
  UnregisterBlackListByUserIdRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeProfilesResult,
  GetProfileResult,
  GetProfileByUserIdResult,
  UpdateProfileResult,
  UpdateProfileByUserIdResult,
  DeleteProfileByUserIdResult,
  GetPublicProfileResult,
  DescribeFollowsResult,
  DescribeFollowsByUserIdResult,
  GetFollowResult,
  GetFollowByUserIdResult,
  FollowResult,
  FollowByUserIdResult,
  UnfollowResult,
  UnfollowByUserIdResult,
  DescribeFriendsResult,
  DescribeFriendsByUserIdResult,
  GetFriendResult,
  GetFriendByUserIdResult,
  DeleteFriendResult,
  DeleteFriendByUserIdResult,
  DescribeSendRequestsResult,
  DescribeSendRequestsByUserIdResult,
  GetSendRequestResult,
  GetSendRequestByUserIdResult,
  SendRequestResult,
  SendRequestByUserIdResult,
  DeleteRequestResult,
  DeleteRequestByUserIdResult,
  DescribeReceiveRequestsResult,
  DescribeReceiveRequestsByUserIdResult,
  GetReceiveRequestResult,
  GetReceiveRequestByUserIdResult,
  AcceptRequestResult,
  AcceptRequestByUserIdResult,
  RejectRequestResult,
  RejectRequestByUserIdResult,
  DescribeBlackListResult,
  DescribeBlackListByUserIdResult,
  RegisterBlackListResult,
  RegisterBlackListByUserIdResult,
  UnregisterBlackListResult,
  UnregisterBlackListByUserIdResult,
} from './result';

import {
  Namespace,
  Profile,
  Follow,
  Friend,
  SendBox,
  Inbox,
  BlackList,
  ResponseCache,
  FollowUser,
  FriendUser,
  FriendRequest,
  PublicProfile,
  ScriptSetting,
  NotificationSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2FriendRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'friend';

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
      .replace('{service}', 'friend')
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
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.followScript !== undefined) {
      body['followScript'] = request.followScript ? request.followScript.toDict() : null;
    }
    if (request.unfollowScript !== undefined) {
      body['unfollowScript'] = request.unfollowScript ? request.unfollowScript.toDict() : null;
    }
    if (request.sendRequestScript !== undefined) {
      body['sendRequestScript'] = request.sendRequestScript ? request.sendRequestScript.toDict() : null;
    }
    if (request.cancelRequestScript !== undefined) {
      body['cancelRequestScript'] = request.cancelRequestScript ? request.cancelRequestScript.toDict() : null;
    }
    if (request.acceptRequestScript !== undefined) {
      body['acceptRequestScript'] = request.acceptRequestScript ? request.acceptRequestScript.toDict() : null;
    }
    if (request.rejectRequestScript !== undefined) {
      body['rejectRequestScript'] = request.rejectRequestScript ? request.rejectRequestScript.toDict() : null;
    }
    if (request.deleteFriendScript !== undefined) {
      body['deleteFriendScript'] = request.deleteFriendScript ? request.deleteFriendScript.toDict() : null;
    }
    if (request.updateProfileScript !== undefined) {
      body['updateProfileScript'] = request.updateProfileScript ? request.updateProfileScript.toDict() : null;
    }
    if (request.followNotification !== undefined) {
      body['followNotification'] = request.followNotification ? request.followNotification.toDict() : null;
    }
    if (request.receiveRequestNotification !== undefined) {
      body['receiveRequestNotification'] = request.receiveRequestNotification ? request.receiveRequestNotification.toDict() : null;
    }
    if (request.acceptRequestNotification !== undefined) {
      body['acceptRequestNotification'] = request.acceptRequestNotification ? request.acceptRequestNotification.toDict() : null;
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
      .replace('{service}', 'friend')
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
      .replace('{service}', 'friend')
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
      .replace('{service}', 'friend')
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
    if (request.followScript !== undefined) {
      body['followScript'] = request.followScript ? request.followScript.toDict() : null;
    }
    if (request.unfollowScript !== undefined) {
      body['unfollowScript'] = request.unfollowScript ? request.unfollowScript.toDict() : null;
    }
    if (request.sendRequestScript !== undefined) {
      body['sendRequestScript'] = request.sendRequestScript ? request.sendRequestScript.toDict() : null;
    }
    if (request.cancelRequestScript !== undefined) {
      body['cancelRequestScript'] = request.cancelRequestScript ? request.cancelRequestScript.toDict() : null;
    }
    if (request.acceptRequestScript !== undefined) {
      body['acceptRequestScript'] = request.acceptRequestScript ? request.acceptRequestScript.toDict() : null;
    }
    if (request.rejectRequestScript !== undefined) {
      body['rejectRequestScript'] = request.rejectRequestScript ? request.rejectRequestScript.toDict() : null;
    }
    if (request.deleteFriendScript !== undefined) {
      body['deleteFriendScript'] = request.deleteFriendScript ? request.deleteFriendScript.toDict() : null;
    }
    if (request.updateProfileScript !== undefined) {
      body['updateProfileScript'] = request.updateProfileScript ? request.updateProfileScript.toDict() : null;
    }
    if (request.followNotification !== undefined) {
      body['followNotification'] = request.followNotification ? request.followNotification.toDict() : null;
    }
    if (request.receiveRequestNotification !== undefined) {
      body['receiveRequestNotification'] = request.receiveRequestNotification ? request.receiveRequestNotification.toDict() : null;
    }
    if (request.acceptRequestNotification !== undefined) {
      body['acceptRequestNotification'] = request.acceptRequestNotification ? request.acceptRequestNotification.toDict() : null;
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
      .replace('{service}', 'friend')
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
   * ユーザーIDを指定してプロフィールの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeProfiles(request: DescribeProfilesRequest): Promise<DescribeProfilesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/profile')
      .replace('{service}', 'friend')
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
        return new DescribeProfilesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロフィールを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProfile(request: GetProfileRequest): Promise<GetProfileResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/profile')
      .replace('{service}', 'friend')
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
        return new GetProfileResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してプロフィールを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProfileByUserId(request: GetProfileByUserIdRequest): Promise<GetProfileByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/profile')
      .replace('{service}', 'friend')
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
        return new GetProfileByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロフィールを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateProfile(request: UpdateProfileRequest): Promise<UpdateProfileResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/profile')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.publicProfile !== undefined && request.publicProfile !== '') {
      body['publicProfile'] = request.publicProfile;
    }
    if (request.followerProfile !== undefined && request.followerProfile !== '') {
      body['followerProfile'] = request.followerProfile;
    }
    if (request.friendProfile !== undefined && request.friendProfile !== '') {
      body['friendProfile'] = request.friendProfile;
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
        return new UpdateProfileResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してプロフィールを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateProfileByUserId(request: UpdateProfileByUserIdRequest): Promise<UpdateProfileByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/profile')
      .replace('{service}', 'friend')
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
    if (request.publicProfile !== undefined && request.publicProfile !== '') {
      body['publicProfile'] = request.publicProfile;
    }
    if (request.followerProfile !== undefined && request.followerProfile !== '') {
      body['followerProfile'] = request.followerProfile;
    }
    if (request.friendProfile !== undefined && request.friendProfile !== '') {
      body['friendProfile'] = request.friendProfile;
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
        return new UpdateProfileByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * プロフィールを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteProfileByUserId(request: DeleteProfileByUserIdRequest): Promise<DeleteProfileByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/profile')
      .replace('{service}', 'friend')
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
        return new DeleteProfileByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 公開プロフィールを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getPublicProfile(request: GetPublicProfileRequest): Promise<GetPublicProfileResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/profile/public')
      .replace('{service}', 'friend')
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
        return new GetPublicProfileResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォローの一覧取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFollows(request: DescribeFollowsRequest): Promise<DescribeFollowsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/follow')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new DescribeFollowsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフォローの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFollowsByUserId(request: DescribeFollowsByUserIdRequest): Promise<DescribeFollowsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/follow')
      .replace('{service}', 'friend')
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
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new DescribeFollowsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォローを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFollow(request: GetFollowRequest): Promise<GetFollowResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/follow/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new GetFollowResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフォローを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFollowByUserId(request: GetFollowByUserIdRequest): Promise<GetFollowByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new GetFollowByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォロー<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public follow(request: FollowRequest): Promise<FollowResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/follow/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new FollowResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してフォロー<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public followByUserId(request: FollowByUserIdRequest): Promise<FollowByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new FollowByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * アンフォロー<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unfollow(request: UnfollowRequest): Promise<UnfollowResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/follow/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new UnfollowResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してアンフォロー<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unfollowByUserId(request: UnfollowByUserIdRequest): Promise<UnfollowByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new UnfollowByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFriends(request: DescribeFriendsRequest): Promise<DescribeFriendsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/friend')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new DescribeFriendsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFriendsByUserId(request: DescribeFriendsByUserIdRequest): Promise<DescribeFriendsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/friend')
      .replace('{service}', 'friend')
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
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new DescribeFriendsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFriend(request: GetFriendRequest): Promise<GetFriendResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/friend/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new GetFriendResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFriendByUserId(request: GetFriendByUserIdRequest): Promise<GetFriendByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/friend/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.withProfile !== undefined ) {
      params['withProfile'] = Boolean(request.withProfile);
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
        return new GetFriendByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteFriend(request: DeleteFriendRequest): Promise<DeleteFriendResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/friend/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new DeleteFriendResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフレンドを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteFriendByUserId(request: DeleteFriendByUserIdRequest): Promise<DeleteFriendByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/friend/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new DeleteFriendByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 送信したフレンドリクエストの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSendRequests(request: DescribeSendRequestsRequest): Promise<DescribeSendRequestsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox')
      .replace('{service}', 'friend')
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
        return new DescribeSendRequestsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して送信したフレンドリクエストの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSendRequestsByUserId(request: DescribeSendRequestsByUserIdRequest): Promise<DescribeSendRequestsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox')
      .replace('{service}', 'friend')
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
        return new DescribeSendRequestsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 送信したフレンドリクエストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getSendRequest(request: GetSendRequestRequest): Promise<GetSendRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new GetSendRequestResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して送信したフレンドリクエストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getSendRequestByUserId(request: GetSendRequestByUserIdRequest): Promise<GetSendRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new GetSendRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フレンドリクエストを送信<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public sendRequest(request: SendRequestRequest): Promise<SendRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new SendRequestResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してフレンドリクエストを送信<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public sendRequestByUserId(request: SendRequestByUserIdRequest): Promise<SendRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new SendRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フレンドリクエストを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRequest(request: DeleteRequestRequest): Promise<DeleteRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new DeleteRequestResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフレンドリクエストを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRequestByUserId(request: DeleteRequestByUserIdRequest): Promise<DeleteRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new DeleteRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 受信したフレンドリクエストの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeReceiveRequests(request: DescribeReceiveRequestsRequest): Promise<DescribeReceiveRequestsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inbox')
      .replace('{service}', 'friend')
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
        return new DescribeReceiveRequestsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して受信したフレンドリクエストの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeReceiveRequestsByUserId(request: DescribeReceiveRequestsByUserIdRequest): Promise<DescribeReceiveRequestsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inbox')
      .replace('{service}', 'friend')
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
        return new DescribeReceiveRequestsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 受信したフレンドリクエストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getReceiveRequest(request: GetReceiveRequestRequest): Promise<GetReceiveRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inbox/{fromUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
        return new GetReceiveRequestResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定して受信したフレンドリクエストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getReceiveRequestByUserId(request: GetReceiveRequestByUserIdRequest): Promise<GetReceiveRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
      .replace('{service}', 'friend')
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
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
        return new GetReceiveRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フレンドリクエストを承諾<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public acceptRequest(request: AcceptRequestRequest): Promise<AcceptRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inbox/{fromUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new AcceptRequestResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してフレンドリクエストを承諾<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public acceptRequestByUserId(request: AcceptRequestByUserIdRequest): Promise<AcceptRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
      .replace('{service}', 'friend')
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
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
    return axios.put(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new AcceptRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フレンドリクエストを拒否<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public rejectRequest(request: RejectRequestRequest): Promise<RejectRequestResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inbox/{fromUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
        return new RejectRequestResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してフレンドリクエストを拒否<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public rejectRequestByUserId(request: RejectRequestByUserIdRequest): Promise<RejectRequestByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
      .replace('{service}', 'friend')
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
        '{fromUserId}',
        request.fromUserId ? String(request.fromUserId) : 'null',
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
        return new RejectRequestByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ブラックリストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBlackList(request: DescribeBlackListRequest): Promise<DescribeBlackListResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/blackList')
      .replace('{service}', 'friend')
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
        return new DescribeBlackListResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してブラックリストを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBlackListByUserId(request: DescribeBlackListByUserIdRequest): Promise<DescribeBlackListByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/blackList')
      .replace('{service}', 'friend')
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
        return new DescribeBlackListByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ブラックリストに登録<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public registerBlackList(request: RegisterBlackListRequest): Promise<RegisterBlackListResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/blackList/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new RegisterBlackListResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザーIDを指定してブラックリストに登録<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public registerBlackListByUserId(request: RegisterBlackListByUserIdRequest): Promise<RegisterBlackListByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/blackList/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new RegisterBlackListByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ブラックリストからユーザを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unregisterBlackList(request: UnregisterBlackListRequest): Promise<UnregisterBlackListResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/blackList/{targetUserId}')
      .replace('{service}', 'friend')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new UnregisterBlackListResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザーIDを指定してブラックリストからユーザを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public unregisterBlackListByUserId(request: UnregisterBlackListByUserIdRequest): Promise<UnregisterBlackListByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/blackList/{targetUserId}')
      .replace('{service}', 'friend')
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
        '{targetUserId}',
        request.targetUserId ? String(request.targetUserId) : 'null',
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
        return new UnregisterBlackListByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
