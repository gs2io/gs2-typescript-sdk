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
var DisplayItem_1 = (0, tslib_1.__importDefault)(require("./DisplayItem"));
var grnFormat = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}";
var Showcase = /** @class */ (function () {
    function Showcase() {
        this.showcaseId = null;
        this.name = null;
        this.metadata = null;
        this.salesPeriodEventId = null;
        this.displayItems = null;
    }
    Showcase.getRegion = function (grn) {
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
    Showcase.getOwnerId = function (grn) {
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
    Showcase.getNamespaceName = function (grn) {
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
    Showcase.getShowcaseName = function (grn) {
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
    Showcase.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getShowcaseName(grn) == null) {
            return false;
        }
        return true;
    };
    Showcase.createGrn = function (region, ownerId, namespaceName, showcaseName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{showcaseName}', showcaseName !== null && showcaseName !== void 0 ? showcaseName : '');
    };
    Showcase.prototype.getShowcaseId = function () {
        return this.showcaseId;
    };
    Showcase.prototype.setShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    Showcase.prototype.withShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    Showcase.prototype.getName = function () {
        return this.name;
    };
    Showcase.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Showcase.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Showcase.prototype.getMetadata = function () {
        return this.metadata;
    };
    Showcase.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Showcase.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Showcase.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    Showcase.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    Showcase.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    Showcase.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    Showcase.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    Showcase.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    Showcase.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Showcase()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return DisplayItem_1.default.fromDict(item);
            }) : []);
    };
    Showcase.prototype.toDict = function () {
        return {
            "showcaseId": this.getShowcaseId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return Showcase;
}());
exports.default = Showcase;
//# sourceMappingURL=Showcase.js.map