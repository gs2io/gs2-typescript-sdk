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
var MoneyWalletFreeDistributionStatistics = /** @class */ (function () {
    function MoneyWalletFreeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MoneyWalletFreeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MoneyWalletFreeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyWalletFreeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWalletFreeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MoneyWalletFreeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MoneyWalletFreeDistributionStatistics;
}());
exports.default = MoneyWalletFreeDistributionStatistics;
//# sourceMappingURL=MoneyWalletFreeDistributionStatistics.js.map