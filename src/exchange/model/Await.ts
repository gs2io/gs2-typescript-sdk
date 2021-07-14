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

export class Await implements IModel {
    private awaitId: string|null = null;
    private userId: string|null = null;
    private rateName: string|null = null;
    private name: string|null = null;
    private count: number|null = null;
    private exchangedAt: number|null = null;

    public getAwaitId(): string|null {
        return this.awaitId;
    }

    public setAwaitId(awaitId: string|null) {
        this.awaitId = awaitId;
        return this;
    }

    public withAwaitId(awaitId: string|null): this {
        this.awaitId = awaitId;
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

    public getRateName(): string|null {
        return this.rateName;
    }

    public setRateName(rateName: string|null) {
        this.rateName = rateName;
        return this;
    }

    public withRateName(rateName: string|null): this {
        this.rateName = rateName;
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

    public getExchangedAt(): number|null {
        return this.exchangedAt;
    }

    public setExchangedAt(exchangedAt: number|null) {
        this.exchangedAt = exchangedAt;
        return this;
    }

    public withExchangedAt(exchangedAt: number|null): this {
        this.exchangedAt = exchangedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Await|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Await()
            .withAwaitId(data["awaitId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withName(data["name"])
            .withCount(data["count"])
            .withExchangedAt(data["exchangedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "awaitId": this.getAwaitId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "name": this.getName(),
            "count": this.getCount(),
            "exchangedAt": this.getExchangedAt(),
        };
    }
}
