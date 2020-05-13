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
  /** 景品付与処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 景品付与処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** 抽選処理時 に実行されるスクリプト のGRN */
  public lotteryTriggerScriptId?: string;
  /** 排出テーブル選択時 に実行されるスクリプト のGRN */
  public choicePrizeTableScriptId?: string;
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
    if (data && data.lotteryTriggerScriptId !== undefined) {
      this.lotteryTriggerScriptId = data.lotteryTriggerScriptId as string;
    } else {
      this.lotteryTriggerScriptId = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId as string;
    } else {
      this.choicePrizeTableScriptId = undefined;
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

  public withLotteryTriggerScriptId(lotteryTriggerScriptId?: string): this {
    this.lotteryTriggerScriptId = lotteryTriggerScriptId as string;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId as string;
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
    data.lotteryTriggerScriptId = this.lotteryTriggerScriptId;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
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
  /** 景品付与処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 景品付与処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** 抽選処理時 に実行されるスクリプト のGRN */
  public lotteryTriggerScriptId?: string;
  /** 排出テーブル選択時 に実行されるスクリプト のGRN */
  public choicePrizeTableScriptId?: string;
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
    if (data && data.lotteryTriggerScriptId !== undefined) {
      this.lotteryTriggerScriptId = data.lotteryTriggerScriptId as string;
    } else {
      this.lotteryTriggerScriptId = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId as string;
    } else {
      this.choicePrizeTableScriptId = undefined;
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

  public withLotteryTriggerScriptId(lotteryTriggerScriptId?: string): this {
    this.lotteryTriggerScriptId = lotteryTriggerScriptId as string;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId as string;
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
    data.lotteryTriggerScriptId = this.lotteryTriggerScriptId;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
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

export class DescribeLotteryModelMastersRequest extends Gs2Request {
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

export class CreateLotteryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public name?: string;
  /** 抽選の種類マスターの説明 */
  public description?: string;
  /** 抽選モデルの種類のメタデータ */
  public metadata?: string;
  /** 抽選モード */
  public mode?: string;
  /** 抽選方法 */
  public method?: string;
  /** 景品テーブルの名前 */
  public prizeTableName?: string;
  /** 抽選テーブルを確定するスクリプト のGRN */
  public choicePrizeTableScriptId?: string;

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
    if (data && data.mode !== undefined) {
      this.mode = data.mode as string;
    } else {
      this.mode = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId as string;
    } else {
      this.choicePrizeTableScriptId = undefined;
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

  public withMode(mode?: string): this {
    this.mode = mode as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.mode = this.mode;
    data.method = this.method;
    data.prizeTableName = this.prizeTableName;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
    return data;
  }

}

export class GetLotteryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.lotteryName = this.lotteryName;
    return data;
  }

}

export class UpdateLotteryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;
  /** 抽選の種類マスターの説明 */
  public description?: string;
  /** 抽選モデルの種類のメタデータ */
  public metadata?: string;
  /** 抽選モード */
  public mode?: string;
  /** 抽選方法 */
  public method?: string;
  /** 景品テーブルの名前 */
  public prizeTableName?: string;
  /** 抽選テーブルを確定するスクリプト のGRN */
  public choicePrizeTableScriptId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
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
    if (data && data.mode !== undefined) {
      this.mode = data.mode as string;
    } else {
      this.mode = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId as string;
    } else {
      this.choicePrizeTableScriptId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
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

  public withMode(mode?: string): this {
    this.mode = mode as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.lotteryName = this.lotteryName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.mode = this.mode;
    data.method = this.method;
    data.prizeTableName = this.prizeTableName;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
    return data;
  }

}

export class DeleteLotteryModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.lotteryName = this.lotteryName;
    return data;
  }

}

export class DescribePrizeTableMastersRequest extends Gs2Request {
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

export class CreatePrizeTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public name?: string;
  /** 排出確率テーブルマスターの説明 */
  public description?: string;
  /** 排出確率テーブルのメタデータ */
  public metadata?: string;
  /** 景品リスト */
  public prizes?: Prize[];

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
    if (data && data.prizes !== undefined) {
      this.prizes = data.prizes as Prize[];
      for (let i = 0; i < data.prizes.length; i++) {
        this.prizes[i] = new Prize(data.prizes[i]);
      }
    } else {
      this.prizes = undefined;
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

  public withPrizes(prizes?: Prize[]): this {
    this.prizes = prizes as Prize[];
    if (prizes) {
      for (let i = 0; i < prizes!.length; i++) {
        this.prizes[i] = new Prize(prizes![i]);
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
    if (this.prizes) {
      data.prizes = this.prizes.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetPrizeTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.prizeTableName = this.prizeTableName;
    return data;
  }

}

export class UpdatePrizeTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
  /** 排出確率テーブルマスターの説明 */
  public description?: string;
  /** 排出確率テーブルのメタデータ */
  public metadata?: string;
  /** 景品リスト */
  public prizes?: Prize[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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
    if (data && data.prizes !== undefined) {
      this.prizes = data.prizes as Prize[];
      for (let i = 0; i < data.prizes.length; i++) {
        this.prizes[i] = new Prize(data.prizes[i]);
      }
    } else {
      this.prizes = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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

  public withPrizes(prizes?: Prize[]): this {
    this.prizes = prizes as Prize[];
    if (prizes) {
      for (let i = 0; i < prizes!.length; i++) {
        this.prizes[i] = new Prize(prizes![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.prizeTableName = this.prizeTableName;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.prizes) {
      data.prizes = this.prizes.map((item) => item.toDict());
    }
    return data;
  }

}

export class DeletePrizeTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.prizeTableName = this.prizeTableName;
    return data;
  }

}

export class DescribeBoxesRequest extends Gs2Request {
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

export class DescribeBoxesByUserIdRequest extends Gs2Request {
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

export class GetBoxRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
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
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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
    data.prizeTableName = this.prizeTableName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetBoxByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
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
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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
    data.prizeTableName = this.prizeTableName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetRawBoxByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
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
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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
    data.prizeTableName = this.prizeTableName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ResetBoxRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
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
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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
    data.prizeTableName = this.prizeTableName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ResetBoxByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
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
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
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
    data.prizeTableName = this.prizeTableName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeLotteryModelsRequest extends Gs2Request {
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

export class GetLotteryModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.lotteryName = this.lotteryName;
    return data;
  }

}

export class DescribePrizeTablesRequest extends Gs2Request {
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

export class GetPrizeTableRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName as string;
    } else {
      this.prizeTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.prizeTableName = this.prizeTableName;
    return data;
  }

}

export class DrawByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 抽選回数 */
  public count?: number;
  /** スタンプシートのプレースホルダの適用する設定値 */
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
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count as number;
    } else {
      this.count = undefined;
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

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count as number;
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
    data.lotteryName = this.lotteryName;
    data.userId = this.userId;
    data.count = this.count;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeProbabilitiesRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;
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
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
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

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
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
    data.lotteryName = this.lotteryName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeProbabilitiesByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 抽選モデルの種類名 */
  public lotteryName?: string;
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
    if (data && data.lotteryName !== undefined) {
      this.lotteryName = data.lotteryName as string;
    } else {
      this.lotteryName = undefined;
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

  public withLotteryName(lotteryName?: string): this {
    this.lotteryName = lotteryName as string;
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
    data.lotteryName = this.lotteryName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DrawByStampSheetRequest extends Gs2Request {
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

export class GetCurrentLotteryMasterRequest extends Gs2Request {
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

export class UpdateCurrentLotteryMasterRequest extends Gs2Request {
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

export class UpdateCurrentLotteryMasterFromGitHubRequest extends Gs2Request {
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
