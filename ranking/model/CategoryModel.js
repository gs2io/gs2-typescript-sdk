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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:categoryModel:{categoryName}";
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.categoryModelId = null;
        this.name = null;
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
    }
    CategoryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModel.getCategoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        return true;
    };
    CategoryModel.createGrn = function (region, ownerId, namespaceName, categoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{categoryName}', categoryName !== null && categoryName !== void 0 ? categoryName : '');
    };
    CategoryModel.prototype.getCategoryModelId = function () {
        return this.categoryModelId;
    };
    CategoryModel.prototype.setCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModel.prototype.withCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModel.prototype.getName = function () {
        return this.name;
    };
    CategoryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CategoryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CategoryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    CategoryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CategoryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CategoryModel.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    CategoryModel.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CategoryModel.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    CategoryModel.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    CategoryModel.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CategoryModel.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    CategoryModel.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    CategoryModel.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CategoryModel.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    CategoryModel.prototype.getScope = function () {
        return this.scope;
    };
    CategoryModel.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CategoryModel.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CategoryModel.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    CategoryModel.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CategoryModel.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    CategoryModel.prototype.getCalculateFixedTimingHour = function () {
        return this.calculateFixedTimingHour;
    };
    CategoryModel.prototype.setCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CategoryModel.prototype.withCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    CategoryModel.prototype.getCalculateFixedTimingMinute = function () {
        return this.calculateFixedTimingMinute;
    };
    CategoryModel.prototype.setCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CategoryModel.prototype.withCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    CategoryModel.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    CategoryModel.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CategoryModel.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    CategoryModel.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    CategoryModel.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CategoryModel.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    CategoryModel.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    CategoryModel.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CategoryModel.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    CategoryModel.prototype.getGeneration = function () {
        return this.generation;
    };
    CategoryModel.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CategoryModel.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    CategoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withName(data["name"])
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
            .withGeneration(data["generation"]);
    };
    CategoryModel.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
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
        };
    };
    return CategoryModel;
}());
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map