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
var UpdateSimpleItemModelMasterRequest = /** @class */ (function () {
    function UpdateSimpleItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateSimpleItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSimpleItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSimpleItemModelMasterRequest.fromDict = function (data) {
        return new UpdateSimpleItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateSimpleItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateSimpleItemModelMasterRequest;
}());
exports.default = UpdateSimpleItemModelMasterRequest;
//# sourceMappingURL=UpdateSimpleItemModelMasterRequest.js.map