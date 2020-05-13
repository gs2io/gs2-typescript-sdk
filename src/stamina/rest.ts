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
  DescribeStaminaModelMastersRequest,
  CreateStaminaModelMasterRequest,
  GetStaminaModelMasterRequest,
  UpdateStaminaModelMasterRequest,
  DeleteStaminaModelMasterRequest,
  DescribeMaxStaminaTableMastersRequest,
  CreateMaxStaminaTableMasterRequest,
  GetMaxStaminaTableMasterRequest,
  UpdateMaxStaminaTableMasterRequest,
  DeleteMaxStaminaTableMasterRequest,
  DescribeRecoverIntervalTableMastersRequest,
  CreateRecoverIntervalTableMasterRequest,
  GetRecoverIntervalTableMasterRequest,
  UpdateRecoverIntervalTableMasterRequest,
  DeleteRecoverIntervalTableMasterRequest,
  DescribeRecoverValueTableMastersRequest,
  CreateRecoverValueTableMasterRequest,
  GetRecoverValueTableMasterRequest,
  UpdateRecoverValueTableMasterRequest,
  DeleteRecoverValueTableMasterRequest,
  ExportMasterRequest,
  GetCurrentStaminaMasterRequest,
  UpdateCurrentStaminaMasterRequest,
  UpdateCurrentStaminaMasterFromGitHubRequest,
  DescribeStaminaModelsRequest,
  GetStaminaModelRequest,
  DescribeStaminasRequest,
  DescribeStaminasByUserIdRequest,
  GetStaminaRequest,
  GetStaminaByUserIdRequest,
  UpdateStaminaByUserIdRequest,
  ConsumeStaminaRequest,
  ConsumeStaminaByUserIdRequest,
  RecoverStaminaByUserIdRequest,
  RaiseMaxValueByUserIdRequest,
  SetMaxValueByUserIdRequest,
  SetRecoverIntervalByUserIdRequest,
  SetRecoverValueByUserIdRequest,
  SetMaxValueByStatusRequest,
  SetRecoverIntervalByStatusRequest,
  SetRecoverValueByStatusRequest,
  DeleteStaminaByUserIdRequest,
  RecoverStaminaByStampSheetRequest,
  RaiseMaxValueByStampSheetRequest,
  SetMaxValueByStampSheetRequest,
  SetRecoverIntervalByStampSheetRequest,
  SetRecoverValueByStampSheetRequest,
  ConsumeStaminaByStampTaskRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeStaminaModelMastersResult,
  CreateStaminaModelMasterResult,
  GetStaminaModelMasterResult,
  UpdateStaminaModelMasterResult,
  DeleteStaminaModelMasterResult,
  DescribeMaxStaminaTableMastersResult,
  CreateMaxStaminaTableMasterResult,
  GetMaxStaminaTableMasterResult,
  UpdateMaxStaminaTableMasterResult,
  DeleteMaxStaminaTableMasterResult,
  DescribeRecoverIntervalTableMastersResult,
  CreateRecoverIntervalTableMasterResult,
  GetRecoverIntervalTableMasterResult,
  UpdateRecoverIntervalTableMasterResult,
  DeleteRecoverIntervalTableMasterResult,
  DescribeRecoverValueTableMastersResult,
  CreateRecoverValueTableMasterResult,
  GetRecoverValueTableMasterResult,
  UpdateRecoverValueTableMasterResult,
  DeleteRecoverValueTableMasterResult,
  ExportMasterResult,
  GetCurrentStaminaMasterResult,
  UpdateCurrentStaminaMasterResult,
  UpdateCurrentStaminaMasterFromGitHubResult,
  DescribeStaminaModelsResult,
  GetStaminaModelResult,
  DescribeStaminasResult,
  DescribeStaminasByUserIdResult,
  GetStaminaResult,
  GetStaminaByUserIdResult,
  UpdateStaminaByUserIdResult,
  ConsumeStaminaResult,
  ConsumeStaminaByUserIdResult,
  RecoverStaminaByUserIdResult,
  RaiseMaxValueByUserIdResult,
  SetMaxValueByUserIdResult,
  SetRecoverIntervalByUserIdResult,
  SetRecoverValueByUserIdResult,
  SetMaxValueByStatusResult,
  SetRecoverIntervalByStatusResult,
  SetRecoverValueByStatusResult,
  DeleteStaminaByUserIdResult,
  RecoverStaminaByStampSheetResult,
  RaiseMaxValueByStampSheetResult,
  SetMaxValueByStampSheetResult,
  SetRecoverIntervalByStampSheetResult,
  SetRecoverValueByStampSheetResult,
  ConsumeStaminaByStampTaskResult,
} from './result';

