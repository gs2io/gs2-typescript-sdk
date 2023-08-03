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
var Gs2Ranking = tslib_1.__importStar(require("../model"));
var UpdateCategoryModelMasterRequest = /** @class */ (function () {
    function UpdateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
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
        this.additionalScopes = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.ignoreUserIds = null;
        this.generation = null;
    }
    UpdateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    UpdateCategoryModelMasterRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateCategoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    UpdateCategoryModelMasterRequest.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    UpdateCategoryModelMasterRequest.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    UpdateCategoryModelMasterRequest.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getScope = function () {
        return this.scope;
    };
    UpdateCategoryModelMasterRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    UpdateCategoryModelMasterRequest.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getSum = function () {
        return this.sum;
    };
    UpdateCategoryModelMasterRequest.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCalculateFixedTimingHour = function () {
        return this.calculateFixedTimingHour;
    };
    UpdateCategoryModelMasterRequest.prototype.setCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCalculateFixedTimingMinute = function () {
        return this.calculateFixedTimingMinute;
    };
    UpdateCategoryModelMasterRequest.prototype.setCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    UpdateCategoryModelMasterRequest.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getAdditionalScopes = function () {
        return this.additionalScopes;
    };
    UpdateCategoryModelMasterRequest.prototype.setAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    UpdateCategoryModelMasterRequest.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    UpdateCategoryModelMasterRequest.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getIgnoreUserIds = function () {
        return this.ignoreUserIds;
    };
    UpdateCategoryModelMasterRequest.prototype.setIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    UpdateCategoryModelMasterRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    UpdateCategoryModelMasterRequest.fromDict = function (data) {
        return new UpdateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
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
            .withAdditionalScopes(data.additionalScopes ?
            data.additionalScopes.map(function (item) {
                return Gs2Ranking.Scope.fromDict(item);
            }) : [])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withIgnoreUserIds(data.ignoreUserIds ?
            data.ignoreUserIds.map(function (item) {
                return item;
            }) : [])
            .withGeneration(data["generation"]);
    };
    UpdateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
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
            "additionalScopes": this.getAdditionalScopes() ?
                this.getAdditionalScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "ignoreUserIds": this.getIgnoreUserIds() ?
                this.getIgnoreUserIds().map(function (item) {
                    return item;
                }) : [],
            "generation": this.getGeneration(),
        };
    };
    return UpdateCategoryModelMasterRequest;
}());
exports.default = UpdateCategoryModelMasterRequest;
//# sourceMappingURL=UpdateCategoryModelMasterRequest.js.map