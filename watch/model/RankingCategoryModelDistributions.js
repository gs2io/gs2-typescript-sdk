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
var RankingCategoryModelScoreDistribution_1 = tslib_1.__importDefault(require("./RankingCategoryModelScoreDistribution"));
var RankingCategoryModelDistributions = /** @class */ (function () {
    function RankingCategoryModelDistributions() {
        this.score = null;
    }
    RankingCategoryModelDistributions.prototype.getScore = function () {
        return this.score;
    };
    RankingCategoryModelDistributions.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    RankingCategoryModelDistributions.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    RankingCategoryModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModelDistributions()
            .withScore(RankingCategoryModelScoreDistribution_1.default.fromDict(data["score"]));
    };
    RankingCategoryModelDistributions.prototype.toDict = function () {
        var _a;
        return {
            "score": (_a = this.getScore()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return RankingCategoryModelDistributions;
}());
exports.default = RankingCategoryModelDistributions;
//# sourceMappingURL=RankingCategoryModelDistributions.js.map