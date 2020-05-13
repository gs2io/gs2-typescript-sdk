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
  Gathering,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  AttributeRange,
  CapacityOfRole,
  Attribute,
  Player,
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
    if (data && data.createGatheringTriggerType !== undefined) {
      this.createGatheringTriggerType = data.createGatheringTriggerType as string;
    } else {
      this.createGatheringTriggerType = undefined;
    }
    if (data && data.createGatheringTriggerRealtimeNamespaceId !== undefined) {
      this.createGatheringTriggerRealtimeNamespaceId = data.createGatheringTriggerRealtimeNamespaceId as string;
    } else {
      this.createGatheringTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.createGatheringTriggerScriptId !== undefined) {
      this.createGatheringTriggerScriptId = data.createGatheringTriggerScriptId as string;
    } else {
      this.createGatheringTriggerScriptId = undefined;
    }
    if (data && data.completeMatchmakingTriggerType !== undefined) {
      this.completeMatchmakingTriggerType = data.completeMatchmakingTriggerType as string;
    } else {
      this.completeMatchmakingTriggerType = undefined;
    }
    if (data && data.completeMatchmakingTriggerRealtimeNamespaceId !== undefined) {
      this.completeMatchmakingTriggerRealtimeNamespaceId = data.completeMatchmakingTriggerRealtimeNamespaceId as string;
    } else {
      this.completeMatchmakingTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.completeMatchmakingTriggerScriptId !== undefined) {
      this.completeMatchmakingTriggerScriptId = data.completeMatchmakingTriggerScriptId as string;
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
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withCreateGatheringTriggerType(createGatheringTriggerType?: string): this {
    this.createGatheringTriggerType = createGatheringTriggerType as string;
    return this;
  }

  public withCreateGatheringTriggerRealtimeNamespaceId(createGatheringTriggerRealtimeNamespaceId?: string): this {
    this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId as string;
    return this;
  }

  public withCreateGatheringTriggerScriptId(createGatheringTriggerScriptId?: string): this {
    this.createGatheringTriggerScriptId = createGatheringTriggerScriptId as string;
    return this;
  }

  public withCompleteMatchmakingTriggerType(completeMatchmakingTriggerType?: string): this {
    this.completeMatchmakingTriggerType = completeMatchmakingTriggerType as string;
    return this;
  }

  public withCompleteMatchmakingTriggerRealtimeNamespaceId(completeMatchmakingTriggerRealtimeNamespaceId?: string): this {
    this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId as string;
    return this;
  }

  public withCompleteMatchmakingTriggerScriptId(completeMatchmakingTriggerScriptId?: string): this {
    this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId as string;
    return this;
  }

  public withJoinNotification(joinNotification?: NotificationSetting): this {
    this.joinNotification = joinNotification as NotificationSetting;
    return this;
  }

  public withLeaveNotification(leaveNotification?: NotificationSetting): this {
    this.leaveNotification = leaveNotification as NotificationSetting;
    return this;
  }

  public withCompleteNotification(completeNotification?: NotificationSetting): this {
    this.completeNotification = completeNotification as NotificationSetting;
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
    if (data && data.createGatheringTriggerType !== undefined) {
      this.createGatheringTriggerType = data.createGatheringTriggerType as string;
    } else {
      this.createGatheringTriggerType = undefined;
    }
    if (data && data.createGatheringTriggerRealtimeNamespaceId !== undefined) {
      this.createGatheringTriggerRealtimeNamespaceId = data.createGatheringTriggerRealtimeNamespaceId as string;
    } else {
      this.createGatheringTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.createGatheringTriggerScriptId !== undefined) {
      this.createGatheringTriggerScriptId = data.createGatheringTriggerScriptId as string;
    } else {
      this.createGatheringTriggerScriptId = undefined;
    }
    if (data && data.completeMatchmakingTriggerType !== undefined) {
      this.completeMatchmakingTriggerType = data.completeMatchmakingTriggerType as string;
    } else {
      this.completeMatchmakingTriggerType = undefined;
    }
    if (data && data.completeMatchmakingTriggerRealtimeNamespaceId !== undefined) {
      this.completeMatchmakingTriggerRealtimeNamespaceId = data.completeMatchmakingTriggerRealtimeNamespaceId as string;
    } else {
      this.completeMatchmakingTriggerRealtimeNamespaceId = undefined;
    }
    if (data && data.completeMatchmakingTriggerScriptId !== undefined) {
      this.completeMatchmakingTriggerScriptId = data.completeMatchmakingTriggerScriptId as string;
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
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withCreateGatheringTriggerType(createGatheringTriggerType?: string): this {
    this.createGatheringTriggerType = createGatheringTriggerType as string;
    return this;
  }

  public withCreateGatheringTriggerRealtimeNamespaceId(createGatheringTriggerRealtimeNamespaceId?: string): this {
    this.createGatheringTriggerRealtimeNamespaceId = createGatheringTriggerRealtimeNamespaceId as string;
    return this;
  }

  public withCreateGatheringTriggerScriptId(createGatheringTriggerScriptId?: string): this {
    this.createGatheringTriggerScriptId = createGatheringTriggerScriptId as string;
    return this;
  }

  public withCompleteMatchmakingTriggerType(completeMatchmakingTriggerType?: string): this {
    this.completeMatchmakingTriggerType = completeMatchmakingTriggerType as string;
    return this;
  }

  public withCompleteMatchmakingTriggerRealtimeNamespaceId(completeMatchmakingTriggerRealtimeNamespaceId?: string): this {
    this.completeMatchmakingTriggerRealtimeNamespaceId = completeMatchmakingTriggerRealtimeNamespaceId as string;
    return this;
  }

  public withCompleteMatchmakingTriggerScriptId(completeMatchmakingTriggerScriptId?: string): this {
    this.completeMatchmakingTriggerScriptId = completeMatchmakingTriggerScriptId as string;
    return this;
  }

  public withJoinNotification(joinNotification?: NotificationSetting): this {
    this.joinNotification = joinNotification as NotificationSetting;
    return this;
  }

  public withLeaveNotification(leaveNotification?: NotificationSetting): this {
    this.leaveNotification = leaveNotification as NotificationSetting;
    return this;
  }

  public withCompleteNotification(completeNotification?: NotificationSetting): this {
    this.completeNotification = completeNotification as NotificationSetting;
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

export class DescribeGatheringsRequest extends Gs2Request {
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

export class CreateGatheringRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 自身のプレイヤー情報 */
  public player?: Player;
  /** 募集条件 */
  public attributeRanges?: AttributeRange[];
  /** 参加者 */
  public capacityOfRoles?: CapacityOfRole[];
  /** 参加を許可するユーザIDリスト */
  public allowUserIds?: string[];
  /** ギャザリングの有効期限 */
  public expiresAt?: number;
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
    if (data && data.player !== undefined && Object.keys(data.player).length > 0) {
      this.player = new Player(data.player);
    } else {
      this.player = undefined;
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
        this.allowUserIds[i] = data.allowUserIds[i] as string;
      }
    } else {
      this.allowUserIds = undefined;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt as number;
    } else {
      this.expiresAt = undefined;
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

  public withPlayer(player?: Player): this {
    this.player = player as Player;
    return this;
  }

  public withAttributeRanges(attributeRanges?: AttributeRange[]): this {
    this.attributeRanges = attributeRanges as AttributeRange[];
    if (attributeRanges) {
      for (let i = 0; i < attributeRanges!.length; i++) {
        this.attributeRanges[i] = new AttributeRange(attributeRanges![i]);
      }
    }
    return this;
  }

  public withCapacityOfRoles(capacityOfRoles?: CapacityOfRole[]): this {
    this.capacityOfRoles = capacityOfRoles as CapacityOfRole[];
    if (capacityOfRoles) {
      for (let i = 0; i < capacityOfRoles!.length; i++) {
        this.capacityOfRoles[i] = new CapacityOfRole(capacityOfRoles![i]);
      }
    }
    return this;
  }

  public withAllowUserIds(allowUserIds?: string[]): this {
    this.allowUserIds = allowUserIds as string[];
    if (allowUserIds) {
      for (let i = 0; i < allowUserIds!.length; i++) {
        this.allowUserIds[i] = allowUserIds![i] as string;
      }
    }
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt as number;
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
    if (this.player) {
      data.player = this.player.toDict();
    }
    if (this.attributeRanges) {
      data.attributeRanges = this.attributeRanges.map((item) => item.toDict());
    }
    if (this.capacityOfRoles) {
      data.capacityOfRoles = this.capacityOfRoles.map((item) => item.toDict());
    }
    data.allowUserIds = this.allowUserIds;
    data.expiresAt = this.expiresAt;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CreateGatheringByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 自身のプレイヤー情報 */
  public player?: Player;
  /** 募集条件 */
  public attributeRanges?: AttributeRange[];
  /** 参加者 */
  public capacityOfRoles?: CapacityOfRole[];
  /** 参加を許可するユーザIDリスト */
  public allowUserIds?: string[];
  /** ギャザリングの有効期限 */
  public expiresAt?: number;
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
    if (data && data.player !== undefined && Object.keys(data.player).length > 0) {
      this.player = new Player(data.player);
    } else {
      this.player = undefined;
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
        this.allowUserIds[i] = data.allowUserIds[i] as string;
      }
    } else {
      this.allowUserIds = undefined;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt as number;
    } else {
      this.expiresAt = undefined;
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

  public withPlayer(player?: Player): this {
    this.player = player as Player;
    return this;
  }

  public withAttributeRanges(attributeRanges?: AttributeRange[]): this {
    this.attributeRanges = attributeRanges as AttributeRange[];
    if (attributeRanges) {
      for (let i = 0; i < attributeRanges!.length; i++) {
        this.attributeRanges[i] = new AttributeRange(attributeRanges![i]);
      }
    }
    return this;
  }

  public withCapacityOfRoles(capacityOfRoles?: CapacityOfRole[]): this {
    this.capacityOfRoles = capacityOfRoles as CapacityOfRole[];
    if (capacityOfRoles) {
      for (let i = 0; i < capacityOfRoles!.length; i++) {
        this.capacityOfRoles[i] = new CapacityOfRole(capacityOfRoles![i]);
      }
    }
    return this;
  }

  public withAllowUserIds(allowUserIds?: string[]): this {
    this.allowUserIds = allowUserIds as string[];
    if (allowUserIds) {
      for (let i = 0; i < allowUserIds!.length; i++) {
        this.allowUserIds[i] = allowUserIds![i] as string;
      }
    }
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt as number;
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
    if (this.player) {
      data.player = this.player.toDict();
    }
    if (this.attributeRanges) {
      data.attributeRanges = this.attributeRanges.map((item) => item.toDict());
    }
    if (this.capacityOfRoles) {
      data.capacityOfRoles = this.capacityOfRoles.map((item) => item.toDict());
    }
    data.allowUserIds = this.allowUserIds;
    data.expiresAt = this.expiresAt;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateGatheringRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;
  /** 募集条件 */
  public attributeRanges?: AttributeRange[];
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
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
    }
    if (data && data.attributeRanges !== undefined) {
      this.attributeRanges = data.attributeRanges as AttributeRange[];
      for (let i = 0; i < data.attributeRanges.length; i++) {
        this.attributeRanges[i] = new AttributeRange(data.attributeRanges[i]);
      }
    } else {
      this.attributeRanges = undefined;
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

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
    return this;
  }

  public withAttributeRanges(attributeRanges?: AttributeRange[]): this {
    this.attributeRanges = attributeRanges as AttributeRange[];
    if (attributeRanges) {
      for (let i = 0; i < attributeRanges!.length; i++) {
        this.attributeRanges[i] = new AttributeRange(attributeRanges![i]);
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
    data.gatheringName = this.gatheringName;
    if (this.attributeRanges) {
      data.attributeRanges = this.attributeRanges.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateGatheringByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 募集条件 */
  public attributeRanges?: AttributeRange[];
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
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.attributeRanges !== undefined) {
      this.attributeRanges = data.attributeRanges as AttributeRange[];
      for (let i = 0; i < data.attributeRanges.length; i++) {
        this.attributeRanges[i] = new AttributeRange(data.attributeRanges[i]);
      }
    } else {
      this.attributeRanges = undefined;
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

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAttributeRanges(attributeRanges?: AttributeRange[]): this {
    this.attributeRanges = attributeRanges as AttributeRange[];
    if (attributeRanges) {
      for (let i = 0; i < attributeRanges!.length; i++) {
        this.attributeRanges[i] = new AttributeRange(attributeRanges![i]);
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
    data.gatheringName = this.gatheringName;
    data.userId = this.userId;
    if (this.attributeRanges) {
      data.attributeRanges = this.attributeRanges.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DoMatchmakingByPlayerRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** プレイヤー情報 */
  public player?: Player;
  /** 検索の再開に使用する マッチメイキングの状態を保持するトークン */
  public matchmakingContextToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.player !== undefined && Object.keys(data.player).length > 0) {
      this.player = new Player(data.player);
    } else {
      this.player = undefined;
    }
    if (data && data.matchmakingContextToken !== undefined) {
      this.matchmakingContextToken = data.matchmakingContextToken as string;
    } else {
      this.matchmakingContextToken = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withPlayer(player?: Player): this {
    this.player = player as Player;
    return this;
  }

  public withMatchmakingContextToken(matchmakingContextToken?: string): this {
    this.matchmakingContextToken = matchmakingContextToken as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    if (this.player) {
      data.player = this.player.toDict();
    }
    data.matchmakingContextToken = this.matchmakingContextToken;
    return data;
  }

}

export class DoMatchmakingRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 自身のプレイヤー情報 */
  public player?: Player;
  /** 検索の再開に使用する マッチメイキングの状態を保持するトークン */
  public matchmakingContextToken?: string;
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
    if (data && data.player !== undefined && Object.keys(data.player).length > 0) {
      this.player = new Player(data.player);
    } else {
      this.player = undefined;
    }
    if (data && data.matchmakingContextToken !== undefined) {
      this.matchmakingContextToken = data.matchmakingContextToken as string;
    } else {
      this.matchmakingContextToken = undefined;
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

  public withPlayer(player?: Player): this {
    this.player = player as Player;
    return this;
  }

  public withMatchmakingContextToken(matchmakingContextToken?: string): this {
    this.matchmakingContextToken = matchmakingContextToken as string;
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
    if (this.player) {
      data.player = this.player.toDict();
    }
    data.matchmakingContextToken = this.matchmakingContextToken;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetGatheringRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.gatheringName = this.gatheringName;
    return data;
  }

}

export class CancelMatchmakingRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;
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
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
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

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
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
    data.gatheringName = this.gatheringName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CancelMatchmakingByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;
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
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
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

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
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
    data.gatheringName = this.gatheringName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteGatheringRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ギャザリング名 */
  public gatheringName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.gatheringName !== undefined) {
      this.gatheringName = data.gatheringName as string;
    } else {
      this.gatheringName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withGatheringName(gatheringName?: string): this {
    this.gatheringName = gatheringName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.gatheringName = this.gatheringName;
    return data;
  }

}
