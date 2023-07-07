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
var CreateSimpleInventoryModelMasterRequest = /** @class */ (function () {
    function CreateSimpleInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateSimpleInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSimpleInventoryModelMasterRequest.fromDict = function (data) {
        return new CreateSimpleInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateSimpleInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateSimpleInventoryModelMasterRequest;
}());
exports.default = CreateSimpleInventoryModelMasterRequest;
//# sourceMappingURL=CreateSimpleInventoryModelMasterRequest.js.map