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
  DescribeMissionTaskModelsRequest,
  GetMissionTaskModelRequest,
  DescribeMissionTaskModelMastersRequest,
  CreateMissionTaskModelMasterRequest,
  GetMissionTaskModelMasterRequest,
  UpdateMissionTaskModelMasterRequest,
  DeleteMissionTaskModelMasterRequest,
  DescribeMissionGroupModelMastersRequest,
  CreateMissionGroupModelMasterRequest,
  GetMissionGroupModelMasterRequest,
  UpdateMissionGroupModelMasterRequest,
  DeleteMissionGroupModelMasterRequest,
  DescribeCounterModelMastersRequest,
  CreateCounterModelMasterRequest,
  GetCounterModelMasterRequest,
  UpdateCounterModelMasterRequest,
  DeleteCounterModelMasterRequest,
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeCounterModelsRequest,
  GetCounterModelRequest,
  DescribeMissionGroupModelsRequest,
  GetMissionGroupModelRequest,
  DescribeCountersRequest,
  DescribeCountersByUserIdRequest,
  IncreaseCounterByUserIdRequest,
  GetCounterRequest,
  GetCounterByUserIdRequest,
  DeleteCounterByUserIdRequest,
  IncreaseByStampSheetRequest,
  DescribeCompletesRequest,
  DescribeCompletesByUserIdRequest,
  CompleteRequest,
  CompleteByUserIdRequest,
  ReceiveByUserIdRequest,
  GetCompleteRequest,
  GetCompleteByUserIdRequest,
  DeleteCompleteByUserIdRequest,
  ReceiveByStampTaskRequest,
  ExportMasterRequest,
  GetCurrentMissionMasterRequest,
  UpdateCurrentMissionMasterRequest,
  UpdateCurrentMissionMasterFromGitHubRequest,
} from './request';

import {
  DescribeMissionTaskModelsResult,
  GetMissionTaskModelResult,
  DescribeMissionTaskModelMastersResult,
  CreateMissionTaskModelMasterResult,
  GetMissionTaskModelMasterResult,
  UpdateMissionTaskModelMasterResult,
  DeleteMissionTaskModelMasterResult,
  DescribeMissionGroupModelMastersResult,
  CreateMissionGroupModelMasterResult,
  GetMissionGroupModelMasterResult,
  UpdateMissionGroupModelMasterResult,
  DeleteMissionGroupModelMasterResult,
  DescribeCounterModelMastersResult,
  CreateCounterModelMasterResult,
  GetCounterModelMasterResult,
  UpdateCounterModelMasterResult,
  DeleteCounterModelMasterResult,
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeCounterModelsResult,
  GetCounterModelResult,
  DescribeMissionGroupModelsResult,
  GetMissionGroupModelResult,
  DescribeCountersResult,
  DescribeCountersByUserIdResult,
  IncreaseCounterByUserIdResult,
  GetCounterResult,
  GetCounterByUserIdResult,
  DeleteCounterByUserIdResult,
  IncreaseByStampSheetResult,
  DescribeCompletesResult,
  DescribeCompletesByUserIdResult,
  CompleteResult,
  CompleteByUserIdResult,
  ReceiveByUserIdResult,
  GetCompleteResult,
  GetCompleteByUserIdResult,
  DeleteCompleteByUserIdResult,
  ReceiveByStampTaskResult,
  ExportMasterResult,
  GetCurrentMissionMasterResult,
  UpdateCurrentMissionMasterResult,
  UpdateCurrentMissionMasterFromGitHubResult,
} from './result';

import {
  ScriptSetting,
  GitHubCheckoutSetting,
  MissionTaskModel,
  MissionTaskModelMaster,
  MissionGroupModelMaster,
  CounterModelMaster,
  CounterScopeModel,
  Config,
  ScopedValue,
  Namespace,
  CounterModel,
  MissionGroupModel,
  Counter,
  LogSetting,
  Complete,
  ResponseCache,
  AcquireAction,
  CurrentMissionMaster,
  NotificationSetting,
} from './model';

import axios from 'axios';

