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
var LotteryNamespaceDrawAmountDistributionSegment = /** @class */ (function () {
    function LotteryNamespaceDrawAmountDistributionSegment() {
        this.lotteryName = null;
        this.sum = null;
    }
    LotteryNamespaceDrawAmountDistributionSegment.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    LotteryNamespaceDrawAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDrawAmountDistributionSegment()
            .withLotteryName(data["lotteryName"])
            .withSum(data["sum"]);
    };
    LotteryNamespaceDrawAmountDistributionSegment.prototype.toDict = function () {
        return {
            "lotteryName": this.getLotteryName(),
            "sum": this.getSum(),
        };
    };
    return LotteryNamespaceDrawAmountDistributionSegment;
}());
exports.default = LotteryNamespaceDrawAmountDistributionSegment;
//# sourceMappingURL=LotteryNamespaceDrawAmountDistributionSegment.js.map