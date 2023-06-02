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
var ChatNamespacePostByRoomDistributionStatistics = /** @class */ (function () {
    function ChatNamespacePostByRoomDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    ChatNamespacePostByRoomDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    ChatNamespacePostByRoomDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespacePostByRoomDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    ChatNamespacePostByRoomDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return ChatNamespacePostByRoomDistributionStatistics;
}());
exports.default = ChatNamespacePostByRoomDistributionStatistics;
//# sourceMappingURL=ChatNamespacePostByRoomDistributionStatistics.js.map