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
var DatastoreNamespaceDownloadByUserDistributionStatistics = /** @class */ (function () {
    function DatastoreNamespaceDownloadByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceDownloadByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    DatastoreNamespaceDownloadByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return DatastoreNamespaceDownloadByUserDistributionStatistics;
}());
exports.default = DatastoreNamespaceDownloadByUserDistributionStatistics;
//# sourceMappingURL=DatastoreNamespaceDownloadByUserDistributionStatistics.js.map