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
var ItemModel_1 = tslib_1.__importDefault(require("./ItemModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}";
var InventoryModel = /** @class */ (function () {
    function InventoryModel() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.initialCapacity = null;
        this.maxCapacity = null;
        this.protectReferencedItem = null;
        this.itemModels = null;
    }
    InventoryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryModel.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    InventoryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getInventoryName(grn) == null || this.getInventoryName(grn) === '') {
            return false;
        }
        return true;
    };
    InventoryModel.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    InventoryModel.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    InventoryModel.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    InventoryModel.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    InventoryModel.prototype.getName = function () {
        return this.name;
    };
    InventoryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    InventoryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    InventoryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    InventoryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    InventoryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    InventoryModel.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    InventoryModel.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    InventoryModel.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    InventoryModel.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    InventoryModel.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    InventoryModel.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    InventoryModel.prototype.getProtectReferencedItem = function () {
        return this.protectReferencedItem;
    };
    InventoryModel.prototype.setProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    InventoryModel.prototype.withProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    InventoryModel.prototype.getItemModels = function () {
        return this.itemModels;
    };
    InventoryModel.prototype.setItemModels = function (itemModels) {
        this.itemModels = itemModels;
        return this;
    };
    InventoryModel.prototype.withItemModels = function (itemModels) {
        this.itemModels = itemModels;
        return this;
    };
    InventoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryModel()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialCapacity(data["initialCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withProtectReferencedItem(data["protectReferencedItem"])
            .withItemModels(data.itemModels ?
            data.itemModels.map(function (item) {
                return ItemModel_1.default.fromDict(item);
            }) : []);
    };
    InventoryModel.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
            "itemModels": this.getItemModels() ?
                this.getItemModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryModel;
}());
exports.default = InventoryModel;
//# sourceMappingURL=InventoryModel.js.map