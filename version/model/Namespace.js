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
        this.assumeUserId = null;
        this.acceptVersionScript = null;
        this.checkVersionTriggerScriptId = null;
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
    Namespace.prototype.getAssumeUserId = function () {
        return this.assumeUserId;
    };
    Namespace.prototype.setAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    Namespace.prototype.withAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    Namespace.prototype.getAcceptVersionScript = function () {
        return this.acceptVersionScript;
    };
    Namespace.prototype.setAcceptVersionScript = function (acceptVersionScript) {
        this.acceptVersionScript = acceptVersionScript;
        return this;
    };
    Namespace.prototype.withAcceptVersionScript = function (acceptVersionScript) {
        this.acceptVersionScript = acceptVersionScript;
        return this;
    };
    Namespace.prototype.getCheckVersionTriggerScriptId = function () {
        return this.checkVersionTriggerScriptId;
    };
    Namespace.prototype.setCheckVersionTriggerScriptId = function (checkVersionTriggerScriptId) {
        this.checkVersionTriggerScriptId = checkVersionTriggerScriptId;
        return this;
    };
    Namespace.prototype.withCheckVersionTriggerScriptId = function (checkVersionTriggerScriptId) {
        this.checkVersionTriggerScriptId = checkVersionTriggerScriptId;
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
            .withAssumeUserId(data["assumeUserId"])
            .withAcceptVersionScript(ScriptSetting.fromDict(data["acceptVersionScript"]))
            .withCheckVersionTriggerScriptId(data["checkVersionTriggerScriptId"])
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "assumeUserId": this.getAssumeUserId(),
            "acceptVersionScript": (_a = this.getAcceptVersionScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "checkVersionTriggerScriptId": this.getCheckVersionTriggerScriptId(),
            "logSetting": (_b = this.getLogSetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
export default Namespace;
//# sourceMappingURL=Namespace.js.map