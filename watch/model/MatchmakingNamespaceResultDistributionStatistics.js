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
var MatchmakingNamespaceResultDistributionStatistics = /** @class */ (function () {
    function MatchmakingNamespaceResultDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MatchmakingNamespaceResultDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MatchmakingNamespaceResultDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceResultDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MatchmakingNamespaceResultDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MatchmakingNamespaceResultDistributionStatistics;
}());
exports.default = MatchmakingNamespaceResultDistributionStatistics;
//# sourceMappingURL=MatchmakingNamespaceResultDistributionStatistics.js.map