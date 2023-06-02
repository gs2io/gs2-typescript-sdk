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

export default class MoneyNamespaceStatistics implements IModel {
    private verification: number|null = null;
    private deposit: number|null = null;
    private withdraw: number|null = null;
    private revenue: number|null = null;
    public getVerification(): number|null {
        return this.verification;
    }
    public setVerification(verification: number|null) {
        this.verification = verification;
        return this;
    }
    public withVerification(verification: number|null): this {
        this.verification = verification;
        return this;
    }
    public getDeposit(): number|null {
        return this.deposit;
    }
    public setDeposit(deposit: number|null) {
        this.deposit = deposit;
        return this;
    }
    public withDeposit(deposit: number|null): this {
        this.deposit = deposit;
        return this;
    }
    public getWithdraw(): number|null {
        return this.withdraw;
    }
    public setWithdraw(withdraw: number|null) {
        this.withdraw = withdraw;
        return this;
    }
    public withWithdraw(withdraw: number|null): this {
        this.withdraw = withdraw;
        return this;
    }
    public getRevenue(): number|null {
        return this.revenue;
    }
    public setRevenue(revenue: number|null) {
        this.revenue = revenue;
        return this;
    }
    public withRevenue(revenue: number|null): this {
        this.revenue = revenue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceStatistics()
            .withVerification(data["verification"])
            .withDeposit(data["deposit"])
            .withWithdraw(data["withdraw"])
            .withRevenue(data["revenue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "verification": this.getVerification(),
            "deposit": this.getDeposit(),
            "withdraw": this.getWithdraw(),
            "revenue": this.getRevenue(),
        };
    }
}
