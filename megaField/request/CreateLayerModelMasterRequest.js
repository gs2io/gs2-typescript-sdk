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
var CreateLayerModelMasterRequest = /** @class */ (function () {
    function CreateLayerModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateLayerModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateLayerModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateLayerModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateLayerModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    CreateLayerModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateLayerModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateLayerModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateLayerModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLayerModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLayerModelMasterRequest.fromDict = function (data) {
        return new CreateLayerModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateLayerModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateLayerModelMasterRequest;
}());
exports.default = CreateLayerModelMasterRequest;
//# sourceMappingURL=CreateLayerModelMasterRequest.js.map