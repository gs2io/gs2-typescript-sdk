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
var ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics = /** @class */ (function () {
    function ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics;
}());
exports.default = ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics;
//# sourceMappingURL=ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics.js.map