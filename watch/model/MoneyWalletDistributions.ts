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
import MoneyWalletFreeDistributionStatistics from './MoneyWalletFreeDistributionStatistics';
import MoneyWalletFreeDistributionSegment from './MoneyWalletFreeDistributionSegment';
import MoneyWalletFreeDistribution from './MoneyWalletFreeDistribution';
import MoneyWalletPaidDistributionStatistics from './MoneyWalletPaidDistributionStatistics';
import MoneyWalletPaidDistributionSegment from './MoneyWalletPaidDistributionSegment';
import MoneyWalletPaidDistribution from './MoneyWalletPaidDistribution';

export default class MoneyWalletDistributions implements IModel {
    private free: MoneyWalletFreeDistribution|null = null;
    private paid: MoneyWalletPaidDistribution|null = null;
    public getFree(): MoneyWalletFreeDistribution|null {
        return this.free;
    }
    public setFree(free: MoneyWalletFreeDistribution|null) {
        this.free = free;
        return this;
    }
    public withFree(free: MoneyWalletFreeDistribution|null): this {
        this.free = free;
        return this;
    }
    public getPaid(): MoneyWalletPaidDistribution|null {
        return this.paid;
    }
    public setPaid(paid: MoneyWalletPaidDistribution|null) {
        this.paid = paid;
        return this;
    }
    public withPaid(paid: MoneyWalletPaidDistribution|null): this {
        this.paid = paid;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyWalletDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWalletDistributions()
            .withFree(MoneyWalletFreeDistribution.fromDict(data["free"]))
            .withPaid(MoneyWalletPaidDistribution.fromDict(data["paid"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "free": this.getFree()?.toDict(),
            "paid": this.getPaid()?.toDict(),
        };
    }
}
