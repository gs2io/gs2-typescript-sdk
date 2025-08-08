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
var UpdateClusterRankingModelMasterRequest = /** @class */ (function () {
    function UpdateClusterRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.description = null;
        this.metadata = null;
        this.clusterType = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.rankingRewards = null;
        this.rewardCalculationIndex = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
    }
    UpdateClusterRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getClusterType = function () {
        return this.clusterType;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getRewardCalculationIndex = function () {
        return this.rewardCalculationIndex;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setRewardCalculationIndex = function (rewardCalculationIndex) {
        this.rewardCalculationIndex = rewardCalculationIndex;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withRewardCalculationIndex = function (rewardCalculationIndex) {
        this.rewardCalculationIndex = rewardCalculationIndex;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    UpdateClusterRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateClusterRankingModelMasterRequest.fromDict = function (data) {
        return new UpdateClusterRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withClusterType(data["clusterType"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return Gs2Ranking2.RankingReward.fromDict(item);
            }) : null)
            .withRewardCalculationIndex(data["rewardCalculationIndex"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    UpdateClusterRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "clusterType": this.getClusterType(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "rewardCalculationIndex": this.getRewardCalculationIndex(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return UpdateClusterRankingModelMasterRequest;
}());
exports.default = UpdateClusterRankingModelMasterRequest;
//# sourceMappingURL=UpdateClusterRankingModelMasterRequest.js.map