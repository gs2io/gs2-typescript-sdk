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
var AddIgnoreUserByGuildNameRequest = /** @class */ (function () {
    function AddIgnoreUserByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AddIgnoreUserByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddIgnoreUserByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddIgnoreUserByGuildNameRequest.fromDict = function (data) {
        return new AddIgnoreUserByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddIgnoreUserByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddIgnoreUserByGuildNameRequest;
}());
exports.default = AddIgnoreUserByGuildNameRequest;
//# sourceMappingURL=AddIgnoreUserByGuildNameRequest.js.map