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
 * ミッションタスク
 *
 * @author Game Server Services, Inc.
 *
 */
export class MissionTaskModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, missionGroupName: string, missionTaskName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{missionGroupName}', missionGroupName)
      .replace('{missionTaskName}', missionTaskName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMissionGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMissionTaskNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}::';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** ミッションタスク */
  public missionTaskId?: string;
  /** タスク名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** カウンター名 */
  public counterName?: string;
  /** 目標値 */
  public targetValue?: number;
  /** ミッション達成時の報酬 */
  public completeAcquireActions?: AcquireAction[];
  /** 達成報酬の受け取り可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** このタスクに挑戦するために達成しておく必要のあるタスクの名前 */
  public premiseMissionTaskName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.missionTaskId !== undefined) {
      this.missionTaskId = data.missionTaskId;
    } else {
      this.missionTaskId = undefined;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName;
    } else {
      this.counterName = undefined;
    }
    if (data && data.targetValue !== undefined) {
      this.targetValue = data.targetValue;
    } else {
      this.targetValue = 0;
    }
    if (data && data.completeAcquireActions !== undefined) {
      this.completeAcquireActions = data.completeAcquireActions as AcquireAction[];
      for (let i = 0; i < data.completeAcquireActions.length; i++) {
            this.completeAcquireActions[i] = new AcquireAction(data.completeAcquireActions[i]);
      }
    } else {
      this.completeAcquireActions = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.premiseMissionTaskName !== undefined) {
      this.premiseMissionTaskName = data.premiseMissionTaskName;
    } else {
      this.premiseMissionTaskName = undefined;
    }
  }

  public withMissionTaskId(missionTaskId?: string): this {
    this.missionTaskId = missionTaskId;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName;
    return this;
  }

  public withTargetValue(targetValue?: number): this {
    this.targetValue = targetValue;
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

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
    return this;
  }

  public withPremiseMissionTaskName(premiseMissionTaskName?: string): this {
    this.premiseMissionTaskName = premiseMissionTaskName;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.missionTaskId = this.missionTaskId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.counterName = this.counterName;
    data.targetValue = this.targetValue;
    if (this.completeAcquireActions) {
      data.completeAcquireActions = this.completeAcquireActions.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    data.premiseMissionTaskName = this.premiseMissionTaskName;
    return data;
  }

}


