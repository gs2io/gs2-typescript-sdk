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
var GetJoinedGuildByUserIdRequest = /** @class */ (function () {
    function GetJoinedGuildByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.guildName = null;
        this.timeOffsetToken = null;
    }
    GetJoinedGuildByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJoinedGuildByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJoinedGuildByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJoinedGuildByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetJoinedGuildByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetJoinedGuildByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetJoinedGuildByUserIdRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetJoinedGuildByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJoinedGuildByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJoinedGuildByUserIdRequest.fromDict = function (data) {
        return new GetJoinedGuildByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetJoinedGuildByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetJoinedGuildByUserIdRequest;
}());
exports.default = GetJoinedGuildByUserIdRequest;
//# sourceMappingURL=GetJoinedGuildByUserIdRequest.js.map