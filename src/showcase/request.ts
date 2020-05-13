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

import { Gs2Request } from '../core/model';

export class DescribeNamespacesRequest extends Gs2Request {
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** 購入処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 購入処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** ログの出力設定 */
  public logSetting?: LogSetting;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.queueNamespaceId !== undefined) {
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.logSetting !== undefined && Object.keys(data.logSetting).length > 0) {
      this.logSetting = new LogSetting(data.logSetting);
    } else {
      this.logSetting = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withQueueNamespaceId(queueNamespaceId?: string): this {
    this.queueNamespaceId = queueNamespaceId as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class GetNamespaceStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class GetNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class UpdateNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** 購入処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 購入処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** ログの出力設定 */
  public logSetting?: LogSetting;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.queueNamespaceId !== undefined) {
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.logSetting !== undefined && Object.keys(data.logSetting).length > 0) {
      this.logSetting = new LogSetting(data.logSetting);
    } else {
      this.logSetting = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withQueueNamespaceId(queueNamespaceId?: string): this {
    this.queueNamespaceId = queueNamespaceId as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.description = this.description;
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class DeleteNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class DescribeSalesItemMastersRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateSalesItemMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public name?: string;
  /** 商品マスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 消費アクションリスト */
  public consumeActions?: ConsumeAction[];
  /** 入手アクションリスト */
  public acquireActions?: AcquireAction[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.consumeActions !== undefined) {
      this.consumeActions = data.consumeActions as ConsumeAction[];
      for (let i = 0; i < data.consumeActions.length; i++) {
        this.consumeActions[i] = new ConsumeAction(data.consumeActions[i]);
      }
    } else {
      this.consumeActions = undefined;
    }
    if (data && data.acquireActions !== undefined) {
      this.acquireActions = data.acquireActions as AcquireAction[];
      for (let i = 0; i < data.acquireActions.length; i++) {
        this.acquireActions[i] = new AcquireAction(data.acquireActions[i]);
      }
    } else {
      this.acquireActions = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
        this.consumeActions[i] = new ConsumeAction(consumeActions![i]);
      }
    }
    return this;
  }

  public withAcquireActions(acquireActions?: AcquireAction[]): this {
    this.acquireActions = acquireActions as AcquireAction[];
    if (acquireActions) {
      for (let i = 0; i < acquireActions!.length; i++) {
        this.acquireActions[i] = new AcquireAction(acquireActions![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.consumeActions) {
      data.consumeActions = this.consumeActions.map((item) => item.toDict());
    }
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetSalesItemMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemName !== undefined) {
      this.salesItemName = data.salesItemName as string;
    } else {
      this.salesItemName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemName(salesItemName?: string): this {
    this.salesItemName = salesItemName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemName = this.salesItemName;
    return data;
  }

}

export class UpdateSalesItemMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemName?: string;
  /** 商品マスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 消費アクションリスト */
  public consumeActions?: ConsumeAction[];
  /** 入手アクションリスト */
  public acquireActions?: AcquireAction[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemName !== undefined) {
      this.salesItemName = data.salesItemName as string;
    } else {
      this.salesItemName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.consumeActions !== undefined) {
      this.consumeActions = data.consumeActions as ConsumeAction[];
      for (let i = 0; i < data.consumeActions.length; i++) {
        this.consumeActions[i] = new ConsumeAction(data.consumeActions[i]);
      }
    } else {
      this.consumeActions = undefined;
    }
    if (data && data.acquireActions !== undefined) {
      this.acquireActions = data.acquireActions as AcquireAction[];
      for (let i = 0; i < data.acquireActions.length; i++) {
        this.acquireActions[i] = new AcquireAction(data.acquireActions[i]);
      }
    } else {
      this.acquireActions = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemName(salesItemName?: string): this {
    this.salesItemName = salesItemName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
        this.consumeActions[i] = new ConsumeAction(consumeActions![i]);
      }
    }
    return this;
  }

  public withAcquireActions(acquireActions?: AcquireAction[]): this {
    this.acquireActions = acquireActions as AcquireAction[];
    if (acquireActions) {
      for (let i = 0; i < acquireActions!.length; i++) {
        this.acquireActions[i] = new AcquireAction(acquireActions![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemName = this.salesItemName;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.consumeActions) {
      data.consumeActions = this.consumeActions.map((item) => item.toDict());
    }
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    return data;
  }

}

export class DeleteSalesItemMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemName !== undefined) {
      this.salesItemName = data.salesItemName as string;
    } else {
      this.salesItemName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemName(salesItemName?: string): this {
    this.salesItemName = salesItemName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemName = this.salesItemName;
    return data;
  }

}

export class DescribeSalesItemGroupMastersRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateSalesItemGroupMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public name?: string;
  /** 商品グループマスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 商品グループに含める商品リスト */
  public salesItemNames?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.salesItemNames !== undefined) {
      this.salesItemNames = data.salesItemNames as string[];
      for (let i = 0; i < data.salesItemNames.length; i++) {
        this.salesItemNames[i] = data.salesItemNames[i] as string;
      }
    } else {
      this.salesItemNames = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withSalesItemNames(salesItemNames?: string[]): this {
    this.salesItemNames = salesItemNames as string[];
    if (salesItemNames) {
      for (let i = 0; i < salesItemNames!.length; i++) {
        this.salesItemNames[i] = salesItemNames![i] as string;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.salesItemNames = this.salesItemNames;
    return data;
  }

}

export class GetSalesItemGroupMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemGroupName !== undefined) {
      this.salesItemGroupName = data.salesItemGroupName as string;
    } else {
      this.salesItemGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemGroupName(salesItemGroupName?: string): this {
    this.salesItemGroupName = salesItemGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemGroupName = this.salesItemGroupName;
    return data;
  }

}

export class UpdateSalesItemGroupMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemGroupName?: string;
  /** 商品グループマスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 商品グループに含める商品リスト */
  public salesItemNames?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemGroupName !== undefined) {
      this.salesItemGroupName = data.salesItemGroupName as string;
    } else {
      this.salesItemGroupName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.salesItemNames !== undefined) {
      this.salesItemNames = data.salesItemNames as string[];
      for (let i = 0; i < data.salesItemNames.length; i++) {
        this.salesItemNames[i] = data.salesItemNames[i] as string;
      }
    } else {
      this.salesItemNames = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemGroupName(salesItemGroupName?: string): this {
    this.salesItemGroupName = salesItemGroupName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withSalesItemNames(salesItemNames?: string[]): this {
    this.salesItemNames = salesItemNames as string[];
    if (salesItemNames) {
      for (let i = 0; i < salesItemNames!.length; i++) {
        this.salesItemNames[i] = salesItemNames![i] as string;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemGroupName = this.salesItemGroupName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.salesItemNames = this.salesItemNames;
    return data;
  }

}

export class DeleteSalesItemGroupMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public salesItemGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.salesItemGroupName !== undefined) {
      this.salesItemGroupName = data.salesItemGroupName as string;
    } else {
      this.salesItemGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSalesItemGroupName(salesItemGroupName?: string): this {
    this.salesItemGroupName = salesItemGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.salesItemGroupName = this.salesItemGroupName;
    return data;
  }

}

export class DescribeShowcaseMastersRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 陳列棚名 */
  public name?: string;
  /** 陳列棚マスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 陳列する商品モデル一覧 */
  public displayItems?: DisplayItemMaster[];
  /** 販売期間とするイベントマスター のGRN */
  public salesPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.displayItems !== undefined) {
      this.displayItems = data.displayItems as DisplayItemMaster[];
      for (let i = 0; i < data.displayItems.length; i++) {
        this.displayItems[i] = new DisplayItemMaster(data.displayItems[i]);
      }
    } else {
      this.displayItems = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId as string;
    } else {
      this.salesPeriodEventId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDisplayItems(displayItems?: DisplayItemMaster[]): this {
    this.displayItems = displayItems as DisplayItemMaster[];
    if (displayItems) {
      for (let i = 0; i < displayItems!.length; i++) {
        this.displayItems[i] = new DisplayItemMaster(displayItems![i]);
      }
    }
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.displayItems) {
      data.displayItems = this.displayItems.map((item) => item.toDict());
    }
    data.salesPeriodEventId = this.salesPeriodEventId;
    return data;
  }

}

export class GetShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 陳列棚名 */
  public showcaseName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    return data;
  }

}

export class UpdateShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 陳列棚名 */
  public showcaseName?: string;
  /** 陳列棚マスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 陳列する商品モデル一覧 */
  public displayItems?: DisplayItemMaster[];
  /** 販売期間とするイベントマスター のGRN */
  public salesPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.displayItems !== undefined) {
      this.displayItems = data.displayItems as DisplayItemMaster[];
      for (let i = 0; i < data.displayItems.length; i++) {
        this.displayItems[i] = new DisplayItemMaster(data.displayItems[i]);
      }
    } else {
      this.displayItems = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId as string;
    } else {
      this.salesPeriodEventId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDisplayItems(displayItems?: DisplayItemMaster[]): this {
    this.displayItems = displayItems as DisplayItemMaster[];
    if (displayItems) {
      for (let i = 0; i < displayItems!.length; i++) {
        this.displayItems[i] = new DisplayItemMaster(displayItems![i]);
      }
    }
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.displayItems) {
      data.displayItems = this.displayItems.map((item) => item.toDict());
    }
    data.salesPeriodEventId = this.salesPeriodEventId;
    return data;
  }

}

