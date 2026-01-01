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
var Gs2LockRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2LockRestClient, _super);
    function Gs2LockRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2LockRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'lock')
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
    Gs2LockRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'logSetting': (_f = (_e = request.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'lock')
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
    Gs2LockRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'lock')
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
    Gs2LockRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'logSetting': (_g = (_f = request.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'lock')
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
    Gs2LockRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'lock')
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
    Gs2LockRestClient.prototype.lock = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/mutex/{propertyId}/lock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{propertyId}', String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null'));
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
            'transactionId': (_j = request.getTransactionId()) !== null && _j !== void 0 ? _j : null,
            'ttl': (_k = request.getTtl()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.LockResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.lockByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/mutex/{propertyId}/lock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{propertyId}', String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null'))
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
            'transactionId': (_l = request.getTransactionId()) !== null && _l !== void 0 ? _l : null,
            'ttl': (_m = request.getTtl()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.LockByUserIdResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.unlock = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/mutex/{propertyId}/unlock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{propertyId}', String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null'));
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
            'transactionId': (_j = request.getTransactionId()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.UnlockResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.unlockByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/mutex/{propertyId}/unlock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{propertyId}', String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null'))
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
            'transactionId': (_l = request.getTransactionId()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.UnlockByUserIdResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.getMutex = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{propertyId}', String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetMutexResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.getMutexByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{propertyId}', String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getPropertyId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetMutexByUserIdResult.fromDict(data);
        });
    };
    Gs2LockRestClient.prototype.deleteMutexByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2LockRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{propertyId}', String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getPropertyId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeleteMutexByUserIdResult.fromDict(data);
        });
    };
    Gs2LockRestClient.ENDPOINT_HOST = null;
    return Gs2LockRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2LockRestClient;
//# sourceMappingURL=rest.js.map