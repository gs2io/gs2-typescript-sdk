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
var ExperienceStatusRankDistributionStatistics = /** @class */ (function () {
    function ExperienceStatusRankDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExperienceStatusRankDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExperienceStatusRankDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceStatusRankDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatusRankDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExperienceStatusRankDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExperienceStatusRankDistributionStatistics;
}());
exports.default = ExperienceStatusRankDistributionStatistics;
//# sourceMappingURL=ExperienceStatusRankDistributionStatistics.js.map