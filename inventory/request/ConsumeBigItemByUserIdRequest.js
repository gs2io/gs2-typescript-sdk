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
var ConsumeBigItemByUserIdRequest = /** @class */ (function () {
    function ConsumeBigItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.consumeCount = null;
        this.duplicationAvoider = null;
    }
    ConsumeBigItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeBigItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeBigItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeBigItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeBigItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ConsumeBigItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    ConsumeBigItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getConsumeCount = function () {
        return this.consumeCount;
    };
    ConsumeBigItemByUserIdRequest.prototype.setConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeBigItemByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeBigItemByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeBigItemByUserIdRequest.fromDict = function (data) {
        return new ConsumeBigItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withConsumeCount(data["consumeCount"]);
    };
    ConsumeBigItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "consumeCount": this.getConsumeCount(),
        };
    };
    return ConsumeBigItemByUserIdRequest;
}());
exports.default = ConsumeBigItemByUserIdRequest;
//# sourceMappingURL=ConsumeBigItemByUserIdRequest.js.map