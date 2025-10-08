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
var RankingCategoryScoreDistribution = /** @class */ (function () {
    function RankingCategoryScoreDistribution() {
        this.min = null;
        this.max = null;
        this.count = null;
    }
    RankingCategoryScoreDistribution.prototype.getMin = function () {
        return this.min;
    };
    RankingCategoryScoreDistribution.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    RankingCategoryScoreDistribution.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    RankingCategoryScoreDistribution.prototype.getMax = function () {
        return this.max;
    };
    RankingCategoryScoreDistribution.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    RankingCategoryScoreDistribution.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    RankingCategoryScoreDistribution.prototype.getCount = function () {
        return this.count;
    };
    RankingCategoryScoreDistribution.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    RankingCategoryScoreDistribution.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    RankingCategoryScoreDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryScoreDistribution()
            .withMin(data["min"])
            .withMax(data["max"])
            .withCount(data["count"]);
    };
    RankingCategoryScoreDistribution.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "count": this.getCount(),
        };
    };
    return RankingCategoryScoreDistribution;
}());
exports.default = RankingCategoryScoreDistribution;
//# sourceMappingURL=RankingCategoryScoreDistribution.js.map