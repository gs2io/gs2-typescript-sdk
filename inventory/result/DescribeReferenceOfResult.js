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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var DescribeReferenceOfResult = /** @class */ (function () {
    function DescribeReferenceOfResult() {
        this.items = null;
        this.itemSet = null;
        this.itemModel = null;
        this.inventory = null;
    }
    DescribeReferenceOfResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeReferenceOfResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeReferenceOfResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeReferenceOfResult.prototype.getItemSet = function () {
        return this.itemSet;
    };
    DescribeReferenceOfResult.prototype.setItemSet = function (itemSet) {
        this.itemSet = itemSet;
        return this;
    };
    DescribeReferenceOfResult.prototype.withItemSet = function (itemSet) {
        this.itemSet = itemSet;
        return this;
    };
    DescribeReferenceOfResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    DescribeReferenceOfResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    DescribeReferenceOfResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    DescribeReferenceOfResult.prototype.getInventory = function () {
        return this.inventory;
    };
    DescribeReferenceOfResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    DescribeReferenceOfResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    DescribeReferenceOfResult.fromDict = function (data) {
        return new DescribeReferenceOfResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return item;
            }) : [])
            .withItemSet(Gs2Inventory.ItemSet.fromDict(data["itemSet"]))
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]));
    };
    DescribeReferenceOfResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item;
                }) : [],
            "itemSet": (_a = this.getItemSet()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "itemModel": (_b = this.getItemModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "inventory": (_c = this.getInventory()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return DescribeReferenceOfResult;
}());
exports.default = DescribeReferenceOfResult;
//# sourceMappingURL=DescribeReferenceOfResult.js.map