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
var GetBigItemByUserIdRequest = /** @class */ (function () {
    function GetBigItemByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.timeOffsetToken = null;
    }
    GetBigItemByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBigItemByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBigItemByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBigItemByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetBigItemByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBigItemByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetBigItemByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetBigItemByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBigItemByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBigItemByUserIdRequest.fromDict = function (data) {
        return new GetBigItemByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetBigItemByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetBigItemByUserIdRequest;
}());
exports.default = GetBigItemByUserIdRequest;
//# sourceMappingURL=GetBigItemByUserIdRequest.js.map