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
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
    if (data && data.lotteryTriggerScriptId !== undefined) {
      this.lotteryTriggerScriptId = data.lotteryTriggerScriptId;
    } else {
      this.lotteryTriggerScriptId = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId;
    } else {
      this.choicePrizeTableScriptId = undefined;
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

  public withQueueNamespaceId(queueNamespaceId?: string): this {
    this.queueNamespaceId = queueNamespaceId;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId;
    return this;
  }

  public withLotteryTriggerScriptId(lotteryTriggerScriptId?: string): this {
    this.lotteryTriggerScriptId = lotteryTriggerScriptId;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId;
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
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    data.lotteryTriggerScriptId = this.lotteryTriggerScriptId;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 抽選の種類マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class LotteryModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, lotteryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{lotteryName}', lotteryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getLotteryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 抽選の種類マスター */
  public lotteryModelId?: string;
  /** 抽選モデルの種類名 */
  public name?: string;
  /** 抽選モデルの種類のメタデータ */
  public metadata?: string;
  /** 抽選の種類マスターの説明 */
  public description?: string;
  /** 抽選モード */
  public mode?: string;
  /** 抽選方法 */
  public method?: string;
  /** 景品テーブルの名前 */
  public prizeTableName?: string;
  /** 抽選テーブルを確定するスクリプト のGRN */
  public choicePrizeTableScriptId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.lotteryModelId !== undefined) {
      this.lotteryModelId = data.lotteryModelId;
    } else {
      this.lotteryModelId = undefined;
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
    if (data && data.mode !== undefined) {
      this.mode = data.mode;
    } else {
      this.mode = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId;
    } else {
      this.choicePrizeTableScriptId = undefined;
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

  public withLotteryModelId(lotteryModelId?: string): this {
    this.lotteryModelId = lotteryModelId;
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

  public withMode(mode?: string): this {
    this.mode = mode;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId;
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
    data.lotteryModelId = this.lotteryModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.mode = this.mode;
    data.method = this.method;
    data.prizeTableName = this.prizeTableName;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 排出確率テーブルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class PrizeTableMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, prizeTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{prizeTableName}', prizeTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getPrizeTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 排出確率テーブルマスター */
  public prizeTableId?: string;
  /** 排出確率テーブル名 */
  public name?: string;
  /** 排出確率テーブルのメタデータ */
  public metadata?: string;
  /** 排出確率テーブルマスターの説明 */
  public description?: string;
  /** 景品リスト */
  public prizes?: Prize[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.prizeTableId !== undefined) {
      this.prizeTableId = data.prizeTableId;
    } else {
      this.prizeTableId = undefined;
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
    if (data && data.prizes !== undefined) {
      this.prizes = data.prizes as Prize[];
      for (let i = 0; i < data.prizes.length; i++) {
            this.prizes[i] = new Prize(data.prizes[i]);
      }
    } else {
      this.prizes = undefined;
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

  public withPrizeTableId(prizeTableId?: string): this {
    this.prizeTableId = prizeTableId;
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

  public withPrizes(prizes?: Prize[]): this {
    this.prizes = prizes as Prize[];
    if (prizes) {
      for (let i = 0; i < prizes!.length; i++) {
          this.prizes[i] = prizes![i];
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
    data.prizeTableId = this.prizeTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    if (this.prizes) {
      data.prizes = this.prizes.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ボックス
 *
 * @author Game Server Services, Inc.
 *
 */
export class Box implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, prizeTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{prizeTableName}', prizeTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getPrizeTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** ボックス */
  public boxId?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 排出済み景品のインデックスのリスト */
  public drawnIndexes?: number[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.boxId !== undefined) {
      this.boxId = data.boxId;
    } else {
      this.boxId = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.drawnIndexes !== undefined) {
      this.drawnIndexes = data.drawnIndexes as number[];
      for (let i = 0; i < data.drawnIndexes.length; i++) {
            this.drawnIndexes[i] = data.drawnIndexes[i];
      }
    } else {
      this.drawnIndexes = undefined;
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

  public withBoxId(boxId?: string): this {
    this.boxId = boxId;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withDrawnIndexes(drawnIndexes?: number[]): this {
    this.drawnIndexes = drawnIndexes as number[];
    if (drawnIndexes) {
      for (let i = 0; i < drawnIndexes!.length; i++) {
          this.drawnIndexes[i] = Number(drawnIndexes![i]);
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
    data.boxId = this.boxId;
    data.prizeTableName = this.prizeTableName;
    data.userId = this.userId;
    data.drawnIndexes = this.drawnIndexes;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 抽選の種類
 *
 * @author Game Server Services, Inc.
 *
 */
export class LotteryModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, lotteryName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{lotteryName}', lotteryName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getLotteryNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{lotteryName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 抽選の種類マスター */
  public lotteryModelId?: string;
  /** 抽選モデルの種類名 */
  public name?: string;
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
    if (data && data.lotteryModelId !== undefined) {
      this.lotteryModelId = data.lotteryModelId;
    } else {
      this.lotteryModelId = undefined;
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
    if (data && data.mode !== undefined) {
      this.mode = data.mode;
    } else {
      this.mode = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.choicePrizeTableScriptId !== undefined) {
      this.choicePrizeTableScriptId = data.choicePrizeTableScriptId;
    } else {
      this.choicePrizeTableScriptId = undefined;
    }
  }

  public withLotteryModelId(lotteryModelId?: string): this {
    this.lotteryModelId = lotteryModelId;
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

  public withMode(mode?: string): this {
    this.mode = mode;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName;
    return this;
  }

  public withChoicePrizeTableScriptId(choicePrizeTableScriptId?: string): this {
    this.choicePrizeTableScriptId = choicePrizeTableScriptId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.lotteryModelId = this.lotteryModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.mode = this.mode;
    data.method = this.method;
    data.prizeTableName = this.prizeTableName;
    data.choicePrizeTableScriptId = this.choicePrizeTableScriptId;
    return data;
  }

}


/**
 * 排出確率テーブル
 *
 * @author Game Server Services, Inc.
 *
 */
export class PrizeTable implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, prizeTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{prizeTableName}', prizeTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getPrizeTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{prizeTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 排出確率テーブルマスター */
  public prizeTableId?: string;
  /** 景品テーブル名 */
  public name?: string;
  /** 景品テーブルのメタデータ */
  public metadata?: string;
  /** 景品リスト */
  public prizes?: Prize[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.prizeTableId !== undefined) {
      this.prizeTableId = data.prizeTableId;
    } else {
      this.prizeTableId = undefined;
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
    if (data && data.prizes !== undefined) {
      this.prizes = data.prizes as Prize[];
      for (let i = 0; i < data.prizes.length; i++) {
            this.prizes[i] = new Prize(data.prizes[i]);
      }
    } else {
      this.prizes = undefined;
    }
  }

  public withPrizeTableId(prizeTableId?: string): this {
    this.prizeTableId = prizeTableId;
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

  public withPrizes(prizes?: Prize[]): this {
    this.prizes = prizes as Prize[];
    if (prizes) {
      for (let i = 0; i < prizes!.length; i++) {
          this.prizes[i] = prizes![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.prizeTableId = this.prizeTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.prizes) {
      data.prizes = this.prizes.map((item) => item.toDict());
    }
    return data;
  }

}


/**
 * 排出レート
 *
 * @author Game Server Services, Inc.
 *
 */
export class Probability implements IModel {
  /** 景品の種類 */
  public prize?: DrawnPrize;
  /** 排出確率(0.0〜1.0) */
  public rate?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.prize !== undefined && Object.keys(data.prize).length > 0) {
      this.prize = new DrawnPrize(data.prize);
    } else {
      this.prize = undefined;
    }
    if (data && data.rate !== undefined) {
      this.rate = data.rate;
    } else {
      this.rate = 0;
    }
  }

  public withPrize(prize?: DrawnPrize): this {
    this.prize = prize;
    return this;
  }

  public withRate(rate?: number): this {
    this.rate = rate;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.prize) {
      data.prize = this.prize.toDict();
    }
    data.rate = this.rate;
    return data;
  }

}


/**
 * 現在有効な抽選設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentLotteryMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:lottery:{namespaceName}';
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
 * 景品
 *
 * @author Game Server Services, Inc.
 *
 */
export class Prize implements IModel {
  /** 景品ID */
  public prizeId?: string;
  /** 景品の種類 */
  public type?: string;
  /** 景品の入手アクションリスト */
  public acquireActions?: AcquireAction[];
  /** 排出確率テーブルの名前 */
  public prizeTableName?: string;
  /** 排出重み */
  public weight?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.prizeId !== undefined) {
      this.prizeId = data.prizeId;
    } else {
      this.prizeId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.acquireActions !== undefined) {
      this.acquireActions = data.acquireActions as AcquireAction[];
      for (let i = 0; i < data.acquireActions.length; i++) {
            this.acquireActions[i] = new AcquireAction(data.acquireActions[i]);
      }
    } else {
      this.acquireActions = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.weight !== undefined) {
      this.weight = data.weight;
    } else {
      this.weight = 0;
    }
  }

  public withPrizeId(prizeId?: string): this {
    this.prizeId = prizeId;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
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

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName;
    return this;
  }

  public withWeight(weight?: number): this {
    this.weight = weight;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.prizeId = this.prizeId;
    data.type = this.type;
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    data.prizeTableName = this.prizeTableName;
    data.weight = this.weight;
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
 * 排出された景品
 *
 * @author Game Server Services, Inc.
 *
 */
export class DrawnPrize implements IModel {
  /** 入手アクションのリスト */
  public acquireActions?: AcquireAction[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.acquireActions !== undefined) {
      this.acquireActions = data.acquireActions as AcquireAction[];
      for (let i = 0; i < data.acquireActions.length; i++) {
            this.acquireActions[i] = new AcquireAction(data.acquireActions[i]);
      }
    } else {
      this.acquireActions = undefined;
    }
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
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    return data;
  }

}


/**
 * ボックスから取り出したアイテム
 *
 * @author Game Server Services, Inc.
 *
 */
export class BoxItem implements IModel {
  /** 入手アクションのリスト */
  public acquireActions?: AcquireAction[];
  /** 残り数量 */
  public remaining?: number;
  /** 初期数量 */
  public initial?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.acquireActions !== undefined) {
      this.acquireActions = data.acquireActions as AcquireAction[];
      for (let i = 0; i < data.acquireActions.length; i++) {
            this.acquireActions[i] = new AcquireAction(data.acquireActions[i]);
      }
    } else {
      this.acquireActions = undefined;
    }
    if (data && data.remaining !== undefined) {
      this.remaining = data.remaining;
    } else {
      this.remaining = 0;
    }
    if (data && data.initial !== undefined) {
      this.initial = data.initial;
    } else {
      this.initial = 0;
    }
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

  public withRemaining(remaining?: number): this {
    this.remaining = remaining;
    return this;
  }

  public withInitial(initial?: number): this {
    this.initial = initial;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.acquireActions) {
      data.acquireActions = this.acquireActions.map((item) => item.toDict());
    }
    data.remaining = this.remaining;
    data.initial = this.initial;
    return data;
  }

}


/**
 * ボックスから取り出したアイテムのリスト
 *
 * @author Game Server Services, Inc.
 *
 */
export class BoxItems implements IModel {
  /** ボックス */
  public boxId?: string;
  /** 排出確率テーブル名 */
  public prizeTableName?: string;
  /** ユーザーID */
  public userId?: string;
  /** ボックスから取り出したアイテムのリスト */
  public items?: BoxItem[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.boxId !== undefined) {
      this.boxId = data.boxId;
    } else {
      this.boxId = undefined;
    }
    if (data && data.prizeTableName !== undefined) {
      this.prizeTableName = data.prizeTableName;
    } else {
      this.prizeTableName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.items !== undefined) {
      this.items = data.items as BoxItem[];
      for (let i = 0; i < data.items.length; i++) {
            this.items[i] = new BoxItem(data.items[i]);
      }
    } else {
      this.items = undefined;
    }
  }

  public withBoxId(boxId?: string): this {
    this.boxId = boxId;
    return this;
  }

  public withPrizeTableName(prizeTableName?: string): this {
    this.prizeTableName = prizeTableName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withItems(items?: BoxItem[]): this {
    this.items = items as BoxItem[];
    if (items) {
      for (let i = 0; i < items!.length; i++) {
          this.items[i] = items![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.boxId = this.boxId;
    data.prizeTableName = this.prizeTableName;
    data.userId = this.userId;
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
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
