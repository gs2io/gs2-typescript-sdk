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
var Gs2GuildRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2GuildRestClient, _super);
    function Gs2GuildRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2GuildRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'guild')
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
            'changeNotification': (_h = (_g = request.getChangeNotification()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'joinNotification': (_k = (_j = request.getJoinNotification()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'leaveNotification': (_m = (_l = request.getLeaveNotification()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'changeMemberNotification': (_p = (_o = request.getChangeMemberNotification()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'changeMemberNotificationIgnoreChangeMetadata': (_q = request.getChangeMemberNotificationIgnoreChangeMetadata()) !== null && _q !== void 0 ? _q : null,
            'receiveRequestNotification': (_s = (_r = request.getReceiveRequestNotification()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'removeRequestNotification': (_u = (_t = request.getRemoveRequestNotification()) === null || _t === void 0 ? void 0 : _t.toDict()) !== null && _u !== void 0 ? _u : null,
            'createGuildScript': (_w = (_v = request.getCreateGuildScript()) === null || _v === void 0 ? void 0 : _v.toDict()) !== null && _w !== void 0 ? _w : null,
            'updateGuildScript': (_y = (_x = request.getUpdateGuildScript()) === null || _x === void 0 ? void 0 : _x.toDict()) !== null && _y !== void 0 ? _y : null,
            'joinGuildScript': (_0 = (_z = request.getJoinGuildScript()) === null || _z === void 0 ? void 0 : _z.toDict()) !== null && _0 !== void 0 ? _0 : null,
            'receiveJoinRequestScript': (_2 = (_1 = request.getReceiveJoinRequestScript()) === null || _1 === void 0 ? void 0 : _1.toDict()) !== null && _2 !== void 0 ? _2 : null,
            'leaveGuildScript': (_4 = (_3 = request.getLeaveGuildScript()) === null || _3 === void 0 ? void 0 : _3.toDict()) !== null && _4 !== void 0 ? _4 : null,
            'changeRoleScript': (_6 = (_5 = request.getChangeRoleScript()) === null || _5 === void 0 ? void 0 : _5.toDict()) !== null && _6 !== void 0 ? _6 : null,
            'deleteGuildScript': (_8 = (_7 = request.getDeleteGuildScript()) === null || _7 === void 0 ? void 0 : _7.toDict()) !== null && _8 !== void 0 ? _8 : null,
            'logSetting': (_10 = (_9 = request.getLogSetting()) === null || _9 === void 0 ? void 0 : _9.toDict()) !== null && _10 !== void 0 ? _10 : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'guild')
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
            'changeNotification': (_j = (_h = request.getChangeNotification()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'joinNotification': (_l = (_k = request.getJoinNotification()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'leaveNotification': (_o = (_m = request.getLeaveNotification()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'changeMemberNotification': (_q = (_p = request.getChangeMemberNotification()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'changeMemberNotificationIgnoreChangeMetadata': (_r = request.getChangeMemberNotificationIgnoreChangeMetadata()) !== null && _r !== void 0 ? _r : null,
            'receiveRequestNotification': (_t = (_s = request.getReceiveRequestNotification()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'removeRequestNotification': (_v = (_u = request.getRemoveRequestNotification()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
            'createGuildScript': (_x = (_w = request.getCreateGuildScript()) === null || _w === void 0 ? void 0 : _w.toDict()) !== null && _x !== void 0 ? _x : null,
            'updateGuildScript': (_z = (_y = request.getUpdateGuildScript()) === null || _y === void 0 ? void 0 : _y.toDict()) !== null && _z !== void 0 ? _z : null,
            'joinGuildScript': (_1 = (_0 = request.getJoinGuildScript()) === null || _0 === void 0 ? void 0 : _0.toDict()) !== null && _1 !== void 0 ? _1 : null,
            'receiveJoinRequestScript': (_3 = (_2 = request.getReceiveJoinRequestScript()) === null || _2 === void 0 ? void 0 : _2.toDict()) !== null && _3 !== void 0 ? _3 : null,
            'leaveGuildScript': (_5 = (_4 = request.getLeaveGuildScript()) === null || _4 === void 0 ? void 0 : _4.toDict()) !== null && _5 !== void 0 ? _5 : null,
            'changeRoleScript': (_7 = (_6 = request.getChangeRoleScript()) === null || _6 === void 0 ? void 0 : _6.toDict()) !== null && _7 !== void 0 ? _7 : null,
            'deleteGuildScript': (_9 = (_8 = request.getDeleteGuildScript()) === null || _8 === void 0 ? void 0 : _8.toDict()) !== null && _9 !== void 0 ? _9 : null,
            'logSetting': (_11 = (_10 = request.getLogSetting()) === null || _10 === void 0 ? void 0 : _10.toDict()) !== null && _11 !== void 0 ? _11 : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.describeGuildModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelMastersResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.createGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            'defaultMaximumMemberCount': (_h = request.getDefaultMaximumMemberCount()) !== null && _h !== void 0 ? _h : null,
            'maximumMemberCount': (_j = request.getMaximumMemberCount()) !== null && _j !== void 0 ? _j : null,
            'inactivityPeriodDays': (_k = request.getInactivityPeriodDays()) !== null && _k !== void 0 ? _k : null,
            'roles': (_m = (_l = request.getRoles()) === null || _l === void 0 ? void 0 : _l.map(function (item) { return item.toDict(); })) !== null && _m !== void 0 ? _m : null,
            'guildMasterRole': (_o = request.getGuildMasterRole()) !== null && _o !== void 0 ? _o : null,
            'guildMemberDefaultRole': (_p = request.getGuildMemberDefaultRole()) !== null && _p !== void 0 ? _p : null,
            'rejoinCoolTimeMinutes': (_q = request.getRejoinCoolTimeMinutes()) !== null && _q !== void 0 ? _q : null,
            'maxConcurrentJoinGuilds': (_r = request.getMaxConcurrentJoinGuilds()) !== null && _r !== void 0 ? _r : null,
            'maxConcurrentGuildMasterCount': (_s = request.getMaxConcurrentGuildMasterCount()) !== null && _s !== void 0 ? _s : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateGuildModelMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGuildModelMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'defaultMaximumMemberCount': (_j = request.getDefaultMaximumMemberCount()) !== null && _j !== void 0 ? _j : null,
            'maximumMemberCount': (_k = request.getMaximumMemberCount()) !== null && _k !== void 0 ? _k : null,
            'inactivityPeriodDays': (_l = request.getInactivityPeriodDays()) !== null && _l !== void 0 ? _l : null,
            'roles': (_o = (_m = request.getRoles()) === null || _m === void 0 ? void 0 : _m.map(function (item) { return item.toDict(); })) !== null && _o !== void 0 ? _o : null,
            'guildMasterRole': (_p = request.getGuildMasterRole()) !== null && _p !== void 0 ? _p : null,
            'guildMemberDefaultRole': (_q = request.getGuildMemberDefaultRole()) !== null && _q !== void 0 ? _q : null,
            'rejoinCoolTimeMinutes': (_r = request.getRejoinCoolTimeMinutes()) !== null && _r !== void 0 ? _r : null,
            'maxConcurrentJoinGuilds': (_s = request.getMaxConcurrentJoinGuilds()) !== null && _s !== void 0 ? _s : null,
            'maxConcurrentGuildMasterCount': (_t = request.getMaxConcurrentGuildMasterCount()) !== null && _t !== void 0 ? _t : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateGuildModelMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteGuildModelMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeGuildModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelsResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getGuildModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGuildModelResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.searchGuilds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'displayName': (_j = request.getDisplayName()) !== null && _j !== void 0 ? _j : null,
            'attributes1': (_k = request.getAttributes1()) !== null && _k !== void 0 ? _k : null,
            'attributes2': (_l = request.getAttributes2()) !== null && _l !== void 0 ? _l : null,
            'attributes3': (_m = request.getAttributes3()) !== null && _m !== void 0 ? _m : null,
            'attributes4': (_o = request.getAttributes4()) !== null && _o !== void 0 ? _o : null,
            'attributes5': (_p = request.getAttributes5()) !== null && _p !== void 0 ? _p : null,
            'joinPolicies': (_q = request.getJoinPolicies()) !== null && _q !== void 0 ? _q : null,
            'includeFullMembersGuild': (_r = request.getIncludeFullMembersGuild()) !== null && _r !== void 0 ? _r : null,
            'orderBy': (_s = request.getOrderBy()) !== null && _s !== void 0 ? _s : null,
            'pageToken': (_t = request.getPageToken()) !== null && _t !== void 0 ? _t : null,
            'limit': (_u = request.getLimit()) !== null && _u !== void 0 ? _u : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SearchGuildsResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.searchGuildsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
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
            'displayName': (_l = request.getDisplayName()) !== null && _l !== void 0 ? _l : null,
            'attributes1': (_m = request.getAttributes1()) !== null && _m !== void 0 ? _m : null,
            'attributes2': (_o = request.getAttributes2()) !== null && _o !== void 0 ? _o : null,
            'attributes3': (_p = request.getAttributes3()) !== null && _p !== void 0 ? _p : null,
            'attributes4': (_q = request.getAttributes4()) !== null && _q !== void 0 ? _q : null,
            'attributes5': (_r = request.getAttributes5()) !== null && _r !== void 0 ? _r : null,
            'joinPolicies': (_s = request.getJoinPolicies()) !== null && _s !== void 0 ? _s : null,
            'includeFullMembersGuild': (_t = request.getIncludeFullMembersGuild()) !== null && _t !== void 0 ? _t : null,
            'orderBy': (_u = request.getOrderBy()) !== null && _u !== void 0 ? _u : null,
            'pageToken': (_v = request.getPageToken()) !== null && _v !== void 0 ? _v : null,
            'limit': (_w = request.getLimit()) !== null && _w !== void 0 ? _w : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SearchGuildsByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.createGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'displayName': (_j = request.getDisplayName()) !== null && _j !== void 0 ? _j : null,
            'attribute1': (_k = request.getAttribute1()) !== null && _k !== void 0 ? _k : null,
            'attribute2': (_l = request.getAttribute2()) !== null && _l !== void 0 ? _l : null,
            'attribute3': (_m = request.getAttribute3()) !== null && _m !== void 0 ? _m : null,
            'attribute4': (_o = request.getAttribute4()) !== null && _o !== void 0 ? _o : null,
            'attribute5': (_p = request.getAttribute5()) !== null && _p !== void 0 ? _p : null,
            'metadata': (_q = request.getMetadata()) !== null && _q !== void 0 ? _q : null,
            'memberMetadata': (_r = request.getMemberMetadata()) !== null && _r !== void 0 ? _r : null,
            'joinPolicy': (_s = request.getJoinPolicy()) !== null && _s !== void 0 ? _s : null,
            'customRoles': (_u = (_t = request.getCustomRoles()) === null || _t === void 0 ? void 0 : _t.map(function (item) { return item.toDict(); })) !== null && _u !== void 0 ? _u : null,
            'guildMemberDefaultRole': (_v = request.getGuildMemberDefaultRole()) !== null && _v !== void 0 ? _v : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateGuildResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.createGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'displayName': (_l = request.getDisplayName()) !== null && _l !== void 0 ? _l : null,
            'attribute1': (_m = request.getAttribute1()) !== null && _m !== void 0 ? _m : null,
            'attribute2': (_o = request.getAttribute2()) !== null && _o !== void 0 ? _o : null,
            'attribute3': (_p = request.getAttribute3()) !== null && _p !== void 0 ? _p : null,
            'attribute4': (_q = request.getAttribute4()) !== null && _q !== void 0 ? _q : null,
            'attribute5': (_r = request.getAttribute5()) !== null && _r !== void 0 ? _r : null,
            'metadata': (_s = request.getMetadata()) !== null && _s !== void 0 ? _s : null,
            'memberMetadata': (_t = request.getMemberMetadata()) !== null && _t !== void 0 ? _t : null,
            'joinPolicy': (_u = request.getJoinPolicy()) !== null && _u !== void 0 ? _u : null,
            'customRoles': (_w = (_v = request.getCustomRoles()) === null || _v === void 0 ? void 0 : _v.map(function (item) { return item.toDict(); })) !== null && _w !== void 0 ? _w : null,
            'guildMemberDefaultRole': (_x = request.getGuildMemberDefaultRole()) !== null && _x !== void 0 ? _x : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateGuildByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetGuildResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{guildName}', String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getGuildName()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGuildByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'displayName': (_j = request.getDisplayName()) !== null && _j !== void 0 ? _j : null,
            'attribute1': (_k = request.getAttribute1()) !== null && _k !== void 0 ? _k : null,
            'attribute2': (_l = request.getAttribute2()) !== null && _l !== void 0 ? _l : null,
            'attribute3': (_m = request.getAttribute3()) !== null && _m !== void 0 ? _m : null,
            'attribute4': (_o = request.getAttribute4()) !== null && _o !== void 0 ? _o : null,
            'attribute5': (_p = request.getAttribute5()) !== null && _p !== void 0 ? _p : null,
            'metadata': (_q = request.getMetadata()) !== null && _q !== void 0 ? _q : null,
            'joinPolicy': (_r = request.getJoinPolicy()) !== null && _r !== void 0 ? _r : null,
            'customRoles': (_t = (_s = request.getCustomRoles()) === null || _s === void 0 ? void 0 : _s.map(function (item) { return item.toDict(); })) !== null && _t !== void 0 ? _t : null,
            'guildMemberDefaultRole': (_u = request.getGuildMemberDefaultRole()) !== null && _u !== void 0 ? _u : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateGuildResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateGuildByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildName}', String((_d = request.getGuildName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'displayName': (_k = request.getDisplayName()) !== null && _k !== void 0 ? _k : null,
            'attribute1': (_l = request.getAttribute1()) !== null && _l !== void 0 ? _l : null,
            'attribute2': (_m = request.getAttribute2()) !== null && _m !== void 0 ? _m : null,
            'attribute3': (_o = request.getAttribute3()) !== null && _o !== void 0 ? _o : null,
            'attribute4': (_p = request.getAttribute4()) !== null && _p !== void 0 ? _p : null,
            'attribute5': (_q = request.getAttribute5()) !== null && _q !== void 0 ? _q : null,
            'metadata': (_r = request.getMetadata()) !== null && _r !== void 0 ? _r : null,
            'joinPolicy': (_s = request.getJoinPolicy()) !== null && _s !== void 0 ? _s : null,
            'customRoles': (_u = (_t = request.getCustomRoles()) === null || _t === void 0 ? void 0 : _t.map(function (item) { return item.toDict(); })) !== null && _u !== void 0 ? _u : null,
            'guildMemberDefaultRole': (_v = request.getGuildMemberDefaultRole()) !== null && _v !== void 0 ? _v : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateGuildByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteMemberResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteMemberByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{targetUserId}', String((_h = request.getTargetUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getTargetUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.DeleteMemberByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateMemberRole = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            'roleName': (_l = request.getRoleName()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMemberRoleResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateMemberRoleByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{targetUserId}', String((_h = request.getTargetUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getTargetUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
            'roleName': (_m = request.getRoleName()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMemberRoleByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.batchUpdateMemberRole = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/batch/member/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'members': (_k = (_j = request.getMembers()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.BatchUpdateMemberRoleResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.batchUpdateMemberRoleByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/batch/member/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'members': (_l = (_k = request.getMembers()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.BatchUpdateMemberRoleByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DeleteGuildResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteGuildByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeleteGuildByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.increaseMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/increase')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'value': (_k = request.getValue()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DecreaseMaximumCurrentMaximumMemberCountResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'value': (_k = request.getValue()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'verifyType': (_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : null,
            'value': (_k = request.getValue()) !== null && _k !== void 0 ? _k : null,
            'multiplyValueSpecifyingQuantity': (_l = request.getMultiplyValueSpecifyingQuantity()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCurrentMaximumMemberCountResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'verifyType': (_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : null,
            'value': (_l = request.getValue()) !== null && _l !== void 0 ? _l : null,
            'multiplyValueSpecifyingQuantity': (_m = request.getMultiplyValueSpecifyingQuantity()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyCurrentMaximumMemberCountByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/me/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'verifyType': (_l = request.getVerifyType()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyIncludeMemberResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMemberByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{userId}/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'verifyType': (_o = request.getVerifyType()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyIncludeMemberByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.setMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildName}', String((_d = request.getGuildName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'value': (_k = request.getValue()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SetMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.assume = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.AssumeResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.assumeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{guildName}', String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getGuildName()) !== null && _j !== void 0 ? _j : 'null'));
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
            return Result.AssumeByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.increaseMaximumCurrentMaximumMemberCountByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/guild/currentMaximumMemberCount/add')
            .replace('{service}', 'guild')
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
            return Result.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCountByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/guild/currentMaximumMemberCount/sub')
            .replace('{service}', 'guild')
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
            return Result.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.setMaximumCurrentMaximumMemberCountByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/guild/currentMaximumMemberCount/set')
            .replace('{service}', 'guild')
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
            return Result.SetMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCountByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/guild/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyCurrentMaximumMemberCountByStampTaskResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMemberByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/guild/member/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyIncludeMemberByStampTaskResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeJoinedGuilds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeJoinedGuildsResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeJoinedGuildsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String((_h = request.getGuildModelName()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeJoinedGuildsByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getJoinedGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetJoinedGuildResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getJoinedGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{guildName}', String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getGuildName()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetJoinedGuildByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateMemberMetadata = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/guild/{guildName}/member/me/metadata')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'metadata': (_l = request.getMetadata()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMemberMetadataResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateMemberMetadataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/guild/{guildName}/member/{userId}/metadata')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
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
            'metadata': (_o = request.getMetadata()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateMemberMetadataByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.withdrawal = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.WithdrawalResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.withdrawalByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{guildName}', String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getGuildName()) !== null && _j !== void 0 ? _j : 'null'));
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
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.WithdrawalByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getLastGuildMasterActivity = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetLastGuildMasterActivityResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getLastGuildMasterActivityByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLastGuildMasterActivityByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.promoteSeniorMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.PromoteSeniorMemberResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.promoteSeniorMemberByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PromoteSeniorMemberByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.getCurrentGuildMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.GetCurrentGuildMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.preUpdateCurrentGuildMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.PreUpdateCurrentGuildMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateCurrentGuildMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.updateCurrentGuildMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeReceiveRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeReceiveRequestsResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeReceiveRequestsByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeReceiveRequestsByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getReceiveRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetReceiveRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getReceiveRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{fromUserId}', String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getFromUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetReceiveRequestByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.acceptRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AcceptRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.acceptRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{fromUserId}', String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getFromUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        var body = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AcceptRequestByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.rejectRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.RejectRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.rejectRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{fromUserId}', String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getFromUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.RejectRequestByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeSendRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeSendRequestsResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeSendRequestsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'pageToken': String((_k = request.getPageToken()) !== null && _k !== void 0 ? _k : null),
            'limit': String((_l = request.getLimit()) !== null && _l !== void 0 ? _l : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeSendRequestsByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getSendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetGuildName}', String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetSendRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getSendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{targetGuildName}', String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getTargetGuildName()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetSendRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.sendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetGuildName}', String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'metadata': (_l = request.getMetadata()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SendRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.sendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{targetGuildName}', String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getTargetGuildName()) !== null && _j !== void 0 ? _j : 'null'));
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
            'metadata': (_o = request.getMetadata()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SendRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetGuildName}', String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null'));
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteRequestResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildModelName}', String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{targetGuildName}', String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getTargetGuildName()) !== null && _j !== void 0 ? _j : 'null'));
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
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeIgnoreUsers = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeIgnoreUsersResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.describeIgnoreUsersByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeIgnoreUsersByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.GetIgnoreUserResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.getIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{userId}', String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getUserId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetIgnoreUserByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.addIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AddIgnoreUserResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.addIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AddIgnoreUserByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        var params = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteIgnoreUserResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.prototype.deleteIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GuildRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{guildModelName}', String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guildName}', String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null'))
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
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteIgnoreUserByGuildNameResult.fromDict(data);
        });
    };
    Gs2GuildRestClient.ENDPOINT_HOST = null;
    return Gs2GuildRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2GuildRestClient;
//# sourceMappingURL=rest.js.map