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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
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
    CreateNamespaceRequest.prototype.getAllowCreateRoom = function () {
        return this.allowCreateRoom;
    };
    CreateNamespaceRequest.prototype.setAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    CreateNamespaceRequest.prototype.withAllowCreateRoom = function (allowCreateRoom) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    };
    CreateNamespaceRequest.prototype.getPostMessageScript = function () {
        return this.postMessageScript;
    };
    CreateNamespaceRequest.prototype.setPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withPostMessageScript = function (postMessageScript) {
        this.postMessageScript = postMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateRoomScript = function () {
        return this.createRoomScript;
    };
    CreateNamespaceRequest.prototype.setCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateRoomScript = function (createRoomScript) {
        this.createRoomScript = createRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDeleteRoomScript = function () {
        return this.deleteRoomScript;
    };
    CreateNamespaceRequest.prototype.setDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDeleteRoomScript = function (deleteRoomScript) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getSubscribeRoomScript = function () {
        return this.subscribeRoomScript;
    };
    CreateNamespaceRequest.prototype.setSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withSubscribeRoomScript = function (subscribeRoomScript) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getUnsubscribeRoomScript = function () {
        return this.unsubscribeRoomScript;
    };
    CreateNamespaceRequest.prototype.setUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withUnsubscribeRoomScript = function (unsubscribeRoomScript) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getPostNotification = function () {
        return this.postNotification;
    };
    CreateNamespaceRequest.prototype.setPostNotification = function (postNotification) {
        this.postNotification = postNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withPostNotification = function (postNotification) {
        this.postNotification = postNotification;
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
            .withAllowCreateRoom(data["allowCreateRoom"])
            .withPostMessageScript(Gs2Chat.ScriptSetting.fromDict(data["postMessageScript"]))
            .withCreateRoomScript(Gs2Chat.ScriptSetting.fromDict(data["createRoomScript"]))
            .withDeleteRoomScript(Gs2Chat.ScriptSetting.fromDict(data["deleteRoomScript"]))
            .withSubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["subscribeRoomScript"]))
            .withUnsubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["unsubscribeRoomScript"]))
            .withPostNotification(Gs2Chat.NotificationSetting.fromDict(data["postNotification"]))
            .withLogSetting(Gs2Chat.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "name": this.getName(),
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
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map