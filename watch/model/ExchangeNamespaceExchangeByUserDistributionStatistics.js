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
var ExchangeNamespaceExchangeByUserDistributionStatistics = /** @class */ (function () {
    function ExchangeNamespaceExchangeByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExchangeNamespaceExchangeByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExchangeNamespaceExchangeByUserDistributionStatistics;
}());
exports.default = ExchangeNamespaceExchangeByUserDistributionStatistics;
//# sourceMappingURL=ExchangeNamespaceExchangeByUserDistributionStatistics.js.map