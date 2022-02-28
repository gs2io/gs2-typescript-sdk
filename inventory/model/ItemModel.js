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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}";
var ItemModel = /** @class */ (function () {
    function ItemModel() {
        this.itemModelId = null;
        this.name = null;
        this.metadata = null;
        this.stackingLimit = null;
        this.allowMultipleStacks = null;
        this.sortValue = null;
    }
    ItemModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemModel.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemModel.getItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getInventoryName(grn) == null) {
            return false;
        }
        if (this.getItemName(grn) == null) {
            return false;
        }
        return true;
    };
    ItemModel.createGrn = function (region, ownerId, namespaceName, inventoryName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
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
exports.default = ItemModel;
//# sourceMappingURL=ItemModel.js.map