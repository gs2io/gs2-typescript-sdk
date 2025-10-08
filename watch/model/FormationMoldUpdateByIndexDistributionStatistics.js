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
var FormationMoldUpdateByIndexDistributionStatistics = /** @class */ (function () {
    function FormationMoldUpdateByIndexDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationMoldUpdateByIndexDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldUpdateByIndexDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationMoldUpdateByIndexDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationMoldUpdateByIndexDistributionStatistics;
}());
exports.default = FormationMoldUpdateByIndexDistributionStatistics;
//# sourceMappingURL=FormationMoldUpdateByIndexDistributionStatistics.js.map