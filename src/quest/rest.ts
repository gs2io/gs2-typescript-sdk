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
  DescribeQuestGroupModelMastersRequest,
  CreateQuestGroupModelMasterRequest,
  GetQuestGroupModelMasterRequest,
  UpdateQuestGroupModelMasterRequest,
  DeleteQuestGroupModelMasterRequest,
  DescribeQuestModelMastersRequest,
  CreateQuestModelMasterRequest,
  GetQuestModelMasterRequest,
  UpdateQuestModelMasterRequest,
  DeleteQuestModelMasterRequest,
  ExportMasterRequest,
  GetCurrentQuestMasterRequest,
  UpdateCurrentQuestMasterRequest,
  UpdateCurrentQuestMasterFromGitHubRequest,
  DescribeProgressesByUserIdRequest,
  CreateProgressByUserIdRequest,
  GetProgressRequest,
  GetProgressByUserIdRequest,
  StartRequest,
  StartByUserIdRequest,
  EndRequest,
  EndByUserIdRequest,
  DeleteProgressRequest,
  DeleteProgressByUserIdRequest,
  CreateProgressByStampSheetRequest,
  DeleteProgressByStampTaskRequest,
  DescribeCompletedQuestListsRequest,
  DescribeCompletedQuestListsByUserIdRequest,
  GetCompletedQuestListRequest,
  GetCompletedQuestListByUserIdRequest,
  DeleteCompletedQuestListByUserIdRequest,
  DescribeQuestGroupModelsRequest,
  GetQuestGroupModelRequest,
  DescribeQuestModelsRequest,
  GetQuestModelRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeQuestGroupModelMastersResult,
  CreateQuestGroupModelMasterResult,
  GetQuestGroupModelMasterResult,
  UpdateQuestGroupModelMasterResult,
  DeleteQuestGroupModelMasterResult,
  DescribeQuestModelMastersResult,
  CreateQuestModelMasterResult,
  GetQuestModelMasterResult,
  UpdateQuestModelMasterResult,
  DeleteQuestModelMasterResult,
  ExportMasterResult,
  GetCurrentQuestMasterResult,
  UpdateCurrentQuestMasterResult,
  UpdateCurrentQuestMasterFromGitHubResult,
  DescribeProgressesByUserIdResult,
  CreateProgressByUserIdResult,
  GetProgressResult,
  GetProgressByUserIdResult,
  StartResult,
  StartByUserIdResult,
  EndResult,
  EndByUserIdResult,
  DeleteProgressResult,
  DeleteProgressByUserIdResult,
  CreateProgressByStampSheetResult,
  DeleteProgressByStampTaskResult,
  DescribeCompletedQuestListsResult,
  DescribeCompletedQuestListsByUserIdResult,
  GetCompletedQuestListResult,
  GetCompletedQuestListByUserIdResult,
  DeleteCompletedQuestListByUserIdResult,
  DescribeQuestGroupModelsResult,
  GetQuestGroupModelResult,
  DescribeQuestModelsResult,
  GetQuestModelResult,
} from './result';

import {
  Namespace,
  QuestGroupModelMaster,
  QuestModelMaster,
  CurrentQuestMaster,
  ResponseCache,
  Contents,
  ConsumeAction,
  AcquireAction,
  Reward,
  Config,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
  Progress,
  CompletedQuestList,
  QuestGroupModel,
  QuestModel,
} from './model';

import axios from 'axios';

