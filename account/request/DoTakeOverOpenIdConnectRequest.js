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
var DoTakeOverOpenIdConnectRequest = /** @class */ (function () {
    function DoTakeOverOpenIdConnectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.idToken = null;
    }
    DoTakeOverOpenIdConnectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoTakeOverOpenIdConnectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoTakeOverOpenIdConnectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoTakeOverOpenIdConnectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.getType = function () {
        return this.type;
    };
    DoTakeOverOpenIdConnectRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.getIdToken = function () {
        return this.idToken;
    };
    DoTakeOverOpenIdConnectRequest.prototype.setIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.prototype.withIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    DoTakeOverOpenIdConnectRequest.fromDict = function (data) {
        return new DoTakeOverOpenIdConnectRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withIdToken(data["idToken"]);
    };
    DoTakeOverOpenIdConnectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "idToken": this.getIdToken(),
        };
    };
    return DoTakeOverOpenIdConnectRequest;
}());
exports.default = DoTakeOverOpenIdConnectRequest;
//# sourceMappingURL=DoTakeOverOpenIdConnectRequest.js.map