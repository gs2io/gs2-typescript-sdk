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
var CreateBigItemModelMasterRequest = /** @class */ (function () {
    function CreateBigItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateBigItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBigItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBigItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateBigItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    CreateBigItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateBigItemModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBigItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateBigItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBigItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBigItemModelMasterRequest.fromDict = function (data) {
        return new CreateBigItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateBigItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateBigItemModelMasterRequest;
}());
exports.default = CreateBigItemModelMasterRequest;
//# sourceMappingURL=CreateBigItemModelMasterRequest.js.map