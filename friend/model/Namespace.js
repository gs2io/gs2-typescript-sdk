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
var ScriptSetting_1 = (0, tslib_1.__importDefault)(require("./ScriptSetting"));
var NotificationSetting_1 = (0, tslib_1.__importDefault)(require("./NotificationSetting"));
var LogSetting_1 = (0, tslib_1.__importDefault)(require("./LogSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:friend:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
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
        this.acceptRequestNotification = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
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
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withFollowScript(ScriptSetting_1.default.fromDict(data["followScript"]))
            .withUnfollowScript(ScriptSetting_1.default.fromDict(data["unfollowScript"]))
            .withSendRequestScript(ScriptSetting_1.default.fromDict(data["sendRequestScript"]))
            .withCancelRequestScript(ScriptSetting_1.default.fromDict(data["cancelRequestScript"]))
            .withAcceptRequestScript(ScriptSetting_1.default.fromDict(data["acceptRequestScript"]))
            .withRejectRequestScript(ScriptSetting_1.default.fromDict(data["rejectRequestScript"]))
            .withDeleteFriendScript(ScriptSetting_1.default.fromDict(data["deleteFriendScript"]))
            .withUpdateProfileScript(ScriptSetting_1.default.fromDict(data["updateProfileScript"]))
            .withFollowNotification(NotificationSetting_1.default.fromDict(data["followNotification"]))
            .withReceiveRequestNotification(NotificationSetting_1.default.fromDict(data["receiveRequestNotification"]))
            .withAcceptRequestNotification(NotificationSetting_1.default.fromDict(data["acceptRequestNotification"]))
            .withLogSetting(LogSetting_1.default.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return {
            "namespaceId": this.getNamespaceId(),
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
            "acceptRequestNotification": (_l = this.getAcceptRequestNotification()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "logSetting": (_m = this.getLogSetting()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map