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
  EventMaster,
  Trigger,
  Event,
  CurrentEventMaster,
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
  /** ネームスペースの説明 */
  public description?: string;
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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
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

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.description = this.description;
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

export class DescribeEventMastersRequest extends Gs2Request {
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

export class CreateEventMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public name?: string;
  /** イベントマスターの説明 */
  public description?: string;
  /** イベントの種類のメタデータ */
  public metadata?: string;
  /** イベント期間の種類 */
  public scheduleType?: string;
  /** イベントの開始日時 */
  public absoluteBegin?: number;
  /** イベントの終了日時 */
  public absoluteEnd?: number;
  /** 繰り返しの種類 */
  public repeatType?: string;
  /** イベントの繰り返し開始日 */
  public repeatBeginDayOfMonth?: number;
  /** イベントの繰り返し終了日 */
  public repeatEndDayOfMonth?: number;
  /** イベントの繰り返し開始曜日 */
  public repeatBeginDayOfWeek?: string;
  /** イベントの繰り返し終了曜日 */
  public repeatEndDayOfWeek?: string;
  /** イベントの繰り返し開始時間 */
  public repeatBeginHour?: number;
  /** イベントの繰り返し終了時間 */
  public repeatEndHour?: number;
  /** イベントの開始トリガー名 */
  public relativeTriggerName?: string;
  /** イベントの開催期間(秒) */
  public relativeDuration?: number;

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
    if (data && data.scheduleType !== undefined) {
      this.scheduleType = data.scheduleType as string;
    } else {
      this.scheduleType = undefined;
    }
    if (data && data.absoluteBegin !== undefined) {
      this.absoluteBegin = data.absoluteBegin as number;
    } else {
      this.absoluteBegin = undefined;
    }
    if (data && data.absoluteEnd !== undefined) {
      this.absoluteEnd = data.absoluteEnd as number;
    } else {
      this.absoluteEnd = undefined;
    }
    if (data && data.repeatType !== undefined) {
      this.repeatType = data.repeatType as string;
    } else {
      this.repeatType = undefined;
    }
    if (data && data.repeatBeginDayOfMonth !== undefined) {
      this.repeatBeginDayOfMonth = data.repeatBeginDayOfMonth as number;
    } else {
      this.repeatBeginDayOfMonth = undefined;
    }
    if (data && data.repeatEndDayOfMonth !== undefined) {
      this.repeatEndDayOfMonth = data.repeatEndDayOfMonth as number;
    } else {
      this.repeatEndDayOfMonth = undefined;
    }
    if (data && data.repeatBeginDayOfWeek !== undefined) {
      this.repeatBeginDayOfWeek = data.repeatBeginDayOfWeek as string;
    } else {
      this.repeatBeginDayOfWeek = undefined;
    }
    if (data && data.repeatEndDayOfWeek !== undefined) {
      this.repeatEndDayOfWeek = data.repeatEndDayOfWeek as string;
    } else {
      this.repeatEndDayOfWeek = undefined;
    }
    if (data && data.repeatBeginHour !== undefined) {
      this.repeatBeginHour = data.repeatBeginHour as number;
    } else {
      this.repeatBeginHour = undefined;
    }
    if (data && data.repeatEndHour !== undefined) {
      this.repeatEndHour = data.repeatEndHour as number;
    } else {
      this.repeatEndHour = undefined;
    }
    if (data && data.relativeTriggerName !== undefined) {
      this.relativeTriggerName = data.relativeTriggerName as string;
    } else {
      this.relativeTriggerName = undefined;
    }
    if (data && data.relativeDuration !== undefined) {
      this.relativeDuration = data.relativeDuration as number;
    } else {
      this.relativeDuration = undefined;
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

  public withScheduleType(scheduleType?: string): this {
    this.scheduleType = scheduleType as string;
    return this;
  }

  public withAbsoluteBegin(absoluteBegin?: number): this {
    this.absoluteBegin = absoluteBegin as number;
    return this;
  }

  public withAbsoluteEnd(absoluteEnd?: number): this {
    this.absoluteEnd = absoluteEnd as number;
    return this;
  }

  public withRepeatType(repeatType?: string): this {
    this.repeatType = repeatType as string;
    return this;
  }

  public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth?: number): this {
    this.repeatBeginDayOfMonth = repeatBeginDayOfMonth as number;
    return this;
  }