import {
  Namespace,
  StaminaModelMaster,
  MaxStaminaTableMaster,
  RecoverIntervalTableMaster,
  RecoverValueTableMaster,
  CurrentStaminaMaster,
  StaminaModel,
  MaxStaminaTable,
  RecoverIntervalTable,
  RecoverValueTable,
  Stamina,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2StaminaRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'stamina';

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
      .replace('{service}', 'stamina')
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
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.overflowTriggerScriptId !== undefined && request.overflowTriggerScriptId !== '') {
      body['overflowTriggerScriptId'] = request.overflowTriggerScriptId;
    }
    if (request.overflowTriggerNamespaceId !== undefined && request.overflowTriggerNamespaceId !== '') {
      body['overflowTriggerNamespaceId'] = request.overflowTriggerNamespaceId;
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
      .replace('{service}', 'stamina')
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
      .replace('{service}', 'stamina')
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
      .replace('{service}', 'stamina')
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
    if (request.overflowTriggerScriptId !== undefined && request.overflowTriggerScriptId !== '') {
      body['overflowTriggerScriptId'] = request.overflowTriggerScriptId;
    }
    if (request.overflowTriggerNamespaceId !== undefined && request.overflowTriggerNamespaceId !== '') {
      body['overflowTriggerNamespaceId'] = request.overflowTriggerNamespaceId;
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
      .replace('{service}', 'stamina')
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
   * スタミナモデルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeStaminaModelMasters(request: DescribeStaminaModelMastersRequest): Promise<DescribeStaminaModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
      .replace('{service}', 'stamina')
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
        return new DescribeStaminaModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナモデルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createStaminaModelMaster(request: CreateStaminaModelMasterRequest): Promise<CreateStaminaModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
      .replace('{service}', 'stamina')
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
    if (request.recoverIntervalMinutes !== undefined) {
      body['recoverIntervalMinutes'] = request.recoverIntervalMinutes;
    }
    if (request.recoverValue !== undefined) {
      body['recoverValue'] = request.recoverValue;
    }
    if (request.initialCapacity !== undefined) {
      body['initialCapacity'] = request.initialCapacity;
    }
    if (request.isOverflow !== undefined) {
      body['isOverflow'] = request.isOverflow;
    }
    if (request.maxCapacity !== undefined) {
      body['maxCapacity'] = request.maxCapacity;
    }
    if (request.maxStaminaTableName !== undefined && request.maxStaminaTableName !== '') {
      body['maxStaminaTableName'] = request.maxStaminaTableName;
    }
    if (request.recoverIntervalTableName !== undefined && request.recoverIntervalTableName !== '') {
      body['recoverIntervalTableName'] = request.recoverIntervalTableName;
    }
    if (request.recoverValueTableName !== undefined && request.recoverValueTableName !== '') {
      body['recoverValueTableName'] = request.recoverValueTableName;
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
        return new CreateStaminaModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナモデルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStaminaModelMaster(request: GetStaminaModelMasterRequest): Promise<GetStaminaModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new GetStaminaModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナモデルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateStaminaModelMaster(request: UpdateStaminaModelMasterRequest): Promise<UpdateStaminaModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.recoverIntervalMinutes !== undefined) {
      body['recoverIntervalMinutes'] = request.recoverIntervalMinutes;
    }
    if (request.recoverValue !== undefined) {
      body['recoverValue'] = request.recoverValue;
    }
    if (request.initialCapacity !== undefined) {
      body['initialCapacity'] = request.initialCapacity;
    }
    if (request.isOverflow !== undefined) {
      body['isOverflow'] = request.isOverflow;
    }
    if (request.maxCapacity !== undefined) {
      body['maxCapacity'] = request.maxCapacity;
    }
    if (request.maxStaminaTableName !== undefined && request.maxStaminaTableName !== '') {
      body['maxStaminaTableName'] = request.maxStaminaTableName;
    }
    if (request.recoverIntervalTableName !== undefined && request.recoverIntervalTableName !== '') {
      body['recoverIntervalTableName'] = request.recoverIntervalTableName;
    }
    if (request.recoverValueTableName !== undefined && request.recoverValueTableName !== '') {
      body['recoverValueTableName'] = request.recoverValueTableName;
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
        return new UpdateStaminaModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナモデルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteStaminaModelMaster(request: DeleteStaminaModelMasterRequest): Promise<DeleteStaminaModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new DeleteStaminaModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナの最大値テーブルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMaxStaminaTableMasters(request: DescribeMaxStaminaTableMastersRequest): Promise<DescribeMaxStaminaTableMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/maxStaminaTable')
      .replace('{service}', 'stamina')
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
        return new DescribeMaxStaminaTableMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナの最大値テーブルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createMaxStaminaTableMaster(request: CreateMaxStaminaTableMasterRequest): Promise<CreateMaxStaminaTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/maxStaminaTable')
      .replace('{service}', 'stamina')
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
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new CreateMaxStaminaTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナの最大値テーブルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMaxStaminaTableMaster(request: GetMaxStaminaTableMasterRequest): Promise<GetMaxStaminaTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{maxStaminaTableName}',
        request.maxStaminaTableName ? String(request.maxStaminaTableName) : 'null',
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
        return new GetMaxStaminaTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナの最大値テーブルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateMaxStaminaTableMaster(request: UpdateMaxStaminaTableMasterRequest): Promise<UpdateMaxStaminaTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{maxStaminaTableName}',
        request.maxStaminaTableName ? String(request.maxStaminaTableName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new UpdateMaxStaminaTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナの最大値テーブルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMaxStaminaTableMaster(request: DeleteMaxStaminaTableMasterRequest): Promise<DeleteMaxStaminaTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{maxStaminaTableName}',
        request.maxStaminaTableName ? String(request.maxStaminaTableName) : 'null',
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
        return new DeleteMaxStaminaTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復間隔テーブルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeRecoverIntervalTableMasters(request: DescribeRecoverIntervalTableMastersRequest): Promise<DescribeRecoverIntervalTableMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverIntervalTable')
      .replace('{service}', 'stamina')
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
        return new DescribeRecoverIntervalTableMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復間隔テーブルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createRecoverIntervalTableMaster(request: CreateRecoverIntervalTableMasterRequest): Promise<CreateRecoverIntervalTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverIntervalTable')
      .replace('{service}', 'stamina')
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
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new CreateRecoverIntervalTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナ回復間隔テーブルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getRecoverIntervalTableMaster(request: GetRecoverIntervalTableMasterRequest): Promise<GetRecoverIntervalTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverIntervalTableName}',
        request.recoverIntervalTableName ? String(request.recoverIntervalTableName) : 'null',
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
        return new GetRecoverIntervalTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復間隔テーブルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateRecoverIntervalTableMaster(request: UpdateRecoverIntervalTableMasterRequest): Promise<UpdateRecoverIntervalTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverIntervalTableName}',
        request.recoverIntervalTableName ? String(request.recoverIntervalTableName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new UpdateRecoverIntervalTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナ回復間隔テーブルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRecoverIntervalTableMaster(request: DeleteRecoverIntervalTableMasterRequest): Promise<DeleteRecoverIntervalTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverIntervalTableName}',
        request.recoverIntervalTableName ? String(request.recoverIntervalTableName) : 'null',
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
        return new DeleteRecoverIntervalTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復量テーブルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeRecoverValueTableMasters(request: DescribeRecoverValueTableMastersRequest): Promise<DescribeRecoverValueTableMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverValueTable')
      .replace('{service}', 'stamina')
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
        return new DescribeRecoverValueTableMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復量テーブルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createRecoverValueTableMaster(request: CreateRecoverValueTableMasterRequest): Promise<CreateRecoverValueTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverValueTable')
      .replace('{service}', 'stamina')
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
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new CreateRecoverValueTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナ回復量テーブルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getRecoverValueTableMaster(request: GetRecoverValueTableMasterRequest): Promise<GetRecoverValueTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverValueTableName}',
        request.recoverValueTableName ? String(request.recoverValueTableName) : 'null',
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
        return new GetRecoverValueTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナ回復量テーブルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateRecoverValueTableMaster(request: UpdateRecoverValueTableMasterRequest): Promise<UpdateRecoverValueTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverValueTableName}',
        request.recoverValueTableName ? String(request.recoverValueTableName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.experienceModelId !== undefined && request.experienceModelId !== '') {
      body['experienceModelId'] = request.experienceModelId;
    }
    if (request.values !== undefined) {
      body['values'] = request.values;
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
        return new UpdateRecoverValueTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナ回復量テーブルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteRecoverValueTableMaster(request: DeleteRecoverValueTableMasterRequest): Promise<DeleteRecoverValueTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{recoverValueTableName}',
        request.recoverValueTableName ? String(request.recoverValueTableName) : 'null',
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
        return new DeleteRecoverValueTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なスタミナマスターのマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'stamina')
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
   * 現在有効なスタミナマスターを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentStaminaMaster(request: GetCurrentStaminaMasterRequest): Promise<GetCurrentStaminaMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'stamina')
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
        return new GetCurrentStaminaMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なスタミナマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentStaminaMaster(request: UpdateCurrentStaminaMasterRequest): Promise<UpdateCurrentStaminaMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'stamina')
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
        return new UpdateCurrentStaminaMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なスタミナマスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentStaminaMasterFromGitHub(request: UpdateCurrentStaminaMasterFromGitHubRequest): Promise<UpdateCurrentStaminaMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'stamina')
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
        return new UpdateCurrentStaminaMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナモデルの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeStaminaModels(request: DescribeStaminaModelsRequest): Promise<DescribeStaminaModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
      .replace('{service}', 'stamina')
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
        return new DescribeStaminaModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナモデルを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStaminaModel(request: GetStaminaModelRequest): Promise<GetStaminaModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new GetStaminaModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeStaminas(request: DescribeStaminasRequest): Promise<DescribeStaminasResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina')
      .replace('{service}', 'stamina')
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
        return new DescribeStaminasResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してスタミナを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeStaminasByUserId(request: DescribeStaminasByUserIdRequest): Promise<DescribeStaminasByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina')
      .replace('{service}', 'stamina')
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
        return new DescribeStaminasByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタミナを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStamina(request: GetStaminaRequest): Promise<GetStaminaResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new GetStaminaResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してスタミナを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStaminaByUserId(request: GetStaminaByUserIdRequest): Promise<GetStaminaByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new GetStaminaByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してスタミナを作成・更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateStaminaByUserId(request: UpdateStaminaByUserIdRequest): Promise<UpdateStaminaByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
    if (request.maxValue !== undefined) {
      body['maxValue'] = request.maxValue;
    }
    if (request.recoverIntervalMinutes !== undefined) {
      body['recoverIntervalMinutes'] = request.recoverIntervalMinutes;
    }
    if (request.recoverValue !== undefined) {
      body['recoverValue'] = request.recoverValue;
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
        return new UpdateStaminaByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeStamina(request: ConsumeStaminaRequest): Promise<ConsumeStaminaResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina/{staminaName}/consume')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.consumeValue !== undefined) {
      body['consumeValue'] = request.consumeValue;
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
        return new ConsumeStaminaResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeStaminaByUserId(request: ConsumeStaminaByUserIdRequest): Promise<ConsumeStaminaByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/consume')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.consumeValue !== undefined) {
      body['consumeValue'] = request.consumeValue;
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
        return new ConsumeStaminaByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナを回復<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public recoverStaminaByUserId(request: RecoverStaminaByUserIdRequest): Promise<RecoverStaminaByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recover')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.recoverValue !== undefined) {
      body['recoverValue'] = request.recoverValue;
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
        return new RecoverStaminaByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナの最大値を加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public raiseMaxValueByUserId(request: RaiseMaxValueByUserIdRequest): Promise<RaiseMaxValueByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/raise')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.raiseValue !== undefined) {
      body['raiseValue'] = request.raiseValue;
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
        return new RaiseMaxValueByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナの最大値を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setMaxValueByUserId(request: SetMaxValueByUserIdRequest): Promise<SetMaxValueByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.maxValue !== undefined) {
      body['maxValue'] = request.maxValue;
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
        return new SetMaxValueByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナの回復間隔(分)を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverIntervalByUserId(request: SetRecoverIntervalByUserIdRequest): Promise<SetRecoverIntervalByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recoverInterval/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.recoverIntervalMinutes !== undefined) {
      body['recoverIntervalMinutes'] = request.recoverIntervalMinutes;
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
        return new SetRecoverIntervalByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナの回復間隔(分)を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverValueByUserId(request: SetRecoverValueByUserIdRequest): Promise<SetRecoverValueByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recoverValue/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.recoverValue !== undefined) {
      body['recoverValue'] = request.recoverValue;
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
        return new SetRecoverValueByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナの最大値をGS2-Experienceのステータスを使用して更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setMaxValueByStatus(request: SetMaxValueByStatusRequest): Promise<SetMaxValueByStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina/{staminaName}/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.signedStatusBody !== undefined && request.signedStatusBody !== '') {
      body['signedStatusBody'] = request.signedStatusBody;
    }
    if (request.signedStatusSignature !== undefined && request.signedStatusSignature !== '') {
      body['signedStatusSignature'] = request.signedStatusSignature;
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
        return new SetMaxValueByStatusResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナの最大値をGS2-Experienceのステータスを使用して更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverIntervalByStatus(request: SetRecoverIntervalByStatusRequest): Promise<SetRecoverIntervalByStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina/{staminaName}/recoverInterval/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.signedStatusBody !== undefined && request.signedStatusBody !== '') {
      body['signedStatusBody'] = request.signedStatusBody;
    }
    if (request.signedStatusSignature !== undefined && request.signedStatusSignature !== '') {
      body['signedStatusSignature'] = request.signedStatusSignature;
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
        return new SetRecoverIntervalByStatusResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタミナの最大値をGS2-Experienceのステータスを使用して更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverValueByStatus(request: SetRecoverValueByStatusRequest): Promise<SetRecoverValueByStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/stamina/{staminaName}/reoverValue/set')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.signedStatusBody !== undefined && request.signedStatusBody !== '') {
      body['signedStatusBody'] = request.signedStatusBody;
    }
    if (request.signedStatusSignature !== undefined && request.signedStatusSignature !== '') {
      body['signedStatusSignature'] = request.signedStatusSignature;
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
        return new SetRecoverValueByStatusResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定してスタミナを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteStaminaByUserId(request: DeleteStaminaByUserIdRequest): Promise<DeleteStaminaByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
      .replace('{service}', 'stamina')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{staminaName}',
        request.staminaName ? String(request.staminaName) : 'null',
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
        return new DeleteStaminaByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシートを使用してスタミナを回復<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public recoverStaminaByStampSheet(request: RecoverStaminaByStampSheetRequest): Promise<RecoverStaminaByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/recover')
      .replace('{service}', 'stamina')
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
        return new RecoverStaminaByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでスタミナの最大値を加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public raiseMaxValueByStampSheet(request: RaiseMaxValueByStampSheetRequest): Promise<RaiseMaxValueByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/raise')
      .replace('{service}', 'stamina')
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
        return new RaiseMaxValueByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでスタミナの最大値を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setMaxValueByStampSheet(request: SetMaxValueByStampSheetRequest): Promise<SetMaxValueByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/max/set')
      .replace('{service}', 'stamina')
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
        return new SetMaxValueByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでスタミナの最大値を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverIntervalByStampSheet(request: SetRecoverIntervalByStampSheetRequest): Promise<SetRecoverIntervalByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/recoverInterval/set')
      .replace('{service}', 'stamina')
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
        return new SetRecoverIntervalByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでスタミナの最大値を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setRecoverValueByStampSheet(request: SetRecoverValueByStampSheetRequest): Promise<SetRecoverValueByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/recoverValue/set')
      .replace('{service}', 'stamina')
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
        return new SetRecoverValueByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプタスクを使用してスタミナを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeStaminaByStampTask(request: ConsumeStaminaByStampTaskRequest): Promise<ConsumeStaminaByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamina/consume')
      .replace('{service}', 'stamina')
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
        return new ConsumeStaminaByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
