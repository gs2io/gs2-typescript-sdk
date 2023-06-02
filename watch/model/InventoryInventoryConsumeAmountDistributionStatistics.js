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
var InventoryInventoryConsumeAmountDistributionStatistics = /** @class */ (function () {
    function InventoryInventoryConsumeAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryConsumeAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InventoryInventoryConsumeAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InventoryInventoryConsumeAmountDistributionStatistics;
}());
exports.default = InventoryInventoryConsumeAmountDistributionStatistics;
//# sourceMappingURL=InventoryInventoryConsumeAmountDistributionStatistics.js.map