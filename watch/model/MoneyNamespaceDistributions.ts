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
import MoneyNamespaceVerificationDistributionStatistics from './MoneyNamespaceVerificationDistributionStatistics';
import MoneyNamespaceVerificationDistributionSegment from './MoneyNamespaceVerificationDistributionSegment';
import MoneyNamespaceVerificationDistribution from './MoneyNamespaceVerificationDistribution';
import MoneyNamespaceDepositDistributionStatistics from './MoneyNamespaceDepositDistributionStatistics';
import MoneyNamespaceDepositDistributionSegment from './MoneyNamespaceDepositDistributionSegment';
import MoneyNamespaceDepositDistribution from './MoneyNamespaceDepositDistribution';
import MoneyNamespaceWithdrawDistributionStatistics from './MoneyNamespaceWithdrawDistributionStatistics';
import MoneyNamespaceWithdrawDistributionSegment from './MoneyNamespaceWithdrawDistributionSegment';
import MoneyNamespaceWithdrawDistribution from './MoneyNamespaceWithdrawDistribution';
import MoneyNamespaceRevenueDistributionStatistics from './MoneyNamespaceRevenueDistributionStatistics';
import MoneyNamespaceRevenueDistributionSegment from './MoneyNamespaceRevenueDistributionSegment';
import MoneyNamespaceRevenueDistribution from './MoneyNamespaceRevenueDistribution';

export default class MoneyNamespaceDistributions implements IModel {
    private verification: Gs2Watch.MoneyNamespaceVerificationDistribution|null = null;
    private deposit: Gs2Watch.MoneyNamespaceDepositDistribution|null = null;
    private withdraw: Gs2Watch.MoneyNamespaceWithdrawDistribution|null = null;
    private revenue: Gs2Watch.MoneyNamespaceRevenueDistribution|null = null;
    public getVerification(): Gs2Watch.MoneyNamespaceVerificationDistribution|null {
        return this.verification;
    }
    public setVerification(verification: Gs2Watch.MoneyNamespaceVerificationDistribution|null) {
        this.verification = verification;
        return this;
    }
    public withVerification(verification: Gs2Watch.MoneyNamespaceVerificationDistribution|null): this {
        this.verification = verification;
        return this;
    }
    public getDeposit(): Gs2Watch.MoneyNamespaceDepositDistribution|null {
        return this.deposit;
    }
    public setDeposit(deposit: Gs2Watch.MoneyNamespaceDepositDistribution|null) {
        this.deposit = deposit;
        return this;
    }
    public withDeposit(deposit: Gs2Watch.MoneyNamespaceDepositDistribution|null): this {
        this.deposit = deposit;
        return this;
    }
    public getWithdraw(): Gs2Watch.MoneyNamespaceWithdrawDistribution|null {
        return this.withdraw;
    }
    public setWithdraw(withdraw: Gs2Watch.MoneyNamespaceWithdrawDistribution|null) {
        this.withdraw = withdraw;
        return this;
    }
    public withWithdraw(withdraw: Gs2Watch.MoneyNamespaceWithdrawDistribution|null): this {
        this.withdraw = withdraw;
        return this;
    }
    public getRevenue(): Gs2Watch.MoneyNamespaceRevenueDistribution|null {
        return this.revenue;
    }
    public setRevenue(revenue: Gs2Watch.MoneyNamespaceRevenueDistribution|null) {
        this.revenue = revenue;
        return this;
    }
    public withRevenue(revenue: Gs2Watch.MoneyNamespaceRevenueDistribution|null): this {
        this.revenue = revenue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceDistributions()
            .withVerification(Gs2Watch.MoneyNamespaceVerificationDistribution.fromDict(data["verification"]))
            .withDeposit(Gs2Watch.MoneyNamespaceDepositDistribution.fromDict(data["deposit"]))
            .withWithdraw(Gs2Watch.MoneyNamespaceWithdrawDistribution.fromDict(data["withdraw"]))
            .withRevenue(Gs2Watch.MoneyNamespaceRevenueDistribution.fromDict(data["revenue"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "verification": this.getVerification()?.toDict(),
            "deposit": this.getDeposit()?.toDict(),
            "withdraw": this.getWithdraw()?.toDict(),
            "revenue": this.getRevenue()?.toDict(),
        };
    }
}
