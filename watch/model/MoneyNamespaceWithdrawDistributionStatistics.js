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
var MoneyNamespaceWithdrawDistributionStatistics = /** @class */ (function () {
    function MoneyNamespaceWithdrawDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyNamespaceWithdrawDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceWithdrawDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MoneyNamespaceWithdrawDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MoneyNamespaceWithdrawDistributionStatistics;
}());
exports.default = MoneyNamespaceWithdrawDistributionStatistics;
//# sourceMappingURL=MoneyNamespaceWithdrawDistributionStatistics.js.map