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
var VerifyAction_1 = tslib_1.__importDefault(require("./VerifyAction"));
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var RandomDisplayItemModel = /** @class */ (function () {
    function RandomDisplayItemModel() {
        this.name = null;
        this.metadata = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.acquireActions = null;
        this.stock = null;
        this.weight = null;
    }
    RandomDisplayItemModel.prototype.getName = function () {
        return this.name;
    };
    RandomDisplayItemModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RandomDisplayItemModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RandomDisplayItemModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RandomDisplayItemModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomDisplayItemModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomDisplayItemModel.prototype.getVerifyActions = function () {
        return this.verifyActions;
    };
    RandomDisplayItemModel.prototype.setVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    RandomDisplayItemModel.prototype.withVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    RandomDisplayItemModel.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    RandomDisplayItemModel.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RandomDisplayItemModel.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RandomDisplayItemModel.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    RandomDisplayItemModel.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RandomDisplayItemModel.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RandomDisplayItemModel.prototype.getStock = function () {
        return this.stock;
    };
    RandomDisplayItemModel.prototype.setStock = function (stock) {
        this.stock = stock;
        return this;
    };
    RandomDisplayItemModel.prototype.withStock = function (stock) {
        this.stock = stock;
        return this;
    };
    RandomDisplayItemModel.prototype.getWeight = function () {
        return this.weight;
    };
    RandomDisplayItemModel.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RandomDisplayItemModel.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RandomDisplayItemModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomDisplayItemModel()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withVerifyActions(data.verifyActions ?
            data.verifyActions.map(function (item) {
                return VerifyAction_1.default.fromDict(item);
            }) : [])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withStock(data["stock"])
            .withWeight(data["weight"]);
    };
    RandomDisplayItemModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "stock": this.getStock(),
            "weight": this.getWeight(),
        };
    };
    return RandomDisplayItemModel;
}());
exports.default = RandomDisplayItemModel;
//# sourceMappingURL=RandomDisplayItemModel.js.map