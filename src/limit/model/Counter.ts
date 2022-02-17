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

export default class Counter implements IModel {
    private counterId: string|null = null;
    private limitName: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private count: number|null = null;
    private nextResetAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getCounterId(): string|null {
        return this.counterId;
    }

    public setCounterId(counterId: string|null) {
        this.counterId = counterId;
        return this;
    }

    public withCounterId(counterId: string|null): this {
        this.counterId = counterId;
        return this;
    }

    public getLimitName(): string|null {
        return this.limitName;
    }

    public setLimitName(limitName: string|null) {
        this.limitName = limitName;
        return this;
    }

    public withLimitName(limitName: string|null): this {
        this.limitName = limitName;
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

    public getCount(): number|null {
        return this.count;
    }

    public setCount(count: number|null) {
        this.count = count;
        return this;
    }

    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }

    public getNextResetAt(): number|null {
        return this.nextResetAt;
    }

    public setNextResetAt(nextResetAt: number|null) {
        this.nextResetAt = nextResetAt;
        return this;
    }

    public withNextResetAt(nextResetAt: number|null): this {
        this.nextResetAt = nextResetAt;
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

    public static fromDict(data: {[key: string]: any}): Counter|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Counter()
            .withCounterId(data["counterId"])
            .withLimitName(data["limitName"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withNextResetAt(data["nextResetAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterId": this.getCounterId(),
            "limitName": this.getLimitName(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "nextResetAt": this.getNextResetAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
