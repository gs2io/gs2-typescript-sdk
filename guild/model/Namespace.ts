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
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private joinNotification: NotificationSetting|null = null;
    private leaveNotification: NotificationSetting|null = null;
    private changeMemberNotification: NotificationSetting|null = null;
    private receiveRequestNotification: NotificationSetting|null = null;
    private removeRequestNotification: NotificationSetting|null = null;
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
    public getChangeMemberNotification(): NotificationSetting|null {
        return this.changeMemberNotification;
    }
    public setChangeMemberNotification(changeMemberNotification: NotificationSetting|null) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public withChangeMemberNotification(changeMemberNotification: NotificationSetting|null): this {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public getReceiveRequestNotification(): NotificationSetting|null {
        return this.receiveRequestNotification;
    }
    public setReceiveRequestNotification(receiveRequestNotification: NotificationSetting|null) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public withReceiveRequestNotification(receiveRequestNotification: NotificationSetting|null): this {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public getRemoveRequestNotification(): NotificationSetting|null {
        return this.removeRequestNotification;
    }
    public setRemoveRequestNotification(removeRequestNotification: NotificationSetting|null) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    }
    public withRemoveRequestNotification(removeRequestNotification: NotificationSetting|null): this {
        this.removeRequestNotification = removeRequestNotification;
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
            .withJoinNotification(NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(NotificationSetting.fromDict(data["leaveNotification"]))
            .withChangeMemberNotification(NotificationSetting.fromDict(data["changeMemberNotification"]))
            .withReceiveRequestNotification(NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withRemoveRequestNotification(NotificationSetting.fromDict(data["removeRequestNotification"]))
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
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "changeMemberNotification": this.getChangeMemberNotification()?.toDict(),
            "receiveRequestNotification": this.getReceiveRequestNotification()?.toDict(),
            "removeRequestNotification": this.getRemoveRequestNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