export class Gs2MissionRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'mission';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * ミッションタスクの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMissionTaskModels(request: DescribeMissionTaskModelsRequest): Promise<DescribeMissionTaskModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{missionGroupName}/task')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new DescribeMissionTaskModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッションタスクを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMissionTaskModel(request: GetMissionTaskModelRequest): Promise<GetMissionTaskModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
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
        return new GetMissionTaskModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッションタスクマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMissionTaskModelMasters(request: DescribeMissionTaskModelMastersRequest): Promise<DescribeMissionTaskModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}/task')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new DescribeMissionTaskModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッションタスクマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createMissionTaskModelMaster(request: CreateMissionTaskModelMasterRequest): Promise<CreateMissionTaskModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}/task')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.counterName !== undefined && request.counterName !== '') {
      body['counterName'] = request.counterName;
    }
    if (request.targetValue !== undefined) {
      body['targetValue'] = request.targetValue;
    }
    if (request.completeAcquireActions !== undefined) {
      body['completeAcquireActions'] = request.completeAcquireActions.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
    }
    if (request.premiseMissionTaskName !== undefined && request.premiseMissionTaskName !== '') {
      body['premiseMissionTaskName'] = request.premiseMissionTaskName;
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
        return new CreateMissionTaskModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ミッションタスクマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMissionTaskModelMaster(request: GetMissionTaskModelMasterRequest): Promise<GetMissionTaskModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
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
        return new GetMissionTaskModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッションタスクマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateMissionTaskModelMaster(request: UpdateMissionTaskModelMasterRequest): Promise<UpdateMissionTaskModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.counterName !== undefined && request.counterName !== '') {
      body['counterName'] = request.counterName;
    }
    if (request.targetValue !== undefined) {
      body['targetValue'] = request.targetValue;
    }
    if (request.completeAcquireActions !== undefined) {
      body['completeAcquireActions'] = request.completeAcquireActions.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
    }
    if (request.premiseMissionTaskName !== undefined && request.premiseMissionTaskName !== '') {
      body['premiseMissionTaskName'] = request.premiseMissionTaskName;
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
        return new UpdateMissionTaskModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ミッションタスクマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMissionTaskModelMaster(request: DeleteMissionTaskModelMasterRequest): Promise<DeleteMissionTaskModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
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
        return new DeleteMissionTaskModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッショングループマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMissionGroupModelMasters(request: DescribeMissionGroupModelMastersRequest): Promise<DescribeMissionGroupModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group')
      .replace('{service}', 'mission')
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
        return new DescribeMissionGroupModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッショングループマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createMissionGroupModelMaster(request: CreateMissionGroupModelMasterRequest): Promise<CreateMissionGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group')
      .replace('{service}', 'mission')
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
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.resetType !== undefined && request.resetType !== '') {
      body['resetType'] = request.resetType;
    }
    if (request.resetDayOfMonth !== undefined) {
      body['resetDayOfMonth'] = request.resetDayOfMonth;
    }
    if (request.resetDayOfWeek !== undefined && request.resetDayOfWeek !== '') {
      body['resetDayOfWeek'] = request.resetDayOfWeek;
    }
    if (request.resetHour !== undefined) {
      body['resetHour'] = request.resetHour;
    }
    if (request.completeNotificationNamespaceId !== undefined && request.completeNotificationNamespaceId !== '') {
      body['completeNotificationNamespaceId'] = request.completeNotificationNamespaceId;
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
        return new CreateMissionGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ミッショングループマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMissionGroupModelMaster(request: GetMissionGroupModelMasterRequest): Promise<GetMissionGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new GetMissionGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッショングループマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateMissionGroupModelMaster(request: UpdateMissionGroupModelMasterRequest): Promise<UpdateMissionGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.resetType !== undefined && request.resetType !== '') {
      body['resetType'] = request.resetType;
    }
    if (request.resetDayOfMonth !== undefined) {
      body['resetDayOfMonth'] = request.resetDayOfMonth;
    }
    if (request.resetDayOfWeek !== undefined && request.resetDayOfWeek !== '') {
      body['resetDayOfWeek'] = request.resetDayOfWeek;
    }
    if (request.resetHour !== undefined) {
      body['resetHour'] = request.resetHour;
    }
    if (request.completeNotificationNamespaceId !== undefined && request.completeNotificationNamespaceId !== '') {
      body['completeNotificationNamespaceId'] = request.completeNotificationNamespaceId;
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
        return new UpdateMissionGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ミッショングループマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMissionGroupModelMaster(request: DeleteMissionGroupModelMasterRequest): Promise<DeleteMissionGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new DeleteMissionGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターの種類マスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCounterModelMasters(request: DescribeCounterModelMastersRequest): Promise<DescribeCounterModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/counter')
      .replace('{service}', 'mission')
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
        return new DescribeCounterModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターの種類マスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createCounterModelMaster(request: CreateCounterModelMasterRequest): Promise<CreateCounterModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/counter')
      .replace('{service}', 'mission')
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
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.scopes !== undefined) {
      body['scopes'] = request.scopes.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
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
        return new CreateCounterModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * カウンターの種類マスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCounterModelMaster(request: GetCounterModelMasterRequest): Promise<GetCounterModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new GetCounterModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターの種類マスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCounterModelMaster(request: UpdateCounterModelMasterRequest): Promise<UpdateCounterModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.scopes !== undefined) {
      body['scopes'] = request.scopes.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
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
        return new UpdateCounterModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * カウンターの種類マスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteCounterModelMaster(request: DeleteCounterModelMasterRequest): Promise<DeleteCounterModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new DeleteCounterModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ネームスペースの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'mission')
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
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.missionCompleteScript !== undefined) {
      body['missionCompleteScript'] = request.missionCompleteScript ? request.missionCompleteScript.toDict() : null;
    }
    if (request.counterIncrementScript !== undefined) {
      body['counterIncrementScript'] = request.counterIncrementScript ? request.counterIncrementScript.toDict() : null;
    }
    if (request.receiveRewardsScript !== undefined) {
      body['receiveRewardsScript'] = request.receiveRewardsScript ? request.receiveRewardsScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
      .replace('{service}', 'mission')
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
      .replace('{service}', 'mission')
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
      .replace('{service}', 'mission')
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
    if (request.missionCompleteScript !== undefined) {
      body['missionCompleteScript'] = request.missionCompleteScript ? request.missionCompleteScript.toDict() : null;
    }
    if (request.counterIncrementScript !== undefined) {
      body['counterIncrementScript'] = request.counterIncrementScript ? request.counterIncrementScript.toDict() : null;
    }
    if (request.receiveRewardsScript !== undefined) {
      body['receiveRewardsScript'] = request.receiveRewardsScript ? request.receiveRewardsScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
      .replace('{service}', 'mission')
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
   * カウンターの種類の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCounterModels(request: DescribeCounterModelsRequest): Promise<DescribeCounterModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/counter')
      .replace('{service}', 'mission')
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
        return new DescribeCounterModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターの種類を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCounterModel(request: GetCounterModelRequest): Promise<GetCounterModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new GetCounterModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッショングループの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMissionGroupModels(request: DescribeMissionGroupModelsRequest): Promise<DescribeMissionGroupModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group')
      .replace('{service}', 'mission')
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
        return new DescribeMissionGroupModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッショングループを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMissionGroupModel(request: GetMissionGroupModelRequest): Promise<GetMissionGroupModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new GetMissionGroupModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCounters(request: DescribeCountersRequest): Promise<DescribeCountersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter')
      .replace('{service}', 'mission')
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
        return new DescribeCountersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してカウンターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCountersByUserId(request: DescribeCountersByUserIdRequest): Promise<DescribeCountersByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter')
      .replace('{service}', 'mission')
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
        return new DescribeCountersByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターに加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public increaseCounterByUserId(request: IncreaseCounterByUserIdRequest): Promise<IncreaseCounterByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.value !== undefined) {
      body['value'] = request.value;
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
        return new IncreaseCounterByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * カウンターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCounter(request: GetCounterRequest): Promise<GetCounterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new GetCounterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してカウンターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCounterByUserId(request: GetCounterByUserIdRequest): Promise<GetCounterByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{counterName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new GetCounterByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteCounterByUserId(request: DeleteCounterByUserIdRequest): Promise<DeleteCounterByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{counterName}')
      .replace('{service}', 'mission')
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
        '{counterName}',
        request.counterName ? String(request.counterName) : 'null',
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
        return new DeleteCounterByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * カウンター加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public increaseByStampSheet(request: IncreaseByStampSheetRequest): Promise<IncreaseByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/increase')
      .replace('{service}', 'mission')
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
        return new IncreaseByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 達成状況の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCompletes(request: DescribeCompletesRequest): Promise<DescribeCompletesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/complete')
      .replace('{service}', 'mission')
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
        return new DescribeCompletesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して達成状況の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCompletesByUserId(request: DescribeCompletesByUserIdRequest): Promise<DescribeCompletesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/complete')
      .replace('{service}', 'mission')
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
        return new DescribeCompletesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ミッション達成報酬を受領するためのスタンプシートを発行<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public complete(request: CompleteRequest): Promise<CompleteResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/complete/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
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
        return new CompleteResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 達成状況を新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public completeByUserId(request: CompleteByUserIdRequest): Promise<CompleteByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
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
        return new CompleteByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ミッション達成報酬を受領する<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public receiveByUserId(request: ReceiveByUserIdRequest): Promise<ReceiveByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}/receive')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
      )
      .replace(
        '{missionTaskName}',
        request.missionTaskName ? String(request.missionTaskName) : 'null',
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
        return new ReceiveByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 達成状況を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getComplete(request: GetCompleteRequest): Promise<GetCompleteResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/complete/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new GetCompleteResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して達成状況を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCompleteByUserId(request: GetCompleteByUserIdRequest): Promise<GetCompleteByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}')
      .replace('{service}', 'mission')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new GetCompleteByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 達成状況を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteCompleteByUserId(request: DeleteCompleteByUserIdRequest): Promise<DeleteCompleteByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}')
      .replace('{service}', 'mission')
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
        '{missionGroupName}',
        request.missionGroupName ? String(request.missionGroupName) : 'null',
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
        return new DeleteCompleteByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 達成状況を作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public receiveByStampTask(request: ReceiveByStampTaskRequest): Promise<ReceiveByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/receive')
      .replace('{service}', 'mission')
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
        return new ReceiveByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なミッションのマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'mission')
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
   * 現在有効なミッションを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentMissionMaster(request: GetCurrentMissionMasterRequest): Promise<GetCurrentMissionMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'mission')
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
        return new GetCurrentMissionMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なミッションを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentMissionMaster(request: UpdateCurrentMissionMasterRequest): Promise<UpdateCurrentMissionMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'mission')
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
        return new UpdateCurrentMissionMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なミッションを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentMissionMasterFromGitHub(request: UpdateCurrentMissionMasterFromGitHubRequest): Promise<UpdateCurrentMissionMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'mission')
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
        return new UpdateCurrentMissionMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
