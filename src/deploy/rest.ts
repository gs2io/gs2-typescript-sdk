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
  DescribeStacksRequest,
  CreateStackRequest,
  CreateStackFromGitHubRequest,
  ValidateRequest,
  GetStackStatusRequest,
  GetStackRequest,
  UpdateStackRequest,
  UpdateStackFromGitHubRequest,
  DeleteStackRequest,
  ForceDeleteStackRequest,
  DeleteStackResourcesRequest,
  DeleteStackEntityRequest,
  DescribeResourcesRequest,
  GetResourceRequest,
  DescribeEventsRequest,
  GetEventRequest,
  DescribeOutputsRequest,
  GetOutputRequest,
} from './request';

import {
  DescribeStacksResult,
  CreateStackResult,
  CreateStackFromGitHubResult,
  ValidateResult,
  GetStackStatusResult,
  GetStackResult,
  UpdateStackResult,
  UpdateStackFromGitHubResult,
  DeleteStackResult,
  ForceDeleteStackResult,
  DeleteStackResourcesResult,
  DeleteStackEntityResult,
  DescribeResourcesResult,
  GetResourceResult,
  DescribeEventsResult,
  GetEventResult,
  DescribeOutputsResult,
  GetOutputResult,
} from './result';

import {
  Stack,
  Resource,
  WorkingStack,
  WorkingResource,
  Event,
  Output,
  GitHubCheckoutSetting,
  OutputField,
} from './model';

import axios from 'axios';

export class Gs2DeployRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'deploy';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * スタックの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeStacks(request: DescribeStacksRequest): Promise<DescribeStacksResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack')
      .replace('{service}', 'deploy')
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
        return new DescribeStacksResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createStack(request: CreateStackRequest): Promise<CreateStackResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.template !== undefined && request.template !== '') {
      body['template'] = request.template;
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
        return new CreateStackResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタックを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createStackFromGitHub(request: CreateStackFromGitHubRequest): Promise<CreateStackFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/from_git_hub')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
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
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new CreateStackFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * テンプレートを検証<br>
   *   <br>
   *   このAPIの検証内容は簡易検証を行うに過ぎず、<br>
   *   このAPIで検証をパスしたとしても、実行したらエラーが発生する場合もあります<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public validate(request: ValidateRequest): Promise<ValidateResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/validate')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.template !== undefined && request.template !== '') {
      body['template'] = request.template;
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
        return new ValidateResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタックを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStackStatus(request: GetStackStatusRequest): Promise<GetStackStatusResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/status')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new GetStackStatusResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getStack(request: GetStackRequest): Promise<GetStackResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new GetStackResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateStack(request: UpdateStackRequest): Promise<UpdateStackResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.template !== undefined && request.template !== '') {
      body['template'] = request.template;
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
        return new UpdateStackResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタックを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateStackFromGitHub(request: UpdateStackFromGitHubRequest): Promise<UpdateStackFromGitHubResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/from_git_hub')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
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
        return new UpdateStackFromGitHubResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * スタックを削除<br>
   *   <br>
   *   スタックによって作成されたリソースの削除を行い、成功すればエンティティを削除します。<br>
   *   何らかの理由でリソースの削除に失敗した場合はエンティティが残ります。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteStack(request: DeleteStackRequest): Promise<DeleteStackResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DeleteStackResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックを強制的に最終削除<br>
   *   <br>
   *   スタックのエンティティを強制的に削除します。<br>
   *   スタックが作成したリソースが残っていても、それらは削除されません。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public forceDeleteStack(request: ForceDeleteStackRequest): Promise<ForceDeleteStackResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/force')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new ForceDeleteStackResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックのリソースを削除<br>
   *   <br>
   *   スタックによって作成されたリソースの削除を行います。<br>
   *   空のテンプレートでスタックを更新するのとほぼ同様の挙動ですが、スタックに適用されていたテンプレートが残るため、誤操作時に、残ったテンプレートからリソースを復元することができます。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteStackResources(request: DeleteStackResourcesRequest): Promise<DeleteStackResourcesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resources')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DeleteStackResourcesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * スタックを最終削除<br>
   *   <br>
   *   スタックのエンティティを削除します。<br>
   *   リソースの残っているスタックを削除しようとするとエラーになります。<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteStackEntity(request: DeleteStackEntityRequest): Promise<DeleteStackEntityResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/entity')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DeleteStackEntityResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 作成されたのリソースの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeResources(request: DescribeResourcesRequest): Promise<DescribeResourcesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DescribeResourcesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 作成されたのリソースを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getResource(request: GetResourceRequest): Promise<GetResourceResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource/{resourceName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
      )
      .replace(
        '{resourceName}',
        request.resourceName ? String(request.resourceName) : 'null',
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
        return new GetResourceResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 発生したイベントの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DescribeEventsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 発生したイベントを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getEvent(request: GetEventRequest): Promise<GetEventResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event/{eventName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new GetEventResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アウトプットの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeOutputs(request: DescribeOutputsRequest): Promise<DescribeOutputsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
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
        return new DescribeOutputsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * アウトプットを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getOutput(request: GetOutputRequest): Promise<GetOutputResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output/{outputName}')
      .replace('{service}', 'deploy')
      .replace('{region}', this.session.region)
      .replace(
        '{stackName}',
        request.stackName ? String(request.stackName) : 'null',
      )
      .replace(
        '{outputName}',
        request.outputName ? String(request.outputName) : 'null',
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
        return new GetOutputResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
