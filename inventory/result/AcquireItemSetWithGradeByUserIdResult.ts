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

import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model'
import * as Gs2Grade from '../../grade/model'

export default class AcquireItemSetWithGradeByUserIdResult implements IResult {
    private item: Gs2Inventory.ItemSet|null = null;
    private status: Gs2Grade.Status|null = null;
    private itemModel: Gs2Inventory.ItemModel|null = null;
    private inventory: Gs2Inventory.Inventory|null = null;
    private overflowCount: number|null = null;

    public getItem(): Gs2Inventory.ItemSet|null {
        return this.item;
    }

    public setItem(item: Gs2Inventory.ItemSet|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Inventory.ItemSet|null): this {
        this.item = item;
        return this;
    }

    public getStatus(): Gs2Grade.Status|null {
        return this.status;
    }

    public setStatus(status: Gs2Grade.Status|null) {
        this.status = status;
        return this;
    }

    public withStatus(status: Gs2Grade.Status|null): this {
        this.status = status;
        return this;
    }

    public getItemModel(): Gs2Inventory.ItemModel|null {
        return this.itemModel;
    }

    public setItemModel(itemModel: Gs2Inventory.ItemModel|null) {
        this.itemModel = itemModel;
        return this;
    }

    public withItemModel(itemModel: Gs2Inventory.ItemModel|null): this {
        this.itemModel = itemModel;
        return this;
    }

    public getInventory(): Gs2Inventory.Inventory|null {
        return this.inventory;
    }

    public setInventory(inventory: Gs2Inventory.Inventory|null) {
        this.inventory = inventory;
        return this;
    }

    public withInventory(inventory: Gs2Inventory.Inventory|null): this {
        this.inventory = inventory;
        return this;
    }

    public getOverflowCount(): number|null {
        return this.overflowCount;
    }

    public setOverflowCount(overflowCount: number|null) {
        this.overflowCount = overflowCount;
        return this;
    }

    public withOverflowCount(overflowCount: number|null): this {
        this.overflowCount = overflowCount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireItemSetWithGradeByUserIdResult {
        return new AcquireItemSetWithGradeByUserIdResult()
            .withItem(Gs2Inventory.ItemSet.fromDict(data["item"]))
            .withStatus(Gs2Grade.Status.fromDict(data["status"]))
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withOverflowCount(data["overflowCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "status": this.getStatus()?.toDict(),
            "itemModel": this.getItemModel()?.toDict(),
            "inventory": this.getInventory()?.toDict(),
            "overflowCount": this.getOverflowCount(),
        };
    }
}
