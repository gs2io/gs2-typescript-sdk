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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:simple:model:{inventoryName}";
var SimpleInventoryModelMaster = /** @class */ (function () {
    function SimpleInventoryModelMaster() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SimpleInventoryModelMaster.getRegion = function (grn) {
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
    SimpleInventoryModelMaster.getOwnerId = function (grn) {
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
    SimpleInventoryModelMaster.getNamespaceName = function (grn) {
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
    SimpleInventoryModelMaster.getInventoryName = function (grn) {
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
    SimpleInventoryModelMaster.isValid = function (grn) {
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
    SimpleInventoryModelMaster.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    SimpleInventoryModelMaster.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    SimpleInventoryModelMaster.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getName = function () {
        return this.name;
    };
    SimpleInventoryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SimpleInventoryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    SimpleInventoryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SimpleInventoryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SimpleInventoryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleInventoryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    SimpleInventoryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SimpleInventoryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SimpleInventoryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleInventoryModelMaster()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SimpleInventoryModelMaster.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SimpleInventoryModelMaster;
}());
exports.default = SimpleInventoryModelMaster;
//# sourceMappingURL=SimpleInventoryModelMaster.js.map