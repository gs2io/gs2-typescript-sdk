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

import IModel from '../../core/interface/IModel';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
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
    private changeRatingScript: ScriptSetting|null = null;
    private joinNotification: NotificationSetting|null = null;
    private leaveNotification: NotificationSetting|null = null;
    private completeNotification: NotificationSetting|null = null;
    private changeRatingNotification: NotificationSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
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
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }
    public getNamespaceId(): string|null {
        return this.namespaceId;
    }
    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }
    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
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
    public getChangeRatingScript(): ScriptSetting|null {
        return this.changeRatingScript;
    }
    public setChangeRatingScript(changeRatingScript: ScriptSetting|null) {
        this.changeRatingScript = changeRatingScript;
        return this;
    }
    public withChangeRatingScript(changeRatingScript: ScriptSetting|null): this {
        this.changeRatingScript = changeRatingScript;
        return this;
    }
    public getJoinNotification(): NotificationSetting|null {
        return this.joinNotification;
    }
    public setJoinNotification(joinNotification: NotificationSetting|null) {
        this.joinNotification = joinNotification;
        return this;
    }
    public withJoinNotification(joinNotification: NotificationSetting|null): this {
        this.joinNotification = joinNotification;
        return this;
    }
    public getLeaveNotification(): NotificationSetting|null {
        return this.leaveNotification;
    }
    public setLeaveNotification(leaveNotification: NotificationSetting|null) {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public withLeaveNotification(leaveNotification: NotificationSetting|null): this {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public getCompleteNotification(): NotificationSetting|null {
        return this.completeNotification;
    }
    public setCompleteNotification(completeNotification: NotificationSetting|null) {
        this.completeNotification = completeNotification;
        return this;
    }
    public withCompleteNotification(completeNotification: NotificationSetting|null): this {
        this.completeNotification = completeNotification;
        return this;
    }
    public getChangeRatingNotification(): NotificationSetting|null {
        return this.changeRatingNotification;
    }
    public setChangeRatingNotification(changeRatingNotification: NotificationSetting|null) {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    }
    public withChangeRatingNotification(changeRatingNotification: NotificationSetting|null): this {
        this.changeRatingNotification = changeRatingNotification;
        return this;
    }
    public getLogSetting(): LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Namespace|null {
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
            .withChangeRatingScript(ScriptSetting.fromDict(data["changeRatingScript"]))
            .withJoinNotification(NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(NotificationSetting.fromDict(data["leaveNotification"]))
            .withCompleteNotification(NotificationSetting.fromDict(data["completeNotification"]))
            .withChangeRatingNotification(NotificationSetting.fromDict(data["changeRatingNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
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
            "changeRatingScript": this.getChangeRatingScript()?.toDict(),
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "changeRatingNotification": this.getChangeRatingNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
