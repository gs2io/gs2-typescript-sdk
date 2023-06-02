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

    public describeAccountNamespaceMetrics(request: Request.DescribeAccountNamespaceMetricsRequest): Promise<Result.DescribeAccountNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/account/namespace')
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
            return Result.DescribeAccountNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getAccountNamespaceMetrics(request: Request.GetAccountNamespaceMetricsRequest): Promise<Result.GetAccountNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/account/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetAccountNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeChatNamespaceMetrics(request: Request.DescribeChatNamespaceMetricsRequest): Promise<Result.DescribeChatNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/chat/namespace')
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
            return Result.DescribeChatNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getChatNamespaceMetrics(request: Request.GetChatNamespaceMetricsRequest): Promise<Result.GetChatNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/chat/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetChatNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeDatastoreNamespaceMetrics(request: Request.DescribeDatastoreNamespaceMetricsRequest): Promise<Result.DescribeDatastoreNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/datastore/namespace')
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
            return Result.DescribeDatastoreNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getDatastoreNamespaceMetrics(request: Request.GetDatastoreNamespaceMetricsRequest): Promise<Result.GetDatastoreNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/datastore/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetDatastoreNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExchangeRateModelMetrics(request: Request.DescribeExchangeRateModelMetricsRequest): Promise<Result.DescribeExchangeRateModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/exchange/namespace/{namespaceName}/rateModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeExchangeRateModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExchangeRateModelMetrics(request: Request.GetExchangeRateModelMetricsRequest): Promise<Result.GetExchangeRateModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/exchange/namespace/{namespaceName}/rateModel/{rateName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{rateName}', String(request.getRateName() ?? 'null') === "" ? "null" : String(request.getRateName() ?? 'null'));
    
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
            return Result.GetExchangeRateModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExchangeNamespaceMetrics(request: Request.DescribeExchangeNamespaceMetricsRequest): Promise<Result.DescribeExchangeNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/exchange/namespace')
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
            return Result.DescribeExchangeNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExchangeNamespaceMetrics(request: Request.GetExchangeNamespaceMetricsRequest): Promise<Result.GetExchangeNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/exchange/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetExchangeNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExperienceStatusMetrics(request: Request.DescribeExperienceStatusMetricsRequest): Promise<Result.DescribeExperienceStatusMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience/namespace/{namespaceName}/status')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
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
            return Result.DescribeExperienceStatusMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExperienceExperienceModelMetrics(request: Request.DescribeExperienceExperienceModelMetricsRequest): Promise<Result.DescribeExperienceExperienceModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience/namespace/{namespaceName}/experienceModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeExperienceExperienceModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExperienceExperienceModelMetrics(request: Request.GetExperienceExperienceModelMetricsRequest): Promise<Result.GetExperienceExperienceModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience/namespace/{namespaceName}/experienceModel/{experienceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{experienceName}', String(request.getExperienceName() ?? 'null') === "" ? "null" : String(request.getExperienceName() ?? 'null'));
    
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
            return Result.GetExperienceExperienceModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeExperienceNamespaceMetrics(request: Request.DescribeExperienceNamespaceMetricsRequest): Promise<Result.DescribeExperienceNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience/namespace')
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
            return Result.DescribeExperienceNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getExperienceNamespaceMetrics(request: Request.GetExperienceNamespaceMetricsRequest): Promise<Result.GetExperienceNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/experience/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetExperienceNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFormationFormMetrics(request: Request.DescribeFormationFormMetricsRequest): Promise<Result.DescribeFormationFormMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/formation/namespace/{namespaceName}/mold/{moldName}/form')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{moldName}', String(request.getMoldName() ?? 'null') === "" ? "null" : String(request.getMoldName() ?? 'null'));
    
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
            return Result.DescribeFormationFormMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFormationMoldMetrics(request: Request.DescribeFormationMoldMetricsRequest): Promise<Result.DescribeFormationMoldMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/formation/namespace/{namespaceName}/mold')
            .replace('{service}', 'watch')
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
            return Result.DescribeFormationMoldMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFormationNamespaceMetrics(request: Request.DescribeFormationNamespaceMetricsRequest): Promise<Result.DescribeFormationNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/formation/namespace')
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
            return Result.DescribeFormationNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getFormationNamespaceMetrics(request: Request.GetFormationNamespaceMetricsRequest): Promise<Result.GetFormationNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/formation/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetFormationNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeFriendNamespaceMetrics(request: Request.DescribeFriendNamespaceMetricsRequest): Promise<Result.DescribeFriendNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/friend/namespace')
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
            return Result.DescribeFriendNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getFriendNamespaceMetrics(request: Request.GetFriendNamespaceMetricsRequest): Promise<Result.GetFriendNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/friend/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetFriendNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeInboxNamespaceMetrics(request: Request.DescribeInboxNamespaceMetricsRequest): Promise<Result.DescribeInboxNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inbox/namespace')
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
            return Result.DescribeInboxNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getInboxNamespaceMetrics(request: Request.GetInboxNamespaceMetricsRequest): Promise<Result.GetInboxNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inbox/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetInboxNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeInventoryItemSetMetrics(request: Request.DescribeInventoryItemSetMetricsRequest): Promise<Result.DescribeInventoryItemSetMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inventory/namespace/{namespaceName}/inventory/{inventoryName}/itemSet')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{inventoryName}', String(request.getInventoryName() ?? 'null') === "" ? "null" : String(request.getInventoryName() ?? 'null'));
    
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
            return Result.DescribeInventoryItemSetMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeInventoryInventoryMetrics(request: Request.DescribeInventoryInventoryMetricsRequest): Promise<Result.DescribeInventoryInventoryMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inventory/namespace/{namespaceName}/inventory')
            .replace('{service}', 'watch')
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
            return Result.DescribeInventoryInventoryMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeInventoryNamespaceMetrics(request: Request.DescribeInventoryNamespaceMetricsRequest): Promise<Result.DescribeInventoryNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inventory/namespace')
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
            return Result.DescribeInventoryNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getInventoryNamespaceMetrics(request: Request.GetInventoryNamespaceMetricsRequest): Promise<Result.GetInventoryNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/inventory/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetInventoryNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeKeyNamespaceMetrics(request: Request.DescribeKeyNamespaceMetricsRequest): Promise<Result.DescribeKeyNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/key/namespace')
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
            return Result.DescribeKeyNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getKeyNamespaceMetrics(request: Request.GetKeyNamespaceMetricsRequest): Promise<Result.GetKeyNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/key/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetKeyNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLimitCounterMetrics(request: Request.DescribeLimitCounterMetricsRequest): Promise<Result.DescribeLimitCounterMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit/namespace/{namespaceName}/counter')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{limitName}', String(request.getLimitName() ?? 'null') === "" ? "null" : String(request.getLimitName() ?? 'null'));
    
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
            return Result.DescribeLimitCounterMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLimitLimitModelMetrics(request: Request.DescribeLimitLimitModelMetricsRequest): Promise<Result.DescribeLimitLimitModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit/namespace/{namespaceName}/limitModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeLimitLimitModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLimitLimitModelMetrics(request: Request.GetLimitLimitModelMetricsRequest): Promise<Result.GetLimitLimitModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit/namespace/{namespaceName}/limitModel/{limitName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{limitName}', String(request.getLimitName() ?? 'null') === "" ? "null" : String(request.getLimitName() ?? 'null'));
    
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
            return Result.GetLimitLimitModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLimitNamespaceMetrics(request: Request.DescribeLimitNamespaceMetricsRequest): Promise<Result.DescribeLimitNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit/namespace')
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
            return Result.DescribeLimitNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLimitNamespaceMetrics(request: Request.GetLimitNamespaceMetricsRequest): Promise<Result.GetLimitNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/limit/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetLimitNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLotteryLotteryMetrics(request: Request.DescribeLotteryLotteryMetricsRequest): Promise<Result.DescribeLotteryLotteryMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/lottery/namespace/{namespaceName}/lottery')
            .replace('{service}', 'watch')
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
            return Result.DescribeLotteryLotteryMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLotteryLotteryMetrics(request: Request.GetLotteryLotteryMetricsRequest): Promise<Result.GetLotteryLotteryMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/lottery/namespace/{namespaceName}/lotteryModel/{lotteryName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{lotteryName}', String(request.getLotteryName() ?? 'null') === "" ? "null" : String(request.getLotteryName() ?? 'null'));
    
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
            return Result.GetLotteryLotteryMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeLotteryNamespaceMetrics(request: Request.DescribeLotteryNamespaceMetricsRequest): Promise<Result.DescribeLotteryNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/lottery/namespace')
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
            return Result.DescribeLotteryNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getLotteryNamespaceMetrics(request: Request.GetLotteryNamespaceMetricsRequest): Promise<Result.GetLotteryNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/lottery/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetLotteryNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMatchmakingNamespaceMetrics(request: Request.DescribeMatchmakingNamespaceMetricsRequest): Promise<Result.DescribeMatchmakingNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/matchmaking/namespace')
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
            return Result.DescribeMatchmakingNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMatchmakingNamespaceMetrics(request: Request.GetMatchmakingNamespaceMetricsRequest): Promise<Result.GetMatchmakingNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/matchmaking/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetMatchmakingNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMissionCounterMetrics(request: Request.DescribeMissionCounterMetricsRequest): Promise<Result.DescribeMissionCounterMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/mission/namespace/{namespaceName}/counter')
            .replace('{service}', 'watch')
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
            return Result.DescribeMissionCounterMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMissionMissionGroupModelMetrics(request: Request.DescribeMissionMissionGroupModelMetricsRequest): Promise<Result.DescribeMissionMissionGroupModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/mission/namespace/{namespaceName}/missionGroupModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeMissionMissionGroupModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMissionMissionGroupModelMetrics(request: Request.GetMissionMissionGroupModelMetricsRequest): Promise<Result.GetMissionMissionGroupModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/mission/namespace/{namespaceName}/missionGroupModel/{missionGroupName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{missionGroupName}', String(request.getMissionGroupName() ?? 'null') === "" ? "null" : String(request.getMissionGroupName() ?? 'null'));
    
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
            return Result.GetMissionMissionGroupModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMissionNamespaceMetrics(request: Request.DescribeMissionNamespaceMetricsRequest): Promise<Result.DescribeMissionNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/mission/namespace')
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
            return Result.DescribeMissionNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMissionNamespaceMetrics(request: Request.GetMissionNamespaceMetricsRequest): Promise<Result.GetMissionNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/mission/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetMissionNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoneyWalletMetrics(request: Request.DescribeMoneyWalletMetricsRequest): Promise<Result.DescribeMoneyWalletMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/money/namespace/{namespaceName}/wallet')
            .replace('{service}', 'watch')
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
            return Result.DescribeMoneyWalletMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoneyReceiptMetrics(request: Request.DescribeMoneyReceiptMetricsRequest): Promise<Result.DescribeMoneyReceiptMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/money/namespace/{namespaceName}/receipt')
            .replace('{service}', 'watch')
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
            return Result.DescribeMoneyReceiptMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeMoneyNamespaceMetrics(request: Request.DescribeMoneyNamespaceMetricsRequest): Promise<Result.DescribeMoneyNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/money/namespace')
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
            return Result.DescribeMoneyNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getMoneyNamespaceMetrics(request: Request.GetMoneyNamespaceMetricsRequest): Promise<Result.GetMoneyNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/money/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetMoneyNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeQuestQuestModelMetrics(request: Request.DescribeQuestQuestModelMetricsRequest): Promise<Result.DescribeQuestQuestModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}/questModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{questGroupName}', String(request.getQuestGroupName() ?? 'null') === "" ? "null" : String(request.getQuestGroupName() ?? 'null'));
    
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
            return Result.DescribeQuestQuestModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getQuestQuestModelMetrics(request: Request.GetQuestQuestModelMetricsRequest): Promise<Result.GetQuestQuestModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}/questModel/{questName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{questGroupName}', String(request.getQuestGroupName() ?? 'null') === "" ? "null" : String(request.getQuestGroupName() ?? 'null'))
            .replace('{questName}', String(request.getQuestName() ?? 'null') === "" ? "null" : String(request.getQuestName() ?? 'null'));
    
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
            return Result.GetQuestQuestModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeQuestQuestGroupModelMetrics(request: Request.DescribeQuestQuestGroupModelMetricsRequest): Promise<Result.DescribeQuestQuestGroupModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace/{namespaceName}/questGroupModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeQuestQuestGroupModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getQuestQuestGroupModelMetrics(request: Request.GetQuestQuestGroupModelMetricsRequest): Promise<Result.GetQuestQuestGroupModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{questGroupName}', String(request.getQuestGroupName() ?? 'null') === "" ? "null" : String(request.getQuestGroupName() ?? 'null'));
    
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
            return Result.GetQuestQuestGroupModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeQuestNamespaceMetrics(request: Request.DescribeQuestNamespaceMetricsRequest): Promise<Result.DescribeQuestNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace')
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
            return Result.DescribeQuestNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getQuestNamespaceMetrics(request: Request.GetQuestNamespaceMetricsRequest): Promise<Result.GetQuestNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/quest/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetQuestNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRankingCategoryModelMetrics(request: Request.DescribeRankingCategoryModelMetricsRequest): Promise<Result.DescribeRankingCategoryModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/ranking/namespace/{namespaceName}/categoryModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeRankingCategoryModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRankingCategoryModelMetrics(request: Request.GetRankingCategoryModelMetricsRequest): Promise<Result.GetRankingCategoryModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/ranking/namespace/{namespaceName}/categoryModel/{categoryName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{categoryName}', String(request.getCategoryName() ?? 'null') === "" ? "null" : String(request.getCategoryName() ?? 'null'));
    
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
            return Result.GetRankingCategoryModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeRankingNamespaceMetrics(request: Request.DescribeRankingNamespaceMetricsRequest): Promise<Result.DescribeRankingNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/ranking/namespace')
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
            return Result.DescribeRankingNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getRankingNamespaceMetrics(request: Request.GetRankingNamespaceMetricsRequest): Promise<Result.GetRankingNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/ranking/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetRankingNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeShowcaseDisplayItemMetrics(request: Request.DescribeShowcaseDisplayItemMetricsRequest): Promise<Result.DescribeShowcaseDisplayItemMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/displayItem')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{showcaseName}', String(request.getShowcaseName() ?? 'null') === "" ? "null" : String(request.getShowcaseName() ?? 'null'));
    
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
            return Result.DescribeShowcaseDisplayItemMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getShowcaseDisplayItemMetrics(request: Request.GetShowcaseDisplayItemMetricsRequest): Promise<Result.GetShowcaseDisplayItemMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{showcaseName}', String(request.getShowcaseName() ?? 'null') === "" ? "null" : String(request.getShowcaseName() ?? 'null'))
            .replace('{displayItemId}', String(request.getDisplayItemId() ?? 'null') === "" ? "null" : String(request.getDisplayItemId() ?? 'null'));
    
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
            return Result.GetShowcaseDisplayItemMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeShowcaseShowcaseMetrics(request: Request.DescribeShowcaseShowcaseMetricsRequest): Promise<Result.DescribeShowcaseShowcaseMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/namespace/{namespaceName}/showcase')
            .replace('{service}', 'watch')
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
            return Result.DescribeShowcaseShowcaseMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getShowcaseShowcaseMetrics(request: Request.GetShowcaseShowcaseMetricsRequest): Promise<Result.GetShowcaseShowcaseMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/namespace/{namespaceName}/showcase/{showcaseName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{showcaseName}', String(request.getShowcaseName() ?? 'null') === "" ? "null" : String(request.getShowcaseName() ?? 'null'));
    
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
            return Result.GetShowcaseShowcaseMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeShowcaseNamespaceMetrics(request: Request.DescribeShowcaseNamespaceMetricsRequest): Promise<Result.DescribeShowcaseNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/namespace')
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
            return Result.DescribeShowcaseNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getShowcaseNamespaceMetrics(request: Request.GetShowcaseNamespaceMetricsRequest): Promise<Result.GetShowcaseNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/showcase/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetShowcaseNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeStaminaStaminaModelMetrics(request: Request.DescribeStaminaStaminaModelMetricsRequest): Promise<Result.DescribeStaminaStaminaModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/stamina/namespace/{namespaceName}/staminaModel')
            .replace('{service}', 'watch')
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
            return Result.DescribeStaminaStaminaModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStaminaStaminaModelMetrics(request: Request.GetStaminaStaminaModelMetricsRequest): Promise<Result.GetStaminaStaminaModelMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/stamina/namespace/{namespaceName}/staminaModel/{staminaName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String(request.getNamespaceName() ?? 'null') === "" ? "null" : String(request.getNamespaceName() ?? 'null'))
            .replace('{staminaName}', String(request.getStaminaName() ?? 'null') === "" ? "null" : String(request.getStaminaName() ?? 'null'));
    
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
            return Result.GetStaminaStaminaModelMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public describeStaminaNamespaceMetrics(request: Request.DescribeStaminaNamespaceMetricsRequest): Promise<Result.DescribeStaminaNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/stamina/namespace')
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
            return Result.DescribeStaminaNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }

    public getStaminaNamespaceMetrics(request: Request.GetStaminaNamespaceMetricsRequest): Promise<Result.GetStaminaNamespaceMetricsResult> {
        const url = (Gs2Constant.ENDPOINT_HOST + '/metrics/stamina/namespace/{namespaceName}')
            .replace('{service}', 'watch')
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
            return Result.GetStaminaNamespaceMetricsResult.fromDict(response.data);
        }).catch((error: any) => {
            throw JSON.parse(error.response.data.message);
        });
    }
}
