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
var FormationMoldCapacityDistributionStatistics = /** @class */ (function () {
    function FormationMoldCapacityDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationMoldCapacityDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationMoldCapacityDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationMoldCapacityDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldCapacityDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationMoldCapacityDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationMoldCapacityDistributionStatistics;
}());
exports.default = FormationMoldCapacityDistributionStatistics;
//# sourceMappingURL=FormationMoldCapacityDistributionStatistics.js.map