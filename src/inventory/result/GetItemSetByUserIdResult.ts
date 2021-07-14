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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Inventory from '../model'

export class GetItemSetByUserIdResult implements IResult {
    private items: Gs2Inventory.ItemSet[]|null = null;
    private itemModel: Gs2Inventory.ItemModel|null = null;
    private inventory: Gs2Inventory.Inventory|null = null;

    public getItems(): Gs2Inventory.ItemSet[]|null {
        return this.items;
    }

    public setItems(items: Gs2Inventory.ItemSet[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Inventory.ItemSet[]|null): this {
        this.items = items;
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

    public static fromDict(data: {[key: string]: any}): GetItemSetByUserIdResult {
        return new GetItemSetByUserIdResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Inventory.ItemSet.fromDict(item);
                }
            ) : [])
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Inventory.ItemSet) => {
                    return item.toDict();
                }
            ) : [],
            "itemModel": this.getItemModel()?.toDict(),
            "inventory": this.getInventory()?.toDict(),
        };
    }
}
