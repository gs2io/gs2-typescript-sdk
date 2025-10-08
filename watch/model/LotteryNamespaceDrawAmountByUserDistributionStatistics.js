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
var LotteryNamespaceDrawAmountByUserDistributionStatistics = /** @class */ (function () {
    function LotteryNamespaceDrawAmountByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDrawAmountByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LotteryNamespaceDrawAmountByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LotteryNamespaceDrawAmountByUserDistributionStatistics;
}());
exports.default = LotteryNamespaceDrawAmountByUserDistributionStatistics;
//# sourceMappingURL=LotteryNamespaceDrawAmountByUserDistributionStatistics.js.map