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
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:model:{seasonName}";
var SeasonModel = /** @class */ (function () {
    function SeasonModel() {
        this.seasonModelId = null;
        this.name = null;
        this.metadata = null;
        this.maximumParticipants = null;
        this.experienceModelId = null;
        this.challengePeriodEventId = null;
    }
    SeasonModel.getRegion = function (grn) {
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
    SeasonModel.getOwnerId = function (grn) {
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
    SeasonModel.getNamespaceName = function (grn) {
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
    SeasonModel.getSeasonName = function (grn) {
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
    SeasonModel.isValid = function (grn) {
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
    SeasonModel.createGrn = function (region, ownerId, namespaceName, seasonName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{seasonName}', seasonName !== null && seasonName !== void 0 ? seasonName : '');
    };
    SeasonModel.prototype.getSeasonModelId = function () {
        return this.seasonModelId;
    };
    SeasonModel.prototype.setSeasonModelId = function (seasonModelId) {
        this.seasonModelId = seasonModelId;
        return this;
    };
    SeasonModel.prototype.withSeasonModelId = function (seasonModelId) {
        this.seasonModelId = seasonModelId;
        return this;
    };
    SeasonModel.prototype.getName = function () {
        return this.name;
    };
    SeasonModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SeasonModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SeasonModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    SeasonModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SeasonModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SeasonModel.prototype.getMaximumParticipants = function () {
        return this.maximumParticipants;
    };
    SeasonModel.prototype.setMaximumParticipants = function (maximumParticipants) {
        this.maximumParticipants = maximumParticipants;
        return this;
    };
    SeasonModel.prototype.withMaximumParticipants = function (maximumParticipants) {
        this.maximumParticipants = maximumParticipants;
        return this;
    };
    SeasonModel.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    SeasonModel.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    SeasonModel.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    SeasonModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    SeasonModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    SeasonModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    SeasonModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SeasonModel()
            .withSeasonModelId(data["seasonModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMaximumParticipants(data["maximumParticipants"])
            .withExperienceModelId(data["experienceModelId"])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    SeasonModel.prototype.toDict = function () {
        return {
            "seasonModelId": this.getSeasonModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "maximumParticipants": this.getMaximumParticipants(),
            "experienceModelId": this.getExperienceModelId(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return SeasonModel;
}());
exports.default = SeasonModel;
//# sourceMappingURL=SeasonModel.js.map