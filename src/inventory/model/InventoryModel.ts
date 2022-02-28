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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}";

export default class InventoryModel implements IModel {
    private inventoryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private initialCapacity: number|null = null;
    private maxCapacity: number|null = null;
    private protectReferencedItem: boolean|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '(.*)')
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
        if (this.getInventoryName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        inventoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{inventoryName}', inventoryName ?? '');
    }

    public getInventoryModelId(): string|null {
        return this.inventoryModelId;
    }

    public setInventoryModelId(inventoryModelId: string|null) {
        this.inventoryModelId = inventoryModelId;
        return this;
    }

    public withInventoryModelId(inventoryModelId: string|null): this {
        this.inventoryModelId = inventoryModelId;
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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getInitialCapacity(): number|null {
        return this.initialCapacity;
    }

    public setInitialCapacity(initialCapacity: number|null) {
        this.initialCapacity = initialCapacity;
        return this;
    }

    public withInitialCapacity(initialCapacity: number|null): this {
        this.initialCapacity = initialCapacity;
        return this;
    }

    public getMaxCapacity(): number|null {
        return this.maxCapacity;
    }

    public setMaxCapacity(maxCapacity: number|null) {
        this.maxCapacity = maxCapacity;
        return this;
    }

    public withMaxCapacity(maxCapacity: number|null): this {
        this.maxCapacity = maxCapacity;
        return this;
    }

    public getProtectReferencedItem(): boolean|null {
        return this.protectReferencedItem;
    }

    public setProtectReferencedItem(protectReferencedItem: boolean|null) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    }

    public withProtectReferencedItem(protectReferencedItem: boolean|null): this {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryModel()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialCapacity(data["initialCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withProtectReferencedItem(data["protectReferencedItem"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
        };
    }
}
