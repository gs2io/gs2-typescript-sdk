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
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:missionTaskModelMaster:{missionTaskName}";
var MissionTaskModelMaster = /** @class */ (function () {
    function MissionTaskModelMaster() {
        this.missionTaskId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.verifyCompleteType = null;
        this.targetCounter = null;
        this.verifyCompleteConsumeActions = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
        this.counterName = null;
        this.targetResetType = null;
        this.targetValue = null;
    }
    MissionTaskModelMaster.getRegion = function (grn) {
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
    MissionTaskModelMaster.getOwnerId = function (grn) {
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
    MissionTaskModelMaster.getNamespaceName = function (grn) {
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
    MissionTaskModelMaster.getMissionGroupName = function (grn) {
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
    MissionTaskModelMaster.getMissionTaskName = function (grn) {
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
    MissionTaskModelMaster.isValid = function (grn) {
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
    MissionTaskModelMaster.createGrn = function (region, ownerId, namespaceName, missionGroupName, missionTaskName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '')
            .replace('{missionTaskName}', missionTaskName !== null && missionTaskName !== void 0 ? missionTaskName : '');
    };
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
    MissionTaskModelMaster.prototype.getVerifyCompleteType = function () {
        return this.verifyCompleteType;
    };
    MissionTaskModelMaster.prototype.setVerifyCompleteType = function (verifyCompleteType) {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    };
    MissionTaskModelMaster.prototype.withVerifyCompleteType = function (verifyCompleteType) {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    };
    MissionTaskModelMaster.prototype.getTargetCounter = function () {
        return this.targetCounter;
    };
    MissionTaskModelMaster.prototype.setTargetCounter = function (targetCounter) {
        this.targetCounter = targetCounter;
        return this;
    };
    MissionTaskModelMaster.prototype.withTargetCounter = function (targetCounter) {
        this.targetCounter = targetCounter;
        return this;
    };
    MissionTaskModelMaster.prototype.getVerifyCompleteConsumeActions = function () {
        return this.verifyCompleteConsumeActions;
    };
    MissionTaskModelMaster.prototype.setVerifyCompleteConsumeActions = function (verifyCompleteConsumeActions) {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
        return this;
    };
    MissionTaskModelMaster.prototype.withVerifyCompleteConsumeActions = function (verifyCompleteConsumeActions) {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
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
    MissionTaskModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    MissionTaskModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MissionTaskModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.getCounterName = function () {
        return this.counterName;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.getTargetResetType = function () {
        return this.targetResetType;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.setTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.withTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.setTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    /** @deprecated */
    MissionTaskModelMaster.prototype.withTargetValue = function (targetValue) {
        this.targetValue = targetValue;
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
            .withVerifyCompleteType(data["verifyCompleteType"])
            .withTargetCounter(Gs2Mission.TargetCounterModel.fromDict(data["targetCounter"]))
            .withVerifyCompleteConsumeActions(data.verifyCompleteConsumeActions ?
            data.verifyCompleteConsumeActions.map(function (item) {
                return Gs2Mission.VerifyAction.fromDict(item);
            }) : null)
            .withCompleteAcquireActions(data.completeAcquireActions ?
            data.completeAcquireActions.map(function (item) {
                return Gs2Mission.AcquireAction.fromDict(item);
            }) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"])
            .withCounterName(data["counterName"])
            .withTargetResetType(data["targetResetType"])
            .withTargetValue(data["targetValue"]);
    };
    MissionTaskModelMaster.prototype.toDict = function () {
        var _a;
        return {
            "missionTaskId": this.getMissionTaskId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "verifyCompleteType": this.getVerifyCompleteType(),
            "targetCounter": (_a = this.getTargetCounter()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "verifyCompleteConsumeActions": this.getVerifyCompleteConsumeActions() ?
                this.getVerifyCompleteConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
            "counterName": this.getCounterName(),
            "targetResetType": this.getTargetResetType(),
            "targetValue": this.getTargetValue(),
        };
    };
    return MissionTaskModelMaster;
}());
exports.default = MissionTaskModelMaster;
//# sourceMappingURL=MissionTaskModelMaster.js.map