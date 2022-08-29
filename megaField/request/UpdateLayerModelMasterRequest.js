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
var UpdateLayerModelMasterRequest = /** @class */ (function () {
    function UpdateLayerModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateLayerModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateLayerModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateLayerModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateLayerModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    UpdateLayerModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    UpdateLayerModelMasterRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateLayerModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateLayerModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLayerModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLayerModelMasterRequest.fromDict = function (data) {
        return new UpdateLayerModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateLayerModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateLayerModelMasterRequest;
}());
exports.default = UpdateLayerModelMasterRequest;
//# sourceMappingURL=UpdateLayerModelMasterRequest.js.map