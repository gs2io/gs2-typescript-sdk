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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.missionCompleteScript = null;
        this.counterIncrementScript = null;
        this.receiveRewardsScript = null;
        this.completeNotification = null;
        this.logSetting = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    UpdateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.getMissionCompleteScript = function () {
        return this.missionCompleteScript;
    };
    UpdateNamespaceRequest.prototype.setMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCounterIncrementScript = function () {
        return this.counterIncrementScript;
    };
    UpdateNamespaceRequest.prototype.setCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveRewardsScript = function () {
        return this.receiveRewardsScript;
    };
    UpdateNamespaceRequest.prototype.setReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    UpdateNamespaceRequest.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
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
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Mission.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2Mission.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
            .withMissionCompleteScript(Gs2Mission.ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(Gs2Mission.ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(Gs2Mission.ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withCompleteNotification(Gs2Mission.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Mission.LogSetting.fromDict(data["logSetting"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "missionCompleteScript": (_c = this.getMissionCompleteScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "counterIncrementScript": (_d = this.getCounterIncrementScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "receiveRewardsScript": (_e = this.getReceiveRewardsScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "completeNotification": (_f = this.getCompleteNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "logSetting": (_g = this.getLogSetting()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map