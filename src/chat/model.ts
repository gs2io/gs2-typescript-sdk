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
    return 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}';
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
  /** ゲームプレイヤーによるルームの作成を許可するか */
  public allowCreateRoom?: boolean;
  /** メッセージを投稿したときに実行するスクリプト */
  public postMessageScript?: ScriptSetting;
  /** ルームを作成したときに実行するスクリプト */
  public createRoomScript?: ScriptSetting;
  /** ルームを削除したときに実行するスクリプト */
  public deleteRoomScript?: ScriptSetting;
  /** ルームを購読したときに実行するスクリプト */
  public subscribeRoomScript?: ScriptSetting;
  /** ルームの購読を解除したときに実行するスクリプト */
  public unsubscribeRoomScript?: ScriptSetting;
  /** 購読しているルームに新しい投稿がきたときのプッシュ通知 */
  public postNotification?: NotificationSetting;
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
    if (data && data.allowCreateRoom !== undefined) {
      this.allowCreateRoom = data.allowCreateRoom;
    } else {
      this.allowCreateRoom = false;
    }
    if (data && data.postMessageScript !== undefined && Object.keys(data.postMessageScript).length > 0) {
      this.postMessageScript = new ScriptSetting(data.postMessageScript);
    } else {
      this.postMessageScript = undefined;
    }
    if (data && data.createRoomScript !== undefined && Object.keys(data.createRoomScript).length > 0) {
      this.createRoomScript = new ScriptSetting(data.createRoomScript);
    } else {
      this.createRoomScript = undefined;
    }
    if (data && data.deleteRoomScript !== undefined && Object.keys(data.deleteRoomScript).length > 0) {
      this.deleteRoomScript = new ScriptSetting(data.deleteRoomScript);
    } else {
      this.deleteRoomScript = undefined;
    }
    if (data && data.subscribeRoomScript !== undefined && Object.keys(data.subscribeRoomScript).length > 0) {
      this.subscribeRoomScript = new ScriptSetting(data.subscribeRoomScript);
    } else {
      this.subscribeRoomScript = undefined;
    }
    if (data && data.unsubscribeRoomScript !== undefined && Object.keys(data.unsubscribeRoomScript).length > 0) {
      this.unsubscribeRoomScript = new ScriptSetting(data.unsubscribeRoomScript);
    } else {
      this.unsubscribeRoomScript = undefined;
    }
    if (data && data.postNotification !== undefined && Object.keys(data.postNotification).length > 0) {
      this.postNotification = new NotificationSetting(data.postNotification);
    } else {
      this.postNotification = undefined;
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

  public withAllowCreateRoom(allowCreateRoom?: boolean): this {
    this.allowCreateRoom = allowCreateRoom;
    return this;
  }

  public withPostMessageScript(postMessageScript?: ScriptSetting): this {
    this.postMessageScript = postMessageScript;
    return this;
  }

  public withCreateRoomScript(createRoomScript?: ScriptSetting): this {
    this.createRoomScript = createRoomScript;
    return this;
  }

  public withDeleteRoomScript(deleteRoomScript?: ScriptSetting): this {
    this.deleteRoomScript = deleteRoomScript;
    return this;
  }

  public withSubscribeRoomScript(subscribeRoomScript?: ScriptSetting): this {
    this.subscribeRoomScript = subscribeRoomScript;
    return this;
  }

  public withUnsubscribeRoomScript(unsubscribeRoomScript?: ScriptSetting): this {
    this.unsubscribeRoomScript = unsubscribeRoomScript;
    return this;
  }

  public withPostNotification(postNotification?: NotificationSetting): this {
    this.postNotification = postNotification;
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
    data.allowCreateRoom = this.allowCreateRoom;
    if (this.postMessageScript) {
      data.postMessageScript = this.postMessageScript.toDict();
    }
    if (this.createRoomScript) {
      data.createRoomScript = this.createRoomScript.toDict();
    }
    if (this.deleteRoomScript) {
      data.deleteRoomScript = this.deleteRoomScript.toDict();
    }
    if (this.subscribeRoomScript) {
      data.subscribeRoomScript = this.subscribeRoomScript.toDict();
    }
    if (this.unsubscribeRoomScript) {
      data.unsubscribeRoomScript = this.unsubscribeRoomScript.toDict();
    }
    if (this.postNotification) {
      data.postNotification = this.postNotification.toDict();
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
 * ルーム
 *
 * @author Game Server Services, Inc.
 *
 */
export class Room implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, roomName: string): string {
    return 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{roomName}', roomName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRoomNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** ルーム */
  public roomId?: string;
  /** ルーム名 */
  public name?: string;
  /** ルームを作成したユーザID */
  public userId?: string;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
  /** ルームに参加可能なユーザIDリスト */
  public whiteListUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.roomId !== undefined) {
      this.roomId = data.roomId;
    } else {
      this.roomId = undefined;
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
    if (data && data.password !== undefined) {
      this.password = data.password;
    } else {
      this.password = undefined;
    }
    if (data && data.whiteListUserIds !== undefined) {
      this.whiteListUserIds = data.whiteListUserIds as string[];
      for (let i = 0; i < data.whiteListUserIds.length; i++) {
            this.whiteListUserIds[i] = data.whiteListUserIds[i];
      }
    } else {
      this.whiteListUserIds = undefined;
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

  public withRoomId(roomId?: string): this {
    this.roomId = roomId;
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

  public withPassword(password?: string): this {
    this.password = password;
    return this;
  }

  public withWhiteListUserIds(whiteListUserIds?: string[]): this {
    this.whiteListUserIds = whiteListUserIds as string[];
    if (whiteListUserIds) {
      for (let i = 0; i < whiteListUserIds!.length; i++) {
          this.whiteListUserIds[i] = String(whiteListUserIds![i]);
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
    data.roomId = this.roomId;
    data.name = this.name;
    data.userId = this.userId;
    data.metadata = this.metadata;
    data.password = this.password;
    data.whiteListUserIds = this.whiteListUserIds;
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

  public static createGrn(region: string, ownerId: string, namespaceName: string, roomName: string, messageName: string): string {
    return 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{roomName}', roomName)
      .replace('{messageName}', messageName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getRoomNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMessageNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}:message:{messageName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');
    grnFormat = grnFormat.replace('{messageName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** メッセージ */
  public messageId?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メッセージ名 */
  public name?: string;
  /** 発言したユーザID */
  public userId?: string;
  /** メッセージの種類を分類したい時の種類番号 */
  public category?: number;
  /** メタデータ */
  public metadata?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.messageId !== undefined) {
      this.messageId = data.messageId;
    } else {
      this.messageId = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName;
    } else {
      this.roomName = undefined;
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
    if (data && data.category !== undefined) {
      this.category = data.category;
    } else {
      this.category = 0;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withMessageId(messageId?: string): this {
    this.messageId = messageId;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName;
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

  public withCategory(category?: number): this {
    this.category = category;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.messageId = this.messageId;
    data.roomName = this.roomName;
    data.name = this.name;
    data.userId = this.userId;
    data.category = this.category;
    data.metadata = this.metadata;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * 購読
 *
 * @author Game Server Services, Inc.
 *
 */
export class Subscribe implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, roomName: string): string {
    return 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{roomName}', roomName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getRoomNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:room:{roomName}:subscribe';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{roomName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** 購読 */
  public subscribeId?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 購読するルーム名 */
  public roomName?: string;
  /** 新着メッセージ通知を受け取るカテゴリリスト */
  public notificationTypes?: NotificationType[];
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.subscribeId !== undefined) {
      this.subscribeId = data.subscribeId;
    } else {
      this.subscribeId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName;
    } else {
      this.roomName = undefined;
    }
    if (data && data.notificationTypes !== undefined) {
      this.notificationTypes = data.notificationTypes as NotificationType[];
      for (let i = 0; i < data.notificationTypes.length; i++) {
            this.notificationTypes[i] = new NotificationType(data.notificationTypes[i]);
      }
    } else {
      this.notificationTypes = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withSubscribeId(subscribeId?: string): this {
    this.subscribeId = subscribeId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName;
    return this;
  }

  public withNotificationTypes(notificationTypes?: NotificationType[]): this {
    this.notificationTypes = notificationTypes as NotificationType[];
    if (notificationTypes) {
      for (let i = 0; i < notificationTypes!.length; i++) {
          this.notificationTypes[i] = notificationTypes![i];
      }
    }
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.subscribeId = this.subscribeId;
    data.userId = this.userId;
    data.roomName = this.roomName;
    if (this.notificationTypes) {
      data.notificationTypes = this.notificationTypes.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
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
 * フォローしているユーザー
 *
 * @author Game Server Services, Inc.
 *
 */
export class NotificationType implements IModel {
  /** 新着メッセージ通知を受け取るカテゴリ */
  public category?: number;
  /** オフラインだった時にモバイルプッシュ通知に転送するか */
  public enableTransferMobilePushNotification?: boolean;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.category !== undefined) {
      this.category = data.category;
    } else {
      this.category = 0;
    }
    if (data && data.enableTransferMobilePushNotification !== undefined) {
      this.enableTransferMobilePushNotification = data.enableTransferMobilePushNotification;
    } else {
      this.enableTransferMobilePushNotification = false;
    }
  }

  public withCategory(category?: number): this {
    this.category = category;
    return this;
  }

  public withEnableTransferMobilePushNotification(enableTransferMobilePushNotification?: boolean): this {
    this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.category = this.category;
    data.enableTransferMobilePushNotification = this.enableTransferMobilePushNotification;
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
