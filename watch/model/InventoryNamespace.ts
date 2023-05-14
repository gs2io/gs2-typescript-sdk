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
import InventoryInventoryStatistics from './InventoryInventoryStatistics';
import InventoryItemStatistics from './InventoryItemStatistics';
import InventoryItemDistribution from './InventoryItemDistribution';
import InventoryItem from './InventoryItem';
import InventoryInventory from './InventoryInventory';

export default class InventoryNamespace implements IModel {
    private namespaceName: string|null = null;
    private inventory: InventoryInventory[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getInventory(): InventoryInventory[]|null {
        return this.inventory;
    }
    public setInventory(inventory: InventoryInventory[]|null) {
        this.inventory = inventory;
        return this;
    }
    public withInventory(inventory: InventoryInventory[]|null): this {
        this.inventory = inventory;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespace()
            .withNamespaceName(data["namespaceName"])
            .withInventory(data.inventory ?
                data.inventory.map((item: {[key: string]: any}) => {
                    return InventoryInventory.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventory": this.getInventory() ?
                this.getInventory()!.map((item: InventoryInventory) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
