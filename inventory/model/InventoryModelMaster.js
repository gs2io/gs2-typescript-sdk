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
var InventoryModelMaster = /** @class */ (function () {
    function InventoryModelMaster() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.initialCapacity = null;
        this.maxCapacity = null;
        this.protectReferencedItem = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    InventoryModelMaster.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    InventoryModelMaster.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    InventoryModelMaster.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    InventoryModelMaster.prototype.getName = function () {
        return this.name;
    };
    InventoryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    InventoryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    InventoryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    InventoryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    InventoryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    InventoryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    InventoryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    InventoryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    InventoryModelMaster.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    InventoryModelMaster.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    InventoryModelMaster.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    InventoryModelMaster.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    InventoryModelMaster.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    InventoryModelMaster.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    InventoryModelMaster.prototype.getProtectReferencedItem = function () {
        return this.protectReferencedItem;
    };
    InventoryModelMaster.prototype.setProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    InventoryModelMaster.prototype.withProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    InventoryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    InventoryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    InventoryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    InventoryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    InventoryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    InventoryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    InventoryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryModelMaster()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withInitialCapacity(data["initialCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withProtectReferencedItem(data["protectReferencedItem"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    InventoryModelMaster.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return InventoryModelMaster;
}());
export default InventoryModelMaster;
//# sourceMappingURL=InventoryModelMaster.js.map