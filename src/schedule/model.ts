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
    return 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * イベントマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class EventMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, eventName: string): string {
    return 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{eventName}', eventName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getEventNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** イベントマスター */
  public eventId?: string;
  /** イベントの種類名 */
  public name?: string;
  /** イベントマスターの説明 */
  public description?: string;
  /** イベントの種類のメタデータ */
  public metadata?: string;
  /** イベント期間の種類 */
  public scheduleType?: string;
  /** 繰り返しの種類 */
  public repeatType?: string;
  /** イベントの開始日時 */
  public absoluteBegin?: number;
  /** イベントの終了日時 */
  public absoluteEnd?: number;
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
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.eventId !== undefined) {
      this.eventId = data.eventId;
    } else {
      this.eventId = undefined;
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
    if (data && data.scheduleType !== undefined) {
      this.scheduleType = data.scheduleType;
    } else {
      this.scheduleType = undefined;
    }
    if (data && data.repeatType !== undefined) {
      this.repeatType = data.repeatType;
    } else {
      this.repeatType = undefined;
    }
    if (data && data.absoluteBegin !== undefined) {
      this.absoluteBegin = data.absoluteBegin;
    } else {
      this.absoluteBegin = 0;
    }
    if (data && data.absoluteEnd !== undefined) {
      this.absoluteEnd = data.absoluteEnd;
    } else {
      this.absoluteEnd = 0;
    }
    if (data && data.repeatBeginDayOfMonth !== undefined) {
      this.repeatBeginDayOfMonth = data.repeatBeginDayOfMonth;
    } else {
      this.repeatBeginDayOfMonth = 0;
    }
    if (data && data.repeatEndDayOfMonth !== undefined) {
      this.repeatEndDayOfMonth = data.repeatEndDayOfMonth;
    } else {
      this.repeatEndDayOfMonth = 0;
    }
    if (data && data.repeatBeginDayOfWeek !== undefined) {
      this.repeatBeginDayOfWeek = data.repeatBeginDayOfWeek;
    } else {
      this.repeatBeginDayOfWeek = undefined;
    }
    if (data && data.repeatEndDayOfWeek !== undefined) {
      this.repeatEndDayOfWeek = data.repeatEndDayOfWeek;
    } else {
      this.repeatEndDayOfWeek = undefined;
    }
    if (data && data.repeatBeginHour !== undefined) {
      this.repeatBeginHour = data.repeatBeginHour;
    } else {
      this.repeatBeginHour = 0;
    }
    if (data && data.repeatEndHour !== undefined) {
      this.repeatEndHour = data.repeatEndHour;
    } else {
      this.repeatEndHour = 0;
    }
    if (data && data.relativeTriggerName !== undefined) {
      this.relativeTriggerName = data.relativeTriggerName;
    } else {
      this.relativeTriggerName = undefined;
    }
    if (data && data.relativeDuration !== undefined) {
      this.relativeDuration = data.relativeDuration;
    } else {
      this.relativeDuration = 0;
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

  public withEventId(eventId?: string): this {
    this.eventId = eventId;
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

  public withScheduleType(scheduleType?: string): this {
    this.scheduleType = scheduleType;
    return this;
  }

  public withRepeatType(repeatType?: string): this {
    this.repeatType = repeatType;
    return this;
  }

  public withAbsoluteBegin(absoluteBegin?: number): this {
    this.absoluteBegin = absoluteBegin;
    return this;
  }

  public withAbsoluteEnd(absoluteEnd?: number): this {
    this.absoluteEnd = absoluteEnd;
    return this;
  }

  public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth?: number): this {
    this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
    return this;
  }

  public withRepeatEndDayOfMonth(repeatEndDayOfMonth?: number): this {
    this.repeatEndDayOfMonth = repeatEndDayOfMonth;
    return this;
  }

  public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek?: string): this {
    this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
    return this;
  }

  public withRepeatEndDayOfWeek(repeatEndDayOfWeek?: string): this {
    this.repeatEndDayOfWeek = repeatEndDayOfWeek;
    return this;
  }

  public withRepeatBeginHour(repeatBeginHour?: number): this {
    this.repeatBeginHour = repeatBeginHour;
    return this;
  }

  public withRepeatEndHour(repeatEndHour?: number): this {
    this.repeatEndHour = repeatEndHour;
    return this;
  }

  public withRelativeTriggerName(relativeTriggerName?: string): this {
    this.relativeTriggerName = relativeTriggerName;
    return this;
  }

  public withRelativeDuration(relativeDuration?: number): this {
    this.relativeDuration = relativeDuration;
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
    data.eventId = this.eventId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    data.scheduleType = this.scheduleType;
    data.repeatType = this.repeatType;
    data.absoluteBegin = this.absoluteBegin;
    data.absoluteEnd = this.absoluteEnd;
    data.repeatBeginDayOfMonth = this.repeatBeginDayOfMonth;
    data.repeatEndDayOfMonth = this.repeatEndDayOfMonth;
    data.repeatBeginDayOfWeek = this.repeatBeginDayOfWeek;
    data.repeatEndDayOfWeek = this.repeatEndDayOfWeek;
    data.repeatBeginHour = this.repeatBeginHour;
    data.repeatEndHour = this.repeatEndHour;
    data.relativeTriggerName = this.relativeTriggerName;
    data.relativeDuration = this.relativeDuration;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * トリガー
 *
 * @author Game Server Services, Inc.
 *
 */
export class Trigger implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, triggerName: string): string {
    return 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{triggerName}', triggerName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{triggerName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{triggerName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{triggerName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{triggerName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getTriggerNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{triggerName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** トリガー */
  public triggerId?: string;
  /** トリガーの名前 */
  public name?: string;
  /** ユーザーID */
  public userId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** トリガーの有効期限 */
  public expiresAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.triggerId !== undefined) {
      this.triggerId = data.triggerId;
    } else {
      this.triggerId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt;
    } else {
      this.expiresAt = 0;
    }
  }

  public withTriggerId(triggerId?: string): this {
    this.triggerId = triggerId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.triggerId = this.triggerId;
    data.name = this.name;
    data.userId = this.userId;
    data.createdAt = this.createdAt;
    data.expiresAt = this.expiresAt;
    return data;
  }

}


