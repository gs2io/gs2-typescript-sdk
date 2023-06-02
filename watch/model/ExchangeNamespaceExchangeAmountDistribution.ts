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
import ExchangeNamespaceExchangeAmountDistributionStatistics from './ExchangeNamespaceExchangeAmountDistributionStatistics';
import ExchangeNamespaceExchangeAmountDistributionSegment from './ExchangeNamespaceExchangeAmountDistributionSegment';

export default class ExchangeNamespaceExchangeAmountDistribution implements IModel {
    private statistics: ExchangeNamespaceExchangeAmountDistributionStatistics|null = null;
    private distribution: ExchangeNamespaceExchangeAmountDistributionSegment[]|null = null;
    public getStatistics(): ExchangeNamespaceExchangeAmountDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ExchangeNamespaceExchangeAmountDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ExchangeNamespaceExchangeAmountDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): ExchangeNamespaceExchangeAmountDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: ExchangeNamespaceExchangeAmountDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: ExchangeNamespaceExchangeAmountDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeNamespaceExchangeAmountDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeAmountDistribution()
            .withStatistics(ExchangeNamespaceExchangeAmountDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return ExchangeNamespaceExchangeAmountDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: ExchangeNamespaceExchangeAmountDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
