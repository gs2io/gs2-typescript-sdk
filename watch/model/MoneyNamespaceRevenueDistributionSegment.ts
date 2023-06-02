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

export default class MoneyNamespaceRevenueDistributionSegment implements IModel {
    private slot: number|null = null;
    private sum: number|null = null;
    public getSlot(): number|null {
        return this.slot;
    }
    public setSlot(slot: number|null) {
        this.slot = slot;
        return this;
    }
    public withSlot(slot: number|null): this {
        this.slot = slot;
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

    public static fromDict(data: {[key: string]: any}): MoneyNamespaceRevenueDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceRevenueDistributionSegment()
            .withSlot(data["slot"])
            .withSum(data["sum"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "slot": this.getSlot(),
            "sum": this.getSum(),
        };
    }
}
