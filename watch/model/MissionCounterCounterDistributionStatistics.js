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
var MissionCounterCounterDistributionStatistics = /** @class */ (function () {
    function MissionCounterCounterDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MissionCounterCounterDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MissionCounterCounterDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MissionCounterCounterDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MissionCounterCounterDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MissionCounterCounterDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MissionCounterCounterDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MissionCounterCounterDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MissionCounterCounterDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MissionCounterCounterDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionCounterCounterDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MissionCounterCounterDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MissionCounterCounterDistributionStatistics;
}());
exports.default = MissionCounterCounterDistributionStatistics;
//# sourceMappingURL=MissionCounterCounterDistributionStatistics.js.map