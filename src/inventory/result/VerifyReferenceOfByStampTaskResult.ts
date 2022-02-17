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

export default class VerifyReferenceOfByStampTaskResult implements IResult {
    private item: string[]|null = null;
    private itemSet: Gs2Inventory.ItemSet|null = null;
    private itemModel: Gs2Inventory.ItemModel|null = null;
    private inventory: Gs2Inventory.Inventory|null = null;
    private newContextStack: string|null = null;

    public getItem(): string[]|null {
        return this.item;
    }

    public setItem(item: string[]|null) {
        this.item = item;
        return this;
    }

    public withItem(item: string[]|null): this {
        this.item = item;
        return this;
    }

    public getItemSet(): Gs2Inventory.ItemSet|null {
        return this.itemSet;
    }

    public setItemSet(itemSet: Gs2Inventory.ItemSet|null) {
        this.itemSet = itemSet;
        return this;
    }

    public withItemSet(itemSet: Gs2Inventory.ItemSet|null): this {
        this.itemSet = itemSet;
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

    public getNewContextStack(): string|null {
        return this.newContextStack;
    }

    public setNewContextStack(newContextStack: string|null) {
        this.newContextStack = newContextStack;
        return this;
    }

    public withNewContextStack(newContextStack: string|null): this {
        this.newContextStack = newContextStack;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VerifyReferenceOfByStampTaskResult {
        return new VerifyReferenceOfByStampTaskResult()
            .withItem(data.item ?
                data.item.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withItemSet(Gs2Inventory.ItemSet.fromDict(data["itemSet"]))
            .withItemModel(Gs2Inventory.ItemModel.fromDict(data["itemModel"]))
            .withInventory(Gs2Inventory.Inventory.fromDict(data["inventory"]))
            .withNewContextStack(data["newContextStack"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem() ?
                this.getItem()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "itemSet": this.getItemSet()?.toDict(),
            "itemModel": this.getItemModel()?.toDict(),
            "inventory": this.getInventory()?.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    }
}
