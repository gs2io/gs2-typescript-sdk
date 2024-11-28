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

import * as Gs2Ranking from '../../ranking/model'
import FixedTiming from './FixedTiming';
import Scope from './Scope';
import GlobalRankingSetting from './GlobalRankingSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:categoryModel:{categoryName}";

export default class CategoryModel implements IModel {
    private categoryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private minimumValue: number|null = null;
    private maximumValue: number|null = null;
    private sum: boolean|null = null;
    private orderDirection: string|null = null;
    private scope: string|null = null;
    private globalRankingSetting: Gs2Ranking.GlobalRankingSetting|null = null;
    private entryPeriodEventId: string|null = null;
    private accessPeriodEventId: string|null = null;
    private uniqueByUserId: boolean|null = null;
    private calculateFixedTimingHour: number|null = null;
    private calculateFixedTimingMinute: number|null = null;
    private calculateIntervalMinutes: number|null = null;
    private additionalScopes: Gs2Ranking.Scope[]|null = null;
    private ignoreUserIds: string[]|null = null;
    private generation: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
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
        namespaceName: string|null,
        categoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
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
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getMinimumValue(): number|null {
        return this.minimumValue;
    }
    public setMinimumValue(minimumValue: number|null) {
        this.minimumValue = minimumValue;
        return this;
    }
    public withMinimumValue(minimumValue: number|null): this {
        this.minimumValue = minimumValue;
        return this;
    }
    public getMaximumValue(): number|null {
        return this.maximumValue;
    }
    public setMaximumValue(maximumValue: number|null) {
        this.maximumValue = maximumValue;
        return this;
    }
    public withMaximumValue(maximumValue: number|null): this {
        this.maximumValue = maximumValue;
        return this;
    }
    public getSum(): boolean|null {
        return this.sum;
    }
    public setSum(sum: boolean|null) {
        this.sum = sum;
        return this;
    }
    public withSum(sum: boolean|null): this {
        this.sum = sum;
        return this;
    }
    public getOrderDirection(): string|null {
        return this.orderDirection;
    }
    public setOrderDirection(orderDirection: string|null) {
        this.orderDirection = orderDirection;
        return this;
    }
    public withOrderDirection(orderDirection: string|null): this {
        this.orderDirection = orderDirection;
        return this;
    }
    public getScope(): string|null {
        return this.scope;
    }
    public setScope(scope: string|null) {
        this.scope = scope;
        return this;
    }
    public withScope(scope: string|null): this {
        this.scope = scope;
        return this;
    }
    public getGlobalRankingSetting(): Gs2Ranking.GlobalRankingSetting|null {
        return this.globalRankingSetting;
    }
    public setGlobalRankingSetting(globalRankingSetting: Gs2Ranking.GlobalRankingSetting|null) {
        this.globalRankingSetting = globalRankingSetting;
        return this;
    }
    public withGlobalRankingSetting(globalRankingSetting: Gs2Ranking.GlobalRankingSetting|null): this {
        this.globalRankingSetting = globalRankingSetting;
        return this;
    }
    public getEntryPeriodEventId(): string|null {
        return this.entryPeriodEventId;
    }
    public setEntryPeriodEventId(entryPeriodEventId: string|null) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public withEntryPeriodEventId(entryPeriodEventId: string|null): this {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public getAccessPeriodEventId(): string|null {
        return this.accessPeriodEventId;
    }
    public setAccessPeriodEventId(accessPeriodEventId: string|null) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }
    public withAccessPeriodEventId(accessPeriodEventId: string|null): this {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }
    /** @deprecated */
    public getUniqueByUserId(): boolean|null {
        return this.uniqueByUserId;
    }
    /** @deprecated */
    public setUniqueByUserId(uniqueByUserId: boolean|null) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }
    /** @deprecated */
    public withUniqueByUserId(uniqueByUserId: boolean|null): this {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }
    /** @deprecated */
    public getCalculateFixedTimingHour(): number|null {
        return this.calculateFixedTimingHour;
    }
    /** @deprecated */
    public setCalculateFixedTimingHour(calculateFixedTimingHour: number|null) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    }
    /** @deprecated */
    public withCalculateFixedTimingHour(calculateFixedTimingHour: number|null): this {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    }
    /** @deprecated */
    public getCalculateFixedTimingMinute(): number|null {
        return this.calculateFixedTimingMinute;
    }
    /** @deprecated */
    public setCalculateFixedTimingMinute(calculateFixedTimingMinute: number|null) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    }
    /** @deprecated */
    public withCalculateFixedTimingMinute(calculateFixedTimingMinute: number|null): this {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    }
    /** @deprecated */
    public getCalculateIntervalMinutes(): number|null {
        return this.calculateIntervalMinutes;
    }
    /** @deprecated */
    public setCalculateIntervalMinutes(calculateIntervalMinutes: number|null) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    }
    /** @deprecated */
    public withCalculateIntervalMinutes(calculateIntervalMinutes: number|null): this {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    }
    /** @deprecated */
    public getAdditionalScopes(): Gs2Ranking.Scope[]|null {
        return this.additionalScopes;
    }
    /** @deprecated */
    public setAdditionalScopes(additionalScopes: Gs2Ranking.Scope[]|null) {
        this.additionalScopes = additionalScopes;
        return this;
    }
    /** @deprecated */
    public withAdditionalScopes(additionalScopes: Gs2Ranking.Scope[]|null): this {
        this.additionalScopes = additionalScopes;
        return this;
    }
    /** @deprecated */
    public getIgnoreUserIds(): string[]|null {
        return this.ignoreUserIds;
    }
    /** @deprecated */
    public setIgnoreUserIds(ignoreUserIds: string[]|null) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    }
    /** @deprecated */
    public withIgnoreUserIds(ignoreUserIds: string[]|null): this {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    }
    /** @deprecated */
    public getGeneration(): string|null {
        return this.generation;
    }
    /** @deprecated */
    public setGeneration(generation: string|null) {
        this.generation = generation;
        return this;
    }
    /** @deprecated */
    public withGeneration(generation: string|null): this {
        this.generation = generation;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CategoryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withScope(data["scope"])
            .withGlobalRankingSetting(Gs2Ranking.GlobalRankingSetting.fromDict(data["globalRankingSetting"]))
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateFixedTimingHour(data["calculateFixedTimingHour"])
            .withCalculateFixedTimingMinute(data["calculateFixedTimingMinute"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withAdditionalScopes(data.additionalScopes ?
                data.additionalScopes.map((item: {[key: string]: any}) => {
                    return Gs2Ranking.Scope.fromDict(item);
                }
            ) : null)
            .withIgnoreUserIds(data.ignoreUserIds ?
                data.ignoreUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withGeneration(data["generation"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "scope": this.getScope(),
            "globalRankingSetting": this.getGlobalRankingSetting()?.toDict(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateFixedTimingHour": this.getCalculateFixedTimingHour(),
            "calculateFixedTimingMinute": this.getCalculateFixedTimingMinute(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "additionalScopes": this.getAdditionalScopes() ?
                this.getAdditionalScopes()!.map((item: Gs2Ranking.Scope) => {
                    return item.toDict();
                }
            ) : null,
            "ignoreUserIds": this.getIgnoreUserIds() ?
                this.getIgnoreUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "generation": this.getGeneration(),
        };
    }
}
