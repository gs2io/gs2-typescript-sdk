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
var InventoryInventoryStatistics = /** @class */ (function () {
    function InventoryInventoryStatistics() {
        this.acquired = null;
        this.consume = null;
        this.increaseCapacity = null;
        this.increaseCapacityAmount = null;
    }
    InventoryInventoryStatistics.prototype.getAcquired = function () {
        return this.acquired;
    };
    InventoryInventoryStatistics.prototype.setAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryInventoryStatistics.prototype.withAcquired = function (acquired) {
        this.acquired = acquired;
        return this;
    };
    InventoryInventoryStatistics.prototype.getConsume = function () {
        return this.consume;
    };
    InventoryInventoryStatistics.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryInventoryStatistics.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryInventoryStatistics.prototype.getIncreaseCapacity = function () {
        return this.increaseCapacity;
    };
    InventoryInventoryStatistics.prototype.setIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.withIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.getIncreaseCapacityAmount = function () {
        return this.increaseCapacityAmount;
    };
    InventoryInventoryStatistics.prototype.setIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    InventoryInventoryStatistics.prototype.withIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    InventoryInventoryStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryStatistics()
            .withAcquired(data["acquired"])
            .withConsume(data["consume"])
            .withIncreaseCapacity(data["increaseCapacity"])
            .withIncreaseCapacityAmount(data["increaseCapacityAmount"]);
    };
    InventoryInventoryStatistics.prototype.toDict = function () {
        return {
            "acquired": this.getAcquired(),
            "consume": this.getConsume(),
            "increaseCapacity": this.getIncreaseCapacity(),
            "increaseCapacityAmount": this.getIncreaseCapacityAmount(),
        };
    };
    return InventoryInventoryStatistics;
}());
exports.default = InventoryInventoryStatistics;
//# sourceMappingURL=InventoryInventoryStatistics.js.map