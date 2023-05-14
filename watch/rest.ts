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

export default class Gs2WatchRestClient extends AbstractGs2RestClient {

    constructor(session: Gs2RestSession) {
        super(session);
    }

    public getChart(request: Request.GetChartRequest): Promise<Result.GetChartResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/chart/{measure}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{measure}', String(request.getMeasure() ?? 'null') === "" ? "null" : String(request.getMeasure() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'grn': request.getGrn() ?? null,
            'round': request.getRound() ?? null,
            'filters': request.getFilters()?.map((item) => item.toDict()) ?? null,
            'groupBys': request.getGroupBys() ?? null,
            'countBy': request.getCountBy() ?? null,
            'begin': request.getBegin() ?? null,
            'end': request.getEnd() ?? null,
            'pageToken': request.getPageToken() ?? null,
            'limit': request.getLimit() ?? null,
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

    public getDistribution(request: Request.GetDistributionRequest): Promise<Result.GetDistributionResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/distribution/{measure}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{measure}', String(request.getMeasure() ?? 'null') === "" ? "null" : String(request.getMeasure() ?? 'null'));
    
        const headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        const body: {[key: string]: any} = {
            'contextStack': request.getContextStack() ?? null,
            'grn': request.getGrn() ?? null,
            'filters': request.getFilters()?.map((item) => item.toDict()) ?? null,
            'groupBys': request.getGroupBys() ?? null,
            'begin': request.getBegin() ?? null,
            'end': request.getEnd() ?? null,
            'pageToken': request.getPageToken() ?? null,
            'limit': request.getLimit() ?? null,
        };
        return axios.post(
            url,
            body,
            {
                headers,
            },
        ).then((response: any) => {
            return Result.GetDistributionResult.fromDict(response.data);
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
            .replace('{name}', String(request.getName() ?? 'null') === "" ? "null" : String(request.getName() ?? 'null'));
    
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
            .replace('{year}', String(request.getYear() ?? 'null') === "" ? "null" : String(request.getYear() ?? 'null'))
            .replace('{month}', String(request.getMonth() ?? 'null') === "" ? "null" : String(request.getMonth() ?? 'null'));
    
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
            .replace('{year}', String(request.getYear() ?? 'null') === "" ? "null" : String(request.getYear() ?? 'null'))
            .replace('{month}', String(request.getMonth() ?? 'null') === "" ? "null" : String(request.getMonth() ?? 'null'))
            .replace('{service}', String(request.getService() ?? 'null') === "" ? "null" : String(request.getService() ?? 'null'))
            .replace('{activityType}', String(request.getActivityType() ?? 'null') === "" ? "null" : String(request.getActivityType() ?? 'null'));
    
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

    public getGeneralMetrics(request: Request.GetGeneralMetricsRequest): Promise<Result.GetGeneralMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/general')
            .replace('{service}', 'watch')
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
            return Result.GetGeneralMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getAccountMetrics(request: Request.GetAccountMetricsRequest): Promise<Result.GetAccountMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/account')
            .replace('{service}', 'watch')
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
            return Result.GetAccountMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExchangeMetrics(request: Request.GetExchangeMetricsRequest): Promise<Result.GetExchangeMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/exchange')
            .replace('{service}', 'watch')
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
            return Result.GetExchangeMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExperienceMetrics(request: Request.GetExperienceMetricsRequest): Promise<Result.GetExperienceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience')
            .replace('{service}', 'watch')
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
            return Result.GetExperienceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getInboxMetrics(request: Request.GetInboxMetricsRequest): Promise<Result.GetInboxMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inbox')
            .replace('{service}', 'watch')
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
            return Result.GetInboxMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getInventoryMetrics(request: Request.GetInventoryMetricsRequest): Promise<Result.GetInventoryMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inventory')
            .replace('{service}', 'watch')
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
            return Result.GetInventoryMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLimitMetrics(request: Request.GetLimitMetricsRequest): Promise<Result.GetLimitMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit')
            .replace('{service}', 'watch')
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
            return Result.GetLimitMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMatchmakingMetrics(request: Request.GetMatchmakingMetricsRequest): Promise<Result.GetMatchmakingMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/matchmaking')
            .replace('{service}', 'watch')
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
            return Result.GetMatchmakingMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMoneyMetrics(request: Request.GetMoneyMetricsRequest): Promise<Result.GetMoneyMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/money')
            .replace('{service}', 'watch')
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
            return Result.GetMoneyMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getQuestMetrics(request: Request.GetQuestMetricsRequest): Promise<Result.GetQuestMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest')
            .replace('{service}', 'watch')
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
            return Result.GetQuestMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRankingMetrics(request: Request.GetRankingMetricsRequest): Promise<Result.GetRankingMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/ranking')
            .replace('{service}', 'watch')
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
            return Result.GetRankingMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getShowcaseMetrics(request: Request.GetShowcaseMetricsRequest): Promise<Result.GetShowcaseMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase')
            .replace('{service}', 'watch')
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
            return Result.GetShowcaseMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
