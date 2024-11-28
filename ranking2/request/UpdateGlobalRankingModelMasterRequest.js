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
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var UpdateGlobalRankingModelMasterRequest = /** @class */ (function () {
    function UpdateGlobalRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.rankingRewards = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
    }
    UpdateGlobalRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateGlobalRankingModelMasterRequest.fromDict = function (data) {
        return new UpdateGlobalRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return Gs2Ranking2.RankingReward.fromDict(item);
            }) : null)
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    UpdateGlobalRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return UpdateGlobalRankingModelMasterRequest;
}());
exports.default = UpdateGlobalRankingModelMasterRequest;
//# sourceMappingURL=UpdateGlobalRankingModelMasterRequest.js.map