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
var Gs2Experience = tslib_1.__importStar(require("../../experience/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}";
var ExperienceModelMaster = /** @class */ (function () {
    function ExperienceModelMaster() {
        this.experienceModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.defaultExperience = null;
        this.defaultRankCap = null;
        this.maxRankCap = null;
        this.rankThresholdName = null;
        this.acquireActionRates = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    ExperienceModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceModelMaster.getExperienceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getExperienceName(grn) == null || this.getExperienceName(grn) === '') {
            return false;
        }
        return true;
    };
    ExperienceModelMaster.createGrn = function (region, ownerId, namespaceName, experienceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{experienceName}', experienceName !== null && experienceName !== void 0 ? experienceName : '');
    };
    ExperienceModelMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    ExperienceModelMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceModelMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceModelMaster.prototype.getName = function () {
        return this.name;
    };
    ExperienceModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ExperienceModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ExperienceModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    ExperienceModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    ExperienceModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ExperienceModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    ExperienceModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ExperienceModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ExperienceModelMaster.prototype.getDefaultExperience = function () {
        return this.defaultExperience;
    };
    ExperienceModelMaster.prototype.setDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    ExperienceModelMaster.prototype.withDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    ExperienceModelMaster.prototype.getDefaultRankCap = function () {
        return this.defaultRankCap;
    };
    ExperienceModelMaster.prototype.setDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    ExperienceModelMaster.prototype.withDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    ExperienceModelMaster.prototype.getMaxRankCap = function () {
        return this.maxRankCap;
    };
    ExperienceModelMaster.prototype.setMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    ExperienceModelMaster.prototype.withMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    ExperienceModelMaster.prototype.getRankThresholdName = function () {
        return this.rankThresholdName;
    };
    ExperienceModelMaster.prototype.setRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    ExperienceModelMaster.prototype.withRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    ExperienceModelMaster.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    ExperienceModelMaster.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    ExperienceModelMaster.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    ExperienceModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ExperienceModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ExperienceModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ExperienceModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ExperienceModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ExperienceModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ExperienceModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    ExperienceModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ExperienceModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ExperienceModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceModelMaster()
            .withExperienceModelId(data["experienceModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThresholdName(data["rankThresholdName"])
            .withAcquireActionRates(data.acquireActionRates ?
            data.acquireActionRates.map(function (item) {
                return Gs2Experience.AcquireActionRate.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    ExperienceModelMaster.prototype.toDict = function () {
        return {
            "experienceModelId": this.getExperienceModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThresholdName": this.getRankThresholdName(),
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ExperienceModelMaster;
}());
exports.default = ExperienceModelMaster;
//# sourceMappingURL=ExperienceModelMaster.js.map