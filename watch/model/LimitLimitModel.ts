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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}:limitModel:{limitName}";

export default class LimitLimitModel implements IModel {
    private limitModelId: string|null = null;
    private limitName: string|null = null;
    private statistics: Gs2Watch.LimitLimitModelStatistics|null = null;
    private distributions: Gs2Watch.LimitLimitModelDistributions|null = null;
    private counters: Gs2Watch.LimitCounter[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getLimitName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '(.*)')
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
        if (this.getLimitName(grn) == null || this.getLimitName(grn) === '') {
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
        limitName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{limitName}', limitName ?? '');
    }
    public getLimitModelId(): string|null {
        return this.limitModelId;
    }
    public setLimitModelId(limitModelId: string|null) {
        this.limitModelId = limitModelId;
        return this;
    }
    public withLimitModelId(limitModelId: string|null): this {
        this.limitModelId = limitModelId;
        return this;
    }
    public getLimitName(): string|null {
        return this.limitName;
    }
    public setLimitName(limitName: string|null) {
        this.limitName = limitName;
        return this;
    }
    public withLimitName(limitName: string|null): this {
        this.limitName = limitName;
        return this;
    }
    public getStatistics(): Gs2Watch.LimitLimitModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.LimitLimitModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.LimitLimitModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.LimitLimitModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.LimitLimitModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.LimitLimitModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getCounters(): Gs2Watch.LimitCounter[]|null {
        return this.counters;
    }
    public setCounters(counters: Gs2Watch.LimitCounter[]|null) {
        this.counters = counters;
        return this;
    }
    public withCounters(counters: Gs2Watch.LimitCounter[]|null): this {
        this.counters = counters;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitLimitModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModel()
            .withLimitModelId(data["limitModelId"])
            .withLimitName(data["limitName"])
            .withStatistics(Gs2Watch.LimitLimitModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.LimitLimitModelDistributions.fromDict(data["distributions"]))
            .withCounters(data.counters ?
                data.counters.map((item: {[key: string]: any}) => {
                    return Gs2Watch.LimitCounter.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "limitModelId": this.getLimitModelId(),
            "limitName": this.getLimitName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "counters": this.getCounters() ?
                this.getCounters()!.map((item: Gs2Watch.LimitCounter) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
