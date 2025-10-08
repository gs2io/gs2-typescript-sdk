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
var FriendNamespaceRejectByUserDistributionStatistics = /** @class */ (function () {
    function FriendNamespaceRejectByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceRejectByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceRejectByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FriendNamespaceRejectByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FriendNamespaceRejectByUserDistributionStatistics;
}());
exports.default = FriendNamespaceRejectByUserDistributionStatistics;
//# sourceMappingURL=FriendNamespaceRejectByUserDistributionStatistics.js.map