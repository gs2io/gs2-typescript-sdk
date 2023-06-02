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

export default class InventoryInventoryStatistics implements IModel {
    private acquired: number|null = null;
    private consume: number|null = null;
    private increaseCapacity: number|null = null;
    private increaseCapacityAmount: number|null = null;
    public getAcquired(): number|null {
        return this.acquired;
    }
    public setAcquired(acquired: number|null) {
        this.acquired = acquired;
        return this;
    }
    public withAcquired(acquired: number|null): this {
        this.acquired = acquired;
        return this;
    }
    public getConsume(): number|null {
        return this.consume;
    }
    public setConsume(consume: number|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: number|null): this {
        this.consume = consume;
        return this;
    }
    public getIncreaseCapacity(): number|null {
        return this.increaseCapacity;
    }
    public setIncreaseCapacity(increaseCapacity: number|null) {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public withIncreaseCapacity(increaseCapacity: number|null): this {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public getIncreaseCapacityAmount(): number|null {
        return this.increaseCapacityAmount;
    }
    public setIncreaseCapacityAmount(increaseCapacityAmount: number|null) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }
    public withIncreaseCapacityAmount(increaseCapacityAmount: number|null): this {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryInventoryStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryStatistics()
            .withAcquired(data["acquired"])
            .withConsume(data["consume"])
            .withIncreaseCapacity(data["increaseCapacity"])
            .withIncreaseCapacityAmount(data["increaseCapacityAmount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquired": this.getAcquired(),
            "consume": this.getConsume(),
            "increaseCapacity": this.getIncreaseCapacity(),
            "increaseCapacityAmount": this.getIncreaseCapacityAmount(),
        };
    }
}
