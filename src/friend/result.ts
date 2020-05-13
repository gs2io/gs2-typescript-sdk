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
  Profile,
  Follow,
  Friend,
  SendBox,
  Inbox,
  BlackList,
  ResponseCache,
  FollowUser,
  FriendUser,
  FriendRequest,
  PublicProfile,
  ScriptSetting,
  NotificationSetting,
  LogSetting,
} from './model';

import IResult from '../core/interface/IResult';

export class DescribeNamespacesResult implements IResult {
  /** ネームスペースのリスト */
  public items?: Namespace[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Namespace(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Namespace[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateNamespaceResult implements IResult {
  /** 作成したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetNamespaceStatusResult implements IResult {
  /** None */
  public status?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.status = data.status;
    }
  }

  public withStatus(status?: string): this {
    this.status = status;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.status = this.status;
    return data;
  }

}

export class GetNamespaceResult implements IResult {
  /** ネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNamespaceResult implements IResult {
  /** 更新したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteNamespaceResult implements IResult {
  /** 削除したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeProfilesResult implements IResult {
  /** プロフィールのリスト */
  public items?: Profile[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Profile(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Profile[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetProfileResult implements IResult {
  /** プロフィール */
  public item?: Profile;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Profile(data.item);
    }
  }

  public withItem(item?: Profile): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetProfileByUserIdResult implements IResult {
  /** プロフィール */
  public item?: Profile;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Profile(data.item);
    }
  }

  public withItem(item?: Profile): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateProfileResult implements IResult {
  /** 更新したプロフィール */
  public item?: Profile;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Profile(data.item);
    }
  }

  public withItem(item?: Profile): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateProfileByUserIdResult implements IResult {
  /** 更新したプロフィール */
  public item?: Profile;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Profile(data.item);
    }
  }

  public withItem(item?: Profile): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteProfileByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class GetPublicProfileResult implements IResult {
  /** 公開プロフィール */
  public item?: PublicProfile;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new PublicProfile(data.item);
    }
  }

  public withItem(item?: PublicProfile): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeFollowsResult implements IResult {
  /** フォローしているユーザーのリスト */
  public items?: FollowUser[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FollowUser(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: FollowUser[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class DescribeFollowsByUserIdResult implements IResult {
  /** フォローしているユーザーのリスト */
  public items?: FollowUser[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FollowUser(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: FollowUser[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetFollowResult implements IResult {
  /** フォローしているユーザー */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetFollowByUserIdResult implements IResult {
  /** フォローしているユーザー */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class FollowResult implements IResult {
  /** フォローしたユーザ */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class FollowByUserIdResult implements IResult {
  /** フォローしたユーザ */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnfollowResult implements IResult {
  /** アンフォローしたユーザ */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnfollowByUserIdResult implements IResult {
  /** アンフォローしたユーザ */
  public item?: FollowUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FollowUser(data.item);
    }
  }

  public withItem(item?: FollowUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeFriendsResult implements IResult {
  /** フレンドのユーザーのリスト */
  public items?: FriendUser[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendUser(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: FriendUser[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class DescribeFriendsByUserIdResult implements IResult {
  /** フレンドのユーザーのリスト */
  public items?: FriendUser[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendUser(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: FriendUser[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetFriendResult implements IResult {
  /** フレンドのユーザー */
  public item?: FriendUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendUser(data.item);
    }
  }

  public withItem(item?: FriendUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetFriendByUserIdResult implements IResult {
  /** フレンドのユーザー */
  public item?: FriendUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendUser(data.item);
    }
  }

  public withItem(item?: FriendUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteFriendResult implements IResult {
  /** フレンドのユーザー */
  public item?: FriendUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendUser(data.item);
    }
  }

  public withItem(item?: FriendUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteFriendByUserIdResult implements IResult {
  /** フレンドのユーザー */
  public item?: FriendUser;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendUser(data.item);
    }
  }

  public withItem(item?: FriendUser): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeSendRequestsResult implements IResult {
  /** フレンドリクエストのリスト */
  public items?: FriendRequest[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendRequest(item);
      });
    }
  }

  public withItems(items?: FriendRequest[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class DescribeSendRequestsByUserIdResult implements IResult {
  /** フレンドリクエストのリスト */
  public items?: FriendRequest[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendRequest(item);
      });
    }
  }

  public withItems(items?: FriendRequest[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetSendRequestResult implements IResult {
  /** フレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSendRequestByUserIdResult implements IResult {
  /** フレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SendRequestResult implements IResult {
  /** 送信したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SendRequestByUserIdResult implements IResult {
  /** 送信したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRequestResult implements IResult {
  /** 削除したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRequestByUserIdResult implements IResult {
  /** 削除したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeReceiveRequestsResult implements IResult {
  /** フレンドリクエストのリスト */
  public items?: FriendRequest[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendRequest(item);
      });
    }
  }

  public withItems(items?: FriendRequest[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class DescribeReceiveRequestsByUserIdResult implements IResult {
  /** フレンドリクエストのリスト */
  public items?: FriendRequest[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FriendRequest(item);
      });
    }
  }

  public withItems(items?: FriendRequest[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class GetReceiveRequestResult implements IResult {
  /** フレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetReceiveRequestByUserIdResult implements IResult {
  /** フレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AcceptRequestResult implements IResult {
  /** 承諾したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AcceptRequestByUserIdResult implements IResult {
  /** 承諾したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RejectRequestResult implements IResult {
  /** 拒否したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RejectRequestByUserIdResult implements IResult {
  /** 拒否したフレンドリクエスト */
  public item?: FriendRequest;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FriendRequest(data.item);
    }
  }

  public withItem(item?: FriendRequest): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeBlackListResult implements IResult {
  /** ブラックリストに登録されたユーザIDリスト */
  public items?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return item;
      });
    }
  }

  public withItems(items?: string[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.items = this.items;
    return data;
  }

}

export class DescribeBlackListByUserIdResult implements IResult {
  /** ブラックリストに登録されたユーザIDリスト */
  public items?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return item;
      });
    }
  }

  public withItems(items?: string[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.items = this.items;
    return data;
  }

}

export class RegisterBlackListResult implements IResult {
  /** ブラックリスト */
  public item?: BlackList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BlackList(data.item);
    }
  }

  public withItem(item?: BlackList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RegisterBlackListByUserIdResult implements IResult {
  /** ブラックリスト */
  public item?: BlackList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BlackList(data.item);
    }
  }

  public withItem(item?: BlackList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnregisterBlackListResult implements IResult {
  /** ブラックリスト */
  public item?: BlackList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BlackList(data.item);
    }
  }

  public withItem(item?: BlackList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UnregisterBlackListByUserIdResult implements IResult {
  /** ブラックリスト */
  public item?: BlackList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BlackList(data.item);
    }
  }

  public withItem(item?: BlackList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
