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
  LotteryModelMaster,
  PrizeTableMaster,
  Box,
  LotteryModel,
  PrizeTable,
  Probability,
  CurrentLotteryMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
  Prize,
  AcquireAction,
  DrawnPrize,
  BoxItem,
  BoxItems,
  Config,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

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

export class DescribeLotteryModelMastersResult implements IResult {
  /** 抽選の種類マスターのリスト */
  public items?: LotteryModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new LotteryModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: LotteryModelMaster[]): this {
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

export class CreateLotteryModelMasterResult implements IResult {
  /** 作成した抽選の種類マスター */
  public item?: LotteryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LotteryModelMaster(data.item);
    }
  }

  public withItem(item?: LotteryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetLotteryModelMasterResult implements IResult {
  /** 抽選の種類マスター */
  public item?: LotteryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LotteryModelMaster(data.item);
    }
  }

  public withItem(item?: LotteryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateLotteryModelMasterResult implements IResult {
  /** 更新した抽選の種類マスター */
  public item?: LotteryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LotteryModelMaster(data.item);
    }
  }

  public withItem(item?: LotteryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteLotteryModelMasterResult implements IResult {
  /** 削除した抽選の種類マスター */
  public item?: LotteryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LotteryModelMaster(data.item);
    }
  }

  public withItem(item?: LotteryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribePrizeTableMastersResult implements IResult {
  /** 排出確率テーブルマスターのリスト */
  public items?: PrizeTableMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new PrizeTableMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: PrizeTableMaster[]): this {
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

export class CreatePrizeTableMasterResult implements IResult {
  /** 作成した排出確率テーブルマスター */
  public item?: PrizeTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PrizeTableMaster(data.item);
    }
  }

  public withItem(item?: PrizeTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetPrizeTableMasterResult implements IResult {
  /** 排出確率テーブルマスター */
  public item?: PrizeTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PrizeTableMaster(data.item);
    }
  }

  public withItem(item?: PrizeTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdatePrizeTableMasterResult implements IResult {
  /** 更新した排出確率テーブルマスター */
  public item?: PrizeTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PrizeTableMaster(data.item);
    }
  }

  public withItem(item?: PrizeTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeletePrizeTableMasterResult implements IResult {
  /** 削除した排出確率テーブルマスター */
  public item?: PrizeTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PrizeTableMaster(data.item);
    }
  }

  public withItem(item?: PrizeTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeBoxesResult implements IResult {
  /** ボックスのリスト */
  public items?: Box[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Box(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Box[]): this {
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

export class DescribeBoxesByUserIdResult implements IResult {
  /** ボックスのリスト */
  public items?: Box[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Box(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Box[]): this {
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

export class GetBoxResult implements IResult {
  /** ボックスから取り出したアイテムのリスト */
  public item?: BoxItems;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BoxItems(data.item);
    }
  }

  public withItem(item?: BoxItems): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetBoxByUserIdResult implements IResult {
  /** ボックスから取り出したアイテムのリスト */
  public item?: BoxItems;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BoxItems(data.item);
    }
  }

  public withItem(item?: BoxItems): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetRawBoxByUserIdResult implements IResult {
  /** ボックス */
  public item?: Box;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Box(data.item);
    }
  }

  public withItem(item?: Box): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ResetBoxResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class ResetBoxByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeLotteryModelsResult implements IResult {
  /** 抽選の種類のリスト */
  public items?: LotteryModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new LotteryModel(item);
      });
    }
  }

  public withItems(items?: LotteryModel[]): this {
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

export class GetLotteryModelResult implements IResult {
  /** 抽選の種類 */
  public item?: LotteryModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LotteryModel(data.item);
    }
  }

  public withItem(item?: LotteryModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribePrizeTablesResult implements IResult {
  /** 排出確率テーブルのリスト */
  public items?: PrizeTable[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new PrizeTable(item);
      });
    }
  }

  public withItems(items?: PrizeTable[]): this {
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

export class GetPrizeTableResult implements IResult {
  /** 排出確率テーブル */
  public item?: PrizeTable;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PrizeTable(data.item);
    }
  }

  public withItem(item?: PrizeTable): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DrawByUserIdResult implements IResult {
  /** 抽選結果の景品リスト */
  public items?: DrawnPrize[];
  /** 排出された景品を入手するスタンプシート */
  public stampSheet?: string;
  /** ボックスから取り出したアイテムのリスト */
  public boxItems?: BoxItems;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DrawnPrize(item);
      });
      this.stampSheet = data.stampSheet;
      this.boxItems = new BoxItems(data.boxItems);
    }
  }

  public withItems(items?: DrawnPrize[]): this {
    this.items = items;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public withBoxItems(boxItems?: BoxItems): this {
    this.boxItems = boxItems;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.stampSheet = this.stampSheet;
    data.boxItems = this.boxItems;
    return data;
  }

}

export class DescribeProbabilitiesResult implements IResult {
  /** 景品の当選確率リスト */
  public items?: Probability[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Probability(item);
      });
    }
  }

  public withItems(items?: Probability[]): this {
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

export class DescribeProbabilitiesByUserIdResult implements IResult {
  /** 景品の当選確率リスト */
  public items?: Probability[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Probability(item);
      });
    }
  }

  public withItems(items?: Probability[]): this {
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

export class DrawByStampSheetResult implements IResult {
  /** 抽選結果の景品リスト */
  public items?: DrawnPrize[];
  /** 排出された景品を入手するスタンプシート */
  public stampSheet?: string;
  /** ボックスから取り出したアイテムのリスト */
  public boxItems?: BoxItems;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DrawnPrize(item);
      });
      this.stampSheet = data.stampSheet;
      this.boxItems = new BoxItems(data.boxItems);
    }
  }

  public withItems(items?: DrawnPrize[]): this {
    this.items = items;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public withBoxItems(boxItems?: BoxItems): this {
    this.boxItems = boxItems;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.stampSheet = this.stampSheet;
    data.boxItems = this.boxItems;
    return data;
  }

}

export class ExportMasterResult implements IResult {
  /** 現在有効な抽選設定 */
  public item?: CurrentLotteryMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLotteryMaster(data.item);
    }
  }

  public withItem(item?: CurrentLotteryMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentLotteryMasterResult implements IResult {
  /** 現在有効な抽選設定 */
  public item?: CurrentLotteryMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLotteryMaster(data.item);
    }
  }

  public withItem(item?: CurrentLotteryMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentLotteryMasterResult implements IResult {
  /** 更新した現在有効な抽選設定 */
  public item?: CurrentLotteryMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLotteryMaster(data.item);
    }
  }

  public withItem(item?: CurrentLotteryMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentLotteryMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な抽選設定 */
  public item?: CurrentLotteryMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLotteryMaster(data.item);
    }
  }

  public withItem(item?: CurrentLotteryMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
