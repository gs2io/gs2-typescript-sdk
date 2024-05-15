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
var AssumeByUserIdRequest = /** @class */ (function () {
    function AssumeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.guildName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AssumeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AssumeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AssumeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AssumeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AssumeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AssumeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AssumeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AssumeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AssumeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AssumeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AssumeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AssumeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AssumeByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AssumeByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AssumeByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AssumeByUserIdRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    AssumeByUserIdRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AssumeByUserIdRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AssumeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AssumeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AssumeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AssumeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AssumeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AssumeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AssumeByUserIdRequest.fromDict = function (data) {
        return new AssumeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AssumeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AssumeByUserIdRequest;
}());
exports.default = AssumeByUserIdRequest;
//# sourceMappingURL=AssumeByUserIdRequest.js.map