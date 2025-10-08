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
var MissionNamespaceIncreaseAmountDistributionStatistics = /** @class */ (function () {
    function MissionNamespaceIncreaseAmountDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseAmountDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MissionNamespaceIncreaseAmountDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MissionNamespaceIncreaseAmountDistributionStatistics;
}());
exports.default = MissionNamespaceIncreaseAmountDistributionStatistics;
//# sourceMappingURL=MissionNamespaceIncreaseAmountDistributionStatistics.js.map