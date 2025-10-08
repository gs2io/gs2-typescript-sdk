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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:ranking:subscribe:{rankingName}:{season}:score";
var SubscribeRankingScore = /** @class */ (function () {
    function SubscribeRankingScore() {
        this.subscribeRankingScoreId = null;
        this.rankingName = null;
        this.season = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SubscribeRankingScore.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SubscribeRankingScore.isValid = function (grn) {
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
        return true;
    };
    SubscribeRankingScore.createGrn = function (region, ownerId, namespaceName, userId, rankingName, season) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '');
    };
    SubscribeRankingScore.prototype.getSubscribeRankingScoreId = function () {
        return this.subscribeRankingScoreId;
    };
    SubscribeRankingScore.prototype.setSubscribeRankingScoreId = function (subscribeRankingScoreId) {
        this.subscribeRankingScoreId = subscribeRankingScoreId;
        return this;
    };
    SubscribeRankingScore.prototype.withSubscribeRankingScoreId = function (subscribeRankingScoreId) {
        this.subscribeRankingScoreId = subscribeRankingScoreId;
        return this;
    };
    SubscribeRankingScore.prototype.getRankingName = function () {
        return this.rankingName;
    };
    SubscribeRankingScore.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeRankingScore.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeRankingScore.prototype.getSeason = function () {
        return this.season;
    };
    SubscribeRankingScore.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    SubscribeRankingScore.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    SubscribeRankingScore.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeRankingScore.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeRankingScore.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeRankingScore.prototype.getScore = function () {
        return this.score;
    };
    SubscribeRankingScore.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    SubscribeRankingScore.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    SubscribeRankingScore.prototype.getMetadata = function () {
        return this.metadata;
    };
    SubscribeRankingScore.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingScore.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingScore.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SubscribeRankingScore.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingScore.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingScore.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SubscribeRankingScore.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingScore.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingScore.prototype.getRevision = function () {
        return this.revision;
    };
    SubscribeRankingScore.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingScore.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingScore.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeRankingScore()
            .withSubscribeRankingScoreId(data["subscribeRankingScoreId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SubscribeRankingScore.prototype.toDict = function () {
        return {
            "subscribeRankingScoreId": this.getSubscribeRankingScoreId(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SubscribeRankingScore;
}());
exports.default = SubscribeRankingScore;
//# sourceMappingURL=SubscribeRankingScore.js.map