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
var LimitCounterStatistics = /** @class */ (function () {
    function LimitCounterStatistics() {
        this.increase = null;
        this.increaseAmount = null;
    }
    LimitCounterStatistics.prototype.getIncrease = function () {
        return this.increase;
    };
    LimitCounterStatistics.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitCounterStatistics.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitCounterStatistics.prototype.getIncreaseAmount = function () {
        return this.increaseAmount;
    };
    LimitCounterStatistics.prototype.setIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitCounterStatistics.prototype.withIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    LimitCounterStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterStatistics()
            .withIncrease(data["increase"])
            .withIncreaseAmount(data["increaseAmount"]);
    };
    LimitCounterStatistics.prototype.toDict = function () {
        return {
            "increase": this.getIncrease(),
            "increaseAmount": this.getIncreaseAmount(),
        };
    };
    return LimitCounterStatistics;
}());
exports.default = LimitCounterStatistics;
//# sourceMappingURL=LimitCounterStatistics.js.map