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
var CreateBigInventoryModelMasterRequest = /** @class */ (function () {
    function CreateBigInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateBigInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBigInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBigInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateBigInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateBigInventoryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBigInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateBigInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBigInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBigInventoryModelMasterRequest.fromDict = function (data) {
        return new CreateBigInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateBigInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateBigInventoryModelMasterRequest;
}());
exports.default = CreateBigInventoryModelMasterRequest;
//# sourceMappingURL=CreateBigInventoryModelMasterRequest.js.map