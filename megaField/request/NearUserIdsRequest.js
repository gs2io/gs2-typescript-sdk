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
var NearUserIdsRequest = /** @class */ (function () {
    function NearUserIdsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.point = null;
        this.r = null;
        this.limit = null;
    }
    NearUserIdsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    NearUserIdsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NearUserIdsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NearUserIdsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    NearUserIdsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NearUserIdsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NearUserIdsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    NearUserIdsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    NearUserIdsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    NearUserIdsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    NearUserIdsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    NearUserIdsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    NearUserIdsRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    NearUserIdsRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    NearUserIdsRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    NearUserIdsRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    NearUserIdsRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    NearUserIdsRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    NearUserIdsRequest.prototype.getPoint = function () {
        return this.point;
    };
    NearUserIdsRequest.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    NearUserIdsRequest.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    NearUserIdsRequest.prototype.getR = function () {
        return this.r;
    };
    NearUserIdsRequest.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    NearUserIdsRequest.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    NearUserIdsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    NearUserIdsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    NearUserIdsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    NearUserIdsRequest.fromDict = function (data) {
        return new NearUserIdsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPoint(Gs2MegaField.Position.fromDict(data["point"]))
            .withR(data["r"])
            .withLimit(data["limit"]);
    };
    NearUserIdsRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "point": (_a = this.getPoint()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "r": this.getR(),
            "limit": this.getLimit(),
        };
    };
    return NearUserIdsRequest;
}());
exports.default = NearUserIdsRequest;
//# sourceMappingURL=NearUserIdsRequest.js.map