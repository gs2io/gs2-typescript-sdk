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
import LotteryNamespaceStatistics from './LotteryNamespaceStatistics';
import LotteryNamespaceDrawDistributionStatistics from './LotteryNamespaceDrawDistributionStatistics';
import LotteryNamespaceDrawDistributionSegment from './LotteryNamespaceDrawDistributionSegment';
import LotteryNamespaceDrawDistribution from './LotteryNamespaceDrawDistribution';
import LotteryNamespaceDrawAmountDistributionStatistics from './LotteryNamespaceDrawAmountDistributionStatistics';
import LotteryNamespaceDrawAmountDistributionSegment from './LotteryNamespaceDrawAmountDistributionSegment';
import LotteryNamespaceDrawAmountDistribution from './LotteryNamespaceDrawAmountDistribution';
import LotteryNamespaceDrawByUserDistributionStatistics from './LotteryNamespaceDrawByUserDistributionStatistics';
import LotteryNamespaceDrawByUserDistributionSegment from './LotteryNamespaceDrawByUserDistributionSegment';
import LotteryNamespaceDrawByUserDistribution from './LotteryNamespaceDrawByUserDistribution';
import LotteryNamespaceDrawAmountByUserDistributionStatistics from './LotteryNamespaceDrawAmountByUserDistributionStatistics';
import LotteryNamespaceDrawAmountByUserDistributionSegment from './LotteryNamespaceDrawAmountByUserDistributionSegment';
import LotteryNamespaceDrawAmountByUserDistribution from './LotteryNamespaceDrawAmountByUserDistribution';
import LotteryNamespaceDistributions from './LotteryNamespaceDistributions';
import LotteryLotteryStatistics from './LotteryLotteryStatistics';
import LotteryLotteryDrawResultDistributionStatistics from './LotteryLotteryDrawResultDistributionStatistics';
import LotteryLotteryDrawResultDistributionSegment from './LotteryLotteryDrawResultDistributionSegment';
import LotteryLotteryDrawResultDistribution from './LotteryLotteryDrawResultDistribution';
import LotteryLotteryDistributions from './LotteryLotteryDistributions';
import LotteryLottery from './LotteryLottery';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:lottery:namespace:{namespaceName}";

export default class LotteryNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: LotteryNamespaceStatistics|null = null;
    private distributions: LotteryNamespaceDistributions|null = null;
    private lotteries: LotteryLottery[]|null = null;

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
    public getStatistics(): LotteryNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: LotteryNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: LotteryNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): LotteryNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: LotteryNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: LotteryNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getLotteries(): LotteryLottery[]|null {
        return this.lotteries;
    }
    public setLotteries(lotteries: LotteryLottery[]|null) {
        this.lotteries = lotteries;
        return this;
    }
    public withLotteries(lotteries: LotteryLottery[]|null): this {
        this.lotteries = lotteries;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(LotteryNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(LotteryNamespaceDistributions.fromDict(data["distributions"]))
            .withLotteries(data.lotteries ?
                data.lotteries.map((item: {[key: string]: any}) => {
                    return LotteryLottery.fromDict(item);
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
            "lotteries": this.getLotteries() ?
                this.getLotteries()!.map((item: LotteryLottery) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
