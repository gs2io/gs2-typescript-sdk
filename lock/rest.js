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
var Gs2LockRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2LockRestClient, _super);
    function Gs2LockRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2LockRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'pageToken': String((_b = request.getPageToken()) !== null && _b !== void 0 ? _b : null),
            'limit': String((_c = request.getLimit()) !== null && _c !== void 0 ? _c : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'logSetting': (_e = (_d = request.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'logSetting': (_f = (_e = request.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.getServiceVersion = function (request) {
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetServiceVersionResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.lock = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mutex/{propertyId}/lock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{propertyId}', String((_c = request.getPropertyId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_e = request.getAccessToken()) !== null && _e !== void 0 ? _e : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'transactionId': (_h = request.getTransactionId()) !== null && _h !== void 0 ? _h : null,
            'ttl': (_j = request.getTtl()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.LockResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.lockByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mutex/{propertyId}/lock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{propertyId}', String((_c = request.getPropertyId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'transactionId': (_k = request.getTransactionId()) !== null && _k !== void 0 ? _k : null,
            'ttl': (_l = request.getTtl()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.LockByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.unlock = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mutex/{propertyId}/unlock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{propertyId}', String((_c = request.getPropertyId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_e = request.getAccessToken()) !== null && _e !== void 0 ? _e : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'transactionId': (_h = request.getTransactionId()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UnlockResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.unlockByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mutex/{propertyId}/unlock')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{propertyId}', String((_c = request.getPropertyId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'transactionId': (_k = request.getTransactionId()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UnlockByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LockRestClient.prototype.getMutex = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{propertyId}', String((_c = request.getPropertyId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getPropertyId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_e = request.getAccessToken()) !== null && _e !== void 0 ? _e : null;
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetMutexResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.getMutexByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{propertyId}', String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetMutexByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LockRestClient.prototype.deleteMutexByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/mutex/{propertyId}')
            .replace('{service}', 'lock')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{propertyId}', String((_e = request.getPropertyId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteMutexByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    return Gs2LockRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2LockRestClient;
//# sourceMappingURL=rest.js.map