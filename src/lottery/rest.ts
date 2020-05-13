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
  DescribeLotteryModelMastersRequest,
  CreateLotteryModelMasterRequest,
  GetLotteryModelMasterRequest,
  UpdateLotteryModelMasterRequest,
  DeleteLotteryModelMasterRequest,
  DescribePrizeTableMastersRequest,
  CreatePrizeTableMasterRequest,
  GetPrizeTableMasterRequest,
  UpdatePrizeTableMasterRequest,
  DeletePrizeTableMasterRequest,
  DescribeBoxesRequest,
  DescribeBoxesByUserIdRequest,
  GetBoxRequest,
  GetBoxByUserIdRequest,
  GetRawBoxByUserIdRequest,
  ResetBoxRequest,
  ResetBoxByUserIdRequest,
  DescribeLotteryModelsRequest,
  GetLotteryModelRequest,
  DescribePrizeTablesRequest,
  GetPrizeTableRequest,
  DrawByUserIdRequest,
  DescribeProbabilitiesRequest,
  DescribeProbabilitiesByUserIdRequest,
  DrawByStampSheetRequest,
  ExportMasterRequest,
  GetCurrentLotteryMasterRequest,
  UpdateCurrentLotteryMasterRequest,
  UpdateCurrentLotteryMasterFromGitHubRequest,
} from './request';

import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeLotteryModelMastersResult,
  CreateLotteryModelMasterResult,
  GetLotteryModelMasterResult,
  UpdateLotteryModelMasterResult,
  DeleteLotteryModelMasterResult,
  DescribePrizeTableMastersResult,
  CreatePrizeTableMasterResult,
  GetPrizeTableMasterResult,
  UpdatePrizeTableMasterResult,
  DeletePrizeTableMasterResult,
  DescribeBoxesResult,
  DescribeBoxesByUserIdResult,
  GetBoxResult,
  GetBoxByUserIdResult,
  GetRawBoxByUserIdResult,
  ResetBoxResult,
  ResetBoxByUserIdResult,
  DescribeLotteryModelsResult,
  GetLotteryModelResult,
  DescribePrizeTablesResult,
  GetPrizeTableResult,
  DrawByUserIdResult,
  DescribeProbabilitiesResult,
  DescribeProbabilitiesByUserIdResult,
  DrawByStampSheetResult,
  ExportMasterResult,
  GetCurrentLotteryMasterResult,
  UpdateCurrentLotteryMasterResult,
  UpdateCurrentLotteryMasterFromGitHubResult,
} from './result';

import {
  Namespace,
  LotteryModelMaster,
  PrizeTableMaster,
  Box,
  LotteryModel,
  PrizeTable,
  Probability,
  CurrentLotteryMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
  Prize,
  AcquireAction,
  DrawnPrize,
  BoxItem,
  BoxItems,
  Config,
} from './model';

import axios from 'axios';

