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
var InventoryItemStatistics = /** @class */ (function () {
    function InventoryItemStatistics() {
        this.acquired = null;
        this.consumed = null;
        this.consumedRate = null;
    }
    InventoryItemStatistics.prototype.getAcquired = function () {
        return this.acquired;
    };
    InventoryItemStatistics.prototype.setAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryItemStatistics.prototype.withAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryItemStatistics.prototype.getConsumed = function () {
        return this.consumed;
    };
    InventoryItemStatistics.prototype.setConsumed = function (consumed) {
        this.consumed = consumed;
        return this;
    };
    InventoryItemStatistics.prototype.withConsumed = function (consumed) {
        this.consumed = consumed;
        return this;
    };
    InventoryItemStatistics.prototype.getConsumedRate = function () {
        return this.consumedRate;
    };
    InventoryItemStatistics.prototype.setConsumedRate = function (consumedRate) {
        this.consumedRate = consumedRate;
        return this;
    };
    InventoryItemStatistics.prototype.withConsumedRate = function (consumedRate) {
        this.consumedRate = consumedRate;
        return this;
    };
    InventoryItemStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemStatistics()
            .withAcquired(data["acquired"])
            .withConsumed(data["consumed"])
            .withConsumedRate(data["consumedRate"]);
    };
    InventoryItemStatistics.prototype.toDict = function () {
        return {
            "acquired": this.getAcquired(),
            "consumed": this.getConsumed(),
            "consumedRate": this.getConsumedRate(),
        };
    };
    return InventoryItemStatistics;
}());
exports.default = InventoryItemStatistics;
//# sourceMappingURL=InventoryItemStatistics.js.map