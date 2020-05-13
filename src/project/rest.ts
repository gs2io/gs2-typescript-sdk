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
  CreateAccountRequest,
  VerifyRequest,
  SignInRequest,
  IssueAccountTokenRequest,
  ForgetRequest,
  IssuePasswordRequest,
  UpdateAccountRequest,
  DeleteAccountRequest,
  DescribeProjectsRequest,
  CreateProjectRequest,
  GetProjectRequest,
  GetProjectTokenRequest,
  UpdateProjectRequest,
  DeleteProjectRequest,
  DescribeBillingMethodsRequest,
  CreateBillingMethodRequest,
  GetBillingMethodRequest,
  UpdateBillingMethodRequest,
  DeleteBillingMethodRequest,
  DescribeReceiptsRequest,
  DescribeBillingsRequest,
} from './request';

import {
  CreateAccountResult,
  VerifyResult,
  SignInResult,
  IssueAccountTokenResult,
  ForgetResult,
  IssuePasswordResult,
  UpdateAccountResult,
  DeleteAccountResult,
  DescribeProjectsResult,
  CreateProjectResult,
  GetProjectResult,
  GetProjectTokenResult,
  UpdateProjectResult,
  DeleteProjectResult,
  DescribeBillingMethodsResult,
  CreateBillingMethodResult,
  GetBillingMethodResult,
  UpdateBillingMethodResult,
  DeleteBillingMethodResult,
  DescribeReceiptsResult,
  DescribeBillingsResult,
} from './result';

import {
  Account,
  Project,
  BillingMethod,
  Receipt,
  Billing,
} from './model';

import axios from 'axios';

