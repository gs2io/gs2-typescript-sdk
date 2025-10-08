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
var DisplayItemMaster = /** @class */ (function () {
    function DisplayItemMaster() {
        this.displayItemId = null;
        this.type = null;
        this.salesItemName = null;
        this.salesItemGroupName = null;
        this.salesPeriodEventId = null;
        this.revision = null;
    }
    DisplayItemMaster.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    DisplayItemMaster.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    DisplayItemMaster.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    DisplayItemMaster.prototype.getType = function () {
        return this.type;
    };
    DisplayItemMaster.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DisplayItemMaster.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DisplayItemMaster.prototype.getSalesItemName = function () {
        return this.salesItemName;
    };
    DisplayItemMaster.prototype.setSalesItemName = function (salesItemName) {
        this.salesItemName = salesItemName;
        return this;
    };
    DisplayItemMaster.prototype.withSalesItemName = function (salesItemName) {
        this.salesItemName = salesItemName;
        return this;
    };
    DisplayItemMaster.prototype.getSalesItemGroupName = function () {
        return this.salesItemGroupName;
    };
    DisplayItemMaster.prototype.setSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    DisplayItemMaster.prototype.withSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    DisplayItemMaster.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    DisplayItemMaster.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    DisplayItemMaster.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    DisplayItemMaster.prototype.getRevision = function () {
        return this.revision;
    };
    DisplayItemMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DisplayItemMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DisplayItemMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DisplayItemMaster()
            .withDisplayItemId(data["displayItemId"])
            .withType(data["type"])
            .withSalesItemName(data["salesItemName"])
            .withSalesItemGroupName(data["salesItemGroupName"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withRevision(data["revision"]);
    };
    DisplayItemMaster.prototype.toDict = function () {
        return {
            "displayItemId": this.getDisplayItemId(),
            "type": this.getType(),
            "salesItemName": this.getSalesItemName(),
            "salesItemGroupName": this.getSalesItemGroupName(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "revision": this.getRevision(),
        };
    };
    return DisplayItemMaster;
}());
exports.default = DisplayItemMaster;
//# sourceMappingURL=DisplayItemMaster.js.map