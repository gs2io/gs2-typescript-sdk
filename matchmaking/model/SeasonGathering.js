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
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:season:{seasonName}:{season}:{tier}:gathering:{seasonGatheringName}";
var SeasonGathering = /** @class */ (function () {
    function SeasonGathering() {
        this.seasonGatheringId = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.name = null;
        this.participants = null;
        this.createdAt = null;
        this.revision = null;
    }
    SeasonGathering.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getSeasonName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getSeason = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getTier = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '(.*)')
            .replace('{seasonGatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.getSeasonGatheringName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SeasonGathering.isValid = function (grn) {
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
        if (this.getTier(grn) == null || this.getTier(grn) === '') {
            return false;
        }
        if (this.getSeasonGatheringName(grn) == null || this.getSeasonGatheringName(grn) === '') {
            return false;
        }
        return true;
    };
    SeasonGathering.createGrn = function (region, ownerId, namespaceName, seasonName, season, tier, seasonGatheringName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{seasonName}', seasonName !== null && seasonName !== void 0 ? seasonName : '')
            .replace('{season}', season !== null && season !== void 0 ? season : '')
            .replace('{tier}', tier !== null && tier !== void 0 ? tier : '')
            .replace('{seasonGatheringName}', seasonGatheringName !== null && seasonGatheringName !== void 0 ? seasonGatheringName : '');
    };
    SeasonGathering.prototype.getSeasonGatheringId = function () {
        return this.seasonGatheringId;
    };
    SeasonGathering.prototype.setSeasonGatheringId = function (seasonGatheringId) {
        this.seasonGatheringId = seasonGatheringId;
        return this;
    };
    SeasonGathering.prototype.withSeasonGatheringId = function (seasonGatheringId) {
        this.seasonGatheringId = seasonGatheringId;
        return this;
    };
    SeasonGathering.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    SeasonGathering.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    SeasonGathering.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    SeasonGathering.prototype.getSeason = function () {
        return this.season;
    };
    SeasonGathering.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    SeasonGathering.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    SeasonGathering.prototype.getTier = function () {
        return this.tier;
    };
    SeasonGathering.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    SeasonGathering.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    SeasonGathering.prototype.getName = function () {
        return this.name;
    };
    SeasonGathering.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SeasonGathering.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SeasonGathering.prototype.getParticipants = function () {
        return this.participants;
    };
    SeasonGathering.prototype.setParticipants = function (participants) {
        this.participants = participants;
        return this;
    };
    SeasonGathering.prototype.withParticipants = function (participants) {
        this.participants = participants;
        return this;
    };
    SeasonGathering.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SeasonGathering.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SeasonGathering.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SeasonGathering.prototype.getRevision = function () {
        return this.revision;
    };
    SeasonGathering.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SeasonGathering.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SeasonGathering.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SeasonGathering()
            .withSeasonGatheringId(data["seasonGatheringId"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withName(data["name"])
            .withParticipants(data.participants ?
            data.participants.map(function (item) {
                return item;
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    SeasonGathering.prototype.toDict = function () {
        return {
            "seasonGatheringId": this.getSeasonGatheringId(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "name": this.getName(),
            "participants": this.getParticipants() ?
                this.getParticipants().map(function (item) {
                    return item;
                }) : null,
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SeasonGathering;
}());
exports.default = SeasonGathering;
//# sourceMappingURL=SeasonGathering.js.map