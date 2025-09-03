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
var Gs2Friend = tslib_1.__importStar(require("../../friend/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:friend:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
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
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Namespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    };
    Namespace.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    Namespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    Namespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.getName = function () {
        return this.name;
    };
    Namespace.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.getDescription = function () {
        return this.description;
    };
    Namespace.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    Namespace.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.getFollowScript = function () {
        return this.followScript;
    };
    Namespace.prototype.setFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    Namespace.prototype.withFollowScript = function (followScript) {
        this.followScript = followScript;
        return this;
    };
    Namespace.prototype.getUnfollowScript = function () {
        return this.unfollowScript;
    };
    Namespace.prototype.setUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    Namespace.prototype.withUnfollowScript = function (unfollowScript) {
        this.unfollowScript = unfollowScript;
        return this;
    };
    Namespace.prototype.getSendRequestScript = function () {
        return this.sendRequestScript;
    };
    Namespace.prototype.setSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    Namespace.prototype.withSendRequestScript = function (sendRequestScript) {
        this.sendRequestScript = sendRequestScript;
        return this;
    };
    Namespace.prototype.getCancelRequestScript = function () {
        return this.cancelRequestScript;
    };
    Namespace.prototype.setCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    Namespace.prototype.withCancelRequestScript = function (cancelRequestScript) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    };
    Namespace.prototype.getAcceptRequestScript = function () {
        return this.acceptRequestScript;
    };
    Namespace.prototype.setAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    Namespace.prototype.withAcceptRequestScript = function (acceptRequestScript) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    };
    Namespace.prototype.getRejectRequestScript = function () {
        return this.rejectRequestScript;
    };
    Namespace.prototype.setRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    Namespace.prototype.withRejectRequestScript = function (rejectRequestScript) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    };
    Namespace.prototype.getDeleteFriendScript = function () {
        return this.deleteFriendScript;
    };
    Namespace.prototype.setDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    Namespace.prototype.withDeleteFriendScript = function (deleteFriendScript) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    };
    Namespace.prototype.getUpdateProfileScript = function () {
        return this.updateProfileScript;
    };
    Namespace.prototype.setUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    Namespace.prototype.withUpdateProfileScript = function (updateProfileScript) {
        this.updateProfileScript = updateProfileScript;
        return this;
    };
    Namespace.prototype.getFollowNotification = function () {
        return this.followNotification;
    };
    Namespace.prototype.setFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    Namespace.prototype.withFollowNotification = function (followNotification) {
        this.followNotification = followNotification;
        return this;
    };
    Namespace.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    Namespace.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    Namespace.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    Namespace.prototype.getCancelRequestNotification = function () {
        return this.cancelRequestNotification;
    };
    Namespace.prototype.setCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    Namespace.prototype.withCancelRequestNotification = function (cancelRequestNotification) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    };
    Namespace.prototype.getAcceptRequestNotification = function () {
        return this.acceptRequestNotification;
    };
    Namespace.prototype.setAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    Namespace.prototype.withAcceptRequestNotification = function (acceptRequestNotification) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    };
    Namespace.prototype.getRejectRequestNotification = function () {
        return this.rejectRequestNotification;
    };
    Namespace.prototype.setRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    Namespace.prototype.withRejectRequestNotification = function (rejectRequestNotification) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    };
    Namespace.prototype.getDeleteFriendNotification = function () {
        return this.deleteFriendNotification;
    };
    Namespace.prototype.setDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    Namespace.prototype.withDeleteFriendNotification = function (deleteFriendNotification) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    };
    Namespace.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    Namespace.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Namespace.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Namespace.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.getRevision = function () {
        return this.revision;
    };
    Namespace.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Friend.TransactionSetting.fromDict(data["transactionSetting"]))
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
            .withLogSetting(Gs2Friend.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "followScript": (_b = this.getFollowScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "unfollowScript": (_c = this.getUnfollowScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "sendRequestScript": (_d = this.getSendRequestScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "cancelRequestScript": (_e = this.getCancelRequestScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "acceptRequestScript": (_f = this.getAcceptRequestScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "rejectRequestScript": (_g = this.getRejectRequestScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "deleteFriendScript": (_h = this.getDeleteFriendScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "updateProfileScript": (_j = this.getUpdateProfileScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "followNotification": (_k = this.getFollowNotification()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "receiveRequestNotification": (_l = this.getReceiveRequestNotification()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "cancelRequestNotification": (_m = this.getCancelRequestNotification()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "acceptRequestNotification": (_o = this.getAcceptRequestNotification()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "rejectRequestNotification": (_p = this.getRejectRequestNotification()) === null || _p === void 0 ? void 0 : _p.toDict(),
            "deleteFriendNotification": (_q = this.getDeleteFriendNotification()) === null || _q === void 0 ? void 0 : _q.toDict(),
            "logSetting": (_r = this.getLogSetting()) === null || _r === void 0 ? void 0 : _r.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map