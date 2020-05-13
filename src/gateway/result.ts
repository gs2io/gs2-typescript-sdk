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
  WebSocketSession,
  FirebaseToken,
  ResponseCache,
  LogSetting,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

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

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeWebSocketSessionsResult implements IResult {
  /** Websocketセッションのリスト */
  public items?: WebSocketSession[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new WebSocketSession(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: WebSocketSession[]): this {
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

export class DescribeWebSocketSessionsByUserIdResult implements IResult {
  /** Websocketセッションのリスト */
  public items?: WebSocketSession[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new WebSocketSession(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: WebSocketSession[]): this {
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

export class SetUserIdResult implements IResult {
  /** 更新したWebsocketセッション */
  public item?: WebSocketSession;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new WebSocketSession(data.item);
    }
  }

  public withItem(item?: WebSocketSession): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetUserIdByUserIdResult implements IResult {
  /** 更新したWebsocketセッション */
  public item?: WebSocketSession;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new WebSocketSession(data.item);
    }
  }

  public withItem(item?: WebSocketSession): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetWebSocketSessionResult implements IResult {
  /** 取得したWebsocketセッション */
  public item?: WebSocketSession;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new WebSocketSession(data.item);
    }
  }

  public withItem(item?: WebSocketSession): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetWebSocketSessionByConnectionIdResult implements IResult {
  /** 取得したWebsocketセッション */
  public item?: WebSocketSession;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new WebSocketSession(data.item);
    }
  }

  public withItem(item?: WebSocketSession): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SendNotificationResult implements IResult {
  /** 通知に使用したプロトコル */
  public protocol?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.protocol = data.protocol;
    }
  }

  public withProtocol(protocol?: string): this {
    this.protocol = protocol;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.protocol = this.protocol;
    return data;
  }

}

export class SetFirebaseTokenResult implements IResult {
  /** 作成したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetFirebaseTokenByUserIdResult implements IResult {
  /** 作成したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetFirebaseTokenResult implements IResult {
  /** 取得したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetFirebaseTokenByUserIdResult implements IResult {
  /** 取得したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteFirebaseTokenResult implements IResult {
  /** 削除したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteFirebaseTokenByUserIdResult implements IResult {
  /** 削除したFirebaseデバイストークン */
  public item?: FirebaseToken;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FirebaseToken(data.item);
    }
  }

  public withItem(item?: FirebaseToken): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SendMobileNotificationByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}
