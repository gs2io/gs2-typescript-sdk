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
import { __extends } from "tslib";
import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant } from '../core/model';
import * as Result from './result';
import axios from 'axios';
var Gs2MatchmakingRestClient = /** @class */ (function (_super) {
    __extends(Gs2MatchmakingRestClient, _super);
    function Gs2MatchmakingRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2MatchmakingRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'matchmaking')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var url = (Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'enableRating': (_d = request.getEnableRating()) !== null && _d !== void 0 ? _d : null,
            'createGatheringTriggerType': (_e = request.getCreateGatheringTriggerType()) !== null && _e !== void 0 ? _e : null,
            'createGatheringTriggerRealtimeNamespaceId': (_f = request.getCreateGatheringTriggerRealtimeNamespaceId()) !== null && _f !== void 0 ? _f : null,
            'createGatheringTriggerScriptId': (_g = request.getCreateGatheringTriggerScriptId()) !== null && _g !== void 0 ? _g : null,
            'completeMatchmakingTriggerType': (_h = request.getCompleteMatchmakingTriggerType()) !== null && _h !== void 0 ? _h : null,
            'completeMatchmakingTriggerRealtimeNamespaceId': (_j = request.getCompleteMatchmakingTriggerRealtimeNamespaceId()) !== null && _j !== void 0 ? _j : null,
            'completeMatchmakingTriggerScriptId': (_k = request.getCompleteMatchmakingTriggerScriptId()) !== null && _k !== void 0 ? _k : null,
            'joinNotification': (_m = (_l = request.getJoinNotification()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'leaveNotification': (_p = (_o = request.getLeaveNotification()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'completeNotification': (_r = (_q = request.getCompleteNotification()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'logSetting': (_t = (_s = request.getLogSetting()) === null || _s === void 0 ? void 0 : _s.toDict()) !== null && _t !== void 0 ? _t : null,
        };
        return axios.post(url, body, {
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
    Gs2MatchmakingRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'enableRating': (_e = request.getEnableRating()) !== null && _e !== void 0 ? _e : null,
            'createGatheringTriggerType': (_f = request.getCreateGatheringTriggerType()) !== null && _f !== void 0 ? _f : null,
            'createGatheringTriggerRealtimeNamespaceId': (_g = request.getCreateGatheringTriggerRealtimeNamespaceId()) !== null && _g !== void 0 ? _g : null,
            'createGatheringTriggerScriptId': (_h = request.getCreateGatheringTriggerScriptId()) !== null && _h !== void 0 ? _h : null,
            'completeMatchmakingTriggerType': (_j = request.getCompleteMatchmakingTriggerType()) !== null && _j !== void 0 ? _j : null,
            'completeMatchmakingTriggerRealtimeNamespaceId': (_k = request.getCompleteMatchmakingTriggerRealtimeNamespaceId()) !== null && _k !== void 0 ? _k : null,
            'completeMatchmakingTriggerScriptId': (_l = request.getCompleteMatchmakingTriggerScriptId()) !== null && _l !== void 0 ? _l : null,
            'joinNotification': (_o = (_m = request.getJoinNotification()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
            'leaveNotification': (_q = (_p = request.getLeaveNotification()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
            'completeNotification': (_s = (_r = request.getCompleteNotification()) === null || _r === void 0 ? void 0 : _r.toDict()) !== null && _s !== void 0 ? _s : null,
            'logSetting': (_u = (_t = request.getLogSetting()) === null || _t === void 0 ? void 0 : _t.toDict()) !== null && _u !== void 0 ? _u : null,
        };
        return axios.put(url, body, {
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
    Gs2MatchmakingRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.describeGatherings = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
            .replace('{service}', 'matchmaking')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeGatheringsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.createGathering = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'player': (_f = (_e = request.getPlayer()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'attributeRanges': (_h = (_g = request.getAttributeRanges()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
            'capacityOfRoles': (_k = (_j = request.getCapacityOfRoles()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
            'allowUserIds': (_l = request.getAllowUserIds()) !== null && _l !== void 0 ? _l : null,
            'expiresAt': (_m = request.getExpiresAt()) !== null && _m !== void 0 ? _m : null,
            'expiresAtTimeSpan': (_p = (_o = request.getExpiresAtTimeSpan()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateGatheringResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.createGatheringByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'player': (_g = (_f = request.getPlayer()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'attributeRanges': (_j = (_h = request.getAttributeRanges()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
            'capacityOfRoles': (_l = (_k = request.getCapacityOfRoles()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
            'allowUserIds': (_m = request.getAllowUserIds()) !== null && _m !== void 0 ? _m : null,
            'expiresAt': (_o = request.getExpiresAt()) !== null && _o !== void 0 ? _o : null,
            'expiresAtTimeSpan': (_q = (_p = request.getExpiresAtTimeSpan()) === null || _p === void 0 ? void 0 : _p.toDict()) !== null && _q !== void 0 ? _q : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateGatheringByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.updateGathering = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_e = request.getAccessToken()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'attributeRanges': (_h = (_g = request.getAttributeRanges()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateGatheringResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.updateGatheringByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'attributeRanges': (_j = (_h = request.getAttributeRanges()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateGatheringByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.doMatchmakingByPlayer = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/player/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'player': (_e = (_d = request.getPlayer()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
            'matchmakingContextToken': (_f = request.getMatchmakingContextToken()) !== null && _f !== void 0 ? _f : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DoMatchmakingByPlayerResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.doMatchmaking = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'player': (_f = (_e = request.getPlayer()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'matchmakingContextToken': (_g = request.getMatchmakingContextToken()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DoMatchmakingResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.doMatchmakingByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/gathering/do')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'player': (_g = (_f = request.getPlayer()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'matchmakingContextToken': (_h = request.getMatchmakingContextToken()) !== null && _h !== void 0 ? _h : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DoMatchmakingByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.getGathering = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetGatheringResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.cancelMatchmaking = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/me')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'));
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
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CancelMatchmakingResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.cancelMatchmakingByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}/user/{userId}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userId}', String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CancelMatchmakingByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.deleteGathering = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/gathering/{gatheringName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{gatheringName}', String((_c = request.getGatheringName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getGatheringName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteGatheringResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.describeRatingModelMasters = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating')
            .replace('{service}', 'matchmaking')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeRatingModelMastersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.createRatingModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating')
            .replace('{service}', 'matchmaking')
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
            'volatility': (_g = request.getVolatility()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.getRatingModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.updateRatingModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'volatility': (_h = request.getVolatility()) !== null && _h !== void 0 ? _h : null,
        };
        return axios.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.deleteRatingModelMaster = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.describeRatingModels = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeRatingModelsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getRatingModel = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetRatingModelResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/export')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.ExportMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getCurrentRatingModelMaster = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetCurrentRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.updateCurrentRatingModelMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master')
            .replace('{service}', 'matchmaking')
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
        return axios.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateCurrentRatingModelMasterResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.updateCurrentRatingModelMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'matchmaking')
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
        return axios.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateCurrentRatingModelMasterFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.describeRatings = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/rating')
            .replace('{service}', 'matchmaking')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeRatingsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.describeRatingsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeRatingsByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getRating = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetRatingResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getRatingByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{ratingName}', String((_e = request.getRatingName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getRatingName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetRatingByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.putResult = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/rating/{ratingName}/vote')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'gameResults': (_g = (_f = request.getGameResults()) === null || _f === void 0 ? void 0 : _f.map(function (item) { return item.toDict(); })) !== null && _g !== void 0 ? _g : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PutResultResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.deleteRating = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/rating/{ratingName}')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{ratingName}', String((_e = request.getRatingName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getRatingName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteRatingResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2MatchmakingRestClient.prototype.getBallot = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/me/vote/{ratingName}/{gatheringName}/ballot')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{gatheringName}', String((_e = request.getGatheringName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGatheringName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_g = request.getAccessToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'numberOfPlayer': (_j = request.getNumberOfPlayer()) !== null && _j !== void 0 ? _j : null,
            'keyId': (_k = request.getKeyId()) !== null && _k !== void 0 ? _k : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetBallotResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.getBallotByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/user/{userId}/vote/{ratingName}/{gatheringName}/ballot')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{gatheringName}', String((_e = request.getGatheringName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGatheringName()) !== null && _f !== void 0 ? _f : 'null'))
            .replace('{userId}', String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null') === "" ? "null" : String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'numberOfPlayer': (_k = request.getNumberOfPlayer()) !== null && _k !== void 0 ? _k : null,
            'keyId': (_l = request.getKeyId()) !== null && _l !== void 0 ? _l : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetBallotByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.vote = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/action/vote')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'ballotBody': (_d = request.getBallotBody()) !== null && _d !== void 0 ? _d : null,
            'ballotSignature': (_e = request.getBallotSignature()) !== null && _e !== void 0 ? _e : null,
            'gameResults': (_g = (_f = request.getGameResults()) === null || _f === void 0 ? void 0 : _f.map(function (item) { return item.toDict(); })) !== null && _g !== void 0 ? _g : null,
            'keyId': (_h = request.getKeyId()) !== null && _h !== void 0 ? _h : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VoteResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.voteMultiple = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/action/vote/multiple')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'signedBallots': (_e = (_d = request.getSignedBallots()) === null || _d === void 0 ? void 0 : _d.map(function (item) { return item.toDict(); })) !== null && _e !== void 0 ? _e : null,
            'gameResults': (_g = (_f = request.getGameResults()) === null || _f === void 0 ? void 0 : _f.map(function (item) { return item.toDict(); })) !== null && _g !== void 0 ? _g : null,
            'keyId': (_h = request.getKeyId()) !== null && _h !== void 0 ? _h : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VoteMultipleResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2MatchmakingRestClient.prototype.commitVote = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/vote/{ratingName}/{gatheringName}/action/vote/commit')
            .replace('{service}', 'matchmaking')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{ratingName}', String((_c = request.getRatingName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRatingName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{gatheringName}', String((_e = request.getGatheringName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getGatheringName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CommitVoteResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2MatchmakingRestClient;
}(AbstractGs2RestClient));
export default Gs2MatchmakingRestClient;
//# sourceMappingURL=rest.js.map