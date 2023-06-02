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
var ExchangeNamespaceExchangeAmountByUserDistributionStatistics = /** @class */ (function () {
    function ExchangeNamespaceExchangeAmountByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeAmountByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExchangeNamespaceExchangeAmountByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExchangeNamespaceExchangeAmountByUserDistributionStatistics;
}());
exports.default = ExchangeNamespaceExchangeAmountByUserDistributionStatistics;
//# sourceMappingURL=ExchangeNamespaceExchangeAmountByUserDistributionStatistics.js.map