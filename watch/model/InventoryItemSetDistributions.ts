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
import InventoryItemSetCountDistributionStatistics from './InventoryItemSetCountDistributionStatistics';
import InventoryItemSetCountDistributionSegment from './InventoryItemSetCountDistributionSegment';
import InventoryItemSetCountDistribution from './InventoryItemSetCountDistribution';

export default class InventoryItemSetDistributions implements IModel {
    private count: Gs2Watch.InventoryItemSetCountDistribution|null = null;
    public getCount(): Gs2Watch.InventoryItemSetCountDistribution|null {
        return this.count;
    }
    public setCount(count: Gs2Watch.InventoryItemSetCountDistribution|null) {
        this.count = count;
        return this;
    }
    public withCount(count: Gs2Watch.InventoryItemSetCountDistribution|null): this {
        this.count = count;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryItemSetDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSetDistributions()
            .withCount(Gs2Watch.InventoryItemSetCountDistribution.fromDict(data["count"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "count": this.getCount()?.toDict(),
        };
    }
}
