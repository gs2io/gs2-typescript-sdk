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
var Gs2GuildRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2GuildRestClient, _super);
    function Gs2GuildRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2GuildRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'changeNotification': (_e = (_d = request.getChangeNotification()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
            'joinNotification': (_g = (_f = request.getJoinNotification()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'leaveNotification': (_j = (_h = request.getLeaveNotification()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'changeMemberNotification': (_l = (_k = request.getChangeMemberNotification()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'receiveRequestNotification': (_o = (_m = request.getReceiveRequestNotification()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'removeRequestNotification': (_q = (_p = request.getRemoveRequestNotification()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'createGuildScript': (_s = (_r = request.getCreateGuildScript()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'updateGuildScript': (_u = (_t = request.getUpdateGuildScript()) === null || _t === void 0 ? void 0 : _t.toDict()) !== null && _u !== void 0 ? _u : null,
            'joinGuildScript': (_w = (_v = request.getJoinGuildScript()) === null || _v === void 0 ? void 0 : _v.toDict()) !== null && _w !== void 0 ? _w : null,
            'leaveGuildScript': (_y = (_x = request.getLeaveGuildScript()) === null || _x === void 0 ? void 0 : _x.toDict()) !== null && _y !== void 0 ? _y : null,
            'changeRoleScript': (_0 = (_z = request.getChangeRoleScript()) === null || _z === void 0 ? void 0 : _z.toDict()) !== null && _0 !== void 0 ? _0 : null,
            'logSetting': (_2 = (_1 = request.getLogSetting()) === null || _1 === void 0 ? void 0 : _1.toDict()) !== null && _2 !== void 0 ? _2 : null,
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
    Gs2GuildRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'changeNotification': (_f = (_e = request.getChangeNotification()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'joinNotification': (_h = (_g = request.getJoinNotification()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'leaveNotification': (_k = (_j = request.getLeaveNotification()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'changeMemberNotification': (_m = (_l = request.getChangeMemberNotification()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'receiveRequestNotification': (_p = (_o = request.getReceiveRequestNotification()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'removeRequestNotification': (_r = (_q = request.getRemoveRequestNotification()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'createGuildScript': (_t = (_s = request.getCreateGuildScript()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'updateGuildScript': (_v = (_u = request.getUpdateGuildScript()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
            'joinGuildScript': (_x = (_w = request.getJoinGuildScript()) === null || _w === void 0 ? void 0 : _w.toDict()) !== null && _x !== void 0 ? _x : null,
            'leaveGuildScript': (_z = (_y = request.getLeaveGuildScript()) === null || _y === void 0 ? void 0 : _y.toDict()) !== null && _z !== void 0 ? _z : null,
            'changeRoleScript': (_1 = (_0 = request.getChangeRoleScript()) === null || _0 === void 0 ? void 0 : _0.toDict()) !== null && _1 !== void 0 ? _1 : null,
            'logSetting': (_3 = (_2 = request.getLogSetting()) === null || _2 === void 0 ? void 0 : _2.toDict()) !== null && _3 !== void 0 ? _3 : null,
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
    Gs2GuildRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/dump/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/clean/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.describeGuildModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.createGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model')
            .replace('{service}', 'guild')
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
            'defaultMaximumMemberCount': (_g = request.getDefaultMaximumMemberCount()) !== null && _g !== void 0 ? _g : null,
            'maximumMemberCount': (_h = request.getMaximumMemberCount()) !== null && _h !== void 0 ? _h : null,
            'inactivityPeriodDays': (_j = request.getInactivityPeriodDays()) !== null && _j !== void 0 ? _j : null,
            'roles': (_l = (_k = request.getRoles()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
            'guildMasterRole': (_m = request.getGuildMasterRole()) !== null && _m !== void 0 ? _m : null,
            'guildMemberDefaultRole': (_o = request.getGuildMemberDefaultRole()) !== null && _o !== void 0 ? _o : null,
            'rejoinCoolTimeMinutes': (_p = request.getRejoinCoolTimeMinutes()) !== null && _p !== void 0 ? _p : null,
            'maxConcurrentJoinGuilds': (_q = request.getMaxConcurrentJoinGuilds()) !== null && _q !== void 0 ? _q : null,
            'maxConcurrentGuildMasterCount': (_r = request.getMaxConcurrentGuildMasterCount()) !== null && _r !== void 0 ? _r : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateGuildModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.getGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetGuildModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.updateGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateGuildModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.deleteGuildModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DeleteGuildModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeGuildModels = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model')
            .replace('{service}', 'guild')
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
            return Result.DescribeGuildModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getGuildModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/model/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetGuildModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.searchGuilds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'displayName': (_h = request.getDisplayName()) !== null && _h !== void 0 ? _h : null,
            'attributes1': (_j = request.getAttributes1()) !== null && _j !== void 0 ? _j : null,
            'attributes2': (_k = request.getAttributes2()) !== null && _k !== void 0 ? _k : null,
            'attributes3': (_l = request.getAttributes3()) !== null && _l !== void 0 ? _l : null,
            'attributes4': (_m = request.getAttributes4()) !== null && _m !== void 0 ? _m : null,
            'attributes5': (_o = request.getAttributes5()) !== null && _o !== void 0 ? _o : null,
            'joinPolicies': (_p = request.getJoinPolicies()) !== null && _p !== void 0 ? _p : null,
            'includeFullMembersGuild': (_q = request.getIncludeFullMembersGuild()) !== null && _q !== void 0 ? _q : null,
            'orderBy': (_r = request.getOrderBy()) !== null && _r !== void 0 ? _r : null,
            'pageToken': (_s = request.getPageToken()) !== null && _s !== void 0 ? _s : null,
            'limit': (_t = request.getLimit()) !== null && _t !== void 0 ? _t : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SearchGuildsResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.searchGuildsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/search')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
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
            'displayName': (_k = request.getDisplayName()) !== null && _k !== void 0 ? _k : null,
            'attributes1': (_l = request.getAttributes1()) !== null && _l !== void 0 ? _l : null,
            'attributes2': (_m = request.getAttributes2()) !== null && _m !== void 0 ? _m : null,
            'attributes3': (_o = request.getAttributes3()) !== null && _o !== void 0 ? _o : null,
            'attributes4': (_p = request.getAttributes4()) !== null && _p !== void 0 ? _p : null,
            'attributes5': (_q = request.getAttributes5()) !== null && _q !== void 0 ? _q : null,
            'joinPolicies': (_r = request.getJoinPolicies()) !== null && _r !== void 0 ? _r : null,
            'includeFullMembersGuild': (_s = request.getIncludeFullMembersGuild()) !== null && _s !== void 0 ? _s : null,
            'orderBy': (_t = request.getOrderBy()) !== null && _t !== void 0 ? _t : null,
            'pageToken': (_u = request.getPageToken()) !== null && _u !== void 0 ? _u : null,
            'limit': (_v = request.getLimit()) !== null && _v !== void 0 ? _v : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SearchGuildsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.createGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'displayName': (_h = request.getDisplayName()) !== null && _h !== void 0 ? _h : null,
            'attribute1': (_j = request.getAttribute1()) !== null && _j !== void 0 ? _j : null,
            'attribute2': (_k = request.getAttribute2()) !== null && _k !== void 0 ? _k : null,
            'attribute3': (_l = request.getAttribute3()) !== null && _l !== void 0 ? _l : null,
            'attribute4': (_m = request.getAttribute4()) !== null && _m !== void 0 ? _m : null,
            'attribute5': (_o = request.getAttribute5()) !== null && _o !== void 0 ? _o : null,
            'joinPolicy': (_p = request.getJoinPolicy()) !== null && _p !== void 0 ? _p : null,
            'customRoles': (_r = (_q = request.getCustomRoles()) === null || _q === void 0 ? void 0 : _q.map(function (item) { return item.toDict(); })) !== null && _r !== void 0 ? _r : null,
            'guildMemberDefaultRole': (_s = request.getGuildMemberDefaultRole()) !== null && _s !== void 0 ? _s : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateGuildResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.createGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'));
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
            'displayName': (_k = request.getDisplayName()) !== null && _k !== void 0 ? _k : null,
            'attribute1': (_l = request.getAttribute1()) !== null && _l !== void 0 ? _l : null,
            'attribute2': (_m = request.getAttribute2()) !== null && _m !== void 0 ? _m : null,
            'attribute3': (_o = request.getAttribute3()) !== null && _o !== void 0 ? _o : null,
            'attribute4': (_p = request.getAttribute4()) !== null && _p !== void 0 ? _p : null,
            'attribute5': (_q = request.getAttribute5()) !== null && _q !== void 0 ? _q : null,
            'joinPolicy': (_r = request.getJoinPolicy()) !== null && _r !== void 0 ? _r : null,
            'customRoles': (_t = (_s = request.getCustomRoles()) === null || _s === void 0 ? void 0 : _s.map(function (item) { return item.toDict(); })) !== null && _t !== void 0 ? _t : null,
            'guildMemberDefaultRole': (_u = request.getGuildMemberDefaultRole()) !== null && _u !== void 0 ? _u : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateGuildByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.getGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetGuildResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{guildName}', String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetGuildByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.updateGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'displayName': (_h = request.getDisplayName()) !== null && _h !== void 0 ? _h : null,
            'attribute1': (_j = request.getAttribute1()) !== null && _j !== void 0 ? _j : null,
            'attribute2': (_k = request.getAttribute2()) !== null && _k !== void 0 ? _k : null,
            'attribute3': (_l = request.getAttribute3()) !== null && _l !== void 0 ? _l : null,
            'attribute4': (_m = request.getAttribute4()) !== null && _m !== void 0 ? _m : null,
            'attribute5': (_o = request.getAttribute5()) !== null && _o !== void 0 ? _o : null,
            'joinPolicy': (_p = request.getJoinPolicy()) !== null && _p !== void 0 ? _p : null,
            'customRoles': (_r = (_q = request.getCustomRoles()) === null || _q === void 0 ? void 0 : _q.map(function (item) { return item.toDict(); })) !== null && _r !== void 0 ? _r : null,
            'guildMemberDefaultRole': (_s = request.getGuildMemberDefaultRole()) !== null && _s !== void 0 ? _s : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateGuildResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.updateGuildByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildName}', String((_c = request.getGuildName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
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
            'joinPolicy': (_q = request.getJoinPolicy()) !== null && _q !== void 0 ? _q : null,
            'customRoles': (_s = (_r = request.getCustomRoles()) === null || _r === void 0 ? void 0 : _r.map(function (item) { return item.toDict(); })) !== null && _s !== void 0 ? _s : null,
            'guildMemberDefaultRole': (_t = request.getGuildMemberDefaultRole()) !== null && _t !== void 0 ? _t : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateGuildByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.deleteMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{targetUserId}', String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteMemberResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.deleteMemberByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{targetUserId}', String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getTargetUserId()) !== null && _h !== void 0 ? _h : 'null'));
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DeleteMemberByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.updateMemberRole = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{targetUserId}', String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
            'roleName': (_k = request.getRoleName()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateMemberRoleResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.updateMemberRoleByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{targetUserId}/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{targetUserId}', String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getTargetUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'roleName': (_l = request.getRoleName()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateMemberRoleByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.batchUpdateMemberRole = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/batch/member/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'members': (_j = (_h = request.getMembers()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.BatchUpdateMemberRoleResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.batchUpdateMemberRoleByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/batch/member/role')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'members': (_k = (_j = request.getMembers()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.BatchUpdateMemberRoleByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.deleteGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DeleteGuildResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.deleteGuildByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.DeleteGuildByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.increaseMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/increase')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'value': (_j = request.getValue()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'value': (_h = request.getValue()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DecreaseMaximumCurrentMaximumMemberCountResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/decrease')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'value': (_j = request.getValue()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            'verifyType': (_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : null,
            'value': (_j = request.getValue()) !== null && _j !== void 0 ? _j : null,
            'multiplyValueSpecifyingQuantity': (_k = request.getMultiplyValueSpecifyingQuantity()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyCurrentMaximumMemberCountResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
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
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/me/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            'verifyType': (_k = request.getVerifyType()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyIncludeMemberResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMemberByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/member/{userId}/verify')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
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
            'verifyType': (_m = request.getVerifyType()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyIncludeMemberByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.setMaximumCurrentMaximumMemberCountByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/currentMaximumMemberCount')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildName}', String((_c = request.getGuildName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_g = request.getDuplicationAvoider()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'value': (_j = request.getValue()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SetMaximumCurrentMaximumMemberCountByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.assume = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.AssumeResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.assumeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/guild/{guildModelName}/{guildName}/assume')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{guildName}', String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AssumeByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.increaseMaximumCurrentMaximumMemberCountByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/add')
            .replace('{service}', 'guild')
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
            return Result.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.decreaseMaximumCurrentMaximumMemberCountByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/sub')
            .replace('{service}', 'guild')
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
            return Result.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.setMaximumCurrentMaximumMemberCountByStampSheet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/set')
            .replace('{service}', 'guild')
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
            return Result.SetMaximumCurrentMaximumMemberCountByStampSheetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyCurrentMaximumMemberCountByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/guild/currentMaximumMemberCount/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyCurrentMaximumMemberCountByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.verifyIncludeMemberByStampTask = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stamp/guild/member/verify')
            .replace('{service}', 'guild')
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
            return Result.VerifyIncludeMemberByStampTaskResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.describeJoinedGuilds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeJoinedGuildsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeJoinedGuildsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined')
            .replace('{service}', 'guild')
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
            'guildModelName': String((_g = request.getGuildModelName()) !== null && _g !== void 0 ? _g : null),
            'pageToken': String((_h = request.getPageToken()) !== null && _h !== void 0 ? _h : null),
            'limit': String((_j = request.getLimit()) !== null && _j !== void 0 ? _j : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeJoinedGuildsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getJoinedGuild = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetJoinedGuildResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getJoinedGuildByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{guildName}', String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetJoinedGuildByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.withdrawal = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.WithdrawalResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.withdrawalByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/joined/{guildModelName}/{guildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{guildName}', String((_g = request.getGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.WithdrawalByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getLastGuildMasterActivity = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetLastGuildMasterActivityResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getLastGuildMasterActivityByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/activity/guildMaster/last')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetLastGuildMasterActivityByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.promoteSeniorMember = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.PromoteSeniorMemberResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.promoteSeniorMemberByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/promote')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.PromoteSeniorMemberByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'guild')
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
    Gs2GuildRestClient.prototype.getCurrentGuildMaster = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.GetCurrentGuildMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.updateCurrentGuildMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.updateCurrentGuildMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'guild')
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
            return Result.UpdateCurrentGuildMasterFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.describeReceiveRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeReceiveRequestsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeReceiveRequestsByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.DescribeReceiveRequestsByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getReceiveRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{fromUserId}', String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetReceiveRequestResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getReceiveRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{fromUserId}', String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetReceiveRequestByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.acceptRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{fromUserId}', String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcceptRequestResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.acceptRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{fromUserId}', String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null'));
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AcceptRequestByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.rejectRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{fromUserId}', String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.RejectRequestResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.rejectRequestByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/inbox/{fromUserId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{fromUserId}', String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getFromUserId()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.RejectRequestByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeSendRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeSendRequestsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeSendRequestsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.DescribeSendRequestsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getSendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{targetGuildName}', String((_e = request.getTargetGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetSendRequestResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getSendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{targetGuildName}', String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetSendRequestByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.sendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{targetGuildName}', String((_e = request.getTargetGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SendRequestResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.sendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{targetGuildName}', String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SendRequestByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.deleteRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{targetGuildName}', String((_e = request.getTargetGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getTargetGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteRequestResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.deleteRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/sendBox/guild/{guildModelName}/{targetGuildName}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildModelName}', String((_e = request.getGuildModelName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildModelName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{targetGuildName}', String((_g = request.getTargetGuildName()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getTargetGuildName()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.DeleteRequestByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeIgnoreUsers = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.DescribeIgnoreUsersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.describeIgnoreUsersByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.DescribeIgnoreUsersByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
            return Result.GetIgnoreUserResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.getIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
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
            return Result.GetIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.addIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AddIgnoreUserResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.addIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
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
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AddIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2GuildRestClient.prototype.deleteIgnoreUser = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/me/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
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
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteIgnoreUserResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2GuildRestClient.prototype.deleteIgnoreUserByGuildName = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/guild/{guildModelName}/{guildName}/ignore/user/{userId}')
            .replace('{service}', 'guild')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{guildModelName}', String((_c = request.getGuildModelName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGuildModelName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{guildName}', String((_e = request.getGuildName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGuildName()) !== null && _f !== void 0 ? _f : 'null'))
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
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteIgnoreUserByGuildNameResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    return Gs2GuildRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2GuildRestClient;
//# sourceMappingURL=rest.js.map