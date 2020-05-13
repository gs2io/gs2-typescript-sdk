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
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
  /** 説明文 */
  public description?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを通知する スクリプト のGRN */
  public overflowTriggerScriptId?: string;
  /** スタミナオーバーフロー上限に当たって回復できなかったスタミナを追加する ネームスペース のGRN */
  public overflowTriggerNamespaceId?: string;
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
    if (data && data.overflowTriggerScriptId !== undefined) {
      this.overflowTriggerScriptId = data.overflowTriggerScriptId;
    } else {
      this.overflowTriggerScriptId = undefined;
    }
    if (data && data.overflowTriggerNamespaceId !== undefined) {
      this.overflowTriggerNamespaceId = data.overflowTriggerNamespaceId;
    } else {
      this.overflowTriggerNamespaceId = undefined;
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

  public withOverflowTriggerScriptId(overflowTriggerScriptId?: string): this {
    this.overflowTriggerScriptId = overflowTriggerScriptId;
    return this;
  }

  public withOverflowTriggerNamespaceId(overflowTriggerNamespaceId?: string): this {
    this.overflowTriggerNamespaceId = overflowTriggerNamespaceId;
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
    data.overflowTriggerScriptId = this.overflowTriggerScriptId;
    data.overflowTriggerNamespaceId = this.overflowTriggerNamespaceId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * スタミナモデルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class StaminaModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, staminaName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{staminaName}', staminaName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getStaminaNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナモデルマスター */
  public staminaModelId?: string;
  /** スタミナの種類名 */
  public name?: string;
  /** スタミナの種類のメタデータ */
  public metadata?: string;
  /** スタミナモデルマスターの説明 */
  public description?: string;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.staminaModelId !== undefined) {
      this.staminaModelId = data.staminaModelId;
    } else {
      this.staminaModelId = undefined;
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
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes;
    } else {
      this.recoverIntervalMinutes = 0;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue;
    } else {
      this.recoverValue = 0;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity;
    } else {
      this.initialCapacity = 0;
    }
    if (data && data.isOverflow !== undefined) {
      this.isOverflow = data.isOverflow;
    } else {
      this.isOverflow = false;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity;
    } else {
      this.maxCapacity = 0;
    }
    if (data && data.maxStaminaTableName !== undefined) {
      this.maxStaminaTableName = data.maxStaminaTableName;
    } else {
      this.maxStaminaTableName = undefined;
    }
    if (data && data.recoverIntervalTableName !== undefined) {
      this.recoverIntervalTableName = data.recoverIntervalTableName;
    } else {
      this.recoverIntervalTableName = undefined;
    }
    if (data && data.recoverValueTableName !== undefined) {
      this.recoverValueTableName = data.recoverValueTableName;
    } else {
      this.recoverValueTableName = undefined;
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

  public withStaminaModelId(staminaModelId?: string): this {
    this.staminaModelId = staminaModelId;
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

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity;
    return this;
  }

  public withIsOverflow(isOverflow?: boolean): this {
    this.isOverflow = isOverflow;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity;
    return this;
  }

  public withMaxStaminaTableName(maxStaminaTableName?: string): this {
    this.maxStaminaTableName = maxStaminaTableName;
    return this;
  }

  public withRecoverIntervalTableName(recoverIntervalTableName?: string): this {
    this.recoverIntervalTableName = recoverIntervalTableName;
    return this;
  }

  public withRecoverValueTableName(recoverValueTableName?: string): this {
    this.recoverValueTableName = recoverValueTableName;
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
    data.staminaModelId = this.staminaModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.initialCapacity = this.initialCapacity;
    data.isOverflow = this.isOverflow;
    data.maxCapacity = this.maxCapacity;
    data.maxStaminaTableName = this.maxStaminaTableName;
    data.recoverIntervalTableName = this.recoverIntervalTableName;
    data.recoverValueTableName = this.recoverValueTableName;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * スタミナの最大値テーブルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class MaxStaminaTableMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, maxStaminaTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{maxStaminaTableName}', maxStaminaTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMaxStaminaTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナの最大値テーブルマスター */
  public maxStaminaTableId?: string;
  /** 最大スタミナ値テーブル名 */
  public name?: string;
  /** 最大スタミナ値テーブルのメタデータ */
  public metadata?: string;
  /** スタミナの最大値テーブルマスターの説明 */
  public description?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナの最大値テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.maxStaminaTableId !== undefined) {
      this.maxStaminaTableId = data.maxStaminaTableId;
    } else {
      this.maxStaminaTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withMaxStaminaTableId(maxStaminaTableId?: string): this {
    this.maxStaminaTableId = maxStaminaTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.maxStaminaTableId = this.maxStaminaTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * スタミナ回復間隔テーブルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class RecoverIntervalTableMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, recoverIntervalTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{recoverIntervalTableName}', recoverIntervalTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRecoverIntervalTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナ回復間隔テーブルマスター */
  public recoverIntervalTableId?: string;
  /** スタミナ回復間隔テーブル名 */
  public name?: string;
  /** スタミナ回復間隔テーブルのメタデータ */
  public metadata?: string;
  /** スタミナ回復間隔テーブルマスターの説明 */
  public description?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復間隔テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.recoverIntervalTableId !== undefined) {
      this.recoverIntervalTableId = data.recoverIntervalTableId;
    } else {
      this.recoverIntervalTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withRecoverIntervalTableId(recoverIntervalTableId?: string): this {
    this.recoverIntervalTableId = recoverIntervalTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.recoverIntervalTableId = this.recoverIntervalTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * スタミナ回復量テーブルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class RecoverValueTableMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, recoverValueTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{recoverValueTableName}', recoverValueTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRecoverValueTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナ回復量テーブルマスター */
  public recoverValueTableId?: string;
  /** スタミナ回復量テーブル名 */
  public name?: string;
  /** スタミナ回復量テーブルのメタデータ */
  public metadata?: string;
  /** スタミナ回復量テーブルマスターの説明 */
  public description?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復量テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.recoverValueTableId !== undefined) {
      this.recoverValueTableId = data.recoverValueTableId;
    } else {
      this.recoverValueTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withRecoverValueTableId(recoverValueTableId?: string): this {
    this.recoverValueTableId = recoverValueTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.recoverValueTableId = this.recoverValueTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * 現在有効なスタミナマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentStaminaMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}';
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
 * スタミナモデル
 *
 * @author Game Server Services, Inc.
 *
 */
export class StaminaModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, staminaName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{staminaName}', staminaName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getStaminaNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナモデルマスター */
  public staminaModelId?: string;
  /** スタミナの種類名 */
  public name?: string;
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
  /** GS2-Experience と連携する際に使用するスタミナ最大値テーブル */
  public maxStaminaTable?: MaxStaminaTable;
  /** GS2-Experience と連携する際に使用する回復間隔テーブル */
  public recoverIntervalTable?: RecoverIntervalTable;
  /** GS2-Experience と連携する際に使用する回復量テーブル */
  public recoverValueTable?: RecoverValueTable;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.staminaModelId !== undefined) {
      this.staminaModelId = data.staminaModelId;
    } else {
      this.staminaModelId = undefined;
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
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes;
    } else {
      this.recoverIntervalMinutes = 0;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue;
    } else {
      this.recoverValue = 0;
    }
    if (data && data.initialCapacity !== undefined) {
      this.initialCapacity = data.initialCapacity;
    } else {
      this.initialCapacity = 0;
    }
    if (data && data.isOverflow !== undefined) {
      this.isOverflow = data.isOverflow;
    } else {
      this.isOverflow = false;
    }
    if (data && data.maxCapacity !== undefined) {
      this.maxCapacity = data.maxCapacity;
    } else {
      this.maxCapacity = 0;
    }
    if (data && data.maxStaminaTable !== undefined && Object.keys(data.maxStaminaTable).length > 0) {
      this.maxStaminaTable = new MaxStaminaTable(data.maxStaminaTable);
    } else {
      this.maxStaminaTable = undefined;
    }
    if (data && data.recoverIntervalTable !== undefined && Object.keys(data.recoverIntervalTable).length > 0) {
      this.recoverIntervalTable = new RecoverIntervalTable(data.recoverIntervalTable);
    } else {
      this.recoverIntervalTable = undefined;
    }
    if (data && data.recoverValueTable !== undefined && Object.keys(data.recoverValueTable).length > 0) {
      this.recoverValueTable = new RecoverValueTable(data.recoverValueTable);
    } else {
      this.recoverValueTable = undefined;
    }
  }

  public withStaminaModelId(staminaModelId?: string): this {
    this.staminaModelId = staminaModelId;
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

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue;
    return this;
  }

  public withInitialCapacity(initialCapacity?: number): this {
    this.initialCapacity = initialCapacity;
    return this;
  }

  public withIsOverflow(isOverflow?: boolean): this {
    this.isOverflow = isOverflow;
    return this;
  }

  public withMaxCapacity(maxCapacity?: number): this {
    this.maxCapacity = maxCapacity;
    return this;
  }

  public withMaxStaminaTable(maxStaminaTable?: MaxStaminaTable): this {
    this.maxStaminaTable = maxStaminaTable;
    return this;
  }

  public withRecoverIntervalTable(recoverIntervalTable?: RecoverIntervalTable): this {
    this.recoverIntervalTable = recoverIntervalTable;
    return this;
  }

  public withRecoverValueTable(recoverValueTable?: RecoverValueTable): this {
    this.recoverValueTable = recoverValueTable;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.staminaModelId = this.staminaModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.initialCapacity = this.initialCapacity;
    data.isOverflow = this.isOverflow;
    data.maxCapacity = this.maxCapacity;
    if (this.maxStaminaTable) {
      data.maxStaminaTable = this.maxStaminaTable.toDict();
    }
    if (this.recoverIntervalTable) {
      data.recoverIntervalTable = this.recoverIntervalTable.toDict();
    }
    if (this.recoverValueTable) {
      data.recoverValueTable = this.recoverValueTable.toDict();
    }
    return data;
  }

}


/**
 * スタミナの最大値テーブル
 *
 * @author Game Server Services, Inc.
 *
 */
export class MaxStaminaTable implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, maxStaminaTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{maxStaminaTableName}', maxStaminaTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMaxStaminaTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{maxStaminaTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナの最大値テーブルマスター */
  public maxStaminaTableId?: string;
  /** 最大スタミナ値テーブル名 */
  public name?: string;
  /** 最大スタミナ値テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナの最大値テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.maxStaminaTableId !== undefined) {
      this.maxStaminaTableId = data.maxStaminaTableId;
    } else {
      this.maxStaminaTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withMaxStaminaTableId(maxStaminaTableId?: string): this {
    this.maxStaminaTableId = maxStaminaTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.maxStaminaTableId = this.maxStaminaTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * スタミナ回復間隔テーブル
 *
 * @author Game Server Services, Inc.
 *
 */
export class RecoverIntervalTable implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, recoverIntervalTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{recoverIntervalTableName}', recoverIntervalTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRecoverIntervalTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverIntervalTable:{recoverIntervalTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverIntervalTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナ回復間隔テーブルマスター */
  public recoverIntervalTableId?: string;
  /** スタミナ回復間隔テーブル名 */
  public name?: string;
  /** スタミナ回復間隔テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復間隔テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.recoverIntervalTableId !== undefined) {
      this.recoverIntervalTableId = data.recoverIntervalTableId;
    } else {
      this.recoverIntervalTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withRecoverIntervalTableId(recoverIntervalTableId?: string): this {
    this.recoverIntervalTableId = recoverIntervalTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.recoverIntervalTableId = this.recoverIntervalTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * スタミナ回復量テーブル
 *
 * @author Game Server Services, Inc.
 *
 */
export class RecoverValueTable implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, recoverValueTableName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{recoverValueTableName}', recoverValueTableName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRecoverValueTableNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{recoverValueTableName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** スタミナ回復量テーブルマスター */
  public recoverValueTableId?: string;
  /** スタミナ回復量テーブル名 */
  public name?: string;
  /** スタミナ回復量テーブルのメタデータ */
  public metadata?: string;
  /** 経験値の種類マスター のGRN */
  public experienceModelId?: string;
  /** ランク毎のスタミナ回復量テーブル */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.recoverValueTableId !== undefined) {
      this.recoverValueTableId = data.recoverValueTableId;
    } else {
      this.recoverValueTableId = undefined;
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
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
    }
  }

  public withRecoverValueTableId(recoverValueTableId?: string): this {
    this.recoverValueTableId = recoverValueTableId;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
    return this;
  }

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.recoverValueTableId = this.recoverValueTableId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.experienceModelId = this.experienceModelId;
    data.values = this.values;
    return data;
  }

}


