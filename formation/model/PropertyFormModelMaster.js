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
var Gs2Formation = tslib_1.__importStar(require("../../formation/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:propertyForm:{propertyFormModelName}";
var PropertyFormModelMaster = /** @class */ (function () {
    function PropertyFormModelMaster() {
        this.propertyFormModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    PropertyFormModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModelMaster.getPropertyFormModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getPropertyFormModelName(grn) == null || this.getPropertyFormModelName(grn) === '') {
            return false;
        }
        return true;
    };
    PropertyFormModelMaster.createGrn = function (region, ownerId, namespaceName, propertyFormModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{propertyFormModelName}', propertyFormModelName !== null && propertyFormModelName !== void 0 ? propertyFormModelName : '');
    };
    PropertyFormModelMaster.prototype.getPropertyFormModelId = function () {
        return this.propertyFormModelId;
    };
    PropertyFormModelMaster.prototype.setPropertyFormModelId = function (propertyFormModelId) {
        this.propertyFormModelId = propertyFormModelId;
        return this;
    };
    PropertyFormModelMaster.prototype.withPropertyFormModelId = function (propertyFormModelId) {
        this.propertyFormModelId = propertyFormModelId;
        return this;
    };
    PropertyFormModelMaster.prototype.getName = function () {
        return this.name;
    };
    PropertyFormModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PropertyFormModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PropertyFormModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    PropertyFormModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    PropertyFormModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    PropertyFormModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    PropertyFormModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PropertyFormModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PropertyFormModelMaster.prototype.getSlots = function () {
        return this.slots;
    };
    PropertyFormModelMaster.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyFormModelMaster.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyFormModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    PropertyFormModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PropertyFormModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PropertyFormModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    PropertyFormModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PropertyFormModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PropertyFormModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    PropertyFormModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PropertyFormModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PropertyFormModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PropertyFormModelMaster()
            .withPropertyFormModelId(data["propertyFormModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    PropertyFormModelMaster.prototype.toDict = function () {
        return {
            "propertyFormModelId": this.getPropertyFormModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return PropertyFormModelMaster;
}());
exports.default = PropertyFormModelMaster;
//# sourceMappingURL=PropertyFormModelMaster.js.map