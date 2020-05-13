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
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
  /** ランクキャップ取得時 に実行されるスクリプト のGRN */
  public experienceCapScriptId?: string;
  /** 経験値変化したときに実行するスクリプト */
  public changeExperienceScript?: ScriptSetting;
  /** ランク変化したときに実行するスクリプト */
  public changeRankScript?: ScriptSetting;
  /** ランクキャップ変化したときに実行するスクリプト */
  public changeRankCapScript?: ScriptSetting;
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
    if (data && data.experienceCapScriptId !== undefined) {
      this.experienceCapScriptId = data.experienceCapScriptId;
    } else {
      this.experienceCapScriptId = undefined;
    }
    if (data && data.changeExperienceScript !== undefined && Object.keys(data.changeExperienceScript).length > 0) {
      this.changeExperienceScript = new ScriptSetting(data.changeExperienceScript);
    } else {
      this.changeExperienceScript = undefined;
    }
    if (data && data.changeRankScript !== undefined && Object.keys(data.changeRankScript).length > 0) {
      this.changeRankScript = new ScriptSetting(data.changeRankScript);
    } else {
      this.changeRankScript = undefined;
    }
    if (data && data.changeRankCapScript !== undefined && Object.keys(data.changeRankCapScript).length > 0) {
      this.changeRankCapScript = new ScriptSetting(data.changeRankCapScript);
    } else {
      this.changeRankCapScript = undefined;
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

  public withExperienceCapScriptId(experienceCapScriptId?: string): this {
    this.experienceCapScriptId = experienceCapScriptId;
    return this;
  }

  public withChangeExperienceScript(changeExperienceScript?: ScriptSetting): this {
    this.changeExperienceScript = changeExperienceScript;
    return this;
  }

  public withChangeRankScript(changeRankScript?: ScriptSetting): this {
    this.changeRankScript = changeRankScript;
    return this;
  }

  public withChangeRankCapScript(changeRankCapScript?: ScriptSetting): this {
    this.changeRankCapScript = changeRankCapScript;
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
    data.experienceCapScriptId = this.experienceCapScriptId;
    if (this.changeExperienceScript) {
      data.changeExperienceScript = this.changeExperienceScript.toDict();
    }
    if (this.changeRankScript) {
      data.changeRankScript = this.changeRankScript.toDict();
    }
    if (this.changeRankCapScript) {
      data.changeRankCapScript = this.changeRankCapScript.toDict();
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
 * 経験値の種類マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExperienceModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, experienceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{experienceName}', experienceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getExperienceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 経験値の種類マスター */
  public experienceModelId?: string;
  /** 経験値の種類名 */
  public name?: string;
  /** 経験値の種類マスターの説明 */
  public description?: string;
  /** 経験値の種類のメタデータ */
  public metadata?: string;
  /** 経験値の初期値 */
  public defaultExperience?: number;
  /** ランクキャップの初期値 */
  public defaultRankCap?: number;
  /** ランクキャップの最大値 */
  public maxRankCap?: number;
  /** ランク計算に用いる */
  public rankThresholdId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
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
    if (data && data.defaultExperience !== undefined) {
      this.defaultExperience = data.defaultExperience;
    } else {
      this.defaultExperience = 0;
    }
    if (data && data.defaultRankCap !== undefined) {
      this.defaultRankCap = data.defaultRankCap;
    } else {
      this.defaultRankCap = 0;
    }
    if (data && data.maxRankCap !== undefined) {
      this.maxRankCap = data.maxRankCap;
    } else {
      this.maxRankCap = 0;
    }
    if (data && data.rankThresholdId !== undefined) {
      this.rankThresholdId = data.rankThresholdId;
    } else {
      this.rankThresholdId = undefined;
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

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
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

  public withDefaultExperience(defaultExperience?: number): this {
    this.defaultExperience = defaultExperience;
    return this;
  }

  public withDefaultRankCap(defaultRankCap?: number): this {
    this.defaultRankCap = defaultRankCap;
    return this;
  }

  public withMaxRankCap(maxRankCap?: number): this {
    this.maxRankCap = maxRankCap;
    return this;
  }

  public withRankThresholdId(rankThresholdId?: string): this {
    this.rankThresholdId = rankThresholdId;
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
    data.experienceModelId = this.experienceModelId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.defaultExperience = this.defaultExperience;
    data.defaultRankCap = this.defaultRankCap;
    data.maxRankCap = this.maxRankCap;
    data.rankThresholdId = this.rankThresholdId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 経験値・ランクアップ閾値モデル
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExperienceModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, experienceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{experienceName}', experienceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getExperienceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:model:{experienceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 経験値の種類マスター */
  public experienceModelId?: string;
  /** 経験値の種類名 */
  public name?: string;
  /** 経験値の種類のメタデータ */
  public metadata?: string;
  /** 経験値の初期値 */
  public defaultExperience?: number;
  /** ランクキャップの初期値 */
  public defaultRankCap?: number;
  /** ランクキャップの最大値 */
  public maxRankCap?: number;
  /** ランクアップ閾値 */
  public rankThreshold?: Threshold;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.experienceModelId !== undefined) {
      this.experienceModelId = data.experienceModelId;
    } else {
      this.experienceModelId = undefined;
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
    if (data && data.defaultExperience !== undefined) {
      this.defaultExperience = data.defaultExperience;
    } else {
      this.defaultExperience = 0;
    }
    if (data && data.defaultRankCap !== undefined) {
      this.defaultRankCap = data.defaultRankCap;
    } else {
      this.defaultRankCap = 0;
    }
    if (data && data.maxRankCap !== undefined) {
      this.maxRankCap = data.maxRankCap;
    } else {
      this.maxRankCap = 0;
    }
    if (data && data.rankThreshold !== undefined && Object.keys(data.rankThreshold).length > 0) {
      this.rankThreshold = new Threshold(data.rankThreshold);
    } else {
      this.rankThreshold = undefined;
    }
  }

  public withExperienceModelId(experienceModelId?: string): this {
    this.experienceModelId = experienceModelId;
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

  public withDefaultExperience(defaultExperience?: number): this {
    this.defaultExperience = defaultExperience;
    return this;
  }

  public withDefaultRankCap(defaultRankCap?: number): this {
    this.defaultRankCap = defaultRankCap;
    return this;
  }

  public withMaxRankCap(maxRankCap?: number): this {
    this.maxRankCap = maxRankCap;
    return this;
  }

  public withRankThreshold(rankThreshold?: Threshold): this {
    this.rankThreshold = rankThreshold;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.experienceModelId = this.experienceModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.defaultExperience = this.defaultExperience;
    data.defaultRankCap = this.defaultRankCap;
    data.maxRankCap = this.maxRankCap;
    if (this.rankThreshold) {
      data.rankThreshold = this.rankThreshold.toDict();
    }
    return data;
  }

}


/**
 * ランクアップ閾値マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class ThresholdMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, thresholdName: string): string {
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{thresholdName}', thresholdName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{thresholdName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{thresholdName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{thresholdName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getThresholdNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{thresholdName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** ランクアップ閾値マスター */
  public thresholdId?: string;
  /** ランクアップ閾値名 */
  public name?: string;
  /** ランクアップ閾値マスターの説明 */
  public description?: string;
  /** ランクアップ閾値のメタデータ */
  public metadata?: string;
  /** ランクアップ経験値閾値リスト */
  public values?: number[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.thresholdId !== undefined) {
      this.thresholdId = data.thresholdId;
    } else {
      this.thresholdId = undefined;
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
    if (data && data.values !== undefined) {
      this.values = data.values as number[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = data.values[i];
      }
    } else {
      this.values = undefined;
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

  public withThresholdId(thresholdId?: string): this {
    this.thresholdId = thresholdId;
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

  public withValues(values?: number[]): this {
    this.values = values as number[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = Number(values![i]);
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
    data.thresholdId = this.thresholdId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.values = this.values;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ランクアップ閾値
 *
 * @author Game Server Services, Inc.
 *
 */
export class Threshold implements IModel {
  /** しきい値ID */
  public thresholdId?: string;
  /** ランクアップ閾値のメタデータ */
  public metadata?: string;
  /** ランクアップ経験値閾値リスト */
  public values?: number[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.thresholdId !== undefined) {
      this.thresholdId = data.thresholdId;
    } else {
      this.thresholdId = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
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

  public withThresholdId(thresholdId?: string): this {
    this.thresholdId = thresholdId;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
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
    data.thresholdId = this.thresholdId;
    data.metadata = this.metadata;
    data.values = this.values;
    return data;
  }

}


/**
 * 現在有効な経験値設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentExperienceMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}';
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
 * ステータス
 *
 * @author Game Server Services, Inc.
 *
 */
export class Status implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, propertyId: string, experienceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{propertyId}', propertyId)
      .replace('{experienceName}', experienceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getPropertyIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getExperienceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:experience:{namespaceName}:user:{userId}:experienceModel:{experienceName}:property:{propertyId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{propertyId}', '(.*)');
    grnFormat = grnFormat.replace('{experienceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }
  /** ステータス */
  public statusId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** プロパティID */
  public propertyId?: string;
  /** 累計獲得経験値 */
  public experienceValue?: number;
  /** 現在のランク */
  public rankValue?: number;
  /** 現在のランクキャップ */
  public rankCapValue?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.statusId !== undefined) {
      this.statusId = data.statusId;
    } else {
      this.statusId = undefined;
    }
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId;
    } else {
      this.propertyId = undefined;
    }
    if (data && data.experienceValue !== undefined) {
      this.experienceValue = data.experienceValue;
    } else {
      this.experienceValue = 0;
    }
    if (data && data.rankValue !== undefined) {
      this.rankValue = data.rankValue;
    } else {
      this.rankValue = 0;
    }
    if (data && data.rankCapValue !== undefined) {
      this.rankCapValue = data.rankCapValue;
    } else {
      this.rankCapValue = 0;
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

  public withStatusId(statusId?: string): this {
    this.statusId = statusId;
    return this;
  }

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId;
    return this;
  }

  public withExperienceValue(experienceValue?: number): this {
    this.experienceValue = experienceValue;
    return this;
  }

  public withRankValue(rankValue?: number): this {
    this.rankValue = rankValue;
    return this;
  }

  public withRankCapValue(rankCapValue?: number): this {
    this.rankCapValue = rankCapValue;
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
    data.statusId = this.statusId;
    data.experienceName = this.experienceName;
    data.userId = this.userId;
    data.propertyId = this.propertyId;
    data.experienceValue = this.experienceValue;
    data.rankValue = this.rankValue;
    data.rankCapValue = this.rankCapValue;
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
