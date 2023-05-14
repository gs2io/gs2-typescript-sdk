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
var InventoryItem_1 = tslib_1.__importDefault(require("./InventoryItem"));
var InventoryInventory = /** @class */ (function () {
    function InventoryInventory() {
        this.inventoryName = null;
        this.statistics = null;
        this.item = null;
    }
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
    InventoryInventory.prototype.getItem = function () {
        return this.item;
    };
    InventoryInventory.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    InventoryInventory.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    InventoryInventory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventory()
            .withInventoryName(data["inventoryName"])
            .withStatistics(data.statistics ?
            data.statistics.map(function (item) {
                return InventoryInventoryStatistics_1.default.fromDict(item);
            }) : [])
            .withItem(data.item ?
            data.item.map(function (item) {
                return InventoryItem_1.default.fromDict(item);
            }) : []);
    };
    InventoryInventory.prototype.toDict = function () {
        return {
            "inventoryName": this.getInventoryName(),
            "statistics": this.getStatistics() ?
                this.getStatistics().map(function (item) {
                    return item.toDict();
                }) : [],
            "item": this.getItem() ?
                this.getItem().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryInventory;
}());
exports.default = InventoryInventory;
//# sourceMappingURL=InventoryInventory.js.map