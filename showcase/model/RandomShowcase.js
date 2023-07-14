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
var RandomDisplayItemModel_1 = tslib_1.__importDefault(require("./RandomDisplayItemModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:random:showcase:{showcaseName}";
var RandomShowcase = /** @class */ (function () {
    function RandomShowcase() {
        this.randomShowcaseId = null;
        this.name = null;
        this.metadata = null;
        this.maximumNumberOfChoice = null;
        this.displayItems = null;
        this.baseTimestamp = null;
        this.resetIntervalHours = null;
        this.salesPeriodEventId = null;
    }
    RandomShowcase.getRegion = function (grn) {
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
    RandomShowcase.getOwnerId = function (grn) {
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
    RandomShowcase.getNamespaceName = function (grn) {
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
    RandomShowcase.getShowcaseName = function (grn) {
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
    RandomShowcase.isValid = function (grn) {
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
    RandomShowcase.createGrn = function (region, ownerId, namespaceName, showcaseName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{showcaseName}', showcaseName !== null && showcaseName !== void 0 ? showcaseName : '');
    };
    RandomShowcase.prototype.getRandomShowcaseId = function () {
        return this.randomShowcaseId;
    };
    RandomShowcase.prototype.setRandomShowcaseId = function (randomShowcaseId) {
        this.randomShowcaseId = randomShowcaseId;
        return this;
    };
    RandomShowcase.prototype.withRandomShowcaseId = function (randomShowcaseId) {
        this.randomShowcaseId = randomShowcaseId;
        return this;
    };
    RandomShowcase.prototype.getName = function () {
        return this.name;
    };
    RandomShowcase.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RandomShowcase.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RandomShowcase.prototype.getMetadata = function () {
        return this.metadata;
    };
    RandomShowcase.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomShowcase.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomShowcase.prototype.getMaximumNumberOfChoice = function () {
        return this.maximumNumberOfChoice;
    };
    RandomShowcase.prototype.setMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    RandomShowcase.prototype.withMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    RandomShowcase.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    RandomShowcase.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    RandomShowcase.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    RandomShowcase.prototype.getBaseTimestamp = function () {
        return this.baseTimestamp;
    };
    RandomShowcase.prototype.setBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    RandomShowcase.prototype.withBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    RandomShowcase.prototype.getResetIntervalHours = function () {
        return this.resetIntervalHours;
    };
    RandomShowcase.prototype.setResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    RandomShowcase.prototype.withResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    RandomShowcase.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    RandomShowcase.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    RandomShowcase.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    RandomShowcase.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomShowcase()
            .withRandomShowcaseId(data["randomShowcaseId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMaximumNumberOfChoice(data["maximumNumberOfChoice"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return RandomDisplayItemModel_1.default.fromDict(item);
            }) : [])
            .withBaseTimestamp(data["baseTimestamp"])
            .withResetIntervalHours(data["resetIntervalHours"])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    };
    RandomShowcase.prototype.toDict = function () {
        return {
            "randomShowcaseId": this.getRandomShowcaseId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "maximumNumberOfChoice": this.getMaximumNumberOfChoice(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "baseTimestamp": this.getBaseTimestamp(),
            "resetIntervalHours": this.getResetIntervalHours(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    };
    return RandomShowcase;
}());
exports.default = RandomShowcase;
//# sourceMappingURL=RandomShowcase.js.map