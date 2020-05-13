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
  CategoryModel,
  CategoryModelMaster,
  Subscribe,
  Score,
  Ranking,
  ResponseCache,
  CurrentRankingMaster,
  CalculatedAt,
  SubscribeUser,
  GitHubCheckoutSetting,
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

export class DescribeCategoryModelsResult implements IResult {
  /** カテゴリのリスト */
  public items?: CategoryModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CategoryModel(item);
      });
    }
  }

  public withItems(items?: CategoryModel[]): this {
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

export class GetCategoryModelResult implements IResult {
  /** カテゴリ */
  public item?: CategoryModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CategoryModel(data.item);
    }
  }

  public withItem(item?: CategoryModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeCategoryModelMastersResult implements IResult {
  /** カテゴリマスターのリスト */
  public items?: CategoryModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CategoryModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: CategoryModelMaster[]): this {
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

export class CreateCategoryModelMasterResult implements IResult {
  /** 作成したカテゴリマスター */
  public item?: CategoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CategoryModelMaster(data.item);
    }
  }

  public withItem(item?: CategoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCategoryModelMasterResult implements IResult {
  /** カテゴリマスター */
  public item?: CategoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CategoryModelMaster(data.item);
    }
  }

  public withItem(item?: CategoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCategoryModelMasterResult implements IResult {
  /** 更新したカテゴリマスター */
  public item?: CategoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CategoryModelMaster(data.item);
    }
  }

  public withItem(item?: CategoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCategoryModelMasterResult implements IResult {
  /** 削除したカテゴリマスター */
  public item?: CategoryModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CategoryModelMaster(data.item);
    }
  }

  public withItem(item?: CategoryModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeSubscribesByCategoryNameResult implements IResult {
  /** 購読対象のリスト */
  public items?: SubscribeUser[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SubscribeUser(item);
      });
    }
  }

  public withItems(items?: SubscribeUser[]): this {
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

export class DescribeSubscribesByCategoryNameAndUserIdResult implements IResult {
  /** 購読対象のリスト */
  public items?: SubscribeUser[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SubscribeUser(item);
      });
    }
  }

  public withItems(items?: SubscribeUser[]): this {
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

export class SubscribeResult implements IResult {
  /** 購読した購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SubscribeByUserIdResult implements IResult {
  /** 購読した購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSubscribeResult implements IResult {
  /** 購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSubscribeByUserIdResult implements IResult {
  /** 購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnsubscribeResult implements IResult {
  /** 解除した購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnsubscribeByUserIdResult implements IResult {
  /** 解除した購読対象 */
  public item?: SubscribeUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SubscribeUser(data.item);
    }
  }

  public withItem(item?: SubscribeUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeRankingsResult implements IResult {
  /** ランキングのリスト */
  public items?: Ranking[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Ranking(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Ranking[]): this {
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

export class DescribeRankingssByUserIdResult implements IResult {
  /** ランキングのリスト */
  public items?: Ranking[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Ranking(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Ranking[]): this {
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

export class DescribeNearRankingsResult implements IResult {
  /** ランキングのリスト */
  public items?: Ranking[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Ranking(item);
      });
    }
  }

  public withItems(items?: Ranking[]): this {
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

export class PutScoreResult implements IResult {
  /** 登録したスコア */
  public item?: Score;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Score(data.item);
    }
  }

  public withItem(item?: Score): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PutScoreByUserIdResult implements IResult {
  /** 登録したスコア */
  public item?: Score;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Score(data.item);
    }
  }

  public withItem(item?: Score): this {
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
  /** 現在有効なランキング設定 */
  public item?: CurrentRankingMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentRankingMaster(data.item);
    }
  }

  public withItem(item?: CurrentRankingMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentRankingMasterResult implements IResult {
  /** 現在有効なランキング設定 */
  public item?: CurrentRankingMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentRankingMaster(data.item);
    }
  }

  public withItem(item?: CurrentRankingMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentRankingMasterResult implements IResult {
  /** 更新した現在有効なランキング設定 */
  public item?: CurrentRankingMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentRankingMaster(data.item);
    }
  }

  public withItem(item?: CurrentRankingMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentRankingMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なランキング設定 */
  public item?: CurrentRankingMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentRankingMaster(data.item);
    }
  }

  public withItem(item?: CurrentRankingMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
