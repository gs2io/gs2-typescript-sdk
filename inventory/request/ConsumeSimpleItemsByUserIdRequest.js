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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var ConsumeSimpleItemsByUserIdRequest = /** @class */ (function () {
    function ConsumeSimpleItemsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.consumeCounts = null;
        this.duplicationAvoider = null;
    }
    ConsumeSimpleItemsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getConsumeCounts = function () {
        return this.consumeCounts;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setConsumeCounts = function (consumeCounts) {
        this.consumeCounts = consumeCounts;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withConsumeCounts = function (consumeCounts) {
        this.consumeCounts = consumeCounts;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeSimpleItemsByUserIdRequest.fromDict = function (data) {
        return new ConsumeSimpleItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withConsumeCounts(data.consumeCounts ?
            data.consumeCounts.map(function (item) {
                return Gs2Inventory.ConsumeCount.fromDict(item);
            }) : []);
    };
    ConsumeSimpleItemsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "consumeCounts": this.getConsumeCounts() ?
                this.getConsumeCounts().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ConsumeSimpleItemsByUserIdRequest;
}());
exports.default = ConsumeSimpleItemsByUserIdRequest;
//# sourceMappingURL=ConsumeSimpleItemsByUserIdRequest.js.map