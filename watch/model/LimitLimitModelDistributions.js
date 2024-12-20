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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var LimitLimitModelDistributions = /** @class */ (function () {
    function LimitLimitModelDistributions() {
        this.increase = null;
        this.increaseAmount = null;
        this.increaseByUser = null;
        this.increaseAmountByUser = null;
    }
    LimitLimitModelDistributions.prototype.getIncrease = function () {
        return this.increase;
    };
    LimitLimitModelDistributions.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitLimitModelDistributions.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitLimitModelDistributions.prototype.getIncreaseAmount = function () {
        return this.increaseAmount;
    };
    LimitLimitModelDistributions.prototype.setIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitLimitModelDistributions.prototype.withIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitLimitModelDistributions.prototype.getIncreaseByUser = function () {
        return this.increaseByUser;
    };
    LimitLimitModelDistributions.prototype.setIncreaseByUser = function (increaseByUser) {
        this.increaseByUser = increaseByUser;
        return this;
    };
    LimitLimitModelDistributions.prototype.withIncreaseByUser = function (increaseByUser) {
        this.increaseByUser = increaseByUser;
        return this;
    };
    LimitLimitModelDistributions.prototype.getIncreaseAmountByUser = function () {
        return this.increaseAmountByUser;
    };
    LimitLimitModelDistributions.prototype.setIncreaseAmountByUser = function (increaseAmountByUser) {
        this.increaseAmountByUser = increaseAmountByUser;
        return this;
    };
    LimitLimitModelDistributions.prototype.withIncreaseAmountByUser = function (increaseAmountByUser) {
        this.increaseAmountByUser = increaseAmountByUser;
        return this;
    };
    LimitLimitModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelDistributions()
            .withIncrease(Gs2Watch.LimitLimitModelIncreaseDistribution.fromDict(data["increase"]))
            .withIncreaseAmount(Gs2Watch.LimitLimitModelIncreaseAmountDistribution.fromDict(data["increaseAmount"]))
            .withIncreaseByUser(Gs2Watch.LimitLimitModelIncreaseByUserDistribution.fromDict(data["increaseByUser"]))
            .withIncreaseAmountByUser(Gs2Watch.LimitLimitModelIncreaseAmountByUserDistribution.fromDict(data["increaseAmountByUser"]));
    };
    LimitLimitModelDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "increase": (_a = this.getIncrease()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "increaseAmount": (_b = this.getIncreaseAmount()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "increaseByUser": (_c = this.getIncreaseByUser()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "increaseAmountByUser": (_d = this.getIncreaseAmountByUser()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return LimitLimitModelDistributions;
}());
exports.default = LimitLimitModelDistributions;
//# sourceMappingURL=LimitLimitModelDistributions.js.map