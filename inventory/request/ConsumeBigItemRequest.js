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
var ConsumeBigItemRequest = /** @class */ (function () {
    function ConsumeBigItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.consumeCount = null;
        this.duplicationAvoider = null;
    }
    ConsumeBigItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeBigItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeBigItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeBigItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeBigItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeBigItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeBigItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeBigItemRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeBigItemRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeBigItemRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeBigItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ConsumeBigItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeBigItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeBigItemRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    ConsumeBigItemRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeBigItemRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeBigItemRequest.prototype.getConsumeCount = function () {
        return this.consumeCount;
    };
    ConsumeBigItemRequest.prototype.setConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeBigItemRequest.prototype.withConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeBigItemRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeBigItemRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeBigItemRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeBigItemRequest.fromDict = function (data) {
        return new ConsumeBigItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withConsumeCount(data["consumeCount"]);
    };
    ConsumeBigItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "consumeCount": this.getConsumeCount(),
        };
    };
    return ConsumeBigItemRequest;
}());
exports.default = ConsumeBigItemRequest;
//# sourceMappingURL=ConsumeBigItemRequest.js.map