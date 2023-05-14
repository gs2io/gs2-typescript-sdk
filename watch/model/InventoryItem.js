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
var InventoryItemStatistics_1 = tslib_1.__importDefault(require("./InventoryItemStatistics"));
var InventoryItemDistribution_1 = tslib_1.__importDefault(require("./InventoryItemDistribution"));
var InventoryItem = /** @class */ (function () {
    function InventoryItem() {
        this.itemName = null;
        this.statistics = null;
        this.distribution = null;
    }
    InventoryItem.prototype.getItemName = function () {
        return this.itemName;
    };
    InventoryItem.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryItem.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryItem.prototype.getStatistics = function () {
        return this.statistics;
    };
    InventoryItem.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItem.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItem.prototype.getDistribution = function () {
        return this.distribution;
    };
    InventoryItem.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryItem.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItem()
            .withItemName(data["itemName"])
            .withStatistics(InventoryItemStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return InventoryItemDistribution_1.default.fromDict(item);
            }) : []);
    };
    InventoryItem.prototype.toDict = function () {
        var _a;
        return {
            "itemName": this.getItemName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryItem;
}());
exports.default = InventoryItem;
//# sourceMappingURL=InventoryItem.js.map