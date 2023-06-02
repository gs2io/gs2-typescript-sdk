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
var InventoryNamespaceIncreaseCapacityDistributionStatistics = /** @class */ (function () {
    function InventoryNamespaceIncreaseCapacityDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceIncreaseCapacityDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryNamespaceIncreaseCapacityDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryNamespaceIncreaseCapacityDistributionStatistics;
}());
exports.default = InventoryNamespaceIncreaseCapacityDistributionStatistics;
//# sourceMappingURL=InventoryNamespaceIncreaseCapacityDistributionStatistics.js.map