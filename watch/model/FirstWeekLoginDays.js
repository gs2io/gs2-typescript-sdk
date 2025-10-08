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
var FirstWeekLoginDays = /** @class */ (function () {
    function FirstWeekLoginDays() {
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FirstWeekLoginDays.prototype.getMin = function () {
        return this.min;
    };
    FirstWeekLoginDays.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FirstWeekLoginDays.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FirstWeekLoginDays.prototype.getMax = function () {
        return this.max;
    };
    FirstWeekLoginDays.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FirstWeekLoginDays.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FirstWeekLoginDays.prototype.getAvg = function () {
        return this.avg;
    };
    FirstWeekLoginDays.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FirstWeekLoginDays.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FirstWeekLoginDays.prototype.getMedian = function () {
        return this.median;
    };
    FirstWeekLoginDays.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FirstWeekLoginDays.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FirstWeekLoginDays.prototype.getStddev = function () {
        return this.stddev;
    };
    FirstWeekLoginDays.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FirstWeekLoginDays.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FirstWeekLoginDays.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FirstWeekLoginDays()
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FirstWeekLoginDays.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FirstWeekLoginDays;
}());
exports.default = FirstWeekLoginDays;
//# sourceMappingURL=FirstWeekLoginDays.js.map