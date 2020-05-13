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
  DescribeInventoryModelMastersRequest,
  CreateInventoryModelMasterRequest,
  GetInventoryModelMasterRequest,
  UpdateInventoryModelMasterRequest,
  DeleteInventoryModelMasterRequest,
  DescribeInventoryModelsRequest,
  GetInventoryModelRequest,
  DescribeItemModelMastersRequest,
  CreateItemModelMasterRequest,
  GetItemModelMasterRequest,
  UpdateItemModelMasterRequest,
  DeleteItemModelMasterRequest,
  DescribeItemModelsRequest,
  GetItemModelRequest,
  ExportMasterRequest,
  GetCurrentItemModelMasterRequest,
  UpdateCurrentItemModelMasterRequest,
  UpdateCurrentItemModelMasterFromGitHubRequest,
  DescribeInventoriesRequest,
  DescribeInventoriesByUserIdRequest,
  GetInventoryRequest,
  GetInventoryByUserIdRequest,
  AddCapacityByUserIdRequest,
  SetCapacityByUserIdRequest,
  DeleteInventoryByUserIdRequest,
  AddCapacityByStampSheetRequest,
  SetCapacityByStampSheetRequest,
  DescribeItemSetsRequest,
  DescribeItemSetsByUserIdRequest,
  GetItemSetRequest,
  GetItemSetByUserIdRequest,
  GetItemWithSignatureRequest,
  GetItemWithSignatureByUserIdRequest,
  AcquireItemSetByUserIdRequest,
  ConsumeItemSetRequest,
  ConsumeItemSetByUserIdRequest,
  DeleteItemSetByUserIdRequest,
  AcquireItemSetByStampSheetRequest,
  ConsumeItemSetByStampTaskRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeInventoryModelMastersResult,
  CreateInventoryModelMasterResult,
  GetInventoryModelMasterResult,
  UpdateInventoryModelMasterResult,
  DeleteInventoryModelMasterResult,
  DescribeInventoryModelsResult,
  GetInventoryModelResult,
  DescribeItemModelMastersResult,
  CreateItemModelMasterResult,
  GetItemModelMasterResult,
  UpdateItemModelMasterResult,
  DeleteItemModelMasterResult,
  DescribeItemModelsResult,
  GetItemModelResult,
  ExportMasterResult,
  GetCurrentItemModelMasterResult,
  UpdateCurrentItemModelMasterResult,
  UpdateCurrentItemModelMasterFromGitHubResult,
  DescribeInventoriesResult,
  DescribeInventoriesByUserIdResult,
  GetInventoryResult,
  GetInventoryByUserIdResult,
  AddCapacityByUserIdResult,
  SetCapacityByUserIdResult,
  DeleteInventoryByUserIdResult,
  AddCapacityByStampSheetResult,
  SetCapacityByStampSheetResult,
  DescribeItemSetsResult,
  DescribeItemSetsByUserIdResult,
  GetItemSetResult,
  GetItemSetByUserIdResult,
  GetItemWithSignatureResult,
  GetItemWithSignatureByUserIdResult,
  AcquireItemSetByUserIdResult,
  ConsumeItemSetResult,
  ConsumeItemSetByUserIdResult,
  DeleteItemSetByUserIdResult,
  AcquireItemSetByStampSheetResult,
  ConsumeItemSetByStampTaskResult,
} from './result';

import {
  Namespace,
  InventoryModelMaster,
  InventoryModel,
  ItemModelMaster,
  ItemModel,
  CurrentItemModelMaster,
  Inventory,
  ItemSet,
  ItemSetGroup,
  ResponseCache,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
} from './model';

import axios from 'axios';

