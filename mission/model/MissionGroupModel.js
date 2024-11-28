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
var Gs2Mission = tslib_1.__importStar(require("../../mission/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}";
var MissionGroupModel = /** @class */ (function () {
    function MissionGroupModel() {
        this.missionGroupId = null;
        this.name = null;
        this.metadata = null;
        this.tasks = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.completeNotificationNamespaceId = null;
    }
    MissionGroupModel.getRegion = function (grn) {
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
    MissionGroupModel.getOwnerId = function (grn) {
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
    MissionGroupModel.getNamespaceName = function (grn) {
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
    MissionGroupModel.getMissionGroupName = function (grn) {
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
    MissionGroupModel.isValid = function (grn) {
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
    MissionGroupModel.createGrn = function (region, ownerId, namespaceName, missionGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '');
    };
    MissionGroupModel.prototype.getMissionGroupId = function () {
        return this.missionGroupId;
    };
    MissionGroupModel.prototype.setMissionGroupId = function (missionGroupId) {
        this.missionGroupId = missionGroupId;
        return this;
    };
    MissionGroupModel.prototype.withMissionGroupId = function (missionGroupId) {
        this.missionGroupId = missionGroupId;
        return this;
    };
    MissionGroupModel.prototype.getName = function () {
        return this.name;
    };
    MissionGroupModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MissionGroupModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MissionGroupModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    MissionGroupModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionGroupModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionGroupModel.prototype.getTasks = function () {
        return this.tasks;
    };
    MissionGroupModel.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
        return this;
    };
    MissionGroupModel.prototype.withTasks = function (tasks) {
        this.tasks = tasks;
        return this;
    };
    MissionGroupModel.prototype.getResetType = function () {
        return this.resetType;
    };
    MissionGroupModel.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    MissionGroupModel.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    MissionGroupModel.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    MissionGroupModel.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    MissionGroupModel.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    MissionGroupModel.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    MissionGroupModel.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    MissionGroupModel.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    MissionGroupModel.prototype.getResetHour = function () {
        return this.resetHour;
    };
    MissionGroupModel.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    MissionGroupModel.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    MissionGroupModel.prototype.getCompleteNotificationNamespaceId = function () {
        return this.completeNotificationNamespaceId;
    };
    MissionGroupModel.prototype.setCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    MissionGroupModel.prototype.withCompleteNotificationNamespaceId = function (completeNotificationNamespaceId) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    };
    MissionGroupModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionGroupModel()
            .withMissionGroupId(data["missionGroupId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTasks(data.tasks ?
            data.tasks.map(function (item) {
                return Gs2Mission.MissionTaskModel.fromDict(item);
            }) : null)
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withCompleteNotificationNamespaceId(data["completeNotificationNamespaceId"]);
    };
    MissionGroupModel.prototype.toDict = function () {
        return {
            "missionGroupId": this.getMissionGroupId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "tasks": this.getTasks() ?
                this.getTasks().map(function (item) {
                    return item.toDict();
                }) : null,
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "completeNotificationNamespaceId": this.getCompleteNotificationNamespaceId(),
        };
    };
    return MissionGroupModel;
}());
exports.default = MissionGroupModel;
//# sourceMappingURL=MissionGroupModel.js.map