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
var AddIgnoreUserRequest = /** @class */ (function () {
    function AddIgnoreUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    AddIgnoreUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddIgnoreUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddIgnoreUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddIgnoreUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddIgnoreUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddIgnoreUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddIgnoreUserRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddIgnoreUserRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddIgnoreUserRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddIgnoreUserRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AddIgnoreUserRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AddIgnoreUserRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AddIgnoreUserRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AddIgnoreUserRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddIgnoreUserRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddIgnoreUserRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddIgnoreUserRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddIgnoreUserRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddIgnoreUserRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddIgnoreUserRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddIgnoreUserRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddIgnoreUserRequest.fromDict = function (data) {
        return new AddIgnoreUserRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withUserId(data["userId"]);
    };
    AddIgnoreUserRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "userId": this.getUserId(),
        };
    };
    return AddIgnoreUserRequest;
}());
exports.default = AddIgnoreUserRequest;
//# sourceMappingURL=AddIgnoreUserRequest.js.map