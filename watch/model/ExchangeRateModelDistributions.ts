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
import ExchangeRateModelAmountDistributionStatistics from './ExchangeRateModelAmountDistributionStatistics';
import ExchangeRateModelAmountDistributionSegment from './ExchangeRateModelAmountDistributionSegment';
import ExchangeRateModelAmountDistribution from './ExchangeRateModelAmountDistribution';

export default class ExchangeRateModelDistributions implements IModel {
    private amount: ExchangeRateModelAmountDistribution|null = null;
    public getAmount(): ExchangeRateModelAmountDistribution|null {
        return this.amount;
    }
    public setAmount(amount: ExchangeRateModelAmountDistribution|null) {
        this.amount = amount;
        return this;
    }
    public withAmount(amount: ExchangeRateModelAmountDistribution|null): this {
        this.amount = amount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeRateModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeRateModelDistributions()
            .withAmount(ExchangeRateModelAmountDistribution.fromDict(data["amount"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "amount": this.getAmount()?.toDict(),
        };
    }
}
