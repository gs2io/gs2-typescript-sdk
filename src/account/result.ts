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
  Account,
  TakeOver,
  ResponseCache,
  ScriptSetting,
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

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeAccountsResult implements IResult {
  /** ゲームプレイヤーアカウントのリスト */
  public items?: Account[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Account(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Account[]): this {
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

export class CreateAccountResult implements IResult {
  /** 作成したゲームプレイヤーアカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateTimeOffsetResult implements IResult {
  /** 更新したゲームプレイヤーアカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetAccountResult implements IResult {
  /** ゲームプレイヤーアカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteAccountResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class AuthenticationResult implements IResult {
  /** ゲームプレイヤーアカウント */
  public item?: Account;
  /** 署名対象のアカウント情報 */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
      this.body = data.body;
      this.signature = data.signature;
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public withBody(body?: string): this {
    this.body = body;
    return this;
  }

  public withSignature(signature?: string): this {
    this.signature = signature;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.body = this.body;
    data.signature = this.signature;
    return data;
  }

}

export class DescribeTakeOversResult implements IResult {
  /** 引き継ぎ設定のリスト */
  public items?: TakeOver[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new TakeOver(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: TakeOver[]): this {
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

export class DescribeTakeOversByUserIdResult implements IResult {
  /** 引き継ぎ設定のリスト */
  public items?: TakeOver[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new TakeOver(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: TakeOver[]): this {
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

export class CreateTakeOverResult implements IResult {
  /** 作成した引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateTakeOverByUserIdResult implements IResult {
  /** 作成した引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetTakeOverResult implements IResult {
  /** 引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetTakeOverByUserIdResult implements IResult {
  /** 引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateTakeOverResult implements IResult {
  /** 引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateTakeOverByUserIdResult implements IResult {
  /** 引き継ぎ設定 */
  public item?: TakeOver;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new TakeOver(data.item);
    }
  }

  public withItem(item?: TakeOver): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteTakeOverResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DeleteTakeOverByUserIdentifierResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DoTakeOverResult implements IResult {
  /** ゲームプレイヤーアカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
