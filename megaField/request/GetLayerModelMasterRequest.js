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
var GetLayerModelMasterRequest = /** @class */ (function () {
    function GetLayerModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
    }
    GetLayerModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLayerModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLayerModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLayerModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLayerModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLayerModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLayerModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLayerModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLayerModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLayerModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    GetLayerModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetLayerModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetLayerModelMasterRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    GetLayerModelMasterRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    GetLayerModelMasterRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    GetLayerModelMasterRequest.fromDict = function (data) {
        return new GetLayerModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"]);
    };
    GetLayerModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
        };
    };
    return GetLayerModelMasterRequest;
}());
exports.default = GetLayerModelMasterRequest;
//# sourceMappingURL=GetLayerModelMasterRequest.js.map