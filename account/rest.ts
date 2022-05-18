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

export default class Gs2AccountRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'account')
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
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'changePasswordIfTakeOver': request.getChangePasswordIfTakeOver() ?? null,
            'differentUserIdForLoginAndDataRetention': request.getDifferentUserIdForLoginAndDataRetention() ?? null,
            'createAccountScript': request.getCreateAccountScript()?.toDict() ?? null,
            'authenticationScript': request.getAuthenticationScript()?.toDict() ?? null,
            'createTakeOverScript': request.getCreateTakeOverScript()?.toDict() ?? null,
            'doTakeOverScript': request.getDoTakeOverScript()?.toDict() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'changePasswordIfTakeOver': request.getChangePasswordIfTakeOver() ?? null,
            'differentUserIdForLoginAndDataRetention': request.getDifferentUserIdForLoginAndDataRetention() ?? null,
            'createAccountScript': request.getCreateAccountScript()?.toDict() ?? null,
            'authenticationScript': request.getAuthenticationScript()?.toDict() ?? null,
            'createTakeOverScript': request.getCreateTakeOverScript()?.toDict() ?? null,
            'doTakeOverScript': request.getDoTakeOverScript()?.toDict() ?? null,
            'logSetting': request.getLogSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeAccounts(request: Request.DescribeAccountsRequest): Promise<Result.DescribeAccountsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            return Result.DescribeAccountsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createAccount(request: Request.CreateAccountRequest): Promise<Result.CreateAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
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
            return Result.CreateAccountResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateTimeOffset(request: Request.UpdateTimeOffsetRequest): Promise<Result.UpdateTimeOffsetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/time_offset')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'timeOffset': request.getTimeOffset() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateTimeOffsetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getAccount(request: Request.GetAccountRequest): Promise<Result.GetAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.GetAccountResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteAccount(request: Request.DeleteAccountRequest): Promise<Result.DeleteAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.DeleteAccountResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public authentication(request: Request.AuthenticationRequest): Promise<Result.AuthenticationResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'keyId': request.getKeyId() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.AuthenticationResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeTakeOvers(request: Request.DescribeTakeOversRequest): Promise<Result.DescribeTakeOversResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
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
            return Result.DescribeTakeOversResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeTakeOversByUserId(request: Request.DescribeTakeOversByUserIdRequest): Promise<Result.DescribeTakeOversByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.DescribeTakeOversByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createTakeOver(request: Request.CreateTakeOverRequest): Promise<Result.CreateTakeOverResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'type': request.getType() ?? null,
            'userIdentifier': request.getUserIdentifier() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateTakeOverResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createTakeOverByUserId(request: Request.CreateTakeOverByUserIdRequest): Promise<Result.CreateTakeOverByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'type': request.getType() ?? null,
            'userIdentifier': request.getUserIdentifier() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateTakeOverByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getTakeOver(request: Request.GetTakeOverRequest): Promise<Result.GetTakeOverResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
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
            return Result.GetTakeOverResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getTakeOverByUserId(request: Request.GetTakeOverByUserIdRequest): Promise<Result.GetTakeOverByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
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
            return Result.GetTakeOverByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateTakeOver(request: Request.UpdateTakeOverRequest): Promise<Result.UpdateTakeOverResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'oldPassword': request.getOldPassword() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateTakeOverResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateTakeOverByUserId(request: Request.UpdateTakeOverByUserIdRequest): Promise<Result.UpdateTakeOverByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'oldPassword': request.getOldPassword() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateTakeOverByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteTakeOver(request: Request.DeleteTakeOverRequest): Promise<Result.DeleteTakeOverResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = request.getAccessToken() ?? null;
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userIdentifier': String(request.getUserIdentifier() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteTakeOverResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteTakeOverByUserIdentifier(request: Request.DeleteTakeOverByUserIdentifierRequest): Promise<Result.DeleteTakeOverByUserIdentifierResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/takeover/type/{type}/userIdentifier/{userIdentifier}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'))
            .replace('{userIdentifier}', String(request.getUserIdentifier() ?? 'null') === "" ? "null" : String(request.getUserIdentifier() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
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
            return Result.DeleteTakeOverByUserIdentifierResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public doTakeOver(request: Request.DoTakeOverRequest): Promise<Result.DoTakeOverResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{type}', String(request.getType() ?? 'null') === "" ? "null" : String(request.getType() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userIdentifier': request.getUserIdentifier() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.DoTakeOverResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getDataOwnerByUserId(request: Request.GetDataOwnerByUserIdRequest): Promise<Result.GetDataOwnerByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/dataOwner')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.GetDataOwnerByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteDataOwnerByUserId(request: Request.DeleteDataOwnerByUserIdRequest): Promise<Result.DeleteDataOwnerByUserIdResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/account/{userId}/dataOwner')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
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
            return Result.DeleteDataOwnerByUserIdResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
