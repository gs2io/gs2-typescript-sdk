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
var FormationNamespaceUpdateByMoldDistributionStatistics = /** @class */ (function () {
    function FormationNamespaceUpdateByMoldDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceUpdateByMoldDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationNamespaceUpdateByMoldDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationNamespaceUpdateByMoldDistributionStatistics;
}());
exports.default = FormationNamespaceUpdateByMoldDistributionStatistics;
//# sourceMappingURL=FormationNamespaceUpdateByMoldDistributionStatistics.js.map