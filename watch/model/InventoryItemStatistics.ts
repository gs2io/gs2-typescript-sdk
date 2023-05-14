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

export default class InventoryItemStatistics implements IModel {
    private acquired: number|null = null;
    private consumed: number|null = null;
    private consumedRate: number|null = null;
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
    public getConsumed(): number|null {
        return this.consumed;
    }
    public setConsumed(consumed: number|null) {
        this.consumed = consumed;
        return this;
    }
    public withConsumed(consumed: number|null): this {
        this.consumed = consumed;
        return this;
    }
    public getConsumedRate(): number|null {
        return this.consumedRate;
    }
    public setConsumedRate(consumedRate: number|null) {
        this.consumedRate = consumedRate;
        return this;
    }
    public withConsumedRate(consumedRate: number|null): this {
        this.consumedRate = consumedRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryItemStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemStatistics()
            .withAcquired(data["acquired"])
            .withConsumed(data["consumed"])
            .withConsumedRate(data["consumedRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquired": this.getAcquired(),
            "consumed": this.getConsumed(),
            "consumedRate": this.getConsumedRate(),
        };
    }
}
