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
var GuildModelMaster = /** @class */ (function () {
    function GuildModelMaster() {
        this.guildModelId = null;
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
        this.maxConcurrentJoinGuilds = null;
        this.maxConcurrentGuildMasterCount = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GuildModelMaster.getRegion = function (grn) {
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
    GuildModelMaster.getOwnerId = function (grn) {
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
    GuildModelMaster.getNamespaceName = function (grn) {
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
    GuildModelMaster.getGuildModelName = function (grn) {
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
    GuildModelMaster.isValid = function (grn) {
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
    GuildModelMaster.createGrn = function (region, ownerId, namespaceName, guildModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '');
    };
    GuildModelMaster.prototype.getGuildModelId = function () {
        return this.guildModelId;
    };
    GuildModelMaster.prototype.setGuildModelId = function (guildModelId) {
        this.guildModelId = guildModelId;
        return this;
    };
    GuildModelMaster.prototype.withGuildModelId = function (guildModelId) {
        this.guildModelId = guildModelId;
        return this;
    };
    GuildModelMaster.prototype.getName = function () {
        return this.name;
    };
    GuildModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GuildModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GuildModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    GuildModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    GuildModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    GuildModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    GuildModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GuildModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GuildModelMaster.prototype.getDefaultMaximumMemberCount = function () {
        return this.defaultMaximumMemberCount;
    };
    GuildModelMaster.prototype.setDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    GuildModelMaster.prototype.withDefaultMaximumMemberCount = function (defaultMaximumMemberCount) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    };
    GuildModelMaster.prototype.getMaximumMemberCount = function () {
        return this.maximumMemberCount;
    };
    GuildModelMaster.prototype.setMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    GuildModelMaster.prototype.withMaximumMemberCount = function (maximumMemberCount) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    };
    GuildModelMaster.prototype.getInactivityPeriodDays = function () {
        return this.inactivityPeriodDays;
    };
    GuildModelMaster.prototype.setInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    GuildModelMaster.prototype.withInactivityPeriodDays = function (inactivityPeriodDays) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    };
    GuildModelMaster.prototype.getRoles = function () {
        return this.roles;
    };
    GuildModelMaster.prototype.setRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    GuildModelMaster.prototype.withRoles = function (roles) {
        this.roles = roles;
        return this;
    };
    GuildModelMaster.prototype.getGuildMasterRole = function () {
        return this.guildMasterRole;
    };
    GuildModelMaster.prototype.setGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    GuildModelMaster.prototype.withGuildMasterRole = function (guildMasterRole) {
        this.guildMasterRole = guildMasterRole;
        return this;
    };
    GuildModelMaster.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    GuildModelMaster.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    GuildModelMaster.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    GuildModelMaster.prototype.getRejoinCoolTimeMinutes = function () {
        return this.rejoinCoolTimeMinutes;
    };
    GuildModelMaster.prototype.setRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    GuildModelMaster.prototype.withRejoinCoolTimeMinutes = function (rejoinCoolTimeMinutes) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    };
    GuildModelMaster.prototype.getMaxConcurrentJoinGuilds = function () {
        return this.maxConcurrentJoinGuilds;
    };
    GuildModelMaster.prototype.setMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    GuildModelMaster.prototype.withMaxConcurrentJoinGuilds = function (maxConcurrentJoinGuilds) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    };
    GuildModelMaster.prototype.getMaxConcurrentGuildMasterCount = function () {
        return this.maxConcurrentGuildMasterCount;
    };
    GuildModelMaster.prototype.setMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    GuildModelMaster.prototype.withMaxConcurrentGuildMasterCount = function (maxConcurrentGuildMasterCount) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    };
    GuildModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GuildModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GuildModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GuildModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GuildModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GuildModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GuildModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    GuildModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GuildModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GuildModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GuildModelMaster()
            .withGuildModelId(data["guildModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
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
            .withMaxConcurrentGuildMasterCount(data["maxConcurrentGuildMasterCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GuildModelMaster.prototype.toDict = function () {
        return {
            "guildModelId": this.getGuildModelId(),
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
            "maxConcurrentJoinGuilds": this.getMaxConcurrentJoinGuilds(),
            "maxConcurrentGuildMasterCount": this.getMaxConcurrentGuildMasterCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GuildModelMaster;
}());
exports.default = GuildModelMaster;
//# sourceMappingURL=GuildModelMaster.js.map