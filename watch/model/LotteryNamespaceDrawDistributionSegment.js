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
var LotteryNamespaceDrawDistributionSegment = /** @class */ (function () {
    function LotteryNamespaceDrawDistributionSegment() {
        this.lotteryName = null;
        this.count = null;
    }
    LotteryNamespaceDrawDistributionSegment.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    LotteryNamespaceDrawDistributionSegment.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryNamespaceDrawDistributionSegment.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryNamespaceDrawDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    LotteryNamespaceDrawDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LotteryNamespaceDrawDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDrawDistributionSegment()
            .withLotteryName(data["lotteryName"])
            .withCount(data["count"]);
    };
    LotteryNamespaceDrawDistributionSegment.prototype.toDict = function () {
        return {
            "lotteryName": this.getLotteryName(),
            "count": this.getCount(),
        };
    };
    return LotteryNamespaceDrawDistributionSegment;
}());
exports.default = LotteryNamespaceDrawDistributionSegment;
//# sourceMappingURL=LotteryNamespaceDrawDistributionSegment.js.map