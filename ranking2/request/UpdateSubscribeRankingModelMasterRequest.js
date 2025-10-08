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
var UpdateSubscribeRankingModelMasterRequest = /** @class */ (function () {
    function UpdateSubscribeRankingModelMasterRequest() {
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
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
    }
    UpdateSubscribeRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateSubscribeRankingModelMasterRequest.fromDict = function (data) {
        return new UpdateSubscribeRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    UpdateSubscribeRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return UpdateSubscribeRankingModelMasterRequest;
}());
exports.default = UpdateSubscribeRankingModelMasterRequest;
//# sourceMappingURL=UpdateSubscribeRankingModelMasterRequest.js.map