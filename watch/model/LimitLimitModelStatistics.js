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
var LimitLimitModelStatistics = /** @class */ (function () {
    function LimitLimitModelStatistics() {
        this.increase = null;
        this.increaseAmount = null;
    }
    LimitLimitModelStatistics.prototype.getIncrease = function () {
        return this.increase;
    };
    LimitLimitModelStatistics.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitLimitModelStatistics.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitLimitModelStatistics.prototype.getIncreaseAmount = function () {
        return this.increaseAmount;
    };
    LimitLimitModelStatistics.prototype.setIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitLimitModelStatistics.prototype.withIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitLimitModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelStatistics()
            .withIncrease(data["increase"])
            .withIncreaseAmount(data["increaseAmount"]);
    };
    LimitLimitModelStatistics.prototype.toDict = function () {
        return {
            "increase": this.getIncrease(),
            "increaseAmount": this.getIncreaseAmount(),
        };
    };
    return LimitLimitModelStatistics;
}());
exports.default = LimitLimitModelStatistics;
//# sourceMappingURL=LimitLimitModelStatistics.js.map