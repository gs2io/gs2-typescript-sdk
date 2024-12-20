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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var InventoryNamespaceDistributions = /** @class */ (function () {
    function InventoryNamespaceDistributions() {
        this.acquire = null;
        this.acquireAmount = null;
        this.consume = null;
        this.consumeAmount = null;
        this.increaseCapacity = null;
        this.increaseCapacityAmount = null;
    }
    InventoryNamespaceDistributions.prototype.getAcquire = function () {
        return this.acquire;
    };
    InventoryNamespaceDistributions.prototype.setAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryNamespaceDistributions.prototype.getAcquireAmount = function () {
        return this.acquireAmount;
    };
    InventoryNamespaceDistributions.prototype.setAcquireAmount = function (acquireAmount) {
        this.acquireAmount = acquireAmount;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withAcquireAmount = function (acquireAmount) {
        this.acquireAmount = acquireAmount;
        return this;
    };
    InventoryNamespaceDistributions.prototype.getConsume = function () {
        return this.consume;
    };
    InventoryNamespaceDistributions.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryNamespaceDistributions.prototype.getConsumeAmount = function () {
        return this.consumeAmount;
    };
    InventoryNamespaceDistributions.prototype.setConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    InventoryNamespaceDistributions.prototype.getIncreaseCapacity = function () {
        return this.increaseCapacity;
    };
    InventoryNamespaceDistributions.prototype.setIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    InventoryNamespaceDistributions.prototype.getIncreaseCapacityAmount = function () {
        return this.increaseCapacityAmount;
    };
    InventoryNamespaceDistributions.prototype.setIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    InventoryNamespaceDistributions.prototype.withIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    InventoryNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceDistributions()
            .withAcquire(Gs2Watch.InventoryNamespaceAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(Gs2Watch.InventoryNamespaceAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(Gs2Watch.InventoryNamespaceConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(Gs2Watch.InventoryNamespaceConsumeAmountDistribution.fromDict(data["consumeAmount"]))
            .withIncreaseCapacity(Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution.fromDict(data["increaseCapacity"]))
            .withIncreaseCapacityAmount(Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution.fromDict(data["increaseCapacityAmount"]));
    };
    InventoryNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "acquire": (_a = this.getAcquire()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "acquireAmount": (_b = this.getAcquireAmount()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "consume": (_c = this.getConsume()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "consumeAmount": (_d = this.getConsumeAmount()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "increaseCapacity": (_e = this.getIncreaseCapacity()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "increaseCapacityAmount": (_f = this.getIncreaseCapacityAmount()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return InventoryNamespaceDistributions;
}());
exports.default = InventoryNamespaceDistributions;
//# sourceMappingURL=InventoryNamespaceDistributions.js.map