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
var Gs2Quest = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.startQuestScript = null;
        this.completeQuestScript = null;
        this.failedQuestScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    CreateNamespaceRequest.prototype.getStartQuestScript = function () {
        return this.startQuestScript;
    };
    CreateNamespaceRequest.prototype.setStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getCompleteQuestScript = function () {
        return this.completeQuestScript;
    };
    CreateNamespaceRequest.prototype.setCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getFailedQuestScript = function () {
        return this.failedQuestScript;
    };
    CreateNamespaceRequest.prototype.setFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    CreateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    CreateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
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
            .withStartQuestScript(Gs2Quest.ScriptSetting.fromDict(data["startQuestScript"]))
            .withCompleteQuestScript(Gs2Quest.ScriptSetting.fromDict(data["completeQuestScript"]))
            .withFailedQuestScript(Gs2Quest.ScriptSetting.fromDict(data["failedQuestScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withLogSetting(Gs2Quest.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "startQuestScript": (_a = this.getStartQuestScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "completeQuestScript": (_b = this.getCompleteQuestScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "failedQuestScript": (_c = this.getFailedQuestScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map