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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:inventory:namespace:{namespaceName}:inventory:{inventoryName}";

export default class InventoryInventory implements IModel {
    private inventoryId: string|null = null;
    private inventoryName: string|null = null;
    private statistics: InventoryInventoryStatistics|null = null;
    private distributions: InventoryInventoryDistributions|null = null;
    private itemSets: InventoryItemSet[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
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
            .replace('{inventoryName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getInventoryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)')
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
        if (this.getInventoryName(grn) == null || this.getInventoryName(grn) === '') {
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
        inventoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{inventoryName}', inventoryName ?? '');
    }
    public getInventoryId(): string|null {
        return this.inventoryId;
    }
    public setInventoryId(inventoryId: string|null) {
        this.inventoryId = inventoryId;
        return this;
    }
    public withInventoryId(inventoryId: string|null): this {
        this.inventoryId = inventoryId;
        return this;
    }
    public getInventoryName(): string|null {
        return this.inventoryName;
    }
    public setInventoryName(inventoryName: string|null) {
        this.inventoryName = inventoryName;
        return this;
    }
    public withInventoryName(inventoryName: string|null): this {
        this.inventoryName = inventoryName;
        return this;
    }
    public getStatistics(): InventoryInventoryStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: InventoryInventoryStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: InventoryInventoryStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): InventoryInventoryDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: InventoryInventoryDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: InventoryInventoryDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getItemSets(): InventoryItemSet[]|null {
        return this.itemSets;
    }
    public setItemSets(itemSets: InventoryItemSet[]|null) {
        this.itemSets = itemSets;
        return this;
    }
    public withItemSets(itemSets: InventoryItemSet[]|null): this {
        this.itemSets = itemSets;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryInventory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withStatistics(InventoryInventoryStatistics.fromDict(data["statistics"]))
            .withDistributions(InventoryInventoryDistributions.fromDict(data["distributions"]))
            .withItemSets(data.itemSets ?
                data.itemSets.map((item: {[key: string]: any}) => {
                    return InventoryItemSet.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "itemSets": this.getItemSets() ?
                this.getItemSets()!.map((item: InventoryItemSet) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
