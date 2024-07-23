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
var DeleteIgnoreUserRequest = /** @class */ (function () {
    function DeleteIgnoreUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DeleteIgnoreUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteIgnoreUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteIgnoreUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteIgnoreUserRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DeleteIgnoreUserRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteIgnoreUserRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteIgnoreUserRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteIgnoreUserRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteIgnoreUserRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteIgnoreUserRequest.fromDict = function (data) {
        return new DeleteIgnoreUserRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withUserId(data["userId"]);
    };
    DeleteIgnoreUserRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "userId": this.getUserId(),
        };
    };
    return DeleteIgnoreUserRequest;
}());
exports.default = DeleteIgnoreUserRequest;
//# sourceMappingURL=DeleteIgnoreUserRequest.js.map