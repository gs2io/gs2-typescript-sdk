"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractGs2RestClient_1 = tslib_1.__importDefault(require("../core/AbstractGs2RestClient"));
var model_1 = require("../core/model");
var Result = tslib_1.__importStar(require("./result"));
var Gs2WatchRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2WatchRestClient, _super);
    function Gs2WatchRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2WatchRestClient.prototype.getChart = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/chart/{measure}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{measure}', String((_b = request.getMeasure()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getMeasure()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'grn': (_e = request.getGrn()) !== null && _e !== void 0 ? _e : null,
            'round': (_f = request.getRound()) !== null && _f !== void 0 ? _f : null,
            'filters': (_h = (_g = request.getFilters()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
            'groupBys': (_j = request.getGroupBys()) !== null && _j !== void 0 ? _j : null,
            'countBy': (_k = request.getCountBy()) !== null && _k !== void 0 ? _k : null,
            'begin': (_l = request.getBegin()) !== null && _l !== void 0 ? _l : null,
            'end': (_m = request.getEnd()) !== null && _m !== void 0 ? _m : null,
            'pageToken': (_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null,
            'limit': (_p = request.getLimit()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.GetChartResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetServiceVersionResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getDistribution = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/distribution/{measure}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{measure}', String((_b = request.getMeasure()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getMeasure()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'grn': (_e = request.getGrn()) !== null && _e !== void 0 ? _e : null,
            'filters': (_g = (_f = request.getFilters()) === null || _f === void 0 ? void 0 : _f.map(function (item) { return item.toDict(); })) !== null && _g !== void 0 ? _g : null,
            'groupBys': (_h = request.getGroupBys()) !== null && _h !== void 0 ? _h : null,
            'begin': (_j = request.getBegin()) !== null && _j !== void 0 ? _j : null,
            'end': (_k = request.getEnd()) !== null && _k !== void 0 ? _k : null,
            'pageToken': (_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null,
            'limit': (_m = request.getLimit()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.GetDistributionResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getCumulative = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/cumulative/{name}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{name}', String((_b = request.getName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'resourceGrn': (_e = request.getResourceGrn()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.GetCumulativeResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeBillingActivities = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/billingActivity/{year}/{month}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_b = request.getYear()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getYear()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{month}', String((_d = request.getMonth()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMonth()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'service': String((_g = request.getService()) !== null && _g !== void 0 ? _g : null),
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeBillingActivitiesResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getBillingActivity = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/billingActivity/{year}/{month}/{service}/{activityType}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_b = request.getYear()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getYear()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{month}', String((_d = request.getMonth()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMonth()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{service}', String((_f = request.getService()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getService()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{activityType}', String((_h = request.getActivityType()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getActivityType()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.GetBillingActivityResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getGeneralMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/general')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGeneralMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeAccountNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/account/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeAccountNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getAccountNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/account/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetAccountNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeChatNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/chat/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeChatNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getChatNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/chat/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetChatNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeDatastoreNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/datastore/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeDatastoreNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getDatastoreNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/datastore/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetDatastoreNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeDictionaryNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/dictionary/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeDictionaryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getDictionaryNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/dictionary/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetDictionaryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeExchangeRateModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/exchange/namespace/{namespaceName}/rateModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeExchangeRateModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getExchangeRateModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/exchange/namespace/{namespaceName}/rateModel/{rateName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{rateName}', String((_d = request.getRateName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRateName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetExchangeRateModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeExchangeNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/exchange/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeExchangeNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getExchangeNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/exchange/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetExchangeNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeExperienceStatusMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/experience/namespace/{namespaceName}/experienceModel/{experienceName}/status')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{experienceName}', String((_d = request.getExperienceName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getExperienceName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeExperienceStatusMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeExperienceExperienceModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/experience/namespace/{namespaceName}/experienceModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeExperienceExperienceModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getExperienceExperienceModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/experience/namespace/{namespaceName}/experienceModel/{experienceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{experienceName}', String((_d = request.getExperienceName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getExperienceName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetExperienceExperienceModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeExperienceNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/experience/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeExperienceNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getExperienceNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/experience/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetExperienceNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeFormationFormMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/formation/namespace/{namespaceName}/mold/{moldModelName}/form')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{moldModelName}', String((_d = request.getMoldModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMoldModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFormationFormMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeFormationMoldMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/formation/namespace/{namespaceName}/mold')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFormationMoldMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeFormationNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/formation/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFormationNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getFormationNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/formation/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFormationNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeFriendNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/friend/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFriendNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getFriendNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/friend/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFriendNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeInboxNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inbox/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeInboxNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getInboxNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inbox/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetInboxNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeInventoryItemSetMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inventory/namespace/{namespaceName}/inventory/{inventoryName}/itemSet')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{inventoryName}', String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getInventoryName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeInventoryItemSetMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeInventoryInventoryMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inventory/namespace/{namespaceName}/inventory')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeInventoryInventoryMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeInventoryNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inventory/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeInventoryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getInventoryNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/inventory/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetInventoryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeKeyNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/key/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeKeyNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getKeyNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/key/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetKeyNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeLimitCounterMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/limit/namespace/{namespaceName}/limitModel/{limitName}/counter')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{limitName}', String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getLimitName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLimitCounterMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeLimitLimitModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/limit/namespace/{namespaceName}/limitModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLimitLimitModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getLimitLimitModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/limit/namespace/{namespaceName}/limitModel/{limitName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{limitName}', String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getLimitName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLimitLimitModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeLimitNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/limit/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLimitNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getLimitNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/limit/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLimitNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeLotteryLotteryMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/lottery/namespace/{namespaceName}/lottery')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLotteryLotteryMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getLotteryLotteryMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/lottery/namespace/{namespaceName}/lotteryModel/{lotteryName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{lotteryName}', String((_d = request.getLotteryName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getLotteryName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLotteryLotteryMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeLotteryNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/lottery/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLotteryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getLotteryNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/lottery/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLotteryNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMatchmakingNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/matchmaking/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMatchmakingNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getMatchmakingNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/matchmaking/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMatchmakingNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMissionCounterMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/mission/namespace/{namespaceName}/counter')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMissionCounterMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMissionMissionGroupModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/mission/namespace/{namespaceName}/missionGroupModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMissionMissionGroupModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getMissionMissionGroupModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/mission/namespace/{namespaceName}/missionGroupModel/{missionGroupName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMissionMissionGroupModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMissionNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/mission/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMissionNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getMissionNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/mission/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMissionNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMoneyWalletMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/money/namespace/{namespaceName}/wallet')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMoneyWalletMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMoneyReceiptMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/money/namespace/{namespaceName}/receipt')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMoneyReceiptMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeMoneyNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/money/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMoneyNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getMoneyNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/money/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMoneyNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeQuestQuestModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}/questModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{questGroupName}', String((_d = request.getQuestGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getQuestGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeQuestQuestModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getQuestQuestModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}/questModel/{questName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{questGroupName}', String((_d = request.getQuestGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getQuestGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{questName}', String((_f = request.getQuestName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getQuestName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetQuestQuestModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeQuestQuestGroupModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace/{namespaceName}/questGroupModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeQuestQuestGroupModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getQuestQuestGroupModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace/{namespaceName}/questGroupModel/{questGroupName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{questGroupName}', String((_d = request.getQuestGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getQuestGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetQuestQuestGroupModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeQuestNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeQuestNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getQuestNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/quest/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetQuestNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeRankingCategoryModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/ranking/namespace/{namespaceName}/categoryModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeRankingCategoryModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getRankingCategoryModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/ranking/namespace/{namespaceName}/categoryModel/{categoryName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{categoryName}', String((_d = request.getCategoryName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCategoryName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetRankingCategoryModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeRankingNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/ranking/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeRankingNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getRankingNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/ranking/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetRankingNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeShowcaseDisplayItemMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace/{namespaceName}/showcase/{showcaseName}/displayItem')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{showcaseName}', String((_d = request.getShowcaseName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getShowcaseName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeShowcaseDisplayItemMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getShowcaseDisplayItemMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace/{namespaceName}/showcase/{showcaseName}/displayItem/{displayItemId}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{showcaseName}', String((_d = request.getShowcaseName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getShowcaseName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{displayItemId}', String((_f = request.getDisplayItemId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getDisplayItemId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetShowcaseDisplayItemMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeShowcaseShowcaseMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace/{namespaceName}/showcase')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeShowcaseShowcaseMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getShowcaseShowcaseMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace/{namespaceName}/showcase/{showcaseName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{showcaseName}', String((_d = request.getShowcaseName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getShowcaseName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetShowcaseShowcaseMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeShowcaseNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeShowcaseNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getShowcaseNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/showcase/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetShowcaseNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeStaminaStaminaModelMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/stamina/namespace/{namespaceName}/staminaModel')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeStaminaStaminaModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getStaminaStaminaModelMetrics = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/stamina/namespace/{namespaceName}/staminaModel/{staminaName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStaminaStaminaModelMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.describeStaminaNamespaceMetrics = function (request) {
        var _a, _b;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/stamina/namespace')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeStaminaNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.prototype.getStaminaNamespaceMetrics = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2WatchRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/metrics/stamina/namespace/{namespaceName}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStaminaNamespaceMetricsResult.fromDict(data);
        });
    };
    Gs2WatchRestClient.ENDPOINT_HOST = null;
    return Gs2WatchRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2WatchRestClient;
//# sourceMappingURL=rest.js.map