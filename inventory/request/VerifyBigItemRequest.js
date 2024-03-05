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
var VerifyBigItemRequest = /** @class */ (function () {
    function VerifyBigItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.inventoryName = null;
        this.itemName = null;
        this.verifyType = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyBigItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyBigItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBigItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBigItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyBigItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBigItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBigItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyBigItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBigItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBigItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyBigItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyBigItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyBigItemRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyBigItemRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyBigItemRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyBigItemRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyBigItemRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyBigItemRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyBigItemRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyBigItemRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBigItemRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBigItemRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyBigItemRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyBigItemRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyBigItemRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyBigItemRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyBigItemRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyBigItemRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyBigItemRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBigItemRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBigItemRequest.fromDict = function (data) {
        return new VerifyBigItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyBigItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyBigItemRequest;
}());
exports.default = VerifyBigItemRequest;
//# sourceMappingURL=VerifyBigItemRequest.js.map