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
var Friend = /** @class */ (function () {
    function Friend() {
        this.friendId = null;
        this.userId = null;
        this.targetUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Friend.getRegion = function (grn) {
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
    Friend.getOwnerId = function (grn) {
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
    Friend.getNamespaceName = function (grn) {
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
    Friend.getUserId = function (grn) {
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
    Friend.isValid = function (grn) {
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
    Friend.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    Friend.prototype.getFriendId = function () {
        return this.friendId;
    };
    Friend.prototype.setFriendId = function (friendId) {
        this.friendId = friendId;
        return this;
    };
    Friend.prototype.withFriendId = function (friendId) {
        this.friendId = friendId;
        return this;
    };
    Friend.prototype.getUserId = function () {
        return this.userId;
    };
    Friend.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Friend.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Friend.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    Friend.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Friend.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Friend.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Friend.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Friend.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Friend.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Friend.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Friend.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Friend.prototype.getRevision = function () {
        return this.revision;
    };
    Friend.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Friend.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Friend.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Friend()
            .withFriendId(data["friendId"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Friend.prototype.toDict = function () {
        return {
            "friendId": this.getFriendId(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Friend;
}());
exports.default = Friend;
//# sourceMappingURL=Friend.js.map