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
var MoneyNamespaceRevenueDistributionStatistics_1 = tslib_1.__importDefault(require("./MoneyNamespaceRevenueDistributionStatistics"));
var MoneyNamespaceRevenueDistributionSegment_1 = tslib_1.__importDefault(require("./MoneyNamespaceRevenueDistributionSegment"));
var MoneyNamespaceRevenueDistribution = /** @class */ (function () {
    function MoneyNamespaceRevenueDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    MoneyNamespaceRevenueDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    MoneyNamespaceRevenueDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyNamespaceRevenueDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyNamespaceRevenueDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    MoneyNamespaceRevenueDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    MoneyNamespaceRevenueDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    MoneyNamespaceRevenueDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceRevenueDistribution()
            .withStatistics(MoneyNamespaceRevenueDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return MoneyNamespaceRevenueDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    MoneyNamespaceRevenueDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return MoneyNamespaceRevenueDistribution;
}());
exports.default = MoneyNamespaceRevenueDistribution;
//# sourceMappingURL=MoneyNamespaceRevenueDistribution.js.map