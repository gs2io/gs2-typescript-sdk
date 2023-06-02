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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:experience:namespace:{namespaceName}:experienceModel:{experienceName}";

export default class ExperienceExperienceModel implements IModel {
    private experienceModelId: string|null = null;
    private experienceName: string|null = null;
    private statistics: ExperienceExperienceModelStatistics|null = null;
    private distributions: ExperienceExperienceModelDistributions|null = null;
    private statuses: ExperienceStatus[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
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
            .replace('{experienceName}', '.*')
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
            .replace('{experienceName}', '.*')
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
            .replace('{experienceName}', '.*')
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
            .replace('{experienceName}', '.*')
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
            .replace('{experienceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getExperienceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '(.*)')
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
        if (this.getExperienceName(grn) == null || this.getExperienceName(grn) === '') {
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
        experienceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{experienceName}', experienceName ?? '');
    }
    public getExperienceModelId(): string|null {
        return this.experienceModelId;
    }
    public setExperienceModelId(experienceModelId: string|null) {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public withExperienceModelId(experienceModelId: string|null): this {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public getExperienceName(): string|null {
        return this.experienceName;
    }
    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }
    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
        return this;
    }
    public getStatistics(): ExperienceExperienceModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ExperienceExperienceModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ExperienceExperienceModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): ExperienceExperienceModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: ExperienceExperienceModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: ExperienceExperienceModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getStatuses(): ExperienceStatus[]|null {
        return this.statuses;
    }
    public setStatuses(statuses: ExperienceStatus[]|null) {
        this.statuses = statuses;
        return this;
    }
    public withStatuses(statuses: ExperienceStatus[]|null): this {
        this.statuses = statuses;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperienceModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModel()
            .withExperienceModelId(data["experienceModelId"])
            .withExperienceName(data["experienceName"])
            .withStatistics(ExperienceExperienceModelStatistics.fromDict(data["statistics"]))
            .withDistributions(ExperienceExperienceModelDistributions.fromDict(data["distributions"]))
            .withStatuses(data.statuses ?
                data.statuses.map((item: {[key: string]: any}) => {
                    return ExperienceStatus.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "experienceModelId": this.getExperienceModelId(),
            "experienceName": this.getExperienceName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "statuses": this.getStatuses() ?
                this.getStatuses()!.map((item: ExperienceStatus) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
