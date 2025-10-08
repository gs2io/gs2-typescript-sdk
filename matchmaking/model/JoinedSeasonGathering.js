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
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:season:{seasonName}:{season}:user:{userId}:joinedGathering";
var JoinedSeasonGathering = /** @class */ (function () {
    function JoinedSeasonGathering() {
        this.joinedSeasonGatheringId = null;
        this.userId = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.seasonGatheringName = null;
        this.createdAt = null;
    }
    JoinedSeasonGathering.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.getSeasonName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JoinedSeasonGathering.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSeasonName(grn) == null || this.getSeasonName(grn) === '') {
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
    JoinedSeasonGathering.createGrn = function (region, ownerId, namespaceName, seasonName, season, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{seasonName}', seasonName !== null && seasonName !== void 0 ? seasonName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    JoinedSeasonGathering.prototype.getJoinedSeasonGatheringId = function () {
        return this.joinedSeasonGatheringId;
    };
    JoinedSeasonGathering.prototype.setJoinedSeasonGatheringId = function (joinedSeasonGatheringId) {
        this.joinedSeasonGatheringId = joinedSeasonGatheringId;
        return this;
    };
    JoinedSeasonGathering.prototype.withJoinedSeasonGatheringId = function (joinedSeasonGatheringId) {
        this.joinedSeasonGatheringId = joinedSeasonGatheringId;
        return this;
    };
    JoinedSeasonGathering.prototype.getUserId = function () {
        return this.userId;
    };
    JoinedSeasonGathering.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    JoinedSeasonGathering.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    JoinedSeasonGathering.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    JoinedSeasonGathering.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    JoinedSeasonGathering.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    JoinedSeasonGathering.prototype.getSeason = function () {
        return this.season;
    };
    JoinedSeasonGathering.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    JoinedSeasonGathering.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    JoinedSeasonGathering.prototype.getTier = function () {
        return this.tier;
    };
    JoinedSeasonGathering.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    JoinedSeasonGathering.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    JoinedSeasonGathering.prototype.getSeasonGatheringName = function () {
        return this.seasonGatheringName;
    };
    JoinedSeasonGathering.prototype.setSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    JoinedSeasonGathering.prototype.withSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    JoinedSeasonGathering.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    JoinedSeasonGathering.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    JoinedSeasonGathering.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    JoinedSeasonGathering.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new JoinedSeasonGathering()
            .withJoinedSeasonGatheringId(data["joinedSeasonGatheringId"])
            .withUserId(data["userId"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"])
            .withCreatedAt(data["createdAt"]);
    };
    JoinedSeasonGathering.prototype.toDict = function () {
        return {
            "joinedSeasonGatheringId": this.getJoinedSeasonGatheringId(),
            "userId": this.getUserId(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return JoinedSeasonGathering;
}());
exports.default = JoinedSeasonGathering;
//# sourceMappingURL=JoinedSeasonGathering.js.map