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
  QuestGroupModelMaster,
  QuestModelMaster,
  CurrentQuestMaster,
  ResponseCache,
  Contents,
  ConsumeAction,
  AcquireAction,
  Reward,
  Config,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
  Progress,
  CompletedQuestList,
  QuestGroupModel,
  QuestModel,
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
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
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

  public withStartQuestScript(startQuestScript?: ScriptSetting): this {
    this.startQuestScript = startQuestScript as ScriptSetting;
    return this;
  }

  public withCompleteQuestScript(completeQuestScript?: ScriptSetting): this {
    this.completeQuestScript = completeQuestScript as ScriptSetting;
    return this;
  }

  public withFailedQuestScript(failedQuestScript?: ScriptSetting): this {
    this.failedQuestScript = failedQuestScript as ScriptSetting;
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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
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
    return data;
  }

}

export class GetNamespaceStatusRequest extends Gs2Request {
  /** カテゴリ名 */
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
  /** カテゴリ名 */
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
  /** カテゴリ名 */
  public namespaceName?: string;
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
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
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

  public withStartQuestScript(startQuestScript?: ScriptSetting): this {
    this.startQuestScript = startQuestScript as ScriptSetting;
    return this;
  }

  public withCompleteQuestScript(completeQuestScript?: ScriptSetting): this {
    this.completeQuestScript = completeQuestScript as ScriptSetting;
    return this;
  }

  public withFailedQuestScript(failedQuestScript?: ScriptSetting): this {
    this.failedQuestScript = failedQuestScript as ScriptSetting;
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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
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
    return data;
  }

}

export class DeleteNamespaceRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class DescribeQuestGroupModelMastersRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class CreateQuestGroupModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public name?: string;
  /** クエストグループマスターの説明 */
  public description?: string;
  /** クエストグループのメタデータ */
  public metadata?: string;
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;

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
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId as string;
    } else {
      this.challengePeriodEventId = undefined;
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

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}

export class GetQuestGroupModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    return data;
  }

}

export class UpdateQuestGroupModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
  /** クエストグループマスターの説明 */
  public description?: string;
  /** クエストグループのメタデータ */
  public metadata?: string;
  /** 挑戦可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId as string;
    } else {
      this.challengePeriodEventId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}

export class DeleteQuestGroupModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    return data;
  }

}

export class DescribeQuestModelMastersRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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
    data.questGroupName = this.questGroupName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateQuestModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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
    if (data && data.contents !== undefined) {
      this.contents = data.contents as Contents[];
      for (let i = 0; i < data.contents.length; i++) {
        this.contents[i] = new Contents(data.contents[i]);
      }
    } else {
      this.contents = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId as string;
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
        this.premiseQuestNames[i] = data.premiseQuestNames[i] as string;
      }
    } else {
      this.premiseQuestNames = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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

  public withContents(contents?: Contents[]): this {
    this.contents = contents as Contents[];
    if (contents) {
      for (let i = 0; i < contents!.length; i++) {
        this.contents[i] = new Contents(contents![i]);
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
        this.consumeActions[i] = new ConsumeAction(consumeActions![i]);
      }
    }
    return this;
  }

  public withFailedAcquireActions(failedAcquireActions?: AcquireAction[]): this {
    this.failedAcquireActions = failedAcquireActions as AcquireAction[];
    if (failedAcquireActions) {
      for (let i = 0; i < failedAcquireActions!.length; i++) {
        this.failedAcquireActions[i] = new AcquireAction(failedAcquireActions![i]);
      }
    }
    return this;
  }

  public withPremiseQuestNames(premiseQuestNames?: string[]): this {
    this.premiseQuestNames = premiseQuestNames as string[];
    if (premiseQuestNames) {
      for (let i = 0; i < premiseQuestNames!.length; i++) {
        this.premiseQuestNames[i] = premiseQuestNames![i] as string;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
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
    return data;
  }

}

export class GetQuestModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
  /** クエスト名 */
  public questName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
    return data;
  }

}

