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
  DescribeFormModelMastersRequest,
  CreateFormModelMasterRequest,
  GetFormModelMasterRequest,
  UpdateFormModelMasterRequest,
  DeleteFormModelMasterRequest,
  DescribeMoldModelsRequest,
  GetMoldModelRequest,
  DescribeMoldModelMastersRequest,
  CreateMoldModelMasterRequest,
  GetMoldModelMasterRequest,
  UpdateMoldModelMasterRequest,
  DeleteMoldModelMasterRequest,
  ExportMasterRequest,
  GetCurrentFormMasterRequest,
  UpdateCurrentFormMasterRequest,
  UpdateCurrentFormMasterFromGitHubRequest,
  DescribeMoldsRequest,
  DescribeMoldsByUserIdRequest,
  GetMoldRequest,
  GetMoldByUserIdRequest,
  SetMoldCapacityByUserIdRequest,
  AddMoldCapacityByUserIdRequest,
  DeleteMoldRequest,
  DeleteMoldByUserIdRequest,
  AddCapacityByStampSheetRequest,
  SetCapacityByStampSheetRequest,
  DescribeFormsRequest,
  DescribeFormsByUserIdRequest,
  GetFormRequest,
  GetFormByUserIdRequest,
  GetFormWithSignatureRequest,
  GetFormWithSignatureByUserIdRequest,
  SetFormByUserIdRequest,
  SetFormWithSignatureRequest,
  AcquireActionsToFormPropertiesRequest,
  DeleteFormRequest,
  DeleteFormByUserIdRequest,
  AcquireActionToFormPropertiesByStampSheetRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeFormModelMastersResult,
  CreateFormModelMasterResult,
  GetFormModelMasterResult,
  UpdateFormModelMasterResult,
  DeleteFormModelMasterResult,
  DescribeMoldModelsResult,
  GetMoldModelResult,
  DescribeMoldModelMastersResult,
  CreateMoldModelMasterResult,
  GetMoldModelMasterResult,
  UpdateMoldModelMasterResult,
  DeleteMoldModelMasterResult,
  ExportMasterResult,
  GetCurrentFormMasterResult,
  UpdateCurrentFormMasterResult,
  UpdateCurrentFormMasterFromGitHubResult,
  DescribeMoldsResult,
  DescribeMoldsByUserIdResult,
  GetMoldResult,
  GetMoldByUserIdResult,
  SetMoldCapacityByUserIdResult,
  AddMoldCapacityByUserIdResult,
  DeleteMoldResult,
  DeleteMoldByUserIdResult,
  AddCapacityByStampSheetResult,
  SetCapacityByStampSheetResult,
  DescribeFormsResult,
  DescribeFormsByUserIdResult,
  GetFormResult,
  GetFormByUserIdResult,
  GetFormWithSignatureResult,
  GetFormWithSignatureByUserIdResult,
  SetFormByUserIdResult,
  SetFormWithSignatureResult,
  AcquireActionsToFormPropertiesResult,
  DeleteFormResult,
  DeleteFormByUserIdResult,
  AcquireActionToFormPropertiesByStampSheetResult,
} from './result';

import {
  Namespace,
  FormModel,
  FormModelMaster,
  MoldModel,
  MoldModelMaster,
  CurrentFormMaster,
  Mold,
  Form,
  Slot,
  ResponseCache,
  SlotModel,
  SlotWithSignature,
  AcquireActionConfig,
  Config,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
  AcquireAction,
} from './model';

import axios from 'axios';

