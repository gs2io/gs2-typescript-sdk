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
var SalesItem_1 = (0, tslib_1.__importDefault)(require("./SalesItem"));
var SalesItemGroup_1 = (0, tslib_1.__importDefault)(require("./SalesItemGroup"));
var DisplayItem = /** @class */ (function () {
    function DisplayItem() {
        this.displayItemId = null;
        this.type = null;
        this.salesItem = null;
        this.salesItemGroup = null;
        this.salesPeriodEventId = null;
    }
    DisplayItem.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    DisplayItem.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    DisplayItem.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    DisplayItem.prototype.getType = function () {
        return this.type;
    };
    DisplayItem.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DisplayItem.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DisplayItem.prototype.getSalesItem = function () {
        return this.salesItem;
    };
    DisplayItem.prototype.setSalesItem = function (salesItem) {
        this.salesItem = salesItem;
        return this;
    };
    DisplayItem.prototype.withSalesItem = function (salesItem) {
        this.salesItem = salesItem;
        return this;
    };
    DisplayItem.prototype.getSalesItemGroup = function () {
        return this.salesItemGroup;
    };
    DisplayItem.prototype.setSalesItemGroup = function (salesItemGroup) {
        this.salesItemGroup = salesItemGroup;
        return this;
    };
    DisplayItem.prototype.withSalesItemGroup = function (salesItemGroup) {
        this.salesItemGroup = salesItemGroup;
        return this;
    };
    DisplayItem.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    DisplayItem.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    DisplayItem.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    DisplayItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withType(data["type"])
            .withSalesItem(SalesItem_1.default.fromDict(data["salesItem"]))
            .withSalesItemGroup(SalesItemGroup_1.default.fromDict(data["salesItemGroup"]))
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    };
    DisplayItem.prototype.toDict = function () {
        var _a, _b;
        return {
            "displayItemId": this.getDisplayItemId(),
            "type": this.getType(),
            "salesItem": (_a = this.getSalesItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "salesItemGroup": (_b = this.getSalesItemGroup()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    };
    return DisplayItem;
}());
exports.default = DisplayItem;
//# sourceMappingURL=DisplayItem.js.map