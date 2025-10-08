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
var FormationFormSlotDistributionStatistics = /** @class */ (function () {
    function FormationFormSlotDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationFormSlotDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationFormSlotDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationFormSlotDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationFormSlotDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationFormSlotDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationFormSlotDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationFormSlotDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationFormSlotDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationFormSlotDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationFormSlotDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationFormSlotDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationFormSlotDistributionStatistics;
}());
exports.default = FormationFormSlotDistributionStatistics;
//# sourceMappingURL=FormationFormSlotDistributionStatistics.js.map