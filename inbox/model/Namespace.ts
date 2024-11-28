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

import * as Gs2Inbox from '../../inbox/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private isAutomaticDeletingEnabled: boolean|null = null;
    private transactionSetting: Gs2Inbox.TransactionSetting|null = null;
    private receiveMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private readMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private deleteMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private receiveNotification: Gs2Inbox.NotificationSetting|null = null;
    private logSetting: Gs2Inbox.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
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
    public getIsAutomaticDeletingEnabled(): boolean|null {
        return this.isAutomaticDeletingEnabled;
    }
    public setIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean|null) {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    }
    public withIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled: boolean|null): this {
        this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
        return this;
    }
    public getTransactionSetting(): Gs2Inbox.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Inbox.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Inbox.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getReceiveMessageScript(): Gs2Inbox.ScriptSetting|null {
        return this.receiveMessageScript;
    }
    public setReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting|null) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    }
    public withReceiveMessageScript(receiveMessageScript: Gs2Inbox.ScriptSetting|null): this {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    }
    public getReadMessageScript(): Gs2Inbox.ScriptSetting|null {
        return this.readMessageScript;
    }
    public setReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting|null) {
        this.readMessageScript = readMessageScript;
        return this;
    }
    public withReadMessageScript(readMessageScript: Gs2Inbox.ScriptSetting|null): this {
        this.readMessageScript = readMessageScript;
        return this;
    }
    public getDeleteMessageScript(): Gs2Inbox.ScriptSetting|null {
        return this.deleteMessageScript;
    }
    public setDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting|null) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    }
    public withDeleteMessageScript(deleteMessageScript: Gs2Inbox.ScriptSetting|null): this {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    }
    public getReceiveNotification(): Gs2Inbox.NotificationSetting|null {
        return this.receiveNotification;
    }
    public setReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting|null) {
        this.receiveNotification = receiveNotification;
        return this;
    }
    public withReceiveNotification(receiveNotification: Gs2Inbox.NotificationSetting|null): this {
        this.receiveNotification = receiveNotification;
        return this;
    }
    public getLogSetting(): Gs2Inbox.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Inbox.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Inbox.LogSetting|null): this {
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
    /** @deprecated */
    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }
    /** @deprecated */
    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }
    /** @deprecated */
    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }
    /** @deprecated */
    public getKeyId(): string|null {
        return this.keyId;
    }
    /** @deprecated */
    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }
    /** @deprecated */
    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
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
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withTransactionSetting(Gs2Inbox.TransactionSetting.fromDict(data["transactionSetting"]))
            .withReceiveMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withReceiveNotification(Gs2Inbox.NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(Gs2Inbox.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "receiveMessageScript": this.getReceiveMessageScript()?.toDict(),
            "readMessageScript": this.getReadMessageScript()?.toDict(),
            "deleteMessageScript": this.getDeleteMessageScript()?.toDict(),
            "receiveNotification": this.getReceiveNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "revision": this.getRevision(),
        };
    }
}
