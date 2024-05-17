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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Matchmaking from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private enableRating: boolean|null = null;
    private enableDisconnectDetection: string|null = null;
    private disconnectDetectionTimeoutSeconds: number|null = null;
    private createGatheringTriggerType: string|null = null;
    private createGatheringTriggerRealtimeNamespaceId: string|null = null;
    private createGatheringTriggerScriptId: string|null = null;
    private completeMatchmakingTriggerType: string|null = null;
    private completeMatchmakingTriggerRealtimeNamespaceId: string|null = null;
    private completeMatchmakingTriggerScriptId: string|null = null;
    private enableCollaborateSeasonRating: string|null = null;
    private collaborateSeasonRatingNamespaceId: string|null = null;
    private collaborateSeasonRatingTtl: number|null = null;
    private changeRatingScript: Gs2Matchmaking.ScriptSetting|null = null;
    private joinNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private leaveNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private completeNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private changeRatingNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private logSetting: Gs2Matchmaking.LogSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getEnableRating(): boolean|null {
        return this.enableRating;
    }
    public setEnableRating(enableRating: boolean|null) {
        this.enableRating = enableRating;
        return this;
    }
    public withEnableRating(enableRating: boolean|null): this {
        this.enableRating = enableRating;
        return this;
    }
    public getEnableDisconnectDetection(): string|null {
        return this.enableDisconnectDetection;
    }
    public setEnableDisconnectDetection(enableDisconnectDetection: string|null) {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    }
    public withEnableDisconnectDetection(enableDisconnectDetection: string|null): this {
        this.enableDisconnectDetection = enableDisconnectDetection;
        return this;
    }
    public getDisconnectDetectionTimeoutSeconds(): number|null {
        return this.disconnectDetectionTimeoutSeconds;
    }
    public setDisconnectDetectionTimeoutSeconds(disconnectDetectionTimeoutSeconds: number|null) {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    }
    public withDisconnectDetectionTimeoutSeconds(disconnectDetectionTimeoutSeconds: number|null): this {
        this.disconnectDetectionTimeoutSeconds = disconnectDetectionTimeoutSeconds;
        return this;
    }
    public getCreateGatheringTriggerType(): string|null {
        return this.createGatheringTriggerType;
    }
    public setCreateGatheringTriggerType(createGatheringTriggerType: string|null) {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    }
    public withCreateGatheringTriggerType(createGatheringTriggerType: string|null): this {
        this.createGatheringTriggerType = createGatheringTriggerType;
        return this;
    }
    public getCreateGatheringTriggerRealtimeNamespaceId(): string|null {
        return this.createGatheringTriggerRealtimeNamespaceId;
    }
    public setCreateGatheringTriggerRealtimeNamespaceId(createGatheringTriggerRealtimeNamespaceId: string|null) {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    }
    public withCreateGatheringTriggerRealtimeNamespaceId(createGatheringTriggerRealtimeNamespaceId: string|null): this {
        this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
        return this;
    }
    public getCreateGatheringTriggerScriptId(): string|null {
        return this.createGatheringTriggerScriptId;
    }
    public setCreateGatheringTriggerScriptId(createGatheringTriggerScriptId: string|null) {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    }
    public withCreateGatheringTriggerScriptId(createGatheringTriggerScriptId: string|null): this {
        this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
        return this;
    }
    public getCompleteMatchmakingTriggerType(): string|null {
        return this.completeMatchmakingTriggerType;
    }
    public setCompleteMatchmakingTriggerType(completeMatchmakingTriggerType: string|null) {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    }
    public withCompleteMatchmakingTriggerType(completeMatchmakingTriggerType: string|null): this {
        this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
        return this;
    }
    public getCompleteMatchmakingTriggerRealtimeNamespaceId(): string|null {
        return this.completeMatchmakingTriggerRealtimeNamespaceId;
    }
    public setCompleteMatchmakingTriggerRealtimeNamespaceId(completeMatchmakingTriggerRealtimeNamespaceId: string|null) {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    }
    public withCompleteMatchmakingTriggerRealtimeNamespaceId(completeMatchmakingTriggerRealtimeNamespaceId: string|null): this {
        this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
        return this;
    }
    public getCompleteMatchmakingTriggerScriptId(): string|null {
        return this.completeMatchmakingTriggerScriptId;
    }
    public setCompleteMatchmakingTriggerScriptId(completeMatchmakingTriggerScriptId: string|null) {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    }
    public withCompleteMatchmakingTriggerScriptId(completeMatchmakingTriggerScriptId: string|null): this {
        this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
        return this;
    }
    public getEnableCollaborateSeasonRating(): string|null {
        return this.enableCollaborateSeasonRating;
    }
    public setEnableCollaborateSeasonRating(enableCollaborateSeasonRating: string|null) {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    }
    public withEnableCollaborateSeasonRating(enableCollaborateSeasonRating: string|null): this {
        this.enableCollaborateSeasonRating = enableCollaborateSeasonRating;
        return this;
    }
    public getCollaborateSeasonRatingNamespaceId(): string|null {
        return this.collaborateSeasonRatingNamespaceId;
    }
    public setCollaborateSeasonRatingNamespaceId(collaborateSeasonRatingNamespaceId: string|null) {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    }
    public withCollaborateSeasonRatingNamespaceId(collaborateSeasonRatingNamespaceId: string|null): this {
        this.collaborateSeasonRatingNamespaceId = collaborateSeasonRatingNamespaceId;
        return this;
    }
    public getCollaborateSeasonRatingTtl(): number|null {
        return this.collaborateSeasonRatingTtl;
    }
    public setCollaborateSeasonRatingTtl(collaborateSeasonRatingTtl: number|null) {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    }
    public withCollaborateSeasonRatingTtl(collaborateSeasonRatingTtl: number|null): this {
        this.collaborateSeasonRatingTtl = collaborateSeasonRatingTtl;
        return this;
    }
    public getChangeRatingScript(): Gs2Matchmaking.ScriptSetting|null {
        return this.changeRatingScript;
    }
    public setChangeRatingScript(changeRatingScript: Gs2Matchmaking.ScriptSetting|null) {
        this.changeRatingScript = changeRatingScript;
        return this;
    }
    public withChangeRatingScript(changeRatingScript: Gs2Matchmaking.ScriptSetting|null): this {
        this.changeRatingScript = changeRatingScript;
        return this;
    }
    public getJoinNotification(): Gs2Matchmaking.NotificationSetting|null {
        return this.joinNotification;
    }
    public setJoinNotification(joinNotification: Gs2Matchmaking.NotificationSetting|null) {
        this.joinNotification = joinNotification;
        return this;
    }
    public withJoinNotification(joinNotification: Gs2Matchmaking.NotificationSetting|null): this {
        this.joinNotification = joinNotification;
        return this;
    }
    public getLeaveNotification(): Gs2Matchmaking.NotificationSetting|null {
        return this.leaveNotification;
    }
    public setLeaveNotification(leaveNotification: Gs2Matchmaking.NotificationSetting|null) {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public withLeaveNotification(leaveNotification: Gs2Matchmaking.NotificationSetting|null): this {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public getCompleteNotification(): Gs2Matchmaking.NotificationSetting|null {
        return this.completeNotification;
    }
    public setCompleteNotification(completeNotification: Gs2Matchmaking.NotificationSetting|null) {
        this.completeNotification = completeNotification;
        return this;
    }
    public withCompleteNotification(completeNotification: Gs2Matchmaking.NotificationSetting|null): this {
        this.completeNotification = completeNotification;
        return this;
    }
    public getChangeRatingNotification(): Gs2Matchmaking.NotificationSetting|null {
        return this.changeRatingNotification;
    }
    public setChangeRatingNotification(changeRatingNotification: Gs2Matchmaking.NotificationSetting|null) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    }
    public withChangeRatingNotification(changeRatingNotification: Gs2Matchmaking.NotificationSetting|null): this {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    }
    public getLogSetting(): Gs2Matchmaking.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Matchmaking.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Matchmaking.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
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
            .withLogSetting(Gs2Matchmaking.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
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
            "changeRatingScript": this.getChangeRatingScript()?.toDict(),
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "changeRatingNotification": this.getChangeRatingNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}