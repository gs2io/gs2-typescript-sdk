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
  Key,
  GitHubApiKey,
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

export class DescribeKeysResult implements IResult {
  /** 暗号鍵のリスト */
  public items?: Key[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Key(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Key[]): this {
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

export class CreateKeyResult implements IResult {
  /** 作成した暗号鍵 */
  public item?: Key;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Key(data.item);
    }
  }

  public withItem(item?: Key): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateKeyResult implements IResult {
  /** 更新した暗号鍵 */
  public item?: Key;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Key(data.item);
    }
  }

  public withItem(item?: Key): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetKeyResult implements IResult {
  /** 暗号鍵 */
  public item?: Key;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Key(data.item);
    }
  }

  public withItem(item?: Key): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteKeyResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class EncryptResult implements IResult {
  /** 暗号化済みデータ */
  public data?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.data = data.data;
    }
  }

  public withData(data?: string): this {
    this.data = data;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.data = this.data;
    return data;
  }

}

export class DecryptResult implements IResult {
  /** 復号済みデータ */
  public data?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.data = data.data;
    }
  }

  public withData(data?: string): this {
    this.data = data;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.data = this.data;
    return data;
  }

}

export class DescribeGitHubApiKeysResult implements IResult {
  /** GitHub のAPIキーのリスト */
  public items?: GitHubApiKey[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new GitHubApiKey(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: GitHubApiKey[]): this {
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

export class CreateGitHubApiKeyResult implements IResult {
  /** 作成したGitHub のAPIキー */
  public item?: GitHubApiKey;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GitHubApiKey(data.item);
    }
  }

  public withItem(item?: GitHubApiKey): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateGitHubApiKeyResult implements IResult {
  /** 更新したGitHub のAPIキー */
  public item?: GitHubApiKey;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GitHubApiKey(data.item);
    }
  }

  public withItem(item?: GitHubApiKey): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetGitHubApiKeyResult implements IResult {
  /** GitHub のAPIキー */
  public item?: GitHubApiKey;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new GitHubApiKey(data.item);
    }
  }

  public withItem(item?: GitHubApiKey): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteGitHubApiKeyResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}
