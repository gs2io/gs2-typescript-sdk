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
import ExchangeNamespaceExchangeDistributionStatistics from './ExchangeNamespaceExchangeDistributionStatistics';
import ExchangeNamespaceExchangeDistributionSegment from './ExchangeNamespaceExchangeDistributionSegment';
import ExchangeNamespaceExchangeDistribution from './ExchangeNamespaceExchangeDistribution';
import ExchangeNamespaceExchangeAmountDistributionStatistics from './ExchangeNamespaceExchangeAmountDistributionStatistics';
import ExchangeNamespaceExchangeAmountDistributionSegment from './ExchangeNamespaceExchangeAmountDistributionSegment';
import ExchangeNamespaceExchangeAmountDistribution from './ExchangeNamespaceExchangeAmountDistribution';
import ExchangeNamespaceExchangeByUserDistributionStatistics from './ExchangeNamespaceExchangeByUserDistributionStatistics';
import ExchangeNamespaceExchangeByUserDistributionSegment from './ExchangeNamespaceExchangeByUserDistributionSegment';
import ExchangeNamespaceExchangeByUserDistribution from './ExchangeNamespaceExchangeByUserDistribution';
import ExchangeNamespaceExchangeAmountByUserDistributionStatistics from './ExchangeNamespaceExchangeAmountByUserDistributionStatistics';
import ExchangeNamespaceExchangeAmountByUserDistributionSegment from './ExchangeNamespaceExchangeAmountByUserDistributionSegment';
import ExchangeNamespaceExchangeAmountByUserDistribution from './ExchangeNamespaceExchangeAmountByUserDistribution';

export default class ExchangeNamespaceDistributions implements IModel {
    private exchange: Gs2Watch.ExchangeNamespaceExchangeDistribution|null = null;
    private exchangeAmount: Gs2Watch.ExchangeNamespaceExchangeAmountDistribution|null = null;
    private exchangeByUser: Gs2Watch.ExchangeNamespaceExchangeByUserDistribution|null = null;
    private exchangeAmountByUser: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution|null = null;
    public getExchange(): Gs2Watch.ExchangeNamespaceExchangeDistribution|null {
        return this.exchange;
    }
    public setExchange(exchange: Gs2Watch.ExchangeNamespaceExchangeDistribution|null) {
        this.exchange = exchange;
        return this;
    }
    public withExchange(exchange: Gs2Watch.ExchangeNamespaceExchangeDistribution|null): this {
        this.exchange = exchange;
        return this;
    }
    public getExchangeAmount(): Gs2Watch.ExchangeNamespaceExchangeAmountDistribution|null {
        return this.exchangeAmount;
    }
    public setExchangeAmount(exchangeAmount: Gs2Watch.ExchangeNamespaceExchangeAmountDistribution|null) {
        this.exchangeAmount = exchangeAmount;
        return this;
    }
    public withExchangeAmount(exchangeAmount: Gs2Watch.ExchangeNamespaceExchangeAmountDistribution|null): this {
        this.exchangeAmount = exchangeAmount;
        return this;
    }
    public getExchangeByUser(): Gs2Watch.ExchangeNamespaceExchangeByUserDistribution|null {
        return this.exchangeByUser;
    }
    public setExchangeByUser(exchangeByUser: Gs2Watch.ExchangeNamespaceExchangeByUserDistribution|null) {
        this.exchangeByUser = exchangeByUser;
        return this;
    }
    public withExchangeByUser(exchangeByUser: Gs2Watch.ExchangeNamespaceExchangeByUserDistribution|null): this {
        this.exchangeByUser = exchangeByUser;
        return this;
    }
    public getExchangeAmountByUser(): Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution|null {
        return this.exchangeAmountByUser;
    }
    public setExchangeAmountByUser(exchangeAmountByUser: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution|null) {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    }
    public withExchangeAmountByUser(exchangeAmountByUser: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution|null): this {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceDistributions()
            .withExchange(Gs2Watch.ExchangeNamespaceExchangeDistribution.fromDict(data["exchange"]))
            .withExchangeAmount(Gs2Watch.ExchangeNamespaceExchangeAmountDistribution.fromDict(data["exchangeAmount"]))
            .withExchangeByUser(Gs2Watch.ExchangeNamespaceExchangeByUserDistribution.fromDict(data["exchangeByUser"]))
            .withExchangeAmountByUser(Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistribution.fromDict(data["exchangeAmountByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "exchange": this.getExchange()?.toDict(),
            "exchangeAmount": this.getExchangeAmount()?.toDict(),
            "exchangeByUser": this.getExchangeByUser()?.toDict(),
            "exchangeAmountByUser": this.getExchangeAmountByUser()?.toDict(),
        };
    }
}