export class DeleteShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 陳列棚名 */
  public showcaseName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    return data;
  }

}

export class ExportMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class GetCurrentShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class UpdateCurrentShowcaseMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** マスターデータ */
  public settings?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.settings !== undefined) {
      this.settings = data.settings as string;
    } else {
      this.settings = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withSettings(settings?: string): this {
    this.settings = settings as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.settings = this.settings;
    return data;
  }

}

export class UpdateCurrentShowcaseMasterFromGitHubRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** GitHubからマスターデータをチェックアウトしてくる設定 */
  public checkoutSetting?: GitHubCheckoutSetting;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.checkoutSetting !== undefined && Object.keys(data.checkoutSetting).length > 0) {
      this.checkoutSetting = new GitHubCheckoutSetting(data.checkoutSetting);
    } else {
      this.checkoutSetting = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCheckoutSetting(checkoutSetting?: GitHubCheckoutSetting): this {
    this.checkoutSetting = checkoutSetting as GitHubCheckoutSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    if (this.checkoutSetting) {
      data.checkoutSetting = this.checkoutSetting.toDict();
    }
    return data;
  }

}

export class DescribeShowcasesRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeShowcasesByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetShowcaseRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public showcaseName?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetShowcaseByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public showcaseName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class BuyRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public showcaseName?: string;
  /** 陳列商品ID */
  public displayItemId?: string;
  /** 設定値 */
  public config?: Config[];
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
    if (data && data.displayItemId !== undefined) {
      this.displayItemId = data.displayItemId as string;
    } else {
      this.displayItemId = undefined;
    }
    if (data && data.config !== undefined) {
      this.config = data.config as Config[];
      for (let i = 0; i < data.config.length; i++) {
        this.config[i] = new Config(data.config[i]);
      }
    } else {
      this.config = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public withDisplayItemId(displayItemId?: string): this {
    this.displayItemId = displayItemId as string;
    return this;
  }

  public withConfig(config?: Config[]): this {
    this.config = config as Config[];
    if (config) {
      for (let i = 0; i < config!.length; i++) {
        this.config[i] = new Config(config![i]);
      }
    }
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    data.displayItemId = this.displayItemId;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class BuyByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 商品名 */
  public showcaseName?: string;
  /** 陳列商品ID */
  public displayItemId?: string;
  /** ユーザーID */
  public userId?: string;
  /** 設定値 */
  public config?: Config[];
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.showcaseName !== undefined) {
      this.showcaseName = data.showcaseName as string;
    } else {
      this.showcaseName = undefined;
    }
    if (data && data.displayItemId !== undefined) {
      this.displayItemId = data.displayItemId as string;
    } else {
      this.displayItemId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.config !== undefined) {
      this.config = data.config as Config[];
      for (let i = 0; i < data.config.length; i++) {
        this.config[i] = new Config(data.config[i]);
      }
    } else {
      this.config = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withShowcaseName(showcaseName?: string): this {
    this.showcaseName = showcaseName as string;
    return this;
  }

  public withDisplayItemId(displayItemId?: string): this {
    this.displayItemId = displayItemId as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withConfig(config?: Config[]): this {
    this.config = config as Config[];
    if (config) {
      for (let i = 0; i < config!.length; i++) {
        this.config[i] = new Config(config![i]);
      }
    }
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.showcaseName = this.showcaseName;
    data.displayItemId = this.displayItemId;
    data.userId = this.userId;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
