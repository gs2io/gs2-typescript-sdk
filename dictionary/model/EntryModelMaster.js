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
var grnFormat = "grn:gs2:{region}:{ownerId}:dictionary:{namespaceName}:model:{entryModelName}";
var EntryModelMaster = /** @class */ (function () {
    function EntryModelMaster() {
        this.entryModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    EntryModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModelMaster.getEntryModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getEntryModelName(grn) == null || this.getEntryModelName(grn) === '') {
            return false;
        }
        return true;
    };
    EntryModelMaster.createGrn = function (region, ownerId, namespaceName, entryModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{entryModelName}', entryModelName !== null && entryModelName !== void 0 ? entryModelName : '');
    };
    EntryModelMaster.prototype.getEntryModelId = function () {
        return this.entryModelId;
    };
    EntryModelMaster.prototype.setEntryModelId = function (entryModelId) {
        this.entryModelId = entryModelId;
        return this;
    };
    EntryModelMaster.prototype.withEntryModelId = function (entryModelId) {
        this.entryModelId = entryModelId;
        return this;
    };
    EntryModelMaster.prototype.getName = function () {
        return this.name;
    };
    EntryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    EntryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    EntryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    EntryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    EntryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    EntryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    EntryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EntryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EntryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    EntryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    EntryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    EntryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    EntryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    EntryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    EntryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    EntryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    EntryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    EntryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new EntryModelMaster()
            .withEntryModelId(data["entryModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    EntryModelMaster.prototype.toDict = function () {
        return {
            "entryModelId": this.getEntryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return EntryModelMaster;
}());
exports.default = EntryModelMaster;
//# sourceMappingURL=EntryModelMaster.js.map