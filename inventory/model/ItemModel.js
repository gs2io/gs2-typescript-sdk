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
var ItemModel = /** @class */ (function () {
    function ItemModel() {
        this.itemModelId = null;
        this.name = null;
        this.metadata = null;
        this.stackingLimit = null;
        this.allowMultipleStacks = null;
        this.sortValue = null;
    }
    ItemModel.prototype.getItemModelId = function () {
        return this.itemModelId;
    };
    ItemModel.prototype.setItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    ItemModel.prototype.withItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    ItemModel.prototype.getName = function () {
        return this.name;
    };
    ItemModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ItemModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ItemModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    ItemModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ItemModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ItemModel.prototype.getStackingLimit = function () {
        return this.stackingLimit;
    };
    ItemModel.prototype.setStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    ItemModel.prototype.withStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    ItemModel.prototype.getAllowMultipleStacks = function () {
        return this.allowMultipleStacks;
    };
    ItemModel.prototype.setAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    ItemModel.prototype.withAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    ItemModel.prototype.getSortValue = function () {
        return this.sortValue;
    };
    ItemModel.prototype.setSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemModel.prototype.withSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ItemModel()
            .withItemModelId(data["itemModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"]);
    };
    ItemModel.prototype.toDict = function () {
        return {
            "itemModelId": this.getItemModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
        };
    };
    return ItemModel;
}());
export default ItemModel;
//# sourceMappingURL=ItemModel.js.map