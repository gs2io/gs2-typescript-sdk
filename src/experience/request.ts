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
  ExperienceModelMaster,
  ExperienceModel,
  ThresholdMaster,
  Threshold,
  CurrentExperienceMaster,
  Status,
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
    if (data && data.experienceCapScriptId !== undefined) {
      this.experienceCapScriptId = data.experienceCapScriptId as string;
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
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withExperienceCapScriptId(experienceCapScriptId?: string): this {
    this.experienceCapScriptId = experienceCapScriptId as string;
    return this;
  }

  public withChangeExperienceScript(changeExperienceScript?: ScriptSetting): this {
    this.changeExperienceScript = changeExperienceScript as ScriptSetting;
    return this;
  }

  public withChangeRankScript(changeRankScript?: ScriptSetting): this {
    this.changeRankScript = changeRankScript as ScriptSetting;
    return this;
  }

  public withChangeRankCapScript(changeRankCapScript?: ScriptSetting): this {
    this.changeRankCapScript = changeRankCapScript as ScriptSetting;
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
    if (data && data.experienceCapScriptId !== undefined) {
      this.experienceCapScriptId = data.experienceCapScriptId as string;
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
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withExperienceCapScriptId(experienceCapScriptId?: string): this {
    this.experienceCapScriptId = experienceCapScriptId as string;
    return this;
  }

  public withChangeExperienceScript(changeExperienceScript?: ScriptSetting): this {
    this.changeExperienceScript = changeExperienceScript as ScriptSetting;
    return this;
  }

  public withChangeRankScript(changeRankScript?: ScriptSetting): this {
    this.changeRankScript = changeRankScript as ScriptSetting;
    return this;
  }

  public withChangeRankCapScript(changeRankCapScript?: ScriptSetting): this {
    this.changeRankCapScript = changeRankCapScript as ScriptSetting;
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

export class DescribeExperienceModelMastersRequest extends Gs2Request {
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

export class CreateExperienceModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
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
    if (data && data.defaultExperience !== undefined) {
      this.defaultExperience = data.defaultExperience as number;
    } else {
      this.defaultExperience = undefined;
    }
    if (data && data.defaultRankCap !== undefined) {
      this.defaultRankCap = data.defaultRankCap as number;
    } else {
      this.defaultRankCap = undefined;
    }
    if (data && data.maxRankCap !== undefined) {
      this.maxRankCap = data.maxRankCap as number;
    } else {
      this.maxRankCap = undefined;
    }
    if (data && data.rankThresholdId !== undefined) {
      this.rankThresholdId = data.rankThresholdId as string;
    } else {
      this.rankThresholdId = undefined;
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

  public withDefaultExperience(defaultExperience?: number): this {
    this.defaultExperience = defaultExperience as number;
    return this;
  }

  public withDefaultRankCap(defaultRankCap?: number): this {
    this.defaultRankCap = defaultRankCap as number;
    return this;
  }

  public withMaxRankCap(maxRankCap?: number): this {
    this.maxRankCap = maxRankCap as number;
    return this;
  }

  public withRankThresholdId(rankThresholdId?: string): this {
    this.rankThresholdId = rankThresholdId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.defaultExperience = this.defaultExperience;
    data.defaultRankCap = this.defaultRankCap;
    data.maxRankCap = this.maxRankCap;
    data.rankThresholdId = this.rankThresholdId;
    return data;
  }

}

export class GetExperienceModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.experienceName = this.experienceName;
    return data;
  }

}

export class UpdateExperienceModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
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
    if (data && data.defaultExperience !== undefined) {
      this.defaultExperience = data.defaultExperience as number;
    } else {
      this.defaultExperience = undefined;
    }
    if (data && data.defaultRankCap !== undefined) {
      this.defaultRankCap = data.defaultRankCap as number;
    } else {
      this.defaultRankCap = undefined;
    }
    if (data && data.maxRankCap !== undefined) {
      this.maxRankCap = data.maxRankCap as number;
    } else {
      this.maxRankCap = undefined;
    }
    if (data && data.rankThresholdId !== undefined) {
      this.rankThresholdId = data.rankThresholdId as string;
    } else {
      this.rankThresholdId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
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

  public withDefaultExperience(defaultExperience?: number): this {
    this.defaultExperience = defaultExperience as number;
    return this;
  }

  public withDefaultRankCap(defaultRankCap?: number): this {
    this.defaultRankCap = defaultRankCap as number;
    return this;
  }

  public withMaxRankCap(maxRankCap?: number): this {
    this.maxRankCap = maxRankCap as number;
    return this;
  }

  public withRankThresholdId(rankThresholdId?: string): this {
    this.rankThresholdId = rankThresholdId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.experienceName = this.experienceName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.defaultExperience = this.defaultExperience;
    data.defaultRankCap = this.defaultRankCap;
    data.maxRankCap = this.maxRankCap;
    data.rankThresholdId = this.rankThresholdId;
    return data;
  }

}

export class DeleteExperienceModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.experienceName = this.experienceName;
    return data;
  }

}

export class DescribeExperienceModelsRequest extends Gs2Request {
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

export class GetExperienceModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.experienceName = this.experienceName;
    return data;
  }

}

