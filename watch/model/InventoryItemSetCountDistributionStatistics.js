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
var InventoryItemSetCountDistributionStatistics = /** @class */ (function () {
    function InventoryItemSetCountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryItemSetCountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryItemSetCountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryItemSetCountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSetCountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryItemSetCountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryItemSetCountDistributionStatistics;
}());
exports.default = InventoryItemSetCountDistributionStatistics;
//# sourceMappingURL=InventoryItemSetCountDistributionStatistics.js.map