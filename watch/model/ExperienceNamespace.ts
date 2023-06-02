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
import ExperienceNamespaceStatistics from './ExperienceNamespaceStatistics';
import ExperienceNamespaceAddExperienceByExperienceDistributionStatistics from './ExperienceNamespaceAddExperienceByExperienceDistributionStatistics';
import ExperienceNamespaceAddExperienceByExperienceDistributionSegment from './ExperienceNamespaceAddExperienceByExperienceDistributionSegment';
import ExperienceNamespaceAddExperienceByExperienceDistribution from './ExperienceNamespaceAddExperienceByExperienceDistribution';
import ExperienceNamespaceAddRankCapByExperienceDistributionStatistics from './ExperienceNamespaceAddRankCapByExperienceDistributionStatistics';
import ExperienceNamespaceAddRankCapByExperienceDistributionSegment from './ExperienceNamespaceAddRankCapByExperienceDistributionSegment';
import ExperienceNamespaceAddRankCapByExperienceDistribution from './ExperienceNamespaceAddRankCapByExperienceDistribution';
import ExperienceNamespaceDistributions from './ExperienceNamespaceDistributions';
import ExperienceExperienceModelStatistics from './ExperienceExperienceModelStatistics';
import ExperienceExperienceModelAddExperienceByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceByUserDistributionSegment from './ExperienceExperienceModelAddExperienceByUserDistributionSegment';
import ExperienceExperienceModelAddExperienceByUserDistribution from './ExperienceExperienceModelAddExperienceByUserDistribution';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment from './ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment';
import ExperienceExperienceModelAddExperienceAmountByUserDistribution from './ExperienceExperienceModelAddExperienceAmountByUserDistribution';
import ExperienceExperienceModelAddRankCapByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapByUserDistributionSegment from './ExperienceExperienceModelAddRankCapByUserDistributionSegment';
import ExperienceExperienceModelAddRankCapByUserDistribution from './ExperienceExperienceModelAddRankCapByUserDistribution';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment from './ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment';
import ExperienceExperienceModelAddRankCapAmountByUserDistribution from './ExperienceExperienceModelAddRankCapAmountByUserDistribution';
import ExperienceExperienceModelDistributions from './ExperienceExperienceModelDistributions';
import ExperienceStatusRankDistributionStatistics from './ExperienceStatusRankDistributionStatistics';
import ExperienceStatusRankDistributionSegment from './ExperienceStatusRankDistributionSegment';
import ExperienceStatusRankDistribution from './ExperienceStatusRankDistribution';
import ExperienceStatusRankCapDistributionStatistics from './ExperienceStatusRankCapDistributionStatistics';
import ExperienceStatusRankCapDistributionSegment from './ExperienceStatusRankCapDistributionSegment';
import ExperienceStatusRankCapDistribution from './ExperienceStatusRankCapDistribution';
import ExperienceStatusDistributions from './ExperienceStatusDistributions';
import ExperienceStatus from './ExperienceStatus';
import ExperienceExperienceModel from './ExperienceExperienceModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:experience:namespace:{namespaceName}";

export default class ExperienceNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: ExperienceNamespaceStatistics|null = null;
    private distributions: ExperienceNamespaceDistributions|null = null;
    private experienceModels: ExperienceExperienceModel[]|null = null;

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
    public getStatistics(): ExperienceNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ExperienceNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ExperienceNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): ExperienceNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: ExperienceNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: ExperienceNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getExperienceModels(): ExperienceExperienceModel[]|null {
        return this.experienceModels;
    }
    public setExperienceModels(experienceModels: ExperienceExperienceModel[]|null) {
        this.experienceModels = experienceModels;
        return this;
    }
    public withExperienceModels(experienceModels: ExperienceExperienceModel[]|null): this {
        this.experienceModels = experienceModels;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(ExperienceNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(ExperienceNamespaceDistributions.fromDict(data["distributions"]))
            .withExperienceModels(data.experienceModels ?
                data.experienceModels.map((item: {[key: string]: any}) => {
                    return ExperienceExperienceModel.fromDict(item);
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
            "experienceModels": this.getExperienceModels() ?
                this.getExperienceModels()!.map((item: ExperienceExperienceModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
