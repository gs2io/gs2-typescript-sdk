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

import { Gs2Request } from '@/gs2/core/model';

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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.description = this.description;
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

export class DescribeCategoryModelsRequest extends Gs2Request {
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

export class GetCategoryModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリモデル名 */
  public categoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    return data;
  }

}

export class DescribeCategoryModelMastersRequest extends Gs2Request {
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

export class CreateCategoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
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
    if (data && data.minimumValue !== undefined) {
      this.minimumValue = data.minimumValue as number;
    } else {
      this.minimumValue = undefined;
    }
    if (data && data.maximumValue !== undefined) {
      this.maximumValue = data.maximumValue as number;
    } else {
      this.maximumValue = undefined;
    }
    if (data && data.orderDirection !== undefined) {
      this.orderDirection = data.orderDirection as string;
    } else {
      this.orderDirection = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope as string;
    } else {
      this.scope = undefined;
    }
    if (data && data.uniqueByUserId !== undefined) {
      this.uniqueByUserId = data.uniqueByUserId as boolean;
    } else {
      this.uniqueByUserId = undefined;
    }
    if (data && data.calculateIntervalMinutes !== undefined) {
      this.calculateIntervalMinutes = data.calculateIntervalMinutes as number;
    } else {
      this.calculateIntervalMinutes = undefined;
    }
    if (data && data.entryPeriodEventId !== undefined) {
      this.entryPeriodEventId = data.entryPeriodEventId as string;
    } else {
      this.entryPeriodEventId = undefined;
    }
    if (data && data.accessPeriodEventId !== undefined) {
      this.accessPeriodEventId = data.accessPeriodEventId as string;
    } else {
      this.accessPeriodEventId = undefined;
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

  public withMinimumValue(minimumValue?: number): this {
    this.minimumValue = minimumValue as number;
    return this;
  }

  public withMaximumValue(maximumValue?: number): this {
    this.maximumValue = maximumValue as number;
    return this;
  }

  public withOrderDirection(orderDirection?: string): this {
    this.orderDirection = orderDirection as string;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope as string;
    return this;
  }

  public withUniqueByUserId(uniqueByUserId?: boolean): this {
    this.uniqueByUserId = uniqueByUserId as boolean;
    return this;
  }

  public withCalculateIntervalMinutes(calculateIntervalMinutes?: number): this {
    this.calculateIntervalMinutes = calculateIntervalMinutes as number;
    return this;
  }

  public withEntryPeriodEventId(entryPeriodEventId?: string): this {
    this.entryPeriodEventId = entryPeriodEventId as string;
    return this;
  }

  public withAccessPeriodEventId(accessPeriodEventId?: string): this {
    this.accessPeriodEventId = accessPeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
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
    return data;
  }

}

export class GetCategoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリモデル名 */
  public categoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    return data;
  }

}

