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
import LimitCounterStatistics from './LimitCounterStatistics';
import LimitCounterCounterDistributionStatistics from './LimitCounterCounterDistributionStatistics';
import LimitCounterCounterDistributionSegment from './LimitCounterCounterDistributionSegment';
import LimitCounterCounterDistribution from './LimitCounterCounterDistribution';
import LimitCounterDistributions from './LimitCounterDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}:limitModel:{limitName}:counter:{counterName}";

export default class LimitCounter implements IModel {
    private counterId: string|null = null;
    private limitName: string|null = null;
    private counterName: string|null = null;
    private statistics: LimitCounterStatistics|null = null;
    private distributions: LimitCounterDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCounterName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '(.*)')
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
        if (this.getCounterName(grn) == null || this.getCounterName(grn) === '') {
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
        counterName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{limitName}', limitName ?? '')
            .replace('{counterName}', counterName ?? '');
    }
    public getCounterId(): string|null {
        return this.counterId;
    }
    public setCounterId(counterId: string|null) {
        this.counterId = counterId;
        return this;
    }
    public withCounterId(counterId: string|null): this {
        this.counterId = counterId;
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
    public getCounterName(): string|null {
        return this.counterName;
    }
    public setCounterName(counterName: string|null) {
        this.counterName = counterName;
        return this;
    }
    public withCounterName(counterName: string|null): this {
        this.counterName = counterName;
        return this;
    }
    public getStatistics(): LimitCounterStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: LimitCounterStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: LimitCounterStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): LimitCounterDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: LimitCounterDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: LimitCounterDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitCounter|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounter()
            .withCounterId(data["counterId"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withStatistics(LimitCounterStatistics.fromDict(data["statistics"]))
            .withDistributions(LimitCounterDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterId": this.getCounterId(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
