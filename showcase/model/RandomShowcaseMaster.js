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
var Gs2Showcase = tslib_1.__importStar(require("../../showcase/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:random:showcase:{showcaseName}";
var RandomShowcaseMaster = /** @class */ (function () {
    function RandomShowcaseMaster() {
        this.showcaseId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.maximumNumberOfChoice = null;
        this.displayItems = null;
        this.baseTimestamp = null;
        this.resetIntervalHours = null;
        this.salesPeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    RandomShowcaseMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RandomShowcaseMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RandomShowcaseMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RandomShowcaseMaster.getShowcaseName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RandomShowcaseMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getShowcaseName(grn) == null || this.getShowcaseName(grn) === '') {
            return false;
        }
        return true;
    };
    RandomShowcaseMaster.createGrn = function (region, ownerId, namespaceName, showcaseName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{showcaseName}', showcaseName !== null && showcaseName !== void 0 ? showcaseName : '');
    };
    RandomShowcaseMaster.prototype.getShowcaseId = function () {
        return this.showcaseId;
    };
    RandomShowcaseMaster.prototype.setShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    RandomShowcaseMaster.prototype.withShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    RandomShowcaseMaster.prototype.getName = function () {
        return this.name;
    };
    RandomShowcaseMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RandomShowcaseMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RandomShowcaseMaster.prototype.getDescription = function () {
        return this.description;
    };
    RandomShowcaseMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RandomShowcaseMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RandomShowcaseMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RandomShowcaseMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomShowcaseMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomShowcaseMaster.prototype.getMaximumNumberOfChoice = function () {
        return this.maximumNumberOfChoice;
    };
    RandomShowcaseMaster.prototype.setMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    RandomShowcaseMaster.prototype.withMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    RandomShowcaseMaster.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    RandomShowcaseMaster.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    RandomShowcaseMaster.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    RandomShowcaseMaster.prototype.getBaseTimestamp = function () {
        return this.baseTimestamp;
    };
    RandomShowcaseMaster.prototype.setBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    RandomShowcaseMaster.prototype.withBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    RandomShowcaseMaster.prototype.getResetIntervalHours = function () {
        return this.resetIntervalHours;
    };
    RandomShowcaseMaster.prototype.setResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    RandomShowcaseMaster.prototype.withResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    RandomShowcaseMaster.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    RandomShowcaseMaster.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    RandomShowcaseMaster.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    RandomShowcaseMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RandomShowcaseMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RandomShowcaseMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RandomShowcaseMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RandomShowcaseMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RandomShowcaseMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RandomShowcaseMaster.prototype.getRevision = function () {
        return this.revision;
    };
    RandomShowcaseMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RandomShowcaseMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RandomShowcaseMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomShowcaseMaster()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMaximumNumberOfChoice(data["maximumNumberOfChoice"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return Gs2Showcase.RandomDisplayItemModel.fromDict(item);
            }) : null)
            .withBaseTimestamp(data["baseTimestamp"])
            .withResetIntervalHours(data["resetIntervalHours"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    RandomShowcaseMaster.prototype.toDict = function () {
        return {
            "showcaseId": this.getShowcaseId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "maximumNumberOfChoice": this.getMaximumNumberOfChoice(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "baseTimestamp": this.getBaseTimestamp(),
            "resetIntervalHours": this.getResetIntervalHours(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return RandomShowcaseMaster;
}());
exports.default = RandomShowcaseMaster;
//# sourceMappingURL=RandomShowcaseMaster.js.map