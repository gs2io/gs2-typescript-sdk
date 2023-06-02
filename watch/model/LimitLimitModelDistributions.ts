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
import LimitLimitModelIncreaseDistributionStatistics from './LimitLimitModelIncreaseDistributionStatistics';
import LimitLimitModelIncreaseDistributionSegment from './LimitLimitModelIncreaseDistributionSegment';
import LimitLimitModelIncreaseDistribution from './LimitLimitModelIncreaseDistribution';
import LimitLimitModelIncreaseAmountDistributionStatistics from './LimitLimitModelIncreaseAmountDistributionStatistics';
import LimitLimitModelIncreaseAmountDistributionSegment from './LimitLimitModelIncreaseAmountDistributionSegment';
import LimitLimitModelIncreaseAmountDistribution from './LimitLimitModelIncreaseAmountDistribution';
import LimitLimitModelIncreaseByUserDistributionStatistics from './LimitLimitModelIncreaseByUserDistributionStatistics';
import LimitLimitModelIncreaseByUserDistributionSegment from './LimitLimitModelIncreaseByUserDistributionSegment';
import LimitLimitModelIncreaseByUserDistribution from './LimitLimitModelIncreaseByUserDistribution';
import LimitLimitModelIncreaseAmountByUserDistributionStatistics from './LimitLimitModelIncreaseAmountByUserDistributionStatistics';
import LimitLimitModelIncreaseAmountByUserDistributionSegment from './LimitLimitModelIncreaseAmountByUserDistributionSegment';
import LimitLimitModelIncreaseAmountByUserDistribution from './LimitLimitModelIncreaseAmountByUserDistribution';

export default class LimitLimitModelDistributions implements IModel {
    private increase: LimitLimitModelIncreaseDistribution|null = null;
    private increaseAmount: LimitLimitModelIncreaseAmountDistribution|null = null;
    private increaseByUser: LimitLimitModelIncreaseByUserDistribution|null = null;
    private increaseAmountByUser: LimitLimitModelIncreaseAmountByUserDistribution|null = null;
    public getIncrease(): LimitLimitModelIncreaseDistribution|null {
        return this.increase;
    }
    public setIncrease(increase: LimitLimitModelIncreaseDistribution|null) {
        this.increase = increase;
        return this;
    }
    public withIncrease(increase: LimitLimitModelIncreaseDistribution|null): this {
        this.increase = increase;
        return this;
    }
    public getIncreaseAmount(): LimitLimitModelIncreaseAmountDistribution|null {
        return this.increaseAmount;
    }
    public setIncreaseAmount(increaseAmount: LimitLimitModelIncreaseAmountDistribution|null) {
        this.increaseAmount = increaseAmount;
        return this;
    }
    public withIncreaseAmount(increaseAmount: LimitLimitModelIncreaseAmountDistribution|null): this {
        this.increaseAmount = increaseAmount;
        return this;
    }
    public getIncreaseByUser(): LimitLimitModelIncreaseByUserDistribution|null {
        return this.increaseByUser;
    }
    public setIncreaseByUser(increaseByUser: LimitLimitModelIncreaseByUserDistribution|null) {
        this.increaseByUser = increaseByUser;
        return this;
    }
    public withIncreaseByUser(increaseByUser: LimitLimitModelIncreaseByUserDistribution|null): this {
        this.increaseByUser = increaseByUser;
        return this;
    }
    public getIncreaseAmountByUser(): LimitLimitModelIncreaseAmountByUserDistribution|null {
        return this.increaseAmountByUser;
    }
    public setIncreaseAmountByUser(increaseAmountByUser: LimitLimitModelIncreaseAmountByUserDistribution|null) {
        this.increaseAmountByUser = increaseAmountByUser;
        return this;
    }
    public withIncreaseAmountByUser(increaseAmountByUser: LimitLimitModelIncreaseAmountByUserDistribution|null): this {
        this.increaseAmountByUser = increaseAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitLimitModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModelDistributions()
            .withIncrease(LimitLimitModelIncreaseDistribution.fromDict(data["increase"]))
            .withIncreaseAmount(LimitLimitModelIncreaseAmountDistribution.fromDict(data["increaseAmount"]))
            .withIncreaseByUser(LimitLimitModelIncreaseByUserDistribution.fromDict(data["increaseByUser"]))
            .withIncreaseAmountByUser(LimitLimitModelIncreaseAmountByUserDistribution.fromDict(data["increaseAmountByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "increase": this.getIncrease()?.toDict(),
            "increaseAmount": this.getIncreaseAmount()?.toDict(),
            "increaseByUser": this.getIncreaseByUser()?.toDict(),
            "increaseAmountByUser": this.getIncreaseAmountByUser()?.toDict(),
        };
    }
}
