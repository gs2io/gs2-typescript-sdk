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
var DisplayItemMaster_1 = tslib_1.__importDefault(require("./DisplayItemMaster"));
var grnFormat = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}";
var ShowcaseMaster = /** @class */ (function () {
    function ShowcaseMaster() {
        this.showcaseId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.salesPeriodEventId = null;
        this.displayItems = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    ShowcaseMaster.getRegion = function (grn) {
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
    ShowcaseMaster.getOwnerId = function (grn) {
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
    ShowcaseMaster.getNamespaceName = function (grn) {
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
    ShowcaseMaster.getShowcaseName = function (grn) {
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
    ShowcaseMaster.isValid = function (grn) {
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
    ShowcaseMaster.createGrn = function (region, ownerId, namespaceName, showcaseName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{showcaseName}', showcaseName !== null && showcaseName !== void 0 ? showcaseName : '');
    };
    ShowcaseMaster.prototype.getShowcaseId = function () {
        return this.showcaseId;
    };
    ShowcaseMaster.prototype.setShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    ShowcaseMaster.prototype.withShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    ShowcaseMaster.prototype.getName = function () {
        return this.name;
    };
    ShowcaseMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ShowcaseMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ShowcaseMaster.prototype.getDescription = function () {
        return this.description;
    };
    ShowcaseMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    ShowcaseMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ShowcaseMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    ShowcaseMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ShowcaseMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ShowcaseMaster.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    ShowcaseMaster.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    ShowcaseMaster.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    ShowcaseMaster.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    ShowcaseMaster.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    ShowcaseMaster.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    ShowcaseMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ShowcaseMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ShowcaseMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ShowcaseMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ShowcaseMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ShowcaseMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ShowcaseMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseMaster()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return DisplayItemMaster_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ShowcaseMaster.prototype.toDict = function () {
        return {
            "showcaseId": this.getShowcaseId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ShowcaseMaster;
}());
exports.default = ShowcaseMaster;
//# sourceMappingURL=ShowcaseMaster.js.map