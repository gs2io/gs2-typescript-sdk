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
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
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
    /** @deprecated */
    CreateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    CreateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    CreateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
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
            .withTransactionSetting(Gs2Friend.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2Friend.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "followScript": (_c = this.getFollowScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "unfollowScript": (_d = this.getUnfollowScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "sendRequestScript": (_e = this.getSendRequestScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "cancelRequestScript": (_f = this.getCancelRequestScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "acceptRequestScript": (_g = this.getAcceptRequestScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "rejectRequestScript": (_h = this.getRejectRequestScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "deleteFriendScript": (_j = this.getDeleteFriendScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "updateProfileScript": (_k = this.getUpdateProfileScript()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "followNotification": (_l = this.getFollowNotification()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "receiveRequestNotification": (_m = this.getReceiveRequestNotification()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "cancelRequestNotification": (_o = this.getCancelRequestNotification()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "acceptRequestNotification": (_p = this.getAcceptRequestNotification()) === null || _p === void 0 ? void 0 : _p.toDict(),
            "rejectRequestNotification": (_q = this.getRejectRequestNotification()) === null || _q === void 0 ? void 0 : _q.toDict(),
            "deleteFriendNotification": (_r = this.getDeleteFriendNotification()) === null || _r === void 0 ? void 0 : _r.toDict(),
            "logSetting": (_s = this.getLogSetting()) === null || _s === void 0 ? void 0 : _s.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map