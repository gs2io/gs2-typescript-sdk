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
var Gs2StaminaRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2StaminaRestClient, _super);
    function Gs2StaminaRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2StaminaRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'stamina')
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
            'overflowTriggerScript': (_g = request.getOverflowTriggerScript()) !== null && _g !== void 0 ? _g : null,
            'logSetting': (_j = (_h = request.getLogSetting()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'stamina')
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
            'overflowTriggerScript': (_h = request.getOverflowTriggerScript()) !== null && _h !== void 0 ? _h : null,
            'logSetting': (_k = (_j = request.getLogSetting()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.describeStaminaModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'stamina')
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
            return Result.DescribeStaminaModelMastersResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.createStaminaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'recoverIntervalMinutes': (_h = request.getRecoverIntervalMinutes()) !== null && _h !== void 0 ? _h : null,
            'recoverValue': (_j = request.getRecoverValue()) !== null && _j !== void 0 ? _j : null,
            'initialCapacity': (_k = request.getInitialCapacity()) !== null && _k !== void 0 ? _k : null,
            'isOverflow': (_l = request.getIsOverflow()) !== null && _l !== void 0 ? _l : null,
            'maxCapacity': (_m = request.getMaxCapacity()) !== null && _m !== void 0 ? _m : null,
            'maxStaminaTableName': (_o = request.getMaxStaminaTableName()) !== null && _o !== void 0 ? _o : null,
            'recoverIntervalTableName': (_p = request.getRecoverIntervalTableName()) !== null && _p !== void 0 ? _p : null,
            'recoverValueTableName': (_q = request.getRecoverValueTableName()) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateStaminaModelMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getStaminaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{staminaName}')
            .replace('{service}', 'stamina')
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
            return Result.GetStaminaModelMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateStaminaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{staminaName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'recoverIntervalMinutes': (_j = request.getRecoverIntervalMinutes()) !== null && _j !== void 0 ? _j : null,
            'recoverValue': (_k = request.getRecoverValue()) !== null && _k !== void 0 ? _k : null,
            'initialCapacity': (_l = request.getInitialCapacity()) !== null && _l !== void 0 ? _l : null,
            'isOverflow': (_m = request.getIsOverflow()) !== null && _m !== void 0 ? _m : null,
            'maxCapacity': (_o = request.getMaxCapacity()) !== null && _o !== void 0 ? _o : null,
            'maxStaminaTableName': (_p = request.getMaxStaminaTableName()) !== null && _p !== void 0 ? _p : null,
            'recoverIntervalTableName': (_q = request.getRecoverIntervalTableName()) !== null && _q !== void 0 ? _q : null,
            'recoverValueTableName': (_r = request.getRecoverValueTableName()) !== null && _r !== void 0 ? _r : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateStaminaModelMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteStaminaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{staminaName}')
            .replace('{service}', 'stamina')
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
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStaminaModelMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeMaxStaminaTableMasters = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/maxStaminaTable')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'pageToken': String((_e = request.getPageToken()) !== null && _e !== void 0 ? _e : null),
            'limit': String((_f = request.getLimit()) !== null && _f !== void 0 ? _f : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeMaxStaminaTableMastersResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.createMaxStaminaTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/maxStaminaTable')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'experienceModelId': (_h = request.getExperienceModelId()) !== null && _h !== void 0 ? _h : null,
            'values': (_j = request.getValues()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateMaxStaminaTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getMaxStaminaTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{maxStaminaTableName}', String((_d = request.getMaxStaminaTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMaxStaminaTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetMaxStaminaTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateMaxStaminaTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{maxStaminaTableName}', String((_d = request.getMaxStaminaTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMaxStaminaTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'experienceModelId': (_j = request.getExperienceModelId()) !== null && _j !== void 0 ? _j : null,
            'values': (_k = request.getValues()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMaxStaminaTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteMaxStaminaTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/maxStaminaTable/{maxStaminaTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{maxStaminaTableName}', String((_d = request.getMaxStaminaTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getMaxStaminaTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteMaxStaminaTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeRecoverIntervalTableMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverIntervalTable')
            .replace('{service}', 'stamina')
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
            return Result.DescribeRecoverIntervalTableMastersResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.createRecoverIntervalTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverIntervalTable')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'experienceModelId': (_h = request.getExperienceModelId()) !== null && _h !== void 0 ? _h : null,
            'values': (_j = request.getValues()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateRecoverIntervalTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getRecoverIntervalTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverIntervalTableName}', String((_d = request.getRecoverIntervalTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverIntervalTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetRecoverIntervalTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateRecoverIntervalTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverIntervalTableName}', String((_d = request.getRecoverIntervalTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverIntervalTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'experienceModelId': (_j = request.getExperienceModelId()) !== null && _j !== void 0 ? _j : null,
            'values': (_k = request.getValues()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateRecoverIntervalTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteRecoverIntervalTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverIntervalTable/{recoverIntervalTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverIntervalTableName}', String((_d = request.getRecoverIntervalTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverIntervalTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteRecoverIntervalTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeRecoverValueTableMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverValueTable')
            .replace('{service}', 'stamina')
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
            return Result.DescribeRecoverValueTableMastersResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.createRecoverValueTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverValueTable')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'experienceModelId': (_h = request.getExperienceModelId()) !== null && _h !== void 0 ? _h : null,
            'values': (_j = request.getValues()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateRecoverValueTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getRecoverValueTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverValueTableName}', String((_d = request.getRecoverValueTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverValueTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetRecoverValueTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateRecoverValueTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverValueTableName}', String((_d = request.getRecoverValueTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverValueTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'experienceModelId': (_j = request.getExperienceModelId()) !== null && _j !== void 0 ? _j : null,
            'values': (_k = request.getValues()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateRecoverValueTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteRecoverValueTableMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/recoverValueTable/{recoverValueTableName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{recoverValueTableName}', String((_d = request.getRecoverValueTableName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRecoverValueTableName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteRecoverValueTableMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'stamina')
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
    Gs2StaminaRestClient.prototype.getCurrentStaminaMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'stamina')
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
            return Result.GetCurrentStaminaMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.preUpdateCurrentStaminaMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'stamina')
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
            return Result.PreUpdateCurrentStaminaMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateCurrentStaminaMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'stamina')
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
            return Result.UpdateCurrentStaminaMasterResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateCurrentStaminaMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'stamina')
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
            return Result.UpdateCurrentStaminaMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeStaminaModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model')
            .replace('{service}', 'stamina')
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
            return Result.DescribeStaminaModelsResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getStaminaModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/{staminaName}')
            .replace('{service}', 'stamina')
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
            return Result.GetStaminaModelResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeStaminas = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina')
            .replace('{service}', 'stamina')
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
            return Result.DescribeStaminasResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.describeStaminasByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina')
            .replace('{service}', 'stamina')
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
            return Result.DescribeStaminasByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getStamina = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetStaminaResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.getStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            return Result.GetStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.updateStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'maxValue': (_m = request.getMaxValue()) !== null && _m !== void 0 ? _m : null,
            'recoverIntervalMinutes': (_o = request.getRecoverIntervalMinutes()) !== null && _o !== void 0 ? _o : null,
            'recoverValue': (_p = request.getRecoverValue()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.UpdateStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.consumeStamina = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/consume')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'consumeValue': (_j = request.getConsumeValue()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ConsumeStaminaResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.consumeStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/consume')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'consumeValue': (_l = request.getConsumeValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ConsumeStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.applyStamina = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/apply')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.ApplyStaminaResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.applyStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/apply')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ApplyStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.recoverStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recover')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'recoverValue': (_l = request.getRecoverValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RecoverStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.raiseMaxValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/raise')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'raiseValue': (_l = request.getRaiseValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RaiseMaxValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.decreaseMaxValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/decrease')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'decreaseValue': (_j = request.getDecreaseValue()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseMaxValueResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.decreaseMaxValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/decrease')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'decreaseValue': (_l = request.getDecreaseValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseMaxValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setMaxValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'maxValue': (_l = request.getMaxValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetMaxValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverIntervalByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recoverInterval/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'recoverIntervalMinutes': (_l = request.getRecoverIntervalMinutes()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetRecoverIntervalByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recoverValue/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'recoverValue': (_l = request.getRecoverValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetRecoverValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setMaxValueByStatus = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'keyId': (_j = request.getKeyId()) !== null && _j !== void 0 ? _j : null,
            'signedStatusBody': (_k = request.getSignedStatusBody()) !== null && _k !== void 0 ? _k : null,
            'signedStatusSignature': (_l = request.getSignedStatusSignature()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetMaxValueByStatusResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverIntervalByStatus = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/recoverInterval/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'keyId': (_j = request.getKeyId()) !== null && _j !== void 0 ? _j : null,
            'signedStatusBody': (_k = request.getSignedStatusBody()) !== null && _k !== void 0 ? _k : null,
            'signedStatusSignature': (_l = request.getSignedStatusSignature()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetRecoverIntervalByStatusResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverValueByStatus = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/recoverValue/set')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'keyId': (_j = request.getKeyId()) !== null && _j !== void 0 ? _j : null,
            'signedStatusBody': (_k = request.getSignedStatusBody()) !== null && _k !== void 0 ? _k : null,
            'signedStatusSignature': (_l = request.getSignedStatusSignature()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetRecoverValueByStatusResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.deleteStaminaByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStaminaByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaValueResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{staminaName}', String((_f = request.getStaminaName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getStaminaName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'value': (_o = request.getValue()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaMaxValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/max/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaMaxValueResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaMaxValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/max/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{staminaName}', String((_f = request.getStaminaName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getStaminaName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'value': (_o = request.getValue()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaMaxValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverIntervalMinutes = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/recover/interval/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaRecoverIntervalMinutesResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverIntervalMinutesByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recover/interval/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{staminaName}', String((_f = request.getStaminaName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getStaminaName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'value': (_o = request.getValue()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaRecoverIntervalMinutesByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/recover/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaRecoverValueResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/recover/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{staminaName}', String((_f = request.getStaminaName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getStaminaName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'value': (_o = request.getValue()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaRecoverValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaOverflowValue = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stamina/{staminaName}/overflow/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{staminaName}', String((_d = request.getStaminaName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getStaminaName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaOverflowValueResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaOverflowValueByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stamina/{staminaName}/overflow/value/verify/{verifyType}')
            .replace('{service}', 'stamina')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{staminaName}', String((_f = request.getStaminaName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getStaminaName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'value': (_o = request.getValue()) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyStaminaOverflowValueByUserIdResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.recoverStaminaByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/recover')
            .replace('{service}', 'stamina')
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
            return Result.RecoverStaminaByStampSheetResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.raiseMaxValueByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/raise')
            .replace('{service}', 'stamina')
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
            return Result.RaiseMaxValueByStampSheetResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.decreaseMaxValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/decrease')
            .replace('{service}', 'stamina')
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
            return Result.DecreaseMaxValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setMaxValueByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/max/set')
            .replace('{service}', 'stamina')
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
            return Result.SetMaxValueByStampSheetResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverIntervalByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/recoverInterval/set')
            .replace('{service}', 'stamina')
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
            return Result.SetRecoverIntervalByStampSheetResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.setRecoverValueByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/recoverValue/set')
            .replace('{service}', 'stamina')
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
            return Result.SetRecoverValueByStampSheetResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.consumeStaminaByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/consume')
            .replace('{service}', 'stamina')
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
            return Result.ConsumeStaminaByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/value/verify')
            .replace('{service}', 'stamina')
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
            return Result.VerifyStaminaValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaMaxValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/max/verify')
            .replace('{service}', 'stamina')
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
            return Result.VerifyStaminaMaxValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverIntervalMinutesByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/recover/interval/verify')
            .replace('{service}', 'stamina')
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
            return Result.VerifyStaminaRecoverIntervalMinutesByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaRecoverValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/recover/value/verify')
            .replace('{service}', 'stamina')
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
            return Result.VerifyStaminaRecoverValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.prototype.verifyStaminaOverflowValueByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2StaminaRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamina/overflow/value/verify')
            .replace('{service}', 'stamina')
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
            return Result.VerifyStaminaOverflowValueByStampTaskResult.fromDict(data);
        });
    };
    Gs2StaminaRestClient.ENDPOINT_HOST = null;
    return Gs2StaminaRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2StaminaRestClient;
//# sourceMappingURL=rest.js.map