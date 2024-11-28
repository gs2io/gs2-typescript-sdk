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

import * as Gs2Ranking from '../../ranking/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}:{targetUserId}";

export default class SubscribeUser implements IModel {
    private subscribeUserId: string|null = null;
    private categoryName: string|null = null;
    private userId: string|null = null;
    private targetUserId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '.*')
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
            .replace('{targetUserId}', '.*')
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
            .replace('{targetUserId}', '.*')
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
            .replace('{targetUserId}', '.*')
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
            .replace('{targetUserId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTargetUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{targetUserId}', '(.*)')
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
        if (this.getTargetUserId(grn) == null || this.getTargetUserId(grn) === '') {
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
        targetUserId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{categoryName}', categoryName ?? '')
            .replace('{targetUserId}', targetUserId ?? '');
    }
    public getSubscribeUserId(): string|null {
        return this.subscribeUserId;
    }
    public setSubscribeUserId(subscribeUserId: string|null) {
        this.subscribeUserId = subscribeUserId;
        return this;
    }
    public withSubscribeUserId(subscribeUserId: string|null): this {
        this.subscribeUserId = subscribeUserId;
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
    public getTargetUserId(): string|null {
        return this.targetUserId;
    }
    public setTargetUserId(targetUserId: string|null) {
        this.targetUserId = targetUserId;
        return this;
    }
    public withTargetUserId(targetUserId: string|null): this {
        this.targetUserId = targetUserId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SubscribeUser|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeUser()
            .withSubscribeUserId(data["subscribeUserId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeUserId": this.getSubscribeUserId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    }
}
