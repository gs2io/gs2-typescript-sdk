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

export default class LotteryLotteryDrawResultDistributionSegment implements IModel {
    private prizeId: string|null = null;
    private count: number|null = null;
    public getPrizeId(): string|null {
        return this.prizeId;
    }
    public setPrizeId(prizeId: string|null) {
        this.prizeId = prizeId;
        return this;
    }
    public withPrizeId(prizeId: string|null): this {
        this.prizeId = prizeId;
        return this;
    }
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryLotteryDrawResultDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryDrawResultDistributionSegment()
            .withPrizeId(data["prizeId"])
            .withCount(data["count"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prizeId": this.getPrizeId(),
            "count": this.getCount(),
        };
    }
}
