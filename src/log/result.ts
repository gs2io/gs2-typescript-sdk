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
  AccessLog,
  AccessLogCount,
  IssueStampSheetLog,
  IssueStampSheetLogCount,
  ExecuteStampSheetLog,
  ExecuteStampSheetLogCount,
  ExecuteStampTaskLog,
  ExecuteStampTaskLogCount,
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

export class QueryAccessLogResult implements IResult {
  /** アクセスログのリスト */
  public items?: AccessLog[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new AccessLog(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: AccessLog[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class CountAccessLogResult implements IResult {
  /** アクセスログ集計のリスト */
  public items?: AccessLogCount[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new AccessLogCount(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: AccessLogCount[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class QueryIssueStampSheetLogResult implements IResult {
  /** スタンプシート発行ログのリスト */
  public items?: IssueStampSheetLog[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new IssueStampSheetLog(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: IssueStampSheetLog[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class CountIssueStampSheetLogResult implements IResult {
  /** スタンプシート発行ログ集計のリスト */
  public items?: IssueStampSheetLogCount[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new IssueStampSheetLogCount(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: IssueStampSheetLogCount[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class QueryExecuteStampSheetLogResult implements IResult {
  /** スタンプシート実行ログのリスト */
  public items?: ExecuteStampSheetLog[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExecuteStampSheetLog(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: ExecuteStampSheetLog[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class CountExecuteStampSheetLogResult implements IResult {
  /** スタンプシート実行ログ集計のリスト */
  public items?: ExecuteStampSheetLogCount[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExecuteStampSheetLogCount(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: ExecuteStampSheetLogCount[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class QueryExecuteStampTaskLogResult implements IResult {
  /** スタンプタスク実行ログのリスト */
  public items?: ExecuteStampTaskLog[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExecuteStampTaskLog(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: ExecuteStampTaskLog[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}

export class CountExecuteStampTaskLogResult implements IResult {
  /** スタンプタスク実行ログ集計のリスト */
  public items?: ExecuteStampTaskLogCount[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;
  /** クエリ結果の総件数 */
  public totalCount?: number;
  /** 検索時にスキャンした総容量 */
  public scanSize?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExecuteStampTaskLogCount(item);
      });
      this.nextPageToken = data.nextPageToken;
      this.totalCount = data.totalCount;
      this.scanSize = data.scanSize;
    }
  }

  public withItems(items?: ExecuteStampTaskLogCount[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public withTotalCount(totalCount?: number): this {
    this.totalCount = totalCount;
    return this;
  }

  public withScanSize(scanSize?: number): this {
    this.scanSize = scanSize;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    data.totalCount = this.totalCount;
    data.scanSize = this.scanSize;
    return data;
  }

}
