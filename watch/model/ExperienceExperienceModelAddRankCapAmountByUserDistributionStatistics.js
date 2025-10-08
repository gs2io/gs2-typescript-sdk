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
var ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics = /** @class */ (function () {
    function ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics;
}());
exports.default = ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics;
//# sourceMappingURL=ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics.js.map