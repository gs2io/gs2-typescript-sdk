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
var MoneyNamespaceWithdrawDistributionSegment = /** @class */ (function () {
    function MoneyNamespaceWithdrawDistributionSegment() {
        this.slot = null;
        this.count = null;
    }
    MoneyNamespaceWithdrawDistributionSegment.prototype.getSlot = function () {
        return this.slot;
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceWithdrawDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceWithdrawDistributionSegment()
            .withSlot(data["slot"])
            .withCount(data["count"]);
    };
    MoneyNamespaceWithdrawDistributionSegment.prototype.toDict = function () {
        return {
            "slot": this.getSlot(),
            "count": this.getCount(),
        };
    };
    return MoneyNamespaceWithdrawDistributionSegment;
}());
exports.default = MoneyNamespaceWithdrawDistributionSegment;
//# sourceMappingURL=MoneyNamespaceWithdrawDistributionSegment.js.map