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
  StaminaModelMaster,
  MaxStaminaTableMaster,
  RecoverIntervalTableMaster,
  RecoverValueTableMaster,
  CurrentStaminaMaster,
  StaminaModel,
  MaxStaminaTable,
  RecoverIntervalTable,
  RecoverValueTable,
  Stamina,
  ResponseCache,
  GitHubCheckoutSetting,
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
  /** 説明文 */
  public description?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを通知する スクリプト のGRN */
  public overflowTriggerScriptId?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを追加する ネームスペース のGRN */
  public overflowTriggerNamespaceId?: string;
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
    if (data && data.overflowTriggerScriptId !== undefined) {
      this.overflowTriggerScriptId = data.overflowTriggerScriptId as string;
    } else {
      this.overflowTriggerScriptId = undefined;
    }
    if (data && data.overflowTriggerNamespaceId !== undefined) {
      this.overflowTriggerNamespaceId = data.overflowTriggerNamespaceId as string;
    } else {
      this.overflowTriggerNamespaceId = undefined;
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

  public withOverflowTriggerScriptId(overflowTriggerScriptId?: string): this {
    this.overflowTriggerScriptId = overflowTriggerScriptId as string;
    return this;
  }

  public withOverflowTriggerNamespaceId(overflowTriggerNamespaceId?: string): this {
    this.overflowTriggerNamespaceId = overflowTriggerNamespaceId as string;
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
    data.overflowTriggerScriptId = this.overflowTriggerScriptId;
    data.overflowTriggerNamespaceId = this.overflowTriggerNamespaceId;
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
  /** 説明文 */
  public description?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを通知する スクリプト のGRN */
  public overflowTriggerScriptId?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを追加する ネームスペース のGRN */
  public overflowTriggerNamespaceId?: string;
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
    if (data && data.overflowTriggerScriptId !== undefined) {
      this.overflowTriggerScriptId = data.overflowTriggerScriptId as string;
    } else {
      this.overflowTriggerScriptId = undefined;
    }
    if (data && data.overflowTriggerNamespaceId !== undefined) {
      this.overflowTriggerNamespaceId = data.overflowTriggerNamespaceId as string;
    } else {
      this.overflowTriggerNamespaceId = undefined;
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

  public withOverflowTriggerScriptId(overflowTriggerScriptId?: string): this {
    this.overflowTriggerScriptId = overflowTriggerScriptId as string;
    return this;
  }

  public withOverflowTriggerNamespaceId(overflowTriggerNamespaceId?: string): this {
    this.overflowTriggerNamespaceId = overflowTriggerNamespaceId as string;
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
    data.overflowTriggerScriptId = this.overflowTriggerScriptId;
    data.overflowTriggerNamespaceId = this.overflowTriggerNamespaceId;
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

export class DescribeStaminaModelMastersRequest extends Gs2Request {
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

export class CreateStaminaModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public name?: string;
  /** スタミナモデルマスターの説明 */
  public description?: string;
  /** スタミナの種類のメタデータ */
  public metadata?: string;
  /** スタミナを回復する速度(分) */
  public recoverIntervalMinutes?: number;
  /** 時間経過後に回復する量 */
  public recoverValue?: number;
  /** スタミナの最大値の初期値 */
  public initialCapacity?: number;
  /** 最大値を超えて回復するか */
  public isOverflow?: boolean;
  /** 溢れた状況での最大値 */
  public maxCapacity?: number;
  /** GS2-Experience のランクによって最大スタミナ値を決定するスタミナ最大値テーブル名 */
  public maxStaminaTableName?: string;
  /** GS2-Experience のランクによってスタミナの回復間隔を決定する回復間隔テーブル名 */
  public recoverIntervalTableName?: string;
  /** GS2-Experience のランクによってスタミナの回復量を決定する回復量テーブル名 */
  public recoverValueTableName?: string;

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
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes as number;
    } else {
      this.recoverIntervalMinutes = undefined;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue as number;
    } else {
      this.recoverValue = undefined;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity as number;
    } else {
      this.initialCapacity = undefined;
    }
    if (data && data.isOverflow !== undefined) {
      this.isOverflow = data.isOverflow as boolean;
    } else {
      this.isOverflow = undefined;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity as number;
    } else {
      this.maxCapacity = undefined;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName as string;
    } else {
      this.maxStaminaTableName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName as string;
    } else {
      this.recoverIntervalTableName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName as string;
    } else {
      this.recoverValueTableName = undefined;
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

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes as number;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue as number;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity as number;
    return this;
  }

  public withIsOverflow(isOverflow?: boolean): this {
    this.isOverflow = isOverflow as boolean;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity as number;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName as string;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName as string;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.initialCapacity = this.initialCapacity;
    data.isOverflow = this.isOverflow;
    data.maxCapacity = this.maxCapacity;
    data.maxStaminaTableName = this.maxStaminaTableName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    data.recoverValueTableName = this.recoverValueTableName;
    return data;
  }

}

export class GetStaminaModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    return data;
  }

}

export class UpdateStaminaModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** スタミナモデルマスターの説明 */
  public description?: string;
  /** スタミナの種類のメタデータ */
  public metadata?: string;
  /** スタミナを回復する速度(分) */
  public recoverIntervalMinutes?: number;
  /** 時間経過後に回復する量 */
  public recoverValue?: number;
  /** スタミナの最大値の初期値 */
  public initialCapacity?: number;
  /** 最大値を超えて回復するか */
  public isOverflow?: boolean;
  /** 溢れた状況での最大値 */
  public maxCapacity?: number;
  /** GS2-Experience のランクによって最大スタミナ値を決定するスタミナ最大値テーブル名 */
  public maxStaminaTableName?: string;
  /** GS2-Experience のランクによってスタミナの回復間隔を決定する回復間隔テーブル名 */
  public recoverIntervalTableName?: string;
  /** GS2-Experience のランクによってスタミナの回復量を決定する回復量テーブル名 */
  public recoverValueTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
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
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes as number;
    } else {
      this.recoverIntervalMinutes = undefined;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue as number;
    } else {
      this.recoverValue = undefined;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity as number;
    } else {
      this.initialCapacity = undefined;
    }
    if (data && data.isOverflow !== undefined) {
      this.isOverflow = data.isOverflow as boolean;
    } else {
      this.isOverflow = undefined;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity as number;
    } else {
      this.maxCapacity = undefined;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName as string;
    } else {
      this.maxStaminaTableName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName as string;
    } else {
      this.recoverIntervalTableName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName as string;
    } else {
      this.recoverValueTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
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

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes as number;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue as number;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity as number;
    return this;
  }

  public withIsOverflow(isOverflow?: boolean): this {
    this.isOverflow = isOverflow as boolean;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity as number;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName as string;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName as string;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.initialCapacity = this.initialCapacity;
    data.isOverflow = this.isOverflow;
    data.maxCapacity = this.maxCapacity;
    data.maxStaminaTableName = this.maxStaminaTableName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    data.recoverValueTableName = this.recoverValueTableName;
    return data;
  }

}

