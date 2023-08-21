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
var grnFormat = "grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}";
var Inbox = /** @class */ (function () {
    function Inbox() {
        this.inboxId = null;
        this.userId = null;
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
            .replace('{userId}', '.*'));
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
            .replace('{userId}', '.*'));
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
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Inbox.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    };
    Inbox.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
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
    Inbox.prototype.getUserId = function () {
        return this.userId;
    };
    Inbox.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Inbox.prototype.withUserId = function (userId) {
        this.userId = userId;
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
            .withUserId(data["userId"])
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
            "userId": this.getUserId(),
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