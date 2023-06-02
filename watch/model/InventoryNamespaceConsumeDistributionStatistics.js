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
var InventoryNamespaceConsumeDistributionStatistics = /** @class */ (function () {
    function InventoryNamespaceConsumeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryNamespaceConsumeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryNamespaceConsumeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceConsumeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryNamespaceConsumeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryNamespaceConsumeDistributionStatistics;
}());
exports.default = InventoryNamespaceConsumeDistributionStatistics;
//# sourceMappingURL=InventoryNamespaceConsumeDistributionStatistics.js.map