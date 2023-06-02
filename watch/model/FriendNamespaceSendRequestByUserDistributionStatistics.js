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
var FriendNamespaceSendRequestByUserDistributionStatistics = /** @class */ (function () {
    function FriendNamespaceSendRequestByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceSendRequestByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FriendNamespaceSendRequestByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FriendNamespaceSendRequestByUserDistributionStatistics;
}());
exports.default = FriendNamespaceSendRequestByUserDistributionStatistics;
//# sourceMappingURL=FriendNamespaceSendRequestByUserDistributionStatistics.js.map