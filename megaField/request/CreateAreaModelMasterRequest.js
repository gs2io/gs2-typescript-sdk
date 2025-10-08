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
var CreateAreaModelMasterRequest = /** @class */ (function () {
    function CreateAreaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateAreaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateAreaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateAreaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateAreaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateAreaModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateAreaModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateAreaModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateAreaModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateAreaModelMasterRequest.fromDict = function (data) {
        return new CreateAreaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateAreaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateAreaModelMasterRequest;
}());
exports.default = CreateAreaModelMasterRequest;
//# sourceMappingURL=CreateAreaModelMasterRequest.js.map