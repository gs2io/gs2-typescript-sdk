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
var UpdateGuildRequest = /** @class */ (function () {
    function UpdateGuildRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
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
        this.duplicationAvoider = null;
    }
    UpdateGuildRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGuildRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGuildRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGuildRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateGuildRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateGuildRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateGuildRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateGuildRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    UpdateGuildRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateGuildRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateGuildRequest.prototype.getAttribute1 = function () {
        return this.attribute1;
    };
    UpdateGuildRequest.prototype.setAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    UpdateGuildRequest.prototype.withAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    UpdateGuildRequest.prototype.getAttribute2 = function () {
        return this.attribute2;
    };
    UpdateGuildRequest.prototype.setAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    UpdateGuildRequest.prototype.withAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    UpdateGuildRequest.prototype.getAttribute3 = function () {
        return this.attribute3;
    };
    UpdateGuildRequest.prototype.setAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    UpdateGuildRequest.prototype.withAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    UpdateGuildRequest.prototype.getAttribute4 = function () {
        return this.attribute4;
    };
    UpdateGuildRequest.prototype.setAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    UpdateGuildRequest.prototype.withAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    UpdateGuildRequest.prototype.getAttribute5 = function () {
        return this.attribute5;
    };
    UpdateGuildRequest.prototype.setAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    UpdateGuildRequest.prototype.withAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    UpdateGuildRequest.prototype.getJoinPolicy = function () {
        return this.joinPolicy;
    };
    UpdateGuildRequest.prototype.setJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    UpdateGuildRequest.prototype.withJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    UpdateGuildRequest.prototype.getCustomRoles = function () {
        return this.customRoles;
    };
    UpdateGuildRequest.prototype.setCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    UpdateGuildRequest.prototype.withCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    UpdateGuildRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    UpdateGuildRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateGuildRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateGuildRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateGuildRequest.fromDict = function (data) {
        return new UpdateGuildRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
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
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"]);
    };
    UpdateGuildRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
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
        };
    };
    return UpdateGuildRequest;
}());
exports.default = UpdateGuildRequest;
//# sourceMappingURL=UpdateGuildRequest.js.map