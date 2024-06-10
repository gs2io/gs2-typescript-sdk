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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:ranking:subscribe:{rankingName}:{season}:user:{scorerUserId}:score";
var SubscribeRankingData = /** @class */ (function () {
    function SubscribeRankingData() {
        this.subscribeRankingDataId = null;
        this.rankingName = null;
        this.season = null;
        this.userId = null;
        this.index = null;
        this.rank = null;
        this.scorerUserId = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SubscribeRankingData.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{scorerUserId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.getScorerUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingData.isValid = function (grn) {
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
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        if (this.getScorerUserId(grn) == null || this.getScorerUserId(grn) === '') {
            return false;
        }
        return true;
    };
    SubscribeRankingData.createGrn = function (region, ownerId, namespaceName, userId, rankingName, season, scorerUserId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '')
            .replace('{scorerUserId}', scorerUserId !== null && scorerUserId !== void 0 ? scorerUserId : '');
    };
    SubscribeRankingData.prototype.getSubscribeRankingDataId = function () {
        return this.subscribeRankingDataId;
    };
    SubscribeRankingData.prototype.setSubscribeRankingDataId = function (subscribeRankingDataId) {
        this.subscribeRankingDataId = subscribeRankingDataId;
        return this;
    };
    SubscribeRankingData.prototype.withSubscribeRankingDataId = function (subscribeRankingDataId) {
        this.subscribeRankingDataId = subscribeRankingDataId;
        return this;
    };
    SubscribeRankingData.prototype.getRankingName = function () {
        return this.rankingName;
    };
    SubscribeRankingData.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeRankingData.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeRankingData.prototype.getSeason = function () {
        return this.season;
    };
    SubscribeRankingData.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    SubscribeRankingData.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    SubscribeRankingData.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeRankingData.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeRankingData.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeRankingData.prototype.getIndex = function () {
        return this.index;
    };
    SubscribeRankingData.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    SubscribeRankingData.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SubscribeRankingData.prototype.getRank = function () {
        return this.rank;
    };
    SubscribeRankingData.prototype.setRank = function (rank) {
        this.rank = rank;
        return this;
    };
    SubscribeRankingData.prototype.withRank = function (rank) {
        this.rank = rank;
        return this;
    };
    SubscribeRankingData.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    SubscribeRankingData.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    SubscribeRankingData.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    SubscribeRankingData.prototype.getScore = function () {
        return this.score;
    };
    SubscribeRankingData.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    SubscribeRankingData.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    SubscribeRankingData.prototype.getMetadata = function () {
        return this.metadata;
    };
    SubscribeRankingData.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingData.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingData.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SubscribeRankingData.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingData.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingData.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SubscribeRankingData.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingData.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingData.prototype.getRevision = function () {
        return this.revision;
    };
    SubscribeRankingData.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingData.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingData.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeRankingData()
            .withSubscribeRankingDataId(data["subscribeRankingDataId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withIndex(data["index"])
            .withRank(data["rank"])
            .withScorerUserId(data["scorerUserId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SubscribeRankingData.prototype.toDict = function () {
        return {
            "subscribeRankingDataId": this.getSubscribeRankingDataId(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "index": this.getIndex(),
            "rank": this.getRank(),
            "scorerUserId": this.getScorerUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SubscribeRankingData;
}());
exports.default = SubscribeRankingData;
//# sourceMappingURL=SubscribeRankingData.js.map