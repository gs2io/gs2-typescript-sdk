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

import {
  Namespace,
  InventoryModelMaster,
  InventoryModel,
  ItemModelMaster,
  ItemModel,
  CurrentItemModelMaster,
  Inventory,
  ItemSet,
  ItemSetGroup,
  ResponseCache,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
} from './model';

import IResult from '../core/interface/IResult';

export class DescribeNamespacesResult implements IResult {
  /** ネームスペースのリスト */
  public items?: Namespace[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Namespace(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Namespace[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateNamespaceResult implements IResult {
  /** 作成したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetNamespaceStatusResult implements IResult {
  /** None */
  public status?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.status = data.status;
    }
  }

  public withStatus(status?: string): this {
    this.status = status;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.status = this.status;
    return data;
  }

}

export class GetNamespaceResult implements IResult {
  /** ネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNamespaceResult implements IResult {
  /** 更新したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteNamespaceResult implements IResult {
  /** 削除したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeInventoryModelMastersResult implements IResult {
  /** インベントリモデルマスターのリスト */
  public items?: InventoryModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new InventoryModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: InventoryModelMaster[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateInventoryModelMasterResult implements IResult {
  /** 作成したインベントリモデルマスター */
  public item?: InventoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new InventoryModelMaster(data.item);
    }
  }

  public withItem(item?: InventoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetInventoryModelMasterResult implements IResult {
  /** インベントリモデルマスター */
  public item?: InventoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new InventoryModelMaster(data.item);
    }
  }

  public withItem(item?: InventoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateInventoryModelMasterResult implements IResult {
  /** 更新したインベントリモデルマスター */
  public item?: InventoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new InventoryModelMaster(data.item);
    }
  }

  public withItem(item?: InventoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteInventoryModelMasterResult implements IResult {
  /** 削除したインベントリモデルマスター */
  public item?: InventoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new InventoryModelMaster(data.item);
    }
  }

  public withItem(item?: InventoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeInventoryModelsResult implements IResult {
  /** インベントリモデルのリスト */
  public items?: InventoryModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new InventoryModel(item);
      });
    }
  }

