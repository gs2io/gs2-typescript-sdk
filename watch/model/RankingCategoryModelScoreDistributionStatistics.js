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
var RankingCategoryModelScoreDistributionStatistics = /** @class */ (function () {
    function RankingCategoryModelScoreDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    RankingCategoryModelScoreDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    RankingCategoryModelScoreDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModelScoreDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    RankingCategoryModelScoreDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return RankingCategoryModelScoreDistributionStatistics;
}());
exports.default = RankingCategoryModelScoreDistributionStatistics;
//# sourceMappingURL=RankingCategoryModelScoreDistributionStatistics.js.map