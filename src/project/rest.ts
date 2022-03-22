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

export default class Gs2ProjectRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public createAccount(request: Request.CreateAccountRequest): Promise<Result.CreateAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'email': request.getEmail() ?? null,
            'fullName': request.getFullName() ?? null,
            'companyName': request.getCompanyName() ?? null,
            'password': request.getPassword() ?? null,
            'lang': request.getLang() ?? null,
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

    public verify(request: Request.VerifyRequest): Promise<Result.VerifyResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/verify')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'verifyToken': request.getVerifyToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.VerifyResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public signIn(request: Request.SignInRequest): Promise<Result.SignInResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/signIn')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'email': request.getEmail() ?? null,
            'password': request.getPassword() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.SignInResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public issueAccountToken(request: Request.IssueAccountTokenRequest): Promise<Result.IssueAccountTokenResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/accountToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountName': request.getAccountName() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.IssueAccountTokenResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public forget(request: Request.ForgetRequest): Promise<Result.ForgetResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/forget')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'email': request.getEmail() ?? null,
            'lang': request.getLang() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ForgetResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public issuePassword(request: Request.IssuePasswordRequest): Promise<Result.IssuePasswordResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/password/issue')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'issuePasswordToken': request.getIssuePasswordToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.IssuePasswordResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateAccount(request: Request.UpdateAccountRequest): Promise<Result.UpdateAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'email': request.getEmail() ?? null,
            'fullName': request.getFullName() ?? null,
            'companyName': request.getCompanyName() ?? null,
            'password': request.getPassword() ?? null,
            'accountToken': request.getAccountToken() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateAccountResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteAccount(request: Request.DeleteAccountRequest): Promise<Result.DeleteAccountResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
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

    public describeProjects(request: Request.DescribeProjectsRequest): Promise<Result.DescribeProjectsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
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
            return Result.DescribeProjectsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createProject(request: Request.CreateProjectRequest): Promise<Result.CreateProjectResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'plan': request.getPlan() ?? null,
            'billingMethodName': request.getBillingMethodName() ?? null,
            'enableEventBridge': request.getEnableEventBridge() ?? null,
            'eventBridgeAwsAccountId': request.getEventBridgeAwsAccountId() ?? null,
            'eventBridgeAwsRegion': request.getEventBridgeAwsRegion() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateProjectResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getProject(request: Request.GetProjectRequest): Promise<Result.GetProjectResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetProjectResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getProjectToken(request: Request.GetProjectTokenRequest): Promise<Result.GetProjectTokenResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/project/{projectName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetProjectTokenResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getProjectTokenByIdentifier(request: Request.GetProjectTokenByIdentifierRequest): Promise<Result.GetProjectTokenByIdentifierResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/{accountName}/project/{projectName}/user/{userName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{accountName}', String(request.getAccountName() ?? 'null') === "" ? "null" : String(request.getAccountName() ?? 'null'))
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'))
            .replace('{userName}', String(request.getUserName() ?? 'null') === "" ? "null" : String(request.getUserName() ?? 'null'));
    
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
            return Result.GetProjectTokenByIdentifierResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateProject(request: Request.UpdateProjectRequest): Promise<Result.UpdateProjectResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
            'description': request.getDescription() ?? null,
            'plan': request.getPlan() ?? null,
            'billingMethodName': request.getBillingMethodName() ?? null,
            'enableEventBridge': request.getEnableEventBridge() ?? null,
            'eventBridgeAwsAccountId': request.getEventBridgeAwsAccountId() ?? null,
            'eventBridgeAwsRegion': request.getEventBridgeAwsRegion() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateProjectResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteProject(request: Request.DeleteProjectRequest): Promise<Result.DeleteProjectResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteProjectResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeBillingMethods(request: Request.DescribeBillingMethodsRequest): Promise<Result.DescribeBillingMethodsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
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
            return Result.DescribeBillingMethodsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createBillingMethod(request: Request.CreateBillingMethodRequest): Promise<Result.CreateBillingMethodResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
            'description': request.getDescription() ?? null,
            'methodType': request.getMethodType() ?? null,
            'cardCustomerId': request.getCardCustomerId() ?? null,
            'partnerId': request.getPartnerId() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateBillingMethodResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getBillingMethod(request: Request.GetBillingMethodRequest): Promise<Result.GetBillingMethodResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String(request.getBillingMethodName() ?? 'null') === "" ? "null" : String(request.getBillingMethodName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.GetBillingMethodResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateBillingMethod(request: Request.UpdateBillingMethodRequest): Promise<Result.UpdateBillingMethodResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String(request.getBillingMethodName() ?? 'null') === "" ? "null" : String(request.getBillingMethodName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
            'description': request.getDescription() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateBillingMethodResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteBillingMethod(request: Request.DeleteBillingMethodRequest): Promise<Result.DeleteBillingMethodResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String(request.getBillingMethodName() ?? 'null') === "" ? "null" : String(request.getBillingMethodName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
        };
        return axios.delete(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DeleteBillingMethodResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeReceipts(request: Request.DescribeReceiptsRequest): Promise<Result.DescribeReceiptsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/receipt')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
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
            return Result.DescribeReceiptsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeBillings(request: Request.DescribeBillingsRequest): Promise<Result.DescribeBillingsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/billing/{projectName}/{year}/{month}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'))
            .replace('{year}', String(request.getYear() ?? 'null') === "" ? "null" : String(request.getYear() ?? 'null'))
            .replace('{month}', String(request.getMonth() ?? 'null') === "" ? "null" : String(request.getMonth() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': String(request.getAccountToken() ?? null),
            'region': String(request.getRegion() ?? null),
            'service': String(request.getService() ?? null),
        };
        return axios.get(
            url,
             {
                params,
                headers,
            },
        ).then((response: any) => {
            return Result.DescribeBillingsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
