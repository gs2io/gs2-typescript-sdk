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
var Gs2InventoryRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2InventoryRestClient, _super);
    function Gs2InventoryRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2InventoryRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'inventory')
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
    Gs2InventoryRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'acquireScript': (_e = (_d = request.getAcquireScript()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
            'overflowScript': (_g = (_f = request.getOverflowScript()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'consumeScript': (_j = (_h = request.getConsumeScript()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'simpleItemAcquireScript': (_l = (_k = request.getSimpleItemAcquireScript()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'simpleItemConsumeScript': (_o = (_m = request.getSimpleItemConsumeScript()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'bigItemAcquireScript': (_q = (_p = request.getBigItemAcquireScript()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'bigItemConsumeScript': (_s = (_r = request.getBigItemConsumeScript()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'logSetting': (_u = (_t = request.getLogSetting()) === null || _t === void 0 ? void 0 : _t.toDict()) !== null && _u !== void 0 ? _u : null,
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
    Gs2InventoryRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'inventory')
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
    Gs2InventoryRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'inventory')
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
    Gs2InventoryRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'acquireScript': (_f = (_e = request.getAcquireScript()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'overflowScript': (_h = (_g = request.getOverflowScript()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'consumeScript': (_k = (_j = request.getConsumeScript()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'simpleItemAcquireScript': (_m = (_l = request.getSimpleItemAcquireScript()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'simpleItemConsumeScript': (_p = (_o = request.getSimpleItemConsumeScript()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'bigItemAcquireScript': (_r = (_q = request.getBigItemAcquireScript()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'bigItemConsumeScript': (_t = (_s = request.getBigItemConsumeScript()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'logSetting': (_v = (_u = request.getLogSetting()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
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
    Gs2InventoryRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'inventory')
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
    Gs2InventoryRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
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
    Gs2InventoryRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_a = request.getUserId()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{uploadToken}', String((_c = request.getUploadToken()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUploadToken()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_e = request.getTimeOffsetToken()) !== null && _e !== void 0 ? _e : null;
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
    Gs2InventoryRestClient.prototype.describeInventoryModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeInventoryModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory')
            .replace('{service}', 'inventory')
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
            'initialCapacity': (_g = request.getInitialCapacity()) !== null && _g !== void 0 ? _g : null,
            'maxCapacity': (_h = request.getMaxCapacity()) !== null && _h !== void 0 ? _h : null,
            'protectReferencedItem': (_j = request.getProtectReferencedItem()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'initialCapacity': (_h = request.getInitialCapacity()) !== null && _h !== void 0 ? _h : null,
            'maxCapacity': (_j = request.getMaxCapacity()) !== null && _j !== void 0 ? _j : null,
            'protectReferencedItem': (_k = request.getProtectReferencedItem()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DeleteInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeInventoryModels = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeInventoryModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getInventoryModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetInventoryModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeItemModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeItemModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'name': (_f = request.getName()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'stackingLimit': (_j = request.getStackingLimit()) !== null && _j !== void 0 ? _j : null,
            'allowMultipleStacks': (_k = request.getAllowMultipleStacks()) !== null && _k !== void 0 ? _k : null,
            'sortValue': (_l = request.getSortValue()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'metadata': (_j = request.getMetadata()) !== null && _j !== void 0 ? _j : null,
            'stackingLimit': (_k = request.getStackingLimit()) !== null && _k !== void 0 ? _k : null,
            'allowMultipleStacks': (_l = request.getAllowMultipleStacks()) !== null && _l !== void 0 ? _l : null,
            'sortValue': (_m = request.getSortValue()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeItemModels = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeItemModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getItemModel = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleInventoryModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeSimpleInventoryModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createSimpleInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory')
            .replace('{service}', 'inventory')
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateSimpleInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetSimpleInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateSimpleInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateSimpleInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteSimpleInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DeleteSimpleInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleInventoryModels = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/simple/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeSimpleInventoryModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleInventoryModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetSimpleInventoryModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleItemModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeSimpleItemModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createSimpleItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'name': (_f = request.getName()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateSimpleItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetSimpleItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateSimpleItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'metadata': (_j = request.getMetadata()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateSimpleItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteSimpleItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteSimpleItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleItemModels = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/simple/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeSimpleItemModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItemModel = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetSimpleItemModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeBigInventoryModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeBigInventoryModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createBigInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory')
            .replace('{service}', 'inventory')
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateBigInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getBigInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetBigInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateBigInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateBigInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteBigInventoryModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DeleteBigInventoryModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeBigInventoryModels = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/big/inventory')
            .replace('{service}', 'inventory')
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
            return Result.DescribeBigInventoryModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getBigInventoryModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/big/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetBigInventoryModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeBigItemModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBigItemModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.createBigItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'name': (_f = request.getName()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateBigItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.getBigItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetBigItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateBigItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'metadata': (_j = request.getMetadata()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateBigItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteBigItemModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteBigItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeBigItemModels = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/big/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeBigItemModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getBigItemModel = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetBigItemModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'inventory')
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
    Gs2InventoryRestClient.prototype.getCurrentItemModelMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'inventory')
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
            return Result.GetCurrentItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.updateCurrentItemModelMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'inventory')
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
            return Result.UpdateCurrentItemModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.updateCurrentItemModelMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'inventory')
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
            return Result.UpdateCurrentItemModelMasterFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.describeInventories = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory')
            .replace('{service}', 'inventory')
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
            'pageToken': String((_e = request.getPageToken()) !== null && _e !== void 0 ? _e : null),
            'limit': String((_f = request.getLimit()) !== null && _f !== void 0 ? _f : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeInventoriesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeInventoriesByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_e = request.getTimeOffsetToken()) !== null && _e !== void 0 ? _e : null;
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
            return Result.DescribeInventoriesByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getInventory = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetInventoryResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getInventoryByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetInventoryByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.addCapacityByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/capacity')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'addCapacityValue': (_k = request.getAddCapacityValue()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AddCapacityByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setCapacityByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/capacity')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'newCapacityValue': (_k = request.getNewCapacityValue()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SetCapacityByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteInventoryByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteInventoryByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.verifyInventoryCurrentMaxCapacity = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{verifyType}', String((_e = request.getVerifyType()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getVerifyType()) !== null && _f !== void 0 ? _f : 'null'));
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
            'currentInventoryMaxCapacity': (_k = request.getCurrentInventoryMaxCapacity()) !== null && _k !== void 0 ? _k : null,
            'multiplyValueSpecifyingQuantity': (_l = request.getMultiplyValueSpecifyingQuantity()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyInventoryCurrentMaxCapacityResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyInventoryCurrentMaxCapacityByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{inventoryName}', String((_e = request.getInventoryName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getInventoryName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{verifyType}', String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'currentInventoryMaxCapacity': (_m = request.getCurrentInventoryMaxCapacity()) !== null && _m !== void 0 ? _m : null,
            'multiplyValueSpecifyingQuantity': (_o = request.getMultiplyValueSpecifyingQuantity()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyInventoryCurrentMaxCapacityByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyInventoryCurrentMaxCapacityByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/inventory/verify')
            .replace('{service}', 'inventory')
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
            return Result.VerifyInventoryCurrentMaxCapacityByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.addCapacityByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/inventory/capacity/add')
            .replace('{service}', 'inventory')
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
            return Result.AddCapacityByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setCapacityByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/inventory/capacity/set')
            .replace('{service}', 'inventory')
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
            return Result.SetCapacityByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.describeItemSets = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeItemSetsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeItemSetsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeItemSetsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getItemSet = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'itemSetName': String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemSetResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getItemSetByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'itemSetName': String((_l = request.getItemSetName()) !== null && _l !== void 0 ? _l : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemSetByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getItemWithSignature = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/signature')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'itemSetName': String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : null),
            'keyId': String((_k = request.getKeyId()) !== null && _k !== void 0 ? _k : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemWithSignatureResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getItemWithSignatureByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/signature')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'itemSetName': String((_l = request.getItemSetName()) !== null && _l !== void 0 ? _l : null),
            'keyId': String((_m = request.getKeyId()) !== null && _m !== void 0 ? _m : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetItemWithSignatureByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.acquireItemSetByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/acquire')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'acquireCount': (_m = request.getAcquireCount()) !== null && _m !== void 0 ? _m : null,
            'expiresAt': (_o = request.getExpiresAt()) !== null && _o !== void 0 ? _o : null,
            'createNewItemSet': (_p = request.getCreateNewItemSet()) !== null && _p !== void 0 ? _p : null,
            'itemSetName': (_q = request.getItemSetName()) !== null && _q !== void 0 ? _q : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcquireItemSetByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.acquireItemSetWithGradeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/acquire/grade')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'gradeModelId': (_m = request.getGradeModelId()) !== null && _m !== void 0 ? _m : null,
            'gradeValue': (_o = request.getGradeValue()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcquireItemSetWithGradeByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeItemSet = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
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
            'consumeCount': (_k = request.getConsumeCount()) !== null && _k !== void 0 ? _k : null,
            'itemSetName': (_l = request.getItemSetName()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeItemSetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeItemSetByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'consumeCount': (_m = request.getConsumeCount()) !== null && _m !== void 0 ? _m : null,
            'itemSetName': (_o = request.getItemSetName()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeItemSetByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteItemSetByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'itemSetName': String((_m = request.getItemSetName()) !== null && _m !== void 0 ? _m : null),
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteItemSetByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.verifyItemSet = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
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
            'itemSetName': (_m = request.getItemSetName()) !== null && _m !== void 0 ? _m : null,
            'count': (_o = request.getCount()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyItemSetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyItemSetByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{inventoryName}', String((_e = request.getInventoryName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getInventoryName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{verifyType}', String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_l = request.getDuplicationAvoider()) !== null && _l !== void 0 ? _l : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_m = request.getTimeOffsetToken()) !== null && _m !== void 0 ? _m : null;
        }
        var body = {
            'contextStack': (_o = request.getContextStack()) !== null && _o !== void 0 ? _o : null,
            'itemSetName': (_p = request.getItemSetName()) !== null && _p !== void 0 ? _p : null,
            'count': (_q = request.getCount()) !== null && _q !== void 0 ? _q : null,
            'multiplyValueSpecifyingQuantity': (_r = request.getMultiplyValueSpecifyingQuantity()) !== null && _r !== void 0 ? _r : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyItemSetByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.acquireItemSetByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/acquire')
            .replace('{service}', 'inventory')
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
            return Result.AcquireItemSetByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.acquireItemSetWithGradeByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/acquire/grade')
            .replace('{service}', 'inventory')
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
            return Result.AcquireItemSetWithGradeByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeItemSetByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/consume')
            .replace('{service}', 'inventory')
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
            return Result.ConsumeItemSetByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyItemSetByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/verify')
            .replace('{service}', 'inventory')
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
            return Result.VerifyItemSetByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.describeReferenceOf = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemSetName}', String((_g = request.getItemSetName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemSetName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_j = request.getAccessToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeReferenceOfResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeReferenceOfByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{itemSetName}', String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getItemSetName()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeReferenceOfByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getReferenceOf = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemSetName}', String((_g = request.getItemSetName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemSetName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{referenceOf}', String((_j = request.getReferenceOf()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getReferenceOf()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_l = request.getAccessToken()) !== null && _l !== void 0 ? _l : null;
        }
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetReferenceOfResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getReferenceOfByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{itemSetName}', String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getItemSetName()) !== null && _k !== void 0 ? _k : 'null'))
            .replace('{referenceOf}', String((_l = request.getReferenceOf()) !== null && _l !== void 0 ? _l : 'null') === "" ? "null" : String((_m = request.getReferenceOf()) !== null && _m !== void 0 ? _m : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_o = request.getTimeOffsetToken()) !== null && _o !== void 0 ? _o : null;
        }
        var params = {
            'contextStack': (_p = request.getContextStack()) !== null && _p !== void 0 ? _p : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetReferenceOfByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.verifyReferenceOf = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemSetName}', String((_g = request.getItemSetName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemSetName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{referenceOf}', String((_j = request.getReferenceOf()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getReferenceOf()) !== null && _k !== void 0 ? _k : 'null'))
            .replace('{verifyType}', String((_l = request.getVerifyType()) !== null && _l !== void 0 ? _l : 'null') === "" ? "null" : String((_m = request.getVerifyType()) !== null && _m !== void 0 ? _m : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_o = request.getAccessToken()) !== null && _o !== void 0 ? _o : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_p = request.getDuplicationAvoider()) !== null && _p !== void 0 ? _p : null;
        }
        var body = {
            'contextStack': (_q = request.getContextStack()) !== null && _q !== void 0 ? _q : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyReferenceOfResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyReferenceOfByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{itemSetName}', String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getItemSetName()) !== null && _k !== void 0 ? _k : 'null'))
            .replace('{referenceOf}', String((_l = request.getReferenceOf()) !== null && _l !== void 0 ? _l : 'null') === "" ? "null" : String((_m = request.getReferenceOf()) !== null && _m !== void 0 ? _m : 'null'))
            .replace('{verifyType}', String((_o = request.getVerifyType()) !== null && _o !== void 0 ? _o : 'null') === "" ? "null" : String((_p = request.getVerifyType()) !== null && _p !== void 0 ? _p : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_q = request.getDuplicationAvoider()) !== null && _q !== void 0 ? _q : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_r = request.getTimeOffsetToken()) !== null && _r !== void 0 ? _r : null;
        }
        var body = {
            'contextStack': (_s = request.getContextStack()) !== null && _s !== void 0 ? _s : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyReferenceOfByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.addReferenceOf = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemSetName}', String((_g = request.getItemSetName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemSetName()) !== null && _h !== void 0 ? _h : 'null'));
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
            'referenceOf': (_m = request.getReferenceOf()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AddReferenceOfResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.addReferenceOfByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{itemSetName}', String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getItemSetName()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_l = request.getDuplicationAvoider()) !== null && _l !== void 0 ? _l : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_m = request.getTimeOffsetToken()) !== null && _m !== void 0 ? _m : null;
        }
        var body = {
            'contextStack': (_o = request.getContextStack()) !== null && _o !== void 0 ? _o : null,
            'referenceOf': (_p = request.getReferenceOf()) !== null && _p !== void 0 ? _p : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AddReferenceOfByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteReferenceOf = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemSetName}', String((_g = request.getItemSetName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemSetName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{referenceOf}', String((_j = request.getReferenceOf()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getReferenceOf()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_l = request.getAccessToken()) !== null && _l !== void 0 ? _l : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_m = request.getDuplicationAvoider()) !== null && _m !== void 0 ? _m : null;
        }
        var params = {
            'contextStack': (_o = request.getContextStack()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteReferenceOfResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.deleteReferenceOfByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/inventory/{inventoryName}/item/{itemName}/{itemSetName}/reference/{referenceOf}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{itemSetName}', String((_j = request.getItemSetName()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getItemSetName()) !== null && _k !== void 0 ? _k : 'null'))
            .replace('{referenceOf}', String((_l = request.getReferenceOf()) !== null && _l !== void 0 ? _l : 'null') === "" ? "null" : String((_m = request.getReferenceOf()) !== null && _m !== void 0 ? _m : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_o = request.getDuplicationAvoider()) !== null && _o !== void 0 ? _o : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_p = request.getTimeOffsetToken()) !== null && _p !== void 0 ? _p : null;
        }
        var params = {
            'contextStack': (_q = request.getContextStack()) !== null && _q !== void 0 ? _q : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteReferenceOfByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.addReferenceOfItemSetByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/reference/add')
            .replace('{service}', 'inventory')
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
            return Result.AddReferenceOfItemSetByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteReferenceOfItemSetByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/reference/delete')
            .replace('{service}', 'inventory')
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
            return Result.DeleteReferenceOfItemSetByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyReferenceOfByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/item/reference/verify')
            .replace('{service}', 'inventory')
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
            return Result.VerifyReferenceOfByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleItems = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/simple/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeSimpleItemsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeSimpleItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeSimpleItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetSimpleItemResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetSimpleItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItemWithSignature = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/simple/inventory/{inventoryName}/item/{itemName}/signature')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'keyId': String((_j = request.getKeyId()) !== null && _j !== void 0 ? _j : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetSimpleItemWithSignatureResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getSimpleItemWithSignatureByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/item/{itemName}/signature')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'keyId': String((_l = request.getKeyId()) !== null && _l !== void 0 ? _l : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetSimpleItemWithSignatureByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.acquireSimpleItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/acquire')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'acquireCounts': (_l = (_k = request.getAcquireCounts()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcquireSimpleItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeSimpleItems = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/simple/inventory/{inventoryName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'consumeCounts': (_j = (_h = request.getConsumeCounts()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeSimpleItemsResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeSimpleItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'consumeCounts': (_l = (_k = request.getConsumeCounts()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeSimpleItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setSimpleItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'counts': (_l = (_k = request.getCounts()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SetSimpleItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteSimpleItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteSimpleItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.verifySimpleItem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/simple/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
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
            'multiplyValueSpecifyingQuantity': (_o = request.getMultiplyValueSpecifyingQuantity()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifySimpleItemResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifySimpleItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/simple/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{inventoryName}', String((_e = request.getInventoryName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getInventoryName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{verifyType}', String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_l = request.getDuplicationAvoider()) !== null && _l !== void 0 ? _l : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_m = request.getTimeOffsetToken()) !== null && _m !== void 0 ? _m : null;
        }
        var body = {
            'contextStack': (_o = request.getContextStack()) !== null && _o !== void 0 ? _o : null,
            'count': (_p = request.getCount()) !== null && _p !== void 0 ? _p : null,
            'multiplyValueSpecifyingQuantity': (_q = request.getMultiplyValueSpecifyingQuantity()) !== null && _q !== void 0 ? _q : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifySimpleItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.acquireSimpleItemsByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/simple/item/acquire')
            .replace('{service}', 'inventory')
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
            return Result.AcquireSimpleItemsByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeSimpleItemsByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/simple/item/consume')
            .replace('{service}', 'inventory')
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
            return Result.ConsumeSimpleItemsByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setSimpleItemsByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/simple/item/set')
            .replace('{service}', 'inventory')
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
            return Result.SetSimpleItemsByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifySimpleItemByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/simple/item/verify')
            .replace('{service}', 'inventory')
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
            return Result.VerifySimpleItemByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.describeBigItems = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/big/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeBigItemsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.describeBigItemsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBigItemsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getBigItem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetBigItemResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.getBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.acquireBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}/acquire')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'acquireCount': (_m = request.getAcquireCount()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcquireBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeBigItem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/big/inventory/{inventoryName}/item/{itemName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'));
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
            'consumeCount': (_k = request.getConsumeCount()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeBigItemResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}/consume')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'consumeCount': (_m = request.getConsumeCount()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ConsumeBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'count': (_m = request.getCount()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SetBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.deleteBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2InventoryRestClient.prototype.verifyBigItem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/big/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{inventoryName}', String((_c = request.getInventoryName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInventoryName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{itemName}', String((_e = request.getItemName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getItemName()) !== null && _f !== void 0 ? _f : 'null'))
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
            'multiplyValueSpecifyingQuantity': (_o = request.getMultiplyValueSpecifyingQuantity()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyBigItemResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyBigItemByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/big/inventory/{inventoryName}/item/{itemName}/verify/{verifyType}')
            .replace('{service}', 'inventory')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{inventoryName}', String((_e = request.getInventoryName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getInventoryName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{itemName}', String((_g = request.getItemName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getItemName()) !== null && _h !== void 0 ? _h : 'null'))
            .replace('{verifyType}', String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null') === "" ? "null" : String((_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_l = request.getDuplicationAvoider()) !== null && _l !== void 0 ? _l : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_m = request.getTimeOffsetToken()) !== null && _m !== void 0 ? _m : null;
        }
        var body = {
            'contextStack': (_o = request.getContextStack()) !== null && _o !== void 0 ? _o : null,
            'count': (_p = request.getCount()) !== null && _p !== void 0 ? _p : null,
            'multiplyValueSpecifyingQuantity': (_q = request.getMultiplyValueSpecifyingQuantity()) !== null && _q !== void 0 ? _q : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyBigItemByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.acquireBigItemByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/big/item/acquire')
            .replace('{service}', 'inventory')
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
            return Result.AcquireBigItemByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.consumeBigItemByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/big/item/consume')
            .replace('{service}', 'inventory')
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
            return Result.ConsumeBigItemByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.setBigItemByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/big/item/set')
            .replace('{service}', 'inventory')
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
            return Result.SetBigItemByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2InventoryRestClient.prototype.verifyBigItemByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/big/item/verify')
            .replace('{service}', 'inventory')
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
            return Result.VerifyBigItemByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2InventoryRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2InventoryRestClient;
//# sourceMappingURL=rest.js.map