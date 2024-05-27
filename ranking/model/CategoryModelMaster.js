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
var Scope_1 = tslib_1.__importDefault(require("./Scope"));
var GlobalRankingSetting_1 = tslib_1.__importDefault(require("./GlobalRankingSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:categoryModelMaster:{categoryName}";
var CategoryModelMaster = /** @class */ (function () {
    function CategoryModelMaster() {
        this.categoryModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.scope = null;
        this.globalRankingSetting = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.uniqueByUserId = null;
        this.calculateFixedTimingHour = null;
        this.calculateFixedTimingMinute = null;
        this.calculateIntervalMinutes = null;
        this.additionalScopes = null;
        this.ignoreUserIds = null;
        this.generation = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    CategoryModelMaster.getRegion = function (grn) {
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
    CategoryModelMaster.getOwnerId = function (grn) {
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
    CategoryModelMaster.getNamespaceName = function (grn) {
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
    CategoryModelMaster.getCategoryName = function (grn) {
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
    CategoryModelMaster.isValid = function (grn) {
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
    CategoryModelMaster.createGrn = function (region, ownerId, namespaceName, categoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{categoryName}', categoryName !== null && categoryName !== void 0 ? categoryName : '');
    };
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
    CategoryModelMaster.prototype.getSum = function () {
        return this.sum;
    };
    CategoryModelMaster.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    CategoryModelMaster.prototype.withSum = function (sum) {
        this.sum = sum;
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
    CategoryModelMaster.prototype.getGlobalRankingSetting = function () {
        return this.globalRankingSetting;
    };
    CategoryModelMaster.prototype.setGlobalRankingSetting = function (globalRankingSetting) {
        this.globalRankingSetting = globalRankingSetting;
        return this;
    };
    CategoryModelMaster.prototype.withGlobalRankingSetting = function (globalRankingSetting) {
        this.globalRankingSetting = globalRankingSetting;
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
    /** @deprecated */
    CategoryModelMaster.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getCalculateFixedTimingHour = function () {
        return this.calculateFixedTimingHour;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withCalculateFixedTimingHour = function (calculateFixedTimingHour) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getCalculateFixedTimingMinute = function () {
        return this.calculateFixedTimingMinute;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withCalculateFixedTimingMinute = function (calculateFixedTimingMinute) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getAdditionalScopes = function () {
        return this.additionalScopes;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getIgnoreUserIds = function () {
        return this.ignoreUserIds;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.withIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.getGeneration = function () {
        return this.generation;
    };
    /** @deprecated */
    CategoryModelMaster.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    /** @deprecated */
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
    CategoryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    CategoryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CategoryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
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
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withScope(data["scope"])
            .withGlobalRankingSetting(GlobalRankingSetting_1.default.fromDict(data["globalRankingSetting"]))
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateFixedTimingHour(data["calculateFixedTimingHour"])
            .withCalculateFixedTimingMinute(data["calculateFixedTimingMinute"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withAdditionalScopes(data.additionalScopes ?
            data.additionalScopes.map(function (item) {
                return Scope_1.default.fromDict(item);
            }) : [])
            .withIgnoreUserIds(data.ignoreUserIds ?
            data.ignoreUserIds.map(function (item) {
                return item;
            }) : [])
            .withGeneration(data["generation"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    CategoryModelMaster.prototype.toDict = function () {
        var _a;
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "scope": this.getScope(),
            "globalRankingSetting": (_a = this.getGlobalRankingSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateFixedTimingHour": this.getCalculateFixedTimingHour(),
            "calculateFixedTimingMinute": this.getCalculateFixedTimingMinute(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "additionalScopes": this.getAdditionalScopes() ?
                this.getAdditionalScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "ignoreUserIds": this.getIgnoreUserIds() ?
                this.getIgnoreUserIds().map(function (item) {
                    return item;
                }) : [],
            "generation": this.getGeneration(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return CategoryModelMaster;
}());
exports.default = CategoryModelMaster;
//# sourceMappingURL=CategoryModelMaster.js.map