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
var QuestNamespaceQuestDistributionStatistics = /** @class */ (function () {
    function QuestNamespaceQuestDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    QuestNamespaceQuestDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestNamespaceQuestDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestNamespaceQuestDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    QuestNamespaceQuestDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return QuestNamespaceQuestDistributionStatistics;
}());
exports.default = QuestNamespaceQuestDistributionStatistics;
//# sourceMappingURL=QuestNamespaceQuestDistributionStatistics.js.map