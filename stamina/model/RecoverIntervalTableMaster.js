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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}";
var RecoverIntervalTableMaster = /** @class */ (function () {
    function RecoverIntervalTableMaster() {
        this.recoverIntervalTableId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.experienceModelId = null;
        this.values = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    RecoverIntervalTableMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{recoverIntervalTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverIntervalTableMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{recoverIntervalTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverIntervalTableMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{recoverIntervalTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverIntervalTableMaster.getRecoverIntervalTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{recoverIntervalTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverIntervalTableMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRecoverIntervalTableName(grn) == null || this.getRecoverIntervalTableName(grn) === '') {
            return false;
        }
        return true;
    };
    RecoverIntervalTableMaster.createGrn = function (region, ownerId, namespaceName, recoverIntervalTableName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{recoverIntervalTableName}', recoverIntervalTableName !== null && recoverIntervalTableName !== void 0 ? recoverIntervalTableName : '');
    };
    RecoverIntervalTableMaster.prototype.getRecoverIntervalTableId = function () {
        return this.recoverIntervalTableId;
    };
    RecoverIntervalTableMaster.prototype.setRecoverIntervalTableId = function (recoverIntervalTableId) {
        this.recoverIntervalTableId = recoverIntervalTableId;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withRecoverIntervalTableId = function (recoverIntervalTableId) {
        this.recoverIntervalTableId = recoverIntervalTableId;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getName = function () {
        return this.name;
    };
    RecoverIntervalTableMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RecoverIntervalTableMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getDescription = function () {
        return this.description;
    };
    RecoverIntervalTableMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RecoverIntervalTableMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getValues = function () {
        return this.values;
    };
    RecoverIntervalTableMaster.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RecoverIntervalTableMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RecoverIntervalTableMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RecoverIntervalTableMaster.prototype.getRevision = function () {
        return this.revision;
    };
    RecoverIntervalTableMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RecoverIntervalTableMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RecoverIntervalTableMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RecoverIntervalTableMaster()
            .withRecoverIntervalTableId(data["recoverIntervalTableId"])
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
    RecoverIntervalTableMaster.prototype.toDict = function () {
        return {
            "recoverIntervalTableId": this.getRecoverIntervalTableId(),
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
    return RecoverIntervalTableMaster;
}());
exports.default = RecoverIntervalTableMaster;
//# sourceMappingURL=RecoverIntervalTableMaster.js.map