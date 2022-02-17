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
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.isAutomaticDeletingEnabled = null;
        this.receiveMessageScript = null;
        this.readMessageScript = null;
        this.deleteMessageScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.receiveNotification = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
    Namespace.prototype.getIsAutomaticDeletingEnabled = function () {
        return this.isAutomaticDeletingEnabled;
    };
    Namespace.prototype.setIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    Namespace.prototype.withIsAutomaticDeletingEnabled = function (isAutomaticDeletingEnabled) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    };
    Namespace.prototype.getReceiveMessageScript = function () {
        return this.receiveMessageScript;
    };
    Namespace.prototype.setReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    Namespace.prototype.withReceiveMessageScript = function (receiveMessageScript) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    };
    Namespace.prototype.getReadMessageScript = function () {
        return this.readMessageScript;
    };
    Namespace.prototype.setReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    Namespace.prototype.withReadMessageScript = function (readMessageScript) {
        this.readMessageScript = readMessageScript;
        return this;
    };
    Namespace.prototype.getDeleteMessageScript = function () {
        return this.deleteMessageScript;
    };
    Namespace.prototype.setDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    Namespace.prototype.withDeleteMessageScript = function (deleteMessageScript) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    };
    Namespace.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    Namespace.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    Namespace.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    Namespace.prototype.getKeyId = function () {
        return this.keyId;
    };
    Namespace.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Namespace.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Namespace.prototype.getReceiveNotification = function () {
        return this.receiveNotification;
    };
    Namespace.prototype.setReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
        return this;
    };
    Namespace.prototype.withReceiveNotification = function (receiveNotification) {
        this.receiveNotification = receiveNotification;
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
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withReceiveMessageScript(ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withReceiveNotification(NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "receiveMessageScript": (_a = this.getReceiveMessageScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "readMessageScript": (_b = this.getReadMessageScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "deleteMessageScript": (_c = this.getDeleteMessageScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "receiveNotification": (_d = this.getReceiveNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
export default Namespace;
//# sourceMappingURL=Namespace.js.map