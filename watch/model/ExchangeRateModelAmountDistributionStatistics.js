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
var ExchangeRateModelAmountDistributionStatistics = /** @class */ (function () {
    function ExchangeRateModelAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExchangeRateModelAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeRateModelAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeRateModelAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExchangeRateModelAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExchangeRateModelAmountDistributionStatistics;
}());
exports.default = ExchangeRateModelAmountDistributionStatistics;
//# sourceMappingURL=ExchangeRateModelAmountDistributionStatistics.js.map