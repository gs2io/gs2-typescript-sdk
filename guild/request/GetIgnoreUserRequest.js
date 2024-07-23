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
var GetIgnoreUserRequest = /** @class */ (function () {
    function GetIgnoreUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.userId = null;
    }
    GetIgnoreUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIgnoreUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIgnoreUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIgnoreUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIgnoreUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIgnoreUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIgnoreUserRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetIgnoreUserRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIgnoreUserRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIgnoreUserRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetIgnoreUserRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetIgnoreUserRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetIgnoreUserRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetIgnoreUserRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetIgnoreUserRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetIgnoreUserRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetIgnoreUserRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetIgnoreUserRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetIgnoreUserRequest.fromDict = function (data) {
        return new GetIgnoreUserRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withUserId(data["userId"]);
    };
    GetIgnoreUserRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "userId": this.getUserId(),
        };
    };
    return GetIgnoreUserRequest;
}());
exports.default = GetIgnoreUserRequest;
//# sourceMappingURL=GetIgnoreUserRequest.js.map