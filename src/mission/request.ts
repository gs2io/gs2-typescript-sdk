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
  MissionGroupModel,
  ScriptSetting,
  Counter,
  GitHubCheckoutSetting,
  Complete,
  CounterScopeModel,
  ResponseCache,
  AcquireAction,
  CurrentMissionMaster,
  Config,
  MissionTaskModel,
  MissionTaskModelMaster,
  Namespace,
  MissionGroupModelMaster,
  LogSetting,
  CounterModelMaster,
  NotificationSetting,
  ScopedValue,
  CounterModel,
} from './model';

import { Gs2Request } from '@/gs2/core/model';

export class DescribeMissionGroupModelsRequest extends Gs2Request {
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

export class GetMissionGroupModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** グループ名 */
  public missionGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    return data;
  }

}

export class DescribeCountersRequest extends Gs2Request {
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

export class DescribeCountersByUserIdRequest extends Gs2Request {
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

export class IncreaseCounterByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 加算する値 */
  public value?: number;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
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

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.counterName = this.counterName;
    data.userId = this.userId;
    data.value = this.value;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetCounterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
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
    data.counterName = this.counterName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetCounterByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
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
    data.counterName = this.counterName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteCounterByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** カウンター名 */
  public counterName?: string;
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
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

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
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
    data.counterName = this.counterName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class IncreaseByStampSheetRequest extends Gs2Request {
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

export class DescribeCompletesRequest extends Gs2Request {
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

export class DescribeCompletesByUserIdRequest extends Gs2Request {
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

export class CompleteRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CompleteByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;
  /** ユーザーID */
  public userId?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
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
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    data.userId = this.userId;
    if (this.config) {
      data.config = this.config.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ReceiveByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetCompleteRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetCompleteByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteCompleteByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class ReceiveByStampTaskRequest extends Gs2Request {
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

export class GetCurrentMissionMasterRequest extends Gs2Request {
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

export class UpdateCurrentMissionMasterRequest extends Gs2Request {
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

export class UpdateCurrentMissionMasterFromGitHubRequest extends Gs2Request {
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

export class DescribeMissionTaskModelsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** グループ名 */
  public missionGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    return data;
  }

}

export class GetMissionTaskModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** グループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    return data;
  }

}

export class DescribeMissionTaskModelMastersRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
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

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
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
    data.missionGroupName = this.missionGroupName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateMissionTaskModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
    if (data && data.targetValue !== undefined) {
      this.targetValue = data.targetValue as number;
    } else {
      this.targetValue = undefined;
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
      this.challengePeriodEventId = data.challengePeriodEventId as string;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.premiseMissionTaskName !== undefined) {
      this.premiseMissionTaskName = data.premiseMissionTaskName as string;
    } else {
      this.premiseMissionTaskName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public withTargetValue(targetValue?: number): this {
    this.targetValue = targetValue as number;
    return this;
  }

  public withCompleteAcquireActions(completeAcquireActions?: AcquireAction[]): this {
    this.completeAcquireActions = completeAcquireActions as AcquireAction[];
    if (completeAcquireActions) {
      for (let i = 0; i < completeAcquireActions!.length; i++) {
        this.completeAcquireActions[i] = new AcquireAction(completeAcquireActions![i]);
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public withPremiseMissionTaskName(premiseMissionTaskName?: string): this {
    this.premiseMissionTaskName = premiseMissionTaskName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
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
    return data;
  }

}

export class GetMissionTaskModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    return data;
  }

}

export class UpdateMissionTaskModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
    if (data && data.targetValue !== undefined) {
      this.targetValue = data.targetValue as number;
    } else {
      this.targetValue = undefined;
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
      this.challengePeriodEventId = data.challengePeriodEventId as string;
    } else {
      this.challengePeriodEventId = undefined;
    }
    if (data && data.premiseMissionTaskName !== undefined) {
      this.premiseMissionTaskName = data.premiseMissionTaskName as string;
    } else {
      this.premiseMissionTaskName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public withTargetValue(targetValue?: number): this {
    this.targetValue = targetValue as number;
    return this;
  }

  public withCompleteAcquireActions(completeAcquireActions?: AcquireAction[]): this {
    this.completeAcquireActions = completeAcquireActions as AcquireAction[];
    if (completeAcquireActions) {
      for (let i = 0; i < completeAcquireActions!.length; i++) {
        this.completeAcquireActions[i] = new AcquireAction(completeAcquireActions![i]);
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public withPremiseMissionTaskName(premiseMissionTaskName?: string): this {
    this.premiseMissionTaskName = premiseMissionTaskName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    data.metadata = this.metadata;
    data.description = this.description;
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

export class DeleteMissionTaskModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
  /** タスク名 */
  public missionTaskName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.missionTaskName !== undefined) {
      this.missionTaskName = data.missionTaskName as string;
    } else {
      this.missionTaskName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMissionTaskName(missionTaskName?: string): this {
    this.missionTaskName = missionTaskName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    data.missionTaskName = this.missionTaskName;
    return data;
  }

}

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
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
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
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMissionCompleteScript(missionCompleteScript?: ScriptSetting): this {
    this.missionCompleteScript = missionCompleteScript as ScriptSetting;
    return this;
  }

  public withCounterIncrementScript(counterIncrementScript?: ScriptSetting): this {
    this.counterIncrementScript = counterIncrementScript as ScriptSetting;
    return this;
  }

  public withReceiveRewardsScript(receiveRewardsScript?: ScriptSetting): this {
    this.receiveRewardsScript = receiveRewardsScript as ScriptSetting;
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
      this.queueNamespaceId = data.queueNamespaceId as string;
    } else {
      this.queueNamespaceId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
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
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMissionCompleteScript(missionCompleteScript?: ScriptSetting): this {
    this.missionCompleteScript = missionCompleteScript as ScriptSetting;
    return this;
  }

  public withCounterIncrementScript(counterIncrementScript?: ScriptSetting): this {
    this.counterIncrementScript = counterIncrementScript as ScriptSetting;
    return this;
  }

  public withReceiveRewardsScript(receiveRewardsScript?: ScriptSetting): this {
    this.receiveRewardsScript = receiveRewardsScript as ScriptSetting;
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

export class DescribeMissionGroupModelMastersRequest extends Gs2Request {
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

export class CreateMissionGroupModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
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
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType as string;
    } else {
      this.resetType = undefined;
    }
    if (data && data.resetDayOfMonth !== undefined) {
      this.resetDayOfMonth = data.resetDayOfMonth as number;
    } else {
      this.resetDayOfMonth = undefined;
    }
    if (data && data.resetDayOfWeek !== undefined) {
      this.resetDayOfWeek = data.resetDayOfWeek as string;
    } else {
      this.resetDayOfWeek = undefined;
    }
    if (data && data.resetHour !== undefined) {
      this.resetHour = data.resetHour as number;
    } else {
      this.resetHour = undefined;
    }
    if (data && data.completeNotificationNamespaceId !== undefined) {
      this.completeNotificationNamespaceId = data.completeNotificationNamespaceId as string;
    } else {
      this.completeNotificationNamespaceId = undefined;
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

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withResetType(resetType?: string): this {
    this.resetType = resetType as string;
    return this;
  }

  public withResetDayOfMonth(resetDayOfMonth?: number): this {
    this.resetDayOfMonth = resetDayOfMonth as number;
    return this;
  }

  public withResetDayOfWeek(resetDayOfWeek?: string): this {
    this.resetDayOfWeek = resetDayOfWeek as string;
    return this;
  }

  public withResetHour(resetHour?: number): this {
    this.resetHour = resetHour as number;
    return this;
  }

  public withCompleteNotificationNamespaceId(completeNotificationNamespaceId?: string): this {
    this.completeNotificationNamespaceId = completeNotificationNamespaceId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.metadata = this.metadata;
    data.description = this.description;
    data.resetType = this.resetType;
    data.resetDayOfMonth = this.resetDayOfMonth;
    data.resetDayOfWeek = this.resetDayOfWeek;
    data.resetHour = this.resetHour;
    data.completeNotificationNamespaceId = this.completeNotificationNamespaceId;
    return data;
  }

}

export class GetMissionGroupModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    return data;
  }

}

export class UpdateMissionGroupModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.resetType !== undefined) {
      this.resetType = data.resetType as string;
    } else {
      this.resetType = undefined;
    }
    if (data && data.resetDayOfMonth !== undefined) {
      this.resetDayOfMonth = data.resetDayOfMonth as number;
    } else {
      this.resetDayOfMonth = undefined;
    }
    if (data && data.resetDayOfWeek !== undefined) {
      this.resetDayOfWeek = data.resetDayOfWeek as string;
    } else {
      this.resetDayOfWeek = undefined;
    }
    if (data && data.resetHour !== undefined) {
      this.resetHour = data.resetHour as number;
    } else {
      this.resetHour = undefined;
    }
    if (data && data.completeNotificationNamespaceId !== undefined) {
      this.completeNotificationNamespaceId = data.completeNotificationNamespaceId as string;
    } else {
      this.completeNotificationNamespaceId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withResetType(resetType?: string): this {
    this.resetType = resetType as string;
    return this;
  }

  public withResetDayOfMonth(resetDayOfMonth?: number): this {
    this.resetDayOfMonth = resetDayOfMonth as number;
    return this;
  }

  public withResetDayOfWeek(resetDayOfWeek?: string): this {
    this.resetDayOfWeek = resetDayOfWeek as string;
    return this;
  }

  public withResetHour(resetHour?: number): this {
    this.resetHour = resetHour as number;
    return this;
  }

  public withCompleteNotificationNamespaceId(completeNotificationNamespaceId?: string): this {
    this.completeNotificationNamespaceId = completeNotificationNamespaceId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    data.metadata = this.metadata;
    data.description = this.description;
    data.resetType = this.resetType;
    data.resetDayOfMonth = this.resetDayOfMonth;
    data.resetDayOfWeek = this.resetDayOfWeek;
    data.resetHour = this.resetHour;
    data.completeNotificationNamespaceId = this.completeNotificationNamespaceId;
    return data;
  }

}

export class DeleteMissionGroupModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ミッショングループ名 */
  public missionGroupName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.missionGroupName !== undefined) {
      this.missionGroupName = data.missionGroupName as string;
    } else {
      this.missionGroupName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withMissionGroupName(missionGroupName?: string): this {
    this.missionGroupName = missionGroupName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.missionGroupName = this.missionGroupName;
    return data;
  }

}

export class DescribeCounterModelMastersRequest extends Gs2Request {
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

export class CreateCounterModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
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
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
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

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withScopes(scopes?: CounterScopeModel[]): this {
    this.scopes = scopes as CounterScopeModel[];
    if (scopes) {
      for (let i = 0; i < scopes!.length; i++) {
        this.scopes[i] = new CounterScopeModel(scopes![i]);
      }
    }
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
    data.metadata = this.metadata;
    data.description = this.description;
    if (this.scopes) {
      data.scopes = this.scopes.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}

export class GetCounterModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.counterName = this.counterName;
    return data;
  }

}

export class UpdateCounterModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;
  /** メタデータ */
  public metadata?: string;
  /** カウンターの種類マスターの説明 */
  public description?: string;
  /** カウンターのリセットタイミング */
  public scopes?: CounterScopeModel[];
  /** カウントアップ可能な期間を指定するイベントマスター のGRN */
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
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
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
      this.challengePeriodEventId = data.challengePeriodEventId as string;
    } else {
      this.challengePeriodEventId = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withScopes(scopes?: CounterScopeModel[]): this {
    this.scopes = scopes as CounterScopeModel[];
    if (scopes) {
      for (let i = 0; i < scopes!.length; i++) {
        this.scopes[i] = new CounterScopeModel(scopes![i]);
      }
    }
    return this;
  }

  public withChallengePeriodEventId(challengePeriodEventId?: string): this {
    this.challengePeriodEventId = challengePeriodEventId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.counterName = this.counterName;
    data.metadata = this.metadata;
    data.description = this.description;
    if (this.scopes) {
      data.scopes = this.scopes.map((item) => item.toDict());
    }
    data.challengePeriodEventId = this.challengePeriodEventId;
    return data;
  }

}

export class DeleteCounterModelMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.counterName = this.counterName;
    return data;
  }

}

export class DescribeCounterModelsRequest extends Gs2Request {
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

export class GetCounterModelRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** カウンター名 */
  public counterName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.counterName !== undefined) {
      this.counterName = data.counterName as string;
    } else {
      this.counterName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withCounterName(counterName?: string): this {
    this.counterName = counterName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.counterName = this.counterName;
    return data;
  }

}
