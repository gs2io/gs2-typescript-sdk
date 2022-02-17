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
var AcquireAction_1 = (0, tslib_1.__importDefault)(require("./AcquireAction"));
var MissionTaskModelMaster = /** @class */ (function () {
    function MissionTaskModelMaster() {
        this.missionTaskId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.counterName = null;
        this.targetValue = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    MissionTaskModelMaster.prototype.getMissionTaskId = function () {
        return this.missionTaskId;
    };
    MissionTaskModelMaster.prototype.setMissionTaskId = function (missionTaskId) {
        this.missionTaskId = missionTaskId;
        return this;
    };
    MissionTaskModelMaster.prototype.withMissionTaskId = function (missionTaskId) {
        this.missionTaskId = missionTaskId;
        return this;
    };
    MissionTaskModelMaster.prototype.getName = function () {
        return this.name;
    };
    MissionTaskModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MissionTaskModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MissionTaskModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    MissionTaskModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionTaskModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionTaskModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    MissionTaskModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    MissionTaskModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    MissionTaskModelMaster.prototype.getCounterName = function () {
        return this.counterName;
    };
    MissionTaskModelMaster.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionTaskModelMaster.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionTaskModelMaster.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    MissionTaskModelMaster.prototype.setTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    MissionTaskModelMaster.prototype.withTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    MissionTaskModelMaster.prototype.getCompleteAcquireActions = function () {
        return this.completeAcquireActions;
    };
    MissionTaskModelMaster.prototype.setCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    MissionTaskModelMaster.prototype.withCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    MissionTaskModelMaster.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    MissionTaskModelMaster.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    MissionTaskModelMaster.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    MissionTaskModelMaster.prototype.getPremiseMissionTaskName = function () {
        return this.premiseMissionTaskName;
    };
    MissionTaskModelMaster.prototype.setPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    MissionTaskModelMaster.prototype.withPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    MissionTaskModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MissionTaskModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MissionTaskModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MissionTaskModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    MissionTaskModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MissionTaskModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MissionTaskModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionTaskModelMaster()
            .withMissionTaskId(data["missionTaskId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withCounterName(data["counterName"])
            .withTargetValue(data["targetValue"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
            data.completeAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    MissionTaskModelMaster.prototype.toDict = function () {
        return {
            "missionTaskId": this.getMissionTaskId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "counterName": this.getCounterName(),
            "targetValue": this.getTargetValue(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return MissionTaskModelMaster;
}());
exports.default = MissionTaskModelMaster;
//# sourceMappingURL=MissionTaskModelMaster.js.map