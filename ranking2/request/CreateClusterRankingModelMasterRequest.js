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
var CreateClusterRankingModelMasterRequest = /** @class */ (function () {
    function CreateClusterRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
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
    CreateClusterRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateClusterRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateClusterRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateClusterRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateClusterRankingModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateClusterRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateClusterRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getClusterType = function () {
        return this.clusterType;
    };
    CreateClusterRankingModelMasterRequest.prototype.setClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CreateClusterRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CreateClusterRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    CreateClusterRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CreateClusterRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    CreateClusterRankingModelMasterRequest.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getRewardCalculationIndex = function () {
        return this.rewardCalculationIndex;
    };
    CreateClusterRankingModelMasterRequest.prototype.setRewardCalculationIndex = function (rewardCalculationIndex) {
        this.rewardCalculationIndex = rewardCalculationIndex;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withRewardCalculationIndex = function (rewardCalculationIndex) {
        this.rewardCalculationIndex = rewardCalculationIndex;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CreateClusterRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CreateClusterRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateClusterRankingModelMasterRequest.fromDict = function (data) {
        return new CreateClusterRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
    CreateClusterRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateClusterRankingModelMasterRequest;
}());
exports.default = CreateClusterRankingModelMasterRequest;
//# sourceMappingURL=CreateClusterRankingModelMasterRequest.js.map