export class UpdateCategoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリモデル名 */
  public categoryName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
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
    if (data && data.minimumValue !== undefined) {
      this.minimumValue = data.minimumValue as number;
    } else {
      this.minimumValue = undefined;
    }
    if (data && data.maximumValue !== undefined) {
      this.maximumValue = data.maximumValue as number;
    } else {
      this.maximumValue = undefined;
    }
    if (data && data.orderDirection !== undefined) {
      this.orderDirection = data.orderDirection as string;
    } else {
      this.orderDirection = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope as string;
    } else {
      this.scope = undefined;
    }
    if (data && data.uniqueByUserId !== undefined) {
      this.uniqueByUserId = data.uniqueByUserId as boolean;
    } else {
      this.uniqueByUserId = undefined;
    }
    if (data && data.calculateIntervalMinutes !== undefined) {
      this.calculateIntervalMinutes = data.calculateIntervalMinutes as number;
    } else {
      this.calculateIntervalMinutes = undefined;
    }
    if (data && data.entryPeriodEventId !== undefined) {
      this.entryPeriodEventId = data.entryPeriodEventId as string;
    } else {
      this.entryPeriodEventId = undefined;
    }
    if (data && data.accessPeriodEventId !== undefined) {
      this.accessPeriodEventId = data.accessPeriodEventId as string;
    } else {
      this.accessPeriodEventId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
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

  public withMinimumValue(minimumValue?: number): this {
    this.minimumValue = minimumValue as number;
    return this;
  }

  public withMaximumValue(maximumValue?: number): this {
    this.maximumValue = maximumValue as number;
    return this;
  }

  public withOrderDirection(orderDirection?: string): this {
    this.orderDirection = orderDirection as string;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope as string;
    return this;
  }

  public withUniqueByUserId(uniqueByUserId?: boolean): this {
    this.uniqueByUserId = uniqueByUserId as boolean;
    return this;
  }

  public withCalculateIntervalMinutes(calculateIntervalMinutes?: number): this {
    this.calculateIntervalMinutes = calculateIntervalMinutes as number;
    return this;
  }

  public withEntryPeriodEventId(entryPeriodEventId?: string): this {
    this.entryPeriodEventId = entryPeriodEventId as string;
    return this;
  }

  public withAccessPeriodEventId(accessPeriodEventId?: string): this {
    this.accessPeriodEventId = accessPeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
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
    return data;
  }

}

export class DeleteCategoryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリモデル名 */
  public categoryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    return data;
  }

}

export class DescribeSubscribesByCategoryNameRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
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
    data.categoryName = this.categoryName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeSubscribesByCategoryNameAndUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
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
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
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
    data.categoryName = this.categoryName;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetSubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
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
    data.categoryName = this.categoryName;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetSubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UnsubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
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
    data.categoryName = this.categoryName;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UnsubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読されるユーザID */
  public targetUserId?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId as string;
    } else {
      this.targetUserId = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.targetUserId = this.targetUserId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeRankingsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** ランキングの取得を開始するインデックス */
  public startIndex?: number;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.startIndex !== undefined) {
      this.startIndex = data.startIndex as number;
    } else {
      this.startIndex = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withStartIndex(startIndex?: number): this {
    this.startIndex = startIndex as number;
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
    data.categoryName = this.categoryName;
    data.startIndex = this.startIndex;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeRankingssByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** ユーザID */
  public userId?: string;
  /** ランキングの取得を開始するインデックス */
  public startIndex?: number;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.startIndex !== undefined) {
      this.startIndex = data.startIndex as number;
    } else {
      this.startIndex = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withStartIndex(startIndex?: number): this {
    this.startIndex = startIndex as number;
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
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.startIndex = this.startIndex;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeNearRankingsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** スコア */
  public score?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.score !== undefined) {
      this.score = data.score as number;
    } else {
      this.score = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withScore(score?: number): this {
    this.score = score as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    data.score = this.score;
    return data;
  }

}

export class PutScoreRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** スコア */
  public score?: number;
  /** メタデータ */
  public metadata?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.score !== undefined) {
      this.score = data.score as number;
    } else {
      this.score = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withScore(score?: number): this {
    this.score = score as number;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
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
    data.categoryName = this.categoryName;
    data.score = this.score;
    data.metadata = this.metadata;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class PutScoreByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カテゴリ名 */
  public categoryName?: string;
  /** ユーザID */
  public userId?: string;
  /** スコア */
  public score?: number;
  /** メタデータ */
  public metadata?: string;
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
    if (data && data.categoryName !== undefined) {
      this.categoryName = data.categoryName as string;
    } else {
      this.categoryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.score !== undefined) {
      this.score = data.score as number;
    } else {
      this.score = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
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

  public withCategoryName(categoryName?: string): this {
    this.categoryName = categoryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withScore(score?: number): this {
    this.score = score as number;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.categoryName = this.categoryName;
    data.userId = this.userId;
    data.score = this.score;
    data.metadata = this.metadata;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
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

export class GetCurrentRankingMasterRequest extends Gs2Request {
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

export class UpdateCurrentRankingMasterRequest extends Gs2Request {
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

export class UpdateCurrentRankingMasterFromGitHubRequest extends Gs2Request {
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
