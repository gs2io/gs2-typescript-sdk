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
var WithdrawalByUserIdRequest = /** @class */ (function () {
    function WithdrawalByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.guildName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    WithdrawalByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WithdrawalByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WithdrawalByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WithdrawalByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WithdrawalByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    WithdrawalByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    WithdrawalByUserIdRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    WithdrawalByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WithdrawalByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawalByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawalByUserIdRequest.fromDict = function (data) {
        return new WithdrawalByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    WithdrawalByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return WithdrawalByUserIdRequest;
}());
exports.default = WithdrawalByUserIdRequest;
//# sourceMappingURL=WithdrawalByUserIdRequest.js.map