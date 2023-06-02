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
var MoneyReceiptVerificationByUserDistributionStatistics = /** @class */ (function () {
    function MoneyReceiptVerificationByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    MoneyReceiptVerificationByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceiptVerificationByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    MoneyReceiptVerificationByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return MoneyReceiptVerificationByUserDistributionStatistics;
}());
exports.default = MoneyReceiptVerificationByUserDistributionStatistics;
//# sourceMappingURL=MoneyReceiptVerificationByUserDistributionStatistics.js.map