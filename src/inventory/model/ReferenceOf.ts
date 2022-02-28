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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}:referenceOf";

export default class ReferenceOf implements IModel {
    private referenceOfId: string|null = null;
    private name: string|null = null;

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

    public getReferenceOfId(): string|null {
        return this.referenceOfId;
    }

    public setReferenceOfId(referenceOfId: string|null) {
        this.referenceOfId = referenceOfId;
        return this;
    }

    public withReferenceOfId(referenceOfId: string|null): this {
        this.referenceOfId = referenceOfId;
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

    public static fromDict(data: {[key: string]: any}): ReferenceOf|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReferenceOf()
            .withReferenceOfId(data["referenceOfId"])
            .withName(data["name"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "referenceOfId": this.getReferenceOfId(),
            "name": this.getName(),
        };
    }
}
