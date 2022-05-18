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
var GetItemWithSignatureResult = /** @class */ (function () {
    function GetItemWithSignatureResult() {
        this.items = null;
        this.itemModel = null;
        this.inventory = null;
        this.body = null;
        this.signature = null;
    }
    GetItemWithSignatureResult.prototype.getItems = function () {
        return this.items;
    };
    GetItemWithSignatureResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    GetItemWithSignatureResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    GetItemWithSignatureResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    GetItemWithSignatureResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetItemWithSignatureResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetItemWithSignatureResult.prototype.getInventory = function () {
        return this.inventory;
    };
    GetItemWithSignatureResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetItemWithSignatureResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    GetItemWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetItemWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetItemWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetItemWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetItemWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetItemWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetItemWithSignatureResult.fromDict = function (data) {
        return new GetItemWithSignatureResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.ItemSet.fromDict(item);
            }) : [])
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    GetItemWithSignatureResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "itemModel": (_a = this.getItemModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "inventory": (_b = this.getInventory()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return GetItemWithSignatureResult;
}());
exports.default = GetItemWithSignatureResult;
//# sourceMappingURL=GetItemWithSignatureResult.js.map