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

export default class SalesItemGroupMaster implements IModel {
    private salesItemGroupId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private salesItemNames: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getSalesItemGroupId(): string|null {
        return this.salesItemGroupId;
    }

    public setSalesItemGroupId(salesItemGroupId: string|null) {
        this.salesItemGroupId = salesItemGroupId;
        return this;
    }

    public withSalesItemGroupId(salesItemGroupId: string|null): this {
        this.salesItemGroupId = salesItemGroupId;
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

    public getSalesItemNames(): string[]|null {
        return this.salesItemNames;
    }

    public setSalesItemNames(salesItemNames: string[]|null) {
        this.salesItemNames = salesItemNames;
        return this;
    }

    public withSalesItemNames(salesItemNames: string[]|null): this {
        this.salesItemNames = salesItemNames;
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

    public static fromDict(data: {[key: string]: any}): SalesItemGroupMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemGroupMaster()
            .withSalesItemGroupId(data["salesItemGroupId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesItemNames(data.salesItemNames ?
                data.salesItemNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "salesItemGroupId": this.getSalesItemGroupId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesItemNames": this.getSalesItemNames() ?
                this.getSalesItemNames()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
