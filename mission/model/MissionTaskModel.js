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
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:missionTaskModel:{missionTaskName}";
var MissionTaskModel = /** @class */ (function () {
    function MissionTaskModel() {
        this.missionTaskId = null;
        this.name = null;
        this.metadata = null;
        this.counterName = null;
        this.targetValue = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
    }
    MissionTaskModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionTaskModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionTaskModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionTaskModel.getMissionGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionTaskModel.getMissionTaskName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionTaskModel.isValid = function (grn) {
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
        if (this.getMissionTaskName(grn) == null || this.getMissionTaskName(grn) === '') {
            return false;
        }
        return true;
    };
    MissionTaskModel.createGrn = function (region, ownerId, namespaceName, missionGroupName, missionTaskName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '')
            .replace('{missionTaskName}', missionTaskName !== null && missionTaskName !== void 0 ? missionTaskName : '');
    };
    MissionTaskModel.prototype.getMissionTaskId = function () {
        return this.missionTaskId;
    };
    MissionTaskModel.prototype.setMissionTaskId = function (missionTaskId) {
        this.missionTaskId = missionTaskId;
        return this;
    };
    MissionTaskModel.prototype.withMissionTaskId = function (missionTaskId) {
        this.missionTaskId = missionTaskId;
        return this;
    };
    MissionTaskModel.prototype.getName = function () {
        return this.name;
    };
    MissionTaskModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MissionTaskModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MissionTaskModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    MissionTaskModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionTaskModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MissionTaskModel.prototype.getCounterName = function () {
        return this.counterName;
    };
    MissionTaskModel.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionTaskModel.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionTaskModel.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    MissionTaskModel.prototype.setTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    MissionTaskModel.prototype.withTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    MissionTaskModel.prototype.getCompleteAcquireActions = function () {
        return this.completeAcquireActions;
    };
    MissionTaskModel.prototype.setCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    MissionTaskModel.prototype.withCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    MissionTaskModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    MissionTaskModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    MissionTaskModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    MissionTaskModel.prototype.getPremiseMissionTaskName = function () {
        return this.premiseMissionTaskName;
    };
    MissionTaskModel.prototype.setPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    MissionTaskModel.prototype.withPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    MissionTaskModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionTaskModel()
            .withMissionTaskId(data["missionTaskId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withCounterName(data["counterName"])
            .withTargetValue(data["targetValue"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
            data.completeAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"]);
    };
    MissionTaskModel.prototype.toDict = function () {
        return {
            "missionTaskId": this.getMissionTaskId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "counterName": this.getCounterName(),
            "targetValue": this.getTargetValue(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
        };
    };
    return MissionTaskModel;
}());
exports.default = MissionTaskModel;
//# sourceMappingURL=MissionTaskModel.js.map