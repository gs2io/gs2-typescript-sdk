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

export default class InventoryNamespaceIncreaseCapacityAmountDistributionSegment implements IModel {
    private inventoryName: string|null = null;
    private sum: number|null = null;
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
    public getSum(): number|null {
        return this.sum;
    }
    public setSum(sum: number|null) {
        this.sum = sum;
        return this;
    }
    public withSum(sum: number|null): this {
        this.sum = sum;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespaceIncreaseCapacityAmountDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceIncreaseCapacityAmountDistributionSegment()
            .withInventoryName(data["inventoryName"])
            .withSum(data["sum"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryName": this.getInventoryName(),
            "sum": this.getSum(),
        };
    }
}
