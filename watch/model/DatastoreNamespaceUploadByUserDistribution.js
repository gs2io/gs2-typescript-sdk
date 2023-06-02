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
var tslib_1 = require("tslib");
var DatastoreNamespaceUploadByUserDistributionStatistics_1 = tslib_1.__importDefault(require("./DatastoreNamespaceUploadByUserDistributionStatistics"));
var DatastoreNamespaceUploadByUserDistributionSegment_1 = tslib_1.__importDefault(require("./DatastoreNamespaceUploadByUserDistributionSegment"));
var DatastoreNamespaceUploadByUserDistribution = /** @class */ (function () {
    function DatastoreNamespaceUploadByUserDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    DatastoreNamespaceUploadByUserDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    DatastoreNamespaceUploadByUserDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DatastoreNamespaceUploadByUserDistribution()
            .withStatistics(DatastoreNamespaceUploadByUserDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return DatastoreNamespaceUploadByUserDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    DatastoreNamespaceUploadByUserDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DatastoreNamespaceUploadByUserDistribution;
}());
exports.default = DatastoreNamespaceUploadByUserDistribution;
//# sourceMappingURL=DatastoreNamespaceUploadByUserDistribution.js.map