export class DeleteStaminaModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    return data;
  }

}

export class DescribeMaxStaminaTableMastersRequest extends Gs2Request {
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

export class CreateMaxStaminaTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 最大スタミナ値テーブル名 */
  public name?: string;
  /** スタミナの最大値テーブルマスターの説明 */
  public description?: string;
  /** 最大スタミナ値テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナの最大値テーブル */
  public values?: number[];

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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
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
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class GetMaxStaminaTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 最大スタミナ値テーブル名 */
  public maxStaminaTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName as string;
    } else {
      this.maxStaminaTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.maxStaminaTableName = this.maxStaminaTableName;
    return data;
  }

}

export class UpdateMaxStaminaTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 最大スタミナ値テーブル名 */
  public maxStaminaTableName?: string;
  /** スタミナの最大値テーブルマスターの説明 */
  public description?: string;
  /** 最大スタミナ値テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナの最大値テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName as string;
    } else {
      this.maxStaminaTableName = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName as string;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.maxStaminaTableName = this.maxStaminaTableName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class DeleteMaxStaminaTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 最大スタミナ値テーブル名 */
  public maxStaminaTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName as string;
    } else {
      this.maxStaminaTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.maxStaminaTableName = this.maxStaminaTableName;
    return data;
  }

}

export class DescribeRecoverIntervalTableMastersRequest extends Gs2Request {
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

export class CreateRecoverIntervalTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復間隔テーブル名 */
  public name?: string;
  /** スタミナ回復間隔テーブルマスターの説明 */
  public description?: string;
  /** スタミナ回復間隔テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復間隔テーブル */
  public values?: number[];

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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
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
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class GetRecoverIntervalTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復間隔テーブル名 */
  public recoverIntervalTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName as string;
    } else {
      this.recoverIntervalTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    return data;
  }

}

export class UpdateRecoverIntervalTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復間隔テーブル名 */
  public recoverIntervalTableName?: string;
  /** スタミナ回復間隔テーブルマスターの説明 */
  public description?: string;
  /** スタミナ回復間隔テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復間隔テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName as string;
    } else {
      this.recoverIntervalTableName = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName as string;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class DeleteRecoverIntervalTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復間隔テーブル名 */
  public recoverIntervalTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName as string;
    } else {
      this.recoverIntervalTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    return data;
  }

}

export class DescribeRecoverValueTableMastersRequest extends Gs2Request {
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

export class CreateRecoverValueTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復量テーブル名 */
  public name?: string;
  /** スタミナ回復量テーブルマスターの説明 */
  public description?: string;
  /** スタミナ回復量テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復量テーブル */
  public values?: number[];

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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
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
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class GetRecoverValueTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復量テーブル名 */
  public recoverValueTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName as string;
    } else {
      this.recoverValueTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverValueTableName = this.recoverValueTableName;
    return data;
  }

}

export class UpdateRecoverValueTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復量テーブル名 */
  public recoverValueTableName?: string;
  /** スタミナ回復量テーブルマスターの説明 */
  public description?: string;
  /** スタミナ回復量テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復量テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName as string;
    } else {
      this.recoverValueTableName = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId as string;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
        this.values[i] = data.values[i] as number;
      }
    } else {
      this.values = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName as string;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId as string;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
        this.values[i] = values![i] as number;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverValueTableName = this.recoverValueTableName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}

export class DeleteRecoverValueTableMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナ回復量テーブル名 */
  public recoverValueTableName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName as string;
    } else {
      this.recoverValueTableName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.recoverValueTableName = this.recoverValueTableName;
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

export class GetCurrentStaminaMasterRequest extends Gs2Request {
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

export class UpdateCurrentStaminaMasterRequest extends Gs2Request {
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

export class UpdateCurrentStaminaMasterFromGitHubRequest extends Gs2Request {
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

export class DescribeStaminaModelsRequest extends Gs2Request {
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

export class GetStaminaModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    return data;
  }

}

export class DescribeStaminasRequest extends Gs2Request {
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

export class DescribeStaminasByUserIdRequest extends Gs2Request {
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

export class GetStaminaRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
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
    data.staminaName = this.staminaName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetStaminaByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
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
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateStaminaByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 最終更新時におけるスタミナ値 */
  public value?: number;
  /** スタミナの最大値 */
  public maxValue?: number;
  /** スタミナの回復間隔(分) */
  public recoverIntervalMinutes?: number;
  /** スタミナの回復量 */
  public recoverValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value as number;
    } else {
      this.value = undefined;
    }
    if (data && data.maxValue !== undefined) {
      this.maxValue = data.maxValue as number;
    } else {
      this.maxValue = undefined;
    }
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes as number;
    } else {
      this.recoverIntervalMinutes = undefined;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue as number;
    } else {
      this.recoverValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value as number;
    return this;
  }

  public withMaxValue(maxValue?: number): this {
    this.maxValue = maxValue as number;
    return this;
  }

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes as number;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.value = this.value;
    data.maxValue = this.maxValue;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ConsumeStaminaRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** 消費するスタミナ量 */
  public consumeValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.consumeValue !== undefined) {
      this.consumeValue = data.consumeValue as number;
    } else {
      this.consumeValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withConsumeValue(consumeValue?: number): this {
    this.consumeValue = consumeValue as number;
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
    data.staminaName = this.staminaName;
    data.consumeValue = this.consumeValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ConsumeStaminaByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 消費するスタミナ量 */
  public consumeValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.consumeValue !== undefined) {
      this.consumeValue = data.consumeValue as number;
    } else {
      this.consumeValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withConsumeValue(consumeValue?: number): this {
    this.consumeValue = consumeValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.consumeValue = this.consumeValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class RecoverStaminaByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 回復するスタミナ量 */
  public recoverValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue as number;
    } else {
      this.recoverValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.recoverValue = this.recoverValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class RaiseMaxValueByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 上昇する最大スタミナ量 */
  public raiseValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.raiseValue !== undefined) {
      this.raiseValue = data.raiseValue as number;
    } else {
      this.raiseValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withRaiseValue(raiseValue?: number): this {
    this.raiseValue = raiseValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.raiseValue = this.raiseValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetMaxValueByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スタミナの最大値 */
  public maxValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.maxValue !== undefined) {
      this.maxValue = data.maxValue as number;
    } else {
      this.maxValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withMaxValue(maxValue?: number): this {
    this.maxValue = maxValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.maxValue = this.maxValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetRecoverIntervalByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スタミナの回復間隔(分) */
  public recoverIntervalMinutes?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes as number;
    } else {
      this.recoverIntervalMinutes = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetRecoverValueByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スタミナの回復量 */
  public recoverValue?: number;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue as number;
    } else {
      this.recoverValue = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.recoverValue = this.recoverValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetMaxValueByStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** 署名をつけるのに使用した暗号鍵 のGRN */
  public keyId?: string;
  /** 署名対象のステータスボディ */
  public signedStatusBody?: string;
  /** ステータスの署名 */
  public signedStatusSignature?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.signedStatusBody !== undefined) {
      this.signedStatusBody = data.signedStatusBody as string;
    } else {
      this.signedStatusBody = undefined;
    }
    if (data && data.signedStatusSignature !== undefined) {
      this.signedStatusSignature = data.signedStatusSignature as string;
    } else {
      this.signedStatusSignature = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withSignedStatusBody(signedStatusBody?: string): this {
    this.signedStatusBody = signedStatusBody as string;
    return this;
  }

  public withSignedStatusSignature(signedStatusSignature?: string): this {
    this.signedStatusSignature = signedStatusSignature as string;
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
    data.staminaName = this.staminaName;
    data.keyId = this.keyId;
    data.signedStatusBody = this.signedStatusBody;
    data.signedStatusSignature = this.signedStatusSignature;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetRecoverIntervalByStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** 署名をつけるのに使用した暗号鍵 のGRN */
  public keyId?: string;
  /** 署名対象のステータスボディ */
  public signedStatusBody?: string;
  /** ステータスの署名 */
  public signedStatusSignature?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.signedStatusBody !== undefined) {
      this.signedStatusBody = data.signedStatusBody as string;
    } else {
      this.signedStatusBody = undefined;
    }
    if (data && data.signedStatusSignature !== undefined) {
      this.signedStatusSignature = data.signedStatusSignature as string;
    } else {
      this.signedStatusSignature = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withSignedStatusBody(signedStatusBody?: string): this {
    this.signedStatusBody = signedStatusBody as string;
    return this;
  }

  public withSignedStatusSignature(signedStatusSignature?: string): this {
    this.signedStatusSignature = signedStatusSignature as string;
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
    data.staminaName = this.staminaName;
    data.keyId = this.keyId;
    data.signedStatusBody = this.signedStatusBody;
    data.signedStatusSignature = this.signedStatusSignature;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetRecoverValueByStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
  /** 署名をつけるのに使用した暗号鍵 のGRN */
  public keyId?: string;
  /** 署名対象のステータスボディ */
  public signedStatusBody?: string;
  /** ステータスの署名 */
  public signedStatusSignature?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.signedStatusBody !== undefined) {
      this.signedStatusBody = data.signedStatusBody as string;
    } else {
      this.signedStatusBody = undefined;
    }
    if (data && data.signedStatusSignature !== undefined) {
      this.signedStatusSignature = data.signedStatusSignature as string;
    } else {
      this.signedStatusSignature = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withSignedStatusBody(signedStatusBody?: string): this {
    this.signedStatusBody = signedStatusBody as string;
    return this;
  }

  public withSignedStatusSignature(signedStatusSignature?: string): this {
    this.signedStatusSignature = signedStatusSignature as string;
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
    data.staminaName = this.staminaName;
    data.keyId = this.keyId;
    data.signedStatusBody = this.signedStatusBody;
    data.signedStatusSignature = this.signedStatusSignature;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteStaminaByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スタミナの種類名 */
  public staminaName?: string;
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
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName as string;
    } else {
      this.staminaName = undefined;
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

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName as string;
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
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class RecoverStaminaByStampSheetRequest extends Gs2Request {
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

export class RaiseMaxValueByStampSheetRequest extends Gs2Request {
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

export class SetMaxValueByStampSheetRequest extends Gs2Request {
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

export class SetRecoverIntervalByStampSheetRequest extends Gs2Request {
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

export class SetRecoverValueByStampSheetRequest extends Gs2Request {
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

export class ConsumeStaminaByStampTaskRequest extends Gs2Request {
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
