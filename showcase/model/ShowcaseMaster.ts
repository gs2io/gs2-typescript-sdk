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
import DisplayItemMaster from './DisplayItemMaster';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}";

export default class ShowcaseMaster implements IModel {
    private showcaseId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private salesPeriodEventId: string|null = null;
    private displayItems: DisplayItemMaster[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getShowcaseName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '(.*)')
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
        if (this.getShowcaseName(grn) == null || this.getShowcaseName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        showcaseName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{showcaseName}', showcaseName ?? '');
    }
    public getShowcaseId(): string|null {
        return this.showcaseId;
    }
    public setShowcaseId(showcaseId: string|null) {
        this.showcaseId = showcaseId;
        return this;
    }
    public withShowcaseId(showcaseId: string|null): this {
        this.showcaseId = showcaseId;
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
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
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
    public getSalesPeriodEventId(): string|null {
        return this.salesPeriodEventId;
    }
    public setSalesPeriodEventId(salesPeriodEventId: string|null) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    }
    public withSalesPeriodEventId(salesPeriodEventId: string|null): this {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    }
    public getDisplayItems(): DisplayItemMaster[]|null {
        return this.displayItems;
    }
    public setDisplayItems(displayItems: DisplayItemMaster[]|null) {
        this.displayItems = displayItems;
        return this;
    }
    public withDisplayItems(displayItems: DisplayItemMaster[]|null): this {
        this.displayItems = displayItems;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseMaster()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return DisplayItemMaster.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "showcaseId": this.getShowcaseId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: DisplayItemMaster) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
