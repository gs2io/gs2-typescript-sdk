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
var LimitCounterDistributionUsage_1 = tslib_1.__importDefault(require("./LimitCounterDistributionUsage"));
var LimitCounterDistribution = /** @class */ (function () {
    function LimitCounterDistribution() {
        this.maxValue = null;
        this.usage = null;
    }
    LimitCounterDistribution.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    LimitCounterDistribution.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    LimitCounterDistribution.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    LimitCounterDistribution.prototype.getUsage = function () {
        return this.usage;
    };
    LimitCounterDistribution.prototype.setUsage = function (usage) {
        this.usage = usage;
        return this;
    };
    LimitCounterDistribution.prototype.withUsage = function (usage) {
        this.usage = usage;
        return this;
    };
    LimitCounterDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterDistribution()
            .withMaxValue(data["maxValue"])
            .withUsage(data.usage ?
            data.usage.map(function (item) {
                return LimitCounterDistributionUsage_1.default.fromDict(item);
            }) : []);
    };
    LimitCounterDistribution.prototype.toDict = function () {
        return {
            "maxValue": this.getMaxValue(),
            "usage": this.getUsage() ?
                this.getUsage().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return LimitCounterDistribution;
}());
exports.default = LimitCounterDistribution;
//# sourceMappingURL=LimitCounterDistribution.js.map