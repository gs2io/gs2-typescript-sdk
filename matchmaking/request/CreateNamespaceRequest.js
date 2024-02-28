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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.enableRating = null;
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
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.getEnableRating = function () {
        return this.enableRating;
    };
    CreateNamespaceRequest.prototype.setEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    CreateNamespaceRequest.prototype.withEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateGatheringTriggerType = function () {
        return this.createGatheringTriggerType;
    };
    CreateNamespaceRequest.prototype.setCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateGatheringTriggerRealtimeNamespaceId = function () {
        return this.createGatheringTriggerRealtimeNamespaceId;
    };
    CreateNamespaceRequest.prototype.setCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateGatheringTriggerScriptId = function () {
        return this.createGatheringTriggerScriptId;
    };
    CreateNamespaceRequest.prototype.setCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.getCompleteMatchmakingTriggerType = function () {
        return this.completeMatchmakingTriggerType;
    };
    CreateNamespaceRequest.prototype.setCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    CreateNamespaceRequest.prototype.getCompleteMatchmakingTriggerRealtimeNamespaceId = function () {
        return this.completeMatchmakingTriggerRealtimeNamespaceId;
    };
    CreateNamespaceRequest.prototype.setCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.getCompleteMatchmakingTriggerScriptId = function () {
        return this.completeMatchmakingTriggerScriptId;
    };
    CreateNamespaceRequest.prototype.setCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.getEnableCollaborateSeasonRating = function () {
        return this.enableCollaborateSeasonRating;
    };
    CreateNamespaceRequest.prototype.setEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    CreateNamespaceRequest.prototype.withEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    CreateNamespaceRequest.prototype.getCollaborateSeasonRatingNamespaceId = function () {
        return this.collaborateSeasonRatingNamespaceId;
    };
    CreateNamespaceRequest.prototype.setCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.withCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    CreateNamespaceRequest.prototype.getCollaborateSeasonRatingTtl = function () {
        return this.collaborateSeasonRatingTtl;
    };
    CreateNamespaceRequest.prototype.setCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    CreateNamespaceRequest.prototype.withCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeRatingScript = function () {
        return this.changeRatingScript;
    };
    CreateNamespaceRequest.prototype.setChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    CreateNamespaceRequest.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    CreateNamespaceRequest.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    CreateNamespaceRequest.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeRatingNotification = function () {
        return this.changeRatingNotification;
    };
    CreateNamespaceRequest.prototype.setChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    CreateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withEnableRating(data["enableRating"])
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
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "enableRating": this.getEnableRating(),
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
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map