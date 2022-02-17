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
var Gs2Mission = (0, tslib_1.__importStar)(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.missionCompleteScript = null;
        this.counterIncrementScript = null;
        this.receiveRewardsScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.completeNotification = null;
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
    CreateNamespaceRequest.prototype.getMissionCompleteScript = function () {
        return this.missionCompleteScript;
    };
    CreateNamespaceRequest.prototype.setMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getCounterIncrementScript = function () {
        return this.counterIncrementScript;
    };
    CreateNamespaceRequest.prototype.setCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveRewardsScript = function () {
        return this.receiveRewardsScript;
    };
    CreateNamespaceRequest.prototype.setReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
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
    CreateNamespaceRequest.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    CreateNamespaceRequest.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
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
            .withMissionCompleteScript(Gs2Mission.ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(Gs2Mission.ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(Gs2Mission.ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withCompleteNotification(Gs2Mission.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Mission.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "missionCompleteScript": (_a = this.getMissionCompleteScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "counterIncrementScript": (_b = this.getCounterIncrementScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "receiveRewardsScript": (_c = this.getReceiveRewardsScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "completeNotification": (_d = this.getCompleteNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map