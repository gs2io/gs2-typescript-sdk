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
var Gs2Matchmaking = tslib_1.__importStar(require("../../matchmaking/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
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
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Namespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    };
    Namespace.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    Namespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    Namespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.getName = function () {
        return this.name;
    };
    Namespace.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.getDescription = function () {
        return this.description;
    };
    Namespace.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.getEnableRating = function () {
        return this.enableRating;
    };
    Namespace.prototype.setEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    Namespace.prototype.withEnableRating = function (enableRating) {
        this.enableRating = enableRating;
        return this;
    };
    Namespace.prototype.getEnableDisconnectDetection = function () {
        return this.enableDisconnectDetection;
    };
    Namespace.prototype.setEnableDisconnectDetection = function (enableDisconnectDetection) {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    };
    Namespace.prototype.withEnableDisconnectDetection = function (enableDisconnectDetection) {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    };
    Namespace.prototype.getDisconnectDetectionTimeoutSeconds = function () {
        return this.disconnectDetectionTimeoutSeconds;
    };
    Namespace.prototype.setDisconnectDetectionTimeoutSeconds = function (disconnectDetectionTimeoutSeconds) {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    };
    Namespace.prototype.withDisconnectDetectionTimeoutSeconds = function (disconnectDetectionTimeoutSeconds) {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    };
    Namespace.prototype.getCreateGatheringTriggerType = function () {
        return this.createGatheringTriggerType;
    };
    Namespace.prototype.setCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    Namespace.prototype.withCreateGatheringTriggerType = function (createGatheringTriggerType) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    };
    Namespace.prototype.getCreateGatheringTriggerRealtimeNamespaceId = function () {
        return this.createGatheringTriggerRealtimeNamespaceId;
    };
    Namespace.prototype.setCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    Namespace.prototype.withCreateGatheringTriggerRealtimeNamespaceId = function (createGatheringTriggerRealtimeNamespaceId) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    };
    Namespace.prototype.getCreateGatheringTriggerScriptId = function () {
        return this.createGatheringTriggerScriptId;
    };
    Namespace.prototype.setCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    Namespace.prototype.withCreateGatheringTriggerScriptId = function (createGatheringTriggerScriptId) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    };
    Namespace.prototype.getCompleteMatchmakingTriggerType = function () {
        return this.completeMatchmakingTriggerType;
    };
    Namespace.prototype.setCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    Namespace.prototype.withCompleteMatchmakingTriggerType = function (completeMatchmakingTriggerType) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    };
    Namespace.prototype.getCompleteMatchmakingTriggerRealtimeNamespaceId = function () {
        return this.completeMatchmakingTriggerRealtimeNamespaceId;
    };
    Namespace.prototype.setCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    Namespace.prototype.withCompleteMatchmakingTriggerRealtimeNamespaceId = function (completeMatchmakingTriggerRealtimeNamespaceId) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    };
    Namespace.prototype.getCompleteMatchmakingTriggerScriptId = function () {
        return this.completeMatchmakingTriggerScriptId;
    };
    Namespace.prototype.setCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    Namespace.prototype.withCompleteMatchmakingTriggerScriptId = function (completeMatchmakingTriggerScriptId) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    };
    Namespace.prototype.getEnableCollaborateSeasonRating = function () {
        return this.enableCollaborateSeasonRating;
    };
    Namespace.prototype.setEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    Namespace.prototype.withEnableCollaborateSeasonRating = function (enableCollaborateSeasonRating) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    };
    Namespace.prototype.getCollaborateSeasonRatingNamespaceId = function () {
        return this.collaborateSeasonRatingNamespaceId;
    };
    Namespace.prototype.setCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    Namespace.prototype.withCollaborateSeasonRatingNamespaceId = function (collaborateSeasonRatingNamespaceId) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    };
    Namespace.prototype.getCollaborateSeasonRatingTtl = function () {
        return this.collaborateSeasonRatingTtl;
    };
    Namespace.prototype.setCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    Namespace.prototype.withCollaborateSeasonRatingTtl = function (collaborateSeasonRatingTtl) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    };
    Namespace.prototype.getChangeRatingScript = function () {
        return this.changeRatingScript;
    };
    Namespace.prototype.setChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    Namespace.prototype.withChangeRatingScript = function (changeRatingScript) {
        this.changeRatingScript = changeRatingScript;
        return this;
    };
    Namespace.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    Namespace.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    Namespace.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    Namespace.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    Namespace.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    Namespace.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    Namespace.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    Namespace.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    Namespace.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    Namespace.prototype.getChangeRatingNotification = function () {
        return this.changeRatingNotification;
    };
    Namespace.prototype.setChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    Namespace.prototype.withChangeRatingNotification = function (changeRatingNotification) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    };
    Namespace.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    Namespace.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Namespace.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Namespace.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.getRevision = function () {
        return this.revision;
    };
    Namespace.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
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
            .withLogSetting(Gs2Matchmaking.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map