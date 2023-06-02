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
var InventoryItemSetStatistics_1 = tslib_1.__importDefault(require("./InventoryItemSetStatistics"));
var InventoryItemSetDistributions_1 = tslib_1.__importDefault(require("./InventoryItemSetDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:inventory:namespace:{namespaceName}:inventory:{inventoryName}:itemSet:{itemSetName}:{itemName}";
var InventoryItemSet = /** @class */ (function () {
    function InventoryItemSet() {
        this.itemSetId = null;
        this.itemName = null;
        this.itemSetName = null;
        this.statistics = null;
        this.distributions = null;
    }
    InventoryItemSet.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getItemSetName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '(.*)')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.getItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryItemSet.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getInventoryName(grn) == null || this.getInventoryName(grn) === '') {
            return false;
        }
        if (this.getItemSetName(grn) == null || this.getItemSetName(grn) === '') {
            return false;
        }
        if (this.getItemName(grn) == null || this.getItemName(grn) === '') {
            return false;
        }
        return true;
    };
    InventoryItemSet.createGrn = function (region, ownerId, year, month, day, namespaceName, inventoryName, itemSetName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemSetName}', itemSetName !== null && itemSetName !== void 0 ? itemSetName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
    InventoryItemSet.prototype.getItemSetId = function () {
        return this.itemSetId;
    };
    InventoryItemSet.prototype.setItemSetId = function (itemSetId) {
        this.itemSetId = itemSetId;
        return this;
    };
    InventoryItemSet.prototype.withItemSetId = function (itemSetId) {
        this.itemSetId = itemSetId;
        return this;
    };
    InventoryItemSet.prototype.getItemName = function () {
        return this.itemName;
    };
    InventoryItemSet.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryItemSet.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryItemSet.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    InventoryItemSet.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    InventoryItemSet.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    InventoryItemSet.prototype.getStatistics = function () {
        return this.statistics;
    };
    InventoryItemSet.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItemSet.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItemSet.prototype.getDistributions = function () {
        return this.distributions;
    };
    InventoryItemSet.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    InventoryItemSet.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    InventoryItemSet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSet()
            .withItemSetId(data["itemSetId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withStatistics(InventoryItemSetStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(InventoryItemSetDistributions_1.default.fromDict(data["distributions"]));
    };
    InventoryItemSet.prototype.toDict = function () {
        var _a, _b;
        return {
            "itemSetId": this.getItemSetId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return InventoryItemSet;
}());
exports.default = InventoryItemSet;
//# sourceMappingURL=InventoryItemSet.js.map