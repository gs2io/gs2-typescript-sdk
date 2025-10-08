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
var DatastoreNamespaceDataSizeDistributionStatistics = /** @class */ (function () {
    function DatastoreNamespaceDataSizeDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceDataSizeDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceDataSizeDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    DatastoreNamespaceDataSizeDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return DatastoreNamespaceDataSizeDistributionStatistics;
}());
exports.default = DatastoreNamespaceDataSizeDistributionStatistics;
//# sourceMappingURL=DatastoreNamespaceDataSizeDistributionStatistics.js.map