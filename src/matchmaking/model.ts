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
    return 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}';
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
  /** ギャザリング新規作成時のアクション */
  public createGatheringTriggerType?: string;
  /** ギャザリング新規作成時 にルームを作成するネームスペース のGRN */
  public createGatheringTriggerRealtimeNamespaceId?: string;
  /** ギャザリング新規作成時 に実行されるスクリプト のGRN */
  public createGatheringTriggerScriptId?: string;
  /** マッチメイキング完了時のアクション */
  public completeMatchmakingTriggerType?: string;
  /** マッチメイキング完了時 にルームを作成するネームスペース のGRN */
  public completeMatchmakingTriggerRealtimeNamespaceId?: string;
  /** マッチメイキング完了時 に実行されるスクリプト のGRN */
  public completeMatchmakingTriggerScriptId?: string;
  /** ギャザリングに新規プレイヤーが参加したときのプッシュ通知 */
  public joinNotification?: NotificationSetting;
  /** ギャザリングからプレイヤーが離脱したときのプッシュ通知 */
  public leaveNotification?: NotificationSetting;
  /** マッチメイキングが完了したときのプッシュ通知 */
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
    if (data && data.createGatheringTriggerType !== undefined) {
      this.createGatheringTriggerType = data.createGatheringTriggerType;
    } else {
      this.createGatheringTriggerType = undefined;
    }
    if (data && data.createGatheringTriggerRealtimeNamespaceId !== undefined) {
      this.createGatheringTriggerRealtimeNamespaceId = data.createGatheringTriggerRealtimeNamespaceId;
    } else {
      this.createGatheringTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.createGatheringTriggerScriptId !== undefined) {
      this.createGatheringTriggerScriptId = data.createGatheringTriggerScriptId;
    } else {
      this.createGatheringTriggerScriptId = undefined;
    }
    if (data && data.completeMatchmakingTriggerType !== undefined) {
      this.completeMatchmakingTriggerType = data.completeMatchmakingTriggerType;
    } else {
      this.completeMatchmakingTriggerType = undefined;
    }
    if (data && data.completeMatchmakingTriggerRealtimeNamespaceId !== undefined) {
      this.completeMatchmakingTriggerRealtimeNamespaceId = data.completeMatchmakingTriggerRealtimeNamespaceId;
    } else {
      this.completeMatchmakingTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.completeMatchmakingTriggerScriptId !== undefined) {
      this.completeMatchmakingTriggerScriptId = data.completeMatchmakingTriggerScriptId;
    } else {
      this.completeMatchmakingTriggerScriptId = undefined;
    }
    if (data && data.joinNotification !== undefined && Object.keys(data.joinNotification).length > 0) {
      this.joinNotification = new NotificationSetting(data.joinNotification);
    } else {
      this.joinNotification = undefined;
    }
    if (data && data.leaveNotification !== undefined && Object.keys(data.leaveNotification).length > 0) {
      this.leaveNotification = new NotificationSetting(data.leaveNotification);
    } else {
      this.leaveNotification = undefined;
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

  public withCreateGatheringTriggerType(createGatheringTriggerType?: string): this {
    this.createGatheringTriggerType = createGatheringTriggerType;
    return this;
  }

  public withCreateGatheringTriggerRealtimeNamespaceId(createGatheringTriggerRealtimeNamespaceId?: string): this {
    this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId;
    return this;
  }

  public withCreateGatheringTriggerScriptId(createGatheringTriggerScriptId?: string): this {
    this.createGatheringTriggerScriptId = createGatheringTriggerScriptId;
    return this;
  }

  public withCompleteMatchmakingTriggerType(completeMatchmakingTriggerType?: string): this {
    this.completeMatchmakingTriggerType = completeMatchmakingTriggerType;
    return this;
  }

  public withCompleteMatchmakingTriggerRealtimeNamespaceId(completeMatchmakingTriggerRealtimeNamespaceId?: string): this {
    this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId;
    return this;
  }

  public withCompleteMatchmakingTriggerScriptId(completeMatchmakingTriggerScriptId?: string): this {
    this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId;
    return this;
  }

  public withJoinNotification(joinNotification?: NotificationSetting): this {
    this.joinNotification = joinNotification;
    return this;
  }

  public withLeaveNotification(leaveNotification?: NotificationSetting): this {
    this.leaveNotification = leaveNotification;
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
    data.createGatheringTriggerType = this.createGatheringTriggerType;
    data.createGatheringTriggerRealtimeNamespaceId = this.createGatheringTriggerRealtimeNamespaceId;
    data.createGatheringTriggerScriptId = this.createGatheringTriggerScriptId;
    data.completeMatchmakingTriggerType = this.completeMatchmakingTriggerType;
    data.completeMatchmakingTriggerRealtimeNamespaceId = this.completeMatchmakingTriggerRealtimeNamespaceId;
    data.completeMatchmakingTriggerScriptId = this.completeMatchmakingTriggerScriptId;
    if (this.joinNotification) {
      data.joinNotification = this.joinNotification.toDict();
    }
    if (this.leaveNotification) {
      data.leaveNotification = this.leaveNotification.toDict();
    }
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
 * ギャザリング
 *
 * @author Game Server Services, Inc.
 *
 */
export class Gathering implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, gatheringName: string): string {
    return 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{gatheringName}', gatheringName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{gatheringName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{gatheringName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{gatheringName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getGatheringNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{gatheringName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** ギャザリング */
  public gatheringId?: string;
  /** ギャザリング名 */
  public name?: string;
  /** 募集条件 */
  public attributeRanges?: AttributeRange[];
  /** 参加者 */
  public capacityOfRoles?: CapacityOfRole[];
  /** 参加を許可するユーザIDリスト */
  public allowUserIds?: string[];
  /** メタデータ */
  public metadata?: string;
  /** ギャザリングの有効期限 */
  public expiresAt?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.gatheringId !== undefined) {
      this.gatheringId = data.gatheringId;
    } else {
      this.gatheringId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.attributeRanges !== undefined) {
      this.attributeRanges = data.attributeRanges as AttributeRange[];
      for (let i = 0; i < data.attributeRanges.length; i++) {
            this.attributeRanges[i] = new AttributeRange(data.attributeRanges[i]);
      }
    } else {
      this.attributeRanges = undefined;
    }
    if (data && data.capacityOfRoles !== undefined) {
      this.capacityOfRoles = data.capacityOfRoles as CapacityOfRole[];
      for (let i = 0; i < data.capacityOfRoles.length; i++) {
            this.capacityOfRoles[i] = new CapacityOfRole(data.capacityOfRoles[i]);
      }
    } else {
      this.capacityOfRoles = undefined;
    }
    if (data && data.allowUserIds !== undefined) {
      this.allowUserIds = data.allowUserIds as string[];
      for (let i = 0; i < data.allowUserIds.length; i++) {
            this.allowUserIds[i] = data.allowUserIds[i];
      }
    } else {
      this.allowUserIds = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt;
    } else {
      this.expiresAt = 0;
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

  public withGatheringId(gatheringId?: string): this {
    this.gatheringId = gatheringId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withAttributeRanges(attributeRanges?: AttributeRange[]): this {
    this.attributeRanges = attributeRanges as AttributeRange[];
    if (attributeRanges) {
      for (let i = 0; i < attributeRanges!.length; i++) {
          this.attributeRanges[i] = attributeRanges![i];
      }
    }
    return this;
  }

  public withCapacityOfRoles(capacityOfRoles?: CapacityOfRole[]): this {
    this.capacityOfRoles = capacityOfRoles as CapacityOfRole[];
    if (capacityOfRoles) {
      for (let i = 0; i < capacityOfRoles!.length; i++) {
          this.capacityOfRoles[i] = capacityOfRoles![i];
      }
    }
    return this;
  }

  public withAllowUserIds(allowUserIds?: string[]): this {
    this.allowUserIds = allowUserIds as string[];
    if (allowUserIds) {
      for (let i = 0; i < allowUserIds!.length; i++) {
          this.allowUserIds[i] = String(allowUserIds![i]);
      }
    }
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt;
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
    data.gatheringId = this.gatheringId;
    data.name = this.name;
    if (this.attributeRanges) {
      data.attributeRanges = this.attributeRanges.map((item) => item.toDict());
    }
    if (this.capacityOfRoles) {
      data.capacityOfRoles = this.capacityOfRoles.map((item) => item.toDict());
    }
    data.allowUserIds = this.allowUserIds;
    data.metadata = this.metadata;
    data.expiresAt = this.expiresAt;
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
 * ギャザリング参加可能な属性値の範囲
 *
 * @author Game Server Services, Inc.
 *
 */
export class AttributeRange implements IModel {
  /** 属性名 */
  public name?: string;
  /** ギャザリング参加可能な属性値の最小値 */
  public min?: number;
  /** ギャザリング参加可能な属性値の最大値 */
  public max?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.min !== undefined) {
      this.min = data.min;
    } else {
      this.min = 0;
    }
    if (data && data.max !== undefined) {
      this.max = data.max;
    } else {
      this.max = 0;
    }
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMin(min?: number): this {
    this.min = min;
    return this;
  }

  public withMax(max?: number): this {
    this.max = max;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.min = this.min;
    data.max = this.max;
    return data;
  }

}


/**
 * ロールごとのキャパシティ
 *
 * @author Game Server Services, Inc.
 *
 */
export class CapacityOfRole implements IModel {
  /** ロール名 */
  public roleName?: string;
  /** ロール名の別名リスト */
  public roleAliases?: string[];
  /** 募集人数 */
  public capacity?: number;
  /** 参加者のプレイヤー情報リスト */
  public participants?: Player[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.roleName !== undefined) {
      this.roleName = data.roleName;
    } else {
      this.roleName = undefined;
    }
    if (data && data.roleAliases !== undefined) {
      this.roleAliases = data.roleAliases as string[];
      for (let i = 0; i < data.roleAliases.length; i++) {
            this.roleAliases[i] = data.roleAliases[i];
      }
    } else {
      this.roleAliases = undefined;
    }
    if (data && data.capacity !== undefined) {
      this.capacity = data.capacity;
    } else {
      this.capacity = 0;
    }
    if (data && data.participants !== undefined) {
      this.participants = data.participants as Player[];
      for (let i = 0; i < data.participants.length; i++) {
            this.participants[i] = new Player(data.participants[i]);
      }
    } else {
      this.participants = undefined;
    }
  }

  public withRoleName(roleName?: string): this {
    this.roleName = roleName;
    return this;
  }

  public withRoleAliases(roleAliases?: string[]): this {
    this.roleAliases = roleAliases as string[];
    if (roleAliases) {
      for (let i = 0; i < roleAliases!.length; i++) {
          this.roleAliases[i] = String(roleAliases![i]);
      }
    }
    return this;
  }

  public withCapacity(capacity?: number): this {
    this.capacity = capacity;
    return this;
  }

  public withParticipants(participants?: Player[]): this {
    this.participants = participants as Player[];
    if (participants) {
      for (let i = 0; i < participants!.length; i++) {
          this.participants[i] = participants![i];
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.roleName = this.roleName;
    data.roleAliases = this.roleAliases;
    data.capacity = this.capacity;
    if (this.participants) {
      data.participants = this.participants.map((item) => item.toDict());
    }
    return data;
  }

}


/**
 * プレイヤーの属性値
 *
 * @author Game Server Services, Inc.
 *
 */
export class Attribute implements IModel {
  /** 属性名 */
  public name?: string;
  /** 属性値 */
  public value?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
    }
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.value = this.value;
    return data;
  }

}


/**
 * プレイヤー情報
 *
 * @author Game Server Services, Inc.
 *
 */
export class Player implements IModel {
  /** ユーザーID */
  public userId?: string;
  /** 属性値のリスト */
  public attributes?: Attribute[];
  /** ロール名 */
  public roleName?: string;
  /** 参加を拒否するユーザIDリスト */
  public denyUserIds?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.attributes !== undefined) {
      this.attributes = data.attributes as Attribute[];
      for (let i = 0; i < data.attributes.length; i++) {
            this.attributes[i] = new Attribute(data.attributes[i]);
      }
    } else {
      this.attributes = undefined;
    }
    if (data && data.roleName !== undefined) {
      this.roleName = data.roleName;
    } else {
      this.roleName = undefined;
    }
    if (data && data.denyUserIds !== undefined) {
      this.denyUserIds = data.denyUserIds as string[];
      for (let i = 0; i < data.denyUserIds.length; i++) {
            this.denyUserIds[i] = data.denyUserIds[i];
      }
    } else {
      this.denyUserIds = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAttributes(attributes?: Attribute[]): this {
    this.attributes = attributes as Attribute[];
    if (attributes) {
      for (let i = 0; i < attributes!.length; i++) {
          this.attributes[i] = attributes![i];
      }
    }
    return this;
  }

  public withRoleName(roleName?: string): this {
    this.roleName = roleName;
    return this;
  }

  public withDenyUserIds(denyUserIds?: string[]): this {
    this.denyUserIds = denyUserIds as string[];
    if (denyUserIds) {
      for (let i = 0; i < denyUserIds!.length; i++) {
          this.denyUserIds[i] = String(denyUserIds![i]);
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    if (this.attributes) {
      data.attributes = this.attributes.map((item) => item.toDict());
    }
    data.roleName = this.roleName;
    data.denyUserIds = this.denyUserIds;
    return data;
  }

}
