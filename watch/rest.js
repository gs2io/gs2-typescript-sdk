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
var axios_1 = tslib_1.__importDefault(require("axios"));
var Gs2WatchRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2WatchRestClient, _super);
    function Gs2WatchRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2WatchRestClient.prototype.getChart = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/chart/{metrics}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{metrics}', String((_a = request.getMetrics()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getMetrics()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'grn': (_d = request.getGrn()) !== null && _d !== void 0 ? _d : null,
            'queries': (_e = request.getQueries()) !== null && _e !== void 0 ? _e : null,
            'by': (_f = request.getBy()) !== null && _f !== void 0 ? _f : null,
            'timeframe': (_g = request.getTimeframe()) !== null && _g !== void 0 ? _g : null,
            'size': (_h = request.getSize()) !== null && _h !== void 0 ? _h : null,
            'format': (_j = request.getFormat()) !== null && _j !== void 0 ? _j : null,
            'aggregator': (_k = request.getAggregator()) !== null && _k !== void 0 ? _k : null,
            'style': (_l = request.getStyle()) !== null && _l !== void 0 ? _l : null,
            'title': (_m = request.getTitle()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetChartResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2WatchRestClient.prototype.getCumulative = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/cumulative/{name}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{name}', String((_a = request.getName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'resourceGrn': (_d = request.getResourceGrn()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetCumulativeResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2WatchRestClient.prototype.describeBillingActivities = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_a = request.getYear()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getYear()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{month}', String((_c = request.getMonth()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getMonth()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBillingActivitiesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2WatchRestClient.prototype.getBillingActivity = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}/{service}/{activityType}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_a = request.getYear()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getYear()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{month}', String((_c = request.getMonth()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getMonth()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{service}', String((_e = request.getService()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getService()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{activityType}', String((_g = request.getActivityType()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getActivityType()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetBillingActivityResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2WatchRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2WatchRestClient;
//# sourceMappingURL=rest.js.map