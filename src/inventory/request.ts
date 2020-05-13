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
  /** アイテム入手したときに実行するスクリプト */
  public acquireScript?: ScriptSetting;
  /** 入手上限に当たって入手できなかったときに実行するスクリプト */
  public overflowScript?: ScriptSetting;
  /** アイテム消費するときに実行するスクリプト */
  public consumeScript?: ScriptSetting;
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
    if (data && data.acquireScript !== undefined && Object.keys(data.acquireScript).length > 0) {
      this.acquireScript = new ScriptSetting(data.acquireScript);
    } else {
      this.acquireScript = undefined;
    }
    if (data && data.overflowScript !== undefined && Object.keys(data.overflowScript).length > 0) {
      this.overflowScript = new ScriptSetting(data.overflowScript);
    } else {
      this.overflowScript = undefined;
    }
    if (data && data.consumeScript !== undefined && Object.keys(data.consumeScript).length > 0) {
      this.consumeScript = new ScriptSetting(data.consumeScript);
    } else {
      this.consumeScript = undefined;
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

  public withAcquireScript(acquireScript?: ScriptSetting): this {
    this.acquireScript = acquireScript as ScriptSetting;
    return this;
  }

  public withOverflowScript(overflowScript?: ScriptSetting): this {
    this.overflowScript = overflowScript as ScriptSetting;
    return this;
  }

  public withConsumeScript(consumeScript?: ScriptSetting): this {
    this.consumeScript = consumeScript as ScriptSetting;
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
    if (this.acquireScript) {
      data.acquireScript = this.acquireScript.toDict();
    }
    if (this.overflowScript) {
      data.overflowScript = this.overflowScript.toDict();
    }
    if (this.consumeScript) {
      data.consumeScript = this.consumeScript.toDict();
    }
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
  /** アイテム入手したときに実行するスクリプト */
  public acquireScript?: ScriptSetting;
  /** 入手上限に当たって入手できなかったときに実行するスクリプト */
  public overflowScript?: ScriptSetting;
  /** アイテム消費するときに実行するスクリプト */
  public consumeScript?: ScriptSetting;
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
    if (data && data.acquireScript !== undefined && Object.keys(data.acquireScript).length > 0) {
      this.acquireScript = new ScriptSetting(data.acquireScript);
    } else {
      this.acquireScript = undefined;
    }
    if (data && data.overflowScript !== undefined && Object.keys(data.overflowScript).length > 0) {
      this.overflowScript = new ScriptSetting(data.overflowScript);
    } else {
      this.overflowScript = undefined;
    }
    if (data && data.consumeScript !== undefined && Object.keys(data.consumeScript).length > 0) {
      this.consumeScript = new ScriptSetting(data.consumeScript);
    } else {
      this.consumeScript = undefined;
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

  public withAcquireScript(acquireScript?: ScriptSetting): this {
    this.acquireScript = acquireScript as ScriptSetting;
    return this;
  }

  public withOverflowScript(overflowScript?: ScriptSetting): this {
    this.overflowScript = overflowScript as ScriptSetting;
    return this;
  }

  public withConsumeScript(consumeScript?: ScriptSetting): this {
    this.consumeScript = consumeScript as ScriptSetting;
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
    if (this.acquireScript) {
      data.acquireScript = this.acquireScript.toDict();
    }
    if (this.overflowScript) {
      data.overflowScript = this.overflowScript.toDict();
    }
    if (this.consumeScript) {
      data.consumeScript = this.consumeScript.toDict();
    }
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

export class DescribeInventoryModelMastersRequest extends Gs2Request {
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

export class CreateInventoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public name?: string;
  /** インベントリモデルマスターの説明 */
  public description?: string;
  /** インベントリの種類のメタデータ */
  public metadata?: string;
  /** インベントリの初期サイズ */
  public initialCapacity?: number;
  /** インベントリの最大サイズ */
  public maxCapacity?: number;

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
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity as number;
    } else {
      this.initialCapacity = undefined;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity as number;
    } else {
      this.maxCapacity = undefined;
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

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity as number;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.initialCapacity = this.initialCapacity;
    data.maxCapacity = this.maxCapacity;
    return data;
  }

}

export class GetInventoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    return data;
  }

}

export class UpdateInventoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** インベントリモデルマスターの説明 */
  public description?: string;
  /** インベントリの種類のメタデータ */
  public metadata?: string;
  /** インベントリの初期サイズ */
  public initialCapacity?: number;
  /** インベントリの最大サイズ */
  public maxCapacity?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity as number;
    } else {
      this.initialCapacity = undefined;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity as number;
    } else {
      this.maxCapacity = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity as number;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.initialCapacity = this.initialCapacity;
    data.maxCapacity = this.maxCapacity;
    return data;
  }

}

