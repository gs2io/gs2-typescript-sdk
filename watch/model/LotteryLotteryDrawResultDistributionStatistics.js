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
var LotteryLotteryDrawResultDistributionStatistics = /** @class */ (function () {
    function LotteryLotteryDrawResultDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LotteryLotteryDrawResultDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryLotteryDrawResultDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryDrawResultDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LotteryLotteryDrawResultDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LotteryLotteryDrawResultDistributionStatistics;
}());
exports.default = LotteryLotteryDrawResultDistributionStatistics;
//# sourceMappingURL=LotteryLotteryDrawResultDistributionStatistics.js.map