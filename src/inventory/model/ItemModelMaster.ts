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

export default class ItemModelMaster implements IModel {
    private itemModelId: string|null = null;
    private inventoryName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private stackingLimit: number|null = null;
    private allowMultipleStacks: boolean|null = null;
    private sortValue: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getItemModelId(): string|null {
        return this.itemModelId;
    }

    public setItemModelId(itemModelId: string|null) {
        this.itemModelId = itemModelId;
        return this;
    }

    public withItemModelId(itemModelId: string|null): this {
        this.itemModelId = itemModelId;
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

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
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

    public getStackingLimit(): number|null {
        return this.stackingLimit;
    }

    public setStackingLimit(stackingLimit: number|null) {
        this.stackingLimit = stackingLimit;
        return this;
    }

    public withStackingLimit(stackingLimit: number|null): this {
        this.stackingLimit = stackingLimit;
        return this;
    }

    public getAllowMultipleStacks(): boolean|null {
        return this.allowMultipleStacks;
    }

    public setAllowMultipleStacks(allowMultipleStacks: boolean|null) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    }

    public withAllowMultipleStacks(allowMultipleStacks: boolean|null): this {
        this.allowMultipleStacks = allowMultipleStacks;
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

    public static fromDict(data: {[key: string]: any}): ItemModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ItemModelMaster()
            .withItemModelId(data["itemModelId"])
            .withInventoryName(data["inventoryName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "itemModelId": this.getItemModelId(),
            "inventoryName": this.getInventoryName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
