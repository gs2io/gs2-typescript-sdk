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
var DictionaryNamespaceEntryByNameDistributionStatistics = /** @class */ (function () {
    function DictionaryNamespaceEntryByNameDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceEntryByNameDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    DictionaryNamespaceEntryByNameDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return DictionaryNamespaceEntryByNameDistributionStatistics;
}());
exports.default = DictionaryNamespaceEntryByNameDistributionStatistics;
//# sourceMappingURL=DictionaryNamespaceEntryByNameDistributionStatistics.js.map