export class Gs2FormationRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'formation';

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
      .replace('{service}', 'formation')
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
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.updateMoldScript !== undefined) {
      body['updateMoldScript'] = request.updateMoldScript ? request.updateMoldScript.toDict() : null;
    }
    if (request.updateFormScript !== undefined) {
      body['updateFormScript'] = request.updateFormScript ? request.updateFormScript.toDict() : null;
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
      .replace('{service}', 'formation')
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
      .replace('{service}', 'formation')
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
      .replace('{service}', 'formation')
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
    if (request.updateMoldScript !== undefined) {
      body['updateMoldScript'] = request.updateMoldScript ? request.updateMoldScript.toDict() : null;
    }
    if (request.updateFormScript !== undefined) {
      body['updateFormScript'] = request.updateFormScript ? request.updateFormScript.toDict() : null;
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
      .replace('{service}', 'formation')
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
   * フォームマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFormModelMasters(request: DescribeFormModelMastersRequest): Promise<DescribeFormModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form')
      .replace('{service}', 'formation')
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
        return new DescribeFormModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createFormModelMaster(request: CreateFormModelMasterRequest): Promise<CreateFormModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form')
      .replace('{service}', 'formation')
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
    if (request.slots !== undefined) {
      body['slots'] = request.slots.map((item) => item.toDict());
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
        return new CreateFormModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFormModelMaster(request: GetFormModelMasterRequest): Promise<GetFormModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{formModelName}',
        request.formModelName ? String(request.formModelName) : 'null',
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
        return new GetFormModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateFormModelMaster(request: UpdateFormModelMasterRequest): Promise<UpdateFormModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{formModelName}',
        request.formModelName ? String(request.formModelName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.slots !== undefined) {
      body['slots'] = request.slots.map((item) => item.toDict());
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
        return new UpdateFormModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteFormModelMaster(request: DeleteFormModelMasterRequest): Promise<DeleteFormModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/form/{formModelName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{formModelName}',
        request.formModelName ? String(request.formModelName) : 'null',
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
        return new DeleteFormModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームの保存領域の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMoldModels(request: DescribeMoldModelsRequest): Promise<DescribeMoldModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/mold')
      .replace('{service}', 'formation')
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
        return new DescribeMoldModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームの保存領域を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMoldModel(request: GetMoldModelRequest): Promise<GetMoldModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new GetMoldModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームの保存領域マスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMoldModelMasters(request: DescribeMoldModelMastersRequest): Promise<DescribeMoldModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold')
      .replace('{service}', 'formation')
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
        return new DescribeMoldModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームの保存領域マスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createMoldModelMaster(request: CreateMoldModelMasterRequest): Promise<CreateMoldModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold')
      .replace('{service}', 'formation')
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
    if (request.formModelName !== undefined && request.formModelName !== '') {
      body['formModelName'] = request.formModelName;
    }
    if (request.initialMaxCapacity !== undefined) {
      body['initialMaxCapacity'] = request.initialMaxCapacity;
    }
    if (request.maxCapacity !== undefined) {
      body['maxCapacity'] = request.maxCapacity;
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
        return new CreateMoldModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームの保存領域マスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMoldModelMaster(request: GetMoldModelMasterRequest): Promise<GetMoldModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new GetMoldModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームの保存領域マスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateMoldModelMaster(request: UpdateMoldModelMasterRequest): Promise<UpdateMoldModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.formModelName !== undefined && request.formModelName !== '') {
      body['formModelName'] = request.formModelName;
    }
    if (request.initialMaxCapacity !== undefined) {
      body['initialMaxCapacity'] = request.initialMaxCapacity;
    }
    if (request.maxCapacity !== undefined) {
      body['maxCapacity'] = request.maxCapacity;
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
        return new UpdateMoldModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームの保存領域マスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMoldModelMaster(request: DeleteMoldModelMasterRequest): Promise<DeleteMoldModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new DeleteMoldModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なフォーム設定のマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'formation')
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
   * 現在有効なフォーム設定を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentFormMaster(request: GetCurrentFormMasterRequest): Promise<GetCurrentFormMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'formation')
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
        return new GetCurrentFormMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効なフォーム設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentFormMaster(request: UpdateCurrentFormMasterRequest): Promise<UpdateCurrentFormMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'formation')
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
        return new UpdateCurrentFormMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効なフォーム設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentFormMasterFromGitHub(request: UpdateCurrentFormMasterFromGitHubRequest): Promise<UpdateCurrentFormMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'formation')
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
        return new UpdateCurrentFormMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 保存したフォームの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMolds(request: DescribeMoldsRequest): Promise<DescribeMoldsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold')
      .replace('{service}', 'formation')
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
        return new DescribeMoldsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して保存したフォームの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeMoldsByUserId(request: DescribeMoldsByUserIdRequest): Promise<DescribeMoldsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold')
      .replace('{service}', 'formation')
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
        return new DescribeMoldsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 保存したフォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMold(request: GetMoldRequest): Promise<GetMoldResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new GetMoldResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して保存したフォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getMoldByUserId(request: GetMoldByUserIdRequest): Promise<GetMoldByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new GetMoldByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して保存したフォームのキャパシティを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setMoldCapacityByUserId(request: SetMoldCapacityByUserIdRequest): Promise<SetMoldCapacityByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.capacity !== undefined) {
      body['capacity'] = request.capacity;
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
        return new SetMoldCapacityByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザIDを指定して保存したフォームのキャパシティを追加<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public addMoldCapacityByUserId(request: AddMoldCapacityByUserIdRequest): Promise<AddMoldCapacityByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.capacity !== undefined) {
      body['capacity'] = request.capacity;
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
        return new AddMoldCapacityByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 保存したフォームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMold(request: DeleteMoldRequest): Promise<DeleteMoldResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new DeleteMoldResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して保存したフォームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteMoldByUserId(request: DeleteMoldByUserIdRequest): Promise<DeleteMoldByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new DeleteMoldByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシートでキャパシティサイズを加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public addCapacityByStampSheet(request: AddCapacityByStampSheetRequest): Promise<AddCapacityByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/mold/capacity/add')
      .replace('{service}', 'formation')
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
        return new AddCapacityByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでキャパシティサイズを設定<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setCapacityByStampSheet(request: SetCapacityByStampSheetRequest): Promise<SetCapacityByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/mold/capacity/set')
      .replace('{service}', 'formation')
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
        return new SetCapacityByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeForms(request: DescribeFormsRequest): Promise<DescribeFormsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}/form')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new DescribeFormsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してフォームの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeFormsByUserId(request: DescribeFormsByUserIdRequest): Promise<DescribeFormsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
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
        return new DescribeFormsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * フォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getForm(request: GetFormRequest): Promise<GetFormResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
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
        return new GetFormResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してフォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFormByUserId(request: GetFormByUserIdRequest): Promise<GetFormByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
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
        return new GetFormByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 署名付きフォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFormWithSignature(request: GetFormWithSignatureRequest): Promise<GetFormWithSignatureResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}/form/{index}/signature')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.keyId !== undefined ) {
      params['keyId'] = String(request.keyId);
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
        return new GetFormWithSignatureResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して署名付きフォームを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getFormWithSignatureByUserId(request: GetFormWithSignatureByUserIdRequest): Promise<GetFormWithSignatureByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form/{index}/signature')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.keyId !== undefined ) {
      params['keyId'] = String(request.keyId);
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
        return new GetFormWithSignatureByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してフォームを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setFormByUserId(request: SetFormByUserIdRequest): Promise<SetFormByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.slots !== undefined) {
      body['slots'] = request.slots.map((item) => item.toDict());
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
        return new SetFormByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 署名付きスロットを使ってフォームを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setFormWithSignature(request: SetFormWithSignatureRequest): Promise<SetFormWithSignatureResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.slots !== undefined) {
      body['slots'] = request.slots.map((item) => item.toDict());
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
        return new SetFormWithSignatureResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 署名付きスロットを使ってフォームを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public acquireActionsToFormProperties(request: AcquireActionsToFormPropertiesRequest): Promise<AcquireActionsToFormPropertiesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form/{index}/stamp/delegate')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.acquireAction !== undefined) {
      body['acquireAction'] = request.acquireAction ? request.acquireAction.toDict() : null;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
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
        return new AcquireActionsToFormPropertiesResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * フォームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteForm(request: DeleteFormRequest): Promise<DeleteFormResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
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
        return new DeleteFormResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してフォームを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteFormByUserId(request: DeleteFormByUserIdRequest): Promise<DeleteFormByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mold/{moldName}/form/{index}')
      .replace('{service}', 'formation')
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
        '{moldName}',
        request.moldName ? String(request.moldName) : 'null',
      )
      .replace(
        '{index}',
        request.index !== undefined ? String(request.index) : 'null',
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
        return new DeleteFormByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシートでアイテムをインベントリに追加<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public acquireActionToFormPropertiesByStampSheet(request: AcquireActionToFormPropertiesByStampSheetRequest): Promise<AcquireActionToFormPropertiesByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/form/acquire')
      .replace('{service}', 'formation')
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
        return new AcquireActionToFormPropertiesByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
