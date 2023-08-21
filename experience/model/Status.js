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
var grnFormat = "grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}";
var Status = /** @class */ (function () {
    function Status() {
        this.statusId = null;
        this.experienceName = null;
        this.userId = null;
        this.propertyId = null;
        this.experienceValue = null;
        this.rankValue = null;
        this.rankCapValue = null;
        this.nextRankUpExperienceValue = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Status.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getExperienceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{experienceName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.isValid = function (grn) {
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
        if (this.getExperienceName(grn) == null || this.getExperienceName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    Status.createGrn = function (region, ownerId, namespaceName, userId, experienceName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{experienceName}', experienceName !== null && experienceName !== void 0 ? experienceName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
    };
    Status.prototype.getStatusId = function () {
        return this.statusId;
    };
    Status.prototype.setStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.withStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    Status.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    Status.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    Status.prototype.getUserId = function () {
        return this.userId;
    };
    Status.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Status.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    Status.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Status.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Status.prototype.getRankValue = function () {
        return this.rankValue;
    };
    Status.prototype.setRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    Status.prototype.withRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    Status.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    Status.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    Status.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    Status.prototype.getNextRankUpExperienceValue = function () {
        return this.nextRankUpExperienceValue;
    };
    Status.prototype.setNextRankUpExperienceValue = function (nextRankUpExperienceValue) {
        this.nextRankUpExperienceValue = nextRankUpExperienceValue;
        return this;
    };
    Status.prototype.withNextRankUpExperienceValue = function (nextRankUpExperienceValue) {
        this.nextRankUpExperienceValue = nextRankUpExperienceValue;
        return this;
    };
    Status.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Status.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Status.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.getRevision = function () {
        return this.revision;
    };
    Status.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Status.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Status.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withExperienceName(data["experienceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"])
            .withRankValue(data["rankValue"])
            .withRankCapValue(data["rankCapValue"])
            .withNextRankUpExperienceValue(data["nextRankUpExperienceValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Status.prototype.toDict = function () {
        return {
            "statusId": this.getStatusId(),
            "experienceName": this.getExperienceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
            "rankValue": this.getRankValue(),
            "rankCapValue": this.getRankCapValue(),
            "nextRankUpExperienceValue": this.getNextRankUpExperienceValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Status;
}());
exports.default = Status;
//# sourceMappingURL=Status.js.map