  public withItems(items?: InventoryModel[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetInventoryModelResult implements IResult {
  /** インベントリモデル */
  public item?: InventoryModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new InventoryModel(data.item);
    }
  }

  public withItem(item?: InventoryModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeItemModelMastersResult implements IResult {
  /** アイテムモデルマスターのリスト */
  public items?: ItemModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ItemModelMaster[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateItemModelMasterResult implements IResult {
  /** 作成したアイテムモデルマスター */
  public item?: ItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ItemModelMaster(data.item);
    }
  }

  public withItem(item?: ItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetItemModelMasterResult implements IResult {
  /** アイテムモデルマスター */
  public item?: ItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ItemModelMaster(data.item);
    }
  }

  public withItem(item?: ItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateItemModelMasterResult implements IResult {
  /** 更新したアイテムモデルマスター */
  public item?: ItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ItemModelMaster(data.item);
    }
  }

  public withItem(item?: ItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteItemModelMasterResult implements IResult {
  /** 削除したアイテムモデルマスター */
  public item?: ItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ItemModelMaster(data.item);
    }
  }

  public withItem(item?: ItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeItemModelsResult implements IResult {
  /** アイテムモデルのリスト */
  public items?: ItemModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemModel(item);
      });
    }
  }

  public withItems(items?: ItemModel[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetItemModelResult implements IResult {
  /** None */
  public item?: ItemModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ItemModel(data.item);
    }
  }

  public withItem(item?: ItemModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ExportMasterResult implements IResult {
  /** 現在有効な所持品マスター */
  public item?: CurrentItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentItemModelMaster(data.item);
    }
  }

  public withItem(item?: CurrentItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentItemModelMasterResult implements IResult {
  /** 現在有効な所持品マスター */
  public item?: CurrentItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentItemModelMaster(data.item);
    }
  }

  public withItem(item?: CurrentItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentItemModelMasterResult implements IResult {
  /** 更新した現在有効な所持品マスター */
  public item?: CurrentItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentItemModelMaster(data.item);
    }
  }

  public withItem(item?: CurrentItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentItemModelMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な所持品マスター */
  public item?: CurrentItemModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentItemModelMaster(data.item);
    }
  }

  public withItem(item?: CurrentItemModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeInventoriesResult implements IResult {
  /** インベントリのリスト */
  public items?: Inventory[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Inventory(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Inventory[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class DescribeInventoriesByUserIdResult implements IResult {
  /** インベントリのリスト */
  public items?: Inventory[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Inventory(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Inventory[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetInventoryResult implements IResult {
  /** インベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetInventoryByUserIdResult implements IResult {
  /** インベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddCapacityByUserIdResult implements IResult {
  /** キャパシティ加算後のインベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetCapacityByUserIdResult implements IResult {
  /** 更新後のインベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteInventoryByUserIdResult implements IResult {
  /** インベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddCapacityByStampSheetResult implements IResult {
  /** キャパシティ加算後のインベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetCapacityByStampSheetResult implements IResult {
  /** 更新後のインベントリ */
  public item?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Inventory(data.item);
    }
  }

  public withItem(item?: Inventory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeItemSetsResult implements IResult {
  /** 有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class DescribeItemSetsByUserIdResult implements IResult {
  /** 有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetItemSetResult implements IResult {
  /** 有効期限毎の{model_name} */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    return data;
  }

}

export class GetItemSetByUserIdResult implements IResult {
  /** 有効期限毎の{model_name} */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    return data;
  }

}

export class GetItemWithSignatureResult implements IResult {
  /** 有効期限毎の{model_name} */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;
  /** 署名対象のアイテムセット情報 */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
      this.body = data.body;
      this.signature = data.signature;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public withBody(body?: string): this {
    this.body = body;
    return this;
  }

  public withSignature(signature?: string): this {
    this.signature = signature;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    data.body = this.body;
    data.signature = this.signature;
    return data;
  }

}

export class GetItemWithSignatureByUserIdResult implements IResult {
  /** 有効期限毎の{model_name} */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;
  /** 署名対象のアイテムセット情報 */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
      this.body = data.body;
      this.signature = data.signature;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public withBody(body?: string): this {
    this.body = body;
    return this;
  }

  public withSignature(signature?: string): this {
    this.signature = signature;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    data.body = this.body;
    data.signature = this.signature;
    return data;
  }

}

export class AcquireItemSetByUserIdResult implements IResult {
  /** 加算後の有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;
  /** 所持数量の上限を超えて受け取れずに GS2-Inbox に転送したアイテムの数量 */
  public overflowCount?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
      this.overflowCount = data.overflowCount;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public withOverflowCount(overflowCount?: number): this {
    this.overflowCount = overflowCount;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    data.overflowCount = this.overflowCount;
    return data;
  }

}

export class ConsumeItemSetResult implements IResult {
  /** 消費後の有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    return data;
  }

}

export class ConsumeItemSetByUserIdResult implements IResult {
  /** 消費後の有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    return data;
  }

}

export class DeleteItemSetByUserIdResult implements IResult {
  /** 削除した有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    return data;
  }

}

export class AcquireItemSetByStampSheetResult implements IResult {
  /** 加算後の有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;
  /** 所持数量の上限を超えて受け取れずに GS2-Inbox に転送したアイテムの数量 */
  public overflowCount?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
      this.overflowCount = data.overflowCount;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public withOverflowCount(overflowCount?: number): this {
    this.overflowCount = overflowCount;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    data.overflowCount = this.overflowCount;
    return data;
  }

}

export class ConsumeItemSetByStampTaskResult implements IResult {
  /** 消費後の有効期限ごとのアイテム所持数量のリスト */
  public items?: ItemSet[];
  /** アイテムモデル */
  public itemModel?: ItemModel;
  /** インベントリ */
  public inventory?: Inventory;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ItemSet(item);
      });
      this.itemModel = new ItemModel(data.itemModel);
      this.inventory = new Inventory(data.inventory);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItems(items?: ItemSet[]): this {
    this.items = items;
    return this;
  }

  public withItemModel(itemModel?: ItemModel): this {
    this.itemModel = itemModel;
    return this;
  }

  public withInventory(inventory?: Inventory): this {
    this.inventory = inventory;
    return this;
  }

  public withNewContextStack(newContextStack?: string): this {
    this.newContextStack = newContextStack;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.itemModel = this.itemModel;
    data.inventory = this.inventory;
    data.newContextStack = this.newContextStack;
    return data;
  }

}
