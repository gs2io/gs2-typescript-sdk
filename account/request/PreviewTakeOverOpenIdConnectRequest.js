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
var PreviewTakeOverOpenIdConnectRequest = /** @class */ (function () {
    function PreviewTakeOverOpenIdConnectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.idToken = null;
    }
    PreviewTakeOverOpenIdConnectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.getType = function () {
        return this.type;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.getIdToken = function () {
        return this.idToken;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.setIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.withIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    PreviewTakeOverOpenIdConnectRequest.fromDict = function (data) {
        return new PreviewTakeOverOpenIdConnectRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withIdToken(data["idToken"]);
    };
    PreviewTakeOverOpenIdConnectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "idToken": this.getIdToken(),
        };
    };
    return PreviewTakeOverOpenIdConnectRequest;
}());
exports.default = PreviewTakeOverOpenIdConnectRequest;
//# sourceMappingURL=PreviewTakeOverOpenIdConnectRequest.js.map