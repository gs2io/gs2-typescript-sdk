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
var Gs2Chat = (0, tslib_1.__importStar)(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.allowCreateRoom = null;
        this.postMessageScript = null;
        this.createRoomScript = null;
        this.deleteRoomScript = null;
        this.subscribeRoomScript = null;
        this.unsubscribeRoomScript = null;
        this.postNotification = null;
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
    UpdateNamespaceRequest.prototype.getAllowCreateRoom = function () {
        return this.allowCreateRoom;
    };
    UpdateNamespaceRequest.prototype.setAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    UpdateNamespaceRequest.prototype.getPostMessageScript = function () {
        return this.postMessageScript;
    };
    UpdateNamespaceRequest.prototype.setPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateRoomScript = function () {
        return this.createRoomScript;
    };
    UpdateNamespaceRequest.prototype.setCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDeleteRoomScript = function () {
        return this.deleteRoomScript;
    };
    UpdateNamespaceRequest.prototype.setDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getSubscribeRoomScript = function () {
        return this.subscribeRoomScript;
    };
    UpdateNamespaceRequest.prototype.setSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUnsubscribeRoomScript = function () {
        return this.unsubscribeRoomScript;
    };
    UpdateNamespaceRequest.prototype.setUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getPostNotification = function () {
        return this.postNotification;
    };
    UpdateNamespaceRequest.prototype.setPostNotification = function (postNotification) {
        this.postNotification = postNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withPostNotification = function (postNotification) {
        this.postNotification = postNotification;
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
            .withAllowCreateRoom(data["allowCreateRoom"])
            .withPostMessageScript(Gs2Chat.ScriptSetting.fromDict(data["postMessageScript"]))
            .withCreateRoomScript(Gs2Chat.ScriptSetting.fromDict(data["createRoomScript"]))
            .withDeleteRoomScript(Gs2Chat.ScriptSetting.fromDict(data["deleteRoomScript"]))
            .withSubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["subscribeRoomScript"]))
            .withUnsubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["unsubscribeRoomScript"]))
            .withPostNotification(Gs2Chat.NotificationSetting.fromDict(data["postNotification"]))
            .withLogSetting(Gs2Chat.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "allowCreateRoom": this.getAllowCreateRoom(),
            "postMessageScript": (_a = this.getPostMessageScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createRoomScript": (_b = this.getCreateRoomScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "deleteRoomScript": (_c = this.getDeleteRoomScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "subscribeRoomScript": (_d = this.getSubscribeRoomScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "unsubscribeRoomScript": (_e = this.getUnsubscribeRoomScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "postNotification": (_f = this.getPostNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "logSetting": (_g = this.getLogSetting()) === null || _g === void 0 ? void 0 : _g.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map