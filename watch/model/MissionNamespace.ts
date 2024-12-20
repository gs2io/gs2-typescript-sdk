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
import MissionNamespaceStatistics from './MissionNamespaceStatistics';
import MissionNamespaceIncreaseDistributionStatistics from './MissionNamespaceIncreaseDistributionStatistics';
import MissionNamespaceIncreaseDistributionSegment from './MissionNamespaceIncreaseDistributionSegment';
import MissionNamespaceIncreaseDistribution from './MissionNamespaceIncreaseDistribution';
import MissionNamespaceIncreaseAmountDistributionStatistics from './MissionNamespaceIncreaseAmountDistributionStatistics';
import MissionNamespaceIncreaseAmountDistributionSegment from './MissionNamespaceIncreaseAmountDistributionSegment';
import MissionNamespaceIncreaseAmountDistribution from './MissionNamespaceIncreaseAmountDistribution';
import MissionNamespaceReceiveDistributionStatistics from './MissionNamespaceReceiveDistributionStatistics';
import MissionNamespaceReceiveDistributionSegment from './MissionNamespaceReceiveDistributionSegment';
import MissionNamespaceReceiveDistribution from './MissionNamespaceReceiveDistribution';
import MissionNamespaceDistributions from './MissionNamespaceDistributions';
import MissionMissionGroupModelStatistics from './MissionMissionGroupModelStatistics';
import MissionMissionGroupModelReceiveDistributionStatistics from './MissionMissionGroupModelReceiveDistributionStatistics';
import MissionMissionGroupModelReceiveDistributionSegment from './MissionMissionGroupModelReceiveDistributionSegment';
import MissionMissionGroupModelReceiveDistribution from './MissionMissionGroupModelReceiveDistribution';
import MissionMissionGroupModelDistributions from './MissionMissionGroupModelDistributions';
import MissionMissionGroupModel from './MissionMissionGroupModel';
import MissionCounterCounterDistributionStatistics from './MissionCounterCounterDistributionStatistics';
import MissionCounterCounterDistributionSegment from './MissionCounterCounterDistributionSegment';
import MissionCounterCounterDistribution from './MissionCounterCounterDistribution';
import MissionCounterDistributions from './MissionCounterDistributions';
import MissionCounter from './MissionCounter';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:mission:namespace:{namespaceName}";

export default class MissionNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: Gs2Watch.MissionNamespaceStatistics|null = null;
    private distributions: Gs2Watch.MissionNamespaceDistributions|null = null;
    private missionGroupModels: Gs2Watch.MissionMissionGroupModel[]|null = null;
    private counters: Gs2Watch.MissionCounter[]|null = null;

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
    public getStatistics(): Gs2Watch.MissionNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.MissionNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.MissionNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.MissionNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.MissionNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.MissionNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getMissionGroupModels(): Gs2Watch.MissionMissionGroupModel[]|null {
        return this.missionGroupModels;
    }
    public setMissionGroupModels(missionGroupModels: Gs2Watch.MissionMissionGroupModel[]|null) {
        this.missionGroupModels = missionGroupModels;
        return this;
    }
    public withMissionGroupModels(missionGroupModels: Gs2Watch.MissionMissionGroupModel[]|null): this {
        this.missionGroupModels = missionGroupModels;
        return this;
    }
    public getCounters(): Gs2Watch.MissionCounter[]|null {
        return this.counters;
    }
    public setCounters(counters: Gs2Watch.MissionCounter[]|null) {
        this.counters = counters;
        return this;
    }
    public withCounters(counters: Gs2Watch.MissionCounter[]|null): this {
        this.counters = counters;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.MissionNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.MissionNamespaceDistributions.fromDict(data["distributions"]))
            .withMissionGroupModels(data.missionGroupModels ?
                data.missionGroupModels.map((item: {[key: string]: any}) => {
                    return Gs2Watch.MissionMissionGroupModel.fromDict(item);
                }
            ) : null)
            .withCounters(data.counters ?
                data.counters.map((item: {[key: string]: any}) => {
                    return Gs2Watch.MissionCounter.fromDict(item);
                }
            ) : null);
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
            "missionGroupModels": this.getMissionGroupModels() ?
                this.getMissionGroupModels()!.map((item: Gs2Watch.MissionMissionGroupModel) => {
                    return item.toDict();
                }
            ) : null,
            "counters": this.getCounters() ?
                this.getCounters()!.map((item: Gs2Watch.MissionCounter) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
