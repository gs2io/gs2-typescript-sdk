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
var QuestQuestDurationSeconds = /** @class */ (function () {
    function QuestQuestDurationSeconds() {
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    QuestQuestDurationSeconds.prototype.getMin = function () {
        return this.min;
    };
    QuestQuestDurationSeconds.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    QuestQuestDurationSeconds.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    QuestQuestDurationSeconds.prototype.getMax = function () {
        return this.max;
    };
    QuestQuestDurationSeconds.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    QuestQuestDurationSeconds.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    QuestQuestDurationSeconds.prototype.getAvg = function () {
        return this.avg;
    };
    QuestQuestDurationSeconds.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestQuestDurationSeconds.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    QuestQuestDurationSeconds.prototype.getMedian = function () {
        return this.median;
    };
    QuestQuestDurationSeconds.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestQuestDurationSeconds.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    QuestQuestDurationSeconds.prototype.getStddev = function () {
        return this.stddev;
    };
    QuestQuestDurationSeconds.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestQuestDurationSeconds.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    QuestQuestDurationSeconds.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestDurationSeconds()
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    QuestQuestDurationSeconds.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return QuestQuestDurationSeconds;
}());
exports.default = QuestQuestDurationSeconds;
//# sourceMappingURL=QuestQuestDurationSeconds.js.map