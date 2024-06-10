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
var CreateSubscribeRankingModelMasterRequest = /** @class */ (function () {
    function CreateSubscribeRankingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.scoreTtlDays = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
    }
    CreateSubscribeRankingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getScoreTtlDays = function () {
        return this.scoreTtlDays;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setScoreTtlDays = function (scoreTtlDays) {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withScoreTtlDays = function (scoreTtlDays) {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateSubscribeRankingModelMasterRequest.fromDict = function (data) {
        return new CreateSubscribeRankingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withScoreTtlDays(data["scoreTtlDays"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    CreateSubscribeRankingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "scoreTtlDays": this.getScoreTtlDays(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return CreateSubscribeRankingModelMasterRequest;
}());
exports.default = CreateSubscribeRankingModelMasterRequest;
//# sourceMappingURL=CreateSubscribeRankingModelMasterRequest.js.map