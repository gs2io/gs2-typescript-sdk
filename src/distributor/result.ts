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
  DistributorModelMaster,
  DistributorModel,
  CurrentDistributorMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  DistributeResource,
  LogSetting,
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

export class DescribeDistributorModelMastersResult implements IResult {
  /** 配信設定マスターのリスト */
  public items?: DistributorModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DistributorModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DistributorModelMaster[]): this {
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

export class CreateDistributorModelMasterResult implements IResult {
  /** 作成した配信設定マスター */
  public item?: DistributorModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DistributorModelMaster(data.item);
    }
  }

  public withItem(item?: DistributorModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetDistributorModelMasterResult implements IResult {
  /** 配信設定マスター */
  public item?: DistributorModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DistributorModelMaster(data.item);
    }
  }

  public withItem(item?: DistributorModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateDistributorModelMasterResult implements IResult {
  /** 更新した配信設定マスター */
  public item?: DistributorModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DistributorModelMaster(data.item);
    }
  }

  public withItem(item?: DistributorModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteDistributorModelMasterResult implements IResult {
  /** 削除した配信設定マスター */
  public item?: DistributorModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DistributorModelMaster(data.item);
    }
  }

  public withItem(item?: DistributorModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeDistributorModelsResult implements IResult {
  /** 配信設定のリスト */
  public items?: DistributorModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DistributorModel(item);
      });
    }
  }

  public withItems(items?: DistributorModel[]): this {
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

export class GetDistributorModelResult implements IResult {
  /** 配信設定 */
  public item?: DistributorModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DistributorModel(data.item);
    }
  }

  public withItem(item?: DistributorModel): this {
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
  /** 現在有効な配信設定 */
  public item?: CurrentDistributorMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentDistributorMaster(data.item);
    }
  }

  public withItem(item?: CurrentDistributorMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentDistributorMasterResult implements IResult {
  /** 現在有効な配信設定 */
  public item?: CurrentDistributorMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentDistributorMaster(data.item);
    }
  }

  public withItem(item?: CurrentDistributorMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentDistributorMasterResult implements IResult {
  /** 更新した現在有効な配信設定 */
  public item?: CurrentDistributorMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentDistributorMaster(data.item);
    }
  }

  public withItem(item?: CurrentDistributorMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentDistributorMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な配信設定 */
  public item?: CurrentDistributorMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentDistributorMaster(data.item);
    }
  }

  public withItem(item?: CurrentDistributorMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DistributeResult implements IResult {
  /** 処理した DistributeResource */
  public distributeResource?: DistributeResource;
  /** 所持品がキャパシティをオーバーしたときに転送するプレゼントボックスのネームスペース のGRN */
  public inboxNamespaceId?: string;
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.distributeResource = new DistributeResource(data.distributeResource);
      this.inboxNamespaceId = data.inboxNamespaceId;
      this.result = data.result;
    }
  }

  public withDistributeResource(distributeResource?: DistributeResource): this {
    this.distributeResource = distributeResource;
    return this;
  }

  public withInboxNamespaceId(inboxNamespaceId?: string): this {
    this.inboxNamespaceId = inboxNamespaceId;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.distributeResource = this.distributeResource;
    data.inboxNamespaceId = this.inboxNamespaceId;
    data.result = this.result;
    return data;
  }

}

export class DistributeWithoutOverflowProcessResult implements IResult {
  /** 処理した DistributeResource */
  public distributeResource?: DistributeResource;
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.distributeResource = new DistributeResource(data.distributeResource);
      this.result = data.result;
    }
  }

  public withDistributeResource(distributeResource?: DistributeResource): this {
    this.distributeResource = distributeResource;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.distributeResource = this.distributeResource;
    data.result = this.result;
    return data;
  }

}

export class RunStampTaskResult implements IResult {
  /** タスクの実行結果を反映したコンテキストスタック */
  public contextStack?: string;
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.contextStack = data.contextStack;
      this.result = data.result;
    }
  }

  public withContextStack(contextStack?: string): this {
    this.contextStack = contextStack;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.contextStack = this.contextStack;
    data.result = this.result;
    return data;
  }

}

export class RunStampSheetResult implements IResult {
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.result = data.result;
    }
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.result = this.result;
    return data;
  }

}

export class RunStampTaskWithoutNamespaceResult implements IResult {
  /** タスクの実行結果を反映したコンテキストスタック */
  public contextStack?: string;
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.contextStack = data.contextStack;
      this.result = data.result;
    }
  }

  public withContextStack(contextStack?: string): this {
    this.contextStack = contextStack;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.contextStack = this.contextStack;
    data.result = this.result;
    return data;
  }

}

export class RunStampSheetWithoutNamespaceResult implements IResult {
  /** レスポンス内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.result = data.result;
    }
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.result = this.result;
    return data;
  }

}
