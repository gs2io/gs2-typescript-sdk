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
var ExperienceStatusRankDistribution_1 = tslib_1.__importDefault(require("./ExperienceStatusRankDistribution"));
var ExperienceStatusRankCapDistribution_1 = tslib_1.__importDefault(require("./ExperienceStatusRankCapDistribution"));
var ExperienceStatusDistributions = /** @class */ (function () {
    function ExperienceStatusDistributions() {
        this.rank = null;
        this.rankCap = null;
    }
    ExperienceStatusDistributions.prototype.getRank = function () {
        return this.rank;
    };
    ExperienceStatusDistributions.prototype.setRank = function (rank) {
        this.rank = rank;
        return this;
    };
    ExperienceStatusDistributions.prototype.withRank = function (rank) {
        this.rank = rank;
        return this;
    };
    ExperienceStatusDistributions.prototype.getRankCap = function () {
        return this.rankCap;
    };
    ExperienceStatusDistributions.prototype.setRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceStatusDistributions.prototype.withRankCap = function (rankCap) {
        this.rankCap = rankCap;
        return this;
    };
    ExperienceStatusDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatusDistributions()
            .withRank(ExperienceStatusRankDistribution_1.default.fromDict(data["rank"]))
            .withRankCap(ExperienceStatusRankCapDistribution_1.default.fromDict(data["rankCap"]));
    };
    ExperienceStatusDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "rank": (_a = this.getRank()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rankCap": (_b = this.getRankCap()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ExperienceStatusDistributions;
}());
exports.default = ExperienceStatusDistributions;
//# sourceMappingURL=ExperienceStatusDistributions.js.map