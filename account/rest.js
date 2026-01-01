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
var Gs2AccountRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2AccountRestClient, _super);
    function Gs2AccountRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2AccountRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'account')
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
            'changePasswordIfTakeOver': (_g = request.getChangePasswordIfTakeOver()) !== null && _g !== void 0 ? _g : null,
            'differentUserIdForLoginAndDataRetention': (_h = request.getDifferentUserIdForLoginAndDataRetention()) !== null && _h !== void 0 ? _h : null,
            'createAccountScript': (_k = (_j = request.getCreateAccountScript()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'authenticationScript': (_m = (_l = request.getAuthenticationScript()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'createTakeOverScript': (_p = (_o = request.getCreateTakeOverScript()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'doTakeOverScript': (_r = (_q = request.getDoTakeOverScript()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'banScript': (_t = (_s = request.getBanScript()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'unBanScript': (_v = (_u = request.getUnBanScript()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
            'logSetting': (_x = (_w = request.getLogSetting()) === null || _w === void 0 ? void 0 : _w.toDict()) !== null && _x !== void 0 ? _x : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'account')
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
            'changePasswordIfTakeOver': (_h = request.getChangePasswordIfTakeOver()) !== null && _h !== void 0 ? _h : null,
            'createAccountScript': (_k = (_j = request.getCreateAccountScript()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'authenticationScript': (_m = (_l = request.getAuthenticationScript()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'createTakeOverScript': (_p = (_o = request.getCreateTakeOverScript()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'doTakeOverScript': (_r = (_q = request.getDoTakeOverScript()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'banScript': (_t = (_s = request.getBanScript()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'unBanScript': (_v = (_u = request.getUnBanScript()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
            'logSetting': (_x = (_w = request.getLogSetting()) === null || _w === void 0 ? void 0 : _w.toDict()) !== null && _x !== void 0 ? _x : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.describeAccounts = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account')
            .replace('{service}', 'account')
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
            return Result.DescribeAccountsResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createAccount = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account')
            .replace('{service}', 'account')
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
            return Result.CreateAccountResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateTimeOffset = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/time_offset')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'timeOffset': (_j = request.getTimeOffset()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateTimeOffsetResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateBanned = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/banned')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'banned': (_j = request.getBanned()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateBannedResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.addBan = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/ban')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'banStatus': (_k = (_j = request.getBanStatus()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.AddBanResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.removeBan = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/ban/{banStatusName}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{banStatusName}', String((_f = request.getBanStatusName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getBanStatusName()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.RemoveBanResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getAccount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
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
            'includeLastAuthenticatedAt': String((_h = request.getIncludeLastAuthenticatedAt()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetAccountResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteAccount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteAccountResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.authentication = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'keyId': (_j = request.getKeyId()) !== null && _j !== void 0 ? _j : null,
            'password': (_k = request.getPassword()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AuthenticationResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describeTakeOvers = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover')
            .replace('{service}', 'account')
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
            return Result.DescribeTakeOversResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describeTakeOversByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover')
            .replace('{service}', 'account')
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
            return Result.DescribeTakeOversByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createTakeOver = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'type': (_g = request.getType()) !== null && _g !== void 0 ? _g : null,
            'userIdentifier': (_h = request.getUserIdentifier()) !== null && _h !== void 0 ? _h : null,
            'password': (_j = request.getPassword()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateTakeOverResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createTakeOverByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'type': (_j = request.getType()) !== null && _j !== void 0 ? _j : null,
            'userIdentifier': (_k = request.getUserIdentifier()) !== null && _k !== void 0 ? _k : null,
            'password': (_l = request.getPassword()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateTakeOverByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createTakeOverOpenIdConnect = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover/openIdConnect')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'type': (_g = request.getType()) !== null && _g !== void 0 ? _g : null,
            'idToken': (_h = request.getIdToken()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateTakeOverOpenIdConnectResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createTakeOverOpenIdConnectAndByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover/openIdConnect')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'type': (_j = request.getType()) !== null && _j !== void 0 ? _j : null,
            'idToken': (_k = request.getIdToken()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateTakeOverOpenIdConnectAndByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getTakeOver = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetTakeOverResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getTakeOverByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetTakeOverByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateTakeOver = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
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
            'oldPassword': (_j = request.getOldPassword()) !== null && _j !== void 0 ? _j : null,
            'password': (_k = request.getPassword()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateTakeOverResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateTakeOverByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'));
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
            'oldPassword': (_l = request.getOldPassword()) !== null && _l !== void 0 ? _l : null,
            'password': (_m = request.getPassword()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateTakeOverByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteTakeOver = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DeleteTakeOverResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteTakeOverByUserIdentifier = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/takeover/type/{type}/userIdentifier/{userIdentifier}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userIdentifier}', String((_f = request.getUserIdentifier()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserIdentifier()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteTakeOverByUserIdentifierResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteTakeOverByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/takeover/type/{type}/takeover')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeleteTakeOverByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.doTakeOver = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/takeover/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'userIdentifier': (_g = request.getUserIdentifier()) !== null && _g !== void 0 ? _g : null,
            'password': (_h = request.getPassword()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DoTakeOverResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.doTakeOverOpenIdConnect = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/takeover/type/{type}/openIdConnect')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'idToken': (_g = request.getIdToken()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DoTakeOverOpenIdConnectResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getAuthorizationUrl = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/type/{type}/authorization/url')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetAuthorizationUrlResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describePlatformIds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/platformId')
            .replace('{service}', 'account')
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
            return Result.DescribePlatformIdsResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describePlatformIdsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/platformId')
            .replace('{service}', 'account')
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
            return Result.DescribePlatformIdsByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createPlatformId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/platformId')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'type': (_g = request.getType()) !== null && _g !== void 0 ? _g : null,
            'userIdentifier': (_h = request.getUserIdentifier()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreatePlatformIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createPlatformIdByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/platformId')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'type': (_j = request.getType()) !== null && _j !== void 0 ? _j : null,
            'userIdentifier': (_k = request.getUserIdentifier()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreatePlatformIdByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getPlatformId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/platformId/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetPlatformIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getPlatformIdByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/platformId/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetPlatformIdByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.findPlatformId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/platformId/type/{type}/userIdentifier/{userIdentifier}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userIdentifier}', String((_f = request.getUserIdentifier()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserIdentifier()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.FindPlatformIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.findPlatformIdByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/platformId/type/{type}/userIdentifier/{userIdentifier}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{userIdentifier}', String((_h = request.getUserIdentifier()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getUserIdentifier()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'dontResolveDataOwner': String((_m = request.getDontResolveDataOwner()) !== null && _m !== void 0 ? _m : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.FindPlatformIdByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deletePlatformId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/me/platformId/type/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
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
            'userIdentifier': String((_j = request.getUserIdentifier()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeletePlatformIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deletePlatformIdByUserIdentifier = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/platformId/type/{type}/userIdentifier/{userIdentifier}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userIdentifier}', String((_f = request.getUserIdentifier()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserIdentifier()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeletePlatformIdByUserIdentifierResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deletePlatformIdByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/platformId/type/{type}/platformId')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{type}', String((_f = request.getType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getType()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeletePlatformIdByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getDataOwnerByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/dataOwner')
            .replace('{service}', 'account')
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
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetDataOwnerByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateDataOwnerByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/dataOwner')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'dataOwnerName': (_j = request.getDataOwnerName()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateDataOwnerByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteDataOwnerByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/account/{userId}/dataOwner')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteDataOwnerByUserIdResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describeTakeOverTypeModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model')
            .replace('{service}', 'account')
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
            return Result.DescribeTakeOverTypeModelsResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getTakeOverTypeModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetTakeOverTypeModelResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.describeTakeOverTypeModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'account')
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
            return Result.DescribeTakeOverTypeModelMastersResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.createTakeOverTypeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'type': (_e = request.getType()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'openIdConnectSetting': (_j = (_h = request.getOpenIdConnectSetting()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateTakeOverTypeModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.getTakeOverTypeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetTakeOverTypeModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateTakeOverTypeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'openIdConnectSetting': (_k = (_j = request.getOpenIdConnectSetting()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateTakeOverTypeModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.deleteTakeOverTypeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{type}')
            .replace('{service}', 'account')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{type}', String((_d = request.getType()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getType()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteTakeOverTypeModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'account')
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
    Gs2AccountRestClient.prototype.getCurrentModelMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'account')
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
            return Result.GetCurrentModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.preUpdateCurrentModelMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'account')
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
            return Result.PreUpdateCurrentModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateCurrentModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'account')
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
            return Result.UpdateCurrentModelMasterResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.prototype.updateCurrentModelMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2AccountRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'account')
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
            return Result.UpdateCurrentModelMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2AccountRestClient.ENDPOINT_HOST = null;
    return Gs2AccountRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2AccountRestClient;
//# sourceMappingURL=rest.js.map