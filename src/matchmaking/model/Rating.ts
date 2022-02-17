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

export default class Rating implements IModel {
    private ratingId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private rateValue: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getRatingId(): string|null {
        return this.ratingId;
    }

    public setRatingId(ratingId: string|null) {
        this.ratingId = ratingId;
        return this;
    }

    public withRatingId(ratingId: string|null): this {
        this.ratingId = ratingId;
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

    public getRateValue(): number|null {
        return this.rateValue;
    }

    public setRateValue(rateValue: number|null) {
        this.rateValue = rateValue;
        return this;
    }

    public withRateValue(rateValue: number|null): this {
        this.rateValue = rateValue;
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

    public static fromDict(data: {[key: string]: any}): Rating|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Rating()
            .withRatingId(data["ratingId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withRateValue(data["rateValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ratingId": this.getRatingId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "rateValue": this.getRateValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
