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
var Gs2MissionRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2MissionRestClient, _super);
    function Gs2MissionRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2MissionRestClient.prototype.describeCompletes = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeCompletesResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeCompletesByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeCompletesByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.complete = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'config': (_m = (_l = request.getConfig()) === null || _l === void 0 ? void 0 : _l.map(function (item) { return item.toDict(); })) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CompleteResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.completeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{userId}', String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'config': (_p = (_o = request.getConfig()) === null || _o === void 0 ? void 0 : _o.map(function (item) { return item.toDict(); })) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.batchComplete = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete/group/{missionGroupName}/task/any/batch')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'missionTaskNames': (_j = request.getMissionTaskNames()) !== null && _j !== void 0 ? _j : null,
            'config': (_l = (_k = request.getConfig()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.BatchCompleteResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.batchCompleteByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/any/batch')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'missionTaskNames': (_l = request.getMissionTaskNames()) !== null && _l !== void 0 ? _l : null,
            'config': (_o = (_m = request.getConfig()) === null || _m === void 0 ? void 0 : _m.map(function (item) { return item.toDict(); })) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.BatchCompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.receiveByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}/receive')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{userId}', String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ReceiveByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.batchReceiveByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/any/receive/batch')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'missionTaskNames': (_l = request.getMissionTaskNames()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.BatchReceiveByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.revertReceiveByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}/revert')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{userId}', String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RevertReceiveByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getComplete = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete/group/{missionGroupName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCompleteResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCompleteByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.evaluateComplete = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete/group/{missionGroupName}/eval')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.EvaluateCompleteResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.evaluateCompleteByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/eval')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionGroupName}', String((_f = request.getMissionGroupName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionGroupName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.EvaluateCompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteCompleteByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionGroupName}', String((_f = request.getMissionGroupName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionGroupName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteCompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyComplete = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/complete/group/{missionGroupName}/task/{missionTaskName}/verify/{verifyType}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{verifyType}', String((_f = request.getVerifyType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{missionTaskName}', String((_h = request.getMissionTaskName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getMissionTaskName()) !== null && _j !== void 0 ? _j : 'null'))
            .replace('{multiplyValueSpecifyingQuantity}', String((_k = request.getMultiplyValueSpecifyingQuantity()) !== null && _k !== void 0 ? _k : 'null') === "" ? "null" : String((_l = request.getMultiplyValueSpecifyingQuantity()) !== null && _l !== void 0 ? _l : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_m = request.getAccessToken()) !== null && _m !== void 0 ? _m : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_o = request.getDuplicationAvoider()) !== null && _o !== void 0 ? _o : null;
        }
        var body = {
            'contextStack': (_p = request.getContextStack()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCompleteResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyCompleteByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/complete/group/{missionGroupName}/task/{missionTaskName}/verify/{verifyType}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{verifyType}', String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null'))
            .replace('{missionTaskName}', String((_k = request.getMissionTaskName()) !== null && _k !== void 0 ? _k : 'null') === "" ? "null" : String((_l = request.getMissionTaskName()) !== null && _l !== void 0 ? _l : 'null'))
            .replace('{multiplyValueSpecifyingQuantity}', String((_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : 'null') === "" ? "null" : String((_o = request.getMultiplyValueSpecifyingQuantity()) !== null && _o !== void 0 ? _o : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_p = request.getDuplicationAvoider()) !== null && _p !== void 0 ? _p : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_q = request.getTimeOffsetToken()) !== null && _q !== void 0 ? _q : null;
        }
        var body = {
            'contextStack': (_r = request.getContextStack()) !== null && _r !== void 0 ? _r : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCompleteByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.receiveByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/receive')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ReceiveByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.batchReceiveByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/receive/batch')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.BatchReceiveByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.revertReceiveByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/revert')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampSheet': (_c = request.getStampSheet()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RevertReceiveByStampSheetResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyCompleteByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/complete/verify')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCompleteByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeCounterModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/counter')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'namePrefix': String((_e = request.getNamePrefix()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeCounterModelMastersResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.createCounterModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/counter')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'metadata': (_f = request.getMetadata()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'scopes': (_j = (_h = request.getScopes()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
            'challengePeriodEventId': (_k = request.getChallengePeriodEventId()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateCounterModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCounterModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCounterModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateCounterModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'scopes': (_k = (_j = request.getScopes()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
            'challengePeriodEventId': (_l = request.getChallengePeriodEventId()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateCounterModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteCounterModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteCounterModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeMissionGroupModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'namePrefix': String((_e = request.getNamePrefix()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMissionGroupModelMastersResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.createMissionGroupModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'metadata': (_f = request.getMetadata()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'resetType': (_h = request.getResetType()) !== null && _h !== void 0 ? _h : null,
            'resetDayOfMonth': (_j = request.getResetDayOfMonth()) !== null && _j !== void 0 ? _j : null,
            'resetDayOfWeek': (_k = request.getResetDayOfWeek()) !== null && _k !== void 0 ? _k : null,
            'resetHour': (_l = request.getResetHour()) !== null && _l !== void 0 ? _l : null,
            'anchorTimestamp': (_m = request.getAnchorTimestamp()) !== null && _m !== void 0 ? _m : null,
            'days': (_o = request.getDays()) !== null && _o !== void 0 ? _o : null,
            'completeNotificationNamespaceId': (_p = request.getCompleteNotificationNamespaceId()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateMissionGroupModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getMissionGroupModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}')
            .replace('{service}', 'mission')
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
            return Result.GetMissionGroupModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateMissionGroupModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'resetType': (_j = request.getResetType()) !== null && _j !== void 0 ? _j : null,
            'resetDayOfMonth': (_k = request.getResetDayOfMonth()) !== null && _k !== void 0 ? _k : null,
            'resetDayOfWeek': (_l = request.getResetDayOfWeek()) !== null && _l !== void 0 ? _l : null,
            'resetHour': (_m = request.getResetHour()) !== null && _m !== void 0 ? _m : null,
            'anchorTimestamp': (_o = request.getAnchorTimestamp()) !== null && _o !== void 0 ? _o : null,
            'days': (_p = request.getDays()) !== null && _p !== void 0 ? _p : null,
            'completeNotificationNamespaceId': (_q = request.getCompleteNotificationNamespaceId()) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMissionGroupModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteMissionGroupModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}')
            .replace('{service}', 'mission')
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
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteMissionGroupModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'namePrefix': String((_c = request.getNamePrefix()) !== null && _c !== void 0 ? _c : null),
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeNamespacesResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'transactionSetting': (_f = (_e = request.getTransactionSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'missionCompleteScript': (_h = (_g = request.getMissionCompleteScript()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'counterIncrementScript': (_k = (_j = request.getCounterIncrementScript()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'receiveRewardsScript': (_m = (_l = request.getReceiveRewardsScript()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'completeNotification': (_p = (_o = request.getCompleteNotification()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'logSetting': (_r = (_q = request.getLogSetting()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'queueNamespaceId': (_s = request.getQueueNamespaceId()) !== null && _s !== void 0 ? _s : null,
            'keyId': (_t = request.getKeyId()) !== null && _t !== void 0 ? _t : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'mission')
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
            return Result.GetNamespaceStatusResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mission')
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
            return Result.GetNamespaceResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'transactionSetting': (_g = (_f = request.getTransactionSetting()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'missionCompleteScript': (_j = (_h = request.getMissionCompleteScript()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'counterIncrementScript': (_l = (_k = request.getCounterIncrementScript()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'receiveRewardsScript': (_o = (_m = request.getReceiveRewardsScript()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'completeNotification': (_q = (_p = request.getCompleteNotification()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'logSetting': (_s = (_r = request.getLogSetting()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'queueNamespaceId': (_t = request.getQueueNamespaceId()) !== null && _t !== void 0 ? _t : null,
            'keyId': (_u = request.getKeyId()) !== null && _u !== void 0 ? _u : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteNamespaceResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'mission')
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
    Gs2MissionRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DumpUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckDumpUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CleanUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckCleanUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PrepareImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'uploadToken': (_f = request.getUploadToken()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{uploadToken}', String((_d = request.getUploadToken()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUploadToken()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeCounters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeCountersResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeCountersByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeCountersByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.increaseCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IncreaseCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.setCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'values': (_m = (_l = request.getValues()) === null || _l === void 0 ? void 0 : _l.map(function (item) { return item.toDict(); })) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SetCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.decreaseCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter/{counterName}/decrease')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'value': (_j = request.getValue()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseCounterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.decreaseCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}/decrease')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCounterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyCounterValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter/{counterName}/verify/counter/{verifyType}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{verifyType}', String((_f = request.getVerifyType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'scopeType': (_l = request.getScopeType()) !== null && _l !== void 0 ? _l : null,
            'resetType': (_m = request.getResetType()) !== null && _m !== void 0 ? _m : null,
            'conditionName': (_o = request.getConditionName()) !== null && _o !== void 0 ? _o : null,
            'value': (_p = request.getValue()) !== null && _p !== void 0 ? _p : null,
            'multiplyValueSpecifyingQuantity': (_q = request.getMultiplyValueSpecifyingQuantity()) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCounterValueResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyCounterValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}/verify/counter/{verifyType}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{counterName}', String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{verifyType}', String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'scopeType': (_o = request.getScopeType()) !== null && _o !== void 0 ? _o : null,
            'resetType': (_p = request.getResetType()) !== null && _p !== void 0 ? _p : null,
            'conditionName': (_q = request.getConditionName()) !== null && _q !== void 0 ? _q : null,
            'value': (_r = request.getValue()) !== null && _r !== void 0 ? _r : null,
            'multiplyValueSpecifyingQuantity': (_s = request.getMultiplyValueSpecifyingQuantity()) !== null && _s !== void 0 ? _s : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCounterValueByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.resetCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter/{counterName}/reset')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'scopes': (_k = (_j = request.getScopes()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ResetCounterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.resetCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}/reset')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{counterName}', String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'scopes': (_m = (_l = request.getScopes()) === null || _l === void 0 ? void 0 : _l.map(function (item) { return item.toDict(); })) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ResetCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteCounterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{counterName}', String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteCounterByUserIdResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.increaseByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/increase')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampSheet': (_c = request.getStampSheet()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IncreaseByStampSheetResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.setByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/set')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampSheet': (_c = request.getStampSheet()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetByStampSheetResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.decreaseByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/decrease')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.resetByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/reset')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ResetByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.verifyCounterValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/counter/verify')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCounterValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'mission')
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
            return Result.ExportMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCurrentMissionMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mission')
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
            return Result.GetCurrentMissionMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.preUpdateCurrentMissionMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PreUpdateCurrentMissionMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateCurrentMissionMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'mode': (_e = request.getMode()) !== null && _e !== void 0 ? _e : null,
            'settings': (_f = request.getSettings()) !== null && _f !== void 0 ? _f : null,
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateCurrentMissionMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateCurrentMissionMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'checkoutSetting': (_f = (_e = request.getCheckoutSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateCurrentMissionMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeCounterModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/counter')
            .replace('{service}', 'mission')
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
            return Result.DescribeCounterModelsResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getCounterModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/counter/{counterName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{counterName}', String((_d = request.getCounterName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCounterModelResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeMissionGroupModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/group')
            .replace('{service}', 'mission')
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
            return Result.DescribeMissionGroupModelsResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getMissionGroupModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/group/{missionGroupName}')
            .replace('{service}', 'mission')
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
            return Result.GetMissionGroupModelResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeMissionTaskModels = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/group/{missionGroupName}/task')
            .replace('{service}', 'mission')
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
            return Result.DescribeMissionTaskModelsResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getMissionTaskModel = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMissionTaskModelResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.describeMissionTaskModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}/task')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'namePrefix': String((_g = request.getNamePrefix()) !== null && _g !== void 0 ? _g : null),
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMissionTaskModelMastersResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.createMissionTaskModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}/task')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'name': (_g = request.getName()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'description': (_j = request.getDescription()) !== null && _j !== void 0 ? _j : null,
            'verifyCompleteType': (_k = request.getVerifyCompleteType()) !== null && _k !== void 0 ? _k : null,
            'targetCounter': (_m = (_l = request.getTargetCounter()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'verifyCompleteConsumeActions': (_p = (_o = request.getVerifyCompleteConsumeActions()) === null || _o === void 0 ? void 0 : _o.map(function (item) { return item.toDict(); })) !== null && _p !== void 0 ? _p : null,
            'completeAcquireActions': (_r = (_q = request.getCompleteAcquireActions()) === null || _q === void 0 ? void 0 : _q.map(function (item) { return item.toDict(); })) !== null && _r !== void 0 ? _r : null,
            'challengePeriodEventId': (_s = request.getChallengePeriodEventId()) !== null && _s !== void 0 ? _s : null,
            'premiseMissionTaskName': (_t = request.getPremiseMissionTaskName()) !== null && _t !== void 0 ? _t : null,
            'counterName': (_u = request.getCounterName()) !== null && _u !== void 0 ? _u : null,
            'targetResetType': (_v = request.getTargetResetType()) !== null && _v !== void 0 ? _v : null,
            'targetValue': (_w = request.getTargetValue()) !== null && _w !== void 0 ? _w : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateMissionTaskModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.getMissionTaskModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMissionTaskModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.updateMissionTaskModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'metadata': (_j = request.getMetadata()) !== null && _j !== void 0 ? _j : null,
            'description': (_k = request.getDescription()) !== null && _k !== void 0 ? _k : null,
            'verifyCompleteType': (_l = request.getVerifyCompleteType()) !== null && _l !== void 0 ? _l : null,
            'targetCounter': (_o = (_m = request.getTargetCounter()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'verifyCompleteConsumeActions': (_q = (_p = request.getVerifyCompleteConsumeActions()) === null || _p === void 0 ? void 0 : _p.map(function (item) { return item.toDict(); })) !== null && _q !== void 0 ? _q : null,
            'completeAcquireActions': (_s = (_r = request.getCompleteAcquireActions()) === null || _r === void 0 ? void 0 : _r.map(function (item) { return item.toDict(); })) !== null && _s !== void 0 ? _s : null,
            'challengePeriodEventId': (_t = request.getChallengePeriodEventId()) !== null && _t !== void 0 ? _t : null,
            'premiseMissionTaskName': (_u = request.getPremiseMissionTaskName()) !== null && _u !== void 0 ? _u : null,
            'counterName': (_v = request.getCounterName()) !== null && _v !== void 0 ? _v : null,
            'targetResetType': (_w = request.getTargetResetType()) !== null && _w !== void 0 ? _w : null,
            'targetValue': (_x = request.getTargetValue()) !== null && _x !== void 0 ? _x : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMissionTaskModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.prototype.deleteMissionTaskModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MissionRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/group/{missionGroupName}/task/{missionTaskName}')
            .replace('{service}', 'mission')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{missionGroupName}', String((_d = request.getMissionGroupName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMissionGroupName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{missionTaskName}', String((_f = request.getMissionTaskName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMissionTaskName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteMissionTaskModelMasterResult.fromDict(data);
        });
    };
    Gs2MissionRestClient.ENDPOINT_HOST = null;
    return Gs2MissionRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2MissionRestClient;
//# sourceMappingURL=rest.js.map