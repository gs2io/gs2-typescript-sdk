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
var UpdateMemberMetadataByUserIdRequest = /** @class */ (function () {
    function UpdateMemberMetadataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.userId = null;
        this.metadata = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UpdateMemberMetadataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberMetadataByUserIdRequest.fromDict = function (data) {
        return new UpdateMemberMetadataByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UpdateMemberMetadataByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UpdateMemberMetadataByUserIdRequest;
}());
exports.default = UpdateMemberMetadataByUserIdRequest;
//# sourceMappingURL=UpdateMemberMetadataByUserIdRequest.js.map