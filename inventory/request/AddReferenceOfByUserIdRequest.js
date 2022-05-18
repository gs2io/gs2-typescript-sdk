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
var AddReferenceOfByUserIdRequest = /** @class */ (function () {
    function AddReferenceOfByUserIdRequest() {
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
    AddReferenceOfByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddReferenceOfByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddReferenceOfByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddReferenceOfByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AddReferenceOfByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddReferenceOfByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    AddReferenceOfByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    AddReferenceOfByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    AddReferenceOfByUserIdRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddReferenceOfByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddReferenceOfByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddReferenceOfByUserIdRequest.fromDict = function (data) {
        return new AddReferenceOfByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"]);
    };
    AddReferenceOfByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
        };
    };
    return AddReferenceOfByUserIdRequest;
}());
exports.default = AddReferenceOfByUserIdRequest;
//# sourceMappingURL=AddReferenceOfByUserIdRequest.js.map