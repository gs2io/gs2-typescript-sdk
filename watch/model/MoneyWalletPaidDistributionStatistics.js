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
var MoneyWalletPaidDistributionStatistics = /** @class */ (function () {
    function MoneyWalletPaidDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MoneyWalletPaidDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MoneyWalletPaidDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyWalletPaidDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWalletPaidDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MoneyWalletPaidDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MoneyWalletPaidDistributionStatistics;
}());
exports.default = MoneyWalletPaidDistributionStatistics;
//# sourceMappingURL=MoneyWalletPaidDistributionStatistics.js.map