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
  DescribeEventMastersRequest,
  CreateEventMasterRequest,
  GetEventMasterRequest,
  UpdateEventMasterRequest,
  DeleteEventMasterRequest,
  DescribeTriggersRequest,
  DescribeTriggersByUserIdRequest,
  GetTriggerRequest,
  GetTriggerByUserIdRequest,
  TriggerByUserIdRequest,
  DeleteTriggerRequest,
  DeleteTriggerByUserIdRequest,
  DescribeEventsRequest,
  DescribeEventsByUserIdRequest,
  DescribeRawEventsRequest,
  GetEventRequest,
  GetEventByUserIdRequest,
  GetRawEventRequest,
  ExportMasterRequest,
  GetCurrentEventMasterRequest,
  UpdateCurrentEventMasterRequest,
  UpdateCurrentEventMasterFromGitHubRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeEventMastersResult,
  CreateEventMasterResult,
  GetEventMasterResult,
  UpdateEventMasterResult,
  DeleteEventMasterResult,
  DescribeTriggersResult,
  DescribeTriggersByUserIdResult,
  GetTriggerResult,
  GetTriggerByUserIdResult,
  TriggerByUserIdResult,
  DeleteTriggerResult,
  DeleteTriggerByUserIdResult,
  DescribeEventsResult,
  DescribeEventsByUserIdResult,
  DescribeRawEventsResult,
  GetEventResult,
  GetEventByUserIdResult,
  GetRawEventResult,
  ExportMasterResult,
  GetCurrentEventMasterResult,
  UpdateCurrentEventMasterResult,
  UpdateCurrentEventMasterFromGitHubResult,
} from './result';

