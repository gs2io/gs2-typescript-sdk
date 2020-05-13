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
    return 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}';
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
  /** サーバの種類 */
  public serverType?: string;
  /** サーバのスペック */
  public serverSpec?: string;
  /** ルームの作成が終わったときのプッシュ通知 */
  public createNotification?: NotificationSetting;
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
    if (data && data.serverType !== undefined) {
      this.serverType = data.serverType;
    } else {
      this.serverType = undefined;
    }
    if (data && data.serverSpec !== undefined) {
      this.serverSpec = data.serverSpec;
    } else {
      this.serverSpec = undefined;
    }
    if (data && data.createNotification !== undefined && Object.keys(data.createNotification).length > 0) {
      this.createNotification = new NotificationSetting(data.createNotification);
    } else {
      this.createNotification = undefined;
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

  public withServerType(serverType?: string): this {
    this.serverType = serverType;
    return this;
  }

  public withServerSpec(serverSpec?: string): this {
    this.serverSpec = serverSpec;
    return this;
  }

  public withCreateNotification(createNotification?: NotificationSetting): this {
    this.createNotification = createNotification;
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
    data.serverType = this.serverType;
    data.serverSpec = this.serverSpec;
    if (this.createNotification) {
      data.createNotification = this.createNotification.toDict();
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
    return 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}:room:{roomName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{roomName}', roomName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}:room:{roomName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}:room:{roomName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}:room:{roomName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:realtime:{namespaceName}:room:{roomName}';
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
  /** IPアドレス */
  public ipAddress?: string;
  /** 待受ポート */
  public port?: number;
  /** 暗号鍵 */
  public encryptionKey?: string;
  /** ルームの作成が終わったときに通知を受けるユーザIDリスト */
  public notificationUserIds?: string[];
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
    if (data && data.ipAddress !== undefined) {
      this.ipAddress = data.ipAddress;
    } else {
      this.ipAddress = undefined;
    }
    if (data && data.port !== undefined) {
      this.port = data.port;
    } else {
      this.port = 0;
    }
    if (data && data.encryptionKey !== undefined) {
      this.encryptionKey = data.encryptionKey;
    } else {
      this.encryptionKey = undefined;
    }
    if (data && data.notificationUserIds !== undefined) {
      this.notificationUserIds = data.notificationUserIds as string[];
      for (let i = 0; i < data.notificationUserIds.length; i++) {
            this.notificationUserIds[i] = data.notificationUserIds[i];
      }
    } else {
      this.notificationUserIds = undefined;
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

  public withIpAddress(ipAddress?: string): this {
    this.ipAddress = ipAddress;
    return this;
  }

  public withPort(port?: number): this {
    this.port = port;
    return this;
  }

  public withEncryptionKey(encryptionKey?: string): this {
    this.encryptionKey = encryptionKey;
    return this;
  }

  public withNotificationUserIds(notificationUserIds?: string[]): this {
    this.notificationUserIds = notificationUserIds as string[];
    if (notificationUserIds) {
      for (let i = 0; i < notificationUserIds!.length; i++) {
          this.notificationUserIds[i] = String(notificationUserIds![i]);
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
    data.ipAddress = this.ipAddress;
    data.port = this.port;
    data.encryptionKey = this.encryptionKey;
    data.notificationUserIds = this.notificationUserIds;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
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
