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

export class Gs2LogRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'log')
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
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'type': request.getType() ?? null,
            'gcpCredentialJson': request.getGcpCredentialJson() ?? null,
            'bigQueryDatasetName': request.getBigQueryDatasetName() ?? null,
            'logExpireDays': request.getLogExpireDays() ?? null,
            'awsRegion': request.getAwsRegion() ?? null,
            'awsAccessKeyId': request.getAwsAccessKeyId() ?? null,
            'awsSecretAccessKey': request.getAwsSecretAccessKey() ?? null,
            'firehoseStreamName': request.getFirehoseStreamName() ?? null,
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
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
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
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
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
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'type': request.getType() ?? null,
            'gcpCredentialJson': request.getGcpCredentialJson() ?? null,
            'bigQueryDatasetName': request.getBigQueryDatasetName() ?? null,
            'logExpireDays': request.getLogExpireDays() ?? null,
            'awsRegion': request.getAwsRegion() ?? null,
            'awsAccessKeyId': request.getAwsAccessKeyId() ?? null,
            'awsSecretAccessKey': request.getAwsSecretAccessKey() ?? null,
            'firehoseStreamName': request.getFirehoseStreamName() ?? null,
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
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
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

    public queryAccessLog(request: Request.QueryAccessLogRequest): Promise<Result.QueryAccessLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.QueryAccessLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public countAccessLog(request: Request.CountAccessLogRequest): Promise<Result.CountAccessLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.CountAccessLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public queryIssueStampSheetLog(request: Request.QueryIssueStampSheetLogRequest): Promise<Result.QueryIssueStampSheetLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.QueryIssueStampSheetLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public countIssueStampSheetLog(request: Request.CountIssueStampSheetLogRequest): Promise<Result.CountIssueStampSheetLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.CountIssueStampSheetLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public queryExecuteStampSheetLog(request: Request.QueryExecuteStampSheetLogRequest): Promise<Result.QueryExecuteStampSheetLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.QueryExecuteStampSheetLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public countExecuteStampSheetLog(request: Request.CountExecuteStampSheetLogRequest): Promise<Result.CountExecuteStampSheetLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.CountExecuteStampSheetLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public queryExecuteStampTaskLog(request: Request.QueryExecuteStampTaskLogRequest): Promise<Result.QueryExecuteStampTaskLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.QueryExecuteStampTaskLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public countExecuteStampTaskLog(request: Request.CountExecuteStampTaskLogRequest): Promise<Result.CountExecuteStampTaskLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
            'method': String(request.getMethod() ?? null),
            'userId': String(request.getUserId() ?? null),
            'action': String(request.getAction() ?? null),
            'begin': String(request.getBegin() ?? null),
            'end': String(request.getEnd() ?? null),
            'longTerm': String(request.getLongTerm() ?? null),
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
            return Result.CountExecuteStampTaskLogResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public putLog(request: Request.PutLogRequest): Promise<Result.PutLogResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/log/put')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'loggingNamespaceId': request.getLoggingNamespaceId() ?? null,
            'logCategory': request.getLogCategory() ?? null,
            'payload': request.getPayload() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.PutLogResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
