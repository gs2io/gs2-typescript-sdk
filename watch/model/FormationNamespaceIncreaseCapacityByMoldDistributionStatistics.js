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
var FormationNamespaceIncreaseCapacityByMoldDistributionStatistics = /** @class */ (function () {
    function FormationNamespaceIncreaseCapacityByMoldDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceIncreaseCapacityByMoldDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return FormationNamespaceIncreaseCapacityByMoldDistributionStatistics;
}());
exports.default = FormationNamespaceIncreaseCapacityByMoldDistributionStatistics;
//# sourceMappingURL=FormationNamespaceIncreaseCapacityByMoldDistributionStatistics.js.map