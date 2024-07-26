"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Gs2Friend = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.followScript = null;
        this.unfollowScript = null;
        this.sendRequestScript = null;
        this.cancelRequestScript = null;
        this.acceptRequestScript = null;
        this.rejectRequestScript = null;
        this.deleteFriendScript = null;
        this.updateProfileScript = null;
        this.followNotification = null;
        this.receiveRequestNotification = null;
        this.cancelRequestNotification = null;
        this.acceptRequestNotification = null;
        this.rejectRequestNotification = null;
        this.deleteFriendNotification = null;
        this.logSetting = null;
    }
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.getFollowScript = function () {
        return this.followScript;
    };
    CreateNamespaceRequest.prototype.setFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getUnfollowScript = function () {
        return this.unfollowScript;
    };
    CreateNamespaceRequest.prototype.setUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getSendRequestScript = function () {
        return this.sendRequestScript;
    };
    CreateNamespaceRequest.prototype.setSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getCancelRequestScript = function () {
        return this.cancelRequestScript;
    };
    CreateNamespaceRequest.prototype.setCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getAcceptRequestScript = function () {
        return this.acceptRequestScript;
    };
    CreateNamespaceRequest.prototype.setAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getRejectRequestScript = function () {
        return this.rejectRequestScript;
    };
    CreateNamespaceRequest.prototype.setRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDeleteFriendScript = function () {
        return this.deleteFriendScript;
    };
    CreateNamespaceRequest.prototype.setDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getUpdateProfileScript = function () {
        return this.updateProfileScript;
    };
    CreateNamespaceRequest.prototype.setUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getFollowNotification = function () {
        return this.followNotification;
    };
    CreateNamespaceRequest.prototype.setFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    CreateNamespaceRequest.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getCancelRequestNotification = function () {
        return this.cancelRequestNotification;
    };
    CreateNamespaceRequest.prototype.setCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getAcceptRequestNotification = function () {
        return this.acceptRequestNotification;
    };
    CreateNamespaceRequest.prototype.setAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getRejectRequestNotification = function () {
        return this.rejectRequestNotification;
    };
    CreateNamespaceRequest.prototype.setRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getDeleteFriendNotification = function () {
        return this.deleteFriendNotification;
    };
    CreateNamespaceRequest.prototype.setDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    CreateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withFollowScript(Gs2Friend.ScriptSetting.fromDict(data["followScript"]))
            .withUnfollowScript(Gs2Friend.ScriptSetting.fromDict(data["unfollowScript"]))
            .withSendRequestScript(Gs2Friend.ScriptSetting.fromDict(data["sendRequestScript"]))
            .withCancelRequestScript(Gs2Friend.ScriptSetting.fromDict(data["cancelRequestScript"]))
            .withAcceptRequestScript(Gs2Friend.ScriptSetting.fromDict(data["acceptRequestScript"]))
            .withRejectRequestScript(Gs2Friend.ScriptSetting.fromDict(data["rejectRequestScript"]))
            .withDeleteFriendScript(Gs2Friend.ScriptSetting.fromDict(data["deleteFriendScript"]))
            .withUpdateProfileScript(Gs2Friend.ScriptSetting.fromDict(data["updateProfileScript"]))
            .withFollowNotification(Gs2Friend.NotificationSetting.fromDict(data["followNotification"]))
            .withReceiveRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withCancelRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["cancelRequestNotification"]))
            .withAcceptRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["acceptRequestNotification"]))
            .withRejectRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["rejectRequestNotification"]))
            .withDeleteFriendNotification(Gs2Friend.NotificationSetting.fromDict(data["deleteFriendNotification"]))
            .withLogSetting(Gs2Friend.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "followScript": (_a = this.getFollowScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "unfollowScript": (_b = this.getUnfollowScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "sendRequestScript": (_c = this.getSendRequestScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "cancelRequestScript": (_d = this.getCancelRequestScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "acceptRequestScript": (_e = this.getAcceptRequestScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "rejectRequestScript": (_f = this.getRejectRequestScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "deleteFriendScript": (_g = this.getDeleteFriendScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "updateProfileScript": (_h = this.getUpdateProfileScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "followNotification": (_j = this.getFollowNotification()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "receiveRequestNotification": (_k = this.getReceiveRequestNotification()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "cancelRequestNotification": (_l = this.getCancelRequestNotification()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "acceptRequestNotification": (_m = this.getAcceptRequestNotification()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "rejectRequestNotification": (_o = this.getRejectRequestNotification()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "deleteFriendNotification": (_p = this.getDeleteFriendNotification()) === null || _p === void 0 ? void 0 : _p.toDict(),
            "logSetting": (_q = this.getLogSetting()) === null || _q === void 0 ? void 0 : _q.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map