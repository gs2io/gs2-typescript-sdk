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
var LimitLimitModelIncreaseByUserDistributionStatistics = /** @class */ (function () {
    function LimitLimitModelIncreaseByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelIncreaseByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitLimitModelIncreaseByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitLimitModelIncreaseByUserDistributionStatistics;
}());
exports.default = LimitLimitModelIncreaseByUserDistributionStatistics;
//# sourceMappingURL=LimitLimitModelIncreaseByUserDistributionStatistics.js.map