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
var AcquireItemSetByUserIdRequest = /** @class */ (function () {
    function AcquireItemSetByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
        this.userId = null;
        this.acquireCount = null;
        this.expiresAt = null;
        this.createNewItemSet = null;
        this.itemSetName = null;
    }
    AcquireItemSetByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireItemSetByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireItemSetByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireItemSetByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AcquireItemSetByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    AcquireItemSetByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireItemSetByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getAcquireCount = function () {
        return this.acquireCount;
    };
    AcquireItemSetByUserIdRequest.prototype.setAcquireCount = function (acquireCount) {
        this.acquireCount = acquireCount;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withAcquireCount = function (acquireCount) {
        this.acquireCount = acquireCount;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    AcquireItemSetByUserIdRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getCreateNewItemSet = function () {
        return this.createNewItemSet;
    };
    AcquireItemSetByUserIdRequest.prototype.setCreateNewItemSet = function (createNewItemSet) {
        this.createNewItemSet = createNewItemSet;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withCreateNewItemSet = function (createNewItemSet) {
        this.createNewItemSet = createNewItemSet;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    AcquireItemSetByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AcquireItemSetByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AcquireItemSetByUserIdRequest.fromDict = function (data) {
        return new AcquireItemSetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withUserId(data["userId"])
            .withAcquireCount(data["acquireCount"])
            .withExpiresAt(data["expiresAt"])
            .withCreateNewItemSet(data["createNewItemSet"])
            .withItemSetName(data["itemSetName"]);
    };
    AcquireItemSetByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "userId": this.getUserId(),
            "acquireCount": this.getAcquireCount(),
            "expiresAt": this.getExpiresAt(),
            "createNewItemSet": this.getCreateNewItemSet(),
            "itemSetName": this.getItemSetName(),
        };
    };
    return AcquireItemSetByUserIdRequest;
}());
exports.default = AcquireItemSetByUserIdRequest;
//# sourceMappingURL=AcquireItemSetByUserIdRequest.js.map