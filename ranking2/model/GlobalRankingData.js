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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:global:{rankingName}:ranking:global:{season}:user:{userId}:score";
var GlobalRankingData = /** @class */ (function () {
    function GlobalRankingData() {
        this.globalRankingDataId = null;
        this.rankingName = null;
        this.season = null;
        this.userId = null;
        this.index = null;
        this.rank = null;
        this.score = null;
        this.metadata = null;
        this.invertUpdatedAt = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GlobalRankingData.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingData.isValid = function (grn) {
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
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    };
    GlobalRankingData.createGrn = function (region, ownerId, namespaceName, rankingName, season, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    GlobalRankingData.prototype.getGlobalRankingDataId = function () {
        return this.globalRankingDataId;
    };
    GlobalRankingData.prototype.setGlobalRankingDataId = function (globalRankingDataId) {
        this.globalRankingDataId = globalRankingDataId;
        return this;
    };
    GlobalRankingData.prototype.withGlobalRankingDataId = function (globalRankingDataId) {
        this.globalRankingDataId = globalRankingDataId;
        return this;
    };
    GlobalRankingData.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GlobalRankingData.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingData.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingData.prototype.getSeason = function () {
        return this.season;
    };
    GlobalRankingData.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingData.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingData.prototype.getUserId = function () {
        return this.userId;
    };
    GlobalRankingData.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingData.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingData.prototype.getIndex = function () {
        return this.index;
    };
    GlobalRankingData.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    GlobalRankingData.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    GlobalRankingData.prototype.getRank = function () {
        return this.rank;
    };
    GlobalRankingData.prototype.setRank = function (rank) {
        this.rank = rank;
        return this;
    };
    GlobalRankingData.prototype.withRank = function (rank) {
        this.rank = rank;
        return this;
    };
    GlobalRankingData.prototype.getScore = function () {
        return this.score;
    };
    GlobalRankingData.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    GlobalRankingData.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    GlobalRankingData.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalRankingData.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingData.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingData.prototype.getInvertUpdatedAt = function () {
        return this.invertUpdatedAt;
    };
    GlobalRankingData.prototype.setInvertUpdatedAt = function (invertUpdatedAt) {
        this.invertUpdatedAt = invertUpdatedAt;
        return this;
    };
    GlobalRankingData.prototype.withInvertUpdatedAt = function (invertUpdatedAt) {
        this.invertUpdatedAt = invertUpdatedAt;
        return this;
    };
    GlobalRankingData.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GlobalRankingData.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingData.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingData.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GlobalRankingData.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingData.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingData.prototype.getRevision = function () {
        return this.revision;
    };
    GlobalRankingData.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingData.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingData.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingData()
            .withGlobalRankingDataId(data["globalRankingDataId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withIndex(data["index"])
            .withRank(data["rank"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withInvertUpdatedAt(data["invertUpdatedAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GlobalRankingData.prototype.toDict = function () {
        return {
            "globalRankingDataId": this.getGlobalRankingDataId(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "index": this.getIndex(),
            "rank": this.getRank(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "invertUpdatedAt": this.getInvertUpdatedAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GlobalRankingData;
}());
exports.default = GlobalRankingData;
//# sourceMappingURL=GlobalRankingData.js.map