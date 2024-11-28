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
var Gs2Grade = tslib_1.__importStar(require("../../grade/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:grade:{namespaceName}:model:{gradeName}";
var GradeModelMaster = /** @class */ (function () {
    function GradeModelMaster() {
        this.gradeModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.defaultGrades = null;
        this.experienceModelId = null;
        this.gradeEntries = null;
        this.acquireActionRates = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GradeModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gradeName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GradeModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{gradeName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GradeModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{gradeName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GradeModelMaster.getGradeName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gradeName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GradeModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getGradeName(grn) == null || this.getGradeName(grn) === '') {
            return false;
        }
        return true;
    };
    GradeModelMaster.createGrn = function (region, ownerId, namespaceName, gradeName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{gradeName}', gradeName !== null && gradeName !== void 0 ? gradeName : '');
    };
    GradeModelMaster.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    GradeModelMaster.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    GradeModelMaster.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    GradeModelMaster.prototype.getName = function () {
        return this.name;
    };
    GradeModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GradeModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GradeModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    GradeModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    GradeModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    GradeModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    GradeModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeModelMaster.prototype.getDefaultGrades = function () {
        return this.defaultGrades;
    };
    GradeModelMaster.prototype.setDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    GradeModelMaster.prototype.withDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    GradeModelMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    GradeModelMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    GradeModelMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    GradeModelMaster.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    GradeModelMaster.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    GradeModelMaster.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    GradeModelMaster.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    GradeModelMaster.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    GradeModelMaster.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    GradeModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GradeModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GradeModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GradeModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GradeModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GradeModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GradeModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    GradeModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GradeModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GradeModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GradeModelMaster()
            .withGradeModelId(data["gradeModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultGrades(data.defaultGrades ?
            data.defaultGrades.map(function (item) {
                return Gs2Grade.DefaultGradeModel.fromDict(item);
            }) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return Gs2Grade.GradeEntryModel.fromDict(item);
            }) : null)
            .withAcquireActionRates(data.acquireActionRates ?
            data.acquireActionRates.map(function (item) {
                return Gs2Grade.AcquireActionRate.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GradeModelMaster.prototype.toDict = function () {
        return {
            "gradeModelId": this.getGradeModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultGrades": this.getDefaultGrades() ?
                this.getDefaultGrades().map(function (item) {
                    return item.toDict();
                }) : null,
            "experienceModelId": this.getExperienceModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GradeModelMaster;
}());
exports.default = GradeModelMaster;
//# sourceMappingURL=GradeModelMaster.js.map