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

export class Room implements IModel {
    private roomId: string|null = null;
    private name: string|null = null;
    private ipAddress: string|null = null;
    private port: number|null = null;
    private encryptionKey: string|null = null;
    private notificationUserIds: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getRoomId(): string|null {
        return this.roomId;
    }

    public setRoomId(roomId: string|null) {
        this.roomId = roomId;
        return this;
    }

    public withRoomId(roomId: string|null): this {
        this.roomId = roomId;
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

    public getIpAddress(): string|null {
        return this.ipAddress;
    }

    public setIpAddress(ipAddress: string|null) {
        this.ipAddress = ipAddress;
        return this;
    }

    public withIpAddress(ipAddress: string|null): this {
        this.ipAddress = ipAddress;
        return this;
    }

    public getPort(): number|null {
        return this.port;
    }

    public setPort(port: number|null) {
        this.port = port;
        return this;
    }

    public withPort(port: number|null): this {
        this.port = port;
        return this;
    }

    public getEncryptionKey(): string|null {
        return this.encryptionKey;
    }

    public setEncryptionKey(encryptionKey: string|null) {
        this.encryptionKey = encryptionKey;
        return this;
    }

    public withEncryptionKey(encryptionKey: string|null): this {
        this.encryptionKey = encryptionKey;
        return this;
    }

    public getNotificationUserIds(): string[]|null {
        return this.notificationUserIds;
    }

    public setNotificationUserIds(notificationUserIds: string[]|null) {
        this.notificationUserIds = notificationUserIds;
        return this;
    }

    public withNotificationUserIds(notificationUserIds: string[]|null): this {
        this.notificationUserIds = notificationUserIds;
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

    public static fromDict(data: {[key: string]: any}): Room|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Room()
            .withRoomId(data["roomId"])
            .withName(data["name"])
            .withIpAddress(data["ipAddress"])
            .withPort(data["port"])
            .withEncryptionKey(data["encryptionKey"])
            .withNotificationUserIds(data.notificationUserIds ?
                data.notificationUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "roomId": this.getRoomId(),
            "name": this.getName(),
            "ipAddress": this.getIpAddress(),
            "port": this.getPort(),
            "encryptionKey": this.getEncryptionKey(),
            "notificationUserIds": this.getNotificationUserIds() ?
                this.getNotificationUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
