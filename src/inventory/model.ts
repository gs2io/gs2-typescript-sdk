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

import IModel from '@/gs2/core/interface/IModel';


/**
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** ネームスペース */
  public namespaceId?: string;
  /** オーナーID */
  public ownerId?: string;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.namespaceId !== undefined) {
      this.namespaceId = data.namespaceId;
    } else {
      this.namespaceId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
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
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withNamespaceId(namespaceId?: string): this {
    this.namespaceId = namespaceId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
    return this;
  }

  public withAcquireScript(acquireScript?: ScriptSetting): this {
    this.acquireScript = acquireScript;
    return this;
  }

  public withOverflowScript(overflowScript?: ScriptSetting): this {
    this.overflowScript = overflowScript;
    return this;
  }

  public withConsumeScript(consumeScript?: ScriptSetting): this {
    this.consumeScript = consumeScript;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceId = this.namespaceId;
    data.ownerId = this.ownerId;
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
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * インベントリモデルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class InventoryModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, inventoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{inventoryName}', inventoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** インベントリモデルマスター */
  public inventoryModelId?: string;
  /** インベントリの種類名 */
  public name?: string;
  /** インベントリの種類のメタデータ */
  public metadata?: string;
  /** インベントリモデルマスターの説明 */
  public description?: string;
  /** インベントリの初期サイズ */
  public initialCapacity?: number;
  /** インベントリの最大サイズ */
  public maxCapacity?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.inventoryModelId !== undefined) {
      this.inventoryModelId = data.inventoryModelId;
    } else {
      this.inventoryModelId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
    } else {
      this.description = undefined;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity;
    } else {
      this.initialCapacity = 0;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity;
    } else {
      this.maxCapacity = 0;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withInventoryModelId(inventoryModelId?: string): this {
    this.inventoryModelId = inventoryModelId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.inventoryModelId = this.inventoryModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.initialCapacity = this.initialCapacity;
    data.maxCapacity = this.maxCapacity;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * インベントリモデル
 *
 * @author Game Server Services, Inc.
 *
 */
export class InventoryModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, inventoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{inventoryName}', inventoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** インベントリモデル */
  public inventoryModelId?: string;
  /** インベントリの種類名 */
  public name?: string;
  /** インベントリの種類のメタデータ */
  public metadata?: string;
  /** インベントリの初期サイズ */
  public initialCapacity?: number;
  /** インベントリの最大サイズ */
  public maxCapacity?: number;
  /** インベントリに格納可能なアイテムモデル一覧 */
  public itemModels?: ItemModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.inventoryModelId !== undefined) {
      this.inventoryModelId = data.inventoryModelId;
    } else {
      this.inventoryModelId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity;
    } else {
      this.initialCapacity = 0;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity;
    } else {
      this.maxCapacity = 0;
    }
    if (data && data.itemModels !== undefined) {
      this.itemModels = data.itemModels as ItemModel[];
      for (let i = 0; i < data.itemModels.length; i++) {
            this.itemModels[i] = new ItemModel(data.itemModels[i]);
      }
    } else {
      this.itemModels = undefined;
    }
  }

  public withInventoryModelId(inventoryModelId?: string): this {
    this.inventoryModelId = inventoryModelId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity;
    return this;
  }

  public withItemModels(itemModels?: ItemModel[]): this {
    this.itemModels = itemModels as ItemModel[];
    if (itemModels) {
      for (let i = 0; i < itemModels!.length; i++) {
          this.itemModels[i] = itemModels![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.inventoryModelId = this.inventoryModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.initialCapacity = this.initialCapacity;
    data.maxCapacity = this.maxCapacity;
    if (this.itemModels) {
      data.itemModels = this.itemModels.map((item) => item.toDict());
    }
    return data;
  }

}


/**
 * アイテムモデルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class ItemModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, inventoryName: string, itemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{inventoryName}', inventoryName)
      .replace('{itemName}', itemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** アイテムモデルマスター */
  public itemModelId?: string;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.itemModelId !== undefined) {
      this.itemModelId = data.itemModelId;
    } else {
      this.itemModelId = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
    } else {
      this.description = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.stackingLimit !== undefined) {
      this.stackingLimit = data.stackingLimit;
    } else {
      this.stackingLimit = 0;
    }
    if (data && data.allowMultipleStacks !== undefined) {
      this.allowMultipleStacks = data.allowMultipleStacks;
    } else {
      this.allowMultipleStacks = false;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue;
    } else {
      this.sortValue = 0;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withItemModelId(itemModelId?: string): this {
    this.itemModelId = itemModelId;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withStackingLimit(stackingLimit?: number): this {
    this.stackingLimit = stackingLimit;
    return this;
  }

  public withAllowMultipleStacks(allowMultipleStacks?: boolean): this {
    this.allowMultipleStacks = allowMultipleStacks;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.itemModelId = this.itemModelId;
    data.inventoryName = this.inventoryName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.stackingLimit = this.stackingLimit;
    data.allowMultipleStacks = this.allowMultipleStacks;
    data.sortValue = this.sortValue;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * アイテムモデル
 *
 * @author Game Server Services, Inc.
 *
 */
export class ItemModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, inventoryName: string, itemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{inventoryName}', inventoryName)
      .replace('{itemName}', itemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:model:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** アイテムモデルマスター */
  public itemModelId?: string;
  /** アイテムモデルの種類名 */
  public name?: string;
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
    if (data && data.itemModelId !== undefined) {
      this.itemModelId = data.itemModelId;
    } else {
      this.itemModelId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.stackingLimit !== undefined) {
      this.stackingLimit = data.stackingLimit;
    } else {
      this.stackingLimit = 0;
    }
    if (data && data.allowMultipleStacks !== undefined) {
      this.allowMultipleStacks = data.allowMultipleStacks;
    } else {
      this.allowMultipleStacks = false;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue;
    } else {
      this.sortValue = 0;
    }
  }

  public withItemModelId(itemModelId?: string): this {
    this.itemModelId = itemModelId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withStackingLimit(stackingLimit?: number): this {
    this.stackingLimit = stackingLimit;
    return this;
  }

  public withAllowMultipleStacks(allowMultipleStacks?: boolean): this {
    this.allowMultipleStacks = allowMultipleStacks;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.itemModelId = this.itemModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.stackingLimit = this.stackingLimit;
    data.allowMultipleStacks = this.allowMultipleStacks;
    data.sortValue = this.sortValue;
    return data;
  }

}


/**
 * 現在有効な所持品マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentItemModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** ネームスペース名 */
  public namespaceName?: string;
  /** マスターデータ */
  public settings?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.settings !== undefined) {
      this.settings = data.settings;
    } else {
      this.settings = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName;
    return this;
  }

  public withSettings(settings?: string): this {
    this.settings = settings;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.settings = this.settings;
    return data;
  }

}


/**
 * インベントリ
 *
 * @author Game Server Services, Inc.
 *
 */
export class Inventory implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, inventoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{inventoryName}', inventoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** インベントリ */
  public inventoryId?: string;
  /** インベントリモデル名 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 現在のインベントリのキャパシティ使用量 */
  public currentInventoryCapacityUsage?: number;
  /** 現在のインベントリの最大キャパシティ */
  public currentInventoryMaxCapacity?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.inventoryId !== undefined) {
      this.inventoryId = data.inventoryId;
    } else {
      this.inventoryId = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.currentInventoryCapacityUsage !== undefined) {
      this.currentInventoryCapacityUsage = data.currentInventoryCapacityUsage;
    } else {
      this.currentInventoryCapacityUsage = 0;
    }
    if (data && data.currentInventoryMaxCapacity !== undefined) {
      this.currentInventoryMaxCapacity = data.currentInventoryMaxCapacity;
    } else {
      this.currentInventoryMaxCapacity = 0;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withInventoryId(inventoryId?: string): this {
    this.inventoryId = inventoryId;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withCurrentInventoryCapacityUsage(currentInventoryCapacityUsage?: number): this {
    this.currentInventoryCapacityUsage = currentInventoryCapacityUsage;
    return this;
  }

  public withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity?: number): this {
    this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.inventoryId = this.inventoryId;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.currentInventoryCapacityUsage = this.currentInventoryCapacityUsage;
    data.currentInventoryMaxCapacity = this.currentInventoryMaxCapacity;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 有効期限ごとのアイテム所持数量
 *
 * @author Game Server Services, Inc.
 *
 */
export class ItemSet implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, inventoryName: string, itemSetName: string, itemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{inventoryName}', inventoryName)
      .replace('{itemSetName}', itemSetName)
      .replace('{itemName}', itemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getItemSetNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }

  public static getItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemSetName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[7];
    }
    return undefined;
  }
  /** 有効期限ごとのアイテム所持数量 */
  public itemSetId?: string;
  /** アイテムセットを識別する名前 */
  public name?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** 所持数量 */
  public count?: number;
  /** 表示順番 */
  public sortValue?: number;
  /** 有効期限 */
  public expiresAt?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.itemSetId !== undefined) {
      this.itemSetId = data.itemSetId;
    } else {
      this.itemSetId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName;
    } else {
      this.itemName = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue;
    } else {
      this.sortValue = 0;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt;
    } else {
      this.expiresAt = 0;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withItemSetId(itemSetId?: string): this {
    this.itemSetId = itemSetId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.itemSetId = this.itemSetId;
    data.name = this.name;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.count = this.count;
    data.sortValue = this.sortValue;
    data.expiresAt = this.expiresAt;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 有効期限ごとのアイテム所持数量 (このモデルは SDK では使用されません)
 *
 * @author Game Server Services, Inc.
 *
 */
export class ItemSetGroup implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, inventoryName: string, itemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{inventoryName}', inventoryName)
      .replace('{itemName}', itemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getInventoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{inventoryName}', '(.*)');
    grnFormat = grnFormat.replace('{itemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }
  /** 有効期限ごとのアイテム所持数量 (このモデルは SDK では使用されません) */
  public itemSetGroupId?: string;
  /** インベントリの名前 */
  public inventoryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** アイテムマスターの名前 */
  public itemName?: string;
  /** 表示順番 */
  public sortValue?: number;
  /** アイテムセットIDのリスト */
  public itemSetItemSetIdList?: string[];
  /** アイテムセットを識別する名前のリスト */
  public itemSetNameList?: string[];
  /** 所持数量のリスト */
  public itemSetCountList?: number[];
  /** 有効期限のリスト */
  public itemSetExpiresAtList?: number[];
  /** 作成日時のリスト */
  public itemSetCreatedAtList?: number[];
  /** 更新日時のリスト */
  public itemSetUpdatedAtList?: number[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.itemSetGroupId !== undefined) {
      this.itemSetGroupId = data.itemSetGroupId;
    } else {
      this.itemSetGroupId = undefined;
    }
    if (data && data.inventoryName !== undefined) {
      this.inventoryName = data.inventoryName;
    } else {
      this.inventoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.itemName !== undefined) {
      this.itemName = data.itemName;
    } else {
      this.itemName = undefined;
    }
    if (data && data.sortValue !== undefined) {
      this.sortValue = data.sortValue;
    } else {
      this.sortValue = 0;
    }
    if (data && data.itemSetItemSetIdList !== undefined) {
      this.itemSetItemSetIdList = data.itemSetItemSetIdList as string[];
      for (let i = 0; i < data.itemSetItemSetIdList.length; i++) {
            this.itemSetItemSetIdList[i] = data.itemSetItemSetIdList[i];
      }
    } else {
      this.itemSetItemSetIdList = undefined;
    }
    if (data && data.itemSetNameList !== undefined) {
      this.itemSetNameList = data.itemSetNameList as string[];
      for (let i = 0; i < data.itemSetNameList.length; i++) {
            this.itemSetNameList[i] = data.itemSetNameList[i];
      }
    } else {
      this.itemSetNameList = undefined;
    }
    if (data && data.itemSetCountList !== undefined) {
      this.itemSetCountList = data.itemSetCountList as number[];
      for (let i = 0; i < data.itemSetCountList.length; i++) {
            this.itemSetCountList[i] = data.itemSetCountList[i];
      }
    } else {
      this.itemSetCountList = undefined;
    }
    if (data && data.itemSetExpiresAtList !== undefined) {
      this.itemSetExpiresAtList = data.itemSetExpiresAtList as number[];
      for (let i = 0; i < data.itemSetExpiresAtList.length; i++) {
            this.itemSetExpiresAtList[i] = data.itemSetExpiresAtList[i];
      }
    } else {
      this.itemSetExpiresAtList = undefined;
    }
    if (data && data.itemSetCreatedAtList !== undefined) {
      this.itemSetCreatedAtList = data.itemSetCreatedAtList as number[];
      for (let i = 0; i < data.itemSetCreatedAtList.length; i++) {
            this.itemSetCreatedAtList[i] = data.itemSetCreatedAtList[i];
      }
    } else {
      this.itemSetCreatedAtList = undefined;
    }
    if (data && data.itemSetUpdatedAtList !== undefined) {
      this.itemSetUpdatedAtList = data.itemSetUpdatedAtList as number[];
      for (let i = 0; i < data.itemSetUpdatedAtList.length; i++) {
            this.itemSetUpdatedAtList[i] = data.itemSetUpdatedAtList[i];
      }
    } else {
      this.itemSetUpdatedAtList = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withItemSetGroupId(itemSetGroupId?: string): this {
    this.itemSetGroupId = itemSetGroupId;
    return this;
  }

  public withInventoryName(inventoryName?: string): this {
    this.inventoryName = inventoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withItemName(itemName?: string): this {
    this.itemName = itemName;
    return this;
  }

  public withSortValue(sortValue?: number): this {
    this.sortValue = sortValue;
    return this;
  }

  public withItemSetItemSetIdList(itemSetItemSetIdList?: string[]): this {
    this.itemSetItemSetIdList = itemSetItemSetIdList as string[];
    if (itemSetItemSetIdList) {
      for (let i = 0; i < itemSetItemSetIdList!.length; i++) {
          this.itemSetItemSetIdList[i] = String(itemSetItemSetIdList![i]);
      }
    }
    return this;
  }

  public withItemSetNameList(itemSetNameList?: string[]): this {
    this.itemSetNameList = itemSetNameList as string[];
    if (itemSetNameList) {
      for (let i = 0; i < itemSetNameList!.length; i++) {
          this.itemSetNameList[i] = String(itemSetNameList![i]);
      }
    }
    return this;
  }

  public withItemSetCountList(itemSetCountList?: number[]): this {
    this.itemSetCountList = itemSetCountList as number[];
    if (itemSetCountList) {
      for (let i = 0; i < itemSetCountList!.length; i++) {
          this.itemSetCountList[i] = Number(itemSetCountList![i]);
      }
    }
    return this;
  }

  public withItemSetExpiresAtList(itemSetExpiresAtList?: number[]): this {
    this.itemSetExpiresAtList = itemSetExpiresAtList as number[];
    if (itemSetExpiresAtList) {
      for (let i = 0; i < itemSetExpiresAtList!.length; i++) {
          this.itemSetExpiresAtList[i] = Number(itemSetExpiresAtList![i]);
      }
    }
    return this;
  }

  public withItemSetCreatedAtList(itemSetCreatedAtList?: number[]): this {
    this.itemSetCreatedAtList = itemSetCreatedAtList as number[];
    if (itemSetCreatedAtList) {
      for (let i = 0; i < itemSetCreatedAtList!.length; i++) {
          this.itemSetCreatedAtList[i] = Number(itemSetCreatedAtList![i]);
      }
    }
    return this;
  }

  public withItemSetUpdatedAtList(itemSetUpdatedAtList?: number[]): this {
    this.itemSetUpdatedAtList = itemSetUpdatedAtList as number[];
    if (itemSetUpdatedAtList) {
      for (let i = 0; i < itemSetUpdatedAtList!.length; i++) {
          this.itemSetUpdatedAtList[i] = Number(itemSetUpdatedAtList![i]);
      }
    }
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.itemSetGroupId = this.itemSetGroupId;
    data.inventoryName = this.inventoryName;
    data.userId = this.userId;
    data.itemName = this.itemName;
    data.sortValue = this.sortValue;
    data.itemSetItemSetIdList = this.itemSetItemSetIdList;
    data.itemSetNameList = this.itemSetNameList;
    data.itemSetCountList = this.itemSetCountList;
    data.itemSetExpiresAtList = this.itemSetExpiresAtList;
    data.itemSetCreatedAtList = this.itemSetCreatedAtList;
    data.itemSetUpdatedAtList = this.itemSetUpdatedAtList;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * レスポンスキャッシュ
 *
 * @author Game Server Services, Inc.
 *
 */
export class ResponseCache implements IModel {

  public static createGrn(requestHash: string, ownerId: string, region: string): string {
    return 'grn:gs2:{region}:{ownerId}:hash:{requestHash}'
      .replace('{requestHash}', requestHash)
      .replace('{ownerId}', ownerId)
      .replace('{region}', region);
  }

  public static getRequestHashFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** None */
  public region?: string;
  /** オーナーID */
  public ownerId?: string;
  /** レスポンスキャッシュ のGRN */
  public responseCacheId?: string;
  /** None */
  public requestHash?: string;
  /** APIの応答内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.region !== undefined) {
      this.region = data.region;
    } else {
      this.region = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.responseCacheId !== undefined) {
      this.responseCacheId = data.responseCacheId;
    } else {
      this.responseCacheId = undefined;
    }
    if (data && data.requestHash !== undefined) {
      this.requestHash = data.requestHash;
    } else {
      this.requestHash = undefined;
    }
    if (data && data.result !== undefined) {
      this.result = data.result;
    } else {
      this.result = undefined;
    }
  }

  public withRegion(region?: string): this {
    this.region = region;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withResponseCacheId(responseCacheId?: string): this {
    this.responseCacheId = responseCacheId;
    return this;
  }

  public withRequestHash(requestHash?: string): this {
    this.requestHash = requestHash;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.region = this.region;
    data.ownerId = this.ownerId;
    data.responseCacheId = this.responseCacheId;
    data.requestHash = this.requestHash;
    data.result = this.result;
    return data;
  }

}


/**
 * GitHubからリソースをチェックアウトしてくる設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class GitHubCheckoutSetting implements IModel {
  /** リソースの取得に使用するGitHub のAPIキー のGRN */
  public gitHubApiKeyId?: string;
  /** リポジトリ名 */
  public repositoryName?: string;
  /** ソースコードのファイルパス */
  public sourcePath?: string;
  /** コードの取得元 */
  public referenceType?: string;
  /** コミットハッシュ */
  public commitHash?: string;
  /** ブランチ名 */
  public branchName?: string;
  /** タグ名 */
  public tagName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.gitHubApiKeyId !== undefined) {
      this.gitHubApiKeyId = data.gitHubApiKeyId;
    } else {
      this.gitHubApiKeyId = undefined;
    }
    if (data && data.repositoryName !== undefined) {
      this.repositoryName = data.repositoryName;
    } else {
      this.repositoryName = undefined;
    }
    if (data && data.sourcePath !== undefined) {
      this.sourcePath = data.sourcePath;
    } else {
      this.sourcePath = undefined;
    }
    if (data && data.referenceType !== undefined) {
      this.referenceType = data.referenceType;
    } else {
      this.referenceType = undefined;
    }
    if (data && data.commitHash !== undefined) {
      this.commitHash = data.commitHash;
    } else {
      this.commitHash = undefined;
    }
    if (data && data.branchName !== undefined) {
      this.branchName = data.branchName;
    } else {
      this.branchName = undefined;
    }
    if (data && data.tagName !== undefined) {
      this.tagName = data.tagName;
    } else {
      this.tagName = undefined;
    }
  }

  public withGitHubApiKeyId(gitHubApiKeyId?: string): this {
    this.gitHubApiKeyId = gitHubApiKeyId;
    return this;
  }

  public withRepositoryName(repositoryName?: string): this {
    this.repositoryName = repositoryName;
    return this;
  }

  public withSourcePath(sourcePath?: string): this {
    this.sourcePath = sourcePath;
    return this;
  }

  public withReferenceType(referenceType?: string): this {
    this.referenceType = referenceType;
    return this;
  }

  public withCommitHash(commitHash?: string): this {
    this.commitHash = commitHash;
    return this;
  }

  public withBranchName(branchName?: string): this {
    this.branchName = branchName;
    return this;
  }

  public withTagName(tagName?: string): this {
    this.tagName = tagName;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.gitHubApiKeyId = this.gitHubApiKeyId;
    data.repositoryName = this.repositoryName;
    data.sourcePath = this.sourcePath;
    data.referenceType = this.referenceType;
    data.commitHash = this.commitHash;
    data.branchName = this.branchName;
    data.tagName = this.tagName;
    return data;
  }

}


/**
 * スクリプト設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class ScriptSetting implements IModel {
  /** 実行前に使用する GS2-Script のスクリプト のGRN */
  public triggerScriptId?: string;
  /** 完了通知の通知先 */
  public doneTriggerTargetType?: string;
  /** 完了時に使用する GS2-Script のスクリプト のGRN */
  public doneTriggerScriptId?: string;
  /** 完了時に使用する GS2-JobQueue のネームスペース のGRN */
  public doneTriggerQueueNamespaceId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.triggerScriptId !== undefined) {
      this.triggerScriptId = data.triggerScriptId;
    } else {
      this.triggerScriptId = undefined;
    }
    if (data && data.doneTriggerTargetType !== undefined) {
      this.doneTriggerTargetType = data.doneTriggerTargetType;
    } else {
      this.doneTriggerTargetType = undefined;
    }
    if (data && data.doneTriggerScriptId !== undefined) {
      this.doneTriggerScriptId = data.doneTriggerScriptId;
    } else {
      this.doneTriggerScriptId = undefined;
    }
    if (data && data.doneTriggerQueueNamespaceId !== undefined) {
      this.doneTriggerQueueNamespaceId = data.doneTriggerQueueNamespaceId;
    } else {
      this.doneTriggerQueueNamespaceId = undefined;
    }
  }

  public withTriggerScriptId(triggerScriptId?: string): this {
    this.triggerScriptId = triggerScriptId;
    return this;
  }

  public withDoneTriggerTargetType(doneTriggerTargetType?: string): this {
    this.doneTriggerTargetType = doneTriggerTargetType;
    return this;
  }

  public withDoneTriggerScriptId(doneTriggerScriptId?: string): this {
    this.doneTriggerScriptId = doneTriggerScriptId;
    return this;
  }

  public withDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId?: string): this {
    this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.triggerScriptId = this.triggerScriptId;
    data.doneTriggerTargetType = this.doneTriggerTargetType;
    data.doneTriggerScriptId = this.doneTriggerScriptId;
    data.doneTriggerQueueNamespaceId = this.doneTriggerQueueNamespaceId;
    return data;
  }

}


/**
 * ロギング通知設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class LogSetting implements IModel {
  /** ログの記録に使用する GS2-Log のネームスペース のGRN */
  public loggingNamespaceId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.loggingNamespaceId !== undefined) {
      this.loggingNamespaceId = data.loggingNamespaceId;
    } else {
      this.loggingNamespaceId = undefined;
    }
  }

  public withLoggingNamespaceId(loggingNamespaceId?: string): this {
    this.loggingNamespaceId = loggingNamespaceId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.loggingNamespaceId = this.loggingNamespaceId;
    return data;
  }

}
