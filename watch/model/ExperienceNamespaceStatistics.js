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
var ExperienceNamespaceStatistics = /** @class */ (function () {
    function ExperienceNamespaceStatistics() {
        this.experience = null;
        this.rankCap = null;
    }
    ExperienceNamespaceStatistics.prototype.getExperience = function () {
        return this.experience;
    };
    ExperienceNamespaceStatistics.prototype.setExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceNamespaceStatistics.prototype.withExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceNamespaceStatistics.prototype.getRankCap = function () {
        return this.rankCap;
    };
    ExperienceNamespaceStatistics.prototype.setRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceNamespaceStatistics.prototype.withRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceStatistics()
            .withExperience(data["experience"])
            .withRankCap(data["rankCap"]);
    };
    ExperienceNamespaceStatistics.prototype.toDict = function () {
        return {
            "experience": this.getExperience(),
            "rankCap": this.getRankCap(),
        };
    };
    return ExperienceNamespaceStatistics;
}());
exports.default = ExperienceNamespaceStatistics;
//# sourceMappingURL=ExperienceNamespaceStatistics.js.map