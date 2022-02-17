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
var CategoryModelMaster = /** @class */ (function () {
    function CategoryModelMaster() {
        this.categoryModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.orderDirection = null;
        this.scope = null;
        this.uniqueByUserId = null;
        this.calculateFixedTimingHour = null;
        this.calculateFixedTimingMinute = null;
        this.calculateIntervalMinutes = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.generation = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    CategoryModelMaster.prototype.getCategoryModelId = function () {
        return this.categoryModelId;
    };
    CategoryModelMaster.prototype.setCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModelMaster.prototype.withCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModelMaster.prototype.getName = function () {
        return this.name;
    };
    CategoryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CategoryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CategoryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    CategoryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CategoryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CategoryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    CategoryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CategoryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CategoryModelMaster.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CategoryModelMaster.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CategoryModelMaster.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CategoryModelMaster.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CategoryModelMaster.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CategoryModelMaster.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CategoryModelMaster.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CategoryModelMaster.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CategoryModelMaster.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CategoryModelMaster.prototype.getScope = function () {
        return this.scope;
    };
    CategoryModelMaster.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CategoryModelMaster.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CategoryModelMaster.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    CategoryModelMaster.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CategoryModelMaster.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CategoryModelMaster.prototype.getCalculateFixedTimingHour = function () {
        return this.calculateFixedTimingHour;
    };
    CategoryModelMaster.prototype.setCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CategoryModelMaster.prototype.withCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CategoryModelMaster.prototype.getCalculateFixedTimingMinute = function () {
        return this.calculateFixedTimingMinute;
    };
    CategoryModelMaster.prototype.setCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CategoryModelMaster.prototype.withCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CategoryModelMaster.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    CategoryModelMaster.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CategoryModelMaster.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CategoryModelMaster.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CategoryModelMaster.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CategoryModelMaster.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CategoryModelMaster.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CategoryModelMaster.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CategoryModelMaster.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CategoryModelMaster.prototype.getGeneration = function () {
        return this.generation;
    };
    CategoryModelMaster.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CategoryModelMaster.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CategoryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CategoryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CategoryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CategoryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CategoryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CategoryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CategoryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModelMaster()
            .withCategoryModelId(data["categoryModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withOrderDirection(data["orderDirection"])
            .withScope(data["scope"])
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateFixedTimingHour(data["calculateFixedTimingHour"])
            .withCalculateFixedTimingMinute(data["calculateFixedTimingMinute"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withGeneration(data["generation"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    CategoryModelMaster.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "orderDirection": this.getOrderDirection(),
            "scope": this.getScope(),
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateFixedTimingHour": this.getCalculateFixedTimingHour(),
            "calculateFixedTimingMinute": this.getCalculateFixedTimingMinute(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "generation": this.getGeneration(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return CategoryModelMaster;
}());
export default CategoryModelMaster;
//# sourceMappingURL=CategoryModelMaster.js.map