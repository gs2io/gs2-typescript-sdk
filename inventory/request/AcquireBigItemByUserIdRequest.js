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
var AcquireBigItemByUserIdRequest = /** @class */ (function () {
    function AcquireBigItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.acquireCount = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireBigItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireBigItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireBigItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireBigItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AcquireBigItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireBigItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    AcquireBigItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getAcquireCount = function () {
        return this.acquireCount;
    };
    AcquireBigItemByUserIdRequest.prototype.setAcquireCount = function (acquireCount) {
        this.acquireCount = acquireCount;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withAcquireCount = function (acquireCount) {
        this.acquireCount = acquireCount;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireBigItemByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireBigItemByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireBigItemByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireBigItemByUserIdRequest.fromDict = function (data) {
        return new AcquireBigItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withAcquireCount(data["acquireCount"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireBigItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "acquireCount": this.getAcquireCount(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcquireBigItemByUserIdRequest;
}());
exports.default = AcquireBigItemByUserIdRequest;
//# sourceMappingURL=AcquireBigItemByUserIdRequest.js.map