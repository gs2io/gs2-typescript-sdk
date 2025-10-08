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
var DeleteBigItemModelMasterRequest = /** @class */ (function () {
    function DeleteBigItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
    }
    DeleteBigItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBigItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBigItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteBigItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DeleteBigItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DeleteBigItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteBigItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteBigItemModelMasterRequest.fromDict = function (data) {
        return new DeleteBigItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"]);
    };
    DeleteBigItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
        };
    };
    return DeleteBigItemModelMasterRequest;
}());
exports.default = DeleteBigItemModelMasterRequest;
//# sourceMappingURL=DeleteBigItemModelMasterRequest.js.map