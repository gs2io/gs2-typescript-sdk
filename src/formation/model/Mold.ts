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

export class Mold implements IModel {
    private moldId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private capacity: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getMoldId(): string|null {
        return this.moldId;
    }

    public setMoldId(moldId: string|null) {
        this.moldId = moldId;
        return this;
    }

    public withMoldId(moldId: string|null): this {
        this.moldId = moldId;
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

    public getCapacity(): number|null {
        return this.capacity;
    }

    public setCapacity(capacity: number|null) {
        this.capacity = capacity;
        return this;
    }

    public withCapacity(capacity: number|null): this {
        this.capacity = capacity;
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

    public static fromDict(data: {[key: string]: any}): Mold|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Mold()
            .withMoldId(data["moldId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCapacity(data["capacity"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "moldId": this.getMoldId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "capacity": this.getCapacity(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
