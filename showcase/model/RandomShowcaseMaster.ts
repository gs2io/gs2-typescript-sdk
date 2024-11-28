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

import * as Gs2Showcase from '../../showcase/model'
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
import RandomDisplayItemModel from './RandomDisplayItemModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:random:showcase:{showcaseName}";

export default class RandomShowcaseMaster implements IModel {
    private showcaseId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private maximumNumberOfChoice: number|null = null;
    private displayItems: Gs2Showcase.RandomDisplayItemModel[]|null = null;
    private baseTimestamp: number|null = null;
    private resetIntervalHours: number|null = null;
    private salesPeriodEventId: string|null = null;
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
    public getMaximumNumberOfChoice(): number|null {
        return this.maximumNumberOfChoice;
    }
    public setMaximumNumberOfChoice(maximumNumberOfChoice: number|null) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    }
    public withMaximumNumberOfChoice(maximumNumberOfChoice: number|null): this {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    }
    public getDisplayItems(): Gs2Showcase.RandomDisplayItemModel[]|null {
        return this.displayItems;
    }
    public setDisplayItems(displayItems: Gs2Showcase.RandomDisplayItemModel[]|null) {
        this.displayItems = displayItems;
        return this;
    }
    public withDisplayItems(displayItems: Gs2Showcase.RandomDisplayItemModel[]|null): this {
        this.displayItems = displayItems;
        return this;
    }
    public getBaseTimestamp(): number|null {
        return this.baseTimestamp;
    }
    public setBaseTimestamp(baseTimestamp: number|null) {
        this.baseTimestamp = baseTimestamp;
        return this;
    }
    public withBaseTimestamp(baseTimestamp: number|null): this {
        this.baseTimestamp = baseTimestamp;
        return this;
    }
    public getResetIntervalHours(): number|null {
        return this.resetIntervalHours;
    }
    public setResetIntervalHours(resetIntervalHours: number|null) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    }
    public withResetIntervalHours(resetIntervalHours: number|null): this {
        this.resetIntervalHours = resetIntervalHours;
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

    public static fromDict(data: {[key: string]: any}): RandomShowcaseMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomShowcaseMaster()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMaximumNumberOfChoice(data["maximumNumberOfChoice"])
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.RandomDisplayItemModel.fromDict(item);
                }
            ) : null)
            .withBaseTimestamp(data["baseTimestamp"])
            .withResetIntervalHours(data["resetIntervalHours"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
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
            "maximumNumberOfChoice": this.getMaximumNumberOfChoice(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: Gs2Showcase.RandomDisplayItemModel) => {
                    return item.toDict();
                }
            ) : null,
            "baseTimestamp": this.getBaseTimestamp(),
            "resetIntervalHours": this.getResetIntervalHours(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
