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
var ExperienceExperienceModelStatistics = /** @class */ (function () {
    function ExperienceExperienceModelStatistics() {
        this.experience = null;
        this.experienceAmount = null;
        this.rankCap = null;
        this.rankCapAmount = null;
    }
    ExperienceExperienceModelStatistics.prototype.getExperience = function () {
        return this.experience;
    };
    ExperienceExperienceModelStatistics.prototype.setExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.withExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.getExperienceAmount = function () {
        return this.experienceAmount;
    };
    ExperienceExperienceModelStatistics.prototype.setExperienceAmount = function (experienceAmount) {
        this.experienceAmount = experienceAmount;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.withExperienceAmount = function (experienceAmount) {
        this.experienceAmount = experienceAmount;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.getRankCap = function () {
        return this.rankCap;
    };
    ExperienceExperienceModelStatistics.prototype.setRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.withRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.getRankCapAmount = function () {
        return this.rankCapAmount;
    };
    ExperienceExperienceModelStatistics.prototype.setRankCapAmount = function (rankCapAmount) {
        this.rankCapAmount = rankCapAmount;
        return this;
    };
    ExperienceExperienceModelStatistics.prototype.withRankCapAmount = function (rankCapAmount) {
        this.rankCapAmount = rankCapAmount;
        return this;
    };
    ExperienceExperienceModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelStatistics()
            .withExperience(data["experience"])
            .withExperienceAmount(data["experienceAmount"])
            .withRankCap(data["rankCap"])
            .withRankCapAmount(data["rankCapAmount"]);
    };
    ExperienceExperienceModelStatistics.prototype.toDict = function () {
        return {
            "experience": this.getExperience(),
            "experienceAmount": this.getExperienceAmount(),
            "rankCap": this.getRankCap(),
            "rankCapAmount": this.getRankCapAmount(),
        };
    };
    return ExperienceExperienceModelStatistics;
}());
exports.default = ExperienceExperienceModelStatistics;
//# sourceMappingURL=ExperienceExperienceModelStatistics.js.map