export class DescribeThresholdMastersRequest extends Gs2Request {
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

export class CreateThresholdMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ランクアップ閾値名 */
  public name?: string;
  /** ランクアップ閾値マスターの説明 */
  public description?: string;
  /** ランクアップ閾値のメタデータ */
  public metadata?: string;
  /** ランクアップ経験値閾値リスト */
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
    data.values = this.values;
    return data;
  }

}

export class GetThresholdMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ランクアップ閾値名 */
  public thresholdName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.thresholdName !== undefined) {
      this.thresholdName = data.thresholdName as string;
    } else {
      this.thresholdName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withThresholdName(thresholdName?: string): this {
    this.thresholdName = thresholdName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.thresholdName = this.thresholdName;
    return data;
  }

}

export class UpdateThresholdMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ランクアップ閾値名 */
  public thresholdName?: string;
  /** ランクアップ閾値マスターの説明 */
  public description?: string;
  /** ランクアップ閾値のメタデータ */
  public metadata?: string;
  /** ランクアップ経験値閾値リスト */
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
    if (data && data.thresholdName !== undefined) {
      this.thresholdName = data.thresholdName as string;
    } else {
      this.thresholdName = undefined;
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

  public withThresholdName(thresholdName?: string): this {
    this.thresholdName = thresholdName as string;
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
    data.thresholdName = this.thresholdName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.values = this.values;
    return data;
  }

}

export class DeleteThresholdMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ランクアップ閾値名 */
  public thresholdName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.thresholdName !== undefined) {
      this.thresholdName = data.thresholdName as string;
    } else {
      this.thresholdName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withThresholdName(thresholdName?: string): this {
    this.thresholdName = thresholdName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.thresholdName = this.thresholdName;
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

export class GetCurrentExperienceMasterRequest extends Gs2Request {
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

export class UpdateCurrentExperienceMasterRequest extends Gs2Request {
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

export class UpdateCurrentExperienceMasterFromGitHubRequest extends Gs2Request {
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

export class DescribeStatusesRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
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
    data.experienceName = this.experienceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeStatusesByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類名 */
  public experienceName?: string;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
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
    data.experienceName = this.experienceName;
    data.userId = this.userId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetStatusByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetStatusWithSignatureRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
  /** 署名の作成に使用する 暗号鍵 のGRN */
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AddExperienceByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
  /** 加算する経験値量 */
  public experienceValue?: number;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
    }
    if (data && data.experienceValue !== undefined) {
      this.experienceValue = data.experienceValue as number;
    } else {
      this.experienceValue = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
    return this;
  }

  public withExperienceValue(experienceValue?: number): this {
    this.experienceValue = experienceValue as number;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.experienceValue = this.experienceValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetExperienceByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
  /** 累計獲得経験値 */
  public experienceValue?: number;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
    }
    if (data && data.experienceValue !== undefined) {
      this.experienceValue = data.experienceValue as number;
    } else {
      this.experienceValue = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
    return this;
  }

  public withExperienceValue(experienceValue?: number): this {
    this.experienceValue = experienceValue as number;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.experienceValue = this.experienceValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AddRankCapByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
  /** 加算するランクキャップ量 */
  public rankCapValue?: number;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
    }
    if (data && data.rankCapValue !== undefined) {
      this.rankCapValue = data.rankCapValue as number;
    } else {
      this.rankCapValue = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
    return this;
  }

  public withRankCapValue(rankCapValue?: number): this {
    this.rankCapValue = rankCapValue as number;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.rankCapValue = this.rankCapValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SetRankCapByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
  /** ランクキャップ */
  public rankCapValue?: number;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
    }
    if (data && data.rankCapValue !== undefined) {
      this.rankCapValue = data.rankCapValue as number;
    } else {
      this.rankCapValue = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
    return this;
  }

  public withRankCapValue(rankCapValue?: number): this {
    this.rankCapValue = rankCapValue as number;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.rankCapValue = this.rankCapValue;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteStatusByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 経験値の種類の名前 */
  public experienceName?: string;
  /** プロパティID */
  public propertyId?: string;
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
    if (data && data.experienceName !== undefined) {
      this.experienceName = data.experienceName as string;
    } else {
      this.experienceName = undefined;
    }
    if (data && data.propertyId !== undefined) {
      this.propertyId = data.propertyId as string;
    } else {
      this.propertyId = undefined;
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

  public withExperienceName(experienceName?: string): this {
    this.experienceName = experienceName as string;
    return this;
  }

  public withPropertyId(propertyId?: string): this {
    this.propertyId = propertyId as string;
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
    data.experienceName = this.experienceName;
    data.propertyId = this.propertyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AddExperienceByStampSheetRequest extends Gs2Request {
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

export class AddRankCapByStampSheetRequest extends Gs2Request {
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

export class SetRankCapByStampSheetRequest extends Gs2Request {
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
