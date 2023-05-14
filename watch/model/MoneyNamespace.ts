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
import MoneyStatistics from './MoneyStatistics';
import MoneyBalanceDistribution from './MoneyBalanceDistribution';
import MoneyBillingDistribution from './MoneyBillingDistribution';

export default class MoneyNamespace implements IModel {
    private namespaceName: string|null = null;
    private statistics: MoneyStatistics|null = null;
    private balanceDistribution: MoneyBalanceDistribution[]|null = null;
    private billingDistribution: MoneyBillingDistribution[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getStatistics(): MoneyStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MoneyStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MoneyStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getBalanceDistribution(): MoneyBalanceDistribution[]|null {
        return this.balanceDistribution;
    }
    public setBalanceDistribution(balanceDistribution: MoneyBalanceDistribution[]|null) {
        this.balanceDistribution = balanceDistribution;
        return this;
    }
    public withBalanceDistribution(balanceDistribution: MoneyBalanceDistribution[]|null): this {
        this.balanceDistribution = balanceDistribution;
        return this;
    }
    public getBillingDistribution(): MoneyBillingDistribution[]|null {
        return this.billingDistribution;
    }
    public setBillingDistribution(billingDistribution: MoneyBillingDistribution[]|null) {
        this.billingDistribution = billingDistribution;
        return this;
    }
    public withBillingDistribution(billingDistribution: MoneyBillingDistribution[]|null): this {
        this.billingDistribution = billingDistribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespace()
            .withNamespaceName(data["namespaceName"])
            .withStatistics(MoneyStatistics.fromDict(data["statistics"]))
            .withBalanceDistribution(data.balanceDistribution ?
                data.balanceDistribution.map((item: {[key: string]: any}) => {
                    return MoneyBalanceDistribution.fromDict(item);
                }
            ) : [])
            .withBillingDistribution(data.billingDistribution ?
                data.billingDistribution.map((item: {[key: string]: any}) => {
                    return MoneyBillingDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "statistics": this.getStatistics()?.toDict(),
            "balanceDistribution": this.getBalanceDistribution() ?
                this.getBalanceDistribution()!.map((item: MoneyBalanceDistribution) => {
                    return item.toDict();
                }
            ) : [],
            "billingDistribution": this.getBillingDistribution() ?
                this.getBillingDistribution()!.map((item: MoneyBillingDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
