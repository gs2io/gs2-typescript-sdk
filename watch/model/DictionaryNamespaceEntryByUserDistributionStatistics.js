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
var DictionaryNamespaceEntryByUserDistributionStatistics = /** @class */ (function () {
    function DictionaryNamespaceEntryByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceEntryByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    DictionaryNamespaceEntryByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return DictionaryNamespaceEntryByUserDistributionStatistics;
}());
exports.default = DictionaryNamespaceEntryByUserDistributionStatistics;
//# sourceMappingURL=DictionaryNamespaceEntryByUserDistributionStatistics.js.map