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
var MoneyNamespaceVerificationDistributionStatistics = /** @class */ (function () {
    function MoneyNamespaceVerificationDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MoneyNamespaceVerificationDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyNamespaceVerificationDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceVerificationDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MoneyNamespaceVerificationDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MoneyNamespaceVerificationDistributionStatistics;
}());
exports.default = MoneyNamespaceVerificationDistributionStatistics;
//# sourceMappingURL=MoneyNamespaceVerificationDistributionStatistics.js.map