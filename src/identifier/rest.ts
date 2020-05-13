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
  DescribeUsersRequest,
  CreateUserRequest,
  UpdateUserRequest,
  GetUserRequest,
  DeleteUserRequest,
  DescribeSecurityPoliciesRequest,
  DescribeCommonSecurityPoliciesRequest,
  CreateSecurityPolicyRequest,
  UpdateSecurityPolicyRequest,
  GetSecurityPolicyRequest,
  DeleteSecurityPolicyRequest,
  DescribeIdentifiersRequest,
  CreateIdentifierRequest,
  GetIdentifierRequest,
  DeleteIdentifierRequest,
  GetHasSecurityPolicyRequest,
  AttachSecurityPolicyRequest,
  DetachSecurityPolicyRequest,
  LoginRequest,
} from './request';

import {
  DescribeUsersResult,
  CreateUserResult,
  UpdateUserResult,
  GetUserResult,
  DeleteUserResult,
  DescribeSecurityPoliciesResult,
  DescribeCommonSecurityPoliciesResult,
  CreateSecurityPolicyResult,
  UpdateSecurityPolicyResult,
  GetSecurityPolicyResult,
  DeleteSecurityPolicyResult,
  DescribeIdentifiersResult,
  CreateIdentifierResult,
  GetIdentifierResult,
  DeleteIdentifierResult,
  GetHasSecurityPolicyResult,
  AttachSecurityPolicyResult,
  DetachSecurityPolicyResult,
  LoginResult,
} from './result';

import {
  User,
  SecurityPolicy,
  Identifier,
  AttachSecurityPolicy,
  ProjectToken,
} from './model';

import axios from 'axios';

export class Gs2IdentifierRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'identifier';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * ユーザの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeUsers(request: DescribeUsersRequest): Promise<DescribeUsersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user')
      .replace('{service}', 'identifier')
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
        return new DescribeUsersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザを新規作成します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createUser(request: CreateUserRequest): Promise<CreateUserResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
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
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new CreateUserResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateUser(request: UpdateUserRequest): Promise<UpdateUserResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
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
        return new UpdateUserResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * ユーザを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getUser(request: GetUserRequest): Promise<GetUserResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
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
        return new GetUserResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * ユーザを削除します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteUser(request: DeleteUserRequest): Promise<DeleteUserResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
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
        return new DeleteUserResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * セキュリティポリシーの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeSecurityPolicies(request: DescribeSecurityPoliciesRequest): Promise<DescribeSecurityPoliciesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
      .replace('{service}', 'identifier')
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
        return new DescribeSecurityPoliciesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * オーナーIDを指定してセキュリティポリシーの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeCommonSecurityPolicies(request: DescribeCommonSecurityPoliciesRequest): Promise<DescribeCommonSecurityPoliciesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/common')
      .replace('{service}', 'identifier')
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
        return new DescribeCommonSecurityPoliciesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * セキュリティポリシーを新規作成します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createSecurityPolicy(request: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.name !== undefined && request.name !== '') {
      body['name'] = request.name;
    }
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.policy !== undefined && request.policy !== '') {
      body['policy'] = request.policy;
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
        return new CreateSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * セキュリティポリシーを更新します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public updateSecurityPolicy(request: UpdateSecurityPolicyRequest): Promise<UpdateSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{securityPolicyName}',
        request.securityPolicyName ? String(request.securityPolicyName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.description !== undefined && request.description !== '') {
      body['description'] = request.description;
    }
    if (request.policy !== undefined && request.policy !== '') {
      body['policy'] = request.policy;
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
        return new UpdateSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * セキュリティポリシーを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getSecurityPolicy(request: GetSecurityPolicyRequest): Promise<GetSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{securityPolicyName}',
        request.securityPolicyName ? String(request.securityPolicyName) : 'null',
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
        return new GetSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * セキュリティポリシーを削除します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteSecurityPolicy(request: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{securityPolicyName}',
        request.securityPolicyName ? String(request.securityPolicyName) : 'null',
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
        return new DeleteSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クレデンシャルの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeIdentifiers(request: DescribeIdentifiersRequest): Promise<DescribeIdentifiersResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
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
        return new DescribeIdentifiersResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クレデンシャルを新規作成します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public createIdentifier(request: CreateIdentifierRequest): Promise<CreateIdentifierResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
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
        return new CreateIdentifierResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * クレデンシャルを取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getIdentifier(request: GetIdentifierRequest): Promise<GetIdentifierResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
      )
      .replace(
        '{clientId}',
        request.clientId ? String(request.clientId) : 'null',
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
        return new GetIdentifierResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * クレデンシャルを削除します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public deleteIdentifier(request: DeleteIdentifierRequest): Promise<DeleteIdentifierResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
      )
      .replace(
        '{clientId}',
        request.clientId ? String(request.clientId) : 'null',
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
        return new DeleteIdentifierResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 割り当てられたセキュリティポリシーの一覧を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getHasSecurityPolicy(request: GetHasSecurityPolicyRequest): Promise<GetHasSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
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
        return new GetHasSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 割り当てられたセキュリティポリシーを新しくユーザーに割り当てます<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public attachSecurityPolicy(request: AttachSecurityPolicyRequest): Promise<AttachSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.securityPolicyId !== undefined && request.securityPolicyId !== '') {
      body['securityPolicyId'] = request.securityPolicyId;
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
        return new AttachSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 割り当てられたセキュリティポリシーをユーザーから外します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public detachSecurityPolicy(request: DetachSecurityPolicyRequest): Promise<DetachSecurityPolicyResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy/{securityPolicyId}')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region)
      .replace(
        '{userName}',
        request.userName ? String(request.userName) : 'null',
      )
      .replace(
        '{securityPolicyId}',
        request.securityPolicyId ? String(request.securityPolicyId) : 'null',
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
        return new DetachSecurityPolicyResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * プロジェクトトークン を取得します<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public login(request: LoginRequest): Promise<LoginResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/projectToken/login')
      .replace('{service}', 'identifier')
      .replace('{region}', this.session.region);

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.clientId !== undefined && request.clientId !== '') {
      body['client_id'] = request.clientId;
    }
    if (request.clientSecret !== undefined && request.clientSecret !== '') {
      body['client_secret'] = request.clientSecret;
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
        return new LoginResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