  public withRepeatEndDayOfMonth(repeatEndDayOfMonth?: number): this {
    this.repeatEndDayOfMonth = repeatEndDayOfMonth as number;
    return this;
  }

  public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek?: string): this {
    this.repeatBeginDayOfWeek = repeatBeginDayOfWeek as string;
    return this;
  }

  public withRepeatEndDayOfWeek(repeatEndDayOfWeek?: string): this {
    this.repeatEndDayOfWeek = repeatEndDayOfWeek as string;
    return this;
  }

  public withRepeatBeginHour(repeatBeginHour?: number): this {
    this.repeatBeginHour = repeatBeginHour as number;
    return this;
  }

  public withRepeatEndHour(repeatEndHour?: number): this {
    this.repeatEndHour = repeatEndHour as number;
    return this;
  }

  public withRelativeTriggerName(relativeTriggerName?: string): this {
    this.relativeTriggerName = relativeTriggerName as string;
    return this;
  }

  public withRelativeDuration(relativeDuration?: number): this {
    this.relativeDuration = relativeDuration as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.scheduleType = this.scheduleType;
    data.absoluteBegin = this.absoluteBegin;
    data.absoluteEnd = this.absoluteEnd;
    data.repeatType = this.repeatType;
    data.repeatBeginDayOfMonth = this.repeatBeginDayOfMonth;
    data.repeatEndDayOfMonth = this.repeatEndDayOfMonth;
    data.repeatBeginDayOfWeek = this.repeatBeginDayOfWeek;
    data.repeatEndDayOfWeek = this.repeatEndDayOfWeek;
    data.repeatBeginHour = this.repeatBeginHour;
    data.repeatEndHour = this.repeatEndHour;
    data.relativeTriggerName = this.relativeTriggerName;
    data.relativeDuration = this.relativeDuration;
    return data;
  }

}

export class GetEventMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.eventName = this.eventName;
    return data;
  }

}

