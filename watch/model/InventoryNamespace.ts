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
import InventoryNamespaceStatistics from './InventoryNamespaceStatistics';
import InventoryNamespaceAcquireDistributionStatistics from './InventoryNamespaceAcquireDistributionStatistics';
import InventoryNamespaceAcquireDistributionSegment from './InventoryNamespaceAcquireDistributionSegment';
import InventoryNamespaceAcquireDistribution from './InventoryNamespaceAcquireDistribution';
import InventoryNamespaceAcquireAmountDistributionStatistics from './InventoryNamespaceAcquireAmountDistributionStatistics';
import InventoryNamespaceAcquireAmountDistributionSegment from './InventoryNamespaceAcquireAmountDistributionSegment';
import InventoryNamespaceAcquireAmountDistribution from './InventoryNamespaceAcquireAmountDistribution';
import InventoryNamespaceConsumeDistributionStatistics from './InventoryNamespaceConsumeDistributionStatistics';
import InventoryNamespaceConsumeDistributionSegment from './InventoryNamespaceConsumeDistributionSegment';
import InventoryNamespaceConsumeDistribution from './InventoryNamespaceConsumeDistribution';
import InventoryNamespaceConsumeAmountDistributionStatistics from './InventoryNamespaceConsumeAmountDistributionStatistics';
import InventoryNamespaceConsumeAmountDistributionSegment from './InventoryNamespaceConsumeAmountDistributionSegment';
import InventoryNamespaceConsumeAmountDistribution from './InventoryNamespaceConsumeAmountDistribution';
import InventoryNamespaceIncreaseCapacityDistributionStatistics from './InventoryNamespaceIncreaseCapacityDistributionStatistics';
import InventoryNamespaceIncreaseCapacityDistributionSegment from './InventoryNamespaceIncreaseCapacityDistributionSegment';
import InventoryNamespaceIncreaseCapacityDistribution from './InventoryNamespaceIncreaseCapacityDistribution';
import InventoryNamespaceIncreaseCapacityAmountDistributionStatistics from './InventoryNamespaceIncreaseCapacityAmountDistributionStatistics';
import InventoryNamespaceIncreaseCapacityAmountDistributionSegment from './InventoryNamespaceIncreaseCapacityAmountDistributionSegment';
import InventoryNamespaceIncreaseCapacityAmountDistribution from './InventoryNamespaceIncreaseCapacityAmountDistribution';
import InventoryNamespaceDistributions from './InventoryNamespaceDistributions';
import InventoryInventoryStatistics from './InventoryInventoryStatistics';
import InventoryInventoryCapacityDistributionStatistics from './InventoryInventoryCapacityDistributionStatistics';
import InventoryInventoryCapacityDistributionSegment from './InventoryInventoryCapacityDistributionSegment';
import InventoryInventoryCapacityDistribution from './InventoryInventoryCapacityDistribution';
import InventoryInventoryAcquireDistributionStatistics from './InventoryInventoryAcquireDistributionStatistics';
import InventoryInventoryAcquireDistributionSegment from './InventoryInventoryAcquireDistributionSegment';
import InventoryInventoryAcquireDistribution from './InventoryInventoryAcquireDistribution';
import InventoryInventoryAcquireAmountDistributionStatistics from './InventoryInventoryAcquireAmountDistributionStatistics';
import InventoryInventoryAcquireAmountDistributionSegment from './InventoryInventoryAcquireAmountDistributionSegment';
import InventoryInventoryAcquireAmountDistribution from './InventoryInventoryAcquireAmountDistribution';
import InventoryInventoryConsumeDistributionStatistics from './InventoryInventoryConsumeDistributionStatistics';
import InventoryInventoryConsumeDistributionSegment from './InventoryInventoryConsumeDistributionSegment';
import InventoryInventoryConsumeDistribution from './InventoryInventoryConsumeDistribution';
import InventoryInventoryConsumeAmountDistributionStatistics from './InventoryInventoryConsumeAmountDistributionStatistics';
import InventoryInventoryConsumeAmountDistributionSegment from './InventoryInventoryConsumeAmountDistributionSegment';
import InventoryInventoryConsumeAmountDistribution from './InventoryInventoryConsumeAmountDistribution';
import InventoryInventoryDistributions from './InventoryInventoryDistributions';
import InventoryItemSetStatistics from './InventoryItemSetStatistics';
import InventoryItemSetCountDistributionStatistics from './InventoryItemSetCountDistributionStatistics';
import InventoryItemSetCountDistributionSegment from './InventoryItemSetCountDistributionSegment';
import InventoryItemSetCountDistribution from './InventoryItemSetCountDistribution';
import InventoryItemSetDistributions from './InventoryItemSetDistributions';
import InventoryItemSet from './InventoryItemSet';
import InventoryInventory from './InventoryInventory';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:inventory:namespace:{namespaceName}";

export default class InventoryNamespace implements IModel {
    private namespaceId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private namespaceName: string|null = null;
    private statistics: Gs2Watch.InventoryNamespaceStatistics|null = null;
    private distributions: Gs2Watch.InventoryNamespaceDistributions|null = null;
    private inventories: Gs2Watch.InventoryInventory[]|null = null;

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
    public getStatistics(): Gs2Watch.InventoryNamespaceStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.InventoryNamespaceStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.InventoryNamespaceStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.InventoryNamespaceDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.InventoryNamespaceDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.InventoryNamespaceDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getInventories(): Gs2Watch.InventoryInventory[]|null {
        return this.inventories;
    }
    public setInventories(inventories: Gs2Watch.InventoryInventory[]|null) {
        this.inventories = inventories;
        return this;
    }
    public withInventories(inventories: Gs2Watch.InventoryInventory[]|null): this {
        this.inventories = inventories;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.InventoryNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.InventoryNamespaceDistributions.fromDict(data["distributions"]))
            .withInventories(data.inventories ?
                data.inventories.map((item: {[key: string]: any}) => {
                    return Gs2Watch.InventoryInventory.fromDict(item);
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
            "inventories": this.getInventories() ?
                this.getInventories()!.map((item: Gs2Watch.InventoryInventory) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
