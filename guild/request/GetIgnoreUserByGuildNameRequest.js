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
var GetIgnoreUserByGuildNameRequest = /** @class */ (function () {
    function GetIgnoreUserByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    GetIgnoreUserByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetIgnoreUserByGuildNameRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetIgnoreUserByGuildNameRequest.fromDict = function (data) {
        return new GetIgnoreUserByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetIgnoreUserByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetIgnoreUserByGuildNameRequest;
}());
exports.default = GetIgnoreUserByGuildNameRequest;
//# sourceMappingURL=GetIgnoreUserByGuildNameRequest.js.map