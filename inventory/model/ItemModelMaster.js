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
var ItemModelMaster = /** @class */ (function () {
    function ItemModelMaster() {
        this.itemModelId = null;
        this.inventoryName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.stackingLimit = null;
        this.allowMultipleStacks = null;
        this.sortValue = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    ItemModelMaster.prototype.getItemModelId = function () {
        return this.itemModelId;
    };
    ItemModelMaster.prototype.setItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    ItemModelMaster.prototype.withItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    ItemModelMaster.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ItemModelMaster.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ItemModelMaster.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ItemModelMaster.prototype.getName = function () {
        return this.name;
    };
    ItemModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ItemModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ItemModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    ItemModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    ItemModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ItemModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    ItemModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ItemModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ItemModelMaster.prototype.getStackingLimit = function () {
        return this.stackingLimit;
    };
    ItemModelMaster.prototype.setStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    ItemModelMaster.prototype.withStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    ItemModelMaster.prototype.getAllowMultipleStacks = function () {
        return this.allowMultipleStacks;
    };
    ItemModelMaster.prototype.setAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    ItemModelMaster.prototype.withAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    ItemModelMaster.prototype.getSortValue = function () {
        return this.sortValue;
    };
    ItemModelMaster.prototype.setSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemModelMaster.prototype.withSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ItemModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ItemModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ItemModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ItemModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ItemModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ItemModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ItemModelMaster()
            .withItemModelId(data["itemModelId"])
            .withInventoryName(data["inventoryName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ItemModelMaster.prototype.toDict = function () {
        return {
            "itemModelId": this.getItemModelId(),
            "inventoryName": this.getInventoryName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ItemModelMaster;
}());
export default ItemModelMaster;
//# sourceMappingURL=ItemModelMaster.js.map