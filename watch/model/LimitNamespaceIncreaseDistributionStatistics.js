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
var LimitNamespaceIncreaseDistributionStatistics = /** @class */ (function () {
    function LimitNamespaceIncreaseDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    LimitNamespaceIncreaseDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    LimitNamespaceIncreaseDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespaceIncreaseDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    LimitNamespaceIncreaseDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return LimitNamespaceIncreaseDistributionStatistics;
}());
exports.default = LimitNamespaceIncreaseDistributionStatistics;
//# sourceMappingURL=LimitNamespaceIncreaseDistributionStatistics.js.map