/**
 * スタミナ
 *
 * @author Game Server Services, Inc.
 *
 */
export class Stamina implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, staminaName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{staminaName}', staminaName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getStaminaNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{staminaName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** スタミナ */
  public staminaId?: string;
  /** スタミナモデルの名前 */
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
  /** スタミナの最大値を超えて格納されているスタミナ値 */
  public overflowValue?: number;
  /** 次回スタミナが回復する時間 */
  public nextRecoverAt?: number;
  /** 作成日時 */
  public lastRecoveredAt?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.staminaId !== undefined) {
      this.staminaId = data.staminaId;
    } else {
      this.staminaId = undefined;
    }
    if (data && data.staminaName !== undefined) {
      this.staminaName = data.staminaName;
    } else {
      this.staminaName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
    }
    if (data && data.maxValue !== undefined) {
      this.maxValue = data.maxValue;
    } else {
      this.maxValue = 0;
    }
    if (data && data.recoverIntervalMinutes !== undefined) {
      this.recoverIntervalMinutes = data.recoverIntervalMinutes;
    } else {
      this.recoverIntervalMinutes = 0;
    }
    if (data && data.recoverValue !== undefined) {
      this.recoverValue = data.recoverValue;
    } else {
      this.recoverValue = 0;
    }
    if (data && data.overflowValue !== undefined) {
      this.overflowValue = data.overflowValue;
    } else {
      this.overflowValue = 0;
    }
    if (data && data.nextRecoverAt !== undefined) {
      this.nextRecoverAt = data.nextRecoverAt;
    } else {
      this.nextRecoverAt = 0;
    }
    if (data && data.lastRecoveredAt !== undefined) {
      this.lastRecoveredAt = data.lastRecoveredAt;
    } else {
      this.lastRecoveredAt = 0;
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

  public withStaminaId(staminaId?: string): this {
    this.staminaId = staminaId;
    return this;
  }

  public withStaminaName(staminaName?: string): this {
    this.staminaName = staminaName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public withMaxValue(maxValue?: number): this {
    this.maxValue = maxValue;
    return this;
  }

  public withRecoverIntervalMinutes(recoverIntervalMinutes?: number): this {
    this.recoverIntervalMinutes = recoverIntervalMinutes;
    return this;
  }

  public withRecoverValue(recoverValue?: number): this {
    this.recoverValue = recoverValue;
    return this;
  }

  public withOverflowValue(overflowValue?: number): this {
    this.overflowValue = overflowValue;
    return this;
  }

  public withNextRecoverAt(nextRecoverAt?: number): this {
    this.nextRecoverAt = nextRecoverAt;
    return this;
  }

  public withLastRecoveredAt(lastRecoveredAt?: number): this {
    this.lastRecoveredAt = lastRecoveredAt;
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
    data.staminaId = this.staminaId;
    data.staminaName = this.staminaName;
    data.userId = this.userId;
    data.value = this.value;
    data.maxValue = this.maxValue;
    data.recoverIntervalMinutes = this.recoverIntervalMinutes;
    data.recoverValue = this.recoverValue;
    data.overflowValue = this.overflowValue;
    data.nextRecoverAt = this.nextRecoverAt;
    data.lastRecoveredAt = this.lastRecoveredAt;
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
