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
var InventoryNamespaceConsumeAmountDistributionStatistics = /** @class */ (function () {
    function InventoryNamespaceConsumeAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceConsumeAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryNamespaceConsumeAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryNamespaceConsumeAmountDistributionStatistics;
}());
exports.default = InventoryNamespaceConsumeAmountDistributionStatistics;
//# sourceMappingURL=InventoryNamespaceConsumeAmountDistributionStatistics.js.map