export class Gs2InventoryRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'inventory';

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
      .replace('{service}', 'inventory')
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
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.acquireScript !== undefined) {
      body['acquireScript'] = request.acquireScript ? request.acquireScript.toDict() : null;
    }
    if (request.overflowScript !== undefined) {
      body['overflowScript'] = request.overflowScript ? request.overflowScript.toDict() : null;
    }
    if (request.consumeScript !== undefined) {
      body['consumeScript'] = request.consumeScript ? request.consumeScript.toDict() : null;
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
      .replace('{service}', 'inventory')
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
      .replace('{service}', 'inventory')
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
      .replace('{service}', 'inventory')
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
    if (request.acquireScript !== undefined) {
      body['acquireScript'] = request.acquireScript ? request.acquireScript.toDict() : null;
    }
    if (request.overflowScript !== undefined) {
      body['overflowScript'] = request.overflowScript ? request.overflowScript.toDict() : null;
    }
    if (request.consumeScript !== undefined) {
      body['consumeScript'] = request.consumeScript ? request.consumeScript.toDict() : null;
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
      .replace('{service}', 'inventory')
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
   * インベントリモデルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeInventoryModelMasters(request: DescribeInventoryModelMastersRequest): Promise<DescribeInventoryModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory')
      .replace('{service}', 'inventory')
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
        return new DescribeInventoryModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリモデルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createInventoryModelMaster(request: CreateInventoryModelMasterRequest): Promise<CreateInventoryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory')
      .replace('{service}', 'inventory')
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
    if (request.initialCapacity !== undefined) {
      body['initialCapacity'] = request.initialCapacity;
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
        return new CreateInventoryModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリモデルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getInventoryModelMaster(request: GetInventoryModelMasterRequest): Promise<GetInventoryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new GetInventoryModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリモデルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateInventoryModelMaster(request: UpdateInventoryModelMasterRequest): Promise<UpdateInventoryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.initialCapacity !== undefined) {
      body['initialCapacity'] = request.initialCapacity;
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
        return new UpdateInventoryModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリモデルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteInventoryModelMaster(request: DeleteInventoryModelMasterRequest): Promise<DeleteInventoryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DeleteInventoryModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリモデルの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeInventoryModels(request: DescribeInventoryModelsRequest): Promise<DescribeInventoryModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory')
      .replace('{service}', 'inventory')
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
        return new DescribeInventoryModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリモデルを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getInventoryModel(request: GetInventoryModelRequest): Promise<GetInventoryModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new GetInventoryModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アイテムモデルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeItemModelMasters(request: DescribeItemModelMastersRequest): Promise<DescribeItemModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DescribeItemModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アイテムモデルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createItemModelMaster(request: CreateItemModelMasterRequest): Promise<CreateItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
    if (request.stackingLimit !== undefined) {
      body['stackingLimit'] = request.stackingLimit;
    }
    if (request.allowMultipleStacks !== undefined) {
      body['allowMultipleStacks'] = request.allowMultipleStacks;
    }
    if (request.sortValue !== undefined) {
      body['sortValue'] = request.sortValue;
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
        return new CreateItemModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * アイテムモデルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemModelMaster(request: GetItemModelMasterRequest): Promise<GetItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
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
        return new GetItemModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アイテムモデルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateItemModelMaster(request: UpdateItemModelMasterRequest): Promise<UpdateItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.stackingLimit !== undefined) {
      body['stackingLimit'] = request.stackingLimit;
    }
    if (request.allowMultipleStacks !== undefined) {
      body['allowMultipleStacks'] = request.allowMultipleStacks;
    }
    if (request.sortValue !== undefined) {
      body['sortValue'] = request.sortValue;
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
        return new UpdateItemModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * アイテムモデルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteItemModelMaster(request: DeleteItemModelMasterRequest): Promise<DeleteItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
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
        return new DeleteItemModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * Noneの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeItemModels(request: DescribeItemModelsRequest): Promise<DescribeItemModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}/item')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DescribeItemModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * Noneを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemModel(request: GetItemModelRequest): Promise<GetItemModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
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
        return new GetItemModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効な所持品マスターのマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'inventory')
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
   * 現在有効な所持品マスターを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentItemModelMaster(request: GetCurrentItemModelMasterRequest): Promise<GetCurrentItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'inventory')
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
        return new GetCurrentItemModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効な所持品マスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentItemModelMaster(request: UpdateCurrentItemModelMasterRequest): Promise<UpdateCurrentItemModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'inventory')
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
        return new UpdateCurrentItemModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効な所持品マスターを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentItemModelMasterFromGitHub(request: UpdateCurrentItemModelMasterFromGitHubRequest): Promise<UpdateCurrentItemModelMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'inventory')
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
        return new UpdateCurrentItemModelMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeInventories(request: DescribeInventoriesRequest): Promise<DescribeInventoriesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory')
      .replace('{service}', 'inventory')
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
        return new DescribeInventoriesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeInventoriesByUserId(request: DescribeInventoriesByUserIdRequest): Promise<DescribeInventoriesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory')
      .replace('{service}', 'inventory')
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
        return new DescribeInventoriesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getInventory(request: GetInventoryRequest): Promise<GetInventoryResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new GetInventoryResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * インベントリを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getInventoryByUserId(request: GetInventoryByUserIdRequest): Promise<GetInventoryByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new GetInventoryByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * キャパシティサイズを加算<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public addCapacityByUserId(request: AddCapacityByUserIdRequest): Promise<AddCapacityByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/capacity')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.addCapacityValue !== undefined) {
      body['addCapacityValue'] = request.addCapacityValue;
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
        return new AddCapacityByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * キャパシティサイズを設定<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public setCapacityByUserId(request: SetCapacityByUserIdRequest): Promise<SetCapacityByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/capacity')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.newCapacityValue !== undefined) {
      body['newCapacityValue'] = request.newCapacityValue;
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
        return new SetCapacityByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteInventoryByUserId(request: DeleteInventoryByUserIdRequest): Promise<DeleteInventoryByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DeleteInventoryByUserIdResult(response.data);
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
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/inventory/capacity/add')
      .replace('{service}', 'inventory')
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
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/inventory/capacity/set')
      .replace('{service}', 'inventory')
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
   * 有効期限ごとのアイテム所持数量の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeItemSets(request: DescribeItemSetsRequest): Promise<DescribeItemSetsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DescribeItemSetsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeItemSetsByUserId(request: DescribeItemSetsByUserIdRequest): Promise<DescribeItemSetsByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
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
        return new DescribeItemSetsByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemSet(request: GetItemSetRequest): Promise<GetItemSetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.itemSetName !== undefined ) {
      params['itemSetName'] = String(request.itemSetName);
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
        return new GetItemSetResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemSetByUserId(request: GetItemSetByUserIdRequest): Promise<GetItemSetByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.itemSetName !== undefined ) {
      params['itemSetName'] = String(request.itemSetName);
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
        return new GetItemSetByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemWithSignature(request: GetItemWithSignatureRequest): Promise<GetItemWithSignatureResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/signature')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.itemSetName !== undefined ) {
      params['itemSetName'] = String(request.itemSetName);
    }
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
        return new GetItemWithSignatureResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getItemWithSignatureByUserId(request: GetItemWithSignatureByUserIdRequest): Promise<GetItemWithSignatureByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/signature')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.itemSetName !== undefined ) {
      params['itemSetName'] = String(request.itemSetName);
    }
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
        return new GetItemWithSignatureByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アイテムをインベントリに追加<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public acquireItemSetByUserId(request: AcquireItemSetByUserIdRequest): Promise<AcquireItemSetByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/acquire')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.acquireCount !== undefined) {
      body['acquireCount'] = request.acquireCount;
    }
    if (request.expiresAt !== undefined) {
      body['expiresAt'] = request.expiresAt;
    }
    if (request.createNewItemSet !== undefined) {
      body['createNewItemSet'] = request.createNewItemSet;
    }
    if (request.itemSetName !== undefined && request.itemSetName !== '') {
      body['itemSetName'] = request.itemSetName;
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
        return new AcquireItemSetByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリのアイテムを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeItemSet(request: ConsumeItemSetRequest): Promise<ConsumeItemSetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/consume')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.consumeCount !== undefined) {
      body['consumeCount'] = request.consumeCount;
    }
    if (request.itemSetName !== undefined && request.itemSetName !== '') {
      body['itemSetName'] = request.itemSetName;
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
        return new ConsumeItemSetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * インベントリのアイテムを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeItemSetByUserId(request: ConsumeItemSetByUserIdRequest): Promise<ConsumeItemSetByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/consume')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.consumeCount !== undefined) {
      body['consumeCount'] = request.consumeCount;
    }
    if (request.itemSetName !== undefined && request.itemSetName !== '') {
      body['itemSetName'] = request.itemSetName;
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
        return new ConsumeItemSetByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 有効期限ごとのアイテム所持数量を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteItemSetByUserId(request: DeleteItemSetByUserIdRequest): Promise<DeleteItemSetByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}')
      .replace('{service}', 'inventory')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{inventoryName}',
        request.inventoryName ? String(request.inventoryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      )
      .replace(
        '{itemName}',
        request.itemName ? String(request.itemName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.itemSetName !== undefined ) {
      params['itemSetName'] = String(request.itemSetName);
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
        return new DeleteItemSetByUserIdResult(response.data);
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
  public acquireItemSetByStampSheet(request: AcquireItemSetByStampSheetRequest): Promise<AcquireItemSetByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/item/acquire')
      .replace('{service}', 'inventory')
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
        return new AcquireItemSetByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタンプシートでインベントリのアイテムを消費<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public consumeItemSetByStampTask(request: ConsumeItemSetByStampTaskRequest): Promise<ConsumeItemSetByStampTaskResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/item/consume')
      .replace('{service}', 'inventory')
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
        return new ConsumeItemSetByStampTaskResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
