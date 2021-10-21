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

export class Subscribe implements IModel {
    private subscribeId: string|null = null;
    private categoryName: string|null = null;
    private userId: string|null = null;
    private targetUserIds: string[]|null = null;
    private subscribedUserIds: string[]|null = null;
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

    public getCategoryName(): string|null {
        return this.categoryName;
    }

    public setCategoryName(categoryName: string|null) {
        this.categoryName = categoryName;
        return this;
    }

    public withCategoryName(categoryName: string|null): this {
        this.categoryName = categoryName;
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

    public getSubscribedUserIds(): string[]|null {
        return this.subscribedUserIds;
    }

    public setSubscribedUserIds(subscribedUserIds: string[]|null) {
        this.subscribedUserIds = subscribedUserIds;
        return this;
    }

    public withSubscribedUserIds(subscribedUserIds: string[]|null): this {
        this.subscribedUserIds = subscribedUserIds;
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
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
                data.targetUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withSubscribedUserIds(data.subscribedUserIds ?
                data.subscribedUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeId": this.getSubscribeId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "subscribedUserIds": this.getSubscribedUserIds() ?
                this.getSubscribedUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
        };
    }
}
