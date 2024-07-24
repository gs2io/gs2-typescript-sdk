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
var CreateGuildModelMasterRequest = /** @class */ (function () {
    function CreateGuildModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.defaultMaximumMemberCount = null;
        this.maximumMemberCount = null;
        this.inactivityPeriodDays = null;
        this.roles = null;
        this.guildMasterRole = null;
        this.guildMemberDefaultRole = null;
        this.rejoinCoolTimeMinutes = null;
    }
    CreateGuildModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGuildModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGuildModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGuildModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateGuildModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateGuildModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateGuildModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getDefaultMaximumMemberCount = function () {
        return this.defaultMaximumMemberCount;
    };
    CreateGuildModelMasterRequest.prototype.setDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getMaximumMemberCount = function () {
        return this.maximumMemberCount;
    };
    CreateGuildModelMasterRequest.prototype.setMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getInactivityPeriodDays = function () {
        return this.inactivityPeriodDays;
    };
    CreateGuildModelMasterRequest.prototype.setInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getRoles = function () {
        return this.roles;
    };
    CreateGuildModelMasterRequest.prototype.setRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getGuildMasterRole = function () {
        return this.guildMasterRole;
    };
    CreateGuildModelMasterRequest.prototype.setGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    CreateGuildModelMasterRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.getRejoinCoolTimeMinutes = function () {
        return this.rejoinCoolTimeMinutes;
    };
    CreateGuildModelMasterRequest.prototype.setRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    CreateGuildModelMasterRequest.prototype.withRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    CreateGuildModelMasterRequest.fromDict = function (data) {
        return new CreateGuildModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultMaximumMemberCount(data["defaultMaximumMemberCount"])
            .withMaximumMemberCount(data["maximumMemberCount"])
            .withInactivityPeriodDays(data["inactivityPeriodDays"])
            .withRoles(data.roles ?
            data.roles.map(function (item) {
                return Gs2Guild.RoleModel.fromDict(item);
            }) : [])
            .withGuildMasterRole(data["guildMasterRole"])
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withRejoinCoolTimeMinutes(data["rejoinCoolTimeMinutes"]);
    };
    CreateGuildModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultMaximumMemberCount": this.getDefaultMaximumMemberCount(),
            "maximumMemberCount": this.getMaximumMemberCount(),
            "inactivityPeriodDays": this.getInactivityPeriodDays(),
            "roles": this.getRoles() ?
                this.getRoles().map(function (item) {
                    return item.toDict();
                }) : [],
            "guildMasterRole": this.getGuildMasterRole(),
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "rejoinCoolTimeMinutes": this.getRejoinCoolTimeMinutes(),
        };
    };
    return CreateGuildModelMasterRequest;
}());
exports.default = CreateGuildModelMasterRequest;
//# sourceMappingURL=CreateGuildModelMasterRequest.js.map