export class Gs2QuestRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'quest';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * クエストを分類するカテゴリーの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'quest')
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
   * クエストを分類するカテゴリーを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.startQuestScript !== undefined) {
      body['startQuestScript'] = request.startQuestScript ? request.startQuestScript.toDict() : null;
    }
    if (request.completeQuestScript !== undefined) {
      body['completeQuestScript'] = request.completeQuestScript ? request.completeQuestScript.toDict() : null;
    }
    if (request.failedQuestScript !== undefined) {
      body['failedQuestScript'] = request.failedQuestScript ? request.failedQuestScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
   * クエストを分類するカテゴリーの状態を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespaceStatus(request: GetNamespaceStatusRequest): Promise<GetNamespaceStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
      .replace('{service}', 'quest')
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
   * クエストを分類するカテゴリーを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'quest')
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
   * クエストを分類するカテゴリーを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'quest')
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
    if (request.startQuestScript !== undefined) {
      body['startQuestScript'] = request.startQuestScript ? request.startQuestScript.toDict() : null;
    }
    if (request.completeQuestScript !== undefined) {
      body['completeQuestScript'] = request.completeQuestScript ? request.completeQuestScript.toDict() : null;
    }
    if (request.failedQuestScript !== undefined) {
      body['failedQuestScript'] = request.failedQuestScript ? request.failedQuestScript.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
   * クエストを分類するカテゴリーを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
      .replace('{service}', 'quest')
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
   * クエストグループマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeQuestGroupModelMasters(request: DescribeQuestGroupModelMastersRequest): Promise<DescribeQuestGroupModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group')
      .replace('{service}', 'quest')
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
        return new DescribeQuestGroupModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストグループマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createQuestGroupModelMaster(request: CreateQuestGroupModelMasterRequest): Promise<CreateQuestGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group')
      .replace('{service}', 'quest')
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
        return new CreateQuestGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエストグループマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getQuestGroupModelMaster(request: GetQuestGroupModelMasterRequest): Promise<GetQuestGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new GetQuestGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストグループマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateQuestGroupModelMaster(request: UpdateQuestGroupModelMasterRequest): Promise<UpdateQuestGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
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
        return new UpdateQuestGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエストグループマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteQuestGroupModelMaster(request: DeleteQuestGroupModelMasterRequest): Promise<DeleteQuestGroupModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new DeleteQuestGroupModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストモデルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeQuestModelMasters(request: DescribeQuestModelMastersRequest): Promise<DescribeQuestModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}/quest')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new DescribeQuestModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストモデルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createQuestModelMaster(request: CreateQuestModelMasterRequest): Promise<CreateQuestModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}/quest')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
    if (request.contents !== undefined) {
      body['contents'] = request.contents.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
    }
    if (request.consumeActions !== undefined) {
      body['consumeActions'] = request.consumeActions.map((item) => item.toDict());
    }
    if (request.failedAcquireActions !== undefined) {
      body['failedAcquireActions'] = request.failedAcquireActions.map((item) => item.toDict());
    }
    if (request.premiseQuestNames !== undefined) {
      body['premiseQuestNames'] = request.premiseQuestNames;
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
        return new CreateQuestModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエストモデルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getQuestModelMaster(request: GetQuestModelMasterRequest): Promise<GetQuestModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}/quest/{questName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
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
        return new GetQuestModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストモデルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateQuestModelMaster(request: UpdateQuestModelMasterRequest): Promise<UpdateQuestModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}/quest/{questName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.contents !== undefined) {
      body['contents'] = request.contents.map((item) => item.toDict());
    }
    if (request.challengePeriodEventId !== undefined && request.challengePeriodEventId !== '') {
      body['challengePeriodEventId'] = request.challengePeriodEventId;
    }
    if (request.consumeActions !== undefined) {
      body['consumeActions'] = request.consumeActions.map((item) => item.toDict());
    }
    if (request.failedAcquireActions !== undefined) {
      body['failedAcquireActions'] = request.failedAcquireActions.map((item) => item.toDict());
    }
    if (request.premiseQuestNames !== undefined) {
      body['premiseQuestNames'] = request.premiseQuestNames;
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
        return new UpdateQuestModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエストモデルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteQuestModelMaster(request: DeleteQuestModelMasterRequest): Promise<DeleteQuestModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/group/{questGroupName}/quest/{questName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
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
        return new DeleteQuestModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なクエストマスターのマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'quest')
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
   * 現在有効なクエストマスターを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentQuestMaster(request: GetCurrentQuestMasterRequest): Promise<GetCurrentQuestMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'quest')
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
        return new GetCurrentQuestMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なクエストマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentQuestMaster(request: UpdateCurrentQuestMasterRequest): Promise<UpdateCurrentQuestMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'quest')
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
        return new UpdateCurrentQuestMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なクエストマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentQuestMasterFromGitHub(request: UpdateCurrentQuestMasterFromGitHubRequest): Promise<UpdateCurrentQuestMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'quest')
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
        return new UpdateCurrentQuestMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエスト挑戦の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeProgressesByUserId(request: DescribeProgressesByUserIdRequest): Promise<DescribeProgressesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/progress')
      .replace('{service}', 'quest')
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
        return new DescribeProgressesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト挑戦を作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createProgressByUserId(request: CreateProgressByUserIdRequest): Promise<CreateProgressByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/progress')
      .replace('{service}', 'quest')
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
    if (request.questModelId !== undefined && request.questModelId !== '') {
      body['questModelId'] = request.questModelId;
    }
    if (request.force !== undefined) {
      body['force'] = request.force;
    }
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
        return new CreateProgressByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエスト挑戦を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProgress(request: GetProgressRequest): Promise<GetProgressResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/progress')
      .replace('{service}', 'quest')
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
        return new GetProgressResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト挑戦を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProgressByUserId(request: GetProgressByUserIdRequest): Promise<GetProgressByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/progress')
      .replace('{service}', 'quest')
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
        return new GetProgressByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストを開始<br>
   *   <br>
   *   同一カテゴリ内でゲームプレイヤーは同時に1つのクエストを実行できます。<br>
   *   すでに同一カテゴリ内で実行中のクエストがある場合、このAPIはエラーを返します。<br>
   *   進行中のクエストを取得するAPIを呼び出すことで、クエストを再開するために必要な情報を得ることができます。<br>
   *   強制的にクエストを開始するには force パラメータに true を指定することで強制的にクエストを開始できます。<br>
   *   <br>
   *   クエストが正常に開始できた場合、Progress オブジェクトを応答します。<br>
   *   Progress オブジェクトはクエストを実行するために必要ないくつかの情報を応答します。<br>
   *   <br>
   *   transactionId は実行中のクエスト固有のIDです。<br>
   *   クエストの完了報告にはこのIDを指定する必要があります。<br>
   *   <br>
   *   randomSeed はクエストの内容を決定するために使用できる乱数シードです。<br>
   *   クエストを開始するたびに異なる乱数が払い出されますので、この値をシード値としてゲームを進行させることで<br>
   *   クエスト中にアプリケーションを強制終了したとしても同一条件で再開することができます。<br>
   *   <br>
   *   rewards にはこのクエストにおいて入手可能な報酬とその数量の"最大値"が得られます。<br>
   *   クエストの完了報告にも rewards を渡すことができ、そこでクエスト中に実際に入手したアイテムの数量を指定します。<br>
   *   詳細はクエストの完了報告APIのドキュメントを参照してください。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public start(request: StartRequest): Promise<StartResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/progress/group/{questGroupName}/quest/{questName}/start')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.force !== undefined) {
      body['force'] = request.force;
    }
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
        return new StartResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してクエストを開始<br>
   *   <br>
   *   同一カテゴリ内でゲームプレイヤーは同時に1つのクエストを実行できます。<br>
   *   すでに同一カテゴリ内で実行中のクエストがある場合、このAPIはエラーを返します。<br>
   *   進行中のクエストを取得するAPIを呼び出すことで、クエストを再開するために必要な情報を得ることができます。<br>
   *   強制的にクエストを開始するには force パラメータに true を指定することで強制的にクエストを開始できます。<br>
   *   <br>
   *   クエストが正常に開始できた場合、Progress オブジェクトを応答します。<br>
   *   Progress オブジェクトはクエストを実行するために必要ないくつかの情報を応答します。<br>
   *   <br>
   *   transactionId は実行中のクエスト固有のIDです。<br>
   *   クエストの完了報告にはこのIDを指定する必要があります。<br>
   *   <br>
   *   randomSeed はクエストの内容を決定するために使用できる乱数シードです。<br>
   *   クエストを開®®始するたびに異なる乱数が払い出されますので、この値をシード値としてゲームを進行させることで<br>
   *   クエスト中にアプリケーションを強制終了したとしても同一条件で再開することができます。<br>
   *   <br>
   *   rewards にはこのクエストにおいて入手可能な報酬とその数量の"最大値"が得られます。<br>
   *   クエストの完了報告にも rewards を渡すことができ、そこでクエスト中に実際に入手したアイテムの数量を指定します。<br>
   *   詳細はクエストの完了報告APIのドキュメントを参照してください。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public startByUserId(request: StartByUserIdRequest): Promise<StartByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/progress/group/{questGroupName}/quest/{questName}/start')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.force !== undefined) {
      body['force'] = request.force;
    }
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
        return new StartByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエストを完了<br>
   *   <br>
   *   開始時に受け取ったクエストにおいて入手可能な報酬とその数量の"最大値"のうち、クエスト内で実際に入手した報酬を rewards で報告します。<br>
   *   isComplete にはクエストをクリアできたかを報告します。クエストに失敗した場合、rewards の値は無視してクエストに設定された失敗した場合の報酬が付与されます。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public end(request: EndRequest): Promise<EndResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/progress/end')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.transactionId !== undefined && request.transactionId !== '') {
      body['transactionId'] = request.transactionId;
    }
    if (request.rewards !== undefined) {
      body['rewards'] = request.rewards.map((item) => item.toDict());
    }
    if (request.isComplete !== undefined) {
      body['isComplete'] = request.isComplete;
    }
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
        return new EndResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してクエストを完了<br>
   *   <br>
   *   開始時に受け取ったクエストにおいて入手可能な報酬とその数量の"最大値"のうち、クエスト内で実際に入手した報酬を rewards で報告します。<br>
   *   isComplete にはクエストをクリアできたかを報告します。クエストに失敗した場合、rewards の値は無視してクエストに設定された失敗した場合の報酬が付与されます。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public endByUserId(request: EndByUserIdRequest): Promise<EndByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/progress/end')
      .replace('{service}', 'quest')
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
    if (request.transactionId !== undefined && request.transactionId !== '') {
      body['transactionId'] = request.transactionId;
    }
    if (request.rewards !== undefined) {
      body['rewards'] = request.rewards.map((item) => item.toDict());
    }
    if (request.isComplete !== undefined) {
      body['isComplete'] = request.isComplete;
    }
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
        return new EndByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエスト挑戦を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteProgress(request: DeleteProgressRequest): Promise<DeleteProgressResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/progress')
      .replace('{service}', 'quest')
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
    return axios.delete(
      url,
      config,
    )
      .then((response: any) => {
        return new DeleteProgressResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト挑戦を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteProgressByUserId(request: DeleteProgressByUserIdRequest): Promise<DeleteProgressByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/progress')
      .replace('{service}', 'quest')
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
        return new DeleteProgressByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシートでクエストを開始<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createProgressByStampSheet(request: CreateProgressByStampSheetRequest): Promise<CreateProgressByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/progress/create')
      .replace('{service}', 'quest')
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
        return new CreateProgressByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプタスクで クエスト挑戦 を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteProgressByStampTask(request: DeleteProgressByStampTaskRequest): Promise<DeleteProgressByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/progress/delete')
      .replace('{service}', 'quest')
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
        return new DeleteProgressByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クエスト進行の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCompletedQuestLists(request: DescribeCompletedQuestListsRequest): Promise<DescribeCompletedQuestListsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/completed')
      .replace('{service}', 'quest')
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
        return new DescribeCompletedQuestListsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト進行の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCompletedQuestListsByUserId(request: DescribeCompletedQuestListsByUserIdRequest): Promise<DescribeCompletedQuestListsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/completed')
      .replace('{service}', 'quest')
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
        return new DescribeCompletedQuestListsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエスト進行を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCompletedQuestList(request: GetCompletedQuestListRequest): Promise<GetCompletedQuestListResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/completed/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new GetCompletedQuestListResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト進行を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCompletedQuestListByUserId(request: GetCompletedQuestListByUserIdRequest): Promise<GetCompletedQuestListByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/completed/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new GetCompletedQuestListByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してクエスト進行を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteCompletedQuestListByUserId(request: DeleteCompletedQuestListByUserIdRequest): Promise<DeleteCompletedQuestListByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/completed/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new DeleteCompletedQuestListByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストグループの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeQuestGroupModels(request: DescribeQuestGroupModelsRequest): Promise<DescribeQuestGroupModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group')
      .replace('{service}', 'quest')
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
        return new DescribeQuestGroupModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストグループを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getQuestGroupModel(request: GetQuestGroupModelRequest): Promise<GetQuestGroupModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{questGroupName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new GetQuestGroupModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストモデルの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeQuestModels(request: DescribeQuestModelsRequest): Promise<DescribeQuestModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{questGroupName}/quest')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
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
        return new DescribeQuestModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クエストモデルを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getQuestModel(request: GetQuestModelRequest): Promise<GetQuestModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/group/{questGroupName}/quest/{questName}')
      .replace('{service}', 'quest')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{questGroupName}',
        request.questGroupName ? String(request.questGroupName) : 'null',
      )
      .replace(
        '{questName}',
        request.questName ? String(request.questName) : 'null',
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
        return new GetQuestModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
