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
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}:inbox";
var Inbox = /** @class */ (function () {
    function Inbox() {
        this.inboxId = null;
        this.guildName = null;
        this.fromUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Inbox.getRegion = function (grn) {
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
    Inbox.getOwnerId = function (grn) {
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
    Inbox.getNamespaceName = function (grn) {
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
    Inbox.getGuildModelName = function (grn) {
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
    Inbox.getGuildName = function (grn) {
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
    Inbox.isValid = function (grn) {
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
    Inbox.createGrn = function (region, ownerId, namespaceName, guildModelName, guildName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '')
            .replace('{guildName}', guildName !== null && guildName !== void 0 ? guildName : '');
    };
    Inbox.prototype.getInboxId = function () {
        return this.inboxId;
    };
    Inbox.prototype.setInboxId = function (inboxId) {
        this.inboxId = inboxId;
        return this;
    };
    Inbox.prototype.withInboxId = function (inboxId) {
        this.inboxId = inboxId;
        return this;
    };
    Inbox.prototype.getGuildName = function () {
        return this.guildName;
    };
    Inbox.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    Inbox.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    Inbox.prototype.getFromUserIds = function () {
        return this.fromUserIds;
    };
    Inbox.prototype.setFromUserIds = function (fromUserIds) {
        this.fromUserIds = fromUserIds;
        return this;
    };
    Inbox.prototype.withFromUserIds = function (fromUserIds) {
        this.fromUserIds = fromUserIds;
        return this;
    };
    Inbox.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Inbox.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Inbox.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Inbox.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Inbox.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Inbox.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Inbox.prototype.getRevision = function () {
        return this.revision;
    };
    Inbox.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Inbox.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Inbox.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Inbox()
            .withInboxId(data["inboxId"])
            .withGuildName(data["guildName"])
            .withFromUserIds(data.fromUserIds ?
            data.fromUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Inbox.prototype.toDict = function () {
        return {
            "inboxId": this.getInboxId(),
            "guildName": this.getGuildName(),
            "fromUserIds": this.getFromUserIds() ?
                this.getFromUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Inbox;
}());
exports.default = Inbox;
//# sourceMappingURL=Inbox.js.map