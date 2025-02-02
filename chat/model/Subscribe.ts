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

import * as Gs2Chat from '../../chat/model'
import NotificationType from './NotificationType';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:subscribe:{roomName}";

export default class Subscribe implements IModel {
    private subscribeId: string|null = null;
    private userId: string|null = null;
    private roomName: string|null = null;
    private notificationTypes: Gs2Chat.NotificationType[]|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{roomName}', '.*')
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
            .replace('{roomName}', '.*')
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
            .replace('{roomName}', '.*')
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
            .replace('{roomName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRoomName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{roomName}', '(.*)')
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
        if (this.getRoomName(grn) == null || this.getRoomName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        roomName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{roomName}', roomName ?? '');
    }
    public getSubscribeId(): string|null {
        return this.subscribeId;
    }
    public setSubscribeId(subscribeId: string|null) {
        this.subscribeId = subscribeId;
        return this;
    }
    public withSubscribeId(subscribeId: string|null): this {
        this.subscribeId = subscribeId;
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
    public getRoomName(): string|null {
        return this.roomName;
    }
    public setRoomName(roomName: string|null) {
        this.roomName = roomName;
        return this;
    }
    public withRoomName(roomName: string|null): this {
        this.roomName = roomName;
        return this;
    }
    public getNotificationTypes(): Gs2Chat.NotificationType[]|null {
        return this.notificationTypes;
    }
    public setNotificationTypes(notificationTypes: Gs2Chat.NotificationType[]|null) {
        this.notificationTypes = notificationTypes;
        return this;
    }
    public withNotificationTypes(notificationTypes: Gs2Chat.NotificationType[]|null): this {
        this.notificationTypes = notificationTypes;
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

    public static fromDict(data: {[key: string]: any}): Subscribe|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Subscribe()
            .withSubscribeId(data["subscribeId"])
            .withUserId(data["userId"])
            .withRoomName(data["roomName"])
            .withNotificationTypes(data.notificationTypes ?
                data.notificationTypes.map((item: {[key: string]: any}) => {
                    return Gs2Chat.NotificationType.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeId": this.getSubscribeId(),
            "userId": this.getUserId(),
            "roomName": this.getRoomName(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes()!.map((item: Gs2Chat.NotificationType) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
