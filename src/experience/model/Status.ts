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

export class Status implements IModel {
    private statusId: string|null = null;
    private experienceName: string|null = null;
    private userId: string|null = null;
    private propertyId: string|null = null;
    private experienceValue: number|null = null;
    private rankValue: number|null = null;
    private rankCapValue: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getStatusId(): string|null {
        return this.statusId;
    }

    public setStatusId(statusId: string|null) {
        this.statusId = statusId;
        return this;
    }

    public withStatusId(statusId: string|null): this {
        this.statusId = statusId;
        return this;
    }

    public getExperienceName(): string|null {
        return this.experienceName;
    }

    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }

    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
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

    public getPropertyId(): string|null {
        return this.propertyId;
    }

    public setPropertyId(propertyId: string|null) {
        this.propertyId = propertyId;
        return this;
    }

    public withPropertyId(propertyId: string|null): this {
        this.propertyId = propertyId;
        return this;
    }

    public getExperienceValue(): number|null {
        return this.experienceValue;
    }

    public setExperienceValue(experienceValue: number|null) {
        this.experienceValue = experienceValue;
        return this;
    }

    public withExperienceValue(experienceValue: number|null): this {
        this.experienceValue = experienceValue;
        return this;
    }

    public getRankValue(): number|null {
        return this.rankValue;
    }

    public setRankValue(rankValue: number|null) {
        this.rankValue = rankValue;
        return this;
    }

    public withRankValue(rankValue: number|null): this {
        this.rankValue = rankValue;
        return this;
    }

    public getRankCapValue(): number|null {
        return this.rankCapValue;
    }

    public setRankCapValue(rankCapValue: number|null) {
        this.rankCapValue = rankCapValue;
        return this;
    }

    public withRankCapValue(rankCapValue: number|null): this {
        this.rankCapValue = rankCapValue;
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

    public static fromDict(data: {[key: string]: any}): Status|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withExperienceName(data["experienceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"])
            .withRankValue(data["rankValue"])
            .withRankCapValue(data["rankCapValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statusId": this.getStatusId(),
            "experienceName": this.getExperienceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
            "rankValue": this.getRankValue(),
            "rankCapValue": this.getRankCapValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
