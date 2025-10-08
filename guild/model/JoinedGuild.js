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
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:user:{userId}:guild:{guildModelName}:{guildName}";
var JoinedGuild = /** @class */ (function () {
    function JoinedGuild() {
        this.joinedGuildId = null;
        this.guildModelName = null;
        this.guildName = null;
        this.userId = null;
        this.createdAt = null;
    }
    JoinedGuild.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.getGuildModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '(.*)')
            .replace('{guildName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.getGuildName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedGuild.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
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
    JoinedGuild.createGrn = function (region, ownerId, namespaceName, userId, guildModelName, guildName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '')
            .replace('{guildName}', guildName !== null && guildName !== void 0 ? guildName : '');
    };
    JoinedGuild.prototype.getJoinedGuildId = function () {
        return this.joinedGuildId;
    };
    JoinedGuild.prototype.setJoinedGuildId = function (joinedGuildId) {
        this.joinedGuildId = joinedGuildId;
        return this;
    };
    JoinedGuild.prototype.withJoinedGuildId = function (joinedGuildId) {
        this.joinedGuildId = joinedGuildId;
        return this;
    };
    JoinedGuild.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    JoinedGuild.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    JoinedGuild.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    JoinedGuild.prototype.getGuildName = function () {
        return this.guildName;
    };
    JoinedGuild.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    JoinedGuild.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    JoinedGuild.prototype.getUserId = function () {
        return this.userId;
    };
    JoinedGuild.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    JoinedGuild.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    JoinedGuild.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    JoinedGuild.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    JoinedGuild.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    JoinedGuild.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new JoinedGuild()
            .withJoinedGuildId(data["joinedGuildId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"]);
    };
    JoinedGuild.prototype.toDict = function () {
        return {
            "joinedGuildId": this.getJoinedGuildId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return JoinedGuild;
}());
exports.default = JoinedGuild;
//# sourceMappingURL=JoinedGuild.js.map