export class Gs2LotteryRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'lottery';

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
      .replace('{service}', 'lottery')
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
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.lotteryTriggerScriptId !== undefined && request.lotteryTriggerScriptId !== '') {
      body['lotteryTriggerScriptId'] = request.lotteryTriggerScriptId;
    }
    if (request.choicePrizeTableScriptId !== undefined && request.choicePrizeTableScriptId !== '') {
      body['choicePrizeTableScriptId'] = request.choicePrizeTableScriptId;
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
      .replace('{service}', 'lottery')
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
      .replace('{service}', 'lottery')
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
      .replace('{service}', 'lottery')
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
    if (request.queueNamespaceId !== undefined && request.queueNamespaceId !== '') {
      body['queueNamespaceId'] = request.queueNamespaceId;
    }
    if (request.keyId !== undefined && request.keyId !== '') {
      body['keyId'] = request.keyId;
    }
    if (request.lotteryTriggerScriptId !== undefined && request.lotteryTriggerScriptId !== '') {
      body['lotteryTriggerScriptId'] = request.lotteryTriggerScriptId;
    }
    if (request.choicePrizeTableScriptId !== undefined && request.choicePrizeTableScriptId !== '') {
      body['choicePrizeTableScriptId'] = request.choicePrizeTableScriptId;
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
      .replace('{service}', 'lottery')
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
   * 抽選の種類マスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeLotteryModelMasters(request: DescribeLotteryModelMastersRequest): Promise<DescribeLotteryModelMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/lottery')
      .replace('{service}', 'lottery')
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
        return new DescribeLotteryModelMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 抽選の種類マスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createLotteryModelMaster(request: CreateLotteryModelMasterRequest): Promise<CreateLotteryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/lottery')
      .replace('{service}', 'lottery')
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
    if (request.mode !== undefined && request.mode !== '') {
      body['mode'] = request.mode;
    }
    if (request.method !== undefined && request.method !== '') {
      body['method'] = request.method;
    }
    if (request.prizeTableName !== undefined && request.prizeTableName !== '') {
      body['prizeTableName'] = request.prizeTableName;
    }
    if (request.choicePrizeTableScriptId !== undefined && request.choicePrizeTableScriptId !== '') {
      body['choicePrizeTableScriptId'] = request.choicePrizeTableScriptId;
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
        return new CreateLotteryModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 抽選の種類マスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getLotteryModelMaster(request: GetLotteryModelMasterRequest): Promise<GetLotteryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/lottery/{lotteryName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
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
        return new GetLotteryModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 抽選の種類マスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateLotteryModelMaster(request: UpdateLotteryModelMasterRequest): Promise<UpdateLotteryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/lottery/{lotteryName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.mode !== undefined && request.mode !== '') {
      body['mode'] = request.mode;
    }
    if (request.method !== undefined && request.method !== '') {
      body['method'] = request.method;
    }
    if (request.prizeTableName !== undefined && request.prizeTableName !== '') {
      body['prizeTableName'] = request.prizeTableName;
    }
    if (request.choicePrizeTableScriptId !== undefined && request.choicePrizeTableScriptId !== '') {
      body['choicePrizeTableScriptId'] = request.choicePrizeTableScriptId;
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
        return new UpdateLotteryModelMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 抽選の種類マスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteLotteryModelMaster(request: DeleteLotteryModelMasterRequest): Promise<DeleteLotteryModelMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/lottery/{lotteryName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
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
        return new DeleteLotteryModelMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率テーブルマスターの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describePrizeTableMasters(request: DescribePrizeTableMastersRequest): Promise<DescribePrizeTableMastersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/table')
      .replace('{service}', 'lottery')
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
        return new DescribePrizeTableMastersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率テーブルマスターを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createPrizeTableMaster(request: CreatePrizeTableMasterRequest): Promise<CreatePrizeTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/table')
      .replace('{service}', 'lottery')
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
    if (request.prizes !== undefined) {
      body['prizes'] = request.prizes.map((item) => item.toDict());
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
        return new CreatePrizeTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 排出確率テーブルマスターを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getPrizeTableMaster(request: GetPrizeTableMasterRequest): Promise<GetPrizeTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/table/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new GetPrizeTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率テーブルマスターを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updatePrizeTableMaster(request: UpdatePrizeTableMasterRequest): Promise<UpdatePrizeTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/table/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.metadata !== undefined && request.metadata !== '') {
      body['metadata'] = request.metadata;
    }
    if (request.prizes !== undefined) {
      body['prizes'] = request.prizes.map((item) => item.toDict());
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
        return new UpdatePrizeTableMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 排出確率テーブルマスターを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deletePrizeTableMaster(request: DeletePrizeTableMasterRequest): Promise<DeletePrizeTableMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/table/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new DeletePrizeTableMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ボックスの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBoxes(request: DescribeBoxesRequest): Promise<DescribeBoxesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/box')
      .replace('{service}', 'lottery')
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
        return new DescribeBoxesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してボックスの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBoxesByUserId(request: DescribeBoxesByUserIdRequest): Promise<DescribeBoxesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/box')
      .replace('{service}', 'lottery')
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
        return new DescribeBoxesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ボックスを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getBox(request: GetBoxRequest): Promise<GetBoxResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/box/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new GetBoxResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してボックスを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getBoxByUserId(request: GetBoxByUserIdRequest): Promise<GetBoxByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/box/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new GetBoxByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してボックスを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getRawBoxByUserId(request: GetRawBoxByUserIdRequest): Promise<GetRawBoxByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/box/{prizeTableName}/raw')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new GetRawBoxByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ボックスをリセット<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public resetBox(request: ResetBoxRequest): Promise<ResetBoxResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/box/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new ResetBoxResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定してボックスをリセット<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public resetBoxByUserId(request: ResetBoxByUserIdRequest): Promise<ResetBoxByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/box/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new ResetBoxByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 抽選の種類の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeLotteryModels(request: DescribeLotteryModelsRequest): Promise<DescribeLotteryModelsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/lottery')
      .replace('{service}', 'lottery')
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
        return new DescribeLotteryModelsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 抽選の種類を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getLotteryModel(request: GetLotteryModelRequest): Promise<GetLotteryModelResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/lottery/{lotteryName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
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
        return new GetLotteryModelResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率テーブルの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describePrizeTables(request: DescribePrizeTablesRequest): Promise<DescribePrizeTablesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/table')
      .replace('{service}', 'lottery')
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
        return new DescribePrizeTablesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率テーブルを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getPrizeTable(request: GetPrizeTableRequest): Promise<GetPrizeTableResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/table/{prizeTableName}')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{prizeTableName}',
        request.prizeTableName ? String(request.prizeTableName) : 'null',
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
        return new GetPrizeTableResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザIDを指定して抽選を実行<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public drawByUserId(request: DrawByUserIdRequest): Promise<DrawByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/lottery/{lotteryName}/draw')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
      )
      .replace(
        '{userId}',
        request.userId ? String(request.userId) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.count !== undefined) {
      body['count'] = request.count;
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
        return new DrawByUserIdResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 排出確率を取得<br>
   *   <br>
   *   通常抽選ではすべてのゲームプレイヤーに対して同じ確率を応答します。<br>
   *   ボックス抽選ではボックスの中身の残りを考慮したゲームプレイヤーごとに異なる確率を応答します。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeProbabilities(request: DescribeProbabilitiesRequest): Promise<DescribeProbabilitiesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/lottery/{lotteryName}/probability')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
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
        return new DescribeProbabilitiesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 排出確率を取得<br>
   *   <br>
   *   通常抽選ではすべてのゲームプレイヤーに対して同じ確率を応答します。<br>
   *   ボックス抽選ではボックスの中身の残りを考慮したゲームプレイヤーごとに異なる確率を応答します。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeProbabilitiesByUserId(request: DescribeProbabilitiesByUserIdRequest): Promise<DescribeProbabilitiesByUserIdResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/lottery/{lotteryName}/probability')
      .replace('{service}', 'lottery')
      .replace('{region}', this.session.region)
      .replace(
        '{namespaceName}',
        request.namespaceName ? String(request.namespaceName) : 'null',
      )
      .replace(
        '{lotteryName}',
        request.lotteryName ? String(request.lotteryName) : 'null',
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
        return new DescribeProbabilitiesByUserIdResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタンプシートを使用して抽選処理を実行<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public drawByStampSheet(request: DrawByStampSheetRequest): Promise<DrawByStampSheetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stamp/draw')
      .replace('{service}', 'lottery')
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
        return new DrawByStampSheetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効な抽選設定のマスターデータをエクスポートします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public exportMaster(request: ExportMasterRequest): Promise<ExportMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
      .replace('{service}', 'lottery')
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
   * 現在有効な抽選設定を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCurrentLotteryMaster(request: GetCurrentLotteryMasterRequest): Promise<GetCurrentLotteryMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'lottery')
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
        return new GetCurrentLotteryMasterResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 現在有効な抽選設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentLotteryMaster(request: UpdateCurrentLotteryMasterRequest): Promise<UpdateCurrentLotteryMasterResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
      .replace('{service}', 'lottery')
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
        return new UpdateCurrentLotteryMasterResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 現在有効な抽選設定を更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateCurrentLotteryMasterFromGitHub(request: UpdateCurrentLotteryMasterFromGitHubRequest): Promise<UpdateCurrentLotteryMasterFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
      .replace('{service}', 'lottery')
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
        return new UpdateCurrentLotteryMasterFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
