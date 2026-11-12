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
var PreviewTakeOverRequest = /** @class */ (function () {
    function PreviewTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.userIdentifier = null;
        this.password = null;
    }
    PreviewTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreviewTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreviewTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreviewTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreviewTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreviewTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreviewTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PreviewTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreviewTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreviewTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    PreviewTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PreviewTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    PreviewTakeOverRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    PreviewTakeOverRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PreviewTakeOverRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PreviewTakeOverRequest.prototype.getPassword = function () {
        return this.password;
    };
    PreviewTakeOverRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    PreviewTakeOverRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    PreviewTakeOverRequest.fromDict = function (data) {
        return new PreviewTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"]);
    };
    PreviewTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
        };
    };
    return PreviewTakeOverRequest;
}());
exports.default = PreviewTakeOverRequest;
//# sourceMappingURL=PreviewTakeOverRequest.js.map