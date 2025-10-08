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
var InventoryNamespaceStatistics = /** @class */ (function () {
    function InventoryNamespaceStatistics() {
        this.acquire = null;
        this.consume = null;
        this.increaseCapacity = null;
    }
    InventoryNamespaceStatistics.prototype.getAcquire = function () {
        return this.acquire;
    };
    InventoryNamespaceStatistics.prototype.setAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryNamespaceStatistics.prototype.withAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryNamespaceStatistics.prototype.getConsume = function () {
        return this.consume;
    };
    InventoryNamespaceStatistics.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryNamespaceStatistics.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryNamespaceStatistics.prototype.getIncreaseCapacity = function () {
        return this.increaseCapacity;
    };
    InventoryNamespaceStatistics.prototype.setIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryNamespaceStatistics.prototype.withIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceStatistics()
            .withAcquire(data["acquire"])
            .withConsume(data["consume"])
            .withIncreaseCapacity(data["increaseCapacity"]);
    };
    InventoryNamespaceStatistics.prototype.toDict = function () {
        return {
            "acquire": this.getAcquire(),
            "consume": this.getConsume(),
            "increaseCapacity": this.getIncreaseCapacity(),
        };
    };
    return InventoryNamespaceStatistics;
}());
exports.default = InventoryNamespaceStatistics;
//# sourceMappingURL=InventoryNamespaceStatistics.js.map