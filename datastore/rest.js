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
var Gs2DatastoreRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2DatastoreRestClient, _super);
    function Gs2DatastoreRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2DatastoreRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'datastore')
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
            'doneUploadScript': (_g = (_f = request.getDoneUploadScript()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
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
    Gs2DatastoreRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'datastore')
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
            'doneUploadScript': (_h = (_g = request.getDoneUploadScript()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
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
    Gs2DatastoreRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'datastore')
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
    Gs2DatastoreRestClient.prototype.describeDataObjects = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data')
            .replace('{service}', 'datastore')
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
            'status': String((_e = request.getStatus()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeDataObjectsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.describeDataObjectsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'status': String((_f = request.getStatus()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeDataObjectsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.prepareUpload = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_d = request.getDuplicationAvoider()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'name': (_f = request.getName()) !== null && _f !== void 0 ? _f : null,
            'contentType': (_g = request.getContentType()) !== null && _g !== void 0 ? _g : null,
            'scope': (_h = request.getScope()) !== null && _h !== void 0 ? _h : null,
            'allowUserIds': (_j = request.getAllowUserIds()) !== null && _j !== void 0 ? _j : null,
            'updateIfExists': (_k = request.getUpdateIfExists()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareUploadResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareUploadByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'name': (_g = request.getName()) !== null && _g !== void 0 ? _g : null,
            'contentType': (_h = request.getContentType()) !== null && _h !== void 0 ? _h : null,
            'scope': (_j = request.getScope()) !== null && _j !== void 0 ? _j : null,
            'allowUserIds': (_k = request.getAllowUserIds()) !== null && _k !== void 0 ? _k : null,
            'updateIfExists': (_l = request.getUpdateIfExists()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareUploadByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.updateDataObject = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'scope': (_h = request.getScope()) !== null && _h !== void 0 ? _h : null,
            'allowUserIds': (_j = request.getAllowUserIds()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateDataObjectResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.updateDataObjectByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'scope': (_j = request.getScope()) !== null && _j !== void 0 ? _j : null,
            'allowUserIds': (_k = request.getAllowUserIds()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateDataObjectByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareReUpload = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/file/reUpload')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'contentType': (_h = request.getContentType()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareReUploadResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareReUploadByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/file/reUpload')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'contentType': (_j = request.getContentType()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareReUploadByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.doneUpload = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/done')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DoneUploadResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.doneUploadByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/done')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DoneUploadByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.deleteDataObject = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
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
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteDataObjectResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.deleteDataObjectByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{dataObjectName}', String((_e = request.getDataObjectName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getDataObjectName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteDataObjectByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownload = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_d = request.getDuplicationAvoider()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'dataObjectId': (_f = request.getDataObjectId()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'dataObjectId': (_g = request.getDataObjectId()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadByGeneration = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/file/generation/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{generation}', String((_c = request.getGeneration()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGeneration()) !== null && _d !== void 0 ? _d : 'null'));
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
            'dataObjectId': (_h = request.getDataObjectId()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadByGenerationResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadByGenerationAndUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/file/generation/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{generation}', String((_e = request.getGeneration()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGeneration()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'dataObjectId': (_j = request.getDataObjectId()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadByGenerationAndUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadOwnData = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadOwnDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadByUserIdAndDataObjectName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/file')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{dataObjectName}', String((_e = request.getDataObjectName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getDataObjectName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadByUserIdAndDataObjectNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadOwnDataByGeneration = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/generation/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{generation}', String((_e = request.getGeneration()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGeneration()) !== null && _f !== void 0 ? _f : 'null'));
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadOwnDataByGenerationResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.prepareDownloadByUserIdAndDataObjectNameAndGeneration = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/generation/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{dataObjectName}', String((_e = request.getDataObjectName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getDataObjectName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{generation}', String((_g = request.getGeneration()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGeneration()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.restoreDataObject = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/file/restore')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'dataObjectId': (_d = request.getDataObjectId()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.RestoreDataObjectResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.describeDataObjectHistories = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/history')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_e = request.getAccessToken()) !== null && _e !== void 0 ? _e : null;
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeDataObjectHistoriesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.describeDataObjectHistoriesByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/history')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{dataObjectName}', String((_e = request.getDataObjectName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getDataObjectName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeDataObjectHistoriesByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DatastoreRestClient.prototype.getDataObjectHistory = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/data/{dataObjectName}/history/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{dataObjectName}', String((_c = request.getDataObjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getDataObjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{generation}', String((_e = request.getGeneration()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGeneration()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetDataObjectHistoryResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DatastoreRestClient.prototype.getDataObjectHistoryByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/data/{dataObjectName}/history/{generation}')
            .replace('{service}', 'datastore')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{dataObjectName}', String((_e = request.getDataObjectName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getDataObjectName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{generation}', String((_g = request.getGeneration()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGeneration()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetDataObjectHistoryByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2DatastoreRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2DatastoreRestClient;
//# sourceMappingURL=rest.js.map