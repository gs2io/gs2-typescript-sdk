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
var UpdateGuildModelMasterRequest = /** @class */ (function () {
    function UpdateGuildModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.description = null;
        this.metadata = null;
        this.defaultMaximumMemberCount = null;
        this.maximumMemberCount = null;
        this.inactivityPeriodDays = null;
        this.roles = null;
        this.guildMasterRole = null;
        this.guildMemberDefaultRole = null;
        this.rejoinCoolTimeMinutes = null;
        this.maxConcurrentJoinGuilds = null;
        this.maxConcurrentGuildMasterCount = null;
    }
    UpdateGuildModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGuildModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGuildModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGuildModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateGuildModelMasterRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateGuildModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateGuildModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getDefaultMaximumMemberCount = function () {
        return this.defaultMaximumMemberCount;
    };
    UpdateGuildModelMasterRequest.prototype.setDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getMaximumMemberCount = function () {
        return this.maximumMemberCount;
    };
    UpdateGuildModelMasterRequest.prototype.setMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getInactivityPeriodDays = function () {
        return this.inactivityPeriodDays;
    };
    UpdateGuildModelMasterRequest.prototype.setInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getRoles = function () {
        return this.roles;
    };
    UpdateGuildModelMasterRequest.prototype.setRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getGuildMasterRole = function () {
        return this.guildMasterRole;
    };
    UpdateGuildModelMasterRequest.prototype.setGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    UpdateGuildModelMasterRequest.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getRejoinCoolTimeMinutes = function () {
        return this.rejoinCoolTimeMinutes;
    };
    UpdateGuildModelMasterRequest.prototype.setRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getMaxConcurrentJoinGuilds = function () {
        return this.maxConcurrentJoinGuilds;
    };
    UpdateGuildModelMasterRequest.prototype.setMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.getMaxConcurrentGuildMasterCount = function () {
        return this.maxConcurrentGuildMasterCount;
    };
    UpdateGuildModelMasterRequest.prototype.setMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    UpdateGuildModelMasterRequest.prototype.withMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    UpdateGuildModelMasterRequest.fromDict = function (data) {
        return new UpdateGuildModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultMaximumMemberCount(data["defaultMaximumMemberCount"])
            .withMaximumMemberCount(data["maximumMemberCount"])
            .withInactivityPeriodDays(data["inactivityPeriodDays"])
            .withRoles(data.roles ?
            data.roles.map(function (item) {
                return Gs2Guild.RoleModel.fromDict(item);
            }) : null)
            .withGuildMasterRole(data["guildMasterRole"])
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withRejoinCoolTimeMinutes(data["rejoinCoolTimeMinutes"])
            .withMaxConcurrentJoinGuilds(data["maxConcurrentJoinGuilds"])
            .withMaxConcurrentGuildMasterCount(data["maxConcurrentGuildMasterCount"]);
    };
    UpdateGuildModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultMaximumMemberCount": this.getDefaultMaximumMemberCount(),
            "maximumMemberCount": this.getMaximumMemberCount(),
            "inactivityPeriodDays": this.getInactivityPeriodDays(),
            "roles": this.getRoles() ?
                this.getRoles().map(function (item) {
                    return item.toDict();
                }) : null,
            "guildMasterRole": this.getGuildMasterRole(),
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "rejoinCoolTimeMinutes": this.getRejoinCoolTimeMinutes(),
            "maxConcurrentJoinGuilds": this.getMaxConcurrentJoinGuilds(),
            "maxConcurrentGuildMasterCount": this.getMaxConcurrentGuildMasterCount(),
        };
    };
    return UpdateGuildModelMasterRequest;
}());
exports.default = UpdateGuildModelMasterRequest;
//# sourceMappingURL=UpdateGuildModelMasterRequest.js.map