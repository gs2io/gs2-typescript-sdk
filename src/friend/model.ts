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
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}';
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
  /** フォローされたときに実行するスクリプト */
  public followScript?: ScriptSetting;
  /** アンフォローされたときに実行するスクリプト */
  public unfollowScript?: ScriptSetting;
  /** フレンドリクエストを発行したときに実行するスクリプト */
  public sendRequestScript?: ScriptSetting;
  /** フレンドリクエストをキャンセルしたときに実行するスクリプト */
  public cancelRequestScript?: ScriptSetting;
  /** フレンドリクエストを承諾したときに実行するスクリプト */
  public acceptRequestScript?: ScriptSetting;
  /** フレンドリクエストを拒否したときに実行するスクリプト */
  public rejectRequestScript?: ScriptSetting;
  /** フレンドを削除したときに実行するスクリプト */
  public deleteFriendScript?: ScriptSetting;
  /** プロフィールを更新したときに実行するスクリプト */
  public updateProfileScript?: ScriptSetting;
  /** フォローされたときのプッシュ通知 */
  public followNotification?: NotificationSetting;
  /** フレンドリクエストが届いたときのプッシュ通知 */
  public receiveRequestNotification?: NotificationSetting;
  /** フレンドリクエストが承認されたときのプッシュ通知 */
  public acceptRequestNotification?: NotificationSetting;
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
    if (data && data.followScript !== undefined && Object.keys(data.followScript).length > 0) {
      this.followScript = new ScriptSetting(data.followScript);
    } else {
      this.followScript = undefined;
    }
    if (data && data.unfollowScript !== undefined && Object.keys(data.unfollowScript).length > 0) {
      this.unfollowScript = new ScriptSetting(data.unfollowScript);
    } else {
      this.unfollowScript = undefined;
    }
    if (data && data.sendRequestScript !== undefined && Object.keys(data.sendRequestScript).length > 0) {
      this.sendRequestScript = new ScriptSetting(data.sendRequestScript);
    } else {
      this.sendRequestScript = undefined;
    }
    if (data && data.cancelRequestScript !== undefined && Object.keys(data.cancelRequestScript).length > 0) {
      this.cancelRequestScript = new ScriptSetting(data.cancelRequestScript);
    } else {
      this.cancelRequestScript = undefined;
    }
    if (data && data.acceptRequestScript !== undefined && Object.keys(data.acceptRequestScript).length > 0) {
      this.acceptRequestScript = new ScriptSetting(data.acceptRequestScript);
    } else {
      this.acceptRequestScript = undefined;
    }
    if (data && data.rejectRequestScript !== undefined && Object.keys(data.rejectRequestScript).length > 0) {
      this.rejectRequestScript = new ScriptSetting(data.rejectRequestScript);
    } else {
      this.rejectRequestScript = undefined;
    }
    if (data && data.deleteFriendScript !== undefined && Object.keys(data.deleteFriendScript).length > 0) {
      this.deleteFriendScript = new ScriptSetting(data.deleteFriendScript);
    } else {
      this.deleteFriendScript = undefined;
    }
    if (data && data.updateProfileScript !== undefined && Object.keys(data.updateProfileScript).length > 0) {
      this.updateProfileScript = new ScriptSetting(data.updateProfileScript);
    } else {
      this.updateProfileScript = undefined;
    }
    if (data && data.followNotification !== undefined && Object.keys(data.followNotification).length > 0) {
      this.followNotification = new NotificationSetting(data.followNotification);
    } else {
      this.followNotification = undefined;
    }
    if (data && data.receiveRequestNotification !== undefined && Object.keys(data.receiveRequestNotification).length > 0) {
      this.receiveRequestNotification = new NotificationSetting(data.receiveRequestNotification);
    } else {
      this.receiveRequestNotification = undefined;
    }
    if (data && data.acceptRequestNotification !== undefined && Object.keys(data.acceptRequestNotification).length > 0) {
      this.acceptRequestNotification = new NotificationSetting(data.acceptRequestNotification);
    } else {
      this.acceptRequestNotification = undefined;
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

  public withFollowScript(followScript?: ScriptSetting): this {
    this.followScript = followScript;
    return this;
  }

  public withUnfollowScript(unfollowScript?: ScriptSetting): this {
    this.unfollowScript = unfollowScript;
    return this;
  }

  public withSendRequestScript(sendRequestScript?: ScriptSetting): this {
    this.sendRequestScript = sendRequestScript;
    return this;
  }

  public withCancelRequestScript(cancelRequestScript?: ScriptSetting): this {
    this.cancelRequestScript = cancelRequestScript;
    return this;
  }

  public withAcceptRequestScript(acceptRequestScript?: ScriptSetting): this {
    this.acceptRequestScript = acceptRequestScript;
    return this;
  }

  public withRejectRequestScript(rejectRequestScript?: ScriptSetting): this {
    this.rejectRequestScript = rejectRequestScript;
    return this;
  }

  public withDeleteFriendScript(deleteFriendScript?: ScriptSetting): this {
    this.deleteFriendScript = deleteFriendScript;
    return this;
  }

  public withUpdateProfileScript(updateProfileScript?: ScriptSetting): this {
    this.updateProfileScript = updateProfileScript;
    return this;
  }

  public withFollowNotification(followNotification?: NotificationSetting): this {
    this.followNotification = followNotification;
    return this;
  }

  public withReceiveRequestNotification(receiveRequestNotification?: NotificationSetting): this {
    this.receiveRequestNotification = receiveRequestNotification;
    return this;
  }

  public withAcceptRequestNotification(acceptRequestNotification?: NotificationSetting): this {
    this.acceptRequestNotification = acceptRequestNotification;
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
    if (this.followScript) {
      data.followScript = this.followScript.toDict();
    }
    if (this.unfollowScript) {
      data.unfollowScript = this.unfollowScript.toDict();
    }
    if (this.sendRequestScript) {
      data.sendRequestScript = this.sendRequestScript.toDict();
    }
    if (this.cancelRequestScript) {
      data.cancelRequestScript = this.cancelRequestScript.toDict();
    }
    if (this.acceptRequestScript) {
      data.acceptRequestScript = this.acceptRequestScript.toDict();
    }
    if (this.rejectRequestScript) {
      data.rejectRequestScript = this.rejectRequestScript.toDict();
    }
    if (this.deleteFriendScript) {
      data.deleteFriendScript = this.deleteFriendScript.toDict();
    }
    if (this.updateProfileScript) {
      data.updateProfileScript = this.updateProfileScript.toDict();
    }
    if (this.followNotification) {
      data.followNotification = this.followNotification.toDict();
    }
    if (this.receiveRequestNotification) {
      data.receiveRequestNotification = this.receiveRequestNotification.toDict();
    }
    if (this.acceptRequestNotification) {
      data.acceptRequestNotification = this.acceptRequestNotification.toDict();
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
 * プロフィール
 *
 * @author Game Server Services, Inc.
 *
 */
export class Profile implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:profile'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:profile';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:profile';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:profile';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:profile';
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
  /** プロフィール */
  public profileId?: string;
  /** ユーザーID */
  public userId?: string;
  /** 公開されるプロフィール */
  public publicProfile?: string;
  /** フォロワー向けに公開されるプロフィール */
  public followerProfile?: string;
  /** フレンド向けに公開されるプロフィール */
  public friendProfile?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.profileId !== undefined) {
      this.profileId = data.profileId;
    } else {
      this.profileId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.publicProfile !== undefined) {
      this.publicProfile = data.publicProfile;
    } else {
      this.publicProfile = undefined;
    }
    if (data && data.followerProfile !== undefined) {
      this.followerProfile = data.followerProfile;
    } else {
      this.followerProfile = undefined;
    }
    if (data && data.friendProfile !== undefined) {
      this.friendProfile = data.friendProfile;
    } else {
      this.friendProfile = undefined;
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

  public withProfileId(profileId?: string): this {
    this.profileId = profileId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withPublicProfile(publicProfile?: string): this {
    this.publicProfile = publicProfile;
    return this;
  }

  public withFollowerProfile(followerProfile?: string): this {
    this.followerProfile = followerProfile;
    return this;
  }

  public withFriendProfile(friendProfile?: string): this {
    this.friendProfile = friendProfile;
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
    data.profileId = this.profileId;
    data.userId = this.userId;
    data.publicProfile = this.publicProfile;
    data.followerProfile = this.followerProfile;
    data.friendProfile = this.friendProfile;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * フォロー
 *
 * @author Game Server Services, Inc.
 *
 */
export class Follow implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:follow'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:follow';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:follow';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:follow';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:follow';
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
  /** フォロー */
  public followId?: string;
  /** ユーザーID */
  public userId?: string;
  /** フォローしているユーザーIDリスト */
  public targetUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.followId !== undefined) {
      this.followId = data.followId;
    } else {
      this.followId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserIds !== undefined) {
      this.targetUserIds = data.targetUserIds as string[];
      for (let i = 0; i < data.targetUserIds.length; i++) {
            this.targetUserIds[i] = data.targetUserIds[i];
      }
    } else {
      this.targetUserIds = undefined;
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

  public withFollowId(followId?: string): this {
    this.followId = followId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserIds(targetUserIds?: string[]): this {
    this.targetUserIds = targetUserIds as string[];
    if (targetUserIds) {
      for (let i = 0; i < targetUserIds!.length; i++) {
          this.targetUserIds[i] = String(targetUserIds![i]);
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
    data.followId = this.followId;
    data.userId = this.userId;
    data.targetUserIds = this.targetUserIds;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * フレンド
 *
 * @author Game Server Services, Inc.
 *
 */
export class Friend implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:friend'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:friend';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:friend';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:friend';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:friend';
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
  /** フレンド */
  public friendId?: string;
  /** ユーザーID */
  public userId?: string;
  /** フレンドのユーザーIDリスト */
  public targetUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.friendId !== undefined) {
      this.friendId = data.friendId;
    } else {
      this.friendId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserIds !== undefined) {
      this.targetUserIds = data.targetUserIds as string[];
      for (let i = 0; i < data.targetUserIds.length; i++) {
            this.targetUserIds[i] = data.targetUserIds[i];
      }
    } else {
      this.targetUserIds = undefined;
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

  public withFriendId(friendId?: string): this {
    this.friendId = friendId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserIds(targetUserIds?: string[]): this {
    this.targetUserIds = targetUserIds as string[];
    if (targetUserIds) {
      for (let i = 0; i < targetUserIds!.length; i++) {
          this.targetUserIds[i] = String(targetUserIds![i]);
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
    data.friendId = this.friendId;
    data.userId = this.userId;
    data.targetUserIds = this.targetUserIds;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * フレンドリクエストの受信ボックス
 *
 * @author Game Server Services, Inc.
 *
 */
export class SendBox implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:sendBox'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:sendBox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:sendBox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:sendBox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:sendBox';
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
  /** フレンドリクエストの受信ボックス */
  public sendBoxId?: string;
  /** ユーザーID */
  public userId?: string;
  /** フレンドリクエストの宛先ユーザーIDリスト */
  public targetUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.sendBoxId !== undefined) {
      this.sendBoxId = data.sendBoxId;
    } else {
      this.sendBoxId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserIds !== undefined) {
      this.targetUserIds = data.targetUserIds as string[];
      for (let i = 0; i < data.targetUserIds.length; i++) {
            this.targetUserIds[i] = data.targetUserIds[i];
      }
    } else {
      this.targetUserIds = undefined;
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

  public withSendBoxId(sendBoxId?: string): this {
    this.sendBoxId = sendBoxId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserIds(targetUserIds?: string[]): this {
    this.targetUserIds = targetUserIds as string[];
    if (targetUserIds) {
      for (let i = 0; i < targetUserIds!.length; i++) {
          this.targetUserIds[i] = String(targetUserIds![i]);
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
    data.sendBoxId = this.sendBoxId;
    data.userId = this.userId;
    data.targetUserIds = this.targetUserIds;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * フレンドリクエストの受信ボックス
 *
 * @author Game Server Services, Inc.
 *
 */
export class Inbox implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:inbox'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:inbox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:inbox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:inbox';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:inbox';
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
  /** フレンドリクエストの受信ボックス */
  public inboxId?: string;
  /** ユーザーID */
  public userId?: string;
  /** フレンドリクエストを送ってきたユーザーIDリスト */
  public fromUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.inboxId !== undefined) {
      this.inboxId = data.inboxId;
    } else {
      this.inboxId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.fromUserIds !== undefined) {
      this.fromUserIds = data.fromUserIds as string[];
      for (let i = 0; i < data.fromUserIds.length; i++) {
            this.fromUserIds[i] = data.fromUserIds[i];
      }
    } else {
      this.fromUserIds = undefined;
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

  public withInboxId(inboxId?: string): this {
    this.inboxId = inboxId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withFromUserIds(fromUserIds?: string[]): this {
    this.fromUserIds = fromUserIds as string[];
    if (fromUserIds) {
      for (let i = 0; i < fromUserIds!.length; i++) {
          this.fromUserIds[i] = String(fromUserIds![i]);
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
    data.inboxId = this.inboxId;
    data.userId = this.userId;
    data.fromUserIds = this.fromUserIds;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ブラックリスト
 *
 * @author Game Server Services, Inc.
 *
 */
export class BlackList implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string): string {
    return 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:blackList'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:blackList';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:blackList';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:blackList';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}:blackList';
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
  /** ブラックリスト */
  public blackListId?: string;
  /** ユーザーID */
  public userId?: string;
  /** ブラックリストのユーザーIDリスト */
  public targetUserIds?: string[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.blackListId !== undefined) {
      this.blackListId = data.blackListId;
    } else {
      this.blackListId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserIds !== undefined) {
      this.targetUserIds = data.targetUserIds as string[];
      for (let i = 0; i < data.targetUserIds.length; i++) {
            this.targetUserIds[i] = data.targetUserIds[i];
      }
    } else {
      this.targetUserIds = undefined;
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

  public withBlackListId(blackListId?: string): this {
    this.blackListId = blackListId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserIds(targetUserIds?: string[]): this {
    this.targetUserIds = targetUserIds as string[];
    if (targetUserIds) {
      for (let i = 0; i < targetUserIds!.length; i++) {
          this.targetUserIds[i] = String(targetUserIds![i]);
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
    data.blackListId = this.blackListId;
    data.userId = this.userId;
    data.targetUserIds = this.targetUserIds;
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
 * フォローしているユーザー
 *
 * @author Game Server Services, Inc.
 *
 */
export class FollowUser implements IModel {
  /** ユーザーID */
  public userId?: string;
  /** 公開されるプロフィール */
  public publicProfile?: string;
  /** フォロワー向けに公開されるプロフィール */
  public followerProfile?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.publicProfile !== undefined) {
      this.publicProfile = data.publicProfile;
    } else {
      this.publicProfile = undefined;
    }
    if (data && data.followerProfile !== undefined) {
      this.followerProfile = data.followerProfile;
    } else {
      this.followerProfile = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withPublicProfile(publicProfile?: string): this {
    this.publicProfile = publicProfile;
    return this;
  }

  public withFollowerProfile(followerProfile?: string): this {
    this.followerProfile = followerProfile;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.publicProfile = this.publicProfile;
    data.followerProfile = this.followerProfile;
    return data;
  }

}


/**
 * フレンドのユーザー
 *
 * @author Game Server Services, Inc.
 *
 */
export class FriendUser implements IModel {
  /** ユーザーID */
  public userId?: string;
  /** 公開されるプロフィール */
  public publicProfile?: string;
  /** フレンド向けに公開されるプロフィール */
  public friendProfile?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.publicProfile !== undefined) {
      this.publicProfile = data.publicProfile;
    } else {
      this.publicProfile = undefined;
    }
    if (data && data.friendProfile !== undefined) {
      this.friendProfile = data.friendProfile;
    } else {
      this.friendProfile = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withPublicProfile(publicProfile?: string): this {
    this.publicProfile = publicProfile;
    return this;
  }

  public withFriendProfile(friendProfile?: string): this {
    this.friendProfile = friendProfile;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.publicProfile = this.publicProfile;
    data.friendProfile = this.friendProfile;
    return data;
  }

}


/**
 * フレンドリクエスト
 *
 * @author Game Server Services, Inc.
 *
 */
export class FriendRequest implements IModel {
  /** ユーザーID */
  public userId?: string;
  /** ユーザーID */
  public targetUserId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.targetUserId !== undefined) {
      this.targetUserId = data.targetUserId;
    } else {
      this.targetUserId = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withTargetUserId(targetUserId?: string): this {
    this.targetUserId = targetUserId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.targetUserId = this.targetUserId;
    return data;
  }

}


/**
 * 公開プロフィール
 *
 * @author Game Server Services, Inc.
 *
 */
export class PublicProfile implements IModel {
  /** ユーザーID */
  public userId?: string;
  /** 公開されるプロフィール */
  public publicProfile?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.publicProfile !== undefined) {
      this.publicProfile = data.publicProfile;
    } else {
      this.publicProfile = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withPublicProfile(publicProfile?: string): this {
    this.publicProfile = publicProfile;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.publicProfile = this.publicProfile;
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
