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
var GetGuildByUserIdRequest = /** @class */ (function () {
    function GetGuildByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.guildName = null;
        this.timeOffsetToken = null;
    }
    GetGuildByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGuildByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGuildByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGuildByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetGuildByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetGuildByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetGuildByUserIdRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetGuildByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetGuildByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGuildByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGuildByUserIdRequest.fromDict = function (data) {
        return new GetGuildByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetGuildByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetGuildByUserIdRequest;
}());
exports.default = GetGuildByUserIdRequest;
//# sourceMappingURL=GetGuildByUserIdRequest.js.map