export class Gs2ProjectRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'project';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * アカウントを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createAccount(request: CreateAccountRequest): Promise<CreateAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.email !== undefined && request.email !== '') {
      body['email'] = request.email;
    }
    if (request.fullName !== undefined && request.fullName !== '') {
      body['fullName'] = request.fullName;
    }
    if (request.companyName !== undefined && request.companyName !== '') {
      body['companyName'] = request.companyName;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
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
        return new CreateAccountResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * GS2アカウントを有効化します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public verify(request: VerifyRequest): Promise<VerifyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/verify')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.verifyToken !== undefined && request.verifyToken !== '') {
      body['verifyToken'] = request.verifyToken;
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
        return new VerifyResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * サインインします<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public signIn(request: SignInRequest): Promise<SignInResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/signIn')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.email !== undefined && request.email !== '') {
      body['email'] = request.email;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
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
        return new SignInResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 指定したアカウント名のアカウントトークンを発行<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public issueAccountToken(request: IssueAccountTokenRequest): Promise<IssueAccountTokenResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/accountToken')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountName !== undefined && request.accountName !== '') {
      body['accountName'] = request.accountName;
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
        return new IssueAccountTokenResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * パスワード再発行トークンを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public forget(request: ForgetRequest): Promise<ForgetResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/forget')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.email !== undefined && request.email !== '') {
      body['email'] = request.email;
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
        return new ForgetResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * パスワードを再発行<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public issuePassword(request: IssuePasswordRequest): Promise<IssuePasswordResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/password/issue')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.issuePasswordToken !== undefined && request.issuePasswordToken !== '') {
      body['issuePasswordToken'] = request.issuePasswordToken;
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
        return new IssuePasswordResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * GS2アカウントを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.email !== undefined && request.email !== '') {
      body['email'] = request.email;
    }
    if (request.fullName !== undefined && request.fullName !== '') {
      body['fullName'] = request.fullName;
    }
    if (request.companyName !== undefined && request.companyName !== '') {
      body['companyName'] = request.companyName;
    }
    if (request.password !== undefined && request.password !== '') {
      body['password'] = request.password;
    }
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
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
        return new UpdateAccountResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * GS2アカウントを削除します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

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
        return new DeleteAccountResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロジェクトの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeProjects(request: DescribeProjectsRequest): Promise<DescribeProjectsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new DescribeProjectsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロジェクトを新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createProject(request: CreateProjectRequest): Promise<CreateProjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
    }
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.plan !== undefined && request.plan !== '') {
      body['plan'] = request.plan;
    }
    if (request.billingMethodName !== undefined && request.billingMethodName !== '') {
      body['billingMethodName'] = request.billingMethodName;
    }
    if (request.enableEventBridge !== undefined && request.enableEventBridge !== '') {
      body['enableEventBridge'] = request.enableEventBridge;
    }
    if (request.eventBridgeAwsAccountId !== undefined && request.eventBridgeAwsAccountId !== '') {
      body['eventBridgeAwsAccountId'] = request.eventBridgeAwsAccountId;
    }
    if (request.eventBridgeAwsRegion !== undefined && request.eventBridgeAwsRegion !== '') {
      body['eventBridgeAwsRegion'] = request.eventBridgeAwsRegion;
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
        return new CreateProjectResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * プロジェクトを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProject(request: GetProjectRequest): Promise<GetProjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{projectName}',
        request.projectName ? String(request.projectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new GetProjectResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロジェクトトークンを発行します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getProjectToken(request: GetProjectTokenRequest): Promise<GetProjectTokenResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/project/{projectName}/projectToken')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{projectName}',
        request.projectName ? String(request.projectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
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
        return new GetProjectTokenResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * プロジェクトを更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{projectName}',
        request.projectName ? String(request.projectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.plan !== undefined && request.plan !== '') {
      body['plan'] = request.plan;
    }
    if (request.billingMethodName !== undefined && request.billingMethodName !== '') {
      body['billingMethodName'] = request.billingMethodName;
    }
    if (request.enableEventBridge !== undefined && request.enableEventBridge !== '') {
      body['enableEventBridge'] = request.enableEventBridge;
    }
    if (request.eventBridgeAwsAccountId !== undefined && request.eventBridgeAwsAccountId !== '') {
      body['eventBridgeAwsAccountId'] = request.eventBridgeAwsAccountId;
    }
    if (request.eventBridgeAwsRegion !== undefined && request.eventBridgeAwsRegion !== '') {
      body['eventBridgeAwsRegion'] = request.eventBridgeAwsRegion;
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
        return new UpdateProjectResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * プロジェクトを削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{projectName}',
        request.projectName ? String(request.projectName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new DeleteProjectResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 支払い方法の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBillingMethods(request: DescribeBillingMethodsRequest): Promise<DescribeBillingMethodsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new DescribeBillingMethodsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 支払い方法を新規作成<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createBillingMethod(request: CreateBillingMethodRequest): Promise<CreateBillingMethodResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.methodType !== undefined && request.methodType !== '') {
      body['methodType'] = request.methodType;
    }
    if (request.cardCustomerId !== undefined && request.cardCustomerId !== '') {
      body['cardCustomerId'] = request.cardCustomerId;
    }
    if (request.partnerId !== undefined && request.partnerId !== '') {
      body['partnerId'] = request.partnerId;
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
        return new CreateBillingMethodResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 支払い方法を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getBillingMethod(request: GetBillingMethodRequest): Promise<GetBillingMethodResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{billingMethodName}',
        request.billingMethodName ? String(request.billingMethodName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new GetBillingMethodResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 支払い方法を更新<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateBillingMethod(request: UpdateBillingMethodRequest): Promise<UpdateBillingMethodResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{billingMethodName}',
        request.billingMethodName ? String(request.billingMethodName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.accountToken !== undefined && request.accountToken !== '') {
      body['accountToken'] = request.accountToken;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
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
        return new UpdateBillingMethodResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 支払い方法を削除<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteBillingMethod(request: DeleteBillingMethodRequest): Promise<DeleteBillingMethodResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{billingMethodName}',
        request.billingMethodName ? String(request.billingMethodName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new DeleteBillingMethodResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 領収書の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeReceipts(request: DescribeReceiptsRequest): Promise<DescribeReceiptsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/receipt')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
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
        return new DescribeReceiptsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 利用状況の一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBillings(request: DescribeBillingsRequest): Promise<DescribeBillingsResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billing/{projectName}/{year}/{month}')
      .replace('{service}', 'project')
      .replace('{region}', this.session.region)
      .replace(
        '{projectName}',
        request.projectName ? String(request.projectName) : 'null',
      )
      .replace(
        '{year}',
        request.year ? String(request.year) : 'null',
      )
      .replace(
        '{month}',
        request.month ? String(request.month) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.accountToken !== undefined ) {
      params['accountToken'] = String(request.accountToken);
    }
    if (request.region !== undefined ) {
      params['region'] = String(request.region);
    }
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
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
        return new DescribeBillingsResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }
}
