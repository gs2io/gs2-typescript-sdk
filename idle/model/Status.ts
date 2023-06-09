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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:idle:{namespaceName}:user:{userId}:categoryModel:{categoryName}";

export default class Status implements IModel {
    private statusId: string|null = null;
    private categoryName: string|null = null;
    private userId: string|null = null;
    private randomSeed: number|null = null;
    private idleMinutes: number|null = null;
    private maximumIdleMinutes: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCategoryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '(.*)')
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
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        categoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{categoryName}', categoryName ?? '');
    }
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
    public getRandomSeed(): number|null {
        return this.randomSeed;
    }
    public setRandomSeed(randomSeed: number|null) {
        this.randomSeed = randomSeed;
        return this;
    }
    public withRandomSeed(randomSeed: number|null): this {
        this.randomSeed = randomSeed;
        return this;
    }
    public getIdleMinutes(): number|null {
        return this.idleMinutes;
    }
    public setIdleMinutes(idleMinutes: number|null) {
        this.idleMinutes = idleMinutes;
        return this;
    }
    public withIdleMinutes(idleMinutes: number|null): this {
        this.idleMinutes = idleMinutes;
        return this;
    }
    public getMaximumIdleMinutes(): number|null {
        return this.maximumIdleMinutes;
    }
    public setMaximumIdleMinutes(maximumIdleMinutes: number|null) {
        this.maximumIdleMinutes = maximumIdleMinutes;
        return this;
    }
    public withMaximumIdleMinutes(maximumIdleMinutes: number|null): this {
        this.maximumIdleMinutes = maximumIdleMinutes;
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
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withRandomSeed(data["randomSeed"])
            .withIdleMinutes(data["idleMinutes"])
            .withMaximumIdleMinutes(data["maximumIdleMinutes"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statusId": this.getStatusId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "randomSeed": this.getRandomSeed(),
            "idleMinutes": this.getIdleMinutes(),
            "maximumIdleMinutes": this.getMaximumIdleMinutes(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
