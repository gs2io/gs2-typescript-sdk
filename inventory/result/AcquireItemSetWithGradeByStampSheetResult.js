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
var Gs2Grade = tslib_1.__importStar(require("../../grade/model"));
var AcquireItemSetWithGradeByStampSheetResult = /** @class */ (function () {
    function AcquireItemSetWithGradeByStampSheetResult() {
        this.item = null;
        this.status = null;
        this.itemModel = null;
        this.inventory = null;
        this.overflowCount = null;
    }
    AcquireItemSetWithGradeByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.getStatus = function () {
        return this.status;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.getInventory = function () {
        return this.inventory;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.getOverflowCount = function () {
        return this.overflowCount;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.setOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.withOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetResult.fromDict = function (data) {
        return new AcquireItemSetWithGradeByStampSheetResult()
            .withItem(Gs2Inventory.ItemSet.fromDict(data["item"]))
            .withStatus(Gs2Grade.Status.fromDict(data["status"]))
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withOverflowCount(data["overflowCount"]);
    };
    AcquireItemSetWithGradeByStampSheetResult.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "status": (_b = this.getStatus()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "itemModel": (_c = this.getItemModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "inventory": (_d = this.getInventory()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "overflowCount": this.getOverflowCount(),
        };
    };
    return AcquireItemSetWithGradeByStampSheetResult;
}());
exports.default = AcquireItemSetWithGradeByStampSheetResult;
//# sourceMappingURL=AcquireItemSetWithGradeByStampSheetResult.js.map