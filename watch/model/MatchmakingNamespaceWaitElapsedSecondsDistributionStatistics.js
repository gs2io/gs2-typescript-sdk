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
var MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics = /** @class */ (function () {
    function MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics;
}());
exports.default = MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics;
//# sourceMappingURL=MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.js.map