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
var DeleteItemSetByUserIdRequest = /** @class */ (function () {
    function DeleteItemSetByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.itemSetName = null;
    }
    DeleteItemSetByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteItemSetByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteItemSetByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteItemSetByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DeleteItemSetByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteItemSetByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DeleteItemSetByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    DeleteItemSetByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteItemSetByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteItemSetByUserIdRequest.fromDict = function (data) {
        return new DeleteItemSetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"]);
    };
    DeleteItemSetByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
        };
    };
    return DeleteItemSetByUserIdRequest;
}());
export default DeleteItemSetByUserIdRequest;
//# sourceMappingURL=DeleteItemSetByUserIdRequest.js.map