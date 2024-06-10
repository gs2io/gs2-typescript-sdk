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
var CreateGlobalRankingModelMasterRequest = /** @class */ (function () {
    function CreateGlobalRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
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
    CreateGlobalRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CreateGlobalRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateGlobalRankingModelMasterRequest.fromDict = function (data) {
        return new CreateGlobalRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return Gs2Ranking2.RankingReward.fromDict(item);
            }) : [])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    CreateGlobalRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : [],
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return CreateGlobalRankingModelMasterRequest;
}());
exports.default = CreateGlobalRankingModelMasterRequest;
//# sourceMappingURL=CreateGlobalRankingModelMasterRequest.js.map