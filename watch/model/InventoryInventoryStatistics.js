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
var InventoryInventoryStatisticsDistribution_1 = tslib_1.__importDefault(require("./InventoryInventoryStatisticsDistribution"));
var InventoryInventoryStatistics = /** @class */ (function () {
    function InventoryInventoryStatistics() {
        this.currentInventoryMaxCapacity = null;
        this.distribution = null;
    }
    InventoryInventoryStatistics.prototype.getCurrentInventoryMaxCapacity = function () {
        return this.currentInventoryMaxCapacity;
    };
    InventoryInventoryStatistics.prototype.setCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.withCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.getDistribution = function () {
        return this.distribution;
    };
    InventoryInventoryStatistics.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryInventoryStatistics.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    InventoryInventoryStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryStatistics()
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return InventoryInventoryStatisticsDistribution_1.default.fromDict(item);
            }) : []);
    };
    InventoryInventoryStatistics.prototype.toDict = function () {
        return {
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryInventoryStatistics;
}());
exports.default = InventoryInventoryStatistics;
//# sourceMappingURL=InventoryInventoryStatistics.js.map