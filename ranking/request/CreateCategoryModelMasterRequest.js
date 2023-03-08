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
var CreateCategoryModelMasterRequest = /** @class */ (function () {
    function CreateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.orderDirection = null;
        this.scope = null;
        this.uniqueByUserId = null;
        this.sum = null;
        this.calculateFixedTimingHour = null;
        this.calculateFixedTimingMinute = null;
        this.calculateIntervalMinutes = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.generation = null;
    }
    CreateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateCategoryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateCategoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CreateCategoryModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CreateCategoryModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CreateCategoryModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getScope = function () {
        return this.scope;
    };
    CreateCategoryModelMasterRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    CreateCategoryModelMasterRequest.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    CreateCategoryModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getCalculateFixedTimingHour = function () {
        return this.calculateFixedTimingHour;
    };
    CreateCategoryModelMasterRequest.prototype.setCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getCalculateFixedTimingMinute = function () {
        return this.calculateFixedTimingMinute;
    };
    CreateCategoryModelMasterRequest.prototype.setCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    CreateCategoryModelMasterRequest.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CreateCategoryModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CreateCategoryModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    CreateCategoryModelMasterRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CreateCategoryModelMasterRequest.fromDict = function (data) {
        return new CreateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withOrderDirection(data["orderDirection"])
            .withScope(data["scope"])
            .withUniqueByUserId(data["uniqueByUserId"])
            .withSum(data["sum"])
            .withCalculateFixedTimingHour(data["calculateFixedTimingHour"])
            .withCalculateFixedTimingMinute(data["calculateFixedTimingMinute"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withGeneration(data["generation"]);
    };
    CreateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "orderDirection": this.getOrderDirection(),
            "scope": this.getScope(),
            "uniqueByUserId": this.getUniqueByUserId(),
            "sum": this.getSum(),
            "calculateFixedTimingHour": this.getCalculateFixedTimingHour(),
            "calculateFixedTimingMinute": this.getCalculateFixedTimingMinute(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "generation": this.getGeneration(),
        };
    };
    return CreateCategoryModelMasterRequest;
}());
exports.default = CreateCategoryModelMasterRequest;
//# sourceMappingURL=CreateCategoryModelMasterRequest.js.map