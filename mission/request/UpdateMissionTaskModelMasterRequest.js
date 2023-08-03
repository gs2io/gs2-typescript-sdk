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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var UpdateMissionTaskModelMasterRequest = /** @class */ (function () {
    function UpdateMissionTaskModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
        this.metadata = null;
        this.description = null;
        this.counterName = null;
        this.targetResetType = null;
        this.targetValue = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
    }
    UpdateMissionTaskModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getTargetResetType = function () {
        return this.targetResetType;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getCompleteAcquireActions = function () {
        return this.completeAcquireActions;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.getPremiseMissionTaskName = function () {
        return this.premiseMissionTaskName;
    };
    UpdateMissionTaskModelMasterRequest.prototype.setPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.prototype.withPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    UpdateMissionTaskModelMasterRequest.fromDict = function (data) {
        return new UpdateMissionTaskModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withCounterName(data["counterName"])
            .withTargetResetType(data["targetResetType"])
            .withTargetValue(data["targetValue"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
            data.completeAcquireActions.map(function (item) {
                return Gs2Mission.AcquireAction.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withPremiseMissionTaskName(data["premiseMissionTaskName"]);
    };
    UpdateMissionTaskModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "counterName": this.getCounterName(),
            "targetResetType": this.getTargetResetType(),
            "targetValue": this.getTargetValue(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "premiseMissionTaskName": this.getPremiseMissionTaskName(),
        };
    };
    return UpdateMissionTaskModelMasterRequest;
}());
exports.default = UpdateMissionTaskModelMasterRequest;
//# sourceMappingURL=UpdateMissionTaskModelMasterRequest.js.map