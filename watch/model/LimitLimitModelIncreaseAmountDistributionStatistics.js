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
var LimitLimitModelIncreaseAmountDistributionStatistics = /** @class */ (function () {
    function LimitLimitModelIncreaseAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelIncreaseAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitLimitModelIncreaseAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitLimitModelIncreaseAmountDistributionStatistics;
}());
exports.default = LimitLimitModelIncreaseAmountDistributionStatistics;
//# sourceMappingURL=LimitLimitModelIncreaseAmountDistributionStatistics.js.map