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
import { __extends } from "tslib";
import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant } from '../core/model';
import * as Result from './result';
import axios from 'axios';
var Gs2WatchRestClient = /** @class */ (function (_super) {
    __extends(Gs2WatchRestClient, _super);
    function Gs2WatchRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2WatchRestClient.prototype.getChart = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (Gs2Constant.ENDPOINT_HOST + '/chart/{metrics}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{metrics}', String((_a = request.getMetrics()) !== null && _a !== void 0 ? _a : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'grn': (_c = request.getGrn()) !== null && _c !== void 0 ? _c : null,
            'queries': (_d = request.getQueries()) !== null && _d !== void 0 ? _d : null,
            'by': (_e = request.getBy()) !== null && _e !== void 0 ? _e : null,
            'timeframe': (_f = request.getTimeframe()) !== null && _f !== void 0 ? _f : null,
            'size': (_g = request.getSize()) !== null && _g !== void 0 ? _g : null,
            'format': (_h = request.getFormat()) !== null && _h !== void 0 ? _h : null,
            'aggregator': (_j = request.getAggregator()) !== null && _j !== void 0 ? _j : null,
            'style': (_k = request.getStyle()) !== null && _k !== void 0 ? _k : null,
            'title': (_l = request.getTitle()) !== null && _l !== void 0 ? _l : null,
        };
        return axios.post(url, body, {
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
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/cumulative/{name}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{name}', String((_a = request.getName()) !== null && _a !== void 0 ? _a : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'resourceGrn': (_c = request.getResourceGrn()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.post(url, body, {
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
        var _a, _b, _c, _d, _e, _f;
        var url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_a = request.getYear()) !== null && _a !== void 0 ? _a : 'null'))
            .replace('{month}', String((_b = request.getMonth()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'pageToken': String((_e = request.getPageToken()) !== null && _e !== void 0 ? _e : null),
            'limit': String((_f = request.getLimit()) !== null && _f !== void 0 ? _f : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBillingActivitiesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2WatchRestClient.prototype.getBillingActivity = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}/{service}/{activityType}')
            .replace('{service}', 'watch')
            .replace('{region}', this.session.region)
            .replace('{year}', String((_a = request.getYear()) !== null && _a !== void 0 ? _a : 'null'))
            .replace('{month}', String((_b = request.getMonth()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{service}', String((_c = request.getService()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{activityType}', String((_d = request.getActivityType()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.post(url, body, {
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
}(AbstractGs2RestClient));
export { Gs2WatchRestClient };
//# sourceMappingURL=rest.js.map