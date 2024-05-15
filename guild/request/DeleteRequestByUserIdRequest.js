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
var DeleteRequestByUserIdRequest = /** @class */ (function () {
    function DeleteRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.targetGuildName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DeleteRequestByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    DeleteRequestByUserIdRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteRequestByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteRequestByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRequestByUserIdRequest.fromDict = function (data) {
        return new DeleteRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withTargetGuildName(data["targetGuildName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "targetGuildName": this.getTargetGuildName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteRequestByUserIdRequest;
}());
exports.default = DeleteRequestByUserIdRequest;
//# sourceMappingURL=DeleteRequestByUserIdRequest.js.map