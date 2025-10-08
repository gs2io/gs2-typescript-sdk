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
var DeleteMemberByGuildNameRequest = /** @class */ (function () {
    function DeleteMemberByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    DeleteMemberByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMemberByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMemberByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMemberByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DeleteMemberByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    DeleteMemberByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    DeleteMemberByGuildNameRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteMemberByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMemberByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMemberByGuildNameRequest.fromDict = function (data) {
        return new DeleteMemberByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTargetUserId(data["targetUserId"]);
    };
    DeleteMemberByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return DeleteMemberByGuildNameRequest;
}());
exports.default = DeleteMemberByGuildNameRequest;
//# sourceMappingURL=DeleteMemberByGuildNameRequest.js.map