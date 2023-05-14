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
var MoneyStatistics = /** @class */ (function () {
    function MoneyStatistics() {
        this.arpu = null;
        this.arppu = null;
        this.payingRate = null;
    }
    MoneyStatistics.prototype.getArpu = function () {
        return this.arpu;
    };
    MoneyStatistics.prototype.setArpu = function (arpu) {
        this.arpu = arpu;
        return this;
    };
    MoneyStatistics.prototype.withArpu = function (arpu) {
        this.arpu = arpu;
        return this;
    };
    MoneyStatistics.prototype.getArppu = function () {
        return this.arppu;
    };
    MoneyStatistics.prototype.setArppu = function (arppu) {
        this.arppu = arppu;
        return this;
    };
    MoneyStatistics.prototype.withArppu = function (arppu) {
        this.arppu = arppu;
        return this;
    };
    MoneyStatistics.prototype.getPayingRate = function () {
        return this.payingRate;
    };
    MoneyStatistics.prototype.setPayingRate = function (payingRate) {
        this.payingRate = payingRate;
        return this;
    };
    MoneyStatistics.prototype.withPayingRate = function (payingRate) {
        this.payingRate = payingRate;
        return this;
    };
    MoneyStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyStatistics()
            .withArpu(data["arpu"])
            .withArppu(data["arppu"])
            .withPayingRate(data["payingRate"]);
    };
    MoneyStatistics.prototype.toDict = function () {
        return {
            "arpu": this.getArpu(),
            "arppu": this.getArppu(),
            "payingRate": this.getPayingRate(),
        };
    };
    return MoneyStatistics;
}());
exports.default = MoneyStatistics;
//# sourceMappingURL=MoneyStatistics.js.map