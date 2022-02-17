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
var AcquireItemSetByStampSheetResult = /** @class */ (function () {
    function AcquireItemSetByStampSheetResult() {
        this.items = null;
        this.itemModel = null;
        this.inventory = null;
        this.overflowCount = null;
    }
    AcquireItemSetByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    AcquireItemSetByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.getItemModel = function () {
        return this.itemModel;
    };
    AcquireItemSetByStampSheetResult.prototype.setItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.withItemModel = function (itemModel) {
        this.itemModel = itemModel;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.getInventory = function () {
        return this.inventory;
    };
    AcquireItemSetByStampSheetResult.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.getOverflowCount = function () {
        return this.overflowCount;
    };
    AcquireItemSetByStampSheetResult.prototype.setOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetByStampSheetResult.prototype.withOverflowCount = function (overflowCount) {
        this.overflowCount = overflowCount;
        return this;
    };
    AcquireItemSetByStampSheetResult.fromDict = function (data) {
        return new AcquireItemSetByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.ItemSet.fromDict(item);
            }) : [])
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withOverflowCount(data["overflowCount"]);
    };
    AcquireItemSetByStampSheetResult.prototype.toDict = function () {
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
    return AcquireItemSetByStampSheetResult;
}());
export default AcquireItemSetByStampSheetResult;
//# sourceMappingURL=AcquireItemSetByStampSheetResult.js.map