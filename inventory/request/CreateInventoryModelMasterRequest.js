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
var CreateInventoryModelMasterRequest = /** @class */ (function () {
    function CreateInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.initialCapacity = null;
        this.maxCapacity = null;
        this.protectReferencedItem = null;
    }
    CreateInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateInventoryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    CreateInventoryModelMasterRequest.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    CreateInventoryModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.getProtectReferencedItem = function () {
        return this.protectReferencedItem;
    };
    CreateInventoryModelMasterRequest.prototype.setProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    CreateInventoryModelMasterRequest.prototype.withProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    CreateInventoryModelMasterRequest.fromDict = function (data) {
        return new CreateInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInitialCapacity(data["initialCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withProtectReferencedItem(data["protectReferencedItem"]);
    };
    CreateInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
        };
    };
    return CreateInventoryModelMasterRequest;
}());
exports.default = CreateInventoryModelMasterRequest;
//# sourceMappingURL=CreateInventoryModelMasterRequest.js.map