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

import * as Gs2Inbox from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private isAutomaticDeletingEnabled: boolean|null = null;
    private receiveMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private readMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private deleteMessageScript: Gs2Inbox.ScriptSetting|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private receiveNotification: Gs2Inbox.NotificationSetting|null = null;
    private logSetting: Gs2Inbox.LogSetting|null = null;

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

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
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

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withIsAutomaticDeletingEnabled(data["isAutomaticDeletingEnabled"])
            .withReceiveMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["receiveMessageScript"]))
            .withReadMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["readMessageScript"]))
            .withDeleteMessageScript(Gs2Inbox.ScriptSetting.fromDict(data["deleteMessageScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withReceiveNotification(Gs2Inbox.NotificationSetting.fromDict(data["receiveNotification"]))
            .withLogSetting(Gs2Inbox.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "isAutomaticDeletingEnabled": this.getIsAutomaticDeletingEnabled(),
            "receiveMessageScript": this.getReceiveMessageScript()?.toDict(),
            "readMessageScript": this.getReadMessageScript()?.toDict(),
            "deleteMessageScript": this.getDeleteMessageScript()?.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "receiveNotification": this.getReceiveNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}