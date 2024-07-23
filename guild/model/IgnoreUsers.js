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
var IgnoreUser_1 = tslib_1.__importDefault(require("./IgnoreUser"));
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}:ignore:user";
var IgnoreUsers = /** @class */ (function () {
    function IgnoreUsers() {
        this.ignoreUsersId = null;
        this.guildModelName = null;
        this.users = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    IgnoreUsers.getRegion = function (grn) {
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
    IgnoreUsers.getOwnerId = function (grn) {
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
    IgnoreUsers.getNamespaceName = function (grn) {
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
    IgnoreUsers.getGuildModelName = function (grn) {
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
    IgnoreUsers.getGuildName = function (grn) {
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
    IgnoreUsers.isValid = function (grn) {
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
    IgnoreUsers.createGrn = function (region, ownerId, namespaceName, guildModelName, guildName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '')
            .replace('{guildName}', guildName !== null && guildName !== void 0 ? guildName : '');
    };
    IgnoreUsers.prototype.getIgnoreUsersId = function () {
        return this.ignoreUsersId;
    };
    IgnoreUsers.prototype.setIgnoreUsersId = function (ignoreUsersId) {
        this.ignoreUsersId = ignoreUsersId;
        return this;
    };
    IgnoreUsers.prototype.withIgnoreUsersId = function (ignoreUsersId) {
        this.ignoreUsersId = ignoreUsersId;
        return this;
    };
    IgnoreUsers.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    IgnoreUsers.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    IgnoreUsers.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    IgnoreUsers.prototype.getUsers = function () {
        return this.users;
    };
    IgnoreUsers.prototype.setUsers = function (users) {
        this.users = users;
        return this;
    };
    IgnoreUsers.prototype.withUsers = function (users) {
        this.users = users;
        return this;
    };
    IgnoreUsers.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    IgnoreUsers.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IgnoreUsers.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IgnoreUsers.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    IgnoreUsers.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    IgnoreUsers.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    IgnoreUsers.prototype.getRevision = function () {
        return this.revision;
    };
    IgnoreUsers.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    IgnoreUsers.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    IgnoreUsers.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IgnoreUsers()
            .withIgnoreUsersId(data["ignoreUsersId"])
            .withGuildModelName(data["guildModelName"])
            .withUsers(data.users ?
            data.users.map(function (item) {
                return IgnoreUser_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    IgnoreUsers.prototype.toDict = function () {
        return {
            "ignoreUsersId": this.getIgnoreUsersId(),
            "guildModelName": this.getGuildModelName(),
            "users": this.getUsers() ?
                this.getUsers().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return IgnoreUsers;
}());
exports.default = IgnoreUsers;
//# sourceMappingURL=IgnoreUsers.js.map