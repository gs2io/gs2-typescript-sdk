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
import MoneyNamespaceStatistics from './MoneyNamespaceStatistics';
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
import MoneyNamespaceDistributions from './MoneyNamespaceDistributions';
import MoneyWalletStatistics from './MoneyWalletStatistics';
import MoneyWalletFreeDistributionStatistics from './MoneyWalletFreeDistributionStatistics';
import MoneyWalletFreeDistributionSegment from './MoneyWalletFreeDistributionSegment';
import MoneyWalletFreeDistribution from './MoneyWalletFreeDistribution';
import MoneyWalletPaidDistributionStatistics from './MoneyWalletPaidDistributionStatistics';
import MoneyWalletPaidDistributionSegment from './MoneyWalletPaidDistributionSegment';
import MoneyWalletPaidDistribution from './MoneyWalletPaidDistribution';
import MoneyWalletDistributions from './MoneyWalletDistributions';
import MoneyWallet from './MoneyWallet';
import MoneyReceiptStatistics from './MoneyReceiptStatistics';
import MoneyReceiptVerificationByUserDistributionStatistics from './MoneyReceiptVerificationByUserDistributionStatistics';
import MoneyReceiptVerificationByUserDistributionSegment from './MoneyReceiptVerificationByUserDistributionSegment';
import MoneyReceiptVerificationByUserDistribution from './MoneyReceiptVerificationByUserDistribution';
import MoneyReceiptDistributions from './MoneyReceiptDistributions';
import MoneyReceipt from './MoneyReceipt';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:money:namespace:{namespaceName}";

export default class MoneyNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: MoneyNamespaceStatistics|null = null;
    private distributions: MoneyNamespaceDistributions|null = null;
    private wallets: MoneyWallet[]|null = null;
    private receipts: MoneyReceipt[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDay(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        year: string|null,
        month: string|null,
        day: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }
    public getNamespaceId(): string|null {
        return this.namespaceId;
    }
    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }
    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
        return this;
    }
    public getYear(): number|null {
        return this.year;
    }
    public setYear(year: number|null) {
        this.year = year;
        return this;
    }
    public withYear(year: number|null): this {
        this.year = year;
        return this;
    }
    public getMonth(): number|null {
        return this.month;
    }
    public setMonth(month: number|null) {
        this.month = month;
        return this;
    }
    public withMonth(month: number|null): this {
        this.month = month;
        return this;
    }
    public getDay(): number|null {
        return this.day;
    }
    public setDay(day: number|null) {
        this.day = day;
        return this;
    }
    public withDay(day: number|null): this {
        this.day = day;
        return this;
    }
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
    public getStatistics(): MoneyNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MoneyNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MoneyNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): MoneyNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: MoneyNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: MoneyNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getWallets(): MoneyWallet[]|null {
        return this.wallets;
    }
    public setWallets(wallets: MoneyWallet[]|null) {
        this.wallets = wallets;
        return this;
    }
    public withWallets(wallets: MoneyWallet[]|null): this {
        this.wallets = wallets;
        return this;
    }
    public getReceipts(): MoneyReceipt[]|null {
        return this.receipts;
    }
    public setReceipts(receipts: MoneyReceipt[]|null) {
        this.receipts = receipts;
        return this;
    }
    public withReceipts(receipts: MoneyReceipt[]|null): this {
        this.receipts = receipts;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(MoneyNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(MoneyNamespaceDistributions.fromDict(data["distributions"]))
            .withWallets(data.wallets ?
                data.wallets.map((item: {[key: string]: any}) => {
                    return MoneyWallet.fromDict(item);
                }
            ) : [])
            .withReceipts(data.receipts ?
                data.receipts.map((item: {[key: string]: any}) => {
                    return MoneyReceipt.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "wallets": this.getWallets() ?
                this.getWallets()!.map((item: MoneyWallet) => {
                    return item.toDict();
                }
            ) : [],
            "receipts": this.getReceipts() ?
                this.getReceipts()!.map((item: MoneyReceipt) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
