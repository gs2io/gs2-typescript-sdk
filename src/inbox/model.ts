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
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
  /** 説明文 */
  public description?: string;
  /** 開封したメッセージを自動的に削除するか */
  public isAutomaticDeletingEnabled?: boolean;
  /** メッセージ受信したときに実行するスクリプト */
  public receiveMessageScript?: ScriptSetting;
  /** メッセージ開封したときに実行するスクリプト */
  public readMessageScript?: ScriptSetting;
  /** メッセージ削除したときに実行するスクリプト */
  public deleteMessageScript?: ScriptSetting;
  /** 報酬付与処理をジョブとして追加するキューネームスペース のGRN */
  public queueNamespaceId?: string;
  /** 報酬付与処理のスタンプシートで使用する暗号鍵GRN */
  public keyId?: string;
  /** メッセージを受信したときのプッシュ通知 */
  public receiveNotification?: NotificationSetting;
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
    if (data && data.isAutomaticDeletingEnabled !== undefined) {
      this.isAutomaticDeletingEnabled = data.isAutomaticDeletingEnabled;
    } else {
      this.isAutomaticDeletingEnabled = false;
    }
    if (data && data.receiveMessageScript !== undefined && Object.keys(data.receiveMessageScript).length > 0) {
      this.receiveMessageScript = new ScriptSetting(data.receiveMessageScript);
    } else {
      this.receiveMessageScript = undefined;
    }
    if (data && data.readMessageScript !== undefined && Object.keys(data.readMessageScript).length > 0) {
      this.readMessageScript = new ScriptSetting(data.readMessageScript);
    } else {
      this.readMessageScript = undefined;
    }
    if (data && data.deleteMessageScript !== undefined && Object.keys(data.deleteMessageScript).length > 0) {
      this.deleteMessageScript = new ScriptSetting(data.deleteMessageScript);
    } else {
      this.deleteMessageScript = undefined;
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
    if (data && data.receiveNotification !== undefined && Object.keys(data.receiveNotification).length > 0) {
      this.receiveNotification = new NotificationSetting(data.receiveNotification);
    } else {
      this.receiveNotification = undefined;
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

  public withIsAutomaticDeletingEnabled(isAutomaticDeletingEnabled?: boolean): this {
    this.isAutomaticDeletingEnabled = isAutomaticDeletingEnabled;
    return this;
  }

  public withReceiveMessageScript(receiveMessageScript?: ScriptSetting): this {
    this.receiveMessageScript = receiveMessageScript;
    return this;
  }

  public withReadMessageScript(readMessageScript?: ScriptSetting): this {
    this.readMessageScript = readMessageScript;
    return this;
  }

  public withDeleteMessageScript(deleteMessageScript?: ScriptSetting): this {
    this.deleteMessageScript = deleteMessageScript;
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

  public withReceiveNotification(receiveNotification?: NotificationSetting): this {
    this.receiveNotification = receiveNotification;
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
    data.isAutomaticDeletingEnabled = this.isAutomaticDeletingEnabled;
    if (this.receiveMessageScript) {
      data.receiveMessageScript = this.receiveMessageScript.toDict();
    }
    if (this.readMessageScript) {
      data.readMessageScript = this.readMessageScript.toDict();
    }
    if (this.deleteMessageScript) {
      data.deleteMessageScript = this.deleteMessageScript.toDict();
    }
    data.queueNamespaceId = this.queueNamespaceId;
    data.keyId = this.keyId;
    if (this.receiveNotification) {
      data.receiveNotification = this.receiveNotification.toDict();
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
 * メッセージ
 *
 * @author Game Server Services, Inc.
 *
 */
export class Message implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, messageName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{messageName}', messageName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMessageNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** メッセージ */
  public messageId?: string;
  /** メッセージID */
  public name?: string;
  /** ユーザーID */
  public userId?: string;
  /** メッセージの内容に相当するメタデータ */
  public metadata?: string;
  /** 既読状態 */
  public isRead?: boolean;
  /** 開封時に実行する入手アクション */
  public readAcquireActions?: AcquireAction[];
  /** 作成日時 */
  public receivedAt?: number;
  /** 最終更新日時 */
  public readAt?: number;
  /** メッセージの有効期限 */
  public expiresAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.messageId !== undefined) {
      this.messageId = data.messageId;
    } else {
      this.messageId = undefined;
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
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.isRead !== undefined) {
      this.isRead = data.isRead;
    } else {
      this.isRead = false;
    }
    if (data && data.readAcquireActions !== undefined) {
      this.readAcquireActions = data.readAcquireActions as AcquireAction[];
      for (let i = 0; i < data.readAcquireActions.length; i++) {
            this.readAcquireActions[i] = new AcquireAction(data.readAcquireActions[i]);
      }
    } else {
      this.readAcquireActions = undefined;
    }
    if (data && data.receivedAt !== undefined) {
      this.receivedAt = data.receivedAt;
    } else {
      this.receivedAt = 0;
    }
    if (data && data.readAt !== undefined) {
      this.readAt = data.readAt;
    } else {
      this.readAt = 0;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt;
    } else {
      this.expiresAt = 0;
    }
  }

  public withMessageId(messageId?: string): this {
    this.messageId = messageId;
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

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withIsRead(isRead?: boolean): this {
    this.isRead = isRead;
    return this;
  }

  public withReadAcquireActions(readAcquireActions?: AcquireAction[]): this {
    this.readAcquireActions = readAcquireActions as AcquireAction[];
    if (readAcquireActions) {
      for (let i = 0; i < readAcquireActions!.length; i++) {
          this.readAcquireActions[i] = readAcquireActions![i];
      }
    }
    return this;
  }

  public withReceivedAt(receivedAt?: number): this {
    this.receivedAt = receivedAt;
    return this;
  }

  public withReadAt(readAt?: number): this {
    this.readAt = readAt;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.messageId = this.messageId;
    data.name = this.name;
    data.userId = this.userId;
    data.metadata = this.metadata;
    data.isRead = this.isRead;
    if (this.readAcquireActions) {
      data.readAcquireActions = this.readAcquireActions.map((item) => item.toDict());
    }
    data.receivedAt = this.receivedAt;
    data.readAt = this.readAt;
    data.expiresAt = this.expiresAt;
    return data;
  }

}


/**
 * 現在有効なグローバルメッセージ設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentMessageMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}';
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
 * 全ユーザに向けたメッセージ
 *
 * @author Game Server Services, Inc.
 *
 */
export class GlobalMessageMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, globalMessageName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{globalMessageName}', globalMessageName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getGlobalMessageNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 全ユーザに向けたメッセージ */
  public globalMessageId?: string;
  /** 全ユーザに向けたメッセージ名 */
  public name?: string;
  /** 全ユーザに向けたメッセージの内容に相当するメタデータ */
  public metadata?: string;
  /** 開封時に実行する入手アクション */
  public readAcquireActions?: AcquireAction[];
  /** メッセージを受信したあとメッセージが削除されるまでの期間 */
  public expiresTimeSpan?: TimeSpan;
  /** 作成日時 */
  public createdAt?: number;
  /** 全ユーザに向けたメッセージの受信期限 */
  public expiresAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.globalMessageId !== undefined) {
      this.globalMessageId = data.globalMessageId;
    } else {
      this.globalMessageId = undefined;
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
    if (data && data.readAcquireActions !== undefined) {
      this.readAcquireActions = data.readAcquireActions as AcquireAction[];
      for (let i = 0; i < data.readAcquireActions.length; i++) {
            this.readAcquireActions[i] = new AcquireAction(data.readAcquireActions[i]);
      }
    } else {
      this.readAcquireActions = undefined;
    }
    if (data && data.expiresTimeSpan !== undefined && Object.keys(data.expiresTimeSpan).length > 0) {
      this.expiresTimeSpan = new TimeSpan(data.expiresTimeSpan);
    } else {
      this.expiresTimeSpan = undefined;
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

  public withGlobalMessageId(globalMessageId?: string): this {
    this.globalMessageId = globalMessageId;
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

  public withReadAcquireActions(readAcquireActions?: AcquireAction[]): this {
    this.readAcquireActions = readAcquireActions as AcquireAction[];
    if (readAcquireActions) {
      for (let i = 0; i < readAcquireActions!.length; i++) {
          this.readAcquireActions[i] = readAcquireActions![i];
      }
    }
    return this;
  }

  public withExpiresTimeSpan(expiresTimeSpan?: TimeSpan): this {
    this.expiresTimeSpan = expiresTimeSpan;
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
    data.globalMessageId = this.globalMessageId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.readAcquireActions) {
      data.readAcquireActions = this.readAcquireActions.map((item) => item.toDict());
    }
    if (this.expiresTimeSpan) {
      data.expiresTimeSpan = this.expiresTimeSpan.toDict();
    }
    data.createdAt = this.createdAt;
    data.expiresAt = this.expiresAt;
    return data;
  }

}


/**
 * 全ユーザに向けたメッセージ
 *
 * @author Game Server Services, Inc.
 *
 */
export class GlobalMessage implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, globalMessageName: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{globalMessageName}', globalMessageName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getGlobalMessageNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{globalMessageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 全ユーザに向けたメッセージ */
  public globalMessageId?: string;
  /** 全ユーザに向けたメッセージ名 */
  public name?: string;
  /** 全ユーザに向けたメッセージの内容に相当するメタデータ */
  public metadata?: string;
  /** 開封時に実行する入手アクション */
  public readAcquireActions?: AcquireAction[];
  /** メッセージを受信したあとメッセージが削除されるまでの期間 */
  public expiresTimeSpan?: TimeSpan;
  /** 全ユーザに向けたメッセージの有効期限 */
  public expiresAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.globalMessageId !== undefined) {
      this.globalMessageId = data.globalMessageId;
    } else {
      this.globalMessageId = undefined;
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
    if (data && data.readAcquireActions !== undefined) {
      this.readAcquireActions = data.readAcquireActions as AcquireAction[];
      for (let i = 0; i < data.readAcquireActions.length; i++) {
            this.readAcquireActions[i] = new AcquireAction(data.readAcquireActions[i]);
      }
    } else {
      this.readAcquireActions = undefined;
    }
    if (data && data.expiresTimeSpan !== undefined && Object.keys(data.expiresTimeSpan).length > 0) {
      this.expiresTimeSpan = new TimeSpan(data.expiresTimeSpan);
    } else {
      this.expiresTimeSpan = undefined;
    }
    if (data && data.expiresAt !== undefined) {
      this.expiresAt = data.expiresAt;
    } else {
      this.expiresAt = 0;
    }
  }

  public withGlobalMessageId(globalMessageId?: string): this {
    this.globalMessageId = globalMessageId;
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

  public withReadAcquireActions(readAcquireActions?: AcquireAction[]): this {
    this.readAcquireActions = readAcquireActions as AcquireAction[];
    if (readAcquireActions) {
      for (let i = 0; i < readAcquireActions!.length; i++) {
          this.readAcquireActions[i] = readAcquireActions![i];
      }
    }
    return this;
  }

  public withExpiresTimeSpan(expiresTimeSpan?: TimeSpan): this {
    this.expiresTimeSpan = expiresTimeSpan;
    return this;
  }

  public withExpiresAt(expiresAt?: number): this {
    this.expiresAt = expiresAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.globalMessageId = this.globalMessageId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.readAcquireActions) {
      data.readAcquireActions = this.readAcquireActions.map((item) => item.toDict());
    }
    if (this.expiresTimeSpan) {
      data.expiresTimeSpan = this.expiresTimeSpan.toDict();
    }
    data.expiresAt = this.expiresAt;
    return data;
  }

}


/**
 * 受信済みグローバルメッセージ名
 *
 * @author Game Server Services, Inc.
 *
 */
export class Received implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:received'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:received';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:received';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:received';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:received';
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
  /** 受信済みグローバルメッセージ名 */
  public receivedId?: string;
  /** ユーザーID */
  public userId?: string;
  /** 受信したグローバルメッセージ名 */
  public receivedGlobalMessageNames?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.receivedId !== undefined) {
      this.receivedId = data.receivedId;
    } else {
      this.receivedId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.receivedGlobalMessageNames !== undefined) {
      this.receivedGlobalMessageNames = data.receivedGlobalMessageNames as string[];
      for (let i = 0; i < data.receivedGlobalMessageNames.length; i++) {
            this.receivedGlobalMessageNames[i] = data.receivedGlobalMessageNames[i];
      }
    } else {
      this.receivedGlobalMessageNames = undefined;
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

  public withReceivedId(receivedId?: string): this {
    this.receivedId = receivedId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withReceivedGlobalMessageNames(receivedGlobalMessageNames?: string[]): this {
    this.receivedGlobalMessageNames = receivedGlobalMessageNames as string[];
    if (receivedGlobalMessageNames) {
      for (let i = 0; i < receivedGlobalMessageNames!.length; i++) {
          this.receivedGlobalMessageNames[i] = String(receivedGlobalMessageNames![i]);
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
    data.receivedId = this.receivedId;
    data.userId = this.userId;
    data.receivedGlobalMessageNames = this.receivedGlobalMessageNames;
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


/**
 * 差分時間設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class TimeSpan implements IModel {
  /** 現在時刻からの日数 */
  public days?: number;
  /** 現在時刻からの時間 */
  public hours?: number;
  /** 現在時刻からの分 */
  public minutes?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.days !== undefined) {
      this.days = data.days;
    } else {
      this.days = 0;
    }
    if (data && data.hours !== undefined) {
      this.hours = data.hours;
    } else {
      this.hours = 0;
    }
    if (data && data.minutes !== undefined) {
      this.minutes = data.minutes;
    } else {
      this.minutes = 0;
    }
  }

  public withDays(days?: number): this {
    this.days = days;
    return this;
  }

  public withHours(hours?: number): this {
    this.hours = hours;
    return this;
  }

  public withMinutes(minutes?: number): this {
    this.minutes = minutes;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.days = this.days;
    data.hours = this.hours;
    data.minutes = this.minutes;
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
