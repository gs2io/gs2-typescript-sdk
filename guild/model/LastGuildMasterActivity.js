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
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}:lastActivity:master";
var LastGuildMasterActivity = /** @class */ (function () {
    function LastGuildMasterActivity() {
        this.userId = null;
        this.updatedAt = null;
    }
    LastGuildMasterActivity.getRegion = function (grn) {
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
    LastGuildMasterActivity.getOwnerId = function (grn) {
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
    LastGuildMasterActivity.getNamespaceName = function (grn) {
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
    LastGuildMasterActivity.getGuildModelName = function (grn) {
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
    LastGuildMasterActivity.getGuildName = function (grn) {
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
    LastGuildMasterActivity.isValid = function (grn) {
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
    LastGuildMasterActivity.createGrn = function (region, ownerId, namespaceName, guildModelName, guildName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '')
            .replace('{guildName}', guildName !== null && guildName !== void 0 ? guildName : '');
    };
    LastGuildMasterActivity.prototype.getUserId = function () {
        return this.userId;
    };
    LastGuildMasterActivity.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LastGuildMasterActivity.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LastGuildMasterActivity.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    LastGuildMasterActivity.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LastGuildMasterActivity.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LastGuildMasterActivity.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LastGuildMasterActivity()
            .withUserId(data["userId"])
            .withUpdatedAt(data["updatedAt"]);
    };
    LastGuildMasterActivity.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return LastGuildMasterActivity;
}());
exports.default = LastGuildMasterActivity;
//# sourceMappingURL=LastGuildMasterActivity.js.map