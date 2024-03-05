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
var VerifyBigItemByUserIdRequest = /** @class */ (function () {
    function VerifyBigItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.inventoryName = null;
        this.itemName = null;
        this.verifyType = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyBigItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyBigItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyBigItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyBigItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyBigItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyBigItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyBigItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyBigItemByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyBigItemByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyBigItemByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyBigItemByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBigItemByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBigItemByUserIdRequest.fromDict = function (data) {
        return new VerifyBigItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyBigItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyBigItemByUserIdRequest;
}());
exports.default = VerifyBigItemByUserIdRequest;
//# sourceMappingURL=VerifyBigItemByUserIdRequest.js.map