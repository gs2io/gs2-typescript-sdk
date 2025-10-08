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
var InventoryInventoryConsumeDistributionStatistics = /** @class */ (function () {
    function InventoryInventoryConsumeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryInventoryConsumeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryInventoryConsumeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryConsumeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryInventoryConsumeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryInventoryConsumeDistributionStatistics;
}());
exports.default = InventoryInventoryConsumeDistributionStatistics;
//# sourceMappingURL=InventoryInventoryConsumeDistributionStatistics.js.map