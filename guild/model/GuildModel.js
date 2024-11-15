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
var RoleModel_1 = tslib_1.__importDefault(require("./RoleModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:model:{guildModelName}";
var GuildModel = /** @class */ (function () {
    function GuildModel() {
        this.guildModelId = null;
        this.name = null;
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
    GuildModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GuildModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GuildModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GuildModel.getGuildModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GuildModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getGuildModelName(grn) == null || this.getGuildModelName(grn) === '') {
            return false;
        }
        return true;
    };
    GuildModel.createGrn = function (region, ownerId, namespaceName, guildModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '');
    };
    GuildModel.prototype.getGuildModelId = function () {
        return this.guildModelId;
    };
    GuildModel.prototype.setGuildModelId = function (guildModelId) {
        this.guildModelId = guildModelId;
        return this;
    };
    GuildModel.prototype.withGuildModelId = function (guildModelId) {
        this.guildModelId = guildModelId;
        return this;
    };
    GuildModel.prototype.getName = function () {
        return this.name;
    };
    GuildModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GuildModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GuildModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    GuildModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GuildModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GuildModel.prototype.getDefaultMaximumMemberCount = function () {
        return this.defaultMaximumMemberCount;
    };
    GuildModel.prototype.setDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    GuildModel.prototype.withDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    GuildModel.prototype.getMaximumMemberCount = function () {
        return this.maximumMemberCount;
    };
    GuildModel.prototype.setMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    GuildModel.prototype.withMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    GuildModel.prototype.getInactivityPeriodDays = function () {
        return this.inactivityPeriodDays;
    };
    GuildModel.prototype.setInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    GuildModel.prototype.withInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    GuildModel.prototype.getRoles = function () {
        return this.roles;
    };
    GuildModel.prototype.setRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    GuildModel.prototype.withRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    GuildModel.prototype.getGuildMasterRole = function () {
        return this.guildMasterRole;
    };
    GuildModel.prototype.setGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    GuildModel.prototype.withGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    GuildModel.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    GuildModel.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    GuildModel.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    GuildModel.prototype.getRejoinCoolTimeMinutes = function () {
        return this.rejoinCoolTimeMinutes;
    };
    GuildModel.prototype.setRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    GuildModel.prototype.withRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    GuildModel.prototype.getMaxConcurrentJoinGuilds = function () {
        return this.maxConcurrentJoinGuilds;
    };
    GuildModel.prototype.setMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    GuildModel.prototype.withMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    GuildModel.prototype.getMaxConcurrentGuildMasterCount = function () {
        return this.maxConcurrentGuildMasterCount;
    };
    GuildModel.prototype.setMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    GuildModel.prototype.withMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    GuildModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GuildModel()
            .withGuildModelId(data["guildModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDefaultMaximumMemberCount(data["defaultMaximumMemberCount"])
            .withMaximumMemberCount(data["maximumMemberCount"])
            .withInactivityPeriodDays(data["inactivityPeriodDays"])
            .withRoles(data.roles ?
            data.roles.map(function (item) {
                return RoleModel_1.default.fromDict(item);
            }) : [])
            .withGuildMasterRole(data["guildMasterRole"])
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withRejoinCoolTimeMinutes(data["rejoinCoolTimeMinutes"])
            .withMaxConcurrentJoinGuilds(data["maxConcurrentJoinGuilds"])
            .withMaxConcurrentGuildMasterCount(data["maxConcurrentGuildMasterCount"]);
    };
    GuildModel.prototype.toDict = function () {
        return {
            "guildModelId": this.getGuildModelId(),
            "name": this.getName(),
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
            "maxConcurrentJoinGuilds": this.getMaxConcurrentJoinGuilds(),
            "maxConcurrentGuildMasterCount": this.getMaxConcurrentGuildMasterCount(),
        };
    };
    return GuildModel;
}());
exports.default = GuildModel;
//# sourceMappingURL=GuildModel.js.map