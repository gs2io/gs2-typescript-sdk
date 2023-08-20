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
var UpdateBigItemModelMasterRequest = /** @class */ (function () {
    function UpdateBigItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateBigItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBigItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBigItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBigItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateBigItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    UpdateBigItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBigItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateBigItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBigItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBigItemModelMasterRequest.fromDict = function (data) {
        return new UpdateBigItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateBigItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateBigItemModelMasterRequest;
}());
exports.default = UpdateBigItemModelMasterRequest;
//# sourceMappingURL=UpdateBigItemModelMasterRequest.js.map