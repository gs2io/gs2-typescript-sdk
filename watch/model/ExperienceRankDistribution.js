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
var ExperienceRankDistribution = /** @class */ (function () {
    function ExperienceRankDistribution() {
        this.rankValue = null;
        this.count = null;
    }
    ExperienceRankDistribution.prototype.getRankValue = function () {
        return this.rankValue;
    };
    ExperienceRankDistribution.prototype.setRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    ExperienceRankDistribution.prototype.withRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    ExperienceRankDistribution.prototype.getCount = function () {
        return this.count;
    };
    ExperienceRankDistribution.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceRankDistribution.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceRankDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceRankDistribution()
            .withRankValue(data["rankValue"])
            .withCount(data["count"]);
    };
    ExperienceRankDistribution.prototype.toDict = function () {
        return {
            "rankValue": this.getRankValue(),
            "count": this.getCount(),
        };
    };
    return ExperienceRankDistribution;
}());
exports.default = ExperienceRankDistribution;
//# sourceMappingURL=ExperienceRankDistribution.js.map