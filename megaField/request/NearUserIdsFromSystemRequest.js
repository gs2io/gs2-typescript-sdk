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
var NearUserIdsFromSystemRequest = /** @class */ (function () {
    function NearUserIdsFromSystemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.point = null;
        this.r = null;
        this.limit = null;
        this.duplicationAvoider = null;
    }
    NearUserIdsFromSystemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    NearUserIdsFromSystemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    NearUserIdsFromSystemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    NearUserIdsFromSystemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    NearUserIdsFromSystemRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    NearUserIdsFromSystemRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getPoint = function () {
        return this.point;
    };
    NearUserIdsFromSystemRequest.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getR = function () {
        return this.r;
    };
    NearUserIdsFromSystemRequest.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getLimit = function () {
        return this.limit;
    };
    NearUserIdsFromSystemRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    NearUserIdsFromSystemRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    NearUserIdsFromSystemRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    NearUserIdsFromSystemRequest.fromDict = function (data) {
        return new NearUserIdsFromSystemRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPoint(Gs2MegaField.Position.fromDict(data["point"]))
            .withR(data["r"])
            .withLimit(data["limit"]);
    };
    NearUserIdsFromSystemRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "point": (_a = this.getPoint()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "r": this.getR(),
            "limit": this.getLimit(),
        };
    };
    return NearUserIdsFromSystemRequest;
}());
exports.default = NearUserIdsFromSystemRequest;
//# sourceMappingURL=NearUserIdsFromSystemRequest.js.map