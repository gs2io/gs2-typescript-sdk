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
var DeleteIgnoreUserByGuildNameRequest = /** @class */ (function () {
    function DeleteIgnoreUserByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteIgnoreUserByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteIgnoreUserByGuildNameRequest.fromDict = function (data) {
        return new DeleteIgnoreUserByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteIgnoreUserByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteIgnoreUserByGuildNameRequest;
}());
exports.default = DeleteIgnoreUserByGuildNameRequest;
//# sourceMappingURL=DeleteIgnoreUserByGuildNameRequest.js.map