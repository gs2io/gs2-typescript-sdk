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
import Threshold from './Threshold';
var ExperienceModel = /** @class */ (function () {
    function ExperienceModel() {
        this.experienceModelId = null;
        this.name = null;
        this.metadata = null;
        this.defaultExperience = null;
        this.defaultRankCap = null;
        this.maxRankCap = null;
        this.rankThreshold = null;
    }
    ExperienceModel.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    ExperienceModel.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceModel.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceModel.prototype.getName = function () {
        return this.name;
    };
    ExperienceModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ExperienceModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ExperienceModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    ExperienceModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ExperienceModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ExperienceModel.prototype.getDefaultExperience = function () {
        return this.defaultExperience;
    };
    ExperienceModel.prototype.setDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    ExperienceModel.prototype.withDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    ExperienceModel.prototype.getDefaultRankCap = function () {
        return this.defaultRankCap;
    };
    ExperienceModel.prototype.setDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    ExperienceModel.prototype.withDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    ExperienceModel.prototype.getMaxRankCap = function () {
        return this.maxRankCap;
    };
    ExperienceModel.prototype.setMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    ExperienceModel.prototype.withMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    ExperienceModel.prototype.getRankThreshold = function () {
        return this.rankThreshold;
    };
    ExperienceModel.prototype.setRankThreshold = function (rankThreshold) {
        this.rankThreshold = rankThreshold;
        return this;
    };
    ExperienceModel.prototype.withRankThreshold = function (rankThreshold) {
        this.rankThreshold = rankThreshold;
        return this;
    };
    ExperienceModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceModel()
            .withExperienceModelId(data["experienceModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThreshold(Threshold.fromDict(data["rankThreshold"]));
    };
    ExperienceModel.prototype.toDict = function () {
        var _a;
        return {
            "experienceModelId": this.getExperienceModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThreshold": (_a = this.getRankThreshold()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return ExperienceModel;
}());
export default ExperienceModel;
//# sourceMappingURL=ExperienceModel.js.map