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
var tslib_1 = require("tslib");
var Gs2MegaField = tslib_1.__importStar(require("../model"));
var PutPositionRequest = /** @class */ (function () {
    function PutPositionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.position = null;
        this.vector = null;
        this.r = null;
    }
    PutPositionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutPositionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutPositionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutPositionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutPositionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutPositionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutPositionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutPositionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutPositionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutPositionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PutPositionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutPositionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutPositionRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    PutPositionRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    PutPositionRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    PutPositionRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    PutPositionRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    PutPositionRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    PutPositionRequest.prototype.getPosition = function () {
        return this.position;
    };
    PutPositionRequest.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    PutPositionRequest.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    PutPositionRequest.prototype.getVector = function () {
        return this.vector;
    };
    PutPositionRequest.prototype.setVector = function (vector) {
        this.vector = vector;
        return this;
    };
    PutPositionRequest.prototype.withVector = function (vector) {
        this.vector = vector;
        return this;
    };
    PutPositionRequest.prototype.getR = function () {
        return this.r;
    };
    PutPositionRequest.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    PutPositionRequest.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    PutPositionRequest.fromDict = function (data) {
        return new PutPositionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"]);
    };
    PutPositionRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "vector": (_b = this.getVector()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "r": this.getR(),
        };
    };
    return PutPositionRequest;
}());
exports.default = PutPositionRequest;
//# sourceMappingURL=PutPositionRequest.js.map