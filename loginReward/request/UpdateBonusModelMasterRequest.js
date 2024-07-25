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
var Gs2LoginReward = tslib_1.__importStar(require("../model"));
var UpdateBonusModelMasterRequest = /** @class */ (function () {
    function UpdateBonusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.description = null;
        this.metadata = null;
        this.mode = null;
        this.periodEventId = null;
        this.resetHour = null;
        this.repeat = null;
        this.rewards = null;
        this.missedReceiveRelief = null;
        this.missedReceiveReliefVerifyActions = null;
        this.missedReceiveReliefConsumeActions = null;
    }
    UpdateBonusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBonusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBonusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBonusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    UpdateBonusModelMasterRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBonusModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateBonusModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateBonusModelMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getPeriodEventId = function () {
        return this.periodEventId;
    };
    UpdateBonusModelMasterRequest.prototype.setPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    UpdateBonusModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getRepeat = function () {
        return this.repeat;
    };
    UpdateBonusModelMasterRequest.prototype.setRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getRewards = function () {
        return this.rewards;
    };
    UpdateBonusModelMasterRequest.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getMissedReceiveRelief = function () {
        return this.missedReceiveRelief;
    };
    UpdateBonusModelMasterRequest.prototype.setMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getMissedReceiveReliefVerifyActions = function () {
        return this.missedReceiveReliefVerifyActions;
    };
    UpdateBonusModelMasterRequest.prototype.setMissedReceiveReliefVerifyActions = function (missedReceiveReliefVerifyActions) {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withMissedReceiveReliefVerifyActions = function (missedReceiveReliefVerifyActions) {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.getMissedReceiveReliefConsumeActions = function () {
        return this.missedReceiveReliefConsumeActions;
    };
    UpdateBonusModelMasterRequest.prototype.setMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    UpdateBonusModelMasterRequest.prototype.withMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    UpdateBonusModelMasterRequest.fromDict = function (data) {
        return new UpdateBonusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withPeriodEventId(data["periodEventId"])
            .withResetHour(data["resetHour"])
            .withRepeat(data["repeat"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Gs2LoginReward.Reward.fromDict(item);
            }) : [])
            .withMissedReceiveRelief(data["missedReceiveRelief"])
            .withMissedReceiveReliefVerifyActions(data.missedReceiveReliefVerifyActions ?
            data.missedReceiveReliefVerifyActions.map(function (item) {
                return Gs2LoginReward.VerifyAction.fromDict(item);
            }) : [])
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
            data.missedReceiveReliefConsumeActions.map(function (item) {
                return Gs2LoginReward.ConsumeAction.fromDict(item);
            }) : []);
    };
    UpdateBonusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "periodEventId": this.getPeriodEventId(),
            "resetHour": this.getResetHour(),
            "repeat": this.getRepeat(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : [],
            "missedReceiveRelief": this.getMissedReceiveRelief(),
            "missedReceiveReliefVerifyActions": this.getMissedReceiveReliefVerifyActions() ?
                this.getMissedReceiveReliefVerifyActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateBonusModelMasterRequest;
}());
exports.default = UpdateBonusModelMasterRequest;
//# sourceMappingURL=UpdateBonusModelMasterRequest.js.map