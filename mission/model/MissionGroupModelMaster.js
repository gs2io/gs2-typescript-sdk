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
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}";
var MissionGroupModelMaster = /** @class */ (function () {
    function MissionGroupModelMaster() {
        this.missionGroupId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.completeNotificationNamespaceId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    MissionGroupModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionGroupModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionGroupModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionGroupModelMaster.getMissionGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionGroupModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        return true;
    };
    MissionGroupModelMaster.createGrn = function (region, ownerId, namespaceName, missionGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '');
    };
    MissionGroupModelMaster.prototype.getMissionGroupId = function () {
        return this.missionGroupId;
    };
    MissionGroupModelMaster.prototype.setMissionGroupId = function (missionGroupId) {
        this.missionGroupId = missionGroupId;
        return this;
    };
    MissionGroupModelMaster.prototype.withMissionGroupId = function (missionGroupId) {
        this.missionGroupId = missionGroupId;
        return this;
    };
    MissionGroupModelMaster.prototype.getName = function () {
        return this.name;
    };
    MissionGroupModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MissionGroupModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MissionGroupModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    MissionGroupModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionGroupModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionGroupModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    MissionGroupModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    MissionGroupModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    MissionGroupModelMaster.prototype.getResetType = function () {
        return this.resetType;
    };
    MissionGroupModelMaster.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    MissionGroupModelMaster.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    MissionGroupModelMaster.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    MissionGroupModelMaster.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    MissionGroupModelMaster.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    MissionGroupModelMaster.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    MissionGroupModelMaster.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    MissionGroupModelMaster.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    MissionGroupModelMaster.prototype.getResetHour = function () {
        return this.resetHour;
    };
    MissionGroupModelMaster.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    MissionGroupModelMaster.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    MissionGroupModelMaster.prototype.getCompleteNotificationNamespaceId = function () {
        return this.completeNotificationNamespaceId;
    };
    MissionGroupModelMaster.prototype.setCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    MissionGroupModelMaster.prototype.withCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    MissionGroupModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MissionGroupModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MissionGroupModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MissionGroupModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    MissionGroupModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MissionGroupModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MissionGroupModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionGroupModelMaster()
            .withMissionGroupId(data["missionGroupId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withCompleteNotificationNamespaceId(data["completeNotificationNamespaceId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    MissionGroupModelMaster.prototype.toDict = function () {
        return {
            "missionGroupId": this.getMissionGroupId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "completeNotificationNamespaceId": this.getCompleteNotificationNamespaceId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return MissionGroupModelMaster;
}());
exports.default = MissionGroupModelMaster;
//# sourceMappingURL=MissionGroupModelMaster.js.map