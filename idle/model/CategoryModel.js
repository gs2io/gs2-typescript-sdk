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
var Gs2Idle = tslib_1.__importStar(require("../../idle/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:idle:{namespaceName}:model:{categoryName}";
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.categoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.rewardIntervalMinutes = null;
        this.defaultMaximumIdleMinutes = null;
        this.rewardResetMode = null;
        this.acquireActions = null;
        this.idlePeriodScheduleId = null;
        this.receivePeriodScheduleId = null;
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
    CategoryModel.prototype.getRewardIntervalMinutes = function () {
        return this.rewardIntervalMinutes;
    };
    CategoryModel.prototype.setRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CategoryModel.prototype.withRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CategoryModel.prototype.getDefaultMaximumIdleMinutes = function () {
        return this.defaultMaximumIdleMinutes;
    };
    CategoryModel.prototype.setDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CategoryModel.prototype.withDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CategoryModel.prototype.getRewardResetMode = function () {
        return this.rewardResetMode;
    };
    CategoryModel.prototype.setRewardResetMode = function (rewardResetMode) {
        this.rewardResetMode = rewardResetMode;
        return this;
    };
    CategoryModel.prototype.withRewardResetMode = function (rewardResetMode) {
        this.rewardResetMode = rewardResetMode;
        return this;
    };
    CategoryModel.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CategoryModel.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CategoryModel.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CategoryModel.prototype.getIdlePeriodScheduleId = function () {
        return this.idlePeriodScheduleId;
    };
    CategoryModel.prototype.setIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CategoryModel.prototype.withIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CategoryModel.prototype.getReceivePeriodScheduleId = function () {
        return this.receivePeriodScheduleId;
    };
    CategoryModel.prototype.setReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    CategoryModel.prototype.withReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
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
            .withRewardIntervalMinutes(data["rewardIntervalMinutes"])
            .withDefaultMaximumIdleMinutes(data["defaultMaximumIdleMinutes"])
            .withRewardResetMode(data["rewardResetMode"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Idle.AcquireActionList.fromDict(item);
            }) : null)
            .withIdlePeriodScheduleId(data["idlePeriodScheduleId"])
            .withReceivePeriodScheduleId(data["receivePeriodScheduleId"]);
    };
    CategoryModel.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "rewardIntervalMinutes": this.getRewardIntervalMinutes(),
            "defaultMaximumIdleMinutes": this.getDefaultMaximumIdleMinutes(),
            "rewardResetMode": this.getRewardResetMode(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "idlePeriodScheduleId": this.getIdlePeriodScheduleId(),
            "receivePeriodScheduleId": this.getReceivePeriodScheduleId(),
        };
    };
    return CategoryModel;
}());
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map