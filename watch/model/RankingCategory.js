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
var RankingCategoryScoreDistribution_1 = tslib_1.__importDefault(require("./RankingCategoryScoreDistribution"));
var RankingCategory = /** @class */ (function () {
    function RankingCategory() {
        this.name = null;
        this.scoreDistribution = null;
    }
    RankingCategory.prototype.getName = function () {
        return this.name;
    };
    RankingCategory.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RankingCategory.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RankingCategory.prototype.getScoreDistribution = function () {
        return this.scoreDistribution;
    };
    RankingCategory.prototype.setScoreDistribution = function (scoreDistribution) {
        this.scoreDistribution = scoreDistribution;
        return this;
    };
    RankingCategory.prototype.withScoreDistribution = function (scoreDistribution) {
        this.scoreDistribution = scoreDistribution;
        return this;
    };
    RankingCategory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategory()
            .withName(data["name"])
            .withScoreDistribution(data.scoreDistribution ?
            data.scoreDistribution.map(function (item) {
                return RankingCategoryScoreDistribution_1.default.fromDict(item);
            }) : []);
    };
    RankingCategory.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "scoreDistribution": this.getScoreDistribution() ?
                this.getScoreDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return RankingCategory;
}());
exports.default = RankingCategory;
//# sourceMappingURL=RankingCategory.js.map