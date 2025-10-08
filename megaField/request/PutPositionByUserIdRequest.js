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
var PutPositionByUserIdRequest = /** @class */ (function () {
    function PutPositionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.position = null;
        this.vector = null;
        this.r = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PutPositionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutPositionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutPositionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutPositionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PutPositionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    PutPositionByUserIdRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    PutPositionByUserIdRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getPosition = function () {
        return this.position;
    };
    PutPositionByUserIdRequest.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getVector = function () {
        return this.vector;
    };
    PutPositionByUserIdRequest.prototype.setVector = function (vector) {
        this.vector = vector;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withVector = function (vector) {
        this.vector = vector;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getR = function () {
        return this.r;
    };
    PutPositionByUserIdRequest.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PutPositionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutPositionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutPositionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutPositionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutPositionByUserIdRequest.fromDict = function (data) {
        return new PutPositionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PutPositionByUserIdRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "vector": (_b = this.getVector()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "r": this.getR(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PutPositionByUserIdRequest;
}());
exports.default = PutPositionByUserIdRequest;
//# sourceMappingURL=PutPositionByUserIdRequest.js.map