export class UpdateEventMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;
  /** イベントマスターの説明 */
  public description?: string;
  /** イベントの種類のメタデータ */
  public metadata?: string;
  /** イベント期間の種類 */
  public scheduleType?: string;
  /** イベントの開始日時 */
  public absoluteBegin?: number;
  /** イベントの終了日時 */
  public absoluteEnd?: number;
  /** 繰り返しの種類 */
  public repeatType?: string;
  /** イベントの繰り返し開始日 */
  public repeatBeginDayOfMonth?: number;
  /** イベントの繰り返し終了日 */
  public repeatEndDayOfMonth?: number;
  /** イベントの繰り返し開始曜日 */
  public repeatBeginDayOfWeek?: string;
  /** イベントの繰り返し終了曜日 */
  public repeatEndDayOfWeek?: string;
  /** イベントの繰り返し開始時間 */
  public repeatBeginHour?: number;
  /** イベントの繰り返し終了時間 */
  public repeatEndHour?: number;
  /** イベントの開始トリガー名 */
  public relativeTriggerName?: string;
  /** イベントの開催期間(秒) */
  public relativeDuration?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
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
    if (data && data.scheduleType !== undefined) {
      this.scheduleType = data.scheduleType as string;
    } else {
      this.scheduleType = undefined;
    }
    if (data && data.absoluteBegin !== undefined) {
      this.absoluteBegin = data.absoluteBegin as number;
    } else {
      this.absoluteBegin = undefined;
    }
    if (data && data.absoluteEnd !== undefined) {
      this.absoluteEnd = data.absoluteEnd as number;
    } else {
      this.absoluteEnd = undefined;
    }
    if (data && data.repeatType !== undefined) {
      this.repeatType = data.repeatType as string;
    } else {
      this.repeatType = undefined;
    }
    if (data && data.repeatBeginDayOfMonth !== undefined) {
      this.repeatBeginDayOfMonth = data.repeatBeginDayOfMonth as number;
    } else {
      this.repeatBeginDayOfMonth = undefined;
    }
    if (data && data.repeatEndDayOfMonth !== undefined) {
      this.repeatEndDayOfMonth = data.repeatEndDayOfMonth as number;
    } else {
      this.repeatEndDayOfMonth = undefined;
    }
    if (data && data.repeatBeginDayOfWeek !== undefined) {
      this.repeatBeginDayOfWeek = data.repeatBeginDayOfWeek as string;
    } else {
      this.repeatBeginDayOfWeek = undefined;
    }
    if (data && data.repeatEndDayOfWeek !== undefined) {
      this.repeatEndDayOfWeek = data.repeatEndDayOfWeek as string;
    } else {
      this.repeatEndDayOfWeek = undefined;
    }
    if (data && data.repeatBeginHour !== undefined) {
      this.repeatBeginHour = data.repeatBeginHour as number;
    } else {
      this.repeatBeginHour = undefined;
    }
    if (data && data.repeatEndHour !== undefined) {
      this.repeatEndHour = data.repeatEndHour as number;
    } else {
      this.repeatEndHour = undefined;
    }
    if (data && data.relativeTriggerName !== undefined) {
      this.relativeTriggerName = data.relativeTriggerName as string;
    } else {
      this.relativeTriggerName = undefined;
    }
    if (data && data.relativeDuration !== undefined) {
      this.relativeDuration = data.relativeDuration as number;
    } else {
      this.relativeDuration = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
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

  public withScheduleType(scheduleType?: string): this {
    this.scheduleType = scheduleType as string;
    return this;
  }

  public withAbsoluteBegin(absoluteBegin?: number): this {
    this.absoluteBegin = absoluteBegin as number;
    return this;
  }

  public withAbsoluteEnd(absoluteEnd?: number): this {
    this.absoluteEnd = absoluteEnd as number;
    return this;
  }

  public withRepeatType(repeatType?: string): this {
    this.repeatType = repeatType as string;
    return this;
  }

  public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth?: number): this {
    this.repeatBeginDayOfMonth = repeatBeginDayOfMonth as number;
    return this;
  }

  public withRepeatEndDayOfMonth(repeatEndDayOfMonth?: number): this {
    this.repeatEndDayOfMonth = repeatEndDayOfMonth as number;
    return this;
  }

  public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek?: string): this {
    this.repeatBeginDayOfWeek = repeatBeginDayOfWeek as string;
    return this;
  }

  public withRepeatEndDayOfWeek(repeatEndDayOfWeek?: string): this {
    this.repeatEndDayOfWeek = repeatEndDayOfWeek as string;
    return this;
  }

  public withRepeatBeginHour(repeatBeginHour?: number): this {
    this.repeatBeginHour = repeatBeginHour as number;
    return this;
  }

  public withRepeatEndHour(repeatEndHour?: number): this {
    this.repeatEndHour = repeatEndHour as number;
    return this;
  }

  public withRelativeTriggerName(relativeTriggerName?: string): this {
    this.relativeTriggerName = relativeTriggerName as string;
    return this;
  }

  public withRelativeDuration(relativeDuration?: number): this {
    this.relativeDuration = relativeDuration as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.eventName = this.eventName;
    data.description = this.description;
    data.metadata = this.metadata;
    data.scheduleType = this.scheduleType;
    data.absoluteBegin = this.absoluteBegin;
    data.absoluteEnd = this.absoluteEnd;
    data.repeatType = this.repeatType;
    data.repeatBeginDayOfMonth = this.repeatBeginDayOfMonth;
    data.repeatEndDayOfMonth = this.repeatEndDayOfMonth;
    data.repeatBeginDayOfWeek = this.repeatBeginDayOfWeek;
    data.repeatEndDayOfWeek = this.repeatEndDayOfWeek;
    data.repeatBeginHour = this.repeatBeginHour;
    data.repeatEndHour = this.repeatEndHour;
    data.relativeTriggerName = this.relativeTriggerName;
    data.relativeDuration = this.relativeDuration;
    return data;
  }

}

