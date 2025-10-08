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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}";
var MaxStaminaTableMaster = /** @class */ (function () {
    function MaxStaminaTableMaster() {
        this.maxStaminaTableId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.experienceModelId = null;
        this.values = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    MaxStaminaTableMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTableMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTableMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTableMaster.getMaxStaminaTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTableMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMaxStaminaTableName(grn) == null || this.getMaxStaminaTableName(grn) === '') {
            return false;
        }
        return true;
    };
    MaxStaminaTableMaster.createGrn = function (region, ownerId, namespaceName, maxStaminaTableName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{maxStaminaTableName}', maxStaminaTableName !== null && maxStaminaTableName !== void 0 ? maxStaminaTableName : '');
    };
    MaxStaminaTableMaster.prototype.getMaxStaminaTableId = function () {
        return this.maxStaminaTableId;
    };
    MaxStaminaTableMaster.prototype.setMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTableMaster.prototype.withMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTableMaster.prototype.getName = function () {
        return this.name;
    };
    MaxStaminaTableMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTableMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTableMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    MaxStaminaTableMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTableMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTableMaster.prototype.getDescription = function () {
        return this.description;
    };
    MaxStaminaTableMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    MaxStaminaTableMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    MaxStaminaTableMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    MaxStaminaTableMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTableMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTableMaster.prototype.getValues = function () {
        return this.values;
    };
    MaxStaminaTableMaster.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTableMaster.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTableMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MaxStaminaTableMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    MaxStaminaTableMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.getRevision = function () {
        return this.revision;
    };
    MaxStaminaTableMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MaxStaminaTableMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MaxStaminaTableMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MaxStaminaTableMaster()
            .withMaxStaminaTableId(data["maxStaminaTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    MaxStaminaTableMaster.prototype.toDict = function () {
        return {
            "maxStaminaTableId": this.getMaxStaminaTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return MaxStaminaTableMaster;
}());
exports.default = MaxStaminaTableMaster;
//# sourceMappingURL=MaxStaminaTableMaster.js.map