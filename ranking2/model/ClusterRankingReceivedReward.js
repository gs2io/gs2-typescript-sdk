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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:cluster:{rankingName}:{clusterName}:{season}:reward:received";
var ClusterRankingReceivedReward = /** @class */ (function () {
    function ClusterRankingReceivedReward() {
        this.clusterRankingReceivedRewardId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.userId = null;
        this.receivedAt = null;
        this.revision = null;
    }
    ClusterRankingReceivedReward.getRegion = function (grn) {
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
    ClusterRankingReceivedReward.getOwnerId = function (grn) {
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
    ClusterRankingReceivedReward.getNamespaceName = function (grn) {
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
    ClusterRankingReceivedReward.getUserId = function (grn) {
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
    ClusterRankingReceivedReward.getRankingName = function (grn) {
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
    ClusterRankingReceivedReward.getClusterName = function (grn) {
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
    ClusterRankingReceivedReward.getSeason = function (grn) {
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
    ClusterRankingReceivedReward.isValid = function (grn) {
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
    ClusterRankingReceivedReward.createGrn = function (region, ownerId, namespaceName, userId, rankingName, clusterName, season) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{clusterName}', clusterName !== null && clusterName !== void 0 ? clusterName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '');
    };
    ClusterRankingReceivedReward.prototype.getClusterRankingReceivedRewardId = function () {
        return this.clusterRankingReceivedRewardId;
    };
    ClusterRankingReceivedReward.prototype.setClusterRankingReceivedRewardId = function (clusterRankingReceivedRewardId) {
        this.clusterRankingReceivedRewardId = clusterRankingReceivedRewardId;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withClusterRankingReceivedRewardId = function (clusterRankingReceivedRewardId) {
        this.clusterRankingReceivedRewardId = clusterRankingReceivedRewardId;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ClusterRankingReceivedReward.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getClusterName = function () {
        return this.clusterName;
    };
    ClusterRankingReceivedReward.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getSeason = function () {
        return this.season;
    };
    ClusterRankingReceivedReward.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getUserId = function () {
        return this.userId;
    };
    ClusterRankingReceivedReward.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getReceivedAt = function () {
        return this.receivedAt;
    };
    ClusterRankingReceivedReward.prototype.setReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    ClusterRankingReceivedReward.prototype.getRevision = function () {
        return this.revision;
    };
    ClusterRankingReceivedReward.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingReceivedReward.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingReceivedReward.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingReceivedReward()
            .withClusterRankingReceivedRewardId(data["clusterRankingReceivedRewardId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withReceivedAt(data["receivedAt"])
            .withRevision(data["revision"]);
    };
    ClusterRankingReceivedReward.prototype.toDict = function () {
        return {
            "clusterRankingReceivedRewardId": this.getClusterRankingReceivedRewardId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "receivedAt": this.getReceivedAt(),
            "revision": this.getRevision(),
        };
    };
    return ClusterRankingReceivedReward;
}());
exports.default = ClusterRankingReceivedReward;
//# sourceMappingURL=ClusterRankingReceivedReward.js.map