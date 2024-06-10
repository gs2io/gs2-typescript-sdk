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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:global:{rankingName}:{season}:score";
var GlobalRankingScore = /** @class */ (function () {
    function GlobalRankingScore() {
        this.globalRankingScoreId = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GlobalRankingScore.getRegion = function (grn) {
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
    GlobalRankingScore.getOwnerId = function (grn) {
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
    GlobalRankingScore.getNamespaceName = function (grn) {
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
    GlobalRankingScore.getUserId = function (grn) {
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
    GlobalRankingScore.getRankingName = function (grn) {
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
    GlobalRankingScore.getSeason = function (grn) {
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
    GlobalRankingScore.isValid = function (grn) {
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
    GlobalRankingScore.createGrn = function (region, ownerId, namespaceName, userId, rankingName, season) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '');
    };
    GlobalRankingScore.prototype.getGlobalRankingScoreId = function () {
        return this.globalRankingScoreId;
    };
    GlobalRankingScore.prototype.setGlobalRankingScoreId = function (globalRankingScoreId) {
        this.globalRankingScoreId = globalRankingScoreId;
        return this;
    };
    GlobalRankingScore.prototype.withGlobalRankingScoreId = function (globalRankingScoreId) {
        this.globalRankingScoreId = globalRankingScoreId;
        return this;
    };
    GlobalRankingScore.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GlobalRankingScore.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingScore.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingScore.prototype.getUserId = function () {
        return this.userId;
    };
    GlobalRankingScore.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingScore.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingScore.prototype.getSeason = function () {
        return this.season;
    };
    GlobalRankingScore.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingScore.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingScore.prototype.getScore = function () {
        return this.score;
    };
    GlobalRankingScore.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    GlobalRankingScore.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    GlobalRankingScore.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalRankingScore.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingScore.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingScore.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GlobalRankingScore.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingScore.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingScore.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GlobalRankingScore.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingScore.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingScore.prototype.getRevision = function () {
        return this.revision;
    };
    GlobalRankingScore.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingScore.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingScore.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingScore()
            .withGlobalRankingScoreId(data["globalRankingScoreId"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GlobalRankingScore.prototype.toDict = function () {
        return {
            "globalRankingScoreId": this.getGlobalRankingScoreId(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GlobalRankingScore;
}());
exports.default = GlobalRankingScore;
//# sourceMappingURL=GlobalRankingScore.js.map