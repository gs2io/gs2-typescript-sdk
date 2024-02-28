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
var TierModel_1 = tslib_1.__importDefault(require("./TierModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:seasonRating:{namespaceName}:model:{seasonName}";
var SeasonModelMaster = /** @class */ (function () {
    function SeasonModelMaster() {
        this.seasonModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.tiers = null;
        this.experienceModelId = null;
        this.challengePeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SeasonModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{seasonName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonModelMaster.getSeasonName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSeasonName(grn) == null || this.getSeasonName(grn) === '') {
            return false;
        }
        return true;
    };
    SeasonModelMaster.createGrn = function (region, ownerId, namespaceName, seasonName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{seasonName}', seasonName !== null && seasonName !== void 0 ? seasonName : '');
    };
    SeasonModelMaster.prototype.getSeasonModelId = function () {
        return this.seasonModelId;
    };
    SeasonModelMaster.prototype.setSeasonModelId = function (seasonModelId) {
        this.seasonModelId = seasonModelId;
        return this;
    };
    SeasonModelMaster.prototype.withSeasonModelId = function (seasonModelId) {
        this.seasonModelId = seasonModelId;
        return this;
    };
    SeasonModelMaster.prototype.getName = function () {
        return this.name;
    };
    SeasonModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SeasonModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SeasonModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SeasonModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SeasonModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SeasonModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    SeasonModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SeasonModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SeasonModelMaster.prototype.getTiers = function () {
        return this.tiers;
    };
    SeasonModelMaster.prototype.setTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    SeasonModelMaster.prototype.withTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    SeasonModelMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    SeasonModelMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    SeasonModelMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    SeasonModelMaster.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    SeasonModelMaster.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    SeasonModelMaster.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    SeasonModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SeasonModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SeasonModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SeasonModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SeasonModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SeasonModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SeasonModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    SeasonModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SeasonModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SeasonModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SeasonModelMaster()
            .withSeasonModelId(data["seasonModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withTiers(data.tiers ?
            data.tiers.map(function (item) {
                return TierModel_1.default.fromDict(item);
            }) : [])
            .withExperienceModelId(data["experienceModelId"])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SeasonModelMaster.prototype.toDict = function () {
        return {
            "seasonModelId": this.getSeasonModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "tiers": this.getTiers() ?
                this.getTiers().map(function (item) {
                    return item.toDict();
                }) : [],
            "experienceModelId": this.getExperienceModelId(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SeasonModelMaster;
}());
exports.default = SeasonModelMaster;
//# sourceMappingURL=SeasonModelMaster.js.map