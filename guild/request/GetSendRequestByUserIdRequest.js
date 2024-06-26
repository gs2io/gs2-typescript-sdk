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
var GetSendRequestByUserIdRequest = /** @class */ (function () {
    function GetSendRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.targetGuildName = null;
        this.timeOffsetToken = null;
    }
    GetSendRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSendRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSendRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSendRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetSendRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetSendRequestByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    GetSendRequestByUserIdRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetSendRequestByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSendRequestByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSendRequestByUserIdRequest.fromDict = function (data) {
        return new GetSendRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withTargetGuildName(data["targetGuildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetSendRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "targetGuildName": this.getTargetGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetSendRequestByUserIdRequest;
}());
exports.default = GetSendRequestByUserIdRequest;
//# sourceMappingURL=GetSendRequestByUserIdRequest.js.map