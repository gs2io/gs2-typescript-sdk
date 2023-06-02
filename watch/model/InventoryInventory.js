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
var InventoryInventoryStatistics_1 = tslib_1.__importDefault(require("./InventoryInventoryStatistics"));
var InventoryInventoryDistributions_1 = tslib_1.__importDefault(require("./InventoryInventoryDistributions"));
var InventoryItemSet_1 = tslib_1.__importDefault(require("./InventoryItemSet"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:inventory:namespace:{namespaceName}:inventory:{inventoryName}";
var InventoryInventory = /** @class */ (function () {
    function InventoryInventory() {
        this.inventoryId = null;
        this.inventoryName = null;
        this.statistics = null;
        this.distributions = null;
        this.itemSets = null;
    }
    InventoryInventory.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryInventory.isValid = function (grn) {
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
        return true;
    };
    InventoryInventory.createGrn = function (region, ownerId, year, month, day, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    InventoryInventory.prototype.getInventoryId = function () {
        return this.inventoryId;
    };
    InventoryInventory.prototype.setInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    InventoryInventory.prototype.withInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    InventoryInventory.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    InventoryInventory.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryInventory.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryInventory.prototype.getStatistics = function () {
        return this.statistics;
    };
    InventoryInventory.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryInventory.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryInventory.prototype.getDistributions = function () {
        return this.distributions;
    };
    InventoryInventory.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    InventoryInventory.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    InventoryInventory.prototype.getItemSets = function () {
        return this.itemSets;
    };
    InventoryInventory.prototype.setItemSets = function (itemSets) {
        this.itemSets = itemSets;
        return this;
    };
    InventoryInventory.prototype.withItemSets = function (itemSets) {
        this.itemSets = itemSets;
        return this;
    };
    InventoryInventory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withStatistics(InventoryInventoryStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(InventoryInventoryDistributions_1.default.fromDict(data["distributions"]))
            .withItemSets(data.itemSets ?
            data.itemSets.map(function (item) {
                return InventoryItemSet_1.default.fromDict(item);
            }) : []);
    };
    InventoryInventory.prototype.toDict = function () {
        var _a, _b;
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "itemSets": this.getItemSets() ?
                this.getItemSets().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryInventory;
}());
exports.default = InventoryInventory;
//# sourceMappingURL=InventoryInventory.js.map