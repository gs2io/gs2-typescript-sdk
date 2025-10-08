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
var UpdateMemberRoleByGuildNameRequest = /** @class */ (function () {
    function UpdateMemberRoleByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.targetUserId = null;
        this.roleName = null;
        this.duplicationAvoider = null;
    }
    UpdateMemberRoleByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getRoleName = function () {
        return this.roleName;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberRoleByGuildNameRequest.fromDict = function (data) {
        return new UpdateMemberRoleByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withTargetUserId(data["targetUserId"])
            .withRoleName(data["roleName"]);
    };
    UpdateMemberRoleByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "targetUserId": this.getTargetUserId(),
            "roleName": this.getRoleName(),
        };
    };
    return UpdateMemberRoleByGuildNameRequest;
}());
exports.default = UpdateMemberRoleByGuildNameRequest;
//# sourceMappingURL=UpdateMemberRoleByGuildNameRequest.js.map