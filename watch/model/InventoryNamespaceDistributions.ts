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
import InventoryNamespaceAcquireDistributionStatistics from './InventoryNamespaceAcquireDistributionStatistics';
import InventoryNamespaceAcquireDistributionSegment from './InventoryNamespaceAcquireDistributionSegment';
import InventoryNamespaceAcquireDistribution from './InventoryNamespaceAcquireDistribution';
import InventoryNamespaceAcquireAmountDistributionStatistics from './InventoryNamespaceAcquireAmountDistributionStatistics';
import InventoryNamespaceAcquireAmountDistributionSegment from './InventoryNamespaceAcquireAmountDistributionSegment';
import InventoryNamespaceAcquireAmountDistribution from './InventoryNamespaceAcquireAmountDistribution';
import InventoryNamespaceConsumeDistributionStatistics from './InventoryNamespaceConsumeDistributionStatistics';
import InventoryNamespaceConsumeDistributionSegment from './InventoryNamespaceConsumeDistributionSegment';
import InventoryNamespaceConsumeDistribution from './InventoryNamespaceConsumeDistribution';
import InventoryNamespaceConsumeAmountDistributionStatistics from './InventoryNamespaceConsumeAmountDistributionStatistics';
import InventoryNamespaceConsumeAmountDistributionSegment from './InventoryNamespaceConsumeAmountDistributionSegment';
import InventoryNamespaceConsumeAmountDistribution from './InventoryNamespaceConsumeAmountDistribution';
import InventoryNamespaceIncreaseCapacityDistributionStatistics from './InventoryNamespaceIncreaseCapacityDistributionStatistics';
import InventoryNamespaceIncreaseCapacityDistributionSegment from './InventoryNamespaceIncreaseCapacityDistributionSegment';
import InventoryNamespaceIncreaseCapacityDistribution from './InventoryNamespaceIncreaseCapacityDistribution';
import InventoryNamespaceIncreaseCapacityAmountDistributionStatistics from './InventoryNamespaceIncreaseCapacityAmountDistributionStatistics';
import InventoryNamespaceIncreaseCapacityAmountDistributionSegment from './InventoryNamespaceIncreaseCapacityAmountDistributionSegment';
import InventoryNamespaceIncreaseCapacityAmountDistribution from './InventoryNamespaceIncreaseCapacityAmountDistribution';

export default class InventoryNamespaceDistributions implements IModel {
    private acquire: InventoryNamespaceAcquireDistribution|null = null;
    private acquireAmount: InventoryNamespaceAcquireAmountDistribution|null = null;
    private consume: InventoryNamespaceConsumeDistribution|null = null;
    private consumeAmount: InventoryNamespaceConsumeAmountDistribution|null = null;
    private increaseCapacity: InventoryNamespaceIncreaseCapacityDistribution|null = null;
    private increaseCapacityAmount: InventoryNamespaceIncreaseCapacityAmountDistribution|null = null;
    public getAcquire(): InventoryNamespaceAcquireDistribution|null {
        return this.acquire;
    }
    public setAcquire(acquire: InventoryNamespaceAcquireDistribution|null) {
        this.acquire = acquire;
        return this;
    }
    public withAcquire(acquire: InventoryNamespaceAcquireDistribution|null): this {
        this.acquire = acquire;
        return this;
    }
    public getAcquireAmount(): InventoryNamespaceAcquireAmountDistribution|null {
        return this.acquireAmount;
    }
    public setAcquireAmount(acquireAmount: InventoryNamespaceAcquireAmountDistribution|null) {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public withAcquireAmount(acquireAmount: InventoryNamespaceAcquireAmountDistribution|null): this {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public getConsume(): InventoryNamespaceConsumeDistribution|null {
        return this.consume;
    }
    public setConsume(consume: InventoryNamespaceConsumeDistribution|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: InventoryNamespaceConsumeDistribution|null): this {
        this.consume = consume;
        return this;
    }
    public getConsumeAmount(): InventoryNamespaceConsumeAmountDistribution|null {
        return this.consumeAmount;
    }
    public setConsumeAmount(consumeAmount: InventoryNamespaceConsumeAmountDistribution|null) {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public withConsumeAmount(consumeAmount: InventoryNamespaceConsumeAmountDistribution|null): this {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public getIncreaseCapacity(): InventoryNamespaceIncreaseCapacityDistribution|null {
        return this.increaseCapacity;
    }
    public setIncreaseCapacity(increaseCapacity: InventoryNamespaceIncreaseCapacityDistribution|null) {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public withIncreaseCapacity(increaseCapacity: InventoryNamespaceIncreaseCapacityDistribution|null): this {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public getIncreaseCapacityAmount(): InventoryNamespaceIncreaseCapacityAmountDistribution|null {
        return this.increaseCapacityAmount;
    }
    public setIncreaseCapacityAmount(increaseCapacityAmount: InventoryNamespaceIncreaseCapacityAmountDistribution|null) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }
    public withIncreaseCapacityAmount(increaseCapacityAmount: InventoryNamespaceIncreaseCapacityAmountDistribution|null): this {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceDistributions()
            .withAcquire(InventoryNamespaceAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(InventoryNamespaceAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(InventoryNamespaceConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(InventoryNamespaceConsumeAmountDistribution.fromDict(data["consumeAmount"]))
            .withIncreaseCapacity(InventoryNamespaceIncreaseCapacityDistribution.fromDict(data["increaseCapacity"]))
            .withIncreaseCapacityAmount(InventoryNamespaceIncreaseCapacityAmountDistribution.fromDict(data["increaseCapacityAmount"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquire": this.getAcquire()?.toDict(),
            "acquireAmount": this.getAcquireAmount()?.toDict(),
            "consume": this.getConsume()?.toDict(),
            "consumeAmount": this.getConsumeAmount()?.toDict(),
            "increaseCapacity": this.getIncreaseCapacity()?.toDict(),
            "increaseCapacityAmount": this.getIncreaseCapacityAmount()?.toDict(),
        };
    }
}
