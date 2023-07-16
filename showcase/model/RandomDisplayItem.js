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
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var RandomDisplayItem = /** @class */ (function () {
    function RandomDisplayItem() {
        this.showcaseName = null;
        this.name = null;
        this.metadata = null;
        this.consumeActions = null;
        this.acquireActions = null;
        this.currentPurchaseCount = null;
        this.maximumPurchaseCount = null;
    }
    RandomDisplayItem.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    RandomDisplayItem.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomDisplayItem.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomDisplayItem.prototype.getName = function () {
        return this.name;
    };
    RandomDisplayItem.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RandomDisplayItem.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RandomDisplayItem.prototype.getMetadata = function () {
        return this.metadata;
    };
    RandomDisplayItem.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomDisplayItem.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RandomDisplayItem.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    RandomDisplayItem.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RandomDisplayItem.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RandomDisplayItem.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    RandomDisplayItem.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RandomDisplayItem.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RandomDisplayItem.prototype.getCurrentPurchaseCount = function () {
        return this.currentPurchaseCount;
    };
    RandomDisplayItem.prototype.setCurrentPurchaseCount = function (currentPurchaseCount) {
        this.currentPurchaseCount = currentPurchaseCount;
        return this;
    };
    RandomDisplayItem.prototype.withCurrentPurchaseCount = function (currentPurchaseCount) {
        this.currentPurchaseCount = currentPurchaseCount;
        return this;
    };
    RandomDisplayItem.prototype.getMaximumPurchaseCount = function () {
        return this.maximumPurchaseCount;
    };
    RandomDisplayItem.prototype.setMaximumPurchaseCount = function (maximumPurchaseCount) {
        this.maximumPurchaseCount = maximumPurchaseCount;
        return this;
    };
    RandomDisplayItem.prototype.withMaximumPurchaseCount = function (maximumPurchaseCount) {
        this.maximumPurchaseCount = maximumPurchaseCount;
        return this;
    };
    RandomDisplayItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomDisplayItem()
            .withShowcaseName(data["showcaseName"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withCurrentPurchaseCount(data["currentPurchaseCount"])
            .withMaximumPurchaseCount(data["maximumPurchaseCount"]);
    };
    RandomDisplayItem.prototype.toDict = function () {
        return {
            "showcaseName": this.getShowcaseName(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "currentPurchaseCount": this.getCurrentPurchaseCount(),
            "maximumPurchaseCount": this.getMaximumPurchaseCount(),
        };
    };
    return RandomDisplayItem;
}());
exports.default = RandomDisplayItem;
//# sourceMappingURL=RandomDisplayItem.js.map