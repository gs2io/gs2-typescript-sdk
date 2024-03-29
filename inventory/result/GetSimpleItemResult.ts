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

export default class GetSimpleItemResult implements IResult {
    private item: Gs2Inventory.SimpleItem|null = null;
    private itemModel: Gs2Inventory.SimpleItemModel|null = null;

    public getItem(): Gs2Inventory.SimpleItem|null {
        return this.item;
    }

    public setItem(item: Gs2Inventory.SimpleItem|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Inventory.SimpleItem|null): this {
        this.item = item;
        return this;
    }

    public getItemModel(): Gs2Inventory.SimpleItemModel|null {
        return this.itemModel;
    }

    public setItemModel(itemModel: Gs2Inventory.SimpleItemModel|null) {
        this.itemModel = itemModel;
        return this;
    }

    public withItemModel(itemModel: Gs2Inventory.SimpleItemModel|null): this {
        this.itemModel = itemModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetSimpleItemResult {
        return new GetSimpleItemResult()
            .withItem(Gs2Inventory.SimpleItem.fromDict(data["item"]))
            .withItemModel(Gs2Inventory.SimpleItemModel.fromDict(data["itemModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "itemModel": this.getItemModel()?.toDict(),
        };
    }
}
