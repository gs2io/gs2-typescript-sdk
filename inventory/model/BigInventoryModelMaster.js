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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:big:model:{inventoryName}";
var BigInventoryModelMaster = /** @class */ (function () {
    function BigInventoryModelMaster() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BigInventoryModelMaster.getRegion = function (grn) {
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
    BigInventoryModelMaster.getOwnerId = function (grn) {
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
    BigInventoryModelMaster.getNamespaceName = function (grn) {
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
    BigInventoryModelMaster.getInventoryName = function (grn) {
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
    BigInventoryModelMaster.isValid = function (grn) {
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
    BigInventoryModelMaster.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    BigInventoryModelMaster.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    BigInventoryModelMaster.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    BigInventoryModelMaster.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    BigInventoryModelMaster.prototype.getName = function () {
        return this.name;
    };
    BigInventoryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BigInventoryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BigInventoryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    BigInventoryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BigInventoryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BigInventoryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    BigInventoryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    BigInventoryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    BigInventoryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BigInventoryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigInventoryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigInventoryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BigInventoryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigInventoryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigInventoryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    BigInventoryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BigInventoryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BigInventoryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BigInventoryModelMaster()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BigInventoryModelMaster.prototype.toDict = function () {
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
    return BigInventoryModelMaster;
}());
exports.default = BigInventoryModelMaster;
//# sourceMappingURL=BigInventoryModelMaster.js.map