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
var CreateMissionTaskModelMasterRequest = /** @class */ (function () {
    function CreateMissionTaskModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.verifyCompleteType = null;
        this.targetCounter = null;
        this.verifyCompleteConsumeActions = null;
        this.completeAcquireActions = null;
        this.challengePeriodEventId = null;
        this.premiseMissionTaskName = null;
        this.counterName = null;
        this.targetResetType = null;
        this.targetValue = null;
    }
    CreateMissionTaskModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateMissionTaskModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateMissionTaskModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateMissionTaskModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    CreateMissionTaskModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateMissionTaskModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateMissionTaskModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateMissionTaskModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getVerifyCompleteType = function () {
        return this.verifyCompleteType;
    };
    CreateMissionTaskModelMasterRequest.prototype.setVerifyCompleteType = function (verifyCompleteType) {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withVerifyCompleteType = function (verifyCompleteType) {
        this.verifyCompleteType = verifyCompleteType;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getTargetCounter = function () {
        return this.targetCounter;
    };
    CreateMissionTaskModelMasterRequest.prototype.setTargetCounter = function (targetCounter) {
        this.targetCounter = targetCounter;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withTargetCounter = function (targetCounter) {
        this.targetCounter = targetCounter;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getVerifyCompleteConsumeActions = function () {
        return this.verifyCompleteConsumeActions;
    };
    CreateMissionTaskModelMasterRequest.prototype.setVerifyCompleteConsumeActions = function (verifyCompleteConsumeActions) {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withVerifyCompleteConsumeActions = function (verifyCompleteConsumeActions) {
        this.verifyCompleteConsumeActions = verifyCompleteConsumeActions;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getCompleteAcquireActions = function () {
        return this.completeAcquireActions;
    };
    CreateMissionTaskModelMasterRequest.prototype.setCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CreateMissionTaskModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.getPremiseMissionTaskName = function () {
        return this.premiseMissionTaskName;
    };
    CreateMissionTaskModelMasterRequest.prototype.setPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    CreateMissionTaskModelMasterRequest.prototype.withPremiseMissionTaskName = function (premiseMissionTaskName) {
        this.premiseMissionTaskName = premiseMissionTaskName;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.getTargetResetType = function () {
        return this.targetResetType;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.setTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.withTargetResetType = function (targetResetType) {
        this.targetResetType = targetResetType;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.getTargetValue = function () {
        return this.targetValue;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.setTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    /** @deprecated */
    CreateMissionTaskModelMasterRequest.prototype.withTargetValue = function (targetValue) {
        this.targetValue = targetValue;
        return this;
    };
    CreateMissionTaskModelMasterRequest.fromDict = function (data) {
        return new CreateMissionTaskModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
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
            .withCounterName(data["counterName"])
            .withTargetResetType(data["targetResetType"])
            .withTargetValue(data["targetValue"]);
    };
    CreateMissionTaskModelMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
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
            "counterName": this.getCounterName(),
            "targetResetType": this.getTargetResetType(),
            "targetValue": this.getTargetValue(),
        };
    };
    return CreateMissionTaskModelMasterRequest;
}());
exports.default = CreateMissionTaskModelMasterRequest;
//# sourceMappingURL=CreateMissionTaskModelMasterRequest.js.map