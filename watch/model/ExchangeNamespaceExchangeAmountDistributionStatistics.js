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
var ExchangeNamespaceExchangeAmountDistributionStatistics = /** @class */ (function () {
    function ExchangeNamespaceExchangeAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExchangeNamespaceExchangeAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExchangeNamespaceExchangeAmountDistributionStatistics;
}());
exports.default = ExchangeNamespaceExchangeAmountDistributionStatistics;
//# sourceMappingURL=ExchangeNamespaceExchangeAmountDistributionStatistics.js.map