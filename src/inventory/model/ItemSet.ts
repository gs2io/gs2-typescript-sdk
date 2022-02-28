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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}";

export default class ItemSet implements IModel {
    private itemSetId: string|null = null;
    private name: string|null = null;
    private inventoryName: string|null = null;
    private userId: string|null = null;
    private itemName: string|null = null;
    private count: number|null = null;
    private referenceOf: string[]|null = null;
    private sortValue: number|null = null;
    private expiresAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*')
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
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*')
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
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*')
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
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getInventoryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getItemName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '(.*)')
            .replace('{itemSetName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getItemSetName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getInventoryName(grn) == null) {
            return false;
        }
        if (this.getItemName(grn) == null) {
            return false;
        }
        if (this.getItemSetName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        inventoryName: string|null,
        itemName: string|null,
        itemSetName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{inventoryName}', inventoryName ?? '')
            .replace('{itemName}', itemName ?? '')
            .replace('{itemSetName}', itemSetName ?? '');
    }

    public getItemSetId(): string|null {
        return this.itemSetId;
    }

    public setItemSetId(itemSetId: string|null) {
        this.itemSetId = itemSetId;
        return this;
    }

    public withItemSetId(itemSetId: string|null): this {
        this.itemSetId = itemSetId;
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

    public getInventoryName(): string|null {
        return this.inventoryName;
    }

    public setInventoryName(inventoryName: string|null) {
        this.inventoryName = inventoryName;
        return this;
    }

    public withInventoryName(inventoryName: string|null): this {
        this.inventoryName = inventoryName;
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

    public getItemName(): string|null {
        return this.itemName;
    }

    public setItemName(itemName: string|null) {
        this.itemName = itemName;
        return this;
    }

    public withItemName(itemName: string|null): this {
        this.itemName = itemName;
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

    public getReferenceOf(): string[]|null {
        return this.referenceOf;
    }

    public setReferenceOf(referenceOf: string[]|null) {
        this.referenceOf = referenceOf;
        return this;
    }

    public withReferenceOf(referenceOf: string[]|null): this {
        this.referenceOf = referenceOf;
        return this;
    }

    public getSortValue(): number|null {
        return this.sortValue;
    }

    public setSortValue(sortValue: number|null) {
        this.sortValue = sortValue;
        return this;
    }

    public withSortValue(sortValue: number|null): this {
        this.sortValue = sortValue;
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

    public static fromDict(data: {[key: string]: any}): ItemSet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ItemSet()
            .withItemSetId(data["itemSetId"])
            .withName(data["name"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withCount(data["count"])
            .withReferenceOf(data.referenceOf ?
                data.referenceOf.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withSortValue(data["sortValue"])
            .withExpiresAt(data["expiresAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "itemSetId": this.getItemSetId(),
            "name": this.getName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "count": this.getCount(),
            "referenceOf": this.getReferenceOf() ?
                this.getReferenceOf()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "sortValue": this.getSortValue(),
            "expiresAt": this.getExpiresAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
