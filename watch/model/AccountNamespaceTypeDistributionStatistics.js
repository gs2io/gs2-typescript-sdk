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
var AccountNamespaceTypeDistributionStatistics = /** @class */ (function () {
    function AccountNamespaceTypeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    AccountNamespaceTypeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    AccountNamespaceTypeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespaceTypeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    AccountNamespaceTypeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return AccountNamespaceTypeDistributionStatistics;
}());
exports.default = AccountNamespaceTypeDistributionStatistics;
//# sourceMappingURL=AccountNamespaceTypeDistributionStatistics.js.map