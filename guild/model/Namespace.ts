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

import * as Gs2Guild from '../../guild/model'
import TransactionSetting from './TransactionSetting';
import NotificationSetting from './NotificationSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Guild.TransactionSetting|null = null;
    private changeNotification: Gs2Guild.NotificationSetting|null = null;
    private joinNotification: Gs2Guild.NotificationSetting|null = null;
    private leaveNotification: Gs2Guild.NotificationSetting|null = null;
    private changeMemberNotification: Gs2Guild.NotificationSetting|null = null;
    private changeMemberNotificationIgnoreChangeMetadata: boolean|null = null;
    private receiveRequestNotification: Gs2Guild.NotificationSetting|null = null;
    private removeRequestNotification: Gs2Guild.NotificationSetting|null = null;
    private createGuildScript: Gs2Guild.ScriptSetting|null = null;
    private updateGuildScript: Gs2Guild.ScriptSetting|null = null;
    private joinGuildScript: Gs2Guild.ScriptSetting|null = null;
    private receiveJoinRequestScript: Gs2Guild.ScriptSetting|null = null;
    private leaveGuildScript: Gs2Guild.ScriptSetting|null = null;
    private changeRoleScript: Gs2Guild.ScriptSetting|null = null;
    private deleteGuildScript: Gs2Guild.ScriptSetting|null = null;
    private logSetting: Gs2Guild.LogSetting|null = null;
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
    public getTransactionSetting(): Gs2Guild.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Guild.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Guild.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getChangeNotification(): Gs2Guild.NotificationSetting|null {
        return this.changeNotification;
    }
    public setChangeNotification(changeNotification: Gs2Guild.NotificationSetting|null) {
        this.changeNotification = changeNotification;
        return this;
    }
    public withChangeNotification(changeNotification: Gs2Guild.NotificationSetting|null): this {
        this.changeNotification = changeNotification;
        return this;
    }
    public getJoinNotification(): Gs2Guild.NotificationSetting|null {
        return this.joinNotification;
    }
    public setJoinNotification(joinNotification: Gs2Guild.NotificationSetting|null) {
        this.joinNotification = joinNotification;
        return this;
    }
    public withJoinNotification(joinNotification: Gs2Guild.NotificationSetting|null): this {
        this.joinNotification = joinNotification;
        return this;
    }
    public getLeaveNotification(): Gs2Guild.NotificationSetting|null {
        return this.leaveNotification;
    }
    public setLeaveNotification(leaveNotification: Gs2Guild.NotificationSetting|null) {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public withLeaveNotification(leaveNotification: Gs2Guild.NotificationSetting|null): this {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public getChangeMemberNotification(): Gs2Guild.NotificationSetting|null {
        return this.changeMemberNotification;
    }
    public setChangeMemberNotification(changeMemberNotification: Gs2Guild.NotificationSetting|null) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public withChangeMemberNotification(changeMemberNotification: Gs2Guild.NotificationSetting|null): this {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public getChangeMemberNotificationIgnoreChangeMetadata(): boolean|null {
        return this.changeMemberNotificationIgnoreChangeMetadata;
    }
    public setChangeMemberNotificationIgnoreChangeMetadata(changeMemberNotificationIgnoreChangeMetadata: boolean|null) {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
        return this;
    }
    public withChangeMemberNotificationIgnoreChangeMetadata(changeMemberNotificationIgnoreChangeMetadata: boolean|null): this {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
        return this;
    }
    public getReceiveRequestNotification(): Gs2Guild.NotificationSetting|null {
        return this.receiveRequestNotification;
    }
    public setReceiveRequestNotification(receiveRequestNotification: Gs2Guild.NotificationSetting|null) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public withReceiveRequestNotification(receiveRequestNotification: Gs2Guild.NotificationSetting|null): this {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public getRemoveRequestNotification(): Gs2Guild.NotificationSetting|null {
        return this.removeRequestNotification;
    }
    public setRemoveRequestNotification(removeRequestNotification: Gs2Guild.NotificationSetting|null) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    }
    public withRemoveRequestNotification(removeRequestNotification: Gs2Guild.NotificationSetting|null): this {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    }
    public getCreateGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.createGuildScript;
    }
    public setCreateGuildScript(createGuildScript: Gs2Guild.ScriptSetting|null) {
        this.createGuildScript = createGuildScript;
        return this;
    }
    public withCreateGuildScript(createGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.createGuildScript = createGuildScript;
        return this;
    }
    public getUpdateGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.updateGuildScript;
    }
    public setUpdateGuildScript(updateGuildScript: Gs2Guild.ScriptSetting|null) {
        this.updateGuildScript = updateGuildScript;
        return this;
    }
    public withUpdateGuildScript(updateGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.updateGuildScript = updateGuildScript;
        return this;
    }
    public getJoinGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.joinGuildScript;
    }
    public setJoinGuildScript(joinGuildScript: Gs2Guild.ScriptSetting|null) {
        this.joinGuildScript = joinGuildScript;
        return this;
    }
    public withJoinGuildScript(joinGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.joinGuildScript = joinGuildScript;
        return this;
    }
    public getReceiveJoinRequestScript(): Gs2Guild.ScriptSetting|null {
        return this.receiveJoinRequestScript;
    }
    public setReceiveJoinRequestScript(receiveJoinRequestScript: Gs2Guild.ScriptSetting|null) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    }
    public withReceiveJoinRequestScript(receiveJoinRequestScript: Gs2Guild.ScriptSetting|null): this {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    }
    public getLeaveGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.leaveGuildScript;
    }
    public setLeaveGuildScript(leaveGuildScript: Gs2Guild.ScriptSetting|null) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    }
    public withLeaveGuildScript(leaveGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    }
    public getChangeRoleScript(): Gs2Guild.ScriptSetting|null {
        return this.changeRoleScript;
    }
    public setChangeRoleScript(changeRoleScript: Gs2Guild.ScriptSetting|null) {
        this.changeRoleScript = changeRoleScript;
        return this;
    }
    public withChangeRoleScript(changeRoleScript: Gs2Guild.ScriptSetting|null): this {
        this.changeRoleScript = changeRoleScript;
        return this;
    }
    public getDeleteGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.deleteGuildScript;
    }
    public setDeleteGuildScript(deleteGuildScript: Gs2Guild.ScriptSetting|null) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    }
    public withDeleteGuildScript(deleteGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    }
    public getLogSetting(): Gs2Guild.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Guild.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Guild.LogSetting|null): this {
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
            .withTransactionSetting(Gs2Guild.TransactionSetting.fromDict(data["transactionSetting"]))
            .withChangeNotification(Gs2Guild.NotificationSetting.fromDict(data["changeNotification"]))
            .withJoinNotification(Gs2Guild.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Guild.NotificationSetting.fromDict(data["leaveNotification"]))
            .withChangeMemberNotification(Gs2Guild.NotificationSetting.fromDict(data["changeMemberNotification"]))
            .withChangeMemberNotificationIgnoreChangeMetadata(data["changeMemberNotificationIgnoreChangeMetadata"])
            .withReceiveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withRemoveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["removeRequestNotification"]))
            .withCreateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["createGuildScript"]))
            .withUpdateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["updateGuildScript"]))
            .withJoinGuildScript(Gs2Guild.ScriptSetting.fromDict(data["joinGuildScript"]))
            .withReceiveJoinRequestScript(Gs2Guild.ScriptSetting.fromDict(data["receiveJoinRequestScript"]))
            .withLeaveGuildScript(Gs2Guild.ScriptSetting.fromDict(data["leaveGuildScript"]))
            .withChangeRoleScript(Gs2Guild.ScriptSetting.fromDict(data["changeRoleScript"]))
            .withDeleteGuildScript(Gs2Guild.ScriptSetting.fromDict(data["deleteGuildScript"]))
            .withLogSetting(Gs2Guild.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "changeNotification": this.getChangeNotification()?.toDict(),
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "changeMemberNotification": this.getChangeMemberNotification()?.toDict(),
            "changeMemberNotificationIgnoreChangeMetadata": this.getChangeMemberNotificationIgnoreChangeMetadata(),
            "receiveRequestNotification": this.getReceiveRequestNotification()?.toDict(),
            "removeRequestNotification": this.getRemoveRequestNotification()?.toDict(),
            "createGuildScript": this.getCreateGuildScript()?.toDict(),
            "updateGuildScript": this.getUpdateGuildScript()?.toDict(),
            "joinGuildScript": this.getJoinGuildScript()?.toDict(),
            "receiveJoinRequestScript": this.getReceiveJoinRequestScript()?.toDict(),
            "leaveGuildScript": this.getLeaveGuildScript()?.toDict(),
            "changeRoleScript": this.getChangeRoleScript()?.toDict(),
            "deleteGuildScript": this.getDeleteGuildScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
