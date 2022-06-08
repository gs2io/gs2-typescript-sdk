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
    private createGatheringTriggerType: string|null = null;
    private createGatheringTriggerRealtimeNamespaceId: string|null = null;
    private createGatheringTriggerScriptId: string|null = null;
    private completeMatchmakingTriggerType: string|null = null;
    private completeMatchmakingTriggerRealtimeNamespaceId: string|null = null;
    private completeMatchmakingTriggerScriptId: string|null = null;
    private joinNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private leaveNotification: Gs2Matchmaking.NotificationSetting|null = null;
    private completeNotification: Gs2Matchmaking.NotificationSetting|null = null;
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
            .withCreateGatheringTriggerType(data["createGatheringTriggerType"])
            .withCreateGatheringTriggerRealtimeNamespaceId(data["createGatheringTriggerRealtimeNamespaceId"])
            .withCreateGatheringTriggerScriptId(data["createGatheringTriggerScriptId"])
            .withCompleteMatchmakingTriggerType(data["completeMatchmakingTriggerType"])
            .withCompleteMatchmakingTriggerRealtimeNamespaceId(data["completeMatchmakingTriggerRealtimeNamespaceId"])
            .withCompleteMatchmakingTriggerScriptId(data["completeMatchmakingTriggerScriptId"])
            .withJoinNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["leaveNotification"]))
            .withCompleteNotification(Gs2Matchmaking.NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(Gs2Matchmaking.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
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
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}