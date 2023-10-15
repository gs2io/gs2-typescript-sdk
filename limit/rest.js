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
var Gs2LimitRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2LimitRestClient, _super);
    function Gs2LimitRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2LimitRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'limit')
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
    Gs2LimitRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/dump')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DumpUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/dump')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CheckDumpUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/clean')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CleanUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/clean')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CheckCleanUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import/prepare')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareImportUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'uploadToken': (_e = request.getUploadToken()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ImportUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/user/{userId}/import/{uploadToken}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{uploadToken}', String((_c = request.getUploadToken()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUploadToken()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CheckImportUserDataByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.describeCounters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'limitName': String((_e = request.getLimitName()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeCountersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.describeCountersByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'limitName': String((_f = request.getLimitName()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeCountersByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.getCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter/{limitName}/{counterName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{counterName}', String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetCounterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.getCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{limitName}/{counterName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{counterName}', String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getCounterName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetCounterByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.countUp = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter/{limitName}/{counterName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{counterName}', String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'countUpValue': (_k = request.getCountUpValue()) !== null && _k !== void 0 ? _k : null,
            'maxValue': (_l = request.getMaxValue()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CountUpResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.countUpByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{limitName}/{counterName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{counterName}', String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'countUpValue': (_l = request.getCountUpValue()) !== null && _l !== void 0 ? _l : null,
            'maxValue': (_m = request.getMaxValue()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CountUpByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.countDownByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{limitName}/{counterName}/decrease')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{counterName}', String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'countDownValue': (_l = request.getCountDownValue()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CountDownByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.deleteCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{limitName}/{counterName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{counterName}', String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getCounterName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteCounterByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.verifyCounter = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/counter/{limitName}/{counterName}/verify/{verifyType}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{counterName}', String((_e = request.getCounterName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getCounterName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{verifyType}', String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_j = request.getAccessToken()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'count': (_m = request.getCount()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyCounterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.verifyCounterByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/counter/{limitName}/{counterName}/verify/{verifyType}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{limitName}', String((_e = request.getLimitName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getLimitName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{counterName}', String((_g = request.getCounterName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getCounterName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{verifyType}', String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_l = request.getDuplicationAvoider()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'count': (_o = request.getCount()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyCounterByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.countUpByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/counter/increase')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'stampTask': (_b = request.getStampTask()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CountUpByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.countDownByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/counter/decrease')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'stampSheet': (_b = request.getStampSheet()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CountDownByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.deleteByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/counter/delete')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'stampSheet': (_b = request.getStampSheet()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DeleteByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.verifyCounterByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/counter/verify')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'stampTask': (_b = request.getStampTask()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyCounterByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.describeLimitModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/limit')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeLimitModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.createLimitModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/limit')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'name': (_d = request.getName()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'metadata': (_f = request.getMetadata()) !== null && _f !== void 0 ? _f : null,
            'resetType': (_g = request.getResetType()) !== null && _g !== void 0 ? _g : null,
            'resetDayOfMonth': (_h = request.getResetDayOfMonth()) !== null && _h !== void 0 ? _h : null,
            'resetDayOfWeek': (_j = request.getResetDayOfWeek()) !== null && _j !== void 0 ? _j : null,
            'resetHour': (_k = request.getResetHour()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateLimitModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.getLimitModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/limit/{limitName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetLimitModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.updateLimitModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/limit/{limitName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'resetType': (_h = request.getResetType()) !== null && _h !== void 0 ? _h : null,
            'resetDayOfMonth': (_j = request.getResetDayOfMonth()) !== null && _j !== void 0 ? _j : null,
            'resetDayOfWeek': (_k = request.getResetDayOfWeek()) !== null && _k !== void 0 ? _k : null,
            'resetHour': (_l = request.getResetHour()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateLimitModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.deleteLimitModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/limit/{limitName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteLimitModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'limit')
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
            return Result.ExportMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.getCurrentLimitMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'limit')
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
            return Result.GetCurrentLimitMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.updateCurrentLimitMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'settings': (_d = request.getSettings()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateCurrentLimitMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.updateCurrentLimitMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'checkoutSetting': (_e = (_d = request.getCheckoutSetting()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateCurrentLimitMasterFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LimitRestClient.prototype.describeLimitModels = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/limit')
            .replace('{service}', 'limit')
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
            return Result.DescribeLimitModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LimitRestClient.prototype.getLimitModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/limit/{limitName}')
            .replace('{service}', 'limit')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{limitName}', String((_c = request.getLimitName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getLimitName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetLimitModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    return Gs2LimitRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2LimitRestClient;
//# sourceMappingURL=rest.js.map