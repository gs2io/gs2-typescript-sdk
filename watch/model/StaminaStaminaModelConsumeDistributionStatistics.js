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
var StaminaStaminaModelConsumeDistributionStatistics = /** @class */ (function () {
    function StaminaStaminaModelConsumeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    StaminaStaminaModelConsumeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModelConsumeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    StaminaStaminaModelConsumeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return StaminaStaminaModelConsumeDistributionStatistics;
}());
exports.default = StaminaStaminaModelConsumeDistributionStatistics;
//# sourceMappingURL=StaminaStaminaModelConsumeDistributionStatistics.js.map