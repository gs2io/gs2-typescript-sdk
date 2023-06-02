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
import LimitNamespaceStatistics from './LimitNamespaceStatistics';
import LimitNamespaceIncreaseDistributionStatistics from './LimitNamespaceIncreaseDistributionStatistics';
import LimitNamespaceIncreaseDistributionSegment from './LimitNamespaceIncreaseDistributionSegment';
import LimitNamespaceIncreaseDistribution from './LimitNamespaceIncreaseDistribution';
import LimitNamespaceDistributions from './LimitNamespaceDistributions';
import LimitLimitModelStatistics from './LimitLimitModelStatistics';
import LimitLimitModelIncreaseDistributionStatistics from './LimitLimitModelIncreaseDistributionStatistics';
import LimitLimitModelIncreaseDistributionSegment from './LimitLimitModelIncreaseDistributionSegment';
import LimitLimitModelIncreaseDistribution from './LimitLimitModelIncreaseDistribution';
import LimitLimitModelIncreaseAmountDistributionStatistics from './LimitLimitModelIncreaseAmountDistributionStatistics';
import LimitLimitModelIncreaseAmountDistributionSegment from './LimitLimitModelIncreaseAmountDistributionSegment';
import LimitLimitModelIncreaseAmountDistribution from './LimitLimitModelIncreaseAmountDistribution';
import LimitLimitModelIncreaseByUserDistributionStatistics from './LimitLimitModelIncreaseByUserDistributionStatistics';
import LimitLimitModelIncreaseByUserDistributionSegment from './LimitLimitModelIncreaseByUserDistributionSegment';
import LimitLimitModelIncreaseByUserDistribution from './LimitLimitModelIncreaseByUserDistribution';
import LimitLimitModelIncreaseAmountByUserDistributionStatistics from './LimitLimitModelIncreaseAmountByUserDistributionStatistics';
import LimitLimitModelIncreaseAmountByUserDistributionSegment from './LimitLimitModelIncreaseAmountByUserDistributionSegment';
import LimitLimitModelIncreaseAmountByUserDistribution from './LimitLimitModelIncreaseAmountByUserDistribution';
import LimitLimitModelDistributions from './LimitLimitModelDistributions';
import LimitCounterStatistics from './LimitCounterStatistics';
import LimitCounterCounterDistributionStatistics from './LimitCounterCounterDistributionStatistics';
import LimitCounterCounterDistributionSegment from './LimitCounterCounterDistributionSegment';
import LimitCounterCounterDistribution from './LimitCounterCounterDistribution';
import LimitCounterDistributions from './LimitCounterDistributions';
import LimitCounter from './LimitCounter';
import LimitLimitModel from './LimitLimitModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}";

export default class LimitNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: LimitNamespaceStatistics|null = null;
    private distributions: LimitNamespaceDistributions|null = null;
    private limitModels: LimitLimitModel[]|null = null;

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
    public getStatistics(): LimitNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: LimitNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: LimitNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): LimitNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: LimitNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: LimitNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getLimitModels(): LimitLimitModel[]|null {
        return this.limitModels;
    }
    public setLimitModels(limitModels: LimitLimitModel[]|null) {
        this.limitModels = limitModels;
        return this;
    }
    public withLimitModels(limitModels: LimitLimitModel[]|null): this {
        this.limitModels = limitModels;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(LimitNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(LimitNamespaceDistributions.fromDict(data["distributions"]))
            .withLimitModels(data.limitModels ?
                data.limitModels.map((item: {[key: string]: any}) => {
                    return LimitLimitModel.fromDict(item);
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
            "limitModels": this.getLimitModels() ?
                this.getLimitModels()!.map((item: LimitLimitModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
