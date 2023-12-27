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
var UnleashRateEntryModel_1 = tslib_1.__importDefault(require("./UnleashRateEntryModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}:unleashRateModelMaster:{rateName}";
var UnleashRateModelMaster = /** @class */ (function () {
    function UnleashRateModelMaster() {
        this.unleashRateModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.gradeModelId = null;
        this.gradeEntries = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    UnleashRateModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnleashRateModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnleashRateModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnleashRateModelMaster.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    UnleashRateModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    };
    UnleashRateModelMaster.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    UnleashRateModelMaster.prototype.getUnleashRateModelId = function () {
        return this.unleashRateModelId;
    };
    UnleashRateModelMaster.prototype.setUnleashRateModelId = function (unleashRateModelId) {
        this.unleashRateModelId = unleashRateModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.withUnleashRateModelId = function (unleashRateModelId) {
        this.unleashRateModelId = unleashRateModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.getName = function () {
        return this.name;
    };
    UnleashRateModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRateModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRateModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    UnleashRateModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UnleashRateModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UnleashRateModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    UnleashRateModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRateModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRateModelMaster.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    UnleashRateModelMaster.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    UnleashRateModelMaster.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UnleashRateModelMaster.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    UnleashRateModelMaster.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UnleashRateModelMaster.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UnleashRateModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    UnleashRateModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    UnleashRateModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    UnleashRateModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    UnleashRateModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    UnleashRateModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    UnleashRateModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    UnleashRateModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    UnleashRateModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    UnleashRateModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRateModelMaster()
            .withUnleashRateModelId(data["unleashRateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return UnleashRateEntryModel_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    UnleashRateModelMaster.prototype.toDict = function () {
        return {
            "unleashRateModelId": this.getUnleashRateModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "gradeModelId": this.getGradeModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return UnleashRateModelMaster;
}());
exports.default = UnleashRateModelMaster;
//# sourceMappingURL=UnleashRateModelMaster.js.map