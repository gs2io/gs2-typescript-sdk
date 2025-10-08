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
var DatastoreNamespaceUploadByUserDistributionStatistics = /** @class */ (function () {
    function DatastoreNamespaceUploadByUserDistributionStatistics() {
        this.count = null;
        this.min = null;
        this.max = null;
        this.avg = null;
        this.median = null;
        this.stddev = null;
    }
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getCount = function () {
        return this.count;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getMin = function () {
        return this.min;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getMax = function () {
        return this.max;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getAvg = function () {
        return this.avg;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getMedian = function () {
        return this.median;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withMedian = function (median) {
        this.median = median;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.getStddev = function () {
        return this.stddev;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.setStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.withStddev = function (stddev) {
        this.stddev = stddev;
        return this;
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceUploadByUserDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    };
    DatastoreNamespaceUploadByUserDistributionStatistics.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    };
    return DatastoreNamespaceUploadByUserDistributionStatistics;
}());
exports.default = DatastoreNamespaceUploadByUserDistributionStatistics;
//# sourceMappingURL=DatastoreNamespaceUploadByUserDistributionStatistics.js.map