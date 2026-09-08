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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
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
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    UpdateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.getFollowScript = function () {
        return this.followScript;
    };
    UpdateNamespaceRequest.prototype.setFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUnfollowScript = function () {
        return this.unfollowScript;
    };
    UpdateNamespaceRequest.prototype.setUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getSendRequestScript = function () {
        return this.sendRequestScript;
    };
    UpdateNamespaceRequest.prototype.setSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCancelRequestScript = function () {
        return this.cancelRequestScript;
    };
    UpdateNamespaceRequest.prototype.setCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAcceptRequestScript = function () {
        return this.acceptRequestScript;
    };
    UpdateNamespaceRequest.prototype.setAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getRejectRequestScript = function () {
        return this.rejectRequestScript;
    };
    UpdateNamespaceRequest.prototype.setRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDeleteFriendScript = function () {
        return this.deleteFriendScript;
    };
    UpdateNamespaceRequest.prototype.setDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUpdateProfileScript = function () {
        return this.updateProfileScript;
    };
    UpdateNamespaceRequest.prototype.setUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getFollowNotification = function () {
        return this.followNotification;
    };
    UpdateNamespaceRequest.prototype.setFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCancelRequestNotification = function () {
        return this.cancelRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAcceptRequestNotification = function () {
        return this.acceptRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getRejectRequestNotification = function () {
        return this.rejectRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDeleteFriendNotification = function () {
        return this.deleteFriendNotification;
    };
    UpdateNamespaceRequest.prototype.setDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    UpdateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
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
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return {
            "namespaceName": this.getNamespaceName(),
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
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map