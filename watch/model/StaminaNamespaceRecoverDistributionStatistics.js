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
var StaminaNamespaceRecoverDistributionStatistics = /** @class */ (function () {
    function StaminaNamespaceRecoverDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    StaminaNamespaceRecoverDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaNamespaceRecoverDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceRecoverDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    StaminaNamespaceRecoverDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return StaminaNamespaceRecoverDistributionStatistics;
}());
exports.default = StaminaNamespaceRecoverDistributionStatistics;
//# sourceMappingURL=StaminaNamespaceRecoverDistributionStatistics.js.map