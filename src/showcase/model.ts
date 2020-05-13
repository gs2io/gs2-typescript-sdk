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

import IModel from '../core/interface/IModel';


/**
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}';
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
  /** 購入処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 購入処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** ネームスペースの説明 */
  public description?: string;
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
    if (data && data.queueNamespaceId !== undefined) {
      this.queueNamespaceId = data.queueNamespaceId;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId;
    } else {
      this.keyId = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
    } else {
      this.description = undefined;
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

  public withQueueNamespaceId(queueNamespaceId?: string): this {
    this.queueNamespaceId = queueNamespaceId;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
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
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    data.description = this.description;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 商品マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class SalesItemMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, salesItemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{salesItemName}', salesItemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getSalesItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 商品マスター */
  public salesItemId?: string;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.salesItemId !== undefined) {
      this.salesItemId = data.salesItemId;
    } else {
      this.salesItemId = undefined;
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

  public withSalesItemId(salesItemId?: string): this {
    this.salesItemId = salesItemId;
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

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
          this.consumeActions[i] = consumeActions![i];
      }
    }
    return this;
  }

  public withAcquireActions(acquireActions?: AcquireAction[]): this {
    this.acquireActions = acquireActions as AcquireAction[];
    if (acquireActions) {
      for (let i = 0; i < acquireActions!.length; i++) {
          this.acquireActions[i] = acquireActions![i];
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
    data.salesItemId = this.salesItemId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.consumeActions) {
      data.consumeActions = this.consumeActions.map((item) => item.toDict());
    }
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 商品グループマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class SalesItemGroupMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, salesItemGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{salesItemGroupName}', salesItemGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getSalesItemGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 商品グループマスター */
  public salesItemGroupId?: string;
  /** 商品名 */
  public name?: string;
  /** 商品グループマスターの説明 */
  public description?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 商品グループに含める商品リスト */
  public salesItemNames?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.salesItemGroupId !== undefined) {
      this.salesItemGroupId = data.salesItemGroupId;
    } else {
      this.salesItemGroupId = undefined;
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
    if (data && data.salesItemNames !== undefined) {
      this.salesItemNames = data.salesItemNames as string[];
      for (let i = 0; i < data.salesItemNames.length; i++) {
            this.salesItemNames[i] = data.salesItemNames[i];
      }
    } else {
      this.salesItemNames = undefined;
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

  public withSalesItemGroupId(salesItemGroupId?: string): this {
    this.salesItemGroupId = salesItemGroupId;
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

  public withSalesItemNames(salesItemNames?: string[]): this {
    this.salesItemNames = salesItemNames as string[];
    if (salesItemNames) {
      for (let i = 0; i < salesItemNames!.length; i++) {
          this.salesItemNames[i] = String(salesItemNames![i]);
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
    data.salesItemGroupId = this.salesItemGroupId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.salesItemNames = this.salesItemNames;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 陳列棚マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class ShowcaseMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, showcaseName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{showcaseName}', showcaseName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getShowcaseNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 陳列棚マスター */
  public showcaseId?: string;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.showcaseId !== undefined) {
      this.showcaseId = data.showcaseId;
    } else {
      this.showcaseId = undefined;
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
    if (data && data.displayItems !== undefined) {
      this.displayItems = data.displayItems as DisplayItemMaster[];
      for (let i = 0; i < data.displayItems.length; i++) {
            this.displayItems[i] = new DisplayItemMaster(data.displayItems[i]);
      }
    } else {
      this.displayItems = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId;
    } else {
      this.salesPeriodEventId = undefined;
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

  public withShowcaseId(showcaseId?: string): this {
    this.showcaseId = showcaseId;
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

  public withDisplayItems(displayItems?: DisplayItemMaster[]): this {
    this.displayItems = displayItems as DisplayItemMaster[];
    if (displayItems) {
      for (let i = 0; i < displayItems!.length; i++) {
          this.displayItems[i] = displayItems![i];
      }
    }
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId;
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
    data.showcaseId = this.showcaseId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.displayItems) {
      data.displayItems = this.displayItems.map((item) => item.toDict());
    }
    data.salesPeriodEventId = this.salesPeriodEventId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 現在有効な陳列棚マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentShowcaseMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:currentShowcase'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:currentShowcase';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:currentShowcase';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:currentShowcase';
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


/**
 * 商品
 *
 * @author Game Server Services, Inc.
 *
 */
export class SalesItem implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, salesItemName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{salesItemName}', salesItemName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getSalesItemNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 商品名 */
  public name?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** 消費アクションリスト */
  public consumeActions?: ConsumeAction[];
  /** 入手アクションリスト */
  public acquireActions?: AcquireAction[];

  constructor(
    data?: { [key: string]: any },
  ) {
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

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
          this.consumeActions[i] = consumeActions![i];
      }
    }
    return this;
  }

  public withAcquireActions(acquireActions?: AcquireAction[]): this {
    this.acquireActions = acquireActions as AcquireAction[];
    if (acquireActions) {
      for (let i = 0; i < acquireActions!.length; i++) {
          this.acquireActions[i] = acquireActions![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
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


/**
 * 商品グループ
 *
 * @author Game Server Services, Inc.
 *
 */
export class SalesItemGroup implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, salesItemGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{salesItemGroupName}', salesItemGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getSalesItemGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItemGroup:{salesItemGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{salesItemGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 商品グループ名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** 商品リスト */
  public salesItems?: SalesItem[];

  constructor(
    data?: { [key: string]: any },
  ) {
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
    if (data && data.salesItems !== undefined) {
      this.salesItems = data.salesItems as SalesItem[];
      for (let i = 0; i < data.salesItems.length; i++) {
            this.salesItems[i] = new SalesItem(data.salesItems[i]);
      }
    } else {
      this.salesItems = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withSalesItems(salesItems?: SalesItem[]): this {
    this.salesItems = salesItems as SalesItem[];
    if (salesItems) {
      for (let i = 0; i < salesItems!.length; i++) {
          this.salesItems[i] = salesItems![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.salesItems) {
      data.salesItems = this.salesItems.map((item) => item.toDict());
    }
    return data;
  }

}


/**
 * 陳列棚
 *
 * @author Game Server Services, Inc.
 *
 */
export class Showcase implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, showcaseName: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{showcaseName}', showcaseName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getShowcaseNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:showcase:{showcaseName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{showcaseName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 陳列棚 */
  public showcaseId?: string;
  /** 商品名 */
  public name?: string;
  /** 商品のメタデータ */
  public metadata?: string;
  /** インベントリに格納可能なアイテムモデル一覧 */
  public displayItems?: DisplayItem[];
  /** 販売期間とするイベントマスター のGRN */
  public salesPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.showcaseId !== undefined) {
      this.showcaseId = data.showcaseId;
    } else {
      this.showcaseId = undefined;
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
    if (data && data.displayItems !== undefined) {
      this.displayItems = data.displayItems as DisplayItem[];
      for (let i = 0; i < data.displayItems.length; i++) {
            this.displayItems[i] = new DisplayItem(data.displayItems[i]);
      }
    } else {
      this.displayItems = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId;
    } else {
      this.salesPeriodEventId = undefined;
    }
  }

  public withShowcaseId(showcaseId?: string): this {
    this.showcaseId = showcaseId;
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

  public withDisplayItems(displayItems?: DisplayItem[]): this {
    this.displayItems = displayItems as DisplayItem[];
    if (displayItems) {
      for (let i = 0; i < displayItems!.length; i++) {
          this.displayItems[i] = displayItems![i];
      }
    }
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.showcaseId = this.showcaseId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.displayItems) {
      data.displayItems = this.displayItems.map((item) => item.toDict());
    }
    data.salesPeriodEventId = this.salesPeriodEventId;
    return data;
  }

}


/**
 * 陳列された商品
 *
 * @author Game Server Services, Inc.
 *
 */
export class DisplayItem implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, displayItemId: string): string {
    return 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{displayItemId}', displayItemId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{displayItemId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{displayItemId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{displayItemId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getDisplayItemIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{displayItemId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 陳列商品ID */
  public displayItemId?: string;
  /** 種類 */
  public type?: string;
  /** 陳列する商品 */
  public salesItem?: SalesItem;
  /** 陳列する商品グループ */
  public salesItemGroup?: SalesItemGroup;
  /** 販売期間とするイベントマスター のGRN */
  public salesPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.displayItemId !== undefined) {
      this.displayItemId = data.displayItemId;
    } else {
      this.displayItemId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.salesItem !== undefined && Object.keys(data.salesItem).length > 0) {
      this.salesItem = new SalesItem(data.salesItem);
    } else {
      this.salesItem = undefined;
    }
    if (data && data.salesItemGroup !== undefined && Object.keys(data.salesItemGroup).length > 0) {
      this.salesItemGroup = new SalesItemGroup(data.salesItemGroup);
    } else {
      this.salesItemGroup = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId;
    } else {
      this.salesPeriodEventId = undefined;
    }
  }

  public withDisplayItemId(displayItemId?: string): this {
    this.displayItemId = displayItemId;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withSalesItem(salesItem?: SalesItem): this {
    this.salesItem = salesItem;
    return this;
  }

  public withSalesItemGroup(salesItemGroup?: SalesItemGroup): this {
    this.salesItemGroup = salesItemGroup;
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.displayItemId = this.displayItemId;
    data.type = this.type;
    if (this.salesItem) {
      data.salesItem = this.salesItem.toDict();
    }
    if (this.salesItemGroup) {
      data.salesItemGroup = this.salesItemGroup.toDict();
    }
    data.salesPeriodEventId = this.salesPeriodEventId;
    return data;
  }

}


/**
 * 設定値
 *
 * @author Game Server Services, Inc.
 *
 */
export class Config implements IModel {
  /** 名前 */
  public key?: string;
  /** 値 */
  public value?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.key !== undefined) {
      this.key = data.key;
    } else {
      this.key = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = undefined;
    }
  }

  public withKey(key?: string): this {
    this.key = key;
    return this;
  }

  public withValue(value?: string): this {
    this.value = value;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.key = this.key;
    data.value = this.value;
    return data;
  }

}


/**
 * 消費アクション
 *
 * @author Game Server Services, Inc.
 *
 */
export class ConsumeAction implements IModel {
  /** スタンプタスクで実行するアクションの種類 */
  public action?: string;
  /** 消費リクエストのJSON */
  public request?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.request !== undefined) {
      this.request = data.request;
    } else {
      this.request = undefined;
    }
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withRequest(request?: string): this {
    this.request = request;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.action = this.action;
    data.request = this.request;
    return data;
  }

}


/**
 * 入手アクション
 *
 * @author Game Server Services, Inc.
 *
 */
export class AcquireAction implements IModel {
  /** スタンプシートで実行するアクションの種類 */
  public action?: string;
  /** 入手リクエストのJSON */
  public request?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.request !== undefined) {
      this.request = data.request;
    } else {
      this.request = undefined;
    }
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withRequest(request?: string): this {
    this.request = request;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.action = this.action;
    data.request = this.request;
    return data;
  }

}


/**
 * None
 *
 * @author Game Server Services, Inc.
 *
 */
export class DisplayItemMaster implements IModel {
  /** 陳列商品ID */
  public displayItemId?: string;
  /** 種類 */
  public type?: string;
  /** 陳列する商品の名前 */
  public salesItemName?: string;
  /** 陳列する商品グループの名前 */
  public salesItemGroupName?: string;
  /** 販売期間とするイベントマスター のGRN */
  public salesPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.displayItemId !== undefined) {
      this.displayItemId = data.displayItemId;
    } else {
      this.displayItemId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.salesItemName !== undefined) {
      this.salesItemName = data.salesItemName;
    } else {
      this.salesItemName = undefined;
    }
    if (data && data.salesItemGroupName !== undefined) {
      this.salesItemGroupName = data.salesItemGroupName;
    } else {
      this.salesItemGroupName = undefined;
    }
    if (data && data.salesPeriodEventId !== undefined) {
      this.salesPeriodEventId = data.salesPeriodEventId;
    } else {
      this.salesPeriodEventId = undefined;
    }
  }

  public withDisplayItemId(displayItemId?: string): this {
    this.displayItemId = displayItemId;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withSalesItemName(salesItemName?: string): this {
    this.salesItemName = salesItemName;
    return this;
  }

  public withSalesItemGroupName(salesItemGroupName?: string): this {
    this.salesItemGroupName = salesItemGroupName;
    return this;
  }

  public withSalesPeriodEventId(salesPeriodEventId?: string): this {
    this.salesPeriodEventId = salesPeriodEventId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.displayItemId = this.displayItemId;
    data.type = this.type;
    data.salesItemName = this.salesItemName;
    data.salesItemGroupName = this.salesItemGroupName;
    data.salesPeriodEventId = this.salesPeriodEventId;
    return data;
  }

}
