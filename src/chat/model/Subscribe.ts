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
import { NotificationType } from './NotificationType';

export class Subscribe implements IModel {
    private subscribeId: string|null = null;
    private userId: string|null = null;
    private roomName: string|null = null;
    private notificationTypes: NotificationType[]|null = null;
    private createdAt: number|null = null;

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

    public getNotificationTypes(): NotificationType[]|null {
        return this.notificationTypes;
    }

    public setNotificationTypes(notificationTypes: NotificationType[]|null) {
        this.notificationTypes = notificationTypes;
        return this;
    }

    public withNotificationTypes(notificationTypes: NotificationType[]|null): this {
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
                    return NotificationType.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeId": this.getSubscribeId(),
            "userId": this.getUserId(),
            "roomName": this.getRoomName(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes()!.map((item: NotificationType) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
        };
    }
}
