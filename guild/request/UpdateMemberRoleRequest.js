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
var UpdateMemberRoleRequest = /** @class */ (function () {
    function UpdateMemberRoleRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.roleName = null;
        this.duplicationAvoider = null;
    }
    UpdateMemberRoleRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMemberRoleRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMemberRoleRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMemberRoleRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateMemberRoleRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateMemberRoleRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UpdateMemberRoleRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getRoleName = function () {
        return this.roleName;
    };
    UpdateMemberRoleRequest.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    UpdateMemberRoleRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateMemberRoleRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberRoleRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberRoleRequest.fromDict = function (data) {
        return new UpdateMemberRoleRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"])
            .withRoleName(data["roleName"]);
    };
    UpdateMemberRoleRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
            "roleName": this.getRoleName(),
        };
    };
    return UpdateMemberRoleRequest;
}());
exports.default = UpdateMemberRoleRequest;
//# sourceMappingURL=UpdateMemberRoleRequest.js.map