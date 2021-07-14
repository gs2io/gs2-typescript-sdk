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

import IModel from '@/gs2/core/interface/IModel';
import { ScriptSetting } from './ScriptSetting';
import { NotificationSetting } from './NotificationSetting';
import { LogSetting } from './LogSetting';

export class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private isAutomaticDeletingEnabled: boolean|null = null;
    private receiveMessageScript: ScriptSetting|null = null;
    private readMessageScript: ScriptSetting|null = null;
    private deleteMessageScript: ScriptSetting|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private receiveNotification: NotificationSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }

    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public getKeyId(): string|null {
        return this.keyId;
    }

    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }

    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withReceiveMessageScript(ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withReceiveNotification(NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "receiveMessageScript": this.getReceiveMessageScript()?.toDict(),
            "readMessageScript": this.getReadMessageScript()?.toDict(),
            "deleteMessageScript": this.getDeleteMessageScript()?.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "receiveNotification": this.getReceiveNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
