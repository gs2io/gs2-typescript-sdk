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
var GetSimpleItemByUserIdResult = /** @class */ (function () {
    function GetSimpleItemByUserIdResult() {
        this.item = null;
        this.itemModel = null;
    }
    GetSimpleItemByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetSimpleItemByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetSimpleItemByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetSimpleItemByUserIdResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    GetSimpleItemByUserIdResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetSimpleItemByUserIdResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    GetSimpleItemByUserIdResult.fromDict = function (data) {
        return new GetSimpleItemByUserIdResult()
            .withItem(Gs2Inventory.SimpleItem.fromDict(data["item"]))
            .withItemModel(Gs2Inventory.SimpleItemModel.fromDict(data["itemModel"]));
    };
    GetSimpleItemByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "itemModel": (_b = this.getItemModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetSimpleItemByUserIdResult;
}());
exports.default = GetSimpleItemByUserIdResult;
//# sourceMappingURL=GetSimpleItemByUserIdResult.js.map