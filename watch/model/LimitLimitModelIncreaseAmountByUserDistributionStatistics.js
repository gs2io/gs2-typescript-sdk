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
var LimitLimitModelIncreaseAmountByUserDistributionStatistics = /** @class */ (function () {
    function LimitLimitModelIncreaseAmountByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelIncreaseAmountByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitLimitModelIncreaseAmountByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitLimitModelIncreaseAmountByUserDistributionStatistics;
}());
exports.default = LimitLimitModelIncreaseAmountByUserDistributionStatistics;
//# sourceMappingURL=LimitLimitModelIncreaseAmountByUserDistributionStatistics.js.map