import {
  Namespace,
  EventMaster,
  Trigger,
  Event,
  CurrentEventMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2ScheduleRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'schedule';

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
      .replace('{service}', 'schedule')
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
      .replace('{service}', 'schedule')
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
   * ネームスペースの状態を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'schedule')
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
      .replace('{service}', 'schedule')
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
      .replace('{service}', 'schedule')
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
      .replace('{service}', 'schedule')
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
   * イベントマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeEventMasters(request: DescribeEventMastersRequest): Promise<DescribeEventMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/event')
      .replace('{service}', 'schedule')
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
        return new DescribeEventMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createEventMaster(request: CreateEventMasterRequest): Promise<CreateEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/event')
      .replace('{service}', 'schedule')
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
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.scheduleType !== undefined && request.scheduleType !== '') {
      body['scheduleType'] = request.scheduleType;
    }
    if (request.absoluteBegin !== undefined) {
      body['absoluteBegin'] = request.absoluteBegin;
    }
    if (request.absoluteEnd !== undefined) {
      body['absoluteEnd'] = request.absoluteEnd;
    }
    if (request.repeatType !== undefined && request.repeatType !== '') {
      body['repeatType'] = request.repeatType;
    }
    if (request.repeatBeginDayOfMonth !== undefined) {
      body['repeatBeginDayOfMonth'] = request.repeatBeginDayOfMonth;
    }
    if (request.repeatEndDayOfMonth !== undefined) {
      body['repeatEndDayOfMonth'] = request.repeatEndDayOfMonth;
    }
    if (request.repeatBeginDayOfWeek !== undefined && request.repeatBeginDayOfWeek !== '') {
      body['repeatBeginDayOfWeek'] = request.repeatBeginDayOfWeek;
    }
    if (request.repeatEndDayOfWeek !== undefined && request.repeatEndDayOfWeek !== '') {
      body['repeatEndDayOfWeek'] = request.repeatEndDayOfWeek;
    }
    if (request.repeatBeginHour !== undefined) {
      body['repeatBeginHour'] = request.repeatBeginHour;
    }
    if (request.repeatEndHour !== undefined) {
      body['repeatEndHour'] = request.repeatEndHour;
    }
    if (request.relativeTriggerName !== undefined && request.relativeTriggerName !== '') {
      body['relativeTriggerName'] = request.relativeTriggerName;
    }
    if (request.relativeDuration !== undefined) {
      body['relativeDuration'] = request.relativeDuration;
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
        return new CreateEventMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * イベントマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getEventMaster(request: GetEventMasterRequest): Promise<GetEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
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
        return new GetEventMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateEventMaster(request: UpdateEventMasterRequest): Promise<UpdateEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.scheduleType !== undefined && request.scheduleType !== '') {
      body['scheduleType'] = request.scheduleType;
    }
    if (request.absoluteBegin !== undefined) {
      body['absoluteBegin'] = request.absoluteBegin;
    }
    if (request.absoluteEnd !== undefined) {
      body['absoluteEnd'] = request.absoluteEnd;
    }
    if (request.repeatType !== undefined && request.repeatType !== '') {
      body['repeatType'] = request.repeatType;
    }
    if (request.repeatBeginDayOfMonth !== undefined) {
      body['repeatBeginDayOfMonth'] = request.repeatBeginDayOfMonth;
    }
    if (request.repeatEndDayOfMonth !== undefined) {
      body['repeatEndDayOfMonth'] = request.repeatEndDayOfMonth;
    }
    if (request.repeatBeginDayOfWeek !== undefined && request.repeatBeginDayOfWeek !== '') {
      body['repeatBeginDayOfWeek'] = request.repeatBeginDayOfWeek;
    }
    if (request.repeatEndDayOfWeek !== undefined && request.repeatEndDayOfWeek !== '') {
      body['repeatEndDayOfWeek'] = request.repeatEndDayOfWeek;
    }
    if (request.repeatBeginHour !== undefined) {
      body['repeatBeginHour'] = request.repeatBeginHour;
    }
    if (request.repeatEndHour !== undefined) {
      body['repeatEndHour'] = request.repeatEndHour;
    }
    if (request.relativeTriggerName !== undefined && request.relativeTriggerName !== '') {
      body['relativeTriggerName'] = request.relativeTriggerName;
    }
    if (request.relativeDuration !== undefined) {
      body['relativeDuration'] = request.relativeDuration;
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
        return new UpdateEventMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * イベントマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteEventMaster(request: DeleteEventMasterRequest): Promise<DeleteEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
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
        return new DeleteEventMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * トリガーの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeTriggers(request: DescribeTriggersRequest): Promise<DescribeTriggersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/trigger')
      .replace('{service}', 'schedule')
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
        return new DescribeTriggersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してトリガーの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeTriggersByUserId(request: DescribeTriggersByUserIdRequest): Promise<DescribeTriggersByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/trigger')
      .replace('{service}', 'schedule')
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
        return new DescribeTriggersByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * トリガーを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getTrigger(request: GetTriggerRequest): Promise<GetTriggerResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/trigger/{triggerName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{triggerName}',
        request.triggerName ? String(request.triggerName) : 'null',
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
        return new GetTriggerResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してトリガーを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getTriggerByUserId(request: GetTriggerByUserIdRequest): Promise<GetTriggerByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/trigger/{triggerName}')
      .replace('{service}', 'schedule')
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
        '{triggerName}',
        request.triggerName ? String(request.triggerName) : 'null',
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
        return new GetTriggerByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してトリガーを登録<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public triggerByUserId(request: TriggerByUserIdRequest): Promise<TriggerByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/trigger/{triggerName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{triggerName}',
        request.triggerName ? String(request.triggerName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.triggerStrategy !== undefined && request.triggerStrategy !== '') {
      body['triggerStrategy'] = request.triggerStrategy;
    }
    if (request.ttl !== undefined) {
      body['ttl'] = request.ttl;
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
        return new TriggerByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * トリガーを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteTrigger(request: DeleteTriggerRequest): Promise<DeleteTriggerResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/trigger/{triggerName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{triggerName}',
        request.triggerName ? String(request.triggerName) : 'null',
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
        return new DeleteTriggerResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してトリガーを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteTriggerByUserId(request: DeleteTriggerByUserIdRequest): Promise<DeleteTriggerByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/trigger/{triggerName}')
      .replace('{service}', 'schedule')
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
        '{triggerName}',
        request.triggerName ? String(request.triggerName) : 'null',
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
        return new DeleteTriggerByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/event')
      .replace('{service}', 'schedule')
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
        return new DescribeEventsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してイベントの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeEventsByUserId(request: DescribeEventsByUserIdRequest): Promise<DescribeEventsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/event')
      .replace('{service}', 'schedule')
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
        return new DescribeEventsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeRawEvents(request: DescribeRawEventsRequest): Promise<DescribeRawEventsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/event')
      .replace('{service}', 'schedule')
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
        return new DescribeRawEventsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getEvent(request: GetEventRequest): Promise<GetEventResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
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
        return new GetEventResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してイベントを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getEventByUserId(request: GetEventByUserIdRequest): Promise<GetEventByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
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
        return new GetEventByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * イベントを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getRawEvent(request: GetRawEventRequest): Promise<GetRawEventResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/event/{eventName}')
      .replace('{service}', 'schedule')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{eventName}',
        request.eventName ? String(request.eventName) : 'null',
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
        return new GetRawEventResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なイベントスケジュールマスターのマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'schedule')
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
   * 現在有効なイベントスケジュールマスターを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentEventMaster(request: GetCurrentEventMasterRequest): Promise<GetCurrentEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'schedule')
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
        return new GetCurrentEventMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なイベントスケジュールマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentEventMaster(request: UpdateCurrentEventMasterRequest): Promise<UpdateCurrentEventMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'schedule')
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
        return new UpdateCurrentEventMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なイベントスケジュールマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentEventMasterFromGitHub(request: UpdateCurrentEventMasterFromGitHubRequest): Promise<UpdateCurrentEventMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'schedule')
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
        return new UpdateCurrentEventMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
