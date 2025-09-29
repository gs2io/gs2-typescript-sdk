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
var Gs2FreezeRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2FreezeRestClient, _super);
    function Gs2FreezeRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2FreezeRestClient.prototype.describeStages = function (request) {
        var _a, _b;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeStagesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2FreezeRestClient.prototype.getStage = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{stageName}')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String((_b = request.getStageName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStageName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetStageResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2FreezeRestClient.prototype.promoteStage = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{stageName}/promote')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String((_b = request.getStageName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStageName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PromoteStageResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2FreezeRestClient.prototype.rollbackStage = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{stageName}/rollback')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String((_b = request.getStageName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStageName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.RollbackStageResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2FreezeRestClient.prototype.describeOutputs = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{stageName}/progress/output')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String((_b = request.getStageName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStageName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'pageToken': String((_e = request.getPageToken()) !== null && _e !== void 0 ? _e : null),
            'limit': String((_f = request.getLimit()) !== null && _f !== void 0 ? _f : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeOutputsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2FreezeRestClient.prototype.getOutput = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2FreezeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{stageName}/progress/output/{outputName}')
            .replace('{service}', 'freeze')
            .replace('{region}', this.session.region)
            .replace('{stageName}', String((_b = request.getStageName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStageName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{outputName}', String((_d = request.getOutputName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getOutputName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetOutputResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2FreezeRestClient.ENDPOINT_HOST = null;
    return Gs2FreezeRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2FreezeRestClient;
//# sourceMappingURL=rest.js.map