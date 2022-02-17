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

export class Trigger implements IModel {
    private triggerId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private createdAt: number|null = null;
    private expiresAt: number|null = null;

    public getTriggerId(): string|null {
        return this.triggerId;
    }

    public setTriggerId(triggerId: string|null) {
        this.triggerId = triggerId;
        return this;
    }

    public withTriggerId(triggerId: string|null): this {
        this.triggerId = triggerId;
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

    public static fromDict(data: {[key: string]: any}): Trigger|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Trigger()
            .withTriggerId(data["triggerId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"])
            .withExpiresAt(data["expiresAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "triggerId": this.getTriggerId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
            "expiresAt": this.getExpiresAt(),
        };
    }
}
