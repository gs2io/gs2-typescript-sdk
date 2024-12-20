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
    private acquire: Gs2Watch.InventoryNamespaceAcquireDistribution|null = null;
    private acquireAmount: Gs2Watch.InventoryNamespaceAcquireAmountDistribution|null = null;
    private consume: Gs2Watch.InventoryNamespaceConsumeDistribution|null = null;
    private consumeAmount: Gs2Watch.InventoryNamespaceConsumeAmountDistribution|null = null;
    private increaseCapacity: Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution|null = null;
    private increaseCapacityAmount: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution|null = null;
    public getAcquire(): Gs2Watch.InventoryNamespaceAcquireDistribution|null {
        return this.acquire;
    }
    public setAcquire(acquire: Gs2Watch.InventoryNamespaceAcquireDistribution|null) {
        this.acquire = acquire;
        return this;
    }
    public withAcquire(acquire: Gs2Watch.InventoryNamespaceAcquireDistribution|null): this {
        this.acquire = acquire;
        return this;
    }
    public getAcquireAmount(): Gs2Watch.InventoryNamespaceAcquireAmountDistribution|null {
        return this.acquireAmount;
    }
    public setAcquireAmount(acquireAmount: Gs2Watch.InventoryNamespaceAcquireAmountDistribution|null) {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public withAcquireAmount(acquireAmount: Gs2Watch.InventoryNamespaceAcquireAmountDistribution|null): this {
        this.acquireAmount = acquireAmount;
        return this;
    }
    public getConsume(): Gs2Watch.InventoryNamespaceConsumeDistribution|null {
        return this.consume;
    }
    public setConsume(consume: Gs2Watch.InventoryNamespaceConsumeDistribution|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: Gs2Watch.InventoryNamespaceConsumeDistribution|null): this {
        this.consume = consume;
        return this;
    }
    public getConsumeAmount(): Gs2Watch.InventoryNamespaceConsumeAmountDistribution|null {
        return this.consumeAmount;
    }
    public setConsumeAmount(consumeAmount: Gs2Watch.InventoryNamespaceConsumeAmountDistribution|null) {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public withConsumeAmount(consumeAmount: Gs2Watch.InventoryNamespaceConsumeAmountDistribution|null): this {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public getIncreaseCapacity(): Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution|null {
        return this.increaseCapacity;
    }
    public setIncreaseCapacity(increaseCapacity: Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution|null) {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public withIncreaseCapacity(increaseCapacity: Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution|null): this {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public getIncreaseCapacityAmount(): Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution|null {
        return this.increaseCapacityAmount;
    }
    public setIncreaseCapacityAmount(increaseCapacityAmount: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution|null) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }
    public withIncreaseCapacityAmount(increaseCapacityAmount: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution|null): this {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceDistributions()
            .withAcquire(Gs2Watch.InventoryNamespaceAcquireDistribution.fromDict(data["acquire"]))
            .withAcquireAmount(Gs2Watch.InventoryNamespaceAcquireAmountDistribution.fromDict(data["acquireAmount"]))
            .withConsume(Gs2Watch.InventoryNamespaceConsumeDistribution.fromDict(data["consume"]))
            .withConsumeAmount(Gs2Watch.InventoryNamespaceConsumeAmountDistribution.fromDict(data["consumeAmount"]))
            .withIncreaseCapacity(Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution.fromDict(data["increaseCapacity"]))
            .withIncreaseCapacityAmount(Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution.fromDict(data["increaseCapacityAmount"]));
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
