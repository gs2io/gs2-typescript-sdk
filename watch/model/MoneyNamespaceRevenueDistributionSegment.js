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
var MoneyNamespaceRevenueDistributionSegment = /** @class */ (function () {
    function MoneyNamespaceRevenueDistributionSegment() {
        this.slot = null;
        this.sum = null;
    }
    MoneyNamespaceRevenueDistributionSegment.prototype.getSlot = function () {
        return this.slot;
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    MoneyNamespaceRevenueDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceRevenueDistributionSegment()
            .withSlot(data["slot"])
            .withSum(data["sum"]);
    };
    MoneyNamespaceRevenueDistributionSegment.prototype.toDict = function () {
        return {
            "slot": this.getSlot(),
            "sum": this.getSum(),
        };
    };
    return MoneyNamespaceRevenueDistributionSegment;
}());
exports.default = MoneyNamespaceRevenueDistributionSegment;
//# sourceMappingURL=MoneyNamespaceRevenueDistributionSegment.js.map