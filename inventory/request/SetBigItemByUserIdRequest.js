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
var SetBigItemByUserIdRequest = /** @class */ (function () {
    function SetBigItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    SetBigItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetBigItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetBigItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetBigItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    SetBigItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetBigItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    SetBigItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    SetBigItemByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetBigItemByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetBigItemByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetBigItemByUserIdRequest.fromDict = function (data) {
        return new SetBigItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withCount(data["count"]);
    };
    SetBigItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "count": this.getCount(),
        };
    };
    return SetBigItemByUserIdRequest;
}());
exports.default = SetBigItemByUserIdRequest;
//# sourceMappingURL=SetBigItemByUserIdRequest.js.map