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
var DoTakeOverRequest = /** @class */ (function () {
    function DoTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.userIdentifier = null;
        this.password = null;
    }
    DoTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    DoTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DoTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DoTakeOverRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    DoTakeOverRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DoTakeOverRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DoTakeOverRequest.prototype.getPassword = function () {
        return this.password;
    };
    DoTakeOverRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    DoTakeOverRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    DoTakeOverRequest.fromDict = function (data) {
        return new DoTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"]);
    };
    DoTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
        };
    };
    return DoTakeOverRequest;
}());
exports.default = DoTakeOverRequest;
//# sourceMappingURL=DoTakeOverRequest.js.map