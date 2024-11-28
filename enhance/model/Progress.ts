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

import * as Gs2Enhance from '../../enhance/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}:user:{userId}:progress";

export default class Progress implements IModel {
    private progressId: string|null = null;
    private userId: string|null = null;
    private rateName: string|null = null;
    private name: string|null = null;
    private propertyId: string|null = null;
    private experienceValue: number|null = null;
    private rate: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '');
    }
    public getProgressId(): string|null {
        return this.progressId;
    }
    public setProgressId(progressId: string|null) {
        this.progressId = progressId;
        return this;
    }
    public withProgressId(progressId: string|null): this {
        this.progressId = progressId;
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
    public getRate(): number|null {
        return this.rate;
    }
    public setRate(rate: number|null) {
        this.rate = rate;
        return this;
    }
    public withRate(rate: number|null): this {
        this.rate = rate;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Progress|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withName(data["name"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"])
            .withRate(data["rate"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "progressId": this.getProgressId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "name": this.getName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
            "rate": this.getRate(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
