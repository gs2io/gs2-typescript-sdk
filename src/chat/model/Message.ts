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

export default class Message implements IModel {
    private messageId: string|null = null;
    private roomName: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private category: number|null = null;
    private metadata: string|null = null;
    private createdAt: number|null = null;

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

    public getCategory(): number|null {
        return this.category;
    }

    public setCategory(category: number|null) {
        this.category = category;
        return this;
    }

    public withCategory(category: number|null): this {
        this.category = category;
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

    public static fromDict(data: {[key: string]: any}): Message|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Message()
            .withMessageId(data["messageId"])
            .withRoomName(data["roomName"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCategory(data["category"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "messageId": this.getMessageId(),
            "roomName": this.getRoomName(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "category": this.getCategory(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
