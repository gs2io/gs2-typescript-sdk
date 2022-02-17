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

export class Friend implements IModel {
    private friendId: string|null = null;
    private userId: string|null = null;
    private targetUserIds: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getFriendId(): string|null {
        return this.friendId;
    }

    public setFriendId(friendId: string|null) {
        this.friendId = friendId;
        return this;
    }

    public withFriendId(friendId: string|null): this {
        this.friendId = friendId;
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

    public getTargetUserIds(): string[]|null {
        return this.targetUserIds;
    }

    public setTargetUserIds(targetUserIds: string[]|null) {
        this.targetUserIds = targetUserIds;
        return this;
    }

    public withTargetUserIds(targetUserIds: string[]|null): this {
        this.targetUserIds = targetUserIds;
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

    public static fromDict(data: {[key: string]: any}): Friend|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Friend()
            .withFriendId(data["friendId"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
                data.targetUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "friendId": this.getFriendId(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
