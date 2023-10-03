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
var VerifySimpleItemByUserIdRequest = /** @class */ (function () {
    function VerifySimpleItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.inventoryName = null;
        this.itemName = null;
        this.verifyType = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    VerifySimpleItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifySimpleItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifySimpleItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifySimpleItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifySimpleItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifySimpleItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifySimpleItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifySimpleItemByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifySimpleItemByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifySimpleItemByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySimpleItemByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySimpleItemByUserIdRequest.fromDict = function (data) {
        return new VerifySimpleItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"]);
    };
    VerifySimpleItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
        };
    };
    return VerifySimpleItemByUserIdRequest;
}());
exports.default = VerifySimpleItemByUserIdRequest;
//# sourceMappingURL=VerifySimpleItemByUserIdRequest.js.map