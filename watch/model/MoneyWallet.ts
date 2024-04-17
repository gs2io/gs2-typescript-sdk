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
import MoneyWalletStatistics from './MoneyWalletStatistics';
import MoneyWalletFreeDistributionStatistics from './MoneyWalletFreeDistributionStatistics';
import MoneyWalletFreeDistributionSegment from './MoneyWalletFreeDistributionSegment';
import MoneyWalletFreeDistribution from './MoneyWalletFreeDistribution';
import MoneyWalletPaidDistributionStatistics from './MoneyWalletPaidDistributionStatistics';
import MoneyWalletPaidDistributionSegment from './MoneyWalletPaidDistributionSegment';
import MoneyWalletPaidDistribution from './MoneyWalletPaidDistribution';
import MoneyWalletDistributions from './MoneyWalletDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:money:namespace:{namespaceName}:receipt:{contentsId}:wallet:{slot}";

export default class MoneyWallet implements IModel {
    private walletId: string|null = null;
    private slot: number|null = null;
    private statistics: MoneyWalletStatistics|null = null;
    private distributions: MoneyWalletDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getContentsId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '(.*)')
            .replace('{slot}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSlot(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '(.*)')
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
        if (this.getContentsId(grn) == null || this.getContentsId(grn) === '') {
            return false;
        }
        if (this.getSlot(grn) == null || this.getSlot(grn) === '') {
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
        contentsId: string|null,
        slot: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{contentsId}', contentsId ?? '')
            .replace('{slot}', slot ?? '');
    }
    public getWalletId(): string|null {
        return this.walletId;
    }
    public setWalletId(walletId: string|null) {
        this.walletId = walletId;
        return this;
    }
    public withWalletId(walletId: string|null): this {
        this.walletId = walletId;
        return this;
    }
    public getSlot(): number|null {
        return this.slot;
    }
    public setSlot(slot: number|null) {
        this.slot = slot;
        return this;
    }
    public withSlot(slot: number|null): this {
        this.slot = slot;
        return this;
    }
    public getStatistics(): MoneyWalletStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MoneyWalletStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MoneyWalletStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): MoneyWalletDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: MoneyWalletDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: MoneyWalletDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyWallet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWallet()
            .withWalletId(data["walletId"])
            .withSlot(data["slot"])
            .withStatistics(MoneyWalletStatistics.fromDict(data["statistics"]))
            .withDistributions(MoneyWalletDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "walletId": this.getWalletId(),
            "slot": this.getSlot(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