/**
 * ミッションタスクマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class MissionTaskModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, missionGroupName: string, missionTaskName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{missionGroupName}', missionGroupName)
      .replace('{missionTaskName}', missionTaskName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMissionGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMissionTaskNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}:task:{missionTaskName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');
    grnFormat = grnFormat.replace('{missionTaskName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** ミッションタスクマスター */
  public missionTaskId?: string;
  /** タスク名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** ミッションタスクの説明 */
  public description?: string;
  /** カウンター名 */
  public counterName?: string;
  /** 目標値 */
  public targetValue?: number;
  /** ミッション達成時の報酬 */
  public completeAcquireActions?: AcquireAction[];
  /** 達成報酬の受け取り可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** このタスクに挑戦するために達成しておく必要のあるタスクの名前 */
  public premiseMissionTaskName?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.missionTaskId !== undefined) {
      this.missionTaskId = data.missionTaskId;
    } else {
      this.missionTaskId = undefined;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName;
    } else {
      this.counterName = undefined;
    }
    if (data && data.targetValue !== undefined) {
      this.targetValue = data.targetValue;
    } else {
      this.targetValue = 0;
    }
    if (data && data.completeAcquireActions !== undefined) {
      this.completeAcquireActions = data.completeAcquireActions as AcquireAction[];
      for (let i = 0; i < data.completeAcquireActions.length; i++) {
            this.completeAcquireActions[i] = new AcquireAction(data.completeAcquireActions[i]);
      }
    } else {
      this.completeAcquireActions = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.premiseMissionTaskName !== undefined) {
      this.premiseMissionTaskName = data.premiseMissionTaskName;
    } else {
      this.premiseMissionTaskName = undefined;
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

  public withMissionTaskId(missionTaskId?: string): this {
    this.missionTaskId = missionTaskId;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName;
    return this;
  }

  public withTargetValue(targetValue?: number): this {
    this.targetValue = targetValue;
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

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId;
    return this;
  }

  public withPremiseMissionTaskName(premiseMissionTaskName?: string): this {
    this.premiseMissionTaskName = premiseMissionTaskName;
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
    data.missionTaskId = this.missionTaskId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.counterName = this.counterName;
    data.targetValue = this.targetValue;
    if (this.completeAcquireActions) {
      data.completeAcquireActions = this.completeAcquireActions.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    data.premiseMissionTaskName = this.premiseMissionTaskName;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ミッショングループマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class MissionGroupModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, missionGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{missionGroupName}', missionGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMissionGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** ミッショングループマスター */
  public missionGroupId?: string;
  /** ミッショングループ名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** ミッショングループの説明 */
  public description?: string;
  /** リセットタイミング */
  public resetType?: string;
  /** リセットをする日にち */
  public resetDayOfMonth?: number;
  /** リセットする曜日 */
  public resetDayOfWeek?: string;
  /** リセット時刻 */
  public resetHour?: number;
  /** ミッションを達成したときの通知先ネームスペース のGRN */
  public completeNotificationNamespaceId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.missionGroupId !== undefined) {
      this.missionGroupId = data.missionGroupId;
    } else {
      this.missionGroupId = undefined;
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
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType;
    } else {
      this.resetType = undefined;
    }
    if (data && data.resetDayOfMonth !== undefined) {
      this.resetDayOfMonth = data.resetDayOfMonth;
    } else {
      this.resetDayOfMonth = 0;
    }
    if (data && data.resetDayOfWeek !== undefined) {
      this.resetDayOfWeek = data.resetDayOfWeek;
    } else {
      this.resetDayOfWeek = undefined;
    }
    if (data && data.resetHour !== undefined) {
      this.resetHour = data.resetHour;
    } else {
      this.resetHour = 0;
    }
    if (data && data.completeNotificationNamespaceId !== undefined) {
      this.completeNotificationNamespaceId = data.completeNotificationNamespaceId;
    } else {
      this.completeNotificationNamespaceId = undefined;
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

  public withMissionGroupId(missionGroupId?: string): this {
    this.missionGroupId = missionGroupId;
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

  public withResetType(resetType?: string): this {
    this.resetType = resetType;
    return this;
  }

  public withResetDayOfMonth(resetDayOfMonth?: number): this {
    this.resetDayOfMonth = resetDayOfMonth;
    return this;
  }

  public withResetDayOfWeek(resetDayOfWeek?: string): this {
    this.resetDayOfWeek = resetDayOfWeek;
    return this;
  }

  public withResetHour(resetHour?: number): this {
    this.resetHour = resetHour;
    return this;
  }

  public withCompleteNotificationNamespaceId(completeNotificationNamespaceId?: string): this {
    this.completeNotificationNamespaceId = completeNotificationNamespaceId;
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
    data.missionGroupId = this.missionGroupId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.resetType = this.resetType;
    data.resetDayOfMonth = this.resetDayOfMonth;
    data.resetDayOfWeek = this.resetDayOfWeek;
    data.resetHour = this.resetHour;
    data.completeNotificationNamespaceId = this.completeNotificationNamespaceId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * カウンターの種類マスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CounterModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, counterName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{counterName}', counterName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getCounterNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** カウンターの種類マスター */
  public counterId?: string;
  /** カウンター名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** カウンターの種類マスターの説明 */
  public description?: string;
  /** カウンターのリセットタイミング */
  public scopes?: CounterScopeModel[];
  /** カウントアップ可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.counterId !== undefined) {
      this.counterId = data.counterId;
    } else {
      this.counterId = undefined;
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
    if (data && data.scopes !== undefined) {
      this.scopes = data.scopes as CounterScopeModel[];
      for (let i = 0; i < data.scopes.length; i++) {
            this.scopes[i] = new CounterScopeModel(data.scopes[i]);
      }
    } else {
      this.scopes = undefined;
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

  public withCounterId(counterId?: string): this {
    this.counterId = counterId;
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

  public withScopes(scopes?: CounterScopeModel[]): this {
    this.scopes = scopes as CounterScopeModel[];
    if (scopes) {
      for (let i = 0; i < scopes!.length; i++) {
          this.scopes[i] = scopes![i];
      }
    }
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
    data.counterId = this.counterId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    if (this.scopes) {
      data.scopes = this.scopes.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * カウンターのリセットタイミング
 *
 * @author Game Server Services, Inc.
 *
 */
export class CounterScopeModel implements IModel {
  /** リセットタイミング */
  public resetType?: string;
  /** リセットをする日にち */
  public resetDayOfMonth?: number;
  /** リセットする曜日 */
  public resetDayOfWeek?: string;
  /** リセット時刻 */
  public resetHour?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType;
    } else {
      this.resetType = undefined;
    }
    if (data && data.resetDayOfMonth !== undefined) {
      this.resetDayOfMonth = data.resetDayOfMonth;
    } else {
      this.resetDayOfMonth = 0;
    }
    if (data && data.resetDayOfWeek !== undefined) {
      this.resetDayOfWeek = data.resetDayOfWeek;
    } else {
      this.resetDayOfWeek = undefined;
    }
    if (data && data.resetHour !== undefined) {
      this.resetHour = data.resetHour;
    } else {
      this.resetHour = 0;
    }
  }

  public withResetType(resetType?: string): this {
    this.resetType = resetType;
    return this;
  }

  public withResetDayOfMonth(resetDayOfMonth?: number): this {
    this.resetDayOfMonth = resetDayOfMonth;
    return this;
  }

  public withResetDayOfWeek(resetDayOfWeek?: string): this {
    this.resetDayOfWeek = resetDayOfWeek;
    return this;
  }

  public withResetHour(resetHour?: number): this {
    this.resetHour = resetHour;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.resetType = this.resetType;
    data.resetDayOfMonth = this.resetDayOfMonth;
    data.resetDayOfWeek = this.resetDayOfWeek;
    data.resetHour = this.resetHour;
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
 * リセットタイミングまでの期間のカウンター値
 *
 * @author Game Server Services, Inc.
 *
 */
export class ScopedValue implements IModel {
  /** リセットタイミング */
  public resetType?: string;
  /** カウント */
  public value?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType;
    } else {
      this.resetType = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withResetType(resetType?: string): this {
    this.resetType = resetType;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.resetType = this.resetType;
    data.value = this.value;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
  /** ミッションを達成したときに実行するスクリプト */
  public missionCompleteScript?: ScriptSetting;
  /** カウンターを上昇したときに実行するスクリプト */
  public counterIncrementScript?: ScriptSetting;
  /** 報酬を受け取ったときに実行するスクリプト */
  public receiveRewardsScript?: ScriptSetting;
  /** 報酬付与処理をジョブとして追加するキューネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 報酬付与処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** ミッションのタスクを達成したときのプッシュ通知 */
  public completeNotification?: NotificationSetting;
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
    if (data && data.missionCompleteScript !== undefined && Object.keys(data.missionCompleteScript).length > 0) {
      this.missionCompleteScript = new ScriptSetting(data.missionCompleteScript);
    } else {
      this.missionCompleteScript = undefined;
    }
    if (data && data.counterIncrementScript !== undefined && Object.keys(data.counterIncrementScript).length > 0) {
      this.counterIncrementScript = new ScriptSetting(data.counterIncrementScript);
    } else {
      this.counterIncrementScript = undefined;
    }
    if (data && data.receiveRewardsScript !== undefined && Object.keys(data.receiveRewardsScript).length > 0) {
      this.receiveRewardsScript = new ScriptSetting(data.receiveRewardsScript);
    } else {
      this.receiveRewardsScript = undefined;
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
    if (data && data.completeNotification !== undefined && Object.keys(data.completeNotification).length > 0) {
      this.completeNotification = new NotificationSetting(data.completeNotification);
    } else {
      this.completeNotification = undefined;
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

  public withMissionCompleteScript(missionCompleteScript?: ScriptSetting): this {
    this.missionCompleteScript = missionCompleteScript;
    return this;
  }

  public withCounterIncrementScript(counterIncrementScript?: ScriptSetting): this {
    this.counterIncrementScript = counterIncrementScript;
    return this;
  }

  public withReceiveRewardsScript(receiveRewardsScript?: ScriptSetting): this {
    this.receiveRewardsScript = receiveRewardsScript;
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

  public withCompleteNotification(completeNotification?: NotificationSetting): this {
    this.completeNotification = completeNotification;
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
    if (this.missionCompleteScript) {
      data.missionCompleteScript = this.missionCompleteScript.toDict();
    }
    if (this.counterIncrementScript) {
      data.counterIncrementScript = this.counterIncrementScript.toDict();
    }
    if (this.receiveRewardsScript) {
      data.receiveRewardsScript = this.receiveRewardsScript.toDict();
    }
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    if (this.completeNotification) {
      data.completeNotification = this.completeNotification.toDict();
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
 * カウンターの種類
 *
 * @author Game Server Services, Inc.
 *
 */
export class CounterModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, counterName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{counterName}', counterName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getCounterNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** カウンターの種類 */
  public counterId?: string;
  /** カウンター名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** カウンターのリセットタイミング */
  public scopes?: CounterScopeModel[];
  /** カウントアップ可能な期間を指定するイベントマスター のGRN */
  public challengePeriodEventId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.counterId !== undefined) {
      this.counterId = data.counterId;
    } else {
      this.counterId = undefined;
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
    if (data && data.scopes !== undefined) {
      this.scopes = data.scopes as CounterScopeModel[];
      for (let i = 0; i < data.scopes.length; i++) {
            this.scopes[i] = new CounterScopeModel(data.scopes[i]);
      }
    } else {
      this.scopes = undefined;
    }
    if (data && data.challengePeriodEventId !== undefined) {
      this.challengePeriodEventId = data.challengePeriodEventId;
    } else {
      this.challengePeriodEventId = undefined;
    }
  }

  public withCounterId(counterId?: string): this {
    this.counterId = counterId;
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

  public withScopes(scopes?: CounterScopeModel[]): this {
    this.scopes = scopes as CounterScopeModel[];
    if (scopes) {
      for (let i = 0; i < scopes!.length; i++) {
          this.scopes[i] = scopes![i];
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
    data.counterId = this.counterId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.scopes) {
      data.scopes = this.scopes.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}


/**
 * ミッショングループ
 *
 * @author Game Server Services, Inc.
 *
 */
export class MissionGroupModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, missionGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{missionGroupName}', missionGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getMissionGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** ミッショングループ */
  public missionGroupId?: string;
  /** グループ名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** タスクリスト */
  public tasks?: MissionTaskModel[];
  /** リセットタイミング */
  public resetType?: string;
  /** リセットをする日にち */
  public resetDayOfMonth?: number;
  /** リセットする曜日 */
  public resetDayOfWeek?: string;
  /** リセット時刻 */
  public resetHour?: number;
  /** ミッションを達成したときの通知先ネームスペース のGRN */
  public completeNotificationNamespaceId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.missionGroupId !== undefined) {
      this.missionGroupId = data.missionGroupId;
    } else {
      this.missionGroupId = undefined;
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
    if (data && data.tasks !== undefined) {
      this.tasks = data.tasks as MissionTaskModel[];
      for (let i = 0; i < data.tasks.length; i++) {
            this.tasks[i] = new MissionTaskModel(data.tasks[i]);
      }
    } else {
      this.tasks = undefined;
    }
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType;
    } else {
      this.resetType = undefined;
    }
    if (data && data.resetDayOfMonth !== undefined) {
      this.resetDayOfMonth = data.resetDayOfMonth;
    } else {
      this.resetDayOfMonth = 0;
    }
    if (data && data.resetDayOfWeek !== undefined) {
      this.resetDayOfWeek = data.resetDayOfWeek;
    } else {
      this.resetDayOfWeek = undefined;
    }
    if (data && data.resetHour !== undefined) {
      this.resetHour = data.resetHour;
    } else {
      this.resetHour = 0;
    }
    if (data && data.completeNotificationNamespaceId !== undefined) {
      this.completeNotificationNamespaceId = data.completeNotificationNamespaceId;
    } else {
      this.completeNotificationNamespaceId = undefined;
    }
  }

  public withMissionGroupId(missionGroupId?: string): this {
    this.missionGroupId = missionGroupId;
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

  public withTasks(tasks?: MissionTaskModel[]): this {
    this.tasks = tasks as MissionTaskModel[];
    if (tasks) {
      for (let i = 0; i < tasks!.length; i++) {
          this.tasks[i] = tasks![i];
      }
    }
    return this;
  }

  public withResetType(resetType?: string): this {
    this.resetType = resetType;
    return this;
  }

  public withResetDayOfMonth(resetDayOfMonth?: number): this {
    this.resetDayOfMonth = resetDayOfMonth;
    return this;
  }

  public withResetDayOfWeek(resetDayOfWeek?: string): this {
    this.resetDayOfWeek = resetDayOfWeek;
    return this;
  }

  public withResetHour(resetHour?: number): this {
    this.resetHour = resetHour;
    return this;
  }

  public withCompleteNotificationNamespaceId(completeNotificationNamespaceId?: string): this {
    this.completeNotificationNamespaceId = completeNotificationNamespaceId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.missionGroupId = this.missionGroupId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.tasks) {
      data.tasks = this.tasks.map((item) => item.toDict());
    }
    data.resetType = this.resetType;
    data.resetDayOfMonth = this.resetDayOfMonth;
    data.resetDayOfWeek = this.resetDayOfWeek;
    data.resetHour = this.resetHour;
    data.completeNotificationNamespaceId = this.completeNotificationNamespaceId;
    return data;
  }

}


/**
 * カウンター
 *
 * @author Game Server Services, Inc.
 *
 */
export class Counter implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, counterName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{counterName}', counterName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getCounterNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:counter:{counterName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{counterName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** カウンター */
  public counterId?: string;
  /** ユーザーID */
  public userId?: string;
  /** カウンター名 */
  public name?: string;
  /** 値 */
  public values?: ScopedValue[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.counterId !== undefined) {
      this.counterId = data.counterId;
    } else {
      this.counterId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.values !== undefined) {
      this.values = data.values as ScopedValue[];
      for (let i = 0; i < data.values.length; i++) {
            this.values[i] = new ScopedValue(data.values[i]);
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

  public withCounterId(counterId?: string): this {
    this.counterId = counterId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withValues(values?: ScopedValue[]): this {
    this.values = values as ScopedValue[];
    if (values) {
      for (let i = 0; i < values!.length; i++) {
          this.values[i] = values![i];
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
    data.counterId = this.counterId;
    data.userId = this.userId;
    data.name = this.name;
    if (this.values) {
      data.values = this.values.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
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
 * 達成状況
 *
 * @author Game Server Services, Inc.
 *
 */
export class Complete implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, missionGroupName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{missionGroupName}', missionGroupName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMissionGroupNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}:user:{userId}:group:{missionGroupName}:complete';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{missionGroupName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** 達成状況 */
  public completeId?: string;
  /** ユーザーID */
  public userId?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** 達成済みのタスク名リスト */
  public completedMissionTaskNames?: string[];
  /** 報酬の受け取り済みのタスク名リスト */
  public receivedMissionTaskNames?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.completeId !== undefined) {
      this.completeId = data.completeId;
    } else {
      this.completeId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.completedMissionTaskNames !== undefined) {
      this.completedMissionTaskNames = data.completedMissionTaskNames as string[];
      for (let i = 0; i < data.completedMissionTaskNames.length; i++) {
            this.completedMissionTaskNames[i] = data.completedMissionTaskNames[i];
      }
    } else {
      this.completedMissionTaskNames = undefined;
    }
    if (data && data.receivedMissionTaskNames !== undefined) {
      this.receivedMissionTaskNames = data.receivedMissionTaskNames as string[];
      for (let i = 0; i < data.receivedMissionTaskNames.length; i++) {
            this.receivedMissionTaskNames[i] = data.receivedMissionTaskNames[i];
      }
    } else {
      this.receivedMissionTaskNames = undefined;
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

  public withCompleteId(completeId?: string): this {
    this.completeId = completeId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName;
    return this;
  }

  public withCompletedMissionTaskNames(completedMissionTaskNames?: string[]): this {
    this.completedMissionTaskNames = completedMissionTaskNames as string[];
    if (completedMissionTaskNames) {
      for (let i = 0; i < completedMissionTaskNames!.length; i++) {
          this.completedMissionTaskNames[i] = String(completedMissionTaskNames![i]);
      }
    }
    return this;
  }

  public withReceivedMissionTaskNames(receivedMissionTaskNames?: string[]): this {
    this.receivedMissionTaskNames = receivedMissionTaskNames as string[];
    if (receivedMissionTaskNames) {
      for (let i = 0; i < receivedMissionTaskNames!.length; i++) {
          this.receivedMissionTaskNames[i] = String(receivedMissionTaskNames![i]);
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
    data.completeId = this.completeId;
    data.userId = this.userId;
    data.missionGroupName = this.missionGroupName;
    data.completedMissionTaskNames = this.completedMissionTaskNames;
    data.receivedMissionTaskNames = this.receivedMissionTaskNames;
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
 * 現在有効なミッション
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentMissionMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:mission:{namespaceName}';
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
 * プッシュ通知設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class NotificationSetting implements IModel {
  /** プッシュ通知に使用する GS2-Gateway のネームスペース のGRN */
  public gatewayNamespaceId?: string;
  /** モバイルプッシュ通知へ転送するか */
  public enableTransferMobileNotification?: boolean;
  /** モバイルプッシュ通知で使用するサウンドファイル名 */
  public sound?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.gatewayNamespaceId !== undefined) {
      this.gatewayNamespaceId = data.gatewayNamespaceId;
    } else {
      this.gatewayNamespaceId = undefined;
    }
    if (data && data.enableTransferMobileNotification !== undefined) {
      this.enableTransferMobileNotification = data.enableTransferMobileNotification;
    } else {
      this.enableTransferMobileNotification = false;
    }
    if (data && data.sound !== undefined) {
      this.sound = data.sound;
    } else {
      this.sound = undefined;
    }
  }

  public withGatewayNamespaceId(gatewayNamespaceId?: string): this {
    this.gatewayNamespaceId = gatewayNamespaceId;
    return this;
  }

  public withEnableTransferMobileNotification(enableTransferMobileNotification?: boolean): this {
    this.enableTransferMobileNotification = enableTransferMobileNotification;
    return this;
  }

  public withSound(sound?: string): this {
    this.sound = sound;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.gatewayNamespaceId = this.gatewayNamespaceId;
    data.enableTransferMobileNotification = this.enableTransferMobileNotification;
    data.sound = this.sound;
    return data;
  }

}
