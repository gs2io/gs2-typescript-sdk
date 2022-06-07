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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.missionCompleteScript = null;
        this.counterIncrementScript = null;
        this.receiveRewardsScript = null;
        this.completeNotification = null;
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
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Mission.TransactionSetting.fromDict(data["transactionSetting"]))
            .withMissionCompleteScript(Gs2Mission.ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(Gs2Mission.ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(Gs2Mission.ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withCompleteNotification(Gs2Mission.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Mission.LogSetting.fromDict(data["logSetting"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "missionCompleteScript": (_b = this.getMissionCompleteScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "counterIncrementScript": (_c = this.getCounterIncrementScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "receiveRewardsScript": (_d = this.getReceiveRewardsScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "completeNotification": (_e = this.getCompleteNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map