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
var LotteryLotteryDrawResultDistribution_1 = tslib_1.__importDefault(require("./LotteryLotteryDrawResultDistribution"));
var LotteryLotteryDistributions = /** @class */ (function () {
    function LotteryLotteryDistributions() {
        this.drawResult = null;
    }
    LotteryLotteryDistributions.prototype.getDrawResult = function () {
        return this.drawResult;
    };
    LotteryLotteryDistributions.prototype.setDrawResult = function (drawResult) {
        this.drawResult = drawResult;
        return this;
    };
    LotteryLotteryDistributions.prototype.withDrawResult = function (drawResult) {
        this.drawResult = drawResult;
        return this;
    };
    LotteryLotteryDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryDistributions()
            .withDrawResult(LotteryLotteryDrawResultDistribution_1.default.fromDict(data["drawResult"]));
    };
    LotteryLotteryDistributions.prototype.toDict = function () {
        var _a;
        return {
            "drawResult": (_a = this.getDrawResult()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return LotteryLotteryDistributions;
}());
exports.default = LotteryLotteryDistributions;
//# sourceMappingURL=LotteryLotteryDistributions.js.map