export class DeleteInventoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    return data;
  }

}

export class DescribeInventoryModelsRequest extends Gs2Request {
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

export class GetInventoryModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    return data;
  }

}

export class DescribeItemModelMastersRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アイテムの種類名 */
  public inventoryName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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
    data.inventoryName = this.inventoryName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateItemModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アイテムの種類名 */
  public inventoryName?: string;
  /** アイテムモデルの種類名 */
  public name?: string;
  /** アイテムモデルマスターの説明 */
  public description?: string;
  /** アイテムモデルの種類のメタデータ */
  public metadata?: string;
  /** スタック可能な最大数量 */
  public stackingLimit?: number;
  /** スタック可能な最大数量を超えた時複数枠にアイテムを保管することを許すか */
  public allowMultipleStacks?: boolean;
  /** 表示順番 */
  public sortValue?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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
    if (data && data.stackingLimit !== undefined) {
      this.stackingLimit = data.stackingLimit as number;
    } else {
      this.stackingLimit = undefined;
    }
    if (data && data.allowMultipleStacks !== undefined) {
      this.allowMultipleStacks = data.allowMultipleStacks as boolean;
    } else {
      this.allowMultipleStacks = undefined;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue as number;
    } else {
      this.sortValue = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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

  public withStackingLimit(stackingLimit?: number): this {
    this.stackingLimit = stackingLimit as number;
    return this;
  }

  public withAllowMultipleStacks(allowMultipleStacks?: boolean): this {
    this.allowMultipleStacks = allowMultipleStacks as boolean;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.stackingLimit = this.stackingLimit;
    data.allowMultipleStacks = this.allowMultipleStacks;
    data.sortValue = this.sortValue;
    return data;
  }

}

export class GetItemModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** アイテムモデルの種類名 */
  public itemName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    return data;
  }

}

export class UpdateItemModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** アイテムモデルの種類名 */
  public itemName?: string;
  /** アイテムモデルマスターの説明 */
  public description?: string;
  /** アイテムモデルの種類のメタデータ */
  public metadata?: string;
  /** スタック可能な最大数量 */
  public stackingLimit?: number;
  /** スタック可能な最大数量を超えた時複数枠にアイテムを保管することを許すか */
  public allowMultipleStacks?: boolean;
  /** 表示順番 */
  public sortValue?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
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
    if (data && data.stackingLimit !== undefined) {
      this.stackingLimit = data.stackingLimit as number;
    } else {
      this.stackingLimit = undefined;
    }
    if (data && data.allowMultipleStacks !== undefined) {
      this.allowMultipleStacks = data.allowMultipleStacks as boolean;
    } else {
      this.allowMultipleStacks = undefined;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue as number;
    } else {
      this.sortValue = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
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

  public withStackingLimit(stackingLimit?: number): this {
    this.stackingLimit = stackingLimit as number;
    return this;
  }

  public withAllowMultipleStacks(allowMultipleStacks?: boolean): this {
    this.allowMultipleStacks = allowMultipleStacks as boolean;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.stackingLimit = this.stackingLimit;
    data.allowMultipleStacks = this.allowMultipleStacks;
    data.sortValue = this.sortValue;
    return data;
  }

}

export class DeleteItemModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** アイテムモデルの種類名 */
  public itemName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    return data;
  }

}

export class DescribeItemModelsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    return data;
  }

}

export class GetItemModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** アイテムモデルの種類名 */
  public itemName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
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

