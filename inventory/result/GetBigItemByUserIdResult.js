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
var GetBigItemByUserIdResult = /** @class */ (function () {
    function GetBigItemByUserIdResult() {
        this.item = null;
        this.itemModel = null;
    }
    GetBigItemByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetBigItemByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetBigItemByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetBigItemByUserIdResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    GetBigItemByUserIdResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetBigItemByUserIdResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetBigItemByUserIdResult.fromDict = function (data) {
        return new GetBigItemByUserIdResult()
            .withItem(Gs2Inventory.BigItem.fromDict(data["item"]))
            .withItemModel(Gs2Inventory.BigItemModel.fromDict(data["itemModel"]));
    };
    GetBigItemByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "itemModel": (_b = this.getItemModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetBigItemByUserIdResult;
}());
exports.default = GetBigItemByUserIdResult;
//# sourceMappingURL=GetBigItemByUserIdResult.js.map