export class UpdateQuestModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
  /** クエスト名 */
  public questName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
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
    if (data && data.contents !== undefined) {
      this.contents = data.contents as Contents[];
      for (let i = 0; i < data.contents.length; i++) {
        this.contents[i] = new Contents(data.contents[i]);
      }
    } else {
      this.contents = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId as string;
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
        this.premiseQuestNames[i] = data.premiseQuestNames[i] as string;
      }
    } else {
      this.premiseQuestNames = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
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

  public withContents(contents?: Contents[]): this {
    this.contents = contents as Contents[];
    if (contents) {
      for (let i = 0; i < contents!.length; i++) {
        this.contents[i] = new Contents(contents![i]);
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public withConsumeActions(consumeActions?: ConsumeAction[]): this {
    this.consumeActions = consumeActions as ConsumeAction[];
    if (consumeActions) {
      for (let i = 0; i < consumeActions!.length; i++) {
        this.consumeActions[i] = new ConsumeAction(consumeActions![i]);
      }
    }
    return this;
  }

  public withFailedAcquireActions(failedAcquireActions?: AcquireAction[]): this {
    this.failedAcquireActions = failedAcquireActions as AcquireAction[];
    if (failedAcquireActions) {
      for (let i = 0; i < failedAcquireActions!.length; i++) {
        this.failedAcquireActions[i] = new AcquireAction(failedAcquireActions![i]);
      }
    }
    return this;
  }

  public withPremiseQuestNames(premiseQuestNames?: string[]): this {
    this.premiseQuestNames = premiseQuestNames as string[];
    if (premiseQuestNames) {
      for (let i = 0; i < premiseQuestNames!.length; i++) {
        this.premiseQuestNames[i] = premiseQuestNames![i] as string;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
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
    return data;
  }

}

export class DeleteQuestModelMasterRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
  /** クエスト名 */
  public questName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
    return data;
  }

}

export class ExportMasterRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class GetCurrentQuestMasterRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class UpdateCurrentQuestMasterRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class UpdateCurrentQuestMasterFromGitHubRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class DescribeProgressesByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class CreateProgressByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** クエストモデル */
  public questModelId?: string;
  /** すでに開始しているクエストがある場合にそれを破棄して開始するか */
  public force?: boolean;
  /** スタンプシートの変数に適用する設定値 */
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
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.questModelId !== undefined) {
      this.questModelId = data.questModelId as string;
    } else {
      this.questModelId = undefined;
    }
    if (data && data.force !== undefined) {
      this.force = data.force as boolean;
    } else {
      this.force = undefined;
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

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withQuestModelId(questModelId?: string): this {
    this.questModelId = questModelId as string;
    return this;
  }

  public withForce(force?: boolean): this {
    this.force = force as boolean;
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
    data.userId = this.userId;
    data.questModelId = this.questModelId;
    data.force = this.force;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetProgressRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
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
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetProgressByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
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
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class StartRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループ名 */
  public questGroupName?: string;
  /** クエストモデル名 */
  public questName?: string;
  /** すでに開始しているクエストがある場合にそれを破棄して開始するか */
  public force?: boolean;
  /** スタンプシートの変数に適用する設定値 */
  public config?: Config[];
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
    }
    if (data && data.force !== undefined) {
      this.force = data.force as boolean;
    } else {
      this.force = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
    return this;
  }

  public withForce(force?: boolean): this {
    this.force = force as boolean;
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
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
    data.force = this.force;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class StartByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループ名 */
  public questGroupName?: string;
  /** クエストモデル名 */
  public questName?: string;
  /** ユーザーID */
  public userId?: string;
  /** すでに開始しているクエストがある場合にそれを破棄して開始するか */
  public force?: boolean;
  /** スタンプシートの変数に適用する設定値 */
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.force !== undefined) {
      this.force = data.force as boolean;
    } else {
      this.force = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withForce(force?: boolean): this {
    this.force = force as boolean;
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
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
    data.userId = this.userId;
    data.force = this.force;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class EndRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** トランザクションID */
  public transactionId?: string;
  /** 実際にクエストで得た報酬 */
  public rewards?: Reward[];
  /** クエストをクリアしたか */
  public isComplete?: boolean;
  /** スタンプシートの変数に適用する設定値 */
  public config?: Config[];
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
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId as string;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.rewards !== undefined) {
      this.rewards = data.rewards as Reward[];
      for (let i = 0; i < data.rewards.length; i++) {
        this.rewards[i] = new Reward(data.rewards[i]);
      }
    } else {
      this.rewards = undefined;
    }
    if (data && data.isComplete !== undefined) {
      this.isComplete = data.isComplete as boolean;
    } else {
      this.isComplete = undefined;
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

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId as string;
    return this;
  }

  public withRewards(rewards?: Reward[]): this {
    this.rewards = rewards as Reward[];
    if (rewards) {
      for (let i = 0; i < rewards!.length; i++) {
        this.rewards[i] = new Reward(rewards![i]);
      }
    }
    return this;
  }

  public withIsComplete(isComplete?: boolean): this {
    this.isComplete = isComplete as boolean;
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
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.transactionId = this.transactionId;
    if (this.rewards) {
      data.rewards = this.rewards.map((item) => item.toDict());
    }
    data.isComplete = this.isComplete;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class EndByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** トランザクションID */
  public transactionId?: string;
  /** 実際にクエストで得た報酬 */
  public rewards?: Reward[];
  /** クエストをクリアしたか */
  public isComplete?: boolean;
  /** スタンプシートの変数に適用する設定値 */
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
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId as string;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.rewards !== undefined) {
      this.rewards = data.rewards as Reward[];
      for (let i = 0; i < data.rewards.length; i++) {
        this.rewards[i] = new Reward(data.rewards[i]);
      }
    } else {
      this.rewards = undefined;
    }
    if (data && data.isComplete !== undefined) {
      this.isComplete = data.isComplete as boolean;
    } else {
      this.isComplete = undefined;
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

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId as string;
    return this;
  }

  public withRewards(rewards?: Reward[]): this {
    this.rewards = rewards as Reward[];
    if (rewards) {
      for (let i = 0; i < rewards!.length; i++) {
        this.rewards[i] = new Reward(rewards![i]);
      }
    }
    return this;
  }

  public withIsComplete(isComplete?: boolean): this {
    this.isComplete = isComplete as boolean;
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
    data.userId = this.userId;
    data.transactionId = this.transactionId;
    if (this.rewards) {
      data.rewards = this.rewards.map((item) => item.toDict());
    }
    data.isComplete = this.isComplete;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteProgressRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
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
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteProgressByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
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
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CreateProgressByStampSheetRequest extends Gs2Request {
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

export class DeleteProgressByStampTaskRequest extends Gs2Request {
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

export class DescribeCompletedQuestListsRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class DescribeCompletedQuestListsByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class GetCompletedQuestListRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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
    data.questGroupName = this.questGroupName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetCompletedQuestListByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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
    data.questGroupName = this.questGroupName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteCompletedQuestListByUserIdRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
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
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
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

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
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
    data.questGroupName = this.questGroupName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeQuestGroupModelsRequest extends Gs2Request {
  /** カテゴリ名 */
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

export class GetQuestGroupModelRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    return data;
  }

}

export class DescribeQuestModelsRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    return data;
  }

}

export class GetQuestModelRequest extends Gs2Request {
  /** カテゴリ名 */
  public namespaceName?: string;
  /** クエストグループモデル名 */
  public questGroupName?: string;
  /** クエスト名 */
  public questName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.questGroupName !== undefined) {
      this.questGroupName = data.questGroupName as string;
    } else {
      this.questGroupName = undefined;
    }
    if (data && data.questName !== undefined) {
      this.questName = data.questName as string;
    } else {
      this.questName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withQuestGroupName(questGroupName?: string): this {
    this.questGroupName = questGroupName as string;
    return this;
  }

  public withQuestName(questName?: string): this {
    this.questName = questName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.questGroupName = this.questGroupName;
    data.questName = this.questName;
    return data;
  }

}
