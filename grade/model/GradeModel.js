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
var DefaultGradeModel_1 = tslib_1.__importDefault(require("./DefaultGradeModel"));
var GradeEntryModel_1 = tslib_1.__importDefault(require("./GradeEntryModel"));
var AcquireActionRate_1 = tslib_1.__importDefault(require("./AcquireActionRate"));
var grnFormat = "grn:gs2:{region}:{ownerId}:grade:{namespaceName}:model:{gradeName}";
var GradeModel = /** @class */ (function () {
    function GradeModel() {
        this.gradeModelId = null;
        this.name = null;
        this.metadata = null;
        this.defaultGrades = null;
        this.experienceModelId = null;
        this.gradeEntries = null;
        this.acquireActionRates = null;
    }
    GradeModel.getRegion = function (grn) {
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
    GradeModel.getOwnerId = function (grn) {
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
    GradeModel.getNamespaceName = function (grn) {
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
    GradeModel.getGradeName = function (grn) {
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
    GradeModel.isValid = function (grn) {
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
    GradeModel.createGrn = function (region, ownerId, namespaceName, gradeName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{gradeName}', gradeName !== null && gradeName !== void 0 ? gradeName : '');
    };
    GradeModel.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    GradeModel.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    GradeModel.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    GradeModel.prototype.getName = function () {
        return this.name;
    };
    GradeModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GradeModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GradeModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    GradeModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeModel.prototype.getDefaultGrades = function () {
        return this.defaultGrades;
    };
    GradeModel.prototype.setDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    GradeModel.prototype.withDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    GradeModel.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    GradeModel.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    GradeModel.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    GradeModel.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    GradeModel.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    GradeModel.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    GradeModel.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    GradeModel.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    GradeModel.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    GradeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GradeModel()
            .withGradeModelId(data["gradeModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDefaultGrades(data.defaultGrades ?
            data.defaultGrades.map(function (item) {
                return DefaultGradeModel_1.default.fromDict(item);
            }) : [])
            .withExperienceModelId(data["experienceModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return GradeEntryModel_1.default.fromDict(item);
            }) : [])
            .withAcquireActionRates(data.acquireActionRates ?
            data.acquireActionRates.map(function (item) {
                return AcquireActionRate_1.default.fromDict(item);
            }) : []);
    };
    GradeModel.prototype.toDict = function () {
        return {
            "gradeModelId": this.getGradeModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "defaultGrades": this.getDefaultGrades() ?
                this.getDefaultGrades().map(function (item) {
                    return item.toDict();
                }) : [],
            "experienceModelId": this.getExperienceModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return GradeModel;
}());
exports.default = GradeModel;
//# sourceMappingURL=GradeModel.js.map