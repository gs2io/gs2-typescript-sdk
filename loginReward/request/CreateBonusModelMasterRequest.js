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
var CreateBonusModelMasterRequest = /** @class */ (function () {
    function CreateBonusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.mode = null;
        this.periodEventId = null;
        this.resetHour = null;
        this.repeat = null;
        this.rewards = null;
        this.missedReceiveRelief = null;
        this.missedReceiveReliefConsumeActions = null;
    }
    CreateBonusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBonusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBonusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateBonusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateBonusModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBonusModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateBonusModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    CreateBonusModelMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getPeriodEventId = function () {
        return this.periodEventId;
    };
    CreateBonusModelMasterRequest.prototype.setPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    CreateBonusModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getRepeat = function () {
        return this.repeat;
    };
    CreateBonusModelMasterRequest.prototype.setRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getRewards = function () {
        return this.rewards;
    };
    CreateBonusModelMasterRequest.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getMissedReceiveRelief = function () {
        return this.missedReceiveRelief;
    };
    CreateBonusModelMasterRequest.prototype.setMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.getMissedReceiveReliefConsumeActions = function () {
        return this.missedReceiveReliefConsumeActions;
    };
    CreateBonusModelMasterRequest.prototype.setMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    CreateBonusModelMasterRequest.prototype.withMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    CreateBonusModelMasterRequest.fromDict = function (data) {
        return new CreateBonusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
            data.missedReceiveReliefConsumeActions.map(function (item) {
                return Gs2LoginReward.ConsumeAction.fromDict(item);
            }) : []);
    };
    CreateBonusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreateBonusModelMasterRequest;
}());
exports.default = CreateBonusModelMasterRequest;
//# sourceMappingURL=CreateBonusModelMasterRequest.js.map