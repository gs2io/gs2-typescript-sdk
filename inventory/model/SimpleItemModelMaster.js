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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:simple:model:{inventoryName}:item:{itemName}";
var SimpleItemModelMaster = /** @class */ (function () {
    function SimpleItemModelMaster() {
        this.itemModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SimpleItemModelMaster.getRegion = function (grn) {
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
    SimpleItemModelMaster.getOwnerId = function (grn) {
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
    SimpleItemModelMaster.getNamespaceName = function (grn) {
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
    SimpleItemModelMaster.getInventoryName = function (grn) {
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
    SimpleItemModelMaster.getItemName = function (grn) {
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
    SimpleItemModelMaster.isValid = function (grn) {
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
        if (this.getItemName(grn) == null || this.getItemName(grn) === '') {
            return false;
        }
        return true;
    };
    SimpleItemModelMaster.createGrn = function (region, ownerId, namespaceName, inventoryName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
    SimpleItemModelMaster.prototype.getItemModelId = function () {
        return this.itemModelId;
    };
    SimpleItemModelMaster.prototype.setItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    SimpleItemModelMaster.prototype.withItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    SimpleItemModelMaster.prototype.getName = function () {
        return this.name;
    };
    SimpleItemModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SimpleItemModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SimpleItemModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    SimpleItemModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SimpleItemModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SimpleItemModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SimpleItemModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleItemModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleItemModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SimpleItemModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleItemModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleItemModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SimpleItemModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleItemModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleItemModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    SimpleItemModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SimpleItemModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SimpleItemModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleItemModelMaster()
            .withItemModelId(data["itemModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SimpleItemModelMaster.prototype.toDict = function () {
        return {
            "itemModelId": this.getItemModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SimpleItemModelMaster;
}());
exports.default = SimpleItemModelMaster;
//# sourceMappingURL=SimpleItemModelMaster.js.map