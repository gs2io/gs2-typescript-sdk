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
var LimitLimitModelIncreaseDistributionStatistics = /** @class */ (function () {
    function LimitLimitModelIncreaseDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitLimitModelIncreaseDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelIncreaseDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitLimitModelIncreaseDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitLimitModelIncreaseDistributionStatistics;
}());
exports.default = LimitLimitModelIncreaseDistributionStatistics;
//# sourceMappingURL=LimitLimitModelIncreaseDistributionStatistics.js.map