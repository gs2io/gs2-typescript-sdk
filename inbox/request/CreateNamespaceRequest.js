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
var Gs2Inbox = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.isAutomaticDeletingEnabled = null;
        this.transactionSetting = null;
        this.receiveMessageScript = null;
        this.readMessageScript = null;
        this.deleteMessageScript = null;
        this.receiveNotification = null;
        this.logSetting = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    CreateNamespaceRequest.prototype.getIsAutomaticDeletingEnabled = function () {
        return this.isAutomaticDeletingEnabled;
    };
    CreateNamespaceRequest.prototype.setIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    CreateNamespaceRequest.prototype.withIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    CreateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    CreateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveMessageScript = function () {
        return this.receiveMessageScript;
    };
    CreateNamespaceRequest.prototype.setReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getReadMessageScript = function () {
        return this.readMessageScript;
    };
    CreateNamespaceRequest.prototype.setReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDeleteMessageScript = function () {
        return this.deleteMessageScript;
    };
    CreateNamespaceRequest.prototype.setDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveNotification = function () {
        return this.receiveNotification;
    };
    CreateNamespaceRequest.prototype.setReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
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
    /** @deprecated */
    CreateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withTransactionSetting(Gs2Inbox.TransactionSetting.fromDict(data["transactionSetting"]))
            .withReceiveMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withReceiveNotification(Gs2Inbox.NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(Gs2Inbox.LogSetting.fromDict(data["logSetting"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "receiveMessageScript": (_b = this.getReceiveMessageScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "readMessageScript": (_c = this.getReadMessageScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "deleteMessageScript": (_d = this.getDeleteMessageScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "receiveNotification": (_e = this.getReceiveNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map