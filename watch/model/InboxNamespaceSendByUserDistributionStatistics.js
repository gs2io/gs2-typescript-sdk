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
var InboxNamespaceSendByUserDistributionStatistics = /** @class */ (function () {
    function InboxNamespaceSendByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    InboxNamespaceSendByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    InboxNamespaceSendByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceSendByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    InboxNamespaceSendByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return InboxNamespaceSendByUserDistributionStatistics;
}());
exports.default = InboxNamespaceSendByUserDistributionStatistics;
//# sourceMappingURL=InboxNamespaceSendByUserDistributionStatistics.js.map