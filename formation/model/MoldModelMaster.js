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
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:mold:{moldModelName}";
var MoldModelMaster = /** @class */ (function () {
    function MoldModelMaster() {
        this.moldModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.initialMaxCapacity = null;
        this.maxCapacity = null;
        this.formModelName = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    MoldModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModelMaster.getMoldModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMoldModelName(grn) == null || this.getMoldModelName(grn) === '') {
            return false;
        }
        return true;
    };
    MoldModelMaster.createGrn = function (region, ownerId, namespaceName, moldModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{moldModelName}', moldModelName !== null && moldModelName !== void 0 ? moldModelName : '');
    };
    MoldModelMaster.prototype.getMoldModelId = function () {
        return this.moldModelId;
    };
    MoldModelMaster.prototype.setMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModelMaster.prototype.withMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModelMaster.prototype.getName = function () {
        return this.name;
    };
    MoldModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MoldModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MoldModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    MoldModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    MoldModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    MoldModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    MoldModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModelMaster.prototype.getInitialMaxCapacity = function () {
        return this.initialMaxCapacity;
    };
    MoldModelMaster.prototype.setInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModelMaster.prototype.withInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModelMaster.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    MoldModelMaster.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModelMaster.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModelMaster.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    MoldModelMaster.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    MoldModelMaster.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    MoldModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MoldModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MoldModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MoldModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    MoldModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MoldModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MoldModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    MoldModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MoldModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MoldModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoldModelMaster()
            .withMoldModelId(data["moldModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withFormModelName(data["formModelName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    MoldModelMaster.prototype.toDict = function () {
        return {
            "moldModelId": this.getMoldModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "formModelName": this.getFormModelName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return MoldModelMaster;
}());
exports.default = MoldModelMaster;
//# sourceMappingURL=MoldModelMaster.js.map