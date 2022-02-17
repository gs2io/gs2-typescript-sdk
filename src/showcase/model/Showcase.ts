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
import { ConsumeAction } from './ConsumeAction';
import { AcquireAction } from './AcquireAction';
import { SalesItem } from './SalesItem';
import { SalesItemGroup } from './SalesItemGroup';
import { DisplayItem } from './DisplayItem';

export class Showcase implements IModel {
    private showcaseId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private salesPeriodEventId: string|null = null;
    private displayItems: DisplayItem[]|null = null;

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

    public getDisplayItems(): DisplayItem[]|null {
        return this.displayItems;
    }

    public setDisplayItems(displayItems: DisplayItem[]|null) {
        this.displayItems = displayItems;
        return this;
    }

    public withDisplayItems(displayItems: DisplayItem[]|null): this {
        this.displayItems = displayItems;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Showcase|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Showcase()
            .withShowcaseId(data["showcaseId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSalesPeriodEventId(data["salesPeriodEventId"])
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return DisplayItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "showcaseId": this.getShowcaseId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: DisplayItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
