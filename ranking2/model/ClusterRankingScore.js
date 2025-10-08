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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:cluster:{rankingName}:{clusterName}:{season}:score";
var ClusterRankingScore = /** @class */ (function () {
    function ClusterRankingScore() {
        this.clusterRankingScoreId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    ClusterRankingScore.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getClusterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '(.*)')
            .replace('{season}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingScore.isValid = function (grn) {
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
        if (this.getClusterName(grn) == null || this.getClusterName(grn) === '') {
            return false;
        }
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        return true;
    };
    ClusterRankingScore.createGrn = function (region, ownerId, namespaceName, userId, rankingName, clusterName, season) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{clusterName}', clusterName !== null && clusterName !== void 0 ? clusterName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '');
    };
    ClusterRankingScore.prototype.getClusterRankingScoreId = function () {
        return this.clusterRankingScoreId;
    };
    ClusterRankingScore.prototype.setClusterRankingScoreId = function (clusterRankingScoreId) {
        this.clusterRankingScoreId = clusterRankingScoreId;
        return this;
    };
    ClusterRankingScore.prototype.withClusterRankingScoreId = function (clusterRankingScoreId) {
        this.clusterRankingScoreId = clusterRankingScoreId;
        return this;
    };
    ClusterRankingScore.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ClusterRankingScore.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingScore.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingScore.prototype.getClusterName = function () {
        return this.clusterName;
    };
    ClusterRankingScore.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingScore.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingScore.prototype.getSeason = function () {
        return this.season;
    };
    ClusterRankingScore.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingScore.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingScore.prototype.getUserId = function () {
        return this.userId;
    };
    ClusterRankingScore.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingScore.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingScore.prototype.getScore = function () {
        return this.score;
    };
    ClusterRankingScore.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    ClusterRankingScore.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    ClusterRankingScore.prototype.getMetadata = function () {
        return this.metadata;
    };
    ClusterRankingScore.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingScore.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingScore.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ClusterRankingScore.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingScore.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingScore.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ClusterRankingScore.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingScore.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingScore.prototype.getRevision = function () {
        return this.revision;
    };
    ClusterRankingScore.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingScore.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingScore.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingScore()
            .withClusterRankingScoreId(data["clusterRankingScoreId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    ClusterRankingScore.prototype.toDict = function () {
        return {
            "clusterRankingScoreId": this.getClusterRankingScoreId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ClusterRankingScore;
}());
exports.default = ClusterRankingScore;
//# sourceMappingURL=ClusterRankingScore.js.map