/**
 * イベント
 *
 * @author Game Server Services, Inc.
 *
 */
export class Event implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, eventName: string): string {
    return 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{eventName}', eventName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getEventNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** イベントマスター */
  public eventId?: string;
  /** イベントの種類名 */
  public name?: string;
  /** イベントの種類のメタデータ */
  public metadata?: string;
  /** イベント期間の種類 */
  public scheduleType?: string;
  /** 繰り返しの種類 */
  public repeatType?: string;
  /** イベントの開始日時 */
  public absoluteBegin?: number;
  /** イベントの終了日時 */
  public absoluteEnd?: number;
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
  /** イベントの開始トリガー */
  public relativeTriggerName?: string;
  /** イベントの開催期間(秒) */
  public relativeDuration?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.eventId !== undefined) {
      this.eventId = data.eventId;
    } else {
      this.eventId = undefined;
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
    if (data && data.scheduleType !== undefined) {
      this.scheduleType = data.scheduleType;
    } else {
      this.scheduleType = undefined;
    }
    if (data && data.repeatType !== undefined) {
      this.repeatType = data.repeatType;
    } else {
      this.repeatType = undefined;
    }
    if (data && data.absoluteBegin !== undefined) {
      this.absoluteBegin = data.absoluteBegin;
    } else {
      this.absoluteBegin = 0;
    }
    if (data && data.absoluteEnd !== undefined) {
      this.absoluteEnd = data.absoluteEnd;
    } else {
      this.absoluteEnd = 0;
    }
    if (data && data.repeatBeginDayOfMonth !== undefined) {
      this.repeatBeginDayOfMonth = data.repeatBeginDayOfMonth;
    } else {
      this.repeatBeginDayOfMonth = 0;
    }
    if (data && data.repeatEndDayOfMonth !== undefined) {
      this.repeatEndDayOfMonth = data.repeatEndDayOfMonth;
    } else {
      this.repeatEndDayOfMonth = 0;
    }
    if (data && data.repeatBeginDayOfWeek !== undefined) {
      this.repeatBeginDayOfWeek = data.repeatBeginDayOfWeek;
    } else {
      this.repeatBeginDayOfWeek = undefined;
    }
    if (data && data.repeatEndDayOfWeek !== undefined) {
      this.repeatEndDayOfWeek = data.repeatEndDayOfWeek;
    } else {
      this.repeatEndDayOfWeek = undefined;
    }
    if (data && data.repeatBeginHour !== undefined) {
      this.repeatBeginHour = data.repeatBeginHour;
    } else {
      this.repeatBeginHour = 0;
    }
    if (data && data.repeatEndHour !== undefined) {
      this.repeatEndHour = data.repeatEndHour;
    } else {
      this.repeatEndHour = 0;
    }
    if (data && data.relativeTriggerName !== undefined) {
      this.relativeTriggerName = data.relativeTriggerName;
    } else {
      this.relativeTriggerName = undefined;
    }
    if (data && data.relativeDuration !== undefined) {
      this.relativeDuration = data.relativeDuration;
    } else {
      this.relativeDuration = 0;
    }
  }

  public withEventId(eventId?: string): this {
    this.eventId = eventId;
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

  public withScheduleType(scheduleType?: string): this {
    this.scheduleType = scheduleType;
    return this;
  }

  public withRepeatType(repeatType?: string): this {
    this.repeatType = repeatType;
    return this;
  }

  public withAbsoluteBegin(absoluteBegin?: number): this {
    this.absoluteBegin = absoluteBegin;
    return this;
  }

  public withAbsoluteEnd(absoluteEnd?: number): this {
    this.absoluteEnd = absoluteEnd;
    return this;
  }

  public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth?: number): this {
    this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
    return this;
  }

  public withRepeatEndDayOfMonth(repeatEndDayOfMonth?: number): this {
    this.repeatEndDayOfMonth = repeatEndDayOfMonth;
    return this;
  }

  public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek?: string): this {
    this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
    return this;
  }

  public withRepeatEndDayOfWeek(repeatEndDayOfWeek?: string): this {
    this.repeatEndDayOfWeek = repeatEndDayOfWeek;
    return this;
  }

  public withRepeatBeginHour(repeatBeginHour?: number): this {
    this.repeatBeginHour = repeatBeginHour;
    return this;
  }

  public withRepeatEndHour(repeatEndHour?: number): this {
    this.repeatEndHour = repeatEndHour;
    return this;
  }

  public withRelativeTriggerName(relativeTriggerName?: string): this {
    this.relativeTriggerName = relativeTriggerName;
    return this;
  }

  public withRelativeDuration(relativeDuration?: number): this {
    this.relativeDuration = relativeDuration;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.eventId = this.eventId;
    data.name = this.name;
    data.metadata = this.metadata;
    data.scheduleType = this.scheduleType;
    data.repeatType = this.repeatType;
    data.absoluteBegin = this.absoluteBegin;
    data.absoluteEnd = this.absoluteEnd;
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


/**
 * 現在有効なイベントスケジュールマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentEventMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:schedule:{namespaceName}';
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
