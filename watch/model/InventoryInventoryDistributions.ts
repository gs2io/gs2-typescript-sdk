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

import * as Gs2Watch from '../../watch/model'
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
    private capacity: Gs2Watch.InventoryInventoryCapacityDistribution|null = null;
    private acquire: Gs2Watch.InventoryInventoryAcquireDistribution|null = null;
    private acquireAmount: Gs2Watch.InventoryInventoryAcquireAmountDistribution|null = null;
    private consume: Gs2Watch.InventoryInventoryConsumeDistribution|null = null;
    private consumeAmount: Gs2Watch.InventoryInventoryConsumeAmountDistribution|null = null;
    public getCapacity(): Gs2Watch.InventoryInventoryCapacityDistribution|null {
        return this.capacity;
    }
    public setCapacity(capacity: Gs2Watch.InventoryInventoryCapacityDistribution|null) {
        this.capacity = capacity;
        return this;
    }
    public withCapacity(capacity: Gs2Watch.InventoryInventoryCapacityDistribution|null): this {
        this.capacity = capacity;
        return this;
    }
    public getAcquire(): Gs2Watch.InventoryInventoryAcquireDistribution|null {
        return this.acquire;
    }
    public setAcquire(acquire: Gs2Watch.InventoryInventoryAcquireDistribution|null) {
        this.acquire = acquire;
        return this;
    }
    public withAcquire(acquire: Gs2Watch.InventoryInventoryAcquireDistribution|null): this {
        this.acquire = acquire;
        return this;
    }
    public getAcquireAmount(): Gs2Watch.InventoryInventoryAcquireAmountDistribution|null {
        return this.acquireAmount;
    }
    public setAcquireAmount(acquireAmount: Gs2Watch.InventoryInventoryAcquireAmountDistribution|null) {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public withAcquireAmount(acquireAmount: Gs2Watch.InventoryInventoryAcquireAmountDistribution|null): this {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public getConsume(): Gs2Watch.InventoryInventoryConsumeDistribution|null {
        return this.consume;
    }
    public setConsume(consume: Gs2Watch.InventoryInventoryConsumeDistribution|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: Gs2Watch.InventoryInventoryConsumeDistribution|null): this {
        this.consume = consume;
        return this;
    }
    public getConsumeAmount(): Gs2Watch.InventoryInventoryConsumeAmountDistribution|null {
        return this.consumeAmount;
    }
    public setConsumeAmount(consumeAmount: Gs2Watch.InventoryInventoryConsumeAmountDistribution|null) {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public withConsumeAmount(consumeAmount: Gs2Watch.InventoryInventoryConsumeAmountDistribution|null): this {
        this.consumeAmount = consumeAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryInventoryDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryDistributions()
            .withCapacity(Gs2Watch.InventoryInventoryCapacityDistribution.fromDict(data["capacity"]))
            .withAcquire(Gs2Watch.InventoryInventoryAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(Gs2Watch.InventoryInventoryAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(Gs2Watch.InventoryInventoryConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(Gs2Watch.InventoryInventoryConsumeAmountDistribution.fromDict(data["consumeAmount"]));
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
