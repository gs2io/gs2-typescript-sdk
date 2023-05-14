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
var SessionDurationStatistics = /** @class */ (function () {
    function SessionDurationStatistics() {
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    SessionDurationStatistics.prototype.getMin = function () {
        return this.min;
    };
    SessionDurationStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    SessionDurationStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    SessionDurationStatistics.prototype.getMax = function () {
        return this.max;
    };
    SessionDurationStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    SessionDurationStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    SessionDurationStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    SessionDurationStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    SessionDurationStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    SessionDurationStatistics.prototype.getMedian = function () {
        return this.median;
    };
    SessionDurationStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    SessionDurationStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    SessionDurationStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    SessionDurationStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    SessionDurationStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    SessionDurationStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SessionDurationStatistics()
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    SessionDurationStatistics.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return SessionDurationStatistics;
}());
exports.default = SessionDurationStatistics;
//# sourceMappingURL=SessionDurationStatistics.js.map