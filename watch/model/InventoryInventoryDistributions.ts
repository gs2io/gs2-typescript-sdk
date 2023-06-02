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
import InventoryInventoryCapacityDistributionStatistics from './InventoryInventoryCapacityDistributionStatistics';
import InventoryInventoryCapacityDistributionSegment from './InventoryInventoryCapacityDistributionSegment';
import InventoryInventoryCapacityDistribution from './InventoryInventoryCapacityDistribution';
import InventoryInventoryAcquireDistributionStatistics from './InventoryInventoryAcquireDistributionStatistics';
import InventoryInventoryAcquireDistributionSegment from './InventoryInventoryAcquireDistributionSegment';
import InventoryInventoryAcquireDistribution from './InventoryInventoryAcquireDistribution';
import InventoryInventoryAcquireAmountDistributionStatistics from './InventoryInventoryAcquireAmountDistributionStatistics';
import InventoryInventoryAcquireAmountDistributionSegment from './InventoryInventoryAcquireAmountDistributionSegment';
import InventoryInventoryAcquireAmountDistribution from './InventoryInventoryAcquireAmountDistribution';
import InventoryInventoryConsumeDistributionStatistics from './InventoryInventoryConsumeDistributionStatistics';
import InventoryInventoryConsumeDistributionSegment from './InventoryInventoryConsumeDistributionSegment';
import InventoryInventoryConsumeDistribution from './InventoryInventoryConsumeDistribution';
import InventoryInventoryConsumeAmountDistributionStatistics from './InventoryInventoryConsumeAmountDistributionStatistics';
import InventoryInventoryConsumeAmountDistributionSegment from './InventoryInventoryConsumeAmountDistributionSegment';
import InventoryInventoryConsumeAmountDistribution from './InventoryInventoryConsumeAmountDistribution';

export default class InventoryInventoryDistributions implements IModel {
    private capacity: InventoryInventoryCapacityDistribution|null = null;
    private acquire: InventoryInventoryAcquireDistribution|null = null;
    private acquireAmount: InventoryInventoryAcquireAmountDistribution|null = null;
    private consume: InventoryInventoryConsumeDistribution|null = null;
    private consumeAmount: InventoryInventoryConsumeAmountDistribution|null = null;
    public getCapacity(): InventoryInventoryCapacityDistribution|null {
        return this.capacity;
    }
    public setCapacity(capacity: InventoryInventoryCapacityDistribution|null) {
        this.capacity = capacity;
        return this;
    }
    public withCapacity(capacity: InventoryInventoryCapacityDistribution|null): this {
        this.capacity = capacity;
        return this;
    }
    public getAcquire(): InventoryInventoryAcquireDistribution|null {
        return this.acquire;
    }
    public setAcquire(acquire: InventoryInventoryAcquireDistribution|null) {
        this.acquire = acquire;
        return this;
    }
    public withAcquire(acquire: InventoryInventoryAcquireDistribution|null): this {
        this.acquire = acquire;
        return this;
    }
    public getAcquireAmount(): InventoryInventoryAcquireAmountDistribution|null {
        return this.acquireAmount;
    }
    public setAcquireAmount(acquireAmount: InventoryInventoryAcquireAmountDistribution|null) {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public withAcquireAmount(acquireAmount: InventoryInventoryAcquireAmountDistribution|null): this {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public getConsume(): InventoryInventoryConsumeDistribution|null {
        return this.consume;
    }
    public setConsume(consume: InventoryInventoryConsumeDistribution|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: InventoryInventoryConsumeDistribution|null): this {
        this.consume = consume;
        return this;
    }
    public getConsumeAmount(): InventoryInventoryConsumeAmountDistribution|null {
        return this.consumeAmount;
    }
    public setConsumeAmount(consumeAmount: InventoryInventoryConsumeAmountDistribution|null) {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public withConsumeAmount(consumeAmount: InventoryInventoryConsumeAmountDistribution|null): this {
        this.consumeAmount = consumeAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryInventoryDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryDistributions()
            .withCapacity(InventoryInventoryCapacityDistribution.fromDict(data["capacity"]))
            .withAcquire(InventoryInventoryAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(InventoryInventoryAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(InventoryInventoryConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(InventoryInventoryConsumeAmountDistribution.fromDict(data["consumeAmount"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "capacity": this.getCapacity()?.toDict(),
            "acquire": this.getAcquire()?.toDict(),
            "acquireAmount": this.getAcquireAmount()?.toDict(),
            "consume": this.getConsume()?.toDict(),
            "consumeAmount": this.getConsumeAmount()?.toDict(),
        };
    }
}
