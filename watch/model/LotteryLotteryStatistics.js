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
var LotteryLotteryStatistics = /** @class */ (function () {
    function LotteryLotteryStatistics() {
        this.draw = null;
        this.drawAmount = null;
    }
    LotteryLotteryStatistics.prototype.getDraw = function () {
        return this.draw;
    };
    LotteryLotteryStatistics.prototype.setDraw = function (draw) {
        this.draw = draw;
        return this;
    };
    LotteryLotteryStatistics.prototype.withDraw = function (draw) {
        this.draw = draw;
        return this;
    };
    LotteryLotteryStatistics.prototype.getDrawAmount = function () {
        return this.drawAmount;
    };
    LotteryLotteryStatistics.prototype.setDrawAmount = function (drawAmount) {
        this.drawAmount = drawAmount;
        return this;
    };
    LotteryLotteryStatistics.prototype.withDrawAmount = function (drawAmount) {
        this.drawAmount = drawAmount;
        return this;
    };
    LotteryLotteryStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryStatistics()
            .withDraw(data["draw"])
            .withDrawAmount(data["drawAmount"]);
    };
    LotteryLotteryStatistics.prototype.toDict = function () {
        return {
            "draw": this.getDraw(),
            "drawAmount": this.getDrawAmount(),
        };
    };
    return LotteryLotteryStatistics;
}());
exports.default = LotteryLotteryStatistics;
//# sourceMappingURL=LotteryLotteryStatistics.js.map