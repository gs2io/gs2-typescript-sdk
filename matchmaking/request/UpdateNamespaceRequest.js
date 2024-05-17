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
var Gs2Matchmaking = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.enableRating = null;
        this.enableDisconnectDetection = null;
        this.disconnectDetectionTimeoutSeconds = null;
        this.createGatheringTriggerType = null;
        this.createGatheringTriggerRealtimeNamespaceId = null;
        this.createGatheringTriggerScriptId = null;
        this.completeMatchmakingTriggerType = null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = null;
        this.completeMatchmakingTriggerScriptId = null;
        this.enableCollaborateSeasonRating = null;
        this.collaborateSeasonRatingNamespaceId = null;
        this.collaborateSeasonRatingTtl = null;
        this.changeRatingScript = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.completeNotification = null;
        this.changeRatingNotification = null;
        this.logSetting = null;
    }
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.getEnableRating = function () {
        return this.enableRating;
    };
    UpdateNamespaceRequest.prototype.setEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    UpdateNamespaceRequest.prototype.getEnableDisconnectDetection = function () {
        return this.enableDisconnectDetection;
    };
    UpdateNamespaceRequest.prototype.setEnableDisconnectDetection = function (enableDisconnectDetection) {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableDisconnectDetection = function (enableDisconnectDetection) {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDisconnectDetectionTimeoutSeconds = function () {
        return this.disconnectDetectionTimeoutSeconds;
    };
    UpdateNamespaceRequest.prototype.setDisconnectDetectionTimeoutSeconds = function (disconnectDetectionTimeoutSeconds) {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDisconnectDetectionTimeoutSeconds = function (disconnectDetectionTimeoutSeconds) {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateGatheringTriggerType = function () {
        return this.createGatheringTriggerType;
    };
    UpdateNamespaceRequest.prototype.setCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateGatheringTriggerRealtimeNamespaceId = function () {
        return this.createGatheringTriggerRealtimeNamespaceId;
    };
    UpdateNamespaceRequest.prototype.setCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateGatheringTriggerScriptId = function () {
        return this.createGatheringTriggerScriptId;
    };
    UpdateNamespaceRequest.prototype.setCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteMatchmakingTriggerType = function () {
        return this.completeMatchmakingTriggerType;
    };
    UpdateNamespaceRequest.prototype.setCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteMatchmakingTriggerRealtimeNamespaceId = function () {
        return this.completeMatchmakingTriggerRealtimeNamespaceId;
    };
    UpdateNamespaceRequest.prototype.setCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteMatchmakingTriggerScriptId = function () {
        return this.completeMatchmakingTriggerScriptId;
    };
    UpdateNamespaceRequest.prototype.setCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getEnableCollaborateSeasonRating = function () {
        return this.enableCollaborateSeasonRating;
    };
    UpdateNamespaceRequest.prototype.setEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCollaborateSeasonRatingNamespaceId = function () {
        return this.collaborateSeasonRatingNamespaceId;
    };
    UpdateNamespaceRequest.prototype.setCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCollaborateSeasonRatingTtl = function () {
        return this.collaborateSeasonRatingTtl;
    };
    UpdateNamespaceRequest.prototype.setCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeRatingScript = function () {
        return this.changeRatingScript;
    };
    UpdateNamespaceRequest.prototype.setChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    UpdateNamespaceRequest.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    UpdateNamespaceRequest.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    UpdateNamespaceRequest.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeRatingNotification = function () {
        return this.changeRatingNotification;
    };
    UpdateNamespaceRequest.prototype.setChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    UpdateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withEnableRating(data["enableRating"])
            .withEnableDisconnectDetection(data["enableDisconnectDetection"])
            .withDisconnectDetectionTimeoutSeconds(data["disconnectDetectionTimeoutSeconds"])
            .withCreateGatheringTriggerType(data["createGatheringTriggerType"])
            .withCreateGatheringTriggerRealtimeNamespaceId(data["createGatheringTriggerRealtimeNamespaceId"])
            .withCreateGatheringTriggerScriptId(data["createGatheringTriggerScriptId"])
            .withCompleteMatchmakingTriggerType(data["completeMatchmakingTriggerType"])
            .withCompleteMatchmakingTriggerRealtimeNamespaceId(data["completeMatchmakingTriggerRealtimeNamespaceId"])
            .withCompleteMatchmakingTriggerScriptId(data["completeMatchmakingTriggerScriptId"])
            .withEnableCollaborateSeasonRating(data["enableCollaborateSeasonRating"])
            .withCollaborateSeasonRatingNamespaceId(data["collaborateSeasonRatingNamespaceId"])
            .withCollaborateSeasonRatingTtl(data["collaborateSeasonRatingTtl"])
            .withChangeRatingScript(Gs2Matchmaking.ScriptSetting.fromDict(data["changeRatingScript"]))
            .withJoinNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["leaveNotification"]))
            .withCompleteNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["completeNotification"]))
            .withChangeRatingNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["changeRatingNotification"]))
            .withLogSetting(Gs2Matchmaking.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "enableRating": this.getEnableRating(),
            "enableDisconnectDetection": this.getEnableDisconnectDetection(),
            "disconnectDetectionTimeoutSeconds": this.getDisconnectDetectionTimeoutSeconds(),
            "createGatheringTriggerType": this.getCreateGatheringTriggerType(),
            "createGatheringTriggerRealtimeNamespaceId": this.getCreateGatheringTriggerRealtimeNamespaceId(),
            "createGatheringTriggerScriptId": this.getCreateGatheringTriggerScriptId(),
            "completeMatchmakingTriggerType": this.getCompleteMatchmakingTriggerType(),
            "completeMatchmakingTriggerRealtimeNamespaceId": this.getCompleteMatchmakingTriggerRealtimeNamespaceId(),
            "completeMatchmakingTriggerScriptId": this.getCompleteMatchmakingTriggerScriptId(),
            "enableCollaborateSeasonRating": this.getEnableCollaborateSeasonRating(),
            "collaborateSeasonRatingNamespaceId": this.getCollaborateSeasonRatingNamespaceId(),
            "collaborateSeasonRatingTtl": this.getCollaborateSeasonRatingTtl(),
            "changeRatingScript": (_a = this.getChangeRatingScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "joinNotification": (_b = this.getJoinNotification()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "leaveNotification": (_c = this.getLeaveNotification()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "completeNotification": (_d = this.getCompleteNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "changeRatingNotification": (_e = this.getChangeRatingNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map