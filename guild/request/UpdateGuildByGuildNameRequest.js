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
var UpdateGuildByGuildNameRequest = /** @class */ (function () {
    function UpdateGuildByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildName = null;
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
    UpdateGuildByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGuildByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGuildByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGuildByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    UpdateGuildByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateGuildByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    UpdateGuildByGuildNameRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getAttribute1 = function () {
        return this.attribute1;
    };
    UpdateGuildByGuildNameRequest.prototype.setAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getAttribute2 = function () {
        return this.attribute2;
    };
    UpdateGuildByGuildNameRequest.prototype.setAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getAttribute3 = function () {
        return this.attribute3;
    };
    UpdateGuildByGuildNameRequest.prototype.setAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getAttribute4 = function () {
        return this.attribute4;
    };
    UpdateGuildByGuildNameRequest.prototype.setAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getAttribute5 = function () {
        return this.attribute5;
    };
    UpdateGuildByGuildNameRequest.prototype.setAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getJoinPolicy = function () {
        return this.joinPolicy;
    };
    UpdateGuildByGuildNameRequest.prototype.setJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getCustomRoles = function () {
        return this.customRoles;
    };
    UpdateGuildByGuildNameRequest.prototype.setCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    UpdateGuildByGuildNameRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateGuildByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateGuildByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateGuildByGuildNameRequest.fromDict = function (data) {
        return new UpdateGuildByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildName(data["guildName"])
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
    UpdateGuildByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildName": this.getGuildName(),
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
    return UpdateGuildByGuildNameRequest;
}());
exports.default = UpdateGuildByGuildNameRequest;
//# sourceMappingURL=UpdateGuildByGuildNameRequest.js.map