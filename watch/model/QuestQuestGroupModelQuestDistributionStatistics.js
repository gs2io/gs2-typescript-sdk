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
var QuestQuestGroupModelQuestDistributionStatistics = /** @class */ (function () {
    function QuestQuestGroupModelQuestDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestQuestGroupModelQuestDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelQuestDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    QuestQuestGroupModelQuestDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return QuestQuestGroupModelQuestDistributionStatistics;
}());
exports.default = QuestQuestGroupModelQuestDistributionStatistics;
//# sourceMappingURL=QuestQuestGroupModelQuestDistributionStatistics.js.map