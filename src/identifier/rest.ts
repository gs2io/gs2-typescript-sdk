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
import * as Request from './request';
import * as Result from './result';

import axios from 'axios';

export class Gs2IdentifierRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeUsers(request: Request.DescribeUsersRequest): Promise<Result.DescribeUsersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeUsersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createUser(request: Request.CreateUserRequest): Promise<Result.CreateUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateUserResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateUser(request: Request.UpdateUserRequest): Promise<Result.UpdateUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateUserResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getUser(request: Request.GetUserRequest): Promise<Result.GetUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetUserResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteUser(request: Request.DeleteUserRequest): Promise<Result.DeleteUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteUserResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeSecurityPolicies(request: Request.DescribeSecurityPoliciesRequest): Promise<Result.DescribeSecurityPoliciesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeSecurityPoliciesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeCommonSecurityPolicies(request: Request.DescribeCommonSecurityPoliciesRequest): Promise<Result.DescribeCommonSecurityPoliciesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/common')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeCommonSecurityPoliciesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createSecurityPolicy(request: Request.CreateSecurityPolicyRequest): Promise<Result.CreateSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'policy': request.getPolicy() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateSecurityPolicy(request: Request.UpdateSecurityPolicyRequest): Promise<Result.UpdateSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String(request.getSecurityPolicyName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'policy': request.getPolicy() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getSecurityPolicy(request: Request.GetSecurityPolicyRequest): Promise<Result.GetSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String(request.getSecurityPolicyName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteSecurityPolicy(request: Request.DeleteSecurityPolicyRequest): Promise<Result.DeleteSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String(request.getSecurityPolicyName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeIdentifiers(request: Request.DescribeIdentifiersRequest): Promise<Result.DescribeIdentifiersResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeIdentifiersResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createIdentifier(request: Request.CreateIdentifierRequest): Promise<Result.CreateIdentifierResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateIdentifierResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getIdentifier(request: Request.GetIdentifierRequest): Promise<Result.GetIdentifierResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'))
            .replace('{clientId}', String(request.getClientId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetIdentifierResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteIdentifier(request: Request.DeleteIdentifierRequest): Promise<Result.DeleteIdentifierResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'))
            .replace('{clientId}', String(request.getClientId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteIdentifierResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describePasswords(request: Request.DescribePasswordsRequest): Promise<Result.DescribePasswordsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'pageToken': String(request.getPageToken() ?? null),
            'limit': String(request.getLimit() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribePasswordsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createPassword(request: Request.CreatePasswordRequest): Promise<Result.CreatePasswordResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreatePasswordResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getPassword(request: Request.GetPasswordRequest): Promise<Result.GetPasswordResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password/entity')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetPasswordResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deletePassword(request: Request.DeletePasswordRequest): Promise<Result.DeletePasswordResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password/entity')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeletePasswordResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getHasSecurityPolicy(request: Request.GetHasSecurityPolicyRequest): Promise<Result.GetHasSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetHasSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public attachSecurityPolicy(request: Request.AttachSecurityPolicyRequest): Promise<Result.AttachSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'securityPolicyId': request.getSecurityPolicyId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AttachSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public detachSecurityPolicy(request: Request.DetachSecurityPolicyRequest): Promise<Result.DetachSecurityPolicyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy/{securityPolicyId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String(request.getUserName() ?? 'null'))
            .replace('{securityPolicyId}', String(request.getSecurityPolicyId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DetachSecurityPolicyResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public login(request: Request.LoginRequest): Promise<Result.LoginResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/projectToken/login')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'client_id': request.getClientId() ?? null,
            'client_secret': request.getClientSecret() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.LoginResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public loginByUser(request: Request.LoginByUserRequest): Promise<Result.LoginByUserResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/projectToken/login/user')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userName': request.getUserName() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.LoginByUserResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
