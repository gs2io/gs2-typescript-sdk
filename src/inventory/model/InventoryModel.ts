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
import { ItemModel } from './ItemModel';

export class InventoryModel implements IModel {
    private inventoryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private initialCapacity: number|null = null;
    private maxCapacity: number|null = null;
    private protectReferencedItem: boolean|null = null;
    private itemModels: ItemModel[]|null = null;

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

    public getItemModels(): ItemModel[]|null {
        return this.itemModels;
    }

    public setItemModels(itemModels: ItemModel[]|null) {
        this.itemModels = itemModels;
        return this;
    }

    public withItemModels(itemModels: ItemModel[]|null): this {
        this.itemModels = itemModels;
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
            .withProtectReferencedItem(data["protectReferencedItem"])
            .withItemModels(data.itemModels ?
                data.itemModels.map((item: {[key: string]: any}) => {
                    return ItemModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
            "itemModels": this.getItemModels() ?
                this.getItemModels()!.map((item: ItemModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