export class DeleteEventMasterRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.eventName = this.eventName;
    return data;
  }

}

export class DescribeTriggersRequest extends Gs2Request {
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

export class DescribeTriggersByUserIdRequest extends Gs2Request {
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

export class GetTriggerRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** トリガーの名前 */
  public triggerName?: string;
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
    if (data && data.triggerName !== undefined) {
      this.triggerName = data.triggerName as string;
    } else {
      this.triggerName = undefined;
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

  public withTriggerName(triggerName?: string): this {
    this.triggerName = triggerName as string;
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
    data.triggerName = this.triggerName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetTriggerByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** トリガーの名前 */
  public triggerName?: string;
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
    if (data && data.triggerName !== undefined) {
      this.triggerName = data.triggerName as string;
    } else {
      this.triggerName = undefined;
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

  public withTriggerName(triggerName?: string): this {
    this.triggerName = triggerName as string;
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
    data.triggerName = this.triggerName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class TriggerByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** トリガーの名前 */
  public triggerName?: string;
  /** ユーザーID */
  public userId?: string;
  /** トリガーの引き方の方針 */
  public triggerStrategy?: string;
  /** トリガーの有効期限(秒) */
  public ttl?: number;
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
    if (data && data.triggerName !== undefined) {
      this.triggerName = data.triggerName as string;
    } else {
      this.triggerName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.triggerStrategy !== undefined) {
      this.triggerStrategy = data.triggerStrategy as string;
    } else {
      this.triggerStrategy = undefined;
    }
    if (data && data.ttl !== undefined) {
      this.ttl = data.ttl as number;
    } else {
      this.ttl = undefined;
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

  public withTriggerName(triggerName?: string): this {
    this.triggerName = triggerName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTriggerStrategy(triggerStrategy?: string): this {
    this.triggerStrategy = triggerStrategy as string;
    return this;
  }

  public withTtl(ttl?: number): this {
    this.ttl = ttl as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.triggerName = this.triggerName;
    data.userId = this.userId;
    data.triggerStrategy = this.triggerStrategy;
    data.ttl = this.ttl;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteTriggerRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** トリガーの名前 */
  public triggerName?: string;
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
    if (data && data.triggerName !== undefined) {
      this.triggerName = data.triggerName as string;
    } else {
      this.triggerName = undefined;
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

  public withTriggerName(triggerName?: string): this {
    this.triggerName = triggerName as string;
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
    data.triggerName = this.triggerName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteTriggerByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** トリガーの名前 */
  public triggerName?: string;
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
    if (data && data.triggerName !== undefined) {
      this.triggerName = data.triggerName as string;
    } else {
      this.triggerName = undefined;
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

  public withTriggerName(triggerName?: string): this {
    this.triggerName = triggerName as string;
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
    data.triggerName = this.triggerName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeEventsRequest extends Gs2Request {
  /** ネームスペース名 */
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

export class DescribeEventsByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
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

export class DescribeRawEventsRequest extends Gs2Request {
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

export class GetEventRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;
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
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
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

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
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
    data.eventName = this.eventName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetEventByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;
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
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
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

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
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
    data.eventName = this.eventName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetRawEventRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** イベントの種類名 */
  public eventName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.eventName = this.eventName;
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

export class GetCurrentEventMasterRequest extends Gs2Request {
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

export class UpdateCurrentEventMasterRequest extends Gs2Request {
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

export class UpdateCurrentEventMasterFromGitHubRequest extends Gs2Request {
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
