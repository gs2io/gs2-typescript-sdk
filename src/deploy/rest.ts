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

export default class Gs2DeployRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeStacks(request: Request.DescribeStacksRequest): Promise<Result.DescribeStacksResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack')
            .replace('{service}', 'deploy')
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
            return Result.DescribeStacksResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public createStack(request: Request.CreateStackRequest): Promise<Result.CreateStackResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'template': request.getTemplate() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateStackResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public createStackFromGitHub(request: Request.CreateStackFromGitHubRequest): Promise<Result.CreateStackFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'name': request.getName() ?? null,
            'description': request.getDescription() ?? null,
            'checkoutSetting': request.getCheckoutSetting()?.toDict() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.CreateStackFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public validate(request: Request.ValidateRequest): Promise<Result.ValidateResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/validate')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'template': request.getTemplate() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.ValidateResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getStackStatus(request: Request.GetStackStatusRequest): Promise<Result.GetStackStatusResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/status')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.GetStackStatusResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStack(request: Request.GetStackRequest): Promise<Result.GetStackResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.GetStackResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public updateStack(request: Request.UpdateStackRequest): Promise<Result.UpdateStackResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'template': request.getTemplate() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateStackResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public updateStackFromGitHub(request: Request.UpdateStackFromGitHubRequest): Promise<Result.UpdateStackFromGitHubResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'description': request.getDescription() ?? null,
            'checkoutSetting': request.getCheckoutSetting()?.toDict() ?? null,
        };
        return axios.put(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.UpdateStackFromGitHubResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public deleteStack(request: Request.DeleteStackRequest): Promise<Result.DeleteStackResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DeleteStackResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public forceDeleteStack(request: Request.ForceDeleteStackRequest): Promise<Result.ForceDeleteStackResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/force')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.ForceDeleteStackResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteStackResources(request: Request.DeleteStackResourcesRequest): Promise<Result.DeleteStackResourcesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resources')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DeleteStackResourcesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public deleteStackEntity(request: Request.DeleteStackEntityRequest): Promise<Result.DeleteStackEntityResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/entity')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DeleteStackEntityResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeResources(request: Request.DescribeResourcesRequest): Promise<Result.DescribeResourcesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DescribeResourcesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getResource(request: Request.GetResourceRequest): Promise<Result.GetResourceResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource/{resourceName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'))
            .replace('{resourceName}', String(request.getResourceName() ?? 'null') === "" ? "null" : String(request.getResourceName() ?? 'null'));
    
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
            return Result.GetResourceResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeEvents(request: Request.DescribeEventsRequest): Promise<Result.DescribeEventsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DescribeEventsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getEvent(request: Request.GetEventRequest): Promise<Result.GetEventResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event/{eventName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'))
            .replace('{eventName}', String(request.getEventName() ?? 'null') === "" ? "null" : String(request.getEventName() ?? 'null'));
    
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
            return Result.GetEventResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeOutputs(request: Request.DescribeOutputsRequest): Promise<Result.DescribeOutputsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'));
    
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
            return Result.DescribeOutputsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getOutput(request: Request.GetOutputRequest): Promise<Result.GetOutputResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output/{outputName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String(request.getStackName() ?? 'null') === "" ? "null" : String(request.getStackName() ?? 'null'))
            .replace('{outputName}', String(request.getOutputName() ?? 'null') === "" ? "null" : String(request.getOutputName() ?? 'null'));
    
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
            return Result.GetOutputResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
