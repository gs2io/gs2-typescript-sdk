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
var VerifyItemSetByUserIdRequest = /** @class */ (function () {
    function VerifyItemSetByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.inventoryName = null;
        this.itemName = null;
        this.verifyType = null;
        this.itemSetName = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyItemSetByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyItemSetByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyItemSetByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyItemSetByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyItemSetByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyItemSetByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyItemSetByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyItemSetByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    VerifyItemSetByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyItemSetByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyItemSetByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyItemSetByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyItemSetByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyItemSetByUserIdRequest.fromDict = function (data) {
        return new VerifyItemSetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withVerifyType(data["verifyType"])
            .withItemSetName(data["itemSetName"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyItemSetByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "verifyType": this.getVerifyType(),
            "itemSetName": this.getItemSetName(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyItemSetByUserIdRequest;
}());
exports.default = VerifyItemSetByUserIdRequest;
//# sourceMappingURL=VerifyItemSetByUserIdRequest.js.map