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
  Wallet,
  Receipt,
  ResponseCache,
  WalletDetail,
  ScriptSetting,
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

export class DescribeWalletsResult implements IResult {
  /** ウォレットのリスト */
  public items?: Wallet[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Wallet(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Wallet[]): this {
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

export class DescribeWalletsByUserIdResult implements IResult {
  /** ウォレットのリスト */
  public items?: Wallet[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Wallet(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Wallet[]): this {
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

export class QueryWalletsResult implements IResult {
  /** ウォレットのリスト */
  public items?: Wallet[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Wallet(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Wallet[]): this {
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

export class GetWalletResult implements IResult {
  /** ウォレット */
  public item?: Wallet;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetWalletByUserIdResult implements IResult {
  /** ウォレット */
  public item?: Wallet;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DepositByUserIdResult implements IResult {
  /** 加算後のウォレット */
  public item?: Wallet;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class WithdrawResult implements IResult {
  /** 消費後のウォレット */
  public item?: Wallet;
  /** 消費した通貨の価格 */
  public price?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
      this.price = data.price;
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public withPrice(price?: number): this {
    this.price = price;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.price = this.price;
    return data;
  }

}

export class WithdrawByUserIdResult implements IResult {
  /** 消費後のウォレット */
  public item?: Wallet;
  /** 消費した通貨の価格 */
  public price?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
      this.price = data.price;
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public withPrice(price?: number): this {
    this.price = price;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.price = this.price;
    return data;
  }

}

export class DepositByStampSheetResult implements IResult {
  /** 加算後のウォレット */
  public item?: Wallet;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
    }
  }

  public withItem(item?: Wallet): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class WithdrawByStampTaskResult implements IResult {
  /** 消費後のウォレット */
  public item?: Wallet;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Wallet(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Wallet): this {
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

export class DescribeReceiptsResult implements IResult {
  /** レシートのリスト */
  public items?: Receipt[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Receipt(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Receipt[]): this {
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

export class GetByUserIdAndTransactionIdResult implements IResult {
  /** レシート */
  public item?: Receipt;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Receipt(data.item);
    }
  }

  public withItem(item?: Receipt): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RecordReceiptResult implements IResult {
  /** レシート */
  public item?: Receipt;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Receipt(data.item);
    }
  }

  public withItem(item?: Receipt): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RecordReceiptByStampTaskResult implements IResult {
  /** レシート */
  public item?: Receipt;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Receipt(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Receipt): this {
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
