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
var ShowcaseShowcaseBuyDistributionStatistics = /** @class */ (function () {
    function ShowcaseShowcaseBuyDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ShowcaseShowcaseBuyDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseBuyDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ShowcaseShowcaseBuyDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ShowcaseShowcaseBuyDistributionStatistics;
}());
exports.default = ShowcaseShowcaseBuyDistributionStatistics;
//# sourceMappingURL=ShowcaseShowcaseBuyDistributionStatistics.js.map