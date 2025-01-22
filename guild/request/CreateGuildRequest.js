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
var CreateGuildRequest = /** @class */ (function () {
    function CreateGuildRequest() {
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
        this.metadata = null;
        this.memberMetadata = null;
        this.joinPolicy = null;
        this.customRoles = null;
        this.guildMemberDefaultRole = null;
        this.duplicationAvoider = null;
    }
    CreateGuildRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGuildRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGuildRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGuildRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateGuildRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGuildRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGuildRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    CreateGuildRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    CreateGuildRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    CreateGuildRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    CreateGuildRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateGuildRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateGuildRequest.prototype.getAttribute1 = function () {
        return this.attribute1;
    };
    CreateGuildRequest.prototype.setAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    CreateGuildRequest.prototype.withAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    CreateGuildRequest.prototype.getAttribute2 = function () {
        return this.attribute2;
    };
    CreateGuildRequest.prototype.setAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    CreateGuildRequest.prototype.withAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    CreateGuildRequest.prototype.getAttribute3 = function () {
        return this.attribute3;
    };
    CreateGuildRequest.prototype.setAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    CreateGuildRequest.prototype.withAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    CreateGuildRequest.prototype.getAttribute4 = function () {
        return this.attribute4;
    };
    CreateGuildRequest.prototype.setAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    CreateGuildRequest.prototype.withAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    CreateGuildRequest.prototype.getAttribute5 = function () {
        return this.attribute5;
    };
    CreateGuildRequest.prototype.setAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    CreateGuildRequest.prototype.withAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    CreateGuildRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateGuildRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGuildRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGuildRequest.prototype.getMemberMetadata = function () {
        return this.memberMetadata;
    };
    CreateGuildRequest.prototype.setMemberMetadata = function (memberMetadata) {
        this.memberMetadata = memberMetadata;
        return this;
    };
    CreateGuildRequest.prototype.withMemberMetadata = function (memberMetadata) {
        this.memberMetadata = memberMetadata;
        return this;
    };
    CreateGuildRequest.prototype.getJoinPolicy = function () {
        return this.joinPolicy;
    };
    CreateGuildRequest.prototype.setJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    CreateGuildRequest.prototype.withJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    CreateGuildRequest.prototype.getCustomRoles = function () {
        return this.customRoles;
    };
    CreateGuildRequest.prototype.setCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    CreateGuildRequest.prototype.withCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    CreateGuildRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    CreateGuildRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateGuildRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGuildRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGuildRequest.fromDict = function (data) {
        return new CreateGuildRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withDisplayName(data["displayName"])
            .withAttribute1(data["attribute1"])
            .withAttribute2(data["attribute2"])
            .withAttribute3(data["attribute3"])
            .withAttribute4(data["attribute4"])
            .withAttribute5(data["attribute5"])
            .withMetadata(data["metadata"])
            .withMemberMetadata(data["memberMetadata"])
            .withJoinPolicy(data["joinPolicy"])
            .withCustomRoles(data.customRoles ?
            data.customRoles.map(function (item) {
                return Gs2Guild.RoleModel.fromDict(item);
            }) : null)
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"]);
    };
    CreateGuildRequest.prototype.toDict = function () {
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
            "metadata": this.getMetadata(),
            "memberMetadata": this.getMemberMetadata(),
            "joinPolicy": this.getJoinPolicy(),
            "customRoles": this.getCustomRoles() ?
                this.getCustomRoles().map(function (item) {
                    return item.toDict();
                }) : null,
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
        };
    };
    return CreateGuildRequest;
}());
exports.default = CreateGuildRequest;
//# sourceMappingURL=CreateGuildRequest.js.map