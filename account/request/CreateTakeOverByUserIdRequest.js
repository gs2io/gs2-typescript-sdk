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
var CreateTakeOverByUserIdRequest = /** @class */ (function () {
    function CreateTakeOverByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.userIdentifier = null;
        this.password = null;
    }
    CreateTakeOverByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateTakeOverByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateTakeOverByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateTakeOverByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateTakeOverByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    CreateTakeOverByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    CreateTakeOverByUserIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreateTakeOverByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateTakeOverByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateTakeOverByUserIdRequest.fromDict = function (data) {
        return new CreateTakeOverByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"]);
    };
    CreateTakeOverByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
        };
    };
    return CreateTakeOverByUserIdRequest;
}());
exports.default = CreateTakeOverByUserIdRequest;
//# sourceMappingURL=CreateTakeOverByUserIdRequest.js.map