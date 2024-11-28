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
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete";
var Complete = /** @class */ (function () {
    function Complete() {
        this.completeId = null;
        this.userId = null;
        this.missionGroupName = null;
        this.completedMissionTaskNames = null;
        this.receivedMissionTaskNames = null;
        this.nextResetAt = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Complete.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Complete.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Complete.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Complete.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Complete.getMissionGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{missionGroupName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Complete.isValid = function (grn) {
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
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        return true;
    };
    Complete.createGrn = function (region, ownerId, namespaceName, userId, missionGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '');
    };
    Complete.prototype.getCompleteId = function () {
        return this.completeId;
    };
    Complete.prototype.setCompleteId = function (completeId) {
        this.completeId = completeId;
        return this;
    };
    Complete.prototype.withCompleteId = function (completeId) {
        this.completeId = completeId;
        return this;
    };
    Complete.prototype.getUserId = function () {
        return this.userId;
    };
    Complete.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Complete.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Complete.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    Complete.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    Complete.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    Complete.prototype.getCompletedMissionTaskNames = function () {
        return this.completedMissionTaskNames;
    };
    Complete.prototype.setCompletedMissionTaskNames = function (completedMissionTaskNames) {
        this.completedMissionTaskNames = completedMissionTaskNames;
        return this;
    };
    Complete.prototype.withCompletedMissionTaskNames = function (completedMissionTaskNames) {
        this.completedMissionTaskNames = completedMissionTaskNames;
        return this;
    };
    Complete.prototype.getReceivedMissionTaskNames = function () {
        return this.receivedMissionTaskNames;
    };
    Complete.prototype.setReceivedMissionTaskNames = function (receivedMissionTaskNames) {
        this.receivedMissionTaskNames = receivedMissionTaskNames;
        return this;
    };
    Complete.prototype.withReceivedMissionTaskNames = function (receivedMissionTaskNames) {
        this.receivedMissionTaskNames = receivedMissionTaskNames;
        return this;
    };
    Complete.prototype.getNextResetAt = function () {
        return this.nextResetAt;
    };
    Complete.prototype.setNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    Complete.prototype.withNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    Complete.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Complete.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Complete.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Complete.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Complete.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Complete.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Complete.prototype.getRevision = function () {
        return this.revision;
    };
    Complete.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Complete.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Complete.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Complete()
            .withCompleteId(data["completeId"])
            .withUserId(data["userId"])
            .withMissionGroupName(data["missionGroupName"])
            .withCompletedMissionTaskNames(data.completedMissionTaskNames ?
            data.completedMissionTaskNames.map(function (item) {
                return item;
            }) : null)
            .withReceivedMissionTaskNames(data.receivedMissionTaskNames ?
            data.receivedMissionTaskNames.map(function (item) {
                return item;
            }) : null)
            .withNextResetAt(data["nextResetAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Complete.prototype.toDict = function () {
        return {
            "completeId": this.getCompleteId(),
            "userId": this.getUserId(),
            "missionGroupName": this.getMissionGroupName(),
            "completedMissionTaskNames": this.getCompletedMissionTaskNames() ?
                this.getCompletedMissionTaskNames().map(function (item) {
                    return item;
                }) : null,
            "receivedMissionTaskNames": this.getReceivedMissionTaskNames() ?
                this.getReceivedMissionTaskNames().map(function (item) {
                    return item;
                }) : null,
            "nextResetAt": this.getNextResetAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Complete;
}());
exports.default = Complete;
//# sourceMappingURL=Complete.js.map