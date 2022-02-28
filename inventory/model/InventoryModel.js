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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}";
var InventoryModel = /** @class */ (function () {
    function InventoryModel() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.initialCapacity = null;
        this.maxCapacity = null;
        this.protectReferencedItem = null;
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
        return true;
    };
    InventoryModel.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (inventoryName == null || inventoryName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{inventoryName}', inventoryName);
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
            .withProtectReferencedItem(data["protectReferencedItem"]);
    };
    InventoryModel.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
        };
    };
    return InventoryModel;
}());
exports.default = InventoryModel;
//# sourceMappingURL=InventoryModel.js.map