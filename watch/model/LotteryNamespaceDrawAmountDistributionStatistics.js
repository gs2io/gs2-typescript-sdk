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
var LotteryNamespaceDrawAmountDistributionStatistics = /** @class */ (function () {
    function LotteryNamespaceDrawAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDrawAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LotteryNamespaceDrawAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LotteryNamespaceDrawAmountDistributionStatistics;
}());
exports.default = LotteryNamespaceDrawAmountDistributionStatistics;
//# sourceMappingURL=LotteryNamespaceDrawAmountDistributionStatistics.js.map