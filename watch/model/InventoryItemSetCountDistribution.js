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
var InventoryItemSetCountDistributionStatistics_1 = tslib_1.__importDefault(require("./InventoryItemSetCountDistributionStatistics"));
var InventoryItemSetCountDistributionSegment_1 = tslib_1.__importDefault(require("./InventoryItemSetCountDistributionSegment"));
var InventoryItemSetCountDistribution = /** @class */ (function () {
    function InventoryItemSetCountDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    InventoryItemSetCountDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    InventoryItemSetCountDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItemSetCountDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InventoryItemSetCountDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    InventoryItemSetCountDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryItemSetCountDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryItemSetCountDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSetCountDistribution()
            .withStatistics(InventoryItemSetCountDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return InventoryItemSetCountDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    InventoryItemSetCountDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryItemSetCountDistribution;
}());
exports.default = InventoryItemSetCountDistribution;
//# sourceMappingURL=InventoryItemSetCountDistribution.js.map