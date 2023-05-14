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
import InventoryItemStatistics from './InventoryItemStatistics';
import InventoryItemDistribution from './InventoryItemDistribution';

export default class InventoryItem implements IModel {
    private itemName: string|null = null;
    private statistics: InventoryItemStatistics|null = null;
    private distribution: InventoryItemDistribution[]|null = null;
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
    public getStatistics(): InventoryItemStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: InventoryItemStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: InventoryItemStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): InventoryItemDistribution[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: InventoryItemDistribution[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: InventoryItemDistribution[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItem()
            .withItemName(data["itemName"])
            .withStatistics(InventoryItemStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return InventoryItemDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "itemName": this.getItemName(),
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: InventoryItemDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
