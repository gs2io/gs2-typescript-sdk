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
  SalesItemMaster,
  SalesItemGroupMaster,
  ShowcaseMaster,
  CurrentShowcaseMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
  SalesItem,
  SalesItemGroup,
  Showcase,
  DisplayItem,
  Config,
  ConsumeAction,
  AcquireAction,
  DisplayItemMaster,
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

export class DescribeSalesItemMastersResult implements IResult {
  /** 商品マスターのリスト */
  public items?: SalesItemMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SalesItemMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: SalesItemMaster[]): this {
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

export class CreateSalesItemMasterResult implements IResult {
  /** 作成した商品マスター */
  public item?: SalesItemMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemMaster(data.item);
    }
  }

  public withItem(item?: SalesItemMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSalesItemMasterResult implements IResult {
  /** 商品マスター */
  public item?: SalesItemMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemMaster(data.item);
    }
  }

  public withItem(item?: SalesItemMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateSalesItemMasterResult implements IResult {
  /** 更新した商品マスター */
  public item?: SalesItemMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemMaster(data.item);
    }
  }

  public withItem(item?: SalesItemMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteSalesItemMasterResult implements IResult {
  /** 削除した商品マスター */
  public item?: SalesItemMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemMaster(data.item);
    }
  }

  public withItem(item?: SalesItemMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeSalesItemGroupMastersResult implements IResult {
  /** 商品グループマスターのリスト */
  public items?: SalesItemGroupMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SalesItemGroupMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: SalesItemGroupMaster[]): this {
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

export class CreateSalesItemGroupMasterResult implements IResult {
  /** 作成した商品グループマスター */
  public item?: SalesItemGroupMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemGroupMaster(data.item);
    }
  }

  public withItem(item?: SalesItemGroupMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSalesItemGroupMasterResult implements IResult {
  /** 商品グループマスター */
  public item?: SalesItemGroupMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemGroupMaster(data.item);
    }
  }

  public withItem(item?: SalesItemGroupMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateSalesItemGroupMasterResult implements IResult {
  /** 更新した商品グループマスター */
  public item?: SalesItemGroupMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemGroupMaster(data.item);
    }
  }

  public withItem(item?: SalesItemGroupMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteSalesItemGroupMasterResult implements IResult {
  /** 削除した商品グループマスター */
  public item?: SalesItemGroupMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItemGroupMaster(data.item);
    }
  }

  public withItem(item?: SalesItemGroupMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeShowcaseMastersResult implements IResult {
  /** 陳列棚マスターのリスト */
  public items?: ShowcaseMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ShowcaseMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ShowcaseMaster[]): this {
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

export class CreateShowcaseMasterResult implements IResult {
  /** 作成した陳列棚マスター */
  public item?: ShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ShowcaseMaster(data.item);
    }
  }

  public withItem(item?: ShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetShowcaseMasterResult implements IResult {
  /** 陳列棚マスター */
  public item?: ShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ShowcaseMaster(data.item);
    }
  }

  public withItem(item?: ShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateShowcaseMasterResult implements IResult {
  /** 更新した陳列棚マスター */
  public item?: ShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ShowcaseMaster(data.item);
    }
  }

  public withItem(item?: ShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteShowcaseMasterResult implements IResult {
  /** 削除した陳列棚マスター */
  public item?: ShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ShowcaseMaster(data.item);
    }
  }

  public withItem(item?: ShowcaseMaster): this {
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
  /** 現在有効な陳列棚マスター */
  public item?: CurrentShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentShowcaseMaster(data.item);
    }
  }

  public withItem(item?: CurrentShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentShowcaseMasterResult implements IResult {
  /** 現在有効な陳列棚マスター */
  public item?: CurrentShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentShowcaseMaster(data.item);
    }
  }

  public withItem(item?: CurrentShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentShowcaseMasterResult implements IResult {
  /** 更新した現在有効な陳列棚マスター */
  public item?: CurrentShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentShowcaseMaster(data.item);
    }
  }

  public withItem(item?: CurrentShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentShowcaseMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な陳列棚マスター */
  public item?: CurrentShowcaseMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentShowcaseMaster(data.item);
    }
  }

  public withItem(item?: CurrentShowcaseMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeShowcasesResult implements IResult {
  /** 陳列棚のリスト */
  public items?: Showcase[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Showcase(item);
      });
    }
  }

  public withItems(items?: Showcase[]): this {
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

export class DescribeShowcasesByUserIdResult implements IResult {
  /** 陳列棚のリスト */
  public items?: Showcase[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Showcase(item);
      });
    }
  }

  public withItems(items?: Showcase[]): this {
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

export class GetShowcaseResult implements IResult {
  /** 陳列棚 */
  public item?: Showcase;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Showcase(data.item);
    }
  }

  public withItem(item?: Showcase): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetShowcaseByUserIdResult implements IResult {
  /** 陳列棚 */
  public item?: Showcase;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Showcase(data.item);
    }
  }

  public withItem(item?: Showcase): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class BuyResult implements IResult {
  /** 商品 */
  public item?: SalesItem;
  /** 購入処理の実行に使用するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItem(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: SalesItem): this {
    this.item = item;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class BuyByUserIdResult implements IResult {
  /** 商品 */
  public item?: SalesItem;
  /** 購入処理の実行に使用するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SalesItem(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: SalesItem): this {
    this.item = item;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.stampSheet = this.stampSheet;
    return data;
  }

}
