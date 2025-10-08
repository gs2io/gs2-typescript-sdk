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
var FriendNamespaceNewFollowByUserDistributionStatistics = /** @class */ (function () {
    function FriendNamespaceNewFollowByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceNewFollowByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FriendNamespaceNewFollowByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FriendNamespaceNewFollowByUserDistributionStatistics;
}());
exports.default = FriendNamespaceNewFollowByUserDistributionStatistics;
//# sourceMappingURL=FriendNamespaceNewFollowByUserDistributionStatistics.js.map