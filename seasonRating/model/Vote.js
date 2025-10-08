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
var tslib_1 = require("tslib");
var Gs2SeasonRating = tslib_1.__importStar(require("../../seasonRating/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:seasonRating:{namespaceName}:vote:{seasonName}:{sessionName}";
var Vote = /** @class */ (function () {
    function Vote() {
        this.voteId = null;
        this.seasonName = null;
        this.sessionName = null;
        this.writtenBallots = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Vote.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Vote.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Vote.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Vote.getSeasonName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Vote.getSessionName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{sessionName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Vote.isValid = function (grn) {
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
        if (this.getSessionName(grn) == null || this.getSessionName(grn) === '') {
            return false;
        }
        return true;
    };
    Vote.createGrn = function (region, ownerId, namespaceName, seasonName, sessionName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{seasonName}', seasonName !== null && seasonName !== void 0 ? seasonName : '')
            .replace('{sessionName}', sessionName !== null && sessionName !== void 0 ? sessionName : '');
    };
    Vote.prototype.getVoteId = function () {
        return this.voteId;
    };
    Vote.prototype.setVoteId = function (voteId) {
        this.voteId = voteId;
        return this;
    };
    Vote.prototype.withVoteId = function (voteId) {
        this.voteId = voteId;
        return this;
    };
    Vote.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    Vote.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    Vote.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    Vote.prototype.getSessionName = function () {
        return this.sessionName;
    };
    Vote.prototype.setSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    Vote.prototype.withSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    Vote.prototype.getWrittenBallots = function () {
        return this.writtenBallots;
    };
    Vote.prototype.setWrittenBallots = function (writtenBallots) {
        this.writtenBallots = writtenBallots;
        return this;
    };
    Vote.prototype.withWrittenBallots = function (writtenBallots) {
        this.writtenBallots = writtenBallots;
        return this;
    };
    Vote.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Vote.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Vote.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Vote.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Vote.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Vote.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Vote.prototype.getRevision = function () {
        return this.revision;
    };
    Vote.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Vote.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Vote.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Vote()
            .withVoteId(data["voteId"])
            .withSeasonName(data["seasonName"])
            .withSessionName(data["sessionName"])
            .withWrittenBallots(data.writtenBallots ?
            data.writtenBallots.map(function (item) {
                return Gs2SeasonRating.WrittenBallot.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Vote.prototype.toDict = function () {
        return {
            "voteId": this.getVoteId(),
            "seasonName": this.getSeasonName(),
            "sessionName": this.getSessionName(),
            "writtenBallots": this.getWrittenBallots() ?
                this.getWrittenBallots().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Vote;
}());
exports.default = Vote;
//# sourceMappingURL=Vote.js.map