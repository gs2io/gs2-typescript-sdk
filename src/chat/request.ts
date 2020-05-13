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
  Room,
  Message,
  Subscribe,
  ResponseCache,
  NotificationType,
  ScriptSetting,
  NotificationSetting,
  LogSetting,
} from './model';

import { Gs2Request } from '@/gs2/core/model';

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
    if (data && data.allowCreateRoom !== undefined) {
      this.allowCreateRoom = data.allowCreateRoom as boolean;
    } else {
      this.allowCreateRoom = undefined;
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
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withAllowCreateRoom(allowCreateRoom?: boolean): this {
    this.allowCreateRoom = allowCreateRoom as boolean;
    return this;
  }

  public withPostMessageScript(postMessageScript?: ScriptSetting): this {
    this.postMessageScript = postMessageScript as ScriptSetting;
    return this;
  }

  public withCreateRoomScript(createRoomScript?: ScriptSetting): this {
    this.createRoomScript = createRoomScript as ScriptSetting;
    return this;
  }

  public withDeleteRoomScript(deleteRoomScript?: ScriptSetting): this {
    this.deleteRoomScript = deleteRoomScript as ScriptSetting;
    return this;
  }

  public withSubscribeRoomScript(subscribeRoomScript?: ScriptSetting): this {
    this.subscribeRoomScript = subscribeRoomScript as ScriptSetting;
    return this;
  }

  public withUnsubscribeRoomScript(unsubscribeRoomScript?: ScriptSetting): this {
    this.unsubscribeRoomScript = unsubscribeRoomScript as ScriptSetting;
    return this;
  }

  public withPostNotification(postNotification?: NotificationSetting): this {
    this.postNotification = postNotification as NotificationSetting;
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
    if (data && data.allowCreateRoom !== undefined) {
      this.allowCreateRoom = data.allowCreateRoom as boolean;
    } else {
      this.allowCreateRoom = undefined;
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
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withAllowCreateRoom(allowCreateRoom?: boolean): this {
    this.allowCreateRoom = allowCreateRoom as boolean;
    return this;
  }

  public withPostMessageScript(postMessageScript?: ScriptSetting): this {
    this.postMessageScript = postMessageScript as ScriptSetting;
    return this;
  }

  public withCreateRoomScript(createRoomScript?: ScriptSetting): this {
    this.createRoomScript = createRoomScript as ScriptSetting;
    return this;
  }

  public withDeleteRoomScript(deleteRoomScript?: ScriptSetting): this {
    this.deleteRoomScript = deleteRoomScript as ScriptSetting;
    return this;
  }

  public withSubscribeRoomScript(subscribeRoomScript?: ScriptSetting): this {
    this.subscribeRoomScript = subscribeRoomScript as ScriptSetting;
    return this;
  }

  public withUnsubscribeRoomScript(unsubscribeRoomScript?: ScriptSetting): this {
    this.unsubscribeRoomScript = unsubscribeRoomScript as ScriptSetting;
    return this;
  }

  public withPostNotification(postNotification?: NotificationSetting): this {
    this.postNotification = postNotification as NotificationSetting;
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

export class DescribeRoomsRequest extends Gs2Request {
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

export class CreateRoomRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public name?: string;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
  /** ルームに参加可能なユーザIDリスト */
  public whiteListUserIds?: string[];
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
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.whiteListUserIds !== undefined) {
      this.whiteListUserIds = data.whiteListUserIds as string[];
      for (let i = 0; i < data.whiteListUserIds.length; i++) {
        this.whiteListUserIds[i] = data.whiteListUserIds[i] as string;
      }
    } else {
      this.whiteListUserIds = undefined;
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

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withWhiteListUserIds(whiteListUserIds?: string[]): this {
    this.whiteListUserIds = whiteListUserIds as string[];
    if (whiteListUserIds) {
      for (let i = 0; i < whiteListUserIds!.length; i++) {
        this.whiteListUserIds[i] = whiteListUserIds![i] as string;
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
    data.name = this.name;
    data.metadata = this.metadata;
    data.password = this.password;
    data.whiteListUserIds = this.whiteListUserIds;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CreateRoomFromBackendRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public name?: string;
  /** ユーザID */
  public userId?: string;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
  /** ルームに参加可能なユーザIDリスト */
  public whiteListUserIds?: string[];
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
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.whiteListUserIds !== undefined) {
      this.whiteListUserIds = data.whiteListUserIds as string[];
      for (let i = 0; i < data.whiteListUserIds.length; i++) {
        this.whiteListUserIds[i] = data.whiteListUserIds[i] as string;
      }
    } else {
      this.whiteListUserIds = undefined;
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

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withWhiteListUserIds(whiteListUserIds?: string[]): this {
    this.whiteListUserIds = whiteListUserIds as string[];
    if (whiteListUserIds) {
      for (let i = 0; i < whiteListUserIds!.length; i++) {
        this.whiteListUserIds[i] = whiteListUserIds![i] as string;
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
    data.name = this.name;
    data.userId = this.userId;
    data.metadata = this.metadata;
    data.password = this.password;
    data.whiteListUserIds = this.whiteListUserIds;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetRoomRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    return data;
  }

}

export class UpdateRoomRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
  /** ルームに参加可能なユーザIDリスト */
  public whiteListUserIds?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.whiteListUserIds !== undefined) {
      this.whiteListUserIds = data.whiteListUserIds as string[];
      for (let i = 0; i < data.whiteListUserIds.length; i++) {
        this.whiteListUserIds[i] = data.whiteListUserIds[i] as string;
      }
    } else {
      this.whiteListUserIds = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withWhiteListUserIds(whiteListUserIds?: string[]): this {
    this.whiteListUserIds = whiteListUserIds as string[];
    if (whiteListUserIds) {
      for (let i = 0; i < whiteListUserIds!.length; i++) {
        this.whiteListUserIds[i] = whiteListUserIds![i] as string;
      }
    }
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    data.metadata = this.metadata;
    data.password = this.password;
    data.whiteListUserIds = this.whiteListUserIds;
    return data;
  }

}

export class DeleteRoomRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteRoomFromBackendRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** ユーザID */
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeMessagesRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
  /** メッセージの取得を開始する時間 */
  public startAt?: number;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.startAt !== undefined) {
      this.startAt = data.startAt as number;
    } else {
      this.startAt = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withStartAt(startAt?: number): this {
    this.startAt = startAt as number;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    data.password = this.password;
    data.startAt = this.startAt;
    data.limit = this.limit;
    return data;
  }

}

export class PostRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メッセージの種類を分類したい時の種類番号 */
  public category?: number;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.category !== undefined) {
      this.category = data.category as number;
    } else {
      this.category = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withCategory(category?: number): this {
    this.category = category as number;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
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
    data.roomName = this.roomName;
    data.category = this.category;
    data.metadata = this.metadata;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class PostByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 発言したユーザID */
  public userId?: string;
  /** メッセージの種類を分類したい時の種類番号 */
  public category?: number;
  /** メタデータ */
  public metadata?: string;
  /** メッセージを投稿するために必要となるパスワード */
  public password?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.category !== undefined) {
      this.category = data.category as number;
    } else {
      this.category = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata as string;
    } else {
      this.metadata = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withCategory(category?: number): this {
    this.category = category as number;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    data.userId = this.userId;
    data.category = this.category;
    data.metadata = this.metadata;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetMessageRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メッセージ名 */
  public messageName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.messageName !== undefined) {
      this.messageName = data.messageName as string;
    } else {
      this.messageName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withMessageName(messageName?: string): this {
    this.messageName = messageName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    data.messageName = this.messageName;
    return data;
  }

}

export class DeleteMessageRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** メッセージ名 */
  public messageName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.messageName !== undefined) {
      this.messageName = data.messageName as string;
    } else {
      this.messageName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withMessageName(messageName?: string): this {
    this.messageName = messageName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.roomName = this.roomName;
    data.messageName = this.messageName;
    return data;
  }

}

export class DescribeSubscribesRequest extends Gs2Request {
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

export class DescribeSubscribesByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 購読するユーザID */
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

export class DescribeSubscribesByRoomNameRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 購読するユーザID */
  public roomName?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class SubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 新着メッセージ通知を受け取るカテゴリリスト */
  public notificationTypes?: NotificationType[];
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withNotificationTypes(notificationTypes?: NotificationType[]): this {
    this.notificationTypes = notificationTypes as NotificationType[];
    if (notificationTypes) {
      for (let i = 0; i < notificationTypes!.length; i++) {
        this.notificationTypes[i] = new NotificationType(notificationTypes![i]);
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
    data.roomName = this.roomName;
    if (this.notificationTypes) {
      data.notificationTypes = this.notificationTypes.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class SubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 新着メッセージ通知を受け取るカテゴリリスト */
  public notificationTypes?: NotificationType[];
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.notificationTypes !== undefined) {
      this.notificationTypes = data.notificationTypes as NotificationType[];
      for (let i = 0; i < data.notificationTypes.length; i++) {
        this.notificationTypes[i] = new NotificationType(data.notificationTypes[i]);
      }
    } else {
      this.notificationTypes = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withNotificationTypes(notificationTypes?: NotificationType[]): this {
    this.notificationTypes = notificationTypes as NotificationType[];
    if (notificationTypes) {
      for (let i = 0; i < notificationTypes!.length; i++) {
        this.notificationTypes[i] = new NotificationType(notificationTypes![i]);
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
    data.roomName = this.roomName;
    data.userId = this.userId;
    if (this.notificationTypes) {
      data.notificationTypes = this.notificationTypes.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetSubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetSubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 購読するユーザID */
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateNotificationTypeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 新着メッセージ通知を受け取るカテゴリリスト */
  public notificationTypes?: NotificationType[];
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withNotificationTypes(notificationTypes?: NotificationType[]): this {
    this.notificationTypes = notificationTypes as NotificationType[];
    if (notificationTypes) {
      for (let i = 0; i < notificationTypes!.length; i++) {
        this.notificationTypes[i] = new NotificationType(notificationTypes![i]);
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
    data.roomName = this.roomName;
    if (this.notificationTypes) {
      data.notificationTypes = this.notificationTypes.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateNotificationTypeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 購読するユーザID */
  public userId?: string;
  /** 新着メッセージ通知を受け取るカテゴリリスト */
  public notificationTypes?: NotificationType[];
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.notificationTypes !== undefined) {
      this.notificationTypes = data.notificationTypes as NotificationType[];
      for (let i = 0; i < data.notificationTypes.length; i++) {
        this.notificationTypes[i] = new NotificationType(data.notificationTypes[i]);
      }
    } else {
      this.notificationTypes = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withNotificationTypes(notificationTypes?: NotificationType[]): this {
    this.notificationTypes = notificationTypes as NotificationType[];
    if (notificationTypes) {
      for (let i = 0; i < notificationTypes!.length; i++) {
        this.notificationTypes[i] = new NotificationType(notificationTypes![i]);
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
    data.roomName = this.roomName;
    data.userId = this.userId;
    if (this.notificationTypes) {
      data.notificationTypes = this.notificationTypes.map((item) => item.toDict());
    }
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UnsubscribeRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UnsubscribeByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ルーム名 */
  public roomName?: string;
  /** 購読するユーザID */
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
    if (data && data.roomName !== undefined) {
      this.roomName = data.roomName as string;
    } else {
      this.roomName = undefined;
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

  public withRoomName(roomName?: string): this {
    this.roomName = roomName as string;
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
    data.roomName = this.roomName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