export class GetCurrentItemModelMasterRequest extends Gs2Request {
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

export class UpdateCurrentItemModelMasterRequest extends Gs2Request {
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

export class UpdateCurrentItemModelMasterFromGitHubRequest extends Gs2Request {
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

export class DescribeInventoriesRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
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

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
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
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeInventoriesByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
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

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
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
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetInventoryRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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
    data.inventoryName = this.inventoryName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetInventoryByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AddCapacityByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 加算するキャパシティサイズ */
  public addCapacityValue?: number;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.addCapacityValue !== undefined) {
      this.addCapacityValue = data.addCapacityValue as number;
    } else {
      this.addCapacityValue = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAddCapacityValue(addCapacityValue?: number): this {
    this.addCapacityValue = addCapacityValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.addCapacityValue = this.addCapacityValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetCapacityByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 現在のインベントリの最大キャパシティ */
  public newCapacityValue?: number;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.newCapacityValue !== undefined) {
      this.newCapacityValue = data.newCapacityValue as number;
    } else {
      this.newCapacityValue = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withNewCapacityValue(newCapacityValue?: number): this {
    this.newCapacityValue = newCapacityValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.newCapacityValue = this.newCapacityValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteInventoryByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AddCapacityByStampSheetRequest extends Gs2Request {
  /** スタンプシート */
  public stampSheet?: string;
  /** スタンプシートの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampSheet !== undefined) {
      this.stampSheet = data.stampSheet as string;
    } else {
      this.stampSheet = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetCapacityByStampSheetRequest extends Gs2Request {
  /** スタンプシート */
  public stampSheet?: string;
  /** スタンプシートの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampSheet !== undefined) {
      this.stampSheet = data.stampSheet as string;
    } else {
      this.stampSheet = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeItemSetsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
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
    data.inventoryName = this.inventoryName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeItemSetsByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
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

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetItemSetRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
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
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetItemSetByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetItemWithSignatureRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
  /** 署名の発行に使用する暗号鍵 のGRN */
  public keyId?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
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
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    data.itemSetName = this.itemSetName;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetItemWithSignatureByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
  /** 署名の発行に使用する暗号鍵 のGRN */
  public keyId?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.itemSetName = this.itemSetName;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AcquireItemSetByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの種類名 */
  public inventoryName?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 入手する量 */
  public acquireCount?: number;
  /** 有効期限 */
  public expiresAt?: number;
  /** 既存の ItemSet に空きがあったとしても、新しい ItemSet を作成するか */
  public createNewItemSet?: boolean;
  /** 追加先のアイテムセットの名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.acquireCount !== undefined) {
      this.acquireCount = data.acquireCount as number;
    } else {
      this.acquireCount = undefined;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt as number;
    } else {
      this.expiresAt = undefined;
    }
    if (data && data.createNewItemSet !== undefined) {
      this.createNewItemSet = data.createNewItemSet as boolean;
    } else {
      this.createNewItemSet = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAcquireCount(acquireCount?: number): this {
    this.acquireCount = acquireCount as number;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt as number;
    return this;
  }

  public withCreateNewItemSet(createNewItemSet?: boolean): this {
    this.createNewItemSet = createNewItemSet as boolean;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    data.userId = this.userId;
    data.acquireCount = this.acquireCount;
    data.expiresAt = this.expiresAt;
    data.createNewItemSet = this.createNewItemSet;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ConsumeItemSetRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** 消費する量 */
  public consumeCount?: number;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.consumeCount !== undefined) {
      this.consumeCount = data.consumeCount as number;
    } else {
      this.consumeCount = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withConsumeCount(consumeCount?: number): this {
    this.consumeCount = consumeCount as number;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
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
    data.inventoryName = this.inventoryName;
    data.itemName = this.itemName;
    data.consumeCount = this.consumeCount;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ConsumeItemSetByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** 消費する量 */
  public consumeCount?: number;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.consumeCount !== undefined) {
      this.consumeCount = data.consumeCount as number;
    } else {
      this.consumeCount = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withConsumeCount(consumeCount?: number): this {
    this.consumeCount = consumeCount as number;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.consumeCount = this.consumeCount;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteItemSetByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** アイテムセットを識別する名前 */
  public itemSetName?: string;
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
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName as string;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName as string;
    } else {
      this.itemName = undefined;
    }
    if (data && data.itemSetName !== undefined) {
      this.itemSetName = data.itemSetName as string;
    } else {
      this.itemSetName = undefined;
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

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName as string;
    return this;
  }

  public withItemSetName(itemSetName?: string): this {
    this.itemSetName = itemSetName as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.itemSetName = this.itemSetName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AcquireItemSetByStampSheetRequest extends Gs2Request {
  /** スタンプシート */
  public stampSheet?: string;
  /** スタンプシートの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampSheet !== undefined) {
      this.stampSheet = data.stampSheet as string;
    } else {
      this.stampSheet = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ConsumeItemSetByStampTaskRequest extends Gs2Request {
  /** スタンプタスク */
  public stampTask?: string;
  /** スタンプタスクの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampTask !== undefined) {
      this.stampTask = data.stampTask as string;
    } else {
      this.stampTask = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampTask(stampTask?: string): this {
    this.stampTask = stampTask as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampTask = this.stampTask;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
