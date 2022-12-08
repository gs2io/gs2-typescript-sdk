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
var ActionRequest = /** @class */ (function () {
    function ActionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.position = null;
        this.scopes = null;
        this.duplicationAvoider = null;
    }
    ActionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ActionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ActionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ActionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ActionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ActionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ActionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ActionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ActionRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    ActionRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    ActionRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    ActionRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    ActionRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    ActionRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    ActionRequest.prototype.getPosition = function () {
        return this.position;
    };
    ActionRequest.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    ActionRequest.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    ActionRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    ActionRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ActionRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ActionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ActionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ActionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ActionRequest.fromDict = function (data) {
        return new ActionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.MyPosition.fromDict(data["position"]))
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2MegaField.Scope.fromDict(item);
            }) : []);
    };
    ActionRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ActionRequest;
}());
exports.default = ActionRequest;
//# sourceMappingURL=ActionRequest.js.map