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
    private exchange: ExchangeNamespaceExchangeDistribution|null = null;
    private exchangeAmount: ExchangeNamespaceExchangeAmountDistribution|null = null;
    private exchangeByUser: ExchangeNamespaceExchangeByUserDistribution|null = null;
    private exchangeAmountByUser: ExchangeNamespaceExchangeAmountByUserDistribution|null = null;
    public getExchange(): ExchangeNamespaceExchangeDistribution|null {
        return this.exchange;
    }
    public setExchange(exchange: ExchangeNamespaceExchangeDistribution|null) {
        this.exchange = exchange;
        return this;
    }
    public withExchange(exchange: ExchangeNamespaceExchangeDistribution|null): this {
        this.exchange = exchange;
        return this;
    }
    public getExchangeAmount(): ExchangeNamespaceExchangeAmountDistribution|null {
        return this.exchangeAmount;
    }
    public setExchangeAmount(exchangeAmount: ExchangeNamespaceExchangeAmountDistribution|null) {
        this.exchangeAmount = exchangeAmount;
        return this;
    }
    public withExchangeAmount(exchangeAmount: ExchangeNamespaceExchangeAmountDistribution|null): this {
        this.exchangeAmount = exchangeAmount;
        return this;
    }
    public getExchangeByUser(): ExchangeNamespaceExchangeByUserDistribution|null {
        return this.exchangeByUser;
    }
    public setExchangeByUser(exchangeByUser: ExchangeNamespaceExchangeByUserDistribution|null) {
        this.exchangeByUser = exchangeByUser;
        return this;
    }
    public withExchangeByUser(exchangeByUser: ExchangeNamespaceExchangeByUserDistribution|null): this {
        this.exchangeByUser = exchangeByUser;
        return this;
    }
    public getExchangeAmountByUser(): ExchangeNamespaceExchangeAmountByUserDistribution|null {
        return this.exchangeAmountByUser;
    }
    public setExchangeAmountByUser(exchangeAmountByUser: ExchangeNamespaceExchangeAmountByUserDistribution|null) {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    }
    public withExchangeAmountByUser(exchangeAmountByUser: ExchangeNamespaceExchangeAmountByUserDistribution|null): this {
        this.exchangeAmountByUser = exchangeAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceDistributions()
            .withExchange(ExchangeNamespaceExchangeDistribution.fromDict(data["exchange"]))
            .withExchangeAmount(ExchangeNamespaceExchangeAmountDistribution.fromDict(data["exchangeAmount"]))
            .withExchangeByUser(ExchangeNamespaceExchangeByUserDistribution.fromDict(data["exchangeByUser"]))
            .withExchangeAmountByUser(ExchangeNamespaceExchangeAmountByUserDistribution.fromDict(data["exchangeAmountByUser"]));
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
