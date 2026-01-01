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
var Gs2FriendRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2FriendRestClient, _super);
    function Gs2FriendRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2FriendRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'friend')
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
            'followScript': (_h = (_g = request.getFollowScript()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'unfollowScript': (_k = (_j = request.getUnfollowScript()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'sendRequestScript': (_m = (_l = request.getSendRequestScript()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'cancelRequestScript': (_p = (_o = request.getCancelRequestScript()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'acceptRequestScript': (_r = (_q = request.getAcceptRequestScript()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'rejectRequestScript': (_t = (_s = request.getRejectRequestScript()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
            'deleteFriendScript': (_v = (_u = request.getDeleteFriendScript()) === null || _u === void 0 ? void 0 : _u.toDict()) !== null && _v !== void 0 ? _v : null,
            'updateProfileScript': (_x = (_w = request.getUpdateProfileScript()) === null || _w === void 0 ? void 0 : _w.toDict()) !== null && _x !== void 0 ? _x : null,
            'followNotification': (_z = (_y = request.getFollowNotification()) === null || _y === void 0 ? void 0 : _y.toDict()) !== null && _z !== void 0 ? _z : null,
            'receiveRequestNotification': (_1 = (_0 = request.getReceiveRequestNotification()) === null || _0 === void 0 ? void 0 : _0.toDict()) !== null && _1 !== void 0 ? _1 : null,
            'cancelRequestNotification': (_3 = (_2 = request.getCancelRequestNotification()) === null || _2 === void 0 ? void 0 : _2.toDict()) !== null && _3 !== void 0 ? _3 : null,
            'acceptRequestNotification': (_5 = (_4 = request.getAcceptRequestNotification()) === null || _4 === void 0 ? void 0 : _4.toDict()) !== null && _5 !== void 0 ? _5 : null,
            'rejectRequestNotification': (_7 = (_6 = request.getRejectRequestNotification()) === null || _6 === void 0 ? void 0 : _6.toDict()) !== null && _7 !== void 0 ? _7 : null,
            'deleteFriendNotification': (_9 = (_8 = request.getDeleteFriendNotification()) === null || _8 === void 0 ? void 0 : _8.toDict()) !== null && _9 !== void 0 ? _9 : null,
            'logSetting': (_11 = (_10 = request.getLogSetting()) === null || _10 === void 0 ? void 0 : _10.toDict()) !== null && _11 !== void 0 ? _11 : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'friend')
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
            'followScript': (_j = (_h = request.getFollowScript()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'unfollowScript': (_l = (_k = request.getUnfollowScript()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'sendRequestScript': (_o = (_m = request.getSendRequestScript()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'cancelRequestScript': (_q = (_p = request.getCancelRequestScript()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'acceptRequestScript': (_s = (_r = request.getAcceptRequestScript()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'rejectRequestScript': (_u = (_t = request.getRejectRequestScript()) === null || _t === void 0 ? void 0 : _t.toDict()) !== null && _u !== void 0 ? _u : null,
            'deleteFriendScript': (_w = (_v = request.getDeleteFriendScript()) === null || _v === void 0 ? void 0 : _v.toDict()) !== null && _w !== void 0 ? _w : null,
            'updateProfileScript': (_y = (_x = request.getUpdateProfileScript()) === null || _x === void 0 ? void 0 : _x.toDict()) !== null && _y !== void 0 ? _y : null,
            'followNotification': (_0 = (_z = request.getFollowNotification()) === null || _z === void 0 ? void 0 : _z.toDict()) !== null && _0 !== void 0 ? _0 : null,
            'receiveRequestNotification': (_2 = (_1 = request.getReceiveRequestNotification()) === null || _1 === void 0 ? void 0 : _1.toDict()) !== null && _2 !== void 0 ? _2 : null,
            'cancelRequestNotification': (_4 = (_3 = request.getCancelRequestNotification()) === null || _3 === void 0 ? void 0 : _3.toDict()) !== null && _4 !== void 0 ? _4 : null,
            'acceptRequestNotification': (_6 = (_5 = request.getAcceptRequestNotification()) === null || _5 === void 0 ? void 0 : _5.toDict()) !== null && _6 !== void 0 ? _6 : null,
            'rejectRequestNotification': (_8 = (_7 = request.getRejectRequestNotification()) === null || _7 === void 0 ? void 0 : _7.toDict()) !== null && _8 !== void 0 ? _8 : null,
            'deleteFriendNotification': (_10 = (_9 = request.getDeleteFriendNotification()) === null || _9 === void 0 ? void 0 : _9.toDict()) !== null && _10 !== void 0 ? _10 : null,
            'logSetting': (_12 = (_11 = request.getLogSetting()) === null || _11 === void 0 ? void 0 : _11.toDict()) !== null && _12 !== void 0 ? _12 : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'friend')
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
    Gs2FriendRestClient.prototype.getProfile = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/profile')
            .replace('{service}', 'friend')
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
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetProfileResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getProfileByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/profile')
            .replace('{service}', 'friend')
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
            return Result.GetProfileByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.updateProfile = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/profile')
            .replace('{service}', 'friend')
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
            'publicProfile': (_g = request.getPublicProfile()) !== null && _g !== void 0 ? _g : null,
            'followerProfile': (_h = request.getFollowerProfile()) !== null && _h !== void 0 ? _h : null,
            'friendProfile': (_j = request.getFriendProfile()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateProfileResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.updateProfileByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/profile')
            .replace('{service}', 'friend')
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
            'publicProfile': (_j = request.getPublicProfile()) !== null && _j !== void 0 ? _j : null,
            'followerProfile': (_k = request.getFollowerProfile()) !== null && _k !== void 0 ? _k : null,
            'friendProfile': (_l = request.getFriendProfile()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateProfileByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteProfileByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/profile')
            .replace('{service}', 'friend')
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
            return Result.DeleteProfileByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.updateProfileByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/profile/update')
            .replace('{service}', 'friend')
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
            return Result.UpdateProfileByStampSheetResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeFriends = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/friend')
            .replace('{service}', 'friend')
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
            'withProfile': String((_f = request.getWithProfile()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFriendsResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeFriendsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/friend')
            .replace('{service}', 'friend')
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
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFriendsByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeBlackList = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/blackList')
            .replace('{service}', 'friend')
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
            return Result.DescribeBlackListResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeBlackListByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/blackList')
            .replace('{service}', 'friend')
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
            return Result.DescribeBlackListByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.registerBlackList = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/blackList/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.RegisterBlackListResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.registerBlackListByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/blackList/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.RegisterBlackListByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.unregisterBlackList = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/blackList/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.UnregisterBlackListResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.unregisterBlackListByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/blackList/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.UnregisterBlackListByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeFollows = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/follow')
            .replace('{service}', 'friend')
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
            'withProfile': String((_f = request.getWithProfile()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFollowsResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeFollowsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/follow')
            .replace('{service}', 'friend')
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
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeFollowsByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getFollow = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFollowResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getFollowByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'withProfile': String((_k = request.getWithProfile()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFollowByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.follow = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.FollowResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.followByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.FollowByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.unfollow = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.UnfollowResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.unfollowByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/follow/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.UnfollowByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getFriend = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFriendResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getFriendByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'withProfile': String((_k = request.getWithProfile()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetFriendByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.addFriend = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AddFriendResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.addFriendByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AddFriendByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteFriend = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DeleteFriendResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteFriendByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/friend/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeleteFriendByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeSendRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox')
            .replace('{service}', 'friend')
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
            'withProfile': String((_f = request.getWithProfile()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeSendRequestsResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeSendRequestsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox')
            .replace('{service}', 'friend')
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
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeSendRequestsByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getSendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetSendRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getSendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'withProfile': String((_k = request.getWithProfile()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetSendRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.sendRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SendRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.sendRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SendRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{targetUserId}', String((_d = request.getTargetUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTargetUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DeleteRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.deleteRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/sendBox/{targetUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{targetUserId}', String((_f = request.getTargetUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTargetUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.DeleteRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeReceiveRequests = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/inbox')
            .replace('{service}', 'friend')
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
            'withProfile': String((_f = request.getWithProfile()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeReceiveRequestsResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.describeReceiveRequestsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/inbox')
            .replace('{service}', 'friend')
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
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeReceiveRequestsByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getReceiveRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{fromUserId}', String((_d = request.getFromUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'withProfile': String((_h = request.getWithProfile()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetReceiveRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getReceiveRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'withProfile': String((_k = request.getWithProfile()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetReceiveRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.acceptRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{fromUserId}', String((_d = request.getFromUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AcceptRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.acceptRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.AcceptRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.rejectRequest = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{fromUserId}', String((_d = request.getFromUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getFromUserId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.RejectRequestResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.rejectRequestByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/inbox/{fromUserId}')
            .replace('{service}', 'friend')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{fromUserId}', String((_f = request.getFromUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getFromUserId()) !== null && _g !== void 0 ? _g : 'null'));
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
            return Result.RejectRequestByUserIdResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.prototype.getPublicProfile = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2FriendRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/profile/public')
            .replace('{service}', 'friend')
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
            return Result.GetPublicProfileResult.fromDict(data);
        });
    };
    Gs2FriendRestClient.ENDPOINT_HOST = null;
    return Gs2FriendRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2FriendRestClient;
//# sourceMappingURL=rest.js.map