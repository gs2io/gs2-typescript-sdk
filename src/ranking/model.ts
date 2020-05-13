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
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
  /** 最終集計日時リスト */
  public lastCalculatedAts?: CalculatedAt[];
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
    if (data && data.lastCalculatedAts !== undefined) {
      this.lastCalculatedAts = data.lastCalculatedAts as CalculatedAt[];
      for (let i = 0; i < data.lastCalculatedAts.length; i++) {
            this.lastCalculatedAts[i] = new CalculatedAt(data.lastCalculatedAts[i]);
      }
    } else {
      this.lastCalculatedAts = undefined;
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

  public withLastCalculatedAts(lastCalculatedAts?: CalculatedAt[]): this {
    this.lastCalculatedAts = lastCalculatedAts as CalculatedAt[];
    if (lastCalculatedAts) {
      for (let i = 0; i < lastCalculatedAts!.length; i++) {
          this.lastCalculatedAts[i] = lastCalculatedAts![i];
      }
    }
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
    if (this.lastCalculatedAts) {
      data.lastCalculatedAts = this.lastCalculatedAts.map((item) => item.toDict());
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
 * カテゴリ
 *
 * @author Game Server Services, Inc.
 *
 */
export class CategoryModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, categoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{categoryName}', categoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getCategoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** カテゴリ */
  public categoryModelId?: string;
  /** カテゴリ名 */
  public name?: string;
  /** カテゴリのメタデータ */
  public metadata?: string;
  /** スコアの最小値 */
  public minimumValue?: number;
  /** スコアの最大値 */
  public maximumValue?: number;
  /** スコアのソート方向 */
  public orderDirection?: string;
  /** ランキングの種類 */
  public scope?: string;
  /** ユーザID毎にスコアを1つしか登録されないようにする */
  public uniqueByUserId?: boolean;
  /** スコアの集計間隔(分) */
  public calculateIntervalMinutes?: number;
  /** スコアの登録可能期間とするイベントマスター のGRN */
  public entryPeriodEventId?: string;
  /** アクセス可能期間とするイベントマスター のGRN */
  public accessPeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.categoryModelId !== undefined) {
      this.categoryModelId = data.categoryModelId;
    } else {
      this.categoryModelId = undefined;
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
    if (data && data.minimumValue !== undefined) {
      this.minimumValue = data.minimumValue;
    } else {
      this.minimumValue = 0;
    }
    if (data && data.maximumValue !== undefined) {
      this.maximumValue = data.maximumValue;
    } else {
      this.maximumValue = 0;
    }
    if (data && data.orderDirection !== undefined) {
      this.orderDirection = data.orderDirection;
    } else {
      this.orderDirection = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope;
    } else {
      this.scope = undefined;
    }
    if (data && data.uniqueByUserId !== undefined) {
      this.uniqueByUserId = data.uniqueByUserId;
    } else {
      this.uniqueByUserId = false;
    }
    if (data && data.calculateIntervalMinutes !== undefined) {
      this.calculateIntervalMinutes = data.calculateIntervalMinutes;
    } else {
      this.calculateIntervalMinutes = 0;
    }
    if (data && data.entryPeriodEventId !== undefined) {
      this.entryPeriodEventId = data.entryPeriodEventId;
    } else {
      this.entryPeriodEventId = undefined;
    }
    if (data && data.accessPeriodEventId !== undefined) {
      this.accessPeriodEventId = data.accessPeriodEventId;
    } else {
      this.accessPeriodEventId = undefined;
    }
  }

  public withCategoryModelId(categoryModelId?: string): this {
    this.categoryModelId = categoryModelId;
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

  public withMinimumValue(minimumValue?: number): this {
    this.minimumValue = minimumValue;
    return this;
  }

  public withMaximumValue(maximumValue?: number): this {
    this.maximumValue = maximumValue;
    return this;
  }

  public withOrderDirection(orderDirection?: string): this {
    this.orderDirection = orderDirection;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope;
    return this;
  }

  public withUniqueByUserId(uniqueByUserId?: boolean): this {
    this.uniqueByUserId = uniqueByUserId;
    return this;
  }

  public withCalculateIntervalMinutes(calculateIntervalMinutes?: number): this {
    this.calculateIntervalMinutes = calculateIntervalMinutes;
    return this;
  }

  public withEntryPeriodEventId(entryPeriodEventId?: string): this {
    this.entryPeriodEventId = entryPeriodEventId;
    return this;
  }

  public withAccessPeriodEventId(accessPeriodEventId?: string): this {
    this.accessPeriodEventId = accessPeriodEventId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.categoryModelId = this.categoryModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.minimumValue = this.minimumValue;
    data.maximumValue = this.maximumValue;
    data.orderDirection = this.orderDirection;
    data.scope = this.scope;
    data.uniqueByUserId = this.uniqueByUserId;
    data.calculateIntervalMinutes = this.calculateIntervalMinutes;
    data.entryPeriodEventId = this.entryPeriodEventId;
    data.accessPeriodEventId = this.accessPeriodEventId;
    return data;
  }

}


/**
 * カテゴリマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CategoryModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, categoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{categoryName}', categoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getCategoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** カテゴリマスター */
  public categoryModelId?: string;
  /** カテゴリモデル名 */
  public name?: string;
  /** カテゴリマスターの説明 */
  public description?: string;
  /** カテゴリマスターのメタデータ */
  public metadata?: string;
  /** スコアの最小値 */
  public minimumValue?: number;
  /** スコアの最大値 */
  public maximumValue?: number;
  /** スコアのソート方向 */
  public orderDirection?: string;
  /** ランキングの種類 */
  public scope?: string;
  /** ユーザID毎にスコアを1つしか登録されないようにする */
  public uniqueByUserId?: boolean;
  /** スコアの集計間隔(分) */
  public calculateIntervalMinutes?: number;
  /** スコアの登録可能期間とするイベントマスター のGRN */
  public entryPeriodEventId?: string;
  /** アクセス可能期間とするイベントマスター のGRN */
  public accessPeriodEventId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.categoryModelId !== undefined) {
      this.categoryModelId = data.categoryModelId;
    } else {
      this.categoryModelId = undefined;
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
    if (data && data.minimumValue !== undefined) {
      this.minimumValue = data.minimumValue;
    } else {
      this.minimumValue = 0;
    }
    if (data && data.maximumValue !== undefined) {
      this.maximumValue = data.maximumValue;
    } else {
      this.maximumValue = 0;
    }
    if (data && data.orderDirection !== undefined) {
      this.orderDirection = data.orderDirection;
    } else {
      this.orderDirection = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope;
    } else {
      this.scope = undefined;
    }
    if (data && data.uniqueByUserId !== undefined) {
      this.uniqueByUserId = data.uniqueByUserId;
    } else {
      this.uniqueByUserId = false;
    }
    if (data && data.calculateIntervalMinutes !== undefined) {
      this.calculateIntervalMinutes = data.calculateIntervalMinutes;
    } else {
      this.calculateIntervalMinutes = 0;
    }
    if (data && data.entryPeriodEventId !== undefined) {
      this.entryPeriodEventId = data.entryPeriodEventId;
    } else {
      this.entryPeriodEventId = undefined;
    }
    if (data && data.accessPeriodEventId !== undefined) {
      this.accessPeriodEventId = data.accessPeriodEventId;
    } else {
      this.accessPeriodEventId = undefined;
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

  public withCategoryModelId(categoryModelId?: string): this {
    this.categoryModelId = categoryModelId;
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

  public withMinimumValue(minimumValue?: number): this {
    this.minimumValue = minimumValue;
    return this;
  }

  public withMaximumValue(maximumValue?: number): this {
    this.maximumValue = maximumValue;
    return this;
  }

  public withOrderDirection(orderDirection?: string): this {
    this.orderDirection = orderDirection;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope;
    return this;
  }

  public withUniqueByUserId(uniqueByUserId?: boolean): this {
    this.uniqueByUserId = uniqueByUserId;
    return this;
  }

  public withCalculateIntervalMinutes(calculateIntervalMinutes?: number): this {
    this.calculateIntervalMinutes = calculateIntervalMinutes;
    return this;
  }

  public withEntryPeriodEventId(entryPeriodEventId?: string): this {
    this.entryPeriodEventId = entryPeriodEventId;
    return this;
  }

  public withAccessPeriodEventId(accessPeriodEventId?: string): this {
    this.accessPeriodEventId = accessPeriodEventId;
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
    data.categoryModelId = this.categoryModelId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.minimumValue = this.minimumValue;
    data.maximumValue = this.maximumValue;
    data.orderDirection = this.orderDirection;
    data.scope = this.scope;
    data.uniqueByUserId = this.uniqueByUserId;
    data.calculateIntervalMinutes = this.calculateIntervalMinutes;
    data.entryPeriodEventId = this.entryPeriodEventId;
    data.accessPeriodEventId = this.accessPeriodEventId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 購読
 *
 * @author Game Server Services, Inc.
 *
 */
export class Subscribe implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, categoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{categoryName}', categoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getCategoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:subscribe:category:{categoryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** 購読 */
  public subscribeId?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読されるユーザIDリスト */
  public targetUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.subscribeId !== undefined) {
      this.subscribeId = data.subscribeId;
    } else {
      this.subscribeId = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserIds !== undefined) {
      this.targetUserIds = data.targetUserIds as string[];
      for (let i = 0; i < data.targetUserIds.length; i++) {
            this.targetUserIds[i] = data.targetUserIds[i];
      }
    } else {
      this.targetUserIds = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withSubscribeId(subscribeId?: string): this {
    this.subscribeId = subscribeId;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserIds(targetUserIds?: string[]): this {
    this.targetUserIds = targetUserIds as string[];
    if (targetUserIds) {
      for (let i = 0; i < targetUserIds!.length; i++) {
          this.targetUserIds[i] = String(targetUserIds![i]);
      }
    }
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.subscribeId = this.subscribeId;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.targetUserIds = this.targetUserIds;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * スコア
 *
 * @author Game Server Services, Inc.
 *
 */
export class Score implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, uniqueId: string, scorerUserId: string, categoryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{uniqueId}', uniqueId)
      .replace('{scorerUserId}', scorerUserId)
      .replace('{categoryName}', categoryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getUniqueIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getScorerUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }

  public static getCategoryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:category:{categoryName}:score:{scorerUserId}:{uniqueId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{uniqueId}', '(.*)');
    grnFormat = grnFormat.replace('{scorerUserId}', '(.*)');
    grnFormat = grnFormat.replace('{categoryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[7];
    }
    return undefined;
  }
  /** スコア */
  public scoreId?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** ユーザID */
  public userId?: string;
  /** スコアのユニークID */
  public uniqueId?: string;
  /** スコアを獲得したユーザID */
  public scorerUserId?: string;
  /** スコア */
  public score?: number;
  /** メタデータ */
  public metadata?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.scoreId !== undefined) {
      this.scoreId = data.scoreId;
    } else {
      this.scoreId = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.uniqueId !== undefined) {
      this.uniqueId = data.uniqueId;
    } else {
      this.uniqueId = undefined;
    }
    if (data && data.scorerUserId !== undefined) {
      this.scorerUserId = data.scorerUserId;
    } else {
      this.scorerUserId = undefined;
    }
    if (data && data.score !== undefined) {
      this.score = data.score;
    } else {
      this.score = 0;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withScoreId(scoreId?: string): this {
    this.scoreId = scoreId;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withUniqueId(uniqueId?: string): this {
    this.uniqueId = uniqueId;
    return this;
  }

  public withScorerUserId(scorerUserId?: string): this {
    this.scorerUserId = scorerUserId;
    return this;
  }

  public withScore(score?: number): this {
    this.score = score;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.scoreId = this.scoreId;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.uniqueId = this.uniqueId;
    data.scorerUserId = this.scorerUserId;
    data.score = this.score;
    data.metadata = this.metadata;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * ランキング
 *
 * @author Game Server Services, Inc.
 *
 */
export class Ranking implements IModel {
  /** 順位 */
  public rank?: number;
  /** 1位からのインデックス */
  public index?: number;
  /** ユーザID */
  public userId?: string;
  /** スコア */
  public score?: number;
  /** メタデータ */
  public metadata?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.rank !== undefined) {
      this.rank = data.rank;
    } else {
      this.rank = 0;
    }
    if (data && data.index !== undefined) {
      this.index = data.index;
    } else {
      this.index = 0;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.score !== undefined) {
      this.score = data.score;
    } else {
      this.score = 0;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withRank(rank?: number): this {
    this.rank = rank;
    return this;
  }

  public withIndex(index?: number): this {
    this.index = index;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withScore(score?: number): this {
    this.score = score;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.rank = this.rank;
    data.index = this.index;
    data.userId = this.userId;
    data.score = this.score;
    data.metadata = this.metadata;
    data.createdAt = this.createdAt;
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
 * 現在有効なランキング設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentRankingMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:ranking:{namespaceName}';
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
 * 集計日時
 *
 * @author Game Server Services, Inc.
 *
 */
export class CalculatedAt implements IModel {
  /** カテゴリ名 */
  public categoryName?: string;
  /** 集計日時 */
  public calculatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.calculatedAt !== undefined) {
      this.calculatedAt = data.calculatedAt;
    } else {
      this.calculatedAt = 0;
    }
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName;
    return this;
  }

  public withCalculatedAt(calculatedAt?: number): this {
    this.calculatedAt = calculatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.categoryName = this.categoryName;
    data.calculatedAt = this.calculatedAt;
    return data;
  }

}


/**
 * 購読対象
 *
 * @author Game Server Services, Inc.
 *
 */
export class SubscribeUser implements IModel {
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId;
    } else {
      this.targetUserId = undefined;
    }
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.targetUserId = this.targetUserId;
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
