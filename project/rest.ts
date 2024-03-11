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
            'currency': request.getCurrency() ?? null,
            'activateRegionName': request.getActivateRegionName() ?? null,
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

    public activateRegion(request: Request.ActivateRegionRequest): Promise<Result.ActivateRegionResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}/region/{regionName}/activate')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'))
            .replace('{regionName}', String(request.getRegionName() ?? 'null') === "" ? "null" : String(request.getRegionName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'accountToken': request.getAccountToken() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ActivateRegionResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public waitActivateRegion(request: Request.WaitActivateRegionRequest): Promise<Result.WaitActivateRegionResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}/region/{regionName}/activate/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String(request.getProjectName() ?? 'null') === "" ? "null" : String(request.getProjectName() ?? 'null'))
            .replace('{regionName}', String(request.getRegionName() ?? 'null') === "" ? "null" : String(request.getRegionName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.WaitActivateRegionResult.fromDict(response.data);
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

    public describeDumpProgresses(request: Request.DescribeDumpProgressesRequest): Promise<Result.DescribeDumpProgressesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeDumpProgressesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getDumpProgress(request: Request.GetDumpProgressRequest): Promise<Result.GetDumpProgressResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.GetDumpProgressResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public waitDumpUserData(request: Request.WaitDumpUserDataRequest): Promise<Result.WaitDumpUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userId': request.getUserId() ?? null,
            'microserviceName': request.getMicroserviceName() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.WaitDumpUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public archiveDumpUserData(request: Request.ArchiveDumpUserDataRequest): Promise<Result.ArchiveDumpUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress/{transactionId}/archive')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.ArchiveDumpUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public dumpUserData(request: Request.DumpUserDataRequest): Promise<Result.DumpUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/{userId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
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
            return Result.DumpUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getDumpUserData(request: Request.GetDumpUserDataRequest): Promise<Result.GetDumpUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.GetDumpUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeCleanProgresses(request: Request.DescribeCleanProgressesRequest): Promise<Result.DescribeCleanProgressesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeCleanProgressesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getCleanProgress(request: Request.GetCleanProgressRequest): Promise<Result.GetCleanProgressResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.GetCleanProgressResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public waitCleanUserData(request: Request.WaitCleanUserDataRequest): Promise<Result.WaitCleanUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userId': request.getUserId() ?? null,
            'microserviceName': request.getMicroserviceName() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.WaitCleanUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public cleanUserData(request: Request.CleanUserDataRequest): Promise<Result.CleanUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/{userId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
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
            return Result.CleanUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeImportProgresses(request: Request.DescribeImportProgressesRequest): Promise<Result.DescribeImportProgressesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeImportProgressesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getImportProgress(request: Request.GetImportProgressRequest): Promise<Result.GetImportProgressResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.GetImportProgressResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public waitImportUserData(request: Request.WaitImportUserDataRequest): Promise<Result.WaitImportUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'userId': request.getUserId() ?? null,
            'microserviceName': request.getMicroserviceName() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.WaitImportUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public prepareImportUserData(request: Request.PrepareImportUserDataRequest): Promise<Result.PrepareImportUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/{userId}/prepare')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
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
            return Result.PrepareImportUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public importUserData(request: Request.ImportUserDataRequest): Promise<Result.ImportUserDataResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/{userId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{userId}', String(request.getUserId() ?? 'null') === "" ? "null" : String(request.getUserId() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = request.getDuplicationAvoider() ?? null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = request.getTimeOffsetToken() ?? null;
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'uploadToken': request.getUploadToken() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ImportUserDataResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeImportErrorLogs(request: Request.DescribeImportErrorLogsRequest): Promise<Result.DescribeImportErrorLogsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}/log')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'));
    
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
            return Result.DescribeImportErrorLogsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getImportErrorLog(request: Request.GetImportErrorLogRequest): Promise<Result.GetImportErrorLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}/log/{errorLogName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String(request.getTransactionId() ?? 'null') === "" ? "null" : String(request.getTransactionId() ?? 'null'))
            .replace('{errorLogName}', String(request.getErrorLogName() ?? 'null') === "" ? "null" : String(request.getErrorLogName() ?? 'null'));
    
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
            return Result.GetImportErrorLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
