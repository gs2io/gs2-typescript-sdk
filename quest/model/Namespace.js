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
import LogSetting from './LogSetting';
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.startQuestScript = null;
        this.completeQuestScript = null;
        this.failedQuestScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    Namespace.prototype.getStartQuestScript = function () {
        return this.startQuestScript;
    };
    Namespace.prototype.setStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    Namespace.prototype.withStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    Namespace.prototype.getCompleteQuestScript = function () {
        return this.completeQuestScript;
    };
    Namespace.prototype.setCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    Namespace.prototype.withCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    Namespace.prototype.getFailedQuestScript = function () {
        return this.failedQuestScript;
    };
    Namespace.prototype.setFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
        return this;
    };
    Namespace.prototype.withFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
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
            .withStartQuestScript(ScriptSetting.fromDict(data["startQuestScript"]))
            .withCompleteQuestScript(ScriptSetting.fromDict(data["completeQuestScript"]))
            .withFailedQuestScript(ScriptSetting.fromDict(data["failedQuestScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "startQuestScript": (_a = this.getStartQuestScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "completeQuestScript": (_b = this.getCompleteQuestScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "failedQuestScript": (_c = this.getFailedQuestScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
export default Namespace;
//# sourceMappingURL=Namespace.js.map