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
var ExchangeNamespaceExchangeDistributionStatistics = /** @class */ (function () {
    function ExchangeNamespaceExchangeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ExchangeNamespaceExchangeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ExchangeNamespaceExchangeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ExchangeNamespaceExchangeDistributionStatistics;
}());
exports.default = ExchangeNamespaceExchangeDistributionStatistics;
//# sourceMappingURL=ExchangeNamespaceExchangeDistributionStatistics.js.map