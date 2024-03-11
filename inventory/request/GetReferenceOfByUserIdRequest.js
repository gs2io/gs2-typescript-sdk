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
var GetReferenceOfByUserIdRequest = /** @class */ (function () {
    function GetReferenceOfByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
        this.timeOffsetToken = null;
    }
    GetReferenceOfByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReferenceOfByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReferenceOfByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReferenceOfByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetReferenceOfByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetReferenceOfByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetReferenceOfByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    GetReferenceOfByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    GetReferenceOfByUserIdRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetReferenceOfByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetReferenceOfByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetReferenceOfByUserIdRequest.fromDict = function (data) {
        return new GetReferenceOfByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetReferenceOfByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetReferenceOfByUserIdRequest;
}());
exports.default = GetReferenceOfByUserIdRequest;
//# sourceMappingURL=GetReferenceOfByUserIdRequest.js.map