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
var Gs2Chat = tslib_1.__importStar(require("../../chat/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.allowCreateRoom = null;
        this.messageLifeTimeDays = null;
        this.postMessageScript = null;
        this.createRoomScript = null;
        this.deleteRoomScript = null;
        this.subscribeRoomScript = null;
        this.unsubscribeRoomScript = null;
        this.postNotification = null;
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
    Namespace.prototype.getAllowCreateRoom = function () {
        return this.allowCreateRoom;
    };
    Namespace.prototype.setAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    Namespace.prototype.withAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    Namespace.prototype.getMessageLifeTimeDays = function () {
        return this.messageLifeTimeDays;
    };
    Namespace.prototype.setMessageLifeTimeDays = function (messageLifeTimeDays) {
        this.messageLifeTimeDays = messageLifeTimeDays;
        return this;
    };
    Namespace.prototype.withMessageLifeTimeDays = function (messageLifeTimeDays) {
        this.messageLifeTimeDays = messageLifeTimeDays;
        return this;
    };
    Namespace.prototype.getPostMessageScript = function () {
        return this.postMessageScript;
    };
    Namespace.prototype.setPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    Namespace.prototype.withPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    Namespace.prototype.getCreateRoomScript = function () {
        return this.createRoomScript;
    };
    Namespace.prototype.setCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    Namespace.prototype.withCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    Namespace.prototype.getDeleteRoomScript = function () {
        return this.deleteRoomScript;
    };
    Namespace.prototype.setDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    Namespace.prototype.withDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    Namespace.prototype.getSubscribeRoomScript = function () {
        return this.subscribeRoomScript;
    };
    Namespace.prototype.setSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    Namespace.prototype.withSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    Namespace.prototype.getUnsubscribeRoomScript = function () {
        return this.unsubscribeRoomScript;
    };
    Namespace.prototype.setUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    Namespace.prototype.withUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    Namespace.prototype.getPostNotification = function () {
        return this.postNotification;
    };
    Namespace.prototype.setPostNotification = function (postNotification) {
        this.postNotification = postNotification;
        return this;
    };
    Namespace.prototype.withPostNotification = function (postNotification) {
        this.postNotification = postNotification;
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
            .withAllowCreateRoom(data["allowCreateRoom"])
            .withMessageLifeTimeDays(data["messageLifeTimeDays"])
            .withPostMessageScript(Gs2Chat.ScriptSetting.fromDict(data["postMessageScript"]))
            .withCreateRoomScript(Gs2Chat.ScriptSetting.fromDict(data["createRoomScript"]))
            .withDeleteRoomScript(Gs2Chat.ScriptSetting.fromDict(data["deleteRoomScript"]))
            .withSubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["subscribeRoomScript"]))
            .withUnsubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["unsubscribeRoomScript"]))
            .withPostNotification(Gs2Chat.NotificationSetting.fromDict(data["postNotification"]))
            .withLogSetting(Gs2Chat.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "allowCreateRoom": this.getAllowCreateRoom(),
            "messageLifeTimeDays": this.getMessageLifeTimeDays(),
            "postMessageScript": (_a = this.getPostMessageScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createRoomScript": (_b = this.getCreateRoomScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "deleteRoomScript": (_c = this.getDeleteRoomScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "subscribeRoomScript": (_d = this.getSubscribeRoomScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "unsubscribeRoomScript": (_e = this.getUnsubscribeRoomScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "postNotification": (_f = this.getPostNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "logSetting": (_g = this.getLogSetting()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map