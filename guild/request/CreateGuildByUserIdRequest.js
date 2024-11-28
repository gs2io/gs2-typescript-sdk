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
var tslib_1 = require("tslib");
var Gs2Guild = tslib_1.__importStar(require("../model"));
var CreateGuildByUserIdRequest = /** @class */ (function () {
    function CreateGuildByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.guildModelName = null;
        this.displayName = null;
        this.attribute1 = null;
        this.attribute2 = null;
        this.attribute3 = null;
        this.attribute4 = null;
        this.attribute5 = null;
        this.joinPolicy = null;
        this.customRoles = null;
        this.guildMemberDefaultRole = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CreateGuildByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGuildByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGuildByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGuildByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateGuildByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    CreateGuildByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    CreateGuildByUserIdRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getAttribute1 = function () {
        return this.attribute1;
    };
    CreateGuildByUserIdRequest.prototype.setAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getAttribute2 = function () {
        return this.attribute2;
    };
    CreateGuildByUserIdRequest.prototype.setAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getAttribute3 = function () {
        return this.attribute3;
    };
    CreateGuildByUserIdRequest.prototype.setAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getAttribute4 = function () {
        return this.attribute4;
    };
    CreateGuildByUserIdRequest.prototype.setAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getAttribute5 = function () {
        return this.attribute5;
    };
    CreateGuildByUserIdRequest.prototype.setAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getJoinPolicy = function () {
        return this.joinPolicy;
    };
    CreateGuildByUserIdRequest.prototype.setJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getCustomRoles = function () {
        return this.customRoles;
    };
    CreateGuildByUserIdRequest.prototype.setCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    CreateGuildByUserIdRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CreateGuildByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateGuildByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGuildByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGuildByUserIdRequest.fromDict = function (data) {
        return new CreateGuildByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withDisplayName(data["displayName"])
            .withAttribute1(data["attribute1"])
            .withAttribute2(data["attribute2"])
            .withAttribute3(data["attribute3"])
            .withAttribute4(data["attribute4"])
            .withAttribute5(data["attribute5"])
            .withJoinPolicy(data["joinPolicy"])
            .withCustomRoles(data.customRoles ?
            data.customRoles.map(function (item) {
                return Gs2Guild.RoleModel.fromDict(item);
            }) : null)
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CreateGuildByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "displayName": this.getDisplayName(),
            "attribute1": this.getAttribute1(),
            "attribute2": this.getAttribute2(),
            "attribute3": this.getAttribute3(),
            "attribute4": this.getAttribute4(),
            "attribute5": this.getAttribute5(),
            "joinPolicy": this.getJoinPolicy(),
            "customRoles": this.getCustomRoles() ?
                this.getCustomRoles().map(function (item) {
                    return item.toDict();
                }) : null,
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CreateGuildByUserIdRequest;
}());
exports.default = CreateGuildByUserIdRequest;
//# sourceMappingURL=CreateGuildByUserIdRequest.js.map