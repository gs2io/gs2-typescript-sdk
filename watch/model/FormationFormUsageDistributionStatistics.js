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
var FormationFormUsageDistributionStatistics = /** @class */ (function () {
    function FormationFormUsageDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationFormUsageDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationFormUsageDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationFormUsageDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationFormUsageDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationFormUsageDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationFormUsageDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationFormUsageDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationFormUsageDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationFormUsageDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationFormUsageDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationFormUsageDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationFormUsageDistributionStatistics;
}());
exports.default = FormationFormUsageDistributionStatistics;
//# sourceMappingURL=FormationFormUsageDistributionStatistics.js.map