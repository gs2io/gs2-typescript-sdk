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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:subscribe:{rankingName}";
var Subscribe = /** @class */ (function () {
    function Subscribe() {
        this.subscribeId = null;
        this.rankingName = null;
        this.userId = null;
        this.targetUserIds = null;
        this.fromUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Subscribe.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.isValid = function (grn) {
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
        if (this.getRankingName(grn) == null || this.getRankingName(grn) === '') {
            return false;
        }
        return true;
    };
    Subscribe.createGrn = function (region, ownerId, namespaceName, userId, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    Subscribe.prototype.getSubscribeId = function () {
        return this.subscribeId;
    };
    Subscribe.prototype.setSubscribeId = function (subscribeId) {
        this.subscribeId = subscribeId;
        return this;
    };
    Subscribe.prototype.withSubscribeId = function (subscribeId) {
        this.subscribeId = subscribeId;
        return this;
    };
    Subscribe.prototype.getRankingName = function () {
        return this.rankingName;
    };
    Subscribe.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    Subscribe.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    Subscribe.prototype.getUserId = function () {
        return this.userId;
    };
    Subscribe.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Subscribe.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Subscribe.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    Subscribe.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Subscribe.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Subscribe.prototype.getFromUserIds = function () {
        return this.fromUserIds;
    };
    Subscribe.prototype.setFromUserIds = function (fromUserIds) {
        this.fromUserIds = fromUserIds;
        return this;
    };
    Subscribe.prototype.withFromUserIds = function (fromUserIds) {
        this.fromUserIds = fromUserIds;
        return this;
    };
    Subscribe.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Subscribe.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Subscribe.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Subscribe.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Subscribe.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Subscribe.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Subscribe.prototype.getRevision = function () {
        return this.revision;
    };
    Subscribe.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Subscribe.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Subscribe.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Subscribe()
            .withSubscribeId(data["subscribeId"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : null)
            .withFromUserIds(data.fromUserIds ?
            data.fromUserIds.map(function (item) {
                return item;
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Subscribe.prototype.toDict = function () {
        return {
            "subscribeId": this.getSubscribeId(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : null,
            "fromUserIds": this.getFromUserIds() ?
                this.getFromUserIds().map(function (item) {
                    return item;
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Subscribe;
}());
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map