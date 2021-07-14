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

export class DisplayItemMaster implements IModel {
    private displayItemId: string|null = null;
    private type: string|null = null;
    private salesItemName: string|null = null;
    private salesItemGroupName: string|null = null;
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

    public getSalesItemName(): string|null {
        return this.salesItemName;
    }

    public setSalesItemName(salesItemName: string|null) {
        this.salesItemName = salesItemName;
        return this;
    }

    public withSalesItemName(salesItemName: string|null): this {
        this.salesItemName = salesItemName;
        return this;
    }

    public getSalesItemGroupName(): string|null {
        return this.salesItemGroupName;
    }

    public setSalesItemGroupName(salesItemGroupName: string|null) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    }

    public withSalesItemGroupName(salesItemGroupName: string|null): this {
        this.salesItemGroupName = salesItemGroupName;
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

    public static fromDict(data: {[key: string]: any}): DisplayItemMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DisplayItemMaster()
            .withDisplayItemId(data["displayItemId"])
            .withType(data["type"])
            .withSalesItemName(data["salesItemName"])
            .withSalesItemGroupName(data["salesItemGroupName"])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "displayItemId": this.getDisplayItemId(),
            "type": this.getType(),
            "salesItemName": this.getSalesItemName(),
            "salesItemGroupName": this.getSalesItemGroupName(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    }
}
