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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:global:{rankingName}:{season}:reward:received";
var GlobalRankingReceivedReward = /** @class */ (function () {
    function GlobalRankingReceivedReward() {
        this.globalRankingReceivedRewardId = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.receivedAt = null;
        this.revision = null;
    }
    GlobalRankingReceivedReward.getRegion = function (grn) {
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
    GlobalRankingReceivedReward.getOwnerId = function (grn) {
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
    GlobalRankingReceivedReward.getNamespaceName = function (grn) {
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
    GlobalRankingReceivedReward.getUserId = function (grn) {
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
    GlobalRankingReceivedReward.getRankingName = function (grn) {
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
    GlobalRankingReceivedReward.getSeason = function (grn) {
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
    GlobalRankingReceivedReward.isValid = function (grn) {
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
    GlobalRankingReceivedReward.createGrn = function (region, ownerId, namespaceName, userId, rankingName, season) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '');
    };
    GlobalRankingReceivedReward.prototype.getGlobalRankingReceivedRewardId = function () {
        return this.globalRankingReceivedRewardId;
    };
    GlobalRankingReceivedReward.prototype.setGlobalRankingReceivedRewardId = function (globalRankingReceivedRewardId) {
        this.globalRankingReceivedRewardId = globalRankingReceivedRewardId;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withGlobalRankingReceivedRewardId = function (globalRankingReceivedRewardId) {
        this.globalRankingReceivedRewardId = globalRankingReceivedRewardId;
        return this;
    };
    GlobalRankingReceivedReward.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GlobalRankingReceivedReward.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GlobalRankingReceivedReward.prototype.getUserId = function () {
        return this.userId;
    };
    GlobalRankingReceivedReward.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GlobalRankingReceivedReward.prototype.getSeason = function () {
        return this.season;
    };
    GlobalRankingReceivedReward.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GlobalRankingReceivedReward.prototype.getReceivedAt = function () {
        return this.receivedAt;
    };
    GlobalRankingReceivedReward.prototype.setReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    GlobalRankingReceivedReward.prototype.getRevision = function () {
        return this.revision;
    };
    GlobalRankingReceivedReward.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingReceivedReward.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingReceivedReward.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingReceivedReward()
            .withGlobalRankingReceivedRewardId(data["globalRankingReceivedRewardId"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withReceivedAt(data["receivedAt"])
            .withRevision(data["revision"]);
    };
    GlobalRankingReceivedReward.prototype.toDict = function () {
        return {
            "globalRankingReceivedRewardId": this.getGlobalRankingReceivedRewardId(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "receivedAt": this.getReceivedAt(),
            "revision": this.getRevision(),
        };
    };
    return GlobalRankingReceivedReward;
}());
exports.default = GlobalRankingReceivedReward;
//# sourceMappingURL=GlobalRankingReceivedReward.js.map