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
var GetLayerModelRequest = /** @class */ (function () {
    function GetLayerModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
    }
    GetLayerModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLayerModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLayerModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLayerModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLayerModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLayerModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLayerModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLayerModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLayerModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLayerModelRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    GetLayerModelRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetLayerModelRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetLayerModelRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    GetLayerModelRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    GetLayerModelRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    GetLayerModelRequest.fromDict = function (data) {
        return new GetLayerModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"]);
    };
    GetLayerModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
        };
    };
    return GetLayerModelRequest;
}());
exports.default = GetLayerModelRequest;
//# sourceMappingURL=GetLayerModelRequest.js.map