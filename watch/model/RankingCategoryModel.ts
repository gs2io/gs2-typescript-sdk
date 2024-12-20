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
import RankingCategoryModelStatistics from './RankingCategoryModelStatistics';
import RankingCategoryModelScoreDistributionStatistics from './RankingCategoryModelScoreDistributionStatistics';
import RankingCategoryModelScoreDistributionSegment from './RankingCategoryModelScoreDistributionSegment';
import RankingCategoryModelScoreDistribution from './RankingCategoryModelScoreDistribution';
import RankingCategoryModelDistributions from './RankingCategoryModelDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:ranking:namespace:{namespaceName}:categoryModel:{categoryName}";

export default class RankingCategoryModel implements IModel {
    private categoryModelId: string|null = null;
    private categoryName: string|null = null;
    private statistics: Gs2Watch.RankingCategoryModelStatistics|null = null;
    private distributions: Gs2Watch.RankingCategoryModelDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCategoryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '(.*)')
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
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
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
        categoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{categoryName}', categoryName ?? '');
    }
    public getCategoryModelId(): string|null {
        return this.categoryModelId;
    }
    public setCategoryModelId(categoryModelId: string|null) {
        this.categoryModelId = categoryModelId;
        return this;
    }
    public withCategoryModelId(categoryModelId: string|null): this {
        this.categoryModelId = categoryModelId;
        return this;
    }
    public getCategoryName(): string|null {
        return this.categoryName;
    }
    public setCategoryName(categoryName: string|null) {
        this.categoryName = categoryName;
        return this;
    }
    public withCategoryName(categoryName: string|null): this {
        this.categoryName = categoryName;
        return this;
    }
    public getStatistics(): Gs2Watch.RankingCategoryModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.RankingCategoryModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.RankingCategoryModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.RankingCategoryModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.RankingCategoryModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.RankingCategoryModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingCategoryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withCategoryName(data["categoryName"])
            .withStatistics(Gs2Watch.RankingCategoryModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.RankingCategoryModelDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "categoryName": this.getCategoryName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
