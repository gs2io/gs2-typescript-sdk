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
    private transactionSetting: TransactionSetting|null = null;
    private receiveMessageScript: ScriptSetting|null = null;
    private readMessageScript: ScriptSetting|null = null;
    private deleteMessageScript: ScriptSetting|null = null;
    private receiveNotification: NotificationSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;

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
    public getTransactionSetting(): TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getReceiveMessageScript(): ScriptSetting|null {
        return this.receiveMessageScript;
    }
    public setReceiveMessageScript(receiveMessageScript: ScriptSetting|null) {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    }
    public withReceiveMessageScript(receiveMessageScript: ScriptSetting|null): this {
        this.receiveMessageScript = receiveMessageScript;
        return this;
    }
    public getReadMessageScript(): ScriptSetting|null {
        return this.readMessageScript;
    }
    public setReadMessageScript(readMessageScript: ScriptSetting|null) {
        this.readMessageScript = readMessageScript;
        return this;
    }
    public withReadMessageScript(readMessageScript: ScriptSetting|null): this {
        this.readMessageScript = readMessageScript;
        return this;
    }
    public getDeleteMessageScript(): ScriptSetting|null {
        return this.deleteMessageScript;
    }
    public setDeleteMessageScript(deleteMessageScript: ScriptSetting|null) {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    }
    public withDeleteMessageScript(deleteMessageScript: ScriptSetting|null): this {
        this.deleteMessageScript = deleteMessageScript;
        return this;
    }
    public getReceiveNotification(): NotificationSetting|null {
        return this.receiveNotification;
    }
    public setReceiveNotification(receiveNotification: NotificationSetting|null) {
        this.receiveNotification = receiveNotification;
        return this;
    }
    public withReceiveNotification(receiveNotification: NotificationSetting|null): this {
        this.receiveNotification = receiveNotification;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withTransactionSetting(TransactionSetting.fromDict(data["transactionSetting"]))
            .withReceiveMessageScript(ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withReceiveNotification(NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
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
        };
    }
}
