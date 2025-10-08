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
var ShowcaseNamespaceBuyDistributionStatistics = /** @class */ (function () {
    function ShowcaseNamespaceBuyDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ShowcaseNamespaceBuyDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespaceBuyDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ShowcaseNamespaceBuyDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ShowcaseNamespaceBuyDistributionStatistics;
}());
exports.default = ShowcaseNamespaceBuyDistributionStatistics;
//# sourceMappingURL=ShowcaseNamespaceBuyDistributionStatistics.js.map