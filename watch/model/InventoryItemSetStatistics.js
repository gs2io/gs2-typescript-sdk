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
var InventoryItemSetStatistics = /** @class */ (function () {
    function InventoryItemSetStatistics() {
        this.acquired = null;
        this.acquiredAmount = null;
        this.consumed = null;
        this.consumedAmount = null;
        this.consumedRate = null;
    }
    InventoryItemSetStatistics.prototype.getAcquired = function () {
        return this.acquired;
    };
    InventoryItemSetStatistics.prototype.setAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryItemSetStatistics.prototype.withAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryItemSetStatistics.prototype.getAcquiredAmount = function () {
        return this.acquiredAmount;
    };
    InventoryItemSetStatistics.prototype.setAcquiredAmount = function (acquiredAmount) {
        this.acquiredAmount = acquiredAmount;
        return this;
    };
    InventoryItemSetStatistics.prototype.withAcquiredAmount = function (acquiredAmount) {
        this.acquiredAmount = acquiredAmount;
        return this;
    };
    InventoryItemSetStatistics.prototype.getConsumed = function () {
        return this.consumed;
    };
    InventoryItemSetStatistics.prototype.setConsumed = function (consumed) {
        this.consumed = consumed;
        return this;
    };
    InventoryItemSetStatistics.prototype.withConsumed = function (consumed) {
        this.consumed = consumed;
        return this;
    };
    InventoryItemSetStatistics.prototype.getConsumedAmount = function () {
        return this.consumedAmount;
    };
    InventoryItemSetStatistics.prototype.setConsumedAmount = function (consumedAmount) {
        this.consumedAmount = consumedAmount;
        return this;
    };
    InventoryItemSetStatistics.prototype.withConsumedAmount = function (consumedAmount) {
        this.consumedAmount = consumedAmount;
        return this;
    };
    InventoryItemSetStatistics.prototype.getConsumedRate = function () {
        return this.consumedRate;
    };
    InventoryItemSetStatistics.prototype.setConsumedRate = function (consumedRate) {
        this.consumedRate = consumedRate;
        return this;
    };
    InventoryItemSetStatistics.prototype.withConsumedRate = function (consumedRate) {
        this.consumedRate = consumedRate;
        return this;
    };
    InventoryItemSetStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSetStatistics()
            .withAcquired(data["acquired"])
            .withAcquiredAmount(data["acquiredAmount"])
            .withConsumed(data["consumed"])
            .withConsumedAmount(data["consumedAmount"])
            .withConsumedRate(data["consumedRate"]);
    };
    InventoryItemSetStatistics.prototype.toDict = function () {
        return {
            "acquired": this.getAcquired(),
            "acquiredAmount": this.getAcquiredAmount(),
            "consumed": this.getConsumed(),
            "consumedAmount": this.getConsumedAmount(),
            "consumedRate": this.getConsumedRate(),
        };
    };
    return InventoryItemSetStatistics;
}());
exports.default = InventoryItemSetStatistics;
//# sourceMappingURL=InventoryItemSetStatistics.js.map