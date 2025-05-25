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

export default class Gs2FreezeRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public describeStages(request: Request.DescribeStagesRequest): Promise<Result.DescribeStagesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region);
    
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
            return Result.DescribeStagesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStage(request: Request.GetStageRequest): Promise<Result.GetStageResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{stageName}')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String(request.getStageName() ?? 'null') === "" ? "null" : String(request.getStageName() ?? 'null'));
    
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
            return Result.GetStageResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public promoteStage(request: Request.PromoteStageRequest): Promise<Result.PromoteStageResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{stageName}/promote')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String(request.getStageName() ?? 'null') === "" ? "null" : String(request.getStageName() ?? 'null'));
    
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
            return Result.PromoteStageResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public rollbackStage(request: Request.RollbackStageRequest): Promise<Result.RollbackStageResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{stageName}/rollback')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String(request.getStageName() ?? 'null') === "" ? "null" : String(request.getStageName() ?? 'null'));
    
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
            return Result.RollbackStageResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeOutputs(request: Request.DescribeOutputsRequest): Promise<Result.DescribeOutputsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/{stageName}/progress/output')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String(request.getStageName() ?? 'null') === "" ? "null" : String(request.getStageName() ?? 'null'));
    
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
        const url = (Gs2Constant.ENDPOINT_HOST + '/{stageName}/progress/output/{outputName}')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String(request.getStageName() ?? 'null') === "" ? "null" : String(request.getStageName() ?? 'null'))
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
