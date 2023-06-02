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
var LimitCounterCounterDistributionStatistics = /** @class */ (function () {
    function LimitCounterCounterDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitCounterCounterDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitCounterCounterDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitCounterCounterDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitCounterCounterDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitCounterCounterDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitCounterCounterDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitCounterCounterDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitCounterCounterDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitCounterCounterDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterCounterDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitCounterCounterDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitCounterCounterDistributionStatistics;
}());
exports.default = LimitCounterCounterDistributionStatistics;
//# sourceMappingURL=LimitCounterCounterDistributionStatistics.js.map