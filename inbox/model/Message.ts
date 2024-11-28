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
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}";

export default class Message implements IModel {
    private messageId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private metadata: string|null = null;
    private isRead: boolean|null = null;
    private readAcquireActions: Gs2Inbox.AcquireAction[]|null = null;
    private receivedAt: number|null = null;
    private readAt: number|null = null;
    private expiresAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{messageName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMessageName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{messageName}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getMessageName(grn) == null || this.getMessageName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        messageName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{messageName}', messageName ?? '');
    }
    public getMessageId(): string|null {
        return this.messageId;
    }
    public setMessageId(messageId: string|null) {
        this.messageId = messageId;
        return this;
    }
    public withMessageId(messageId: string|null): this {
        this.messageId = messageId;
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
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getIsRead(): boolean|null {
        return this.isRead;
    }
    public setIsRead(isRead: boolean|null) {
        this.isRead = isRead;
        return this;
    }
    public withIsRead(isRead: boolean|null): this {
        this.isRead = isRead;
        return this;
    }
    public getReadAcquireActions(): Gs2Inbox.AcquireAction[]|null {
        return this.readAcquireActions;
    }
    public setReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null) {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public withReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null): this {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public getReceivedAt(): number|null {
        return this.receivedAt;
    }
    public setReceivedAt(receivedAt: number|null) {
        this.receivedAt = receivedAt;
        return this;
    }
    public withReceivedAt(receivedAt: number|null): this {
        this.receivedAt = receivedAt;
        return this;
    }
    public getReadAt(): number|null {
        return this.readAt;
    }
    public setReadAt(readAt: number|null) {
        this.readAt = readAt;
        return this;
    }
    public withReadAt(readAt: number|null): this {
        this.readAt = readAt;
        return this;
    }
    public getExpiresAt(): number|null {
        return this.expiresAt;
    }
    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }
    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
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

    public static fromDict(data: {[key: string]: any}): Message|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Message()
            .withMessageId(data["messageId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withIsRead(data["isRead"])
            .withReadAcquireActions(data.readAcquireActions ?
                data.readAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Inbox.AcquireAction.fromDict(item);
                }
            ) : null)
            .withReceivedAt(data["receivedAt"])
            .withReadAt(data["readAt"])
            .withExpiresAt(data["expiresAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "messageId": this.getMessageId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "isRead": this.getIsRead(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions()!.map((item: Gs2Inbox.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "receivedAt": this.getReceivedAt(),
            "readAt": this.getReadAt(),
            "expiresAt": this.getExpiresAt(),
            "revision": this.getRevision(),
        };
    }
}
