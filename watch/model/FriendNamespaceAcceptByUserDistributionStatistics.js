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
var FriendNamespaceAcceptByUserDistributionStatistics = /** @class */ (function () {
    function FriendNamespaceAcceptByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceAcceptByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceAcceptByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FriendNamespaceAcceptByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FriendNamespaceAcceptByUserDistributionStatistics;
}());
exports.default = FriendNamespaceAcceptByUserDistributionStatistics;
//# sourceMappingURL=FriendNamespaceAcceptByUserDistributionStatistics.js.map