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
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
import RandomDisplayItemModel from './RandomDisplayItemModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:random:showcase:{showcaseName}";

export default class RandomShowcase implements IModel {
    private randomShowcaseId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private maximumNumberOfChoice: number|null = null;
    private displayItems: RandomDisplayItemModel[]|null = null;
    private baseTimestamp: number|null = null;
    private resetIntervalHours: number|null = null;
    private salesPeriodEventId: string|null = null;

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
    public getRandomShowcaseId(): string|null {
        return this.randomShowcaseId;
    }
    public setRandomShowcaseId(randomShowcaseId: string|null) {
        this.randomShowcaseId = randomShowcaseId;
        return this;
    }
    public withRandomShowcaseId(randomShowcaseId: string|null): this {
        this.randomShowcaseId = randomShowcaseId;
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
    public getDisplayItems(): RandomDisplayItemModel[]|null {
        return this.displayItems;
    }
    public setDisplayItems(displayItems: RandomDisplayItemModel[]|null) {
        this.displayItems = displayItems;
        return this;
    }
    public withDisplayItems(displayItems: RandomDisplayItemModel[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): RandomShowcase|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomShowcase()
            .withRandomShowcaseId(data["randomShowcaseId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMaximumNumberOfChoice(data["maximumNumberOfChoice"])
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return RandomDisplayItemModel.fromDict(item);
                }
            ) : [])
            .withBaseTimestamp(data["baseTimestamp"])
            .withResetIntervalHours(data["resetIntervalHours"])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "randomShowcaseId": this.getRandomShowcaseId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "maximumNumberOfChoice": this.getMaximumNumberOfChoice(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: RandomDisplayItemModel) => {
                    return item.toDict();
                }
            ) : [],
            "baseTimestamp": this.getBaseTimestamp(),
            "resetIntervalHours": this.getResetIntervalHours(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    }
}
