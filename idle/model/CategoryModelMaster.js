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
var AcquireActionList_1 = tslib_1.__importDefault(require("./AcquireActionList"));
var grnFormat = "grn:gs2:{region}:{ownerId}:idle:{namespaceName}:model:{categoryName}";
var CategoryModelMaster = /** @class */ (function () {
    function CategoryModelMaster() {
        this.categoryModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.rewardIntervalMinutes = null;
        this.defaultMaximumIdleMinutes = null;
        this.acquireActions = null;
        this.idlePeriodScheduleId = null;
        this.receivePeriodScheduleId = null;
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
    CategoryModelMaster.prototype.getRewardIntervalMinutes = function () {
        return this.rewardIntervalMinutes;
    };
    CategoryModelMaster.prototype.setRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CategoryModelMaster.prototype.withRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CategoryModelMaster.prototype.getDefaultMaximumIdleMinutes = function () {
        return this.defaultMaximumIdleMinutes;
    };
    CategoryModelMaster.prototype.setDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CategoryModelMaster.prototype.withDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CategoryModelMaster.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CategoryModelMaster.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CategoryModelMaster.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CategoryModelMaster.prototype.getIdlePeriodScheduleId = function () {
        return this.idlePeriodScheduleId;
    };
    CategoryModelMaster.prototype.setIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CategoryModelMaster.prototype.withIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CategoryModelMaster.prototype.getReceivePeriodScheduleId = function () {
        return this.receivePeriodScheduleId;
    };
    CategoryModelMaster.prototype.setReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    CategoryModelMaster.prototype.withReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
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
            .withRewardIntervalMinutes(data["rewardIntervalMinutes"])
            .withDefaultMaximumIdleMinutes(data["defaultMaximumIdleMinutes"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireActionList_1.default.fromDict(item);
            }) : [])
            .withIdlePeriodScheduleId(data["idlePeriodScheduleId"])
            .withReceivePeriodScheduleId(data["receivePeriodScheduleId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    CategoryModelMaster.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "rewardIntervalMinutes": this.getRewardIntervalMinutes(),
            "defaultMaximumIdleMinutes": this.getDefaultMaximumIdleMinutes(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "idlePeriodScheduleId": this.getIdlePeriodScheduleId(),
            "receivePeriodScheduleId": this.getReceivePeriodScheduleId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return CategoryModelMaster;
}());
exports.default = CategoryModelMaster;
//# sourceMappingURL=CategoryModelMaster.js.map