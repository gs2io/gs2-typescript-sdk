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
var ChatNamespacePostByUserDistributionStatistics = /** @class */ (function () {
    function ChatNamespacePostByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ChatNamespacePostByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ChatNamespacePostByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespacePostByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ChatNamespacePostByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ChatNamespacePostByUserDistributionStatistics;
}());
exports.default = ChatNamespacePostByUserDistributionStatistics;
//# sourceMappingURL=ChatNamespacePostByUserDistributionStatistics.js.map