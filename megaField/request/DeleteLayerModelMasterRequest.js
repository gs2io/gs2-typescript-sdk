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
var DeleteLayerModelMasterRequest = /** @class */ (function () {
    function DeleteLayerModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
    }
    DeleteLayerModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteLayerModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteLayerModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteLayerModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    DeleteLayerModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    DeleteLayerModelMasterRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    DeleteLayerModelMasterRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    DeleteLayerModelMasterRequest.fromDict = function (data) {
        return new DeleteLayerModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"]);
    };
    DeleteLayerModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
        };
    };
    return DeleteLayerModelMasterRequest;
}());
exports.default = DeleteLayerModelMasterRequest;
//# sourceMappingURL=DeleteLayerModelMasterRequest.js.map