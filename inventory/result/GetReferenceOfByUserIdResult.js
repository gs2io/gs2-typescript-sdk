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
var GetReferenceOfByUserIdResult = /** @class */ (function () {
    function GetReferenceOfByUserIdResult() {
        this.item = null;
        this.itemSet = null;
        this.itemModel = null;
        this.inventory = null;
    }
    GetReferenceOfByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetReferenceOfByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.getItemSet = function () {
        return this.itemSet;
    };
    GetReferenceOfByUserIdResult.prototype.setItemSet = function (itemSet) {
        this.itemSet = itemSet;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.withItemSet = function (itemSet) {
        this.itemSet = itemSet;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    GetReferenceOfByUserIdResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.getInventory = function () {
        return this.inventory;
    };
    GetReferenceOfByUserIdResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetReferenceOfByUserIdResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetReferenceOfByUserIdResult.fromDict = function (data) {
        return new GetReferenceOfByUserIdResult()
            .withItem(data.item ?
            data.item.map(function (item) {
                return item;
            }) : [])
            .withItemSet(Gs2Inventory.ItemSet.fromDict(data["itemSet"]))
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]));
    };
    GetReferenceOfByUserIdResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": this.getItem() ?
                this.getItem().map(function (item) {
                    return item;
                }) : [],
            "itemSet": (_a = this.getItemSet()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "itemModel": (_b = this.getItemModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "inventory": (_c = this.getInventory()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return GetReferenceOfByUserIdResult;
}());
exports.default = GetReferenceOfByUserIdResult;
//# sourceMappingURL=GetReferenceOfByUserIdResult.js.map