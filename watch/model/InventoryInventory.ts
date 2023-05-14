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

export default class InventoryInventory implements IModel {
    private inventoryName: string|null = null;
    private statistics: InventoryInventoryStatistics[]|null = null;
    private item: InventoryItem[]|null = null;
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
    public getStatistics(): InventoryInventoryStatistics[]|null {
        return this.statistics;
    }
    public setStatistics(statistics: InventoryInventoryStatistics[]|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: InventoryInventoryStatistics[]|null): this {
        this.statistics = statistics;
        return this;
    }
    public getItem(): InventoryItem[]|null {
        return this.item;
    }
    public setItem(item: InventoryItem[]|null) {
        this.item = item;
        return this;
    }
    public withItem(item: InventoryItem[]|null): this {
        this.item = item;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryInventory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventory()
            .withInventoryName(data["inventoryName"])
            .withStatistics(data.statistics ?
                data.statistics.map((item: {[key: string]: any}) => {
                    return InventoryInventoryStatistics.fromDict(item);
                }
            ) : [])
            .withItem(data.item ?
                data.item.map((item: {[key: string]: any}) => {
                    return InventoryItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryName": this.getInventoryName(),
            "statistics": this.getStatistics() ?
                this.getStatistics()!.map((item: InventoryInventoryStatistics) => {
                    return item.toDict();
                }
            ) : [],
            "item": this.getItem() ?
                this.getItem()!.map((item: InventoryItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
