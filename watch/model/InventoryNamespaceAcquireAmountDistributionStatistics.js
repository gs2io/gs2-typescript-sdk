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
var InventoryNamespaceAcquireAmountDistributionStatistics = /** @class */ (function () {
    function InventoryNamespaceAcquireAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceAcquireAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryNamespaceAcquireAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryNamespaceAcquireAmountDistributionStatistics;
}());
exports.default = InventoryNamespaceAcquireAmountDistributionStatistics;
//# sourceMappingURL=InventoryNamespaceAcquireAmountDistributionStatistics.js.map