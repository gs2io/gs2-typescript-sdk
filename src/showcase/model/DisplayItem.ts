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

import IModel from '@/gs2/core/interface/IModel';
import { ConsumeAction } from './ConsumeAction';
import { AcquireAction } from './AcquireAction';
import { SalesItem } from './SalesItem';
import { SalesItemGroup } from './SalesItemGroup';

export class DisplayItem implements IModel {
    private displayItemId: string|null = null;
    private type: string|null = null;
    private salesItem: SalesItem|null = null;
    private salesItemGroup: SalesItemGroup|null = null;
    private salesPeriodEventId: string|null = null;

    public getDisplayItemId(): string|null {
        return this.displayItemId;
    }

    public setDisplayItemId(displayItemId: string|null) {
        this.displayItemId = displayItemId;
        return this;
    }

    public withDisplayItemId(displayItemId: string|null): this {
        this.displayItemId = displayItemId;
        return this;
    }

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
        return this;
    }

    public getSalesItem(): SalesItem|null {
        return this.salesItem;
    }

    public setSalesItem(salesItem: SalesItem|null) {
        this.salesItem = salesItem;
        return this;
    }

    public withSalesItem(salesItem: SalesItem|null): this {
        this.salesItem = salesItem;
        return this;
    }

    public getSalesItemGroup(): SalesItemGroup|null {
        return this.salesItemGroup;
    }

    public setSalesItemGroup(salesItemGroup: SalesItemGroup|null) {
        this.salesItemGroup = salesItemGroup;
        return this;
    }

    public withSalesItemGroup(salesItemGroup: SalesItemGroup|null): this {
        this.salesItemGroup = salesItemGroup;
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

    public static fromDict(data: {[key: string]: any}): DisplayItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withType(data["type"])
            .withSalesItem(SalesItem.fromDict(data["salesItem"]))
            .withSalesItemGroup(SalesItemGroup.fromDict(data["salesItemGroup"]))
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "displayItemId": this.getDisplayItemId(),
            "type": this.getType(),
            "salesItem": this.getSalesItem()?.toDict(),
            "salesItemGroup": this.getSalesItemGroup()?.toDict(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    }
}
