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
var InventoryNamespaceAcquireDistributionStatistics = /** @class */ (function () {
    function InventoryNamespaceAcquireDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryNamespaceAcquireDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceAcquireDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceAcquireDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryNamespaceAcquireDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryNamespaceAcquireDistributionStatistics;
}());
exports.default = InventoryNamespaceAcquireDistributionStatistics;
//# sourceMappingURL=InventoryNamespaceAcquireDistributionStatistics.js.map