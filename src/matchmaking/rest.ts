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
  DescribeGatheringsRequest,
  CreateGatheringRequest,
  CreateGatheringByUserIdRequest,
  UpdateGatheringRequest,
  UpdateGatheringByUserIdRequest,
  DoMatchmakingByPlayerRequest,
  DoMatchmakingRequest,
  GetGatheringRequest,
  CancelMatchmakingRequest,
  CancelMatchmakingByUserIdRequest,
  DeleteGatheringRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeGatheringsResult,
  CreateGatheringResult,
  CreateGatheringByUserIdResult,
  UpdateGatheringResult,
  UpdateGatheringByUserIdResult,
  DoMatchmakingByPlayerResult,
  DoMatchmakingResult,
  GetGatheringResult,
  CancelMatchmakingResult,
  CancelMatchmakingByUserIdResult,
  DeleteGatheringResult,
} from './result';

import {
  Namespace,
  Gathering,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  AttributeRange,
  CapacityOfRole,
  Attribute,
  Player,
} from './model';

import axios from 'axios';

export class Gs2MatchmakingRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'matchmaking';

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
      .replace('{service}', 'matchmaking')
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
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.createGatheringTriggerType !== undefined && request.createGatheringTriggerType !== '') {
      body['createGatheringTriggerType'] = request.createGatheringTriggerType;
    }
    if (request.createGatheringTriggerRealtimeNamespaceId !== undefined && request.createGatheringTriggerRealtimeNamespaceId !== '') {
      body['createGatheringTriggerRealtimeNamespaceId'] = request.createGatheringTriggerRealtimeNamespaceId;
    }
    if (request.createGatheringTriggerScriptId !== undefined && request.createGatheringTriggerScriptId !== '') {
      body['createGatheringTriggerScriptId'] = request.createGatheringTriggerScriptId;
    }
    if (request.completeMatchmakingTriggerType !== undefined && request.completeMatchmakingTriggerType !== '') {
      body['completeMatchmakingTriggerType'] = request.completeMatchmakingTriggerType;
    }
    if (request.completeMatchmakingTriggerRealtimeNamespaceId !== undefined && request.completeMatchmakingTriggerRealtimeNamespaceId !== '') {
      body['completeMatchmakingTriggerRealtimeNamespaceId'] = request.completeMatchmakingTriggerRealtimeNamespaceId;
    }
    if (request.completeMatchmakingTriggerScriptId !== undefined && request.completeMatchmakingTriggerScriptId !== '') {
      body['completeMatchmakingTriggerScriptId'] = request.completeMatchmakingTriggerScriptId;
    }
    if (request.joinNotification !== undefined) {
      body['joinNotification'] = request.joinNotification ? request.joinNotification.toDict() : null;
    }
    if (request.leaveNotification !== undefined) {
      body['leaveNotification'] = request.leaveNotification ? request.leaveNotification.toDict() : null;
    }
    if (request.completeNotification !== undefined) {
      body['completeNotification'] = request.completeNotification ? request.completeNotification.toDict() : null;
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
      .replace('{service}', 'matchmaking')
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
      .replace('{service}', 'matchmaking')
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
      .replace('{service}', 'matchmaking')
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
    if (request.createGatheringTriggerType !== undefined && request.createGatheringTriggerType !== '') {
      body['createGatheringTriggerType'] = request.createGatheringTriggerType;
    }
    if (request.createGatheringTriggerRealtimeNamespaceId !== undefined && request.createGatheringTriggerRealtimeNamespaceId !== '') {
      body['createGatheringTriggerRealtimeNamespaceId'] = request.createGatheringTriggerRealtimeNamespaceId;
    }
    if (request.createGatheringTriggerScriptId !== undefined && request.createGatheringTriggerScriptId !== '') {
      body['createGatheringTriggerScriptId'] = request.createGatheringTriggerScriptId;
    }
    if (request.completeMatchmakingTriggerType !== undefined && request.completeMatchmakingTriggerType !== '') {
      body['completeMatchmakingTriggerType'] = request.completeMatchmakingTriggerType;
    }
    if (request.completeMatchmakingTriggerRealtimeNamespaceId !== undefined && request.completeMatchmakingTriggerRealtimeNamespaceId !== '') {
      body['completeMatchmakingTriggerRealtimeNamespaceId'] = request.completeMatchmakingTriggerRealtimeNamespaceId;
    }
    if (request.completeMatchmakingTriggerScriptId !== undefined && request.completeMatchmakingTriggerScriptId !== '') {
      body['completeMatchmakingTriggerScriptId'] = request.completeMatchmakingTriggerScriptId;
    }
    if (request.joinNotification !== undefined) {
      body['joinNotification'] = request.joinNotification ? request.joinNotification.toDict() : null;
    }
    if (request.leaveNotification !== undefined) {
      body['leaveNotification'] = request.leaveNotification ? request.leaveNotification.toDict() : null;
    }
    if (request.completeNotification !== undefined) {
      body['completeNotification'] = request.completeNotification ? request.completeNotification.toDict() : null;
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
      .replace('{service}', 'matchmaking')
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
   * ギャザリングの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeGatherings(request: DescribeGatheringsRequest): Promise<DescribeGatheringsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
      .replace('{service}', 'matchmaking')
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
        return new DescribeGatheringsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ギャザリングを作成して募集を開始<br>
   *   <br>
   *   `募集条件` には、作成したギャザリングに参加を許可する各属性値の範囲を指定します。<br>
   *   <br>
   *   たとえば、同一ゲームモードを希望するプレイヤーを募集したい場合は、ゲームモードに対応した属性値が完全一致する参加条件プレイヤーとマッチメイキングするように<br>
   *   `属性名：ゲームモード` `属性最小値: ゲームモードを表す数値` `属性最大値: ゲームモードを表す数値`<br>
   *   とすることで、同一ゲームモードを希望するプレイヤー同士をマッチメイキングできます。<br>
   *   <br>
   *   他にレーティングをベースにしたマッチメイキングを実施したい場合は、<br>
   *   ルーム作成者のレーティング値を中心とした属性値の範囲を指定することで、レーティング値の近いプレイヤー同士をマッチメイキングできます。<br>
   *   この `募集条件` はあとで更新することができますので、徐々に条件を緩和していくことができます。<br>
   *   <br>
   *   ロール とは 盾役1人・回復役1人・攻撃役2人 などの役割ごとに募集人数を設定したい場合に使用します。<br>
   *   ロールにはエイリアスを指定できます。<br>
   *   たとえば、盾役は パラディン と ナイト の2種類の `ジョブ` に更に分類できるとします。<br>
   *   この場合、ロール名 に `盾役` エイリアス に `パラディン` `ナイト` として募集を出すようにゲームを実装します。<br>
   *   そして、プレイヤーは自分自身の `ジョブ` を自身のプレイヤー情報のロールに指定します。<br>
   *   <br>
   *   こうすることで、募集条件が `盾役` になっているギャザリングには `パラディン` も `ナイト` も参加できます。<br>
   *   一方で、ギャザリングを作成するときに、 `パラディン` だけ募集したくて、 `ナイト` を募集したくない場合は、<br>
   *   募集するロール名に `パラディン` を直接指定したり、エイリアスに `ナイト` を含めないようにすることで実現できます。<br>
   *   <br>
   *   `参加者` の `募集人数` はプレイヤーの募集人数を指定します。ロール名を指定することで、ロール名ごとの募集人数を設定できます。<br>
   *   <br>
   *   `参加者` の `参加者のプレイヤー情報リスト` には事前にプレイヤー間でパーティを構築している場合や、参加者が離脱したあとの追加募集で使用します。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createGathering(request: CreateGatheringRequest): Promise<CreateGatheringResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.player !== undefined) {
      body['player'] = request.player ? request.player.toDict() : null;
    }
    if (request.attributeRanges !== undefined) {
      body['attributeRanges'] = request.attributeRanges.map((item) => item.toDict());
    }
    if (request.capacityOfRoles !== undefined) {
      body['capacityOfRoles'] = request.capacityOfRoles.map((item) => item.toDict());
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
    }
    if (request.expiresAt !== undefined) {
      body['expiresAt'] = request.expiresAt;
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
        return new CreateGatheringResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ギャザリングを作成して募集を開始<br>
   *   <br>
   *   `募集条件` には、作成したギャザリングに参加を許可する各属性値の範囲を指定します。<br>
   *   <br>
   *   たとえば、同一ゲームモードを希望するプレイヤーを募集したい場合は、ゲームモードに対応した属性値が完全一致する参加条件プレイヤーとマッチメイキングするように<br>
   *   `属性名：ゲームモード` `属性最小値: ゲームモードを表す数値` `属性最大値: ゲームモードを表す数値`<br>
   *   とすることで、同一ゲームモードを希望するプレイヤー同士をマッチメイキングできます。<br>
   *   <br>
   *   他にレーティングをベースにしたマッチメイキングを実施したい場合は、<br>
   *   ルーム作成者のレーティング値を中心とした属性値の範囲を指定することで、レーティング値の近いプレイヤー同士をマッチメイキングできます。<br>
   *   この `募集条件` はあとで更新することができますので、徐々に条件を緩和していくことができます。<br>
   *   <br>
   *   ロール とは 盾役1人・回復役1人・攻撃役2人 などの役割ごとに募集人数を設定したい場合に使用します。<br>
   *   ロールにはエイリアスを指定できます。<br>
   *   たとえば、盾役は パラディン と ナイト の2種類の `ジョブ` に更に分類できるとします。<br>
   *   この場合、ロール名 に `盾役` エイリアス に `パラディン` `ナイト` として募集を出すようにゲームを実装します。<br>
   *   そして、プレイヤーは自分自身の `ジョブ` を自身のプレイヤー情報のロールに指定します。<br>
   *   <br>
   *   こうすることで、募集条件が `盾役` になっているギャザリングには `パラディン` も `ナイト` も参加できます。<br>
   *   一方で、ギャザリングを作成するときに、 `パラディン` だけ募集したくて、 `ナイト` を募集したくない場合は、<br>
   *   募集するロール名に `パラディン` を直接指定したり、エイリアスに `ナイト` を含めないようにすることで実現できます。<br>
   *   <br>
   *   `参加者` の `募集人数` はプレイヤーの募集人数を指定します。ロール名を指定することで、ロール名ごとの募集人数を設定できます。<br>
   *   <br>
   *   `参加者` の `参加者のプレイヤー情報リスト` には事前にプレイヤー間でパーティを構築している場合や、参加者が離脱したあとの追加募集で使用します。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createGatheringByUserId(request: CreateGatheringByUserIdRequest): Promise<CreateGatheringByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/user/{userId}')
      .replace('{service}', 'matchmaking')
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
    if (request.player !== undefined) {
      body['player'] = request.player ? request.player.toDict() : null;
    }
    if (request.attributeRanges !== undefined) {
      body['attributeRanges'] = request.attributeRanges.map((item) => item.toDict());
    }
    if (request.capacityOfRoles !== undefined) {
      body['capacityOfRoles'] = request.capacityOfRoles.map((item) => item.toDict());
    }
    if (request.allowUserIds !== undefined) {
      body['allowUserIds'] = request.allowUserIds;
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
        return new CreateGatheringByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ギャザリングを更新する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateGathering(request: UpdateGatheringRequest): Promise<UpdateGatheringResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.attributeRanges !== undefined) {
      body['attributeRanges'] = request.attributeRanges.map((item) => item.toDict());
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
        return new UpdateGatheringResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ギャザリングを更新する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateGatheringByUserId(request: UpdateGatheringByUserIdRequest): Promise<UpdateGatheringByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.attributeRanges !== undefined) {
      body['attributeRanges'] = request.attributeRanges.map((item) => item.toDict());
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
        return new UpdateGatheringByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * Player が参加できるギャザリングを探して参加する<br>
   *   <br>
   *   一定時間 検索を行い、対象が見つからなかったときには `マッチメイキングの状態を保持するトークン` を返す。<br>
   *   次回 `マッチメイキングの状態を保持するトークン` をつけて再度リクエストを出すことで、前回の続きから検索処理を再開できる。<br>
   *   すべてのギャザリングを検索したが、参加できるギャザリングが存在しなかった場合はギャザリングもトークンもどちらも null が応答される。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public doMatchmakingByPlayer(request: DoMatchmakingByPlayerRequest): Promise<DoMatchmakingByPlayerResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/player/do')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.player !== undefined) {
      body['player'] = request.player ? request.player.toDict() : null;
    }
    if (request.matchmakingContextToken !== undefined && request.matchmakingContextToken !== '') {
      body['matchmakingContextToken'] = request.matchmakingContextToken;
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
        return new DoMatchmakingByPlayerResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 自分が参加できるギャザリングを探して参加する<br>
   *   <br>
   *   一定時間 検索を行い、対象が見つからなかったときには `マッチメイキングの状態を保持するトークン` を返す。<br>
   *   次回 `マッチメイキングの状態を保持するトークン` をつけて再度リクエストを出すことで、前回の続きから検索処理を再開できる。<br>
   *   すべてのギャザリングを検索したが、参加できるギャザリングが存在しなかった場合はギャザリングもトークンもどちらも null が応答される。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public doMatchmaking(request: DoMatchmakingRequest): Promise<DoMatchmakingResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/do')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.player !== undefined) {
      body['player'] = request.player ? request.player.toDict() : null;
    }
    if (request.matchmakingContextToken !== undefined && request.matchmakingContextToken !== '') {
      body['matchmakingContextToken'] = request.matchmakingContextToken;
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
        return new DoMatchmakingResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ギャザリングを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getGathering(request: GetGatheringRequest): Promise<GetGatheringResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
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
        return new GetGatheringResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * マッチメイキングをキャンセルする<br>
   *   <br>
   *   ギャザリングから離脱する前にマッチメイキングが完了した場合は、NotFoundException(404エラー) が発生し失敗します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public cancelMatchmaking(request: CancelMatchmakingRequest): Promise<CancelMatchmakingResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/me')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
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
        return new CancelMatchmakingResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してマッチメイキングをキャンセルする<br>
   *   <br>
   *   ギャザリングから離脱する前にマッチメイキングが完了した場合は、NotFoundException(404エラー) が発生し失敗します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public cancelMatchmakingByUserId(request: CancelMatchmakingByUserIdRequest): Promise<CancelMatchmakingByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
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
        return new CancelMatchmakingByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ギャザリングを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteGathering(request: DeleteGatheringRequest): Promise<DeleteGatheringResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
      .replace('{service}', 'matchmaking')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{gatheringName}',
        request.gatheringName ? String(request.gatheringName) : 'null',
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
        return new DeleteGatheringResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
