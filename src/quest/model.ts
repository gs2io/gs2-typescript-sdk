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
 * クエストを分類するカテゴリー
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** クエストを分類するカテゴリー */
  public namespaceId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** カテゴリ名 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** クエスト開始したときに実行するスクリプト */
  public startQuestScript?: ScriptSetting;
  /** クエストクリアしたときに実行するスクリプト */
  public completeQuestScript?: ScriptSetting;
  /** クエスト失敗したときに実行するスクリプト */
  public failedQuestScript?: ScriptSetting;
  /** 報酬付与処理をジョブとして追加するキューのネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 報酬付与処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
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
    if (data && data.startQuestScript !== undefined && Object.keys(data.startQuestScript).length > 0) {
      this.startQuestScript = new ScriptSetting(data.startQuestScript);
    } else {
      this.startQuestScript = undefined;
    }
    if (data && data.completeQuestScript !== undefined && Object.keys(data.completeQuestScript).length > 0) {
      this.completeQuestScript = new ScriptSetting(data.completeQuestScript);
    } else {
      this.completeQuestScript = undefined;
    }
    if (data && data.failedQuestScript !== undefined && Object.keys(data.failedQuestScript).length > 0) {
      this.failedQuestScript = new ScriptSetting(data.failedQuestScript);
    } else {
      this.failedQuestScript = undefined;
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

  public withStartQuestScript(startQuestScript?: ScriptSetting): this {
    this.startQuestScript = startQuestScript;
    return this;
  }

  public withCompleteQuestScript(completeQuestScript?: ScriptSetting): this {
    this.completeQuestScript = completeQuestScript;
    return this;
  }

  public withFailedQuestScript(failedQuestScript?: ScriptSetting): this {
    this.failedQuestScript = failedQuestScript;
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
    if (this.startQuestScript) {
      data.startQuestScript = this.startQuestScript.toDict();
    }
    if (this.completeQuestScript) {
      data.completeQuestScript = this.completeQuestScript.toDict();
    }
    if (this.failedQuestScript) {
      data.failedQuestScript = this.failedQuestScript.toDict();
    }
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * クエストグループマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class QuestGroupModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, questGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{questGroupName}', questGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getQuestGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** クエストグループマスター */
  public questGroupModelId?: string;
  /** クエストグループモデル名 */
  public name?: string;
  /** クエストグループマスターの説明 */
  public description?: string;
  /** クエストグループのメタデータ */
  public metadata?: string;
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.questGroupModelId !== undefined) {
      this.questGroupModelId = data.questGroupModelId;
    } else {
      this.questGroupModelId = undefined;
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
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
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

  public withQuestGroupModelId(questGroupModelId?: string): this {
    this.questGroupModelId = questGroupModelId;
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

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
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
    data.questGroupModelId = this.questGroupModelId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.challengePeriodEventId = this.challengePeriodEventId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * クエストモデルマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class QuestModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, questGroupName: string, questName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{questGroupName}', questGroupName)
      .replace('{questName}', questName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getQuestGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getQuestNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** クエストモデルマスター */
  public questModelId?: string;
  /** クエストモデル名 */
  public questGroupName?: string;
  /** クエスト名 */
  public name?: string;
  /** クエストモデルの説明 */
  public description?: string;
  /** クエストのメタデータ */
  public metadata?: string;
  /** クエストの内容 */
  public contents?: Contents[];
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** クエストの参加料 */
  public consumeActions?: ConsumeAction[];
  /** クエスト失敗時の報酬 */
  public failedAcquireActions?: AcquireAction[];
  /** クエストに挑戦するためにクリアしておく必要のあるクエスト名 */
  public premiseQuestNames?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.questModelId !== undefined) {
      this.questModelId = data.questModelId;
    } else {
      this.questModelId = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName;
    } else {
      this.questGroupName = undefined;
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
    if (data && data.contents !== undefined) {
      this.contents = data.contents as Contents[];
      for (let i = 0; i < data.contents.length; i++) {
            this.contents[i] = new Contents(data.contents[i]);
      }
    } else {
      this.contents = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.consumeActions !== undefined) {
      this.consumeActions = data.consumeActions as ConsumeAction[];
      for (let i = 0; i < data.consumeActions.length; i++) {
            this.consumeActions[i] = new ConsumeAction(data.consumeActions[i]);
      }
    } else {
      this.consumeActions = undefined;
    }
    if (data && data.failedAcquireActions !== undefined) {
      this.failedAcquireActions = data.failedAcquireActions as AcquireAction[];
      for (let i = 0; i < data.failedAcquireActions.length; i++) {
            this.failedAcquireActions[i] = new AcquireAction(data.failedAcquireActions[i]);
      }
    } else {
      this.failedAcquireActions = undefined;
    }
    if (data && data.premiseQuestNames !== undefined) {
      this.premiseQuestNames = data.premiseQuestNames as string[];
      for (let i = 0; i < data.premiseQuestNames.length; i++) {
            this.premiseQuestNames[i] = data.premiseQuestNames[i];
      }
    } else {
      this.premiseQuestNames = undefined;
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

  public withQuestModelId(questModelId?: string): this {
    this.questModelId = questModelId;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName;
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

  public withContents(contents?: Contents[]): this {
    this.contents = contents as Contents[];
    if (contents) {
      for (let i = 0; i < contents!.length; i++) {
          this.contents[i] = contents![i];
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
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

  public withFailedAcquireActions(failedAcquireActions?: AcquireAction[]): this {
    this.failedAcquireActions = failedAcquireActions as AcquireAction[];
    if (failedAcquireActions) {
      for (let i = 0; i < failedAcquireActions!.length; i++) {
          this.failedAcquireActions[i] = failedAcquireActions![i];
      }
    }
    return this;
  }

  public withPremiseQuestNames(premiseQuestNames?: string[]): this {
    this.premiseQuestNames = premiseQuestNames as string[];
    if (premiseQuestNames) {
      for (let i = 0; i < premiseQuestNames!.length; i++) {
          this.premiseQuestNames[i] = String(premiseQuestNames![i]);
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
    data.questModelId = this.questModelId;
    data.questGroupName = this.questGroupName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.contents) {
      data.contents = this.contents.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    if (this.consumeActions) {
      data.consumeActions = this.consumeActions.map((item) => item.toDict());
    }
    if (this.failedAcquireActions) {
      data.failedAcquireActions = this.failedAcquireActions.map((item) => item.toDict());
    }
    data.premiseQuestNames = this.premiseQuestNames;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 現在有効なクエストマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentQuestMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** カテゴリ名 */
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
 * コンテンツ
 *
 * @author Game Server Services, Inc.
 *
 */
export class Contents implements IModel {
  /** クエストモデルのメタデータ */
  public metadata?: string;
  /** クエストクリア時の報酬 */
  public completeAcquireActions?: AcquireAction[];
  /** 抽選する重み */
  public weight?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.completeAcquireActions !== undefined) {
      this.completeAcquireActions = data.completeAcquireActions as AcquireAction[];
      for (let i = 0; i < data.completeAcquireActions.length; i++) {
            this.completeAcquireActions[i] = new AcquireAction(data.completeAcquireActions[i]);
      }
    } else {
      this.completeAcquireActions = undefined;
    }
    if (data && data.weight !== undefined) {
      this.weight = data.weight;
    } else {
      this.weight = 0;
    }
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withCompleteAcquireActions(completeAcquireActions?: AcquireAction[]): this {
    this.completeAcquireActions = completeAcquireActions as AcquireAction[];
    if (completeAcquireActions) {
      for (let i = 0; i < completeAcquireActions!.length; i++) {
          this.completeAcquireActions[i] = completeAcquireActions![i];
      }
    }
    return this;
  }

  public withWeight(weight?: number): this {
    this.weight = weight;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.metadata = this.metadata;
    if (this.completeAcquireActions) {
      data.completeAcquireActions = this.completeAcquireActions.map((item) => item.toDict());
    }
    data.weight = this.weight;
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
 * クリア報酬
 *
 * @author Game Server Services, Inc.
 *
 */
export class Reward implements IModel {
  /** スタンプシートで実行するアクションの種類 */
  public action?: string;
  /** リクエストモデル */
  public request?: string;
  /** 入手するリソースGRN */
  public itemId?: string;
  /** 入手する数量 */
  public value?: number;

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
    if (data && data.itemId !== undefined) {
      this.itemId = data.itemId;
    } else {
      this.itemId = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
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

  public withItemId(itemId?: string): this {
    this.itemId = itemId;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.action = this.action;
    data.request = this.request;
    data.itemId = this.itemId;
    data.value = this.value;
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


/**
 * クエスト挑戦
 *
 * @author Game Server Services, Inc.
 *
 */
export class Progress implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** クエスト挑戦 */
  public progressId?: string;
  /** ユーザーID */
  public userId?: string;
  /** トランザクションID */
  public transactionId?: string;
  /** クエストモデル */
  public questModelId?: string;
  /** 乱数シード */
  public randomSeed?: number;
  /** クエストで得られる報酬の上限 */
  public rewards?: Reward[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.progressId !== undefined) {
      this.progressId = data.progressId;
    } else {
      this.progressId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.questModelId !== undefined) {
      this.questModelId = data.questModelId;
    } else {
      this.questModelId = undefined;
    }
    if (data && data.randomSeed !== undefined) {
      this.randomSeed = data.randomSeed;
    } else {
      this.randomSeed = 0;
    }
    if (data && data.rewards !== undefined) {
      this.rewards = data.rewards as Reward[];
      for (let i = 0; i < data.rewards.length; i++) {
            this.rewards[i] = new Reward(data.rewards[i]);
      }
    } else {
      this.rewards = undefined;
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

  public withProgressId(progressId?: string): this {
    this.progressId = progressId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId;
    return this;
  }

  public withQuestModelId(questModelId?: string): this {
    this.questModelId = questModelId;
    return this;
  }

  public withRandomSeed(randomSeed?: number): this {
    this.randomSeed = randomSeed;
    return this;
  }

  public withRewards(rewards?: Reward[]): this {
    this.rewards = rewards as Reward[];
    if (rewards) {
      for (let i = 0; i < rewards!.length; i++) {
          this.rewards[i] = rewards![i];
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
    data.progressId = this.progressId;
    data.userId = this.userId;
    data.transactionId = this.transactionId;
    data.questModelId = this.questModelId;
    data.randomSeed = this.randomSeed;
    if (this.rewards) {
      data.rewards = this.rewards.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * クエスト進行
 *
 * @author Game Server Services, Inc.
 *
 */
export class CompletedQuestList implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, questGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{questGroupName}', questGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getQuestGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:completed:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** クエスト進行 */
  public completedQuestListId?: string;
  /** ユーザーID */
  public userId?: string;
  /** クエストグループ名 */
  public questGroupName?: string;
  /** 攻略済みのクエスト名一覧のリスト */
  public completeQuestNames?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.completedQuestListId !== undefined) {
      this.completedQuestListId = data.completedQuestListId;
    } else {
      this.completedQuestListId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.completeQuestNames !== undefined) {
      this.completeQuestNames = data.completeQuestNames as string[];
      for (let i = 0; i < data.completeQuestNames.length; i++) {
            this.completeQuestNames[i] = data.completeQuestNames[i];
      }
    } else {
      this.completeQuestNames = undefined;
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

  public withCompletedQuestListId(completedQuestListId?: string): this {
    this.completedQuestListId = completedQuestListId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName;
    return this;
  }

  public withCompleteQuestNames(completeQuestNames?: string[]): this {
    this.completeQuestNames = completeQuestNames as string[];
    if (completeQuestNames) {
      for (let i = 0; i < completeQuestNames!.length; i++) {
          this.completeQuestNames[i] = String(completeQuestNames![i]);
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
    data.completedQuestListId = this.completedQuestListId;
    data.userId = this.userId;
    data.questGroupName = this.questGroupName;
    data.completeQuestNames = this.completeQuestNames;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * クエストグループ
 *
 * @author Game Server Services, Inc.
 *
 */
export class QuestGroupModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, questGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{questGroupName}', questGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getQuestGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** クエストグループ */
  public questGroupModelId?: string;
  /** クエストグループ名 */
  public name?: string;
  /** クエストグループのメタデータ */
  public metadata?: string;
  /** グループに属するクエスト */
  public quests?: QuestModel[];
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.questGroupModelId !== undefined) {
      this.questGroupModelId = data.questGroupModelId;
    } else {
      this.questGroupModelId = undefined;
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
    if (data && data.quests !== undefined) {
      this.quests = data.quests as QuestModel[];
      for (let i = 0; i < data.quests.length; i++) {
            this.quests[i] = new QuestModel(data.quests[i]);
      }
    } else {
      this.quests = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
  }

  public withQuestGroupModelId(questGroupModelId?: string): this {
    this.questGroupModelId = questGroupModelId;
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

  public withQuests(quests?: QuestModel[]): this {
    this.quests = quests as QuestModel[];
    if (quests) {
      for (let i = 0; i < quests!.length; i++) {
          this.quests[i] = quests![i];
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.questGroupModelId = this.questGroupModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.quests) {
      data.quests = this.quests.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}


/**
 * None
 *
 * @author Game Server Services, Inc.
 *
 */
export class QuestModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, questGroupName: string, questName: string): string {
    return 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{questGroupName}', questGroupName)
      .replace('{questName}', questName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getQuestGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getQuestNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{questGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{questName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** クエストモデル */
  public questModelId?: string;
  /** クエストモデル名 */
  public name?: string;
  /** クエストモデルのメタデータ */
  public metadata?: string;
  /** クエストの内容 */
  public contents?: Contents[];
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** クエストの参加料 */
  public consumeActions?: ConsumeAction[];
  /** クエスト失敗時の報酬 */
  public failedAcquireActions?: AcquireAction[];
  /** クエストに挑戦するためにクリアしておく必要のあるクエスト名 */
  public premiseQuestNames?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.questModelId !== undefined) {
      this.questModelId = data.questModelId;
    } else {
      this.questModelId = undefined;
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
    if (data && data.contents !== undefined) {
      this.contents = data.contents as Contents[];
      for (let i = 0; i < data.contents.length; i++) {
            this.contents[i] = new Contents(data.contents[i]);
      }
    } else {
      this.contents = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.consumeActions !== undefined) {
      this.consumeActions = data.consumeActions as ConsumeAction[];
      for (let i = 0; i < data.consumeActions.length; i++) {
            this.consumeActions[i] = new ConsumeAction(data.consumeActions[i]);
      }
    } else {
      this.consumeActions = undefined;
    }
    if (data && data.failedAcquireActions !== undefined) {
      this.failedAcquireActions = data.failedAcquireActions as AcquireAction[];
      for (let i = 0; i < data.failedAcquireActions.length; i++) {
            this.failedAcquireActions[i] = new AcquireAction(data.failedAcquireActions[i]);
      }
    } else {
      this.failedAcquireActions = undefined;
    }
    if (data && data.premiseQuestNames !== undefined) {
      this.premiseQuestNames = data.premiseQuestNames as string[];
      for (let i = 0; i < data.premiseQuestNames.length; i++) {
            this.premiseQuestNames[i] = data.premiseQuestNames[i];
      }
    } else {
      this.premiseQuestNames = undefined;
    }
  }

  public withQuestModelId(questModelId?: string): this {
    this.questModelId = questModelId;
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

  public withContents(contents?: Contents[]): this {
    this.contents = contents as Contents[];
    if (contents) {
      for (let i = 0; i < contents!.length; i++) {
          this.contents[i] = contents![i];
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
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

  public withFailedAcquireActions(failedAcquireActions?: AcquireAction[]): this {
    this.failedAcquireActions = failedAcquireActions as AcquireAction[];
    if (failedAcquireActions) {
      for (let i = 0; i < failedAcquireActions!.length; i++) {
          this.failedAcquireActions[i] = failedAcquireActions![i];
      }
    }
    return this;
  }

  public withPremiseQuestNames(premiseQuestNames?: string[]): this {
    this.premiseQuestNames = premiseQuestNames as string[];
    if (premiseQuestNames) {
      for (let i = 0; i < premiseQuestNames!.length; i++) {
          this.premiseQuestNames[i] = String(premiseQuestNames![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.questModelId = this.questModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.contents) {
      data.contents = this.contents.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    if (this.consumeActions) {
      data.consumeActions = this.consumeActions.map((item) => item.toDict());
    }
    if (this.failedAcquireActions) {
      data.failedAcquireActions = this.failedAcquireActions.map((item) => item.toDict());
    }
    data.premiseQuestNames = this.premiseQuestNames;
    return data;
  }

}
