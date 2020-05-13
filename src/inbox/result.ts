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
  Message,
  CurrentMessageMaster,
  GlobalMessageMaster,
  GlobalMessage,
  Received,
  ResponseCache,
  Config,
  ScriptSetting,
  NotificationSetting,
  GitHubCheckoutSetting,
  LogSetting,
  TimeSpan,
  AcquireAction,
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

export class DescribeMessagesResult implements IResult {
  /** メッセージのリスト */
  public items?: Message[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Message(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Message[]): this {
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

export class DescribeMessagesByUserIdResult implements IResult {
  /** メッセージのリスト */
  public items?: Message[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Message(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Message[]): this {
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

export class SendMessageByUserIdResult implements IResult {
  /** 作成したメッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMessageResult implements IResult {
  /** メッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMessageByUserIdResult implements IResult {
  /** メッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ReceiveGlobalMessageResult implements IResult {
  /** 受信したメッセージ一覧 */
  public item?: Message[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = data.item.map((item: { [key: string]: any }) => {
        return new Message(item);
      });
    }
  }

  public withItem(item?: Message[]): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.item) {
      data.item = this.item.map((item) => item.toDict());
    }
    return data;
  }

}

export class ReceiveGlobalMessageByUserIdResult implements IResult {
  /** 受信したメッセージ一覧 */
  public item?: Message[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = data.item.map((item: { [key: string]: any }) => {
        return new Message(item);
      });
    }
  }

  public withItem(item?: Message[]): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.item) {
      data.item = this.item.map((item) => item.toDict());
    }
    return data;
  }

}

export class OpenMessageResult implements IResult {
  /** メッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class OpenMessageByUserIdResult implements IResult {
  /** メッセージ */
  public item?: Message;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ReadMessageResult implements IResult {
  /** メッセージ */
  public item?: Message;
  /** スタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class ReadMessageByUserIdResult implements IResult {
  /** メッセージ */
  public item?: Message;
  /** スタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class DeleteMessageResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DeleteMessageByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class OpenByStampTaskResult implements IResult {
  /** メッセージ */
  public item?: Message;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Message(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Message): this {
    this.item = item;
    return this;
  }

  public withNewContextStack(newContextStack?: string): this {
    this.newContextStack = newContextStack;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.newContextStack = this.newContextStack;
    return data;
  }

}

export class ExportMasterResult implements IResult {
  /** 現在有効なグローバルメッセージ設定 */
  public item?: CurrentMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMessageMaster(data.item);
    }
  }

  public withItem(item?: CurrentMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentMessageMasterResult implements IResult {
  /** 現在有効なグローバルメッセージ設定 */
  public item?: CurrentMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMessageMaster(data.item);
    }
  }

  public withItem(item?: CurrentMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentMessageMasterResult implements IResult {
  /** 更新した現在有効なグローバルメッセージ設定 */
  public item?: CurrentMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMessageMaster(data.item);
    }
  }

  public withItem(item?: CurrentMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentMessageMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なグローバルメッセージ設定 */
  public item?: CurrentMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMessageMaster(data.item);
    }
  }

  public withItem(item?: CurrentMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeGlobalMessageMastersResult implements IResult {
  /** 全ユーザに向けたメッセージのリスト */
  public items?: GlobalMessageMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new GlobalMessageMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: GlobalMessageMaster[]): this {
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

export class CreateGlobalMessageMasterResult implements IResult {
  /** 作成した全ユーザに向けたメッセージ */
  public item?: GlobalMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GlobalMessageMaster(data.item);
    }
  }

  public withItem(item?: GlobalMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetGlobalMessageMasterResult implements IResult {
  /** 全ユーザに向けたメッセージ */
  public item?: GlobalMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GlobalMessageMaster(data.item);
    }
  }

  public withItem(item?: GlobalMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateGlobalMessageMasterResult implements IResult {
  /** 全ユーザに向けたメッセージ */
  public item?: GlobalMessageMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GlobalMessageMaster(data.item);
    }
  }

  public withItem(item?: GlobalMessageMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteGlobalMessageMasterResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeGlobalMessagesResult implements IResult {
  /** 全ユーザに向けたメッセージのリスト */
  public items?: GlobalMessage[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new GlobalMessage(item);
      });
    }
  }

  public withItems(items?: GlobalMessage[]): this {
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

export class GetGlobalMessageResult implements IResult {
  /** 全ユーザに向けたメッセージ */
  public item?: GlobalMessage;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GlobalMessage(data.item);
    }
  }

  public withItem(item?: GlobalMessage): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetReceivedByUserIdResult implements IResult {
  /** 受信済みグローバルメッセージ名 */
  public item?: Received;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Received(data.item);
    }
  }

  public withItem(item?: Received): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateReceivedByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DeleteReceivedByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}
