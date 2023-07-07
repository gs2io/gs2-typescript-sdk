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
var CreateSimpleItemModelMasterRequest = /** @class */ (function () {
    function CreateSimpleItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateSimpleItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSimpleItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSimpleItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSimpleItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    CreateSimpleItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSimpleItemModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSimpleItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSimpleItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSimpleItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSimpleItemModelMasterRequest.fromDict = function (data) {
        return new CreateSimpleItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateSimpleItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateSimpleItemModelMasterRequest;
}());
exports.default = CreateSimpleItemModelMasterRequest;
//# sourceMappingURL=CreateSimpleItemModelMasterRequest.js.map