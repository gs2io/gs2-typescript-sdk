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

import * as Gs2Chat from '../../chat/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}:model:{category}";

export default class CategoryModel implements IModel {
    private categoryModelId: string|null = null;
    private category: number|null = null;
    private rejectAccessTokenPost: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{category}', '.*')
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
            .replace('{category}', '.*')
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
            .replace('{category}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCategory(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{category}', '(.*)')
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
        if (this.getCategory(grn) == null || this.getCategory(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        category: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{category}', category ?? '');
    }
    public getCategoryModelId(): string|null {
        return this.categoryModelId;
    }
    public setCategoryModelId(categoryModelId: string|null) {
        this.categoryModelId = categoryModelId;
        return this;
    }
    public withCategoryModelId(categoryModelId: string|null): this {
        this.categoryModelId = categoryModelId;
        return this;
    }
    public getCategory(): number|null {
        return this.category;
    }
    public setCategory(category: number|null) {
        this.category = category;
        return this;
    }
    public withCategory(category: number|null): this {
        this.category = category;
        return this;
    }
    public getRejectAccessTokenPost(): string|null {
        return this.rejectAccessTokenPost;
    }
    public setRejectAccessTokenPost(rejectAccessTokenPost: string|null) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    }
    public withRejectAccessTokenPost(rejectAccessTokenPost: string|null): this {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CategoryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withCategory(data["category"])
            .withRejectAccessTokenPost(data["rejectAccessTokenPost"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "category": this.getCategory(),
            "rejectAccessTokenPost": this.getRejectAccessTokenPost(),
        };
    }
}
