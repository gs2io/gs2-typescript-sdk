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
var GetItemSetResult = /** @class */ (function () {
    function GetItemSetResult() {
        this.items = null;
        this.itemModel = null;
        this.inventory = null;
    }
    GetItemSetResult.prototype.getItems = function () {
        return this.items;
    };
    GetItemSetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    GetItemSetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    GetItemSetResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    GetItemSetResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetItemSetResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetItemSetResult.prototype.getInventory = function () {
        return this.inventory;
    };
    GetItemSetResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetItemSetResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetItemSetResult.fromDict = function (data) {
        return new GetItemSetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.ItemSet.fromDict(item);
            }) : null)
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]));
    };
    GetItemSetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "itemModel": (_a = this.getItemModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "inventory": (_b = this.getInventory()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetItemSetResult;
}());
exports.default = GetItemSetResult;
//# sourceMappingURL=GetItemSetResult.js.map