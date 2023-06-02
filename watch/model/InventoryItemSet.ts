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
import InventoryItemSetStatistics from './InventoryItemSetStatistics';
import InventoryItemSetCountDistributionStatistics from './InventoryItemSetCountDistributionStatistics';
import InventoryItemSetCountDistributionSegment from './InventoryItemSetCountDistributionSegment';
import InventoryItemSetCountDistribution from './InventoryItemSetCountDistribution';
import InventoryItemSetDistributions from './InventoryItemSetDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:inventory:namespace:{namespaceName}:inventory:{inventoryName}:itemSet:{itemSetName}:{itemName}";

export default class InventoryItemSet implements IModel {
    private itemSetId: string|null = null;
    private itemName: string|null = null;
    private itemSetName: string|null = null;
    private statistics: InventoryItemSetStatistics|null = null;
    private distributions: InventoryItemSetDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
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
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getItemSetName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '(.*)')
            .replace('{itemName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getItemName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemSetName}', '.*')
            .replace('{itemName}', '(.*)')
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
        if (this.getItemSetName(grn) == null || this.getItemSetName(grn) === '') {
            return false;
        }
        if (this.getItemName(grn) == null || this.getItemName(grn) === '') {
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
        itemSetName: string|null,
        itemName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{inventoryName}', inventoryName ?? '')
            .replace('{itemSetName}', itemSetName ?? '')
            .replace('{itemName}', itemName ?? '');
    }
    public getItemSetId(): string|null {
        return this.itemSetId;
    }
    public setItemSetId(itemSetId: string|null) {
        this.itemSetId = itemSetId;
        return this;
    }
    public withItemSetId(itemSetId: string|null): this {
        this.itemSetId = itemSetId;
        return this;
    }
    public getItemName(): string|null {
        return this.itemName;
    }
    public setItemName(itemName: string|null) {
        this.itemName = itemName;
        return this;
    }
    public withItemName(itemName: string|null): this {
        this.itemName = itemName;
        return this;
    }
    public getItemSetName(): string|null {
        return this.itemSetName;
    }
    public setItemSetName(itemSetName: string|null) {
        this.itemSetName = itemSetName;
        return this;
    }
    public withItemSetName(itemSetName: string|null): this {
        this.itemSetName = itemSetName;
        return this;
    }
    public getStatistics(): InventoryItemSetStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: InventoryItemSetStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: InventoryItemSetStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): InventoryItemSetDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: InventoryItemSetDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: InventoryItemSetDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryItemSet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryItemSet()
            .withItemSetId(data["itemSetId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withStatistics(InventoryItemSetStatistics.fromDict(data["statistics"]))
            .withDistributions(InventoryItemSetDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "itemSetId": this.getItemSetId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
