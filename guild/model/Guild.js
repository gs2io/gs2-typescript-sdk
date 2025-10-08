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
var Gs2Guild = tslib_1.__importStar(require("../../guild/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}";
var Guild = /** @class */ (function () {
    function Guild() {
        this.guildId = null;
        this.guildModelName = null;
        this.name = null;
        this.displayName = null;
        this.attribute1 = null;
        this.attribute2 = null;
        this.attribute3 = null;
        this.attribute4 = null;
        this.attribute5 = null;
        this.metadata = null;
        this.joinPolicy = null;
        this.customRoles = null;
        this.guildMemberDefaultRole = null;
        this.currentMaximumMemberCount = null;
        this.members = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Guild.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Guild.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Guild.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Guild.getGuildModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '(.*)')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Guild.getGuildName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Guild.isValid = function (grn) {
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
        if (this.getGuildName(grn) == null || this.getGuildName(grn) === '') {
            return false;
        }
        return true;
    };
    Guild.createGrn = function (region, ownerId, namespaceName, guildModelName, guildName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '')
            .replace('{guildName}', guildName !== null && guildName !== void 0 ? guildName : '');
    };
    Guild.prototype.getGuildId = function () {
        return this.guildId;
    };
    Guild.prototype.setGuildId = function (guildId) {
        this.guildId = guildId;
        return this;
    };
    Guild.prototype.withGuildId = function (guildId) {
        this.guildId = guildId;
        return this;
    };
    Guild.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    Guild.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    Guild.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    Guild.prototype.getName = function () {
        return this.name;
    };
    Guild.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Guild.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Guild.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Guild.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    Guild.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    Guild.prototype.getAttribute1 = function () {
        return this.attribute1;
    };
    Guild.prototype.setAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    Guild.prototype.withAttribute1 = function (attribute1) {
        this.attribute1 = attribute1;
        return this;
    };
    Guild.prototype.getAttribute2 = function () {
        return this.attribute2;
    };
    Guild.prototype.setAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    Guild.prototype.withAttribute2 = function (attribute2) {
        this.attribute2 = attribute2;
        return this;
    };
    Guild.prototype.getAttribute3 = function () {
        return this.attribute3;
    };
    Guild.prototype.setAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    Guild.prototype.withAttribute3 = function (attribute3) {
        this.attribute3 = attribute3;
        return this;
    };
    Guild.prototype.getAttribute4 = function () {
        return this.attribute4;
    };
    Guild.prototype.setAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    Guild.prototype.withAttribute4 = function (attribute4) {
        this.attribute4 = attribute4;
        return this;
    };
    Guild.prototype.getAttribute5 = function () {
        return this.attribute5;
    };
    Guild.prototype.setAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    Guild.prototype.withAttribute5 = function (attribute5) {
        this.attribute5 = attribute5;
        return this;
    };
    Guild.prototype.getMetadata = function () {
        return this.metadata;
    };
    Guild.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Guild.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Guild.prototype.getJoinPolicy = function () {
        return this.joinPolicy;
    };
    Guild.prototype.setJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    Guild.prototype.withJoinPolicy = function (joinPolicy) {
        this.joinPolicy = joinPolicy;
        return this;
    };
    Guild.prototype.getCustomRoles = function () {
        return this.customRoles;
    };
    Guild.prototype.setCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    Guild.prototype.withCustomRoles = function (customRoles) {
        this.customRoles = customRoles;
        return this;
    };
    Guild.prototype.getGuildMemberDefaultRole = function () {
        return this.guildMemberDefaultRole;
    };
    Guild.prototype.setGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    Guild.prototype.withGuildMemberDefaultRole = function (guildMemberDefaultRole) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    };
    Guild.prototype.getCurrentMaximumMemberCount = function () {
        return this.currentMaximumMemberCount;
    };
    Guild.prototype.setCurrentMaximumMemberCount = function (currentMaximumMemberCount) {
        this.currentMaximumMemberCount = currentMaximumMemberCount;
        return this;
    };
    Guild.prototype.withCurrentMaximumMemberCount = function (currentMaximumMemberCount) {
        this.currentMaximumMemberCount = currentMaximumMemberCount;
        return this;
    };
    Guild.prototype.getMembers = function () {
        return this.members;
    };
    Guild.prototype.setMembers = function (members) {
        this.members = members;
        return this;
    };
    Guild.prototype.withMembers = function (members) {
        this.members = members;
        return this;
    };
    Guild.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Guild.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Guild.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Guild.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Guild.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Guild.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Guild.prototype.getRevision = function () {
        return this.revision;
    };
    Guild.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Guild.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Guild.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Guild()
            .withGuildId(data["guildId"])
            .withGuildModelName(data["guildModelName"])
            .withName(data["name"])
            .withDisplayName(data["displayName"])
            .withAttribute1(data["attribute1"])
            .withAttribute2(data["attribute2"])
            .withAttribute3(data["attribute3"])
            .withAttribute4(data["attribute4"])
            .withAttribute5(data["attribute5"])
            .withMetadata(data["metadata"])
            .withJoinPolicy(data["joinPolicy"])
            .withCustomRoles(data.customRoles ?
            data.customRoles.map(function (item) {
                return Gs2Guild.RoleModel.fromDict(item);
            }) : null)
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withCurrentMaximumMemberCount(data["currentMaximumMemberCount"])
            .withMembers(data.members ?
            data.members.map(function (item) {
                return Gs2Guild.Member.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Guild.prototype.toDict = function () {
        return {
            "guildId": this.getGuildId(),
            "guildModelName": this.getGuildModelName(),
            "name": this.getName(),
            "displayName": this.getDisplayName(),
            "attribute1": this.getAttribute1(),
            "attribute2": this.getAttribute2(),
            "attribute3": this.getAttribute3(),
            "attribute4": this.getAttribute4(),
            "attribute5": this.getAttribute5(),
            "metadata": this.getMetadata(),
            "joinPolicy": this.getJoinPolicy(),
            "customRoles": this.getCustomRoles() ?
                this.getCustomRoles().map(function (item) {
                    return item.toDict();
                }) : null,
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "currentMaximumMemberCount": this.getCurrentMaximumMemberCount(),
            "members": this.getMembers() ?
                this.getMembers().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Guild;
}());
exports.default = Guild;
//# sourceMappingURL=Guild.js.map