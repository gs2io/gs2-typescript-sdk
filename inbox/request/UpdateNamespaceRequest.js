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
import * as Gs2Inbox from '../model';
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.isAutomaticDeletingEnabled = null;
        this.receiveMessageScript = null;
        this.readMessageScript = null;
        this.deleteMessageScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.receiveNotification = null;
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
    UpdateNamespaceRequest.prototype.getIsAutomaticDeletingEnabled = function () {
        return this.isAutomaticDeletingEnabled;
    };
    UpdateNamespaceRequest.prototype.setIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    UpdateNamespaceRequest.prototype.withIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveMessageScript = function () {
        return this.receiveMessageScript;
    };
    UpdateNamespaceRequest.prototype.setReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReadMessageScript = function () {
        return this.readMessageScript;
    };
    UpdateNamespaceRequest.prototype.setReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDeleteMessageScript = function () {
        return this.deleteMessageScript;
    };
    UpdateNamespaceRequest.prototype.setDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    UpdateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    UpdateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveNotification = function () {
        return this.receiveNotification;
    };
    UpdateNamespaceRequest.prototype.setReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
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
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withReceiveMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withReceiveNotification(Gs2Inbox.NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(Gs2Inbox.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "receiveMessageScript": (_a = this.getReceiveMessageScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "readMessageScript": (_b = this.getReadMessageScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "deleteMessageScript": (_c = this.getDeleteMessageScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "receiveNotification": (_d = this.getReceiveNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
export default UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map