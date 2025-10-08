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
var InventoryInventoryDistributions = /** @class */ (function () {
    function InventoryInventoryDistributions() {
        this.capacity = null;
        this.acquire = null;
        this.acquireAmount = null;
        this.consume = null;
        this.consumeAmount = null;
    }
    InventoryInventoryDistributions.prototype.getCapacity = function () {
        return this.capacity;
    };
    InventoryInventoryDistributions.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    InventoryInventoryDistributions.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    InventoryInventoryDistributions.prototype.getAcquire = function () {
        return this.acquire;
    };
    InventoryInventoryDistributions.prototype.setAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryInventoryDistributions.prototype.withAcquire = function (acquire) {
        this.acquire = acquire;
        return this;
    };
    InventoryInventoryDistributions.prototype.getAcquireAmount = function () {
        return this.acquireAmount;
    };
    InventoryInventoryDistributions.prototype.setAcquireAmount = function (acquireAmount) {
        this.acquireAmount = acquireAmount;
        return this;
    };
    InventoryInventoryDistributions.prototype.withAcquireAmount = function (acquireAmount) {
        this.acquireAmount = acquireAmount;
        return this;
    };
    InventoryInventoryDistributions.prototype.getConsume = function () {
        return this.consume;
    };
    InventoryInventoryDistributions.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryInventoryDistributions.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    InventoryInventoryDistributions.prototype.getConsumeAmount = function () {
        return this.consumeAmount;
    };
    InventoryInventoryDistributions.prototype.setConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    InventoryInventoryDistributions.prototype.withConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    InventoryInventoryDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryDistributions()
            .withCapacity(Gs2Watch.InventoryInventoryCapacityDistribution.fromDict(data["capacity"]))
            .withAcquire(Gs2Watch.InventoryInventoryAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(Gs2Watch.InventoryInventoryAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(Gs2Watch.InventoryInventoryConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(Gs2Watch.InventoryInventoryConsumeAmountDistribution.fromDict(data["consumeAmount"]));
    };
    InventoryInventoryDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "capacity": (_a = this.getCapacity()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "acquire": (_b = this.getAcquire()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "acquireAmount": (_c = this.getAcquireAmount()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "consume": (_d = this.getConsume()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "consumeAmount": (_e = this.getConsumeAmount()) === null || _e === void 0 ? void 0 : _e.toDict(),
        };
    };
    return InventoryInventoryDistributions;
}());
exports.default = InventoryInventoryDistributions;
//# sourceMappingURL=InventoryInventoryDistributions.js.map