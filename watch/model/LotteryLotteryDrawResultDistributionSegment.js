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
var LotteryLotteryDrawResultDistributionSegment = /** @class */ (function () {
    function LotteryLotteryDrawResultDistributionSegment() {
        this.prizeId = null;
        this.count = null;
    }
    LotteryLotteryDrawResultDistributionSegment.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryLotteryDrawResultDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryDrawResultDistributionSegment()
            .withPrizeId(data["prizeId"])
            .withCount(data["count"]);
    };
    LotteryLotteryDrawResultDistributionSegment.prototype.toDict = function () {
        return {
            "prizeId": this.getPrizeId(),
            "count": this.getCount(),
        };
    };
    return LotteryLotteryDrawResultDistributionSegment;
}());
exports.default = LotteryLotteryDrawResultDistributionSegment;
//# sourceMappingURL=LotteryLotteryDrawResultDistributionSegment.js.map