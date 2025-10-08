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
var StaminaNamespaceConsumeDistributionStatistics = /** @class */ (function () {
    function StaminaNamespaceConsumeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    StaminaNamespaceConsumeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaNamespaceConsumeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceConsumeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    StaminaNamespaceConsumeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return StaminaNamespaceConsumeDistributionStatistics;
}());
exports.default = StaminaNamespaceConsumeDistributionStatistics;
//# sourceMappingURL=StaminaNamespaceConsumeDistributionStatistics.js.map