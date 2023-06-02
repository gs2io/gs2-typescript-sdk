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
var KeyNamespaceEncryptDistributionStatistics = /** @class */ (function () {
    function KeyNamespaceEncryptDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    KeyNamespaceEncryptDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    KeyNamespaceEncryptDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceEncryptDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    KeyNamespaceEncryptDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return KeyNamespaceEncryptDistributionStatistics;
}());
exports.default = KeyNamespaceEncryptDistributionStatistics;
//# sourceMappingURL=KeyNamespaceEncryptDistributionStatistics.js.map