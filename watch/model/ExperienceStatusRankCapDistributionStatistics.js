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
var ExperienceStatusRankCapDistributionStatistics = /** @class */ (function () {
    function ExperienceStatusRankCapDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExperienceStatusRankCapDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceStatusRankCapDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatusRankCapDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExperienceStatusRankCapDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExperienceStatusRankCapDistributionStatistics;
}());
exports.default = ExperienceStatusRankCapDistributionStatistics;
//# sourceMappingURL=ExperienceStatusRankCapDistributionStatistics.js.map