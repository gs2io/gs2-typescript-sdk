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
  Counter,
  LimitModelMaster,
  CurrentLimitMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  LogSetting,
  LimitModel,
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

export class DescribeCountersResult implements IResult {
  /** カウンターのリスト */
  public items?: Counter[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Counter(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Counter[]): this {
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

export class DescribeCountersByUserIdResult implements IResult {
  /** カウンターのリスト */
  public items?: Counter[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Counter(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Counter[]): this {
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

export class GetCounterResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCounterByUserIdResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CountUpResult implements IResult {
  /** カウントを増やしたカウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CountUpByUserIdResult implements IResult {
  /** カウントを増やしたカウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCounterByUserIdResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CountUpByStampTaskResult implements IResult {
  /** カウントを増やしたカウンター */
  public item?: Counter;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public withNewContextStack(newContextStack?: string): this {
    this.newContextStack = newContextStack;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.newContextStack = this.newContextStack;
    return data;
  }

}

export class DeleteByStampSheetResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeLimitModelMastersResult implements IResult {
  /** 回数制限の種類マスターのリスト */
  public items?: LimitModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new LimitModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: LimitModelMaster[]): this {
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

export class CreateLimitModelMasterResult implements IResult {
  /** 作成した回数制限の種類マスター */
  public item?: LimitModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LimitModelMaster(data.item);
    }
  }

  public withItem(item?: LimitModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetLimitModelMasterResult implements IResult {
  /** 回数制限の種類マスター */
  public item?: LimitModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LimitModelMaster(data.item);
    }
  }

  public withItem(item?: LimitModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateLimitModelMasterResult implements IResult {
  /** 更新した回数制限の種類マスター */
  public item?: LimitModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LimitModelMaster(data.item);
    }
  }

  public withItem(item?: LimitModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteLimitModelMasterResult implements IResult {
  /** 削除した回数制限の種類マスター */
  public item?: LimitModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LimitModelMaster(data.item);
    }
  }

  public withItem(item?: LimitModelMaster): this {
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
  /** 現在有効な回数制限設定 */
  public item?: CurrentLimitMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLimitMaster(data.item);
    }
  }

  public withItem(item?: CurrentLimitMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentLimitMasterResult implements IResult {
  /** 現在有効な回数制限設定 */
  public item?: CurrentLimitMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLimitMaster(data.item);
    }
  }

  public withItem(item?: CurrentLimitMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentLimitMasterResult implements IResult {
  /** 更新した現在有効な回数制限設定 */
  public item?: CurrentLimitMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLimitMaster(data.item);
    }
  }

  public withItem(item?: CurrentLimitMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentLimitMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な回数制限設定 */
  public item?: CurrentLimitMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentLimitMaster(data.item);
    }
  }

  public withItem(item?: CurrentLimitMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeLimitModelsResult implements IResult {
  /** 回数制限の種類のリスト */
  public items?: LimitModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new LimitModel(item);
      });
    }
  }

  public withItems(items?: LimitModel[]): this {
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

export class GetLimitModelResult implements IResult {
  /** 回数制限の種類 */
  public item?: LimitModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new LimitModel(data.item);
    }
  }

  public withItem(item?: LimitModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
