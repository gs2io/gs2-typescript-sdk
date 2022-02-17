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
import * as Gs2Inventory from '../model';
var AcquireItemSetByUserIdResult = /** @class */ (function () {
    function AcquireItemSetByUserIdResult() {
        this.items = null;
        this.itemModel = null;
        this.inventory = null;
        this.overflowCount = null;
    }
    AcquireItemSetByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    AcquireItemSetByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    AcquireItemSetByUserIdResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.getInventory = function () {
        return this.inventory;
    };
    AcquireItemSetByUserIdResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.getOverflowCount = function () {
        return this.overflowCount;
    };
    AcquireItemSetByUserIdResult.prototype.setOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetByUserIdResult.prototype.withOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetByUserIdResult.fromDict = function (data) {
        return new AcquireItemSetByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.ItemSet.fromDict(item);
            }) : [])
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withOverflowCount(data["overflowCount"]);
    };
    AcquireItemSetByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "itemModel": (_a = this.getItemModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "inventory": (_b = this.getInventory()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "overflowCount": this.getOverflowCount(),
        };
    };
    return AcquireItemSetByUserIdResult;
}());
export default AcquireItemSetByUserIdResult;
//# sourceMappingURL=AcquireItemSetByUserIdResult.js.map