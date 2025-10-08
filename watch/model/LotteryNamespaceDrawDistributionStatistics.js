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
var LotteryNamespaceDrawDistributionStatistics = /** @class */ (function () {
    function LotteryNamespaceDrawDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LotteryNamespaceDrawDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LotteryNamespaceDrawDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDrawDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LotteryNamespaceDrawDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LotteryNamespaceDrawDistributionStatistics;
}());
exports.default = LotteryNamespaceDrawDistributionStatistics;
//# sourceMappingURL=LotteryNamespaceDrawDistributionStatistics.js.map