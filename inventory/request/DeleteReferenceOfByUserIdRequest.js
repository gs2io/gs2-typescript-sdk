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
var DeleteReferenceOfByUserIdRequest = /** @class */ (function () {
    function DeleteReferenceOfByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
        this.duplicationAvoider = null;
    }
    DeleteReferenceOfByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteReferenceOfByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteReferenceOfByUserIdRequest.fromDict = function (data) {
        return new DeleteReferenceOfByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"]);
    };
    DeleteReferenceOfByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
        };
    };
    return DeleteReferenceOfByUserIdRequest;
}());
exports.default = DeleteReferenceOfByUserIdRequest;
//# sourceMappingURL=DeleteReferenceOfByUserIdRequest.js.map