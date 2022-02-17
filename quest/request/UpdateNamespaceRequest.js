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
import * as Gs2Quest from '../model';
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.startQuestScript = null;
        this.completeQuestScript = null;
        this.failedQuestScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    UpdateNamespaceRequest.prototype.getStartQuestScript = function () {
        return this.startQuestScript;
    };
    UpdateNamespaceRequest.prototype.setStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withStartQuestScript = function (startQuestScript) {
        this.startQuestScript = startQuestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteQuestScript = function () {
        return this.completeQuestScript;
    };
    UpdateNamespaceRequest.prototype.setCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteQuestScript = function (completeQuestScript) {
        this.completeQuestScript = completeQuestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getFailedQuestScript = function () {
        return this.failedQuestScript;
    };
    UpdateNamespaceRequest.prototype.setFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withFailedQuestScript = function (failedQuestScript) {
        this.failedQuestScript = failedQuestScript;
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
            .withStartQuestScript(Gs2Quest.ScriptSetting.fromDict(data["startQuestScript"]))
            .withCompleteQuestScript(Gs2Quest.ScriptSetting.fromDict(data["completeQuestScript"]))
            .withFailedQuestScript(Gs2Quest.ScriptSetting.fromDict(data["failedQuestScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withLogSetting(Gs2Quest.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "startQuestScript": (_a = this.getStartQuestScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "completeQuestScript": (_b = this.getCompleteQuestScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "failedQuestScript": (_c = this.getFailedQuestScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
export default UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map