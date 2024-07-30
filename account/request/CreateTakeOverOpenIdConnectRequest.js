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
var CreateTakeOverOpenIdConnectRequest = /** @class */ (function () {
    function CreateTakeOverOpenIdConnectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.idToken = null;
        this.duplicationAvoider = null;
    }
    CreateTakeOverOpenIdConnectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getType = function () {
        return this.type;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getIdToken = function () {
        return this.idToken;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateTakeOverOpenIdConnectRequest.fromDict = function (data) {
        return new CreateTakeOverOpenIdConnectRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withIdToken(data["idToken"]);
    };
    CreateTakeOverOpenIdConnectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "idToken": this.getIdToken(),
        };
    };
    return CreateTakeOverOpenIdConnectRequest;
}());
exports.default = CreateTakeOverOpenIdConnectRequest;
//# sourceMappingURL=CreateTakeOverOpenIdConnectRequest.js.map