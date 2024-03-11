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
var ActionByUserIdRequest = /** @class */ (function () {
    function ActionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.position = null;
        this.scopes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ActionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ActionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ActionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ActionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ActionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ActionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ActionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ActionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ActionByUserIdRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    ActionByUserIdRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    ActionByUserIdRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    ActionByUserIdRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    ActionByUserIdRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    ActionByUserIdRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    ActionByUserIdRequest.prototype.getPosition = function () {
        return this.position;
    };
    ActionByUserIdRequest.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    ActionByUserIdRequest.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    ActionByUserIdRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    ActionByUserIdRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ActionByUserIdRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ActionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ActionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ActionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ActionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ActionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ActionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ActionByUserIdRequest.fromDict = function (data) {
        return new ActionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.MyPosition.fromDict(data["position"]))
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2MegaField.Scope.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ActionByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ActionByUserIdRequest;
}());
exports.default = ActionByUserIdRequest;
//# sourceMappingURL=ActionByUserIdRequest.js.map