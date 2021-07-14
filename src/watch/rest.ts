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

export class Gs2WatchRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public getChart(request: Request.GetChartRequest): Promise<Result.GetChartResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/chart/{metrics}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{metrics}', String(request.getMetrics() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'grn': request.getGrn() ?? null,
            'queries': request.getQueries() ?? null,
            'by': request.getBy() ?? null,
            'timeframe': request.getTimeframe() ?? null,
            'size': request.getSize() ?? null,
            'format': request.getFormat() ?? null,
            'aggregator': request.getAggregator() ?? null,
            'style': request.getStyle() ?? null,
            'title': request.getTitle() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetChartResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public getCumulative(request: Request.GetCumulativeRequest): Promise<Result.GetCumulativeResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/cumulative/{name}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{name}', String(request.getName() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'resourceGrn': request.getResourceGrn() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetCumulativeResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }

    public describeBillingActivities(request: Request.DescribeBillingActivitiesRequest): Promise<Result.DescribeBillingActivitiesResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String(request.getYear() ?? 'null'))
            .replace('{month}', String(request.getMonth() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const params: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'service': String(request.getService() ?? null),
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
            return Result.DescribeBillingActivitiesResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getBillingActivity(request: Request.GetBillingActivityRequest): Promise<Result.GetBillingActivityResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}/{service}/{activityType}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String(request.getYear() ?? 'null'))
            .replace('{month}', String(request.getMonth() ?? 'null'))
            .replace('{service}', String(request.getService() ?? 'null'))
            .replace('{activityType}', String(request.getActivityType() ?? 'null'));
    
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
            return Result.GetBillingActivityResult.fromDict(response.data);
        }).catch((error: any) => {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            } else {
                throw [];
            }
        });
    }
}
