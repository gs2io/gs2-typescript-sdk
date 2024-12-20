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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:cluster:{rankingName}:ranking:cluster:{clusterName}:{season}:user:{userId}:score";
var ClusterRankingData = /** @class */ (function () {
    function ClusterRankingData() {
        this.clusterRankingDataId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.userId = null;
        this.index = null;
        this.rank = null;
        this.score = null;
        this.metadata = null;
        this.invertCreatedAt = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    ClusterRankingData.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getClusterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ClusterRankingData.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    };
    ClusterRankingData.createGrn = function (region, ownerId, namespaceName, rankingName, clusterName, season, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{clusterName}', clusterName !== null && clusterName !== void 0 ? clusterName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    ClusterRankingData.prototype.getClusterRankingDataId = function () {
        return this.clusterRankingDataId;
    };
    ClusterRankingData.prototype.setClusterRankingDataId = function (clusterRankingDataId) {
        this.clusterRankingDataId = clusterRankingDataId;
        return this;
    };
    ClusterRankingData.prototype.withClusterRankingDataId = function (clusterRankingDataId) {
        this.clusterRankingDataId = clusterRankingDataId;
        return this;
    };
    ClusterRankingData.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ClusterRankingData.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingData.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingData.prototype.getClusterName = function () {
        return this.clusterName;
    };
    ClusterRankingData.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingData.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingData.prototype.getSeason = function () {
        return this.season;
    };
    ClusterRankingData.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingData.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingData.prototype.getUserId = function () {
        return this.userId;
    };
    ClusterRankingData.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingData.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingData.prototype.getIndex = function () {
        return this.index;
    };
    ClusterRankingData.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    ClusterRankingData.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    ClusterRankingData.prototype.getRank = function () {
        return this.rank;
    };
    ClusterRankingData.prototype.setRank = function (rank) {
        this.rank = rank;
        return this;
    };
    ClusterRankingData.prototype.withRank = function (rank) {
        this.rank = rank;
        return this;
    };
    ClusterRankingData.prototype.getScore = function () {
        return this.score;
    };
    ClusterRankingData.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    ClusterRankingData.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    ClusterRankingData.prototype.getMetadata = function () {
        return this.metadata;
    };
    ClusterRankingData.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingData.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingData.prototype.getInvertCreatedAt = function () {
        return this.invertCreatedAt;
    };
    ClusterRankingData.prototype.setInvertCreatedAt = function (invertCreatedAt) {
        this.invertCreatedAt = invertCreatedAt;
        return this;
    };
    ClusterRankingData.prototype.withInvertCreatedAt = function (invertCreatedAt) {
        this.invertCreatedAt = invertCreatedAt;
        return this;
    };
    ClusterRankingData.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ClusterRankingData.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingData.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingData.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ClusterRankingData.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingData.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingData.prototype.getRevision = function () {
        return this.revision;
    };
    ClusterRankingData.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingData.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingData.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingData()
            .withClusterRankingDataId(data["clusterRankingDataId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withIndex(data["index"])
            .withRank(data["rank"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withInvertCreatedAt(data["invertCreatedAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    ClusterRankingData.prototype.toDict = function () {
        return {
            "clusterRankingDataId": this.getClusterRankingDataId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "index": this.getIndex(),
            "rank": this.getRank(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "invertCreatedAt": this.getInvertCreatedAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ClusterRankingData;
}());
exports.default = ClusterRankingData;
//# sourceMappingURL=ClusterRankingData.js.map