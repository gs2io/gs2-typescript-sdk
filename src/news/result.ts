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
  News,
  SetCookieRequestEntry,
  ResponseCache,
  LogSetting,
  GitHubCheckoutSetting,
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

export class PrepareUpdateCurrentNewsMasterResult implements IResult {
  /** アップロード後に結果を反映する際に使用するトークン */
  public uploadToken?: string;
  /** テンプレートアップロード処理の実行に使用するURL */
  public templateUploadUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.uploadToken = data.uploadToken;
      this.templateUploadUrl = data.templateUploadUrl;
    }
  }

  public withUploadToken(uploadToken?: string): this {
    this.uploadToken = uploadToken;
    return this;
  }

  public withTemplateUploadUrl(templateUploadUrl?: string): this {
    this.templateUploadUrl = templateUploadUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.uploadToken = this.uploadToken;
    data.templateUploadUrl = this.templateUploadUrl;
    return data;
  }

}

export class UpdateCurrentNewsMasterResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class PrepareUpdateCurrentNewsMasterFromGitHubResult implements IResult {
  /** アップロード後に結果を反映する際に使用するトークン */
  public uploadToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.uploadToken = data.uploadToken;
    }
  }

  public withUploadToken(uploadToken?: string): this {
    this.uploadToken = uploadToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.uploadToken = this.uploadToken;
    return data;
  }

}

export class DescribeNewsResult implements IResult {
  /** お知らせ記事のリスト */
  public items?: News[];
  /** お知らせ記事データのハッシュ値 */
  public contentHash?: string;
  /** テンプレートデータのハッシュ値 */
  public templateHash?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new News(item);
      });
      this.contentHash = data.contentHash;
      this.templateHash = data.templateHash;
    }
  }

  public withItems(items?: News[]): this {
    this.items = items;
    return this;
  }

  public withContentHash(contentHash?: string): this {
    this.contentHash = contentHash;
    return this;
  }

  public withTemplateHash(templateHash?: string): this {
    this.templateHash = templateHash;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.contentHash = this.contentHash;
    data.templateHash = this.templateHash;
    return data;
  }

}

export class DescribeNewsByUserIdResult implements IResult {
  /** お知らせ記事のリスト */
  public items?: News[];
  /** お知らせ記事データのハッシュ値 */
  public contentHash?: string;
  /** テンプレートデータのハッシュ値 */
  public templateHash?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new News(item);
      });
      this.contentHash = data.contentHash;
      this.templateHash = data.templateHash;
    }
  }

  public withItems(items?: News[]): this {
    this.items = items;
    return this;
  }

  public withContentHash(contentHash?: string): this {
    this.contentHash = contentHash;
    return this;
  }

  public withTemplateHash(templateHash?: string): this {
    this.templateHash = templateHash;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.contentHash = this.contentHash;
    data.templateHash = this.templateHash;
    return data;
  }

}

export class WantGrantResult implements IResult {
  /** お知らせコンテンツにアクセスするために設定の必要なクッキー のリスト */
  public items?: SetCookieRequestEntry[];
  /** お知らせコンテンツにアクセスするためのURL */
  public browserUrl?: string;
  /** ZIP形式のお知らせコンテンツにアクセスするためのURL Cookieの設定は不要 */
  public zipUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SetCookieRequestEntry(item);
      });
      this.browserUrl = data.browserUrl;
      this.zipUrl = data.zipUrl;
    }
  }

  public withItems(items?: SetCookieRequestEntry[]): this {
    this.items = items;
    return this;
  }

  public withBrowserUrl(browserUrl?: string): this {
    this.browserUrl = browserUrl;
    return this;
  }

  public withZipUrl(zipUrl?: string): this {
    this.zipUrl = zipUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.browserUrl = this.browserUrl;
    data.zipUrl = this.zipUrl;
    return data;
  }

}

export class WantGrantByUserIdResult implements IResult {
  /** お知らせコンテンツにアクセスするために設定の必要なクッキー のリスト */
  public items?: SetCookieRequestEntry[];
  /** お知らせコンテンツにアクセスするためのURL */
  public browserUrl?: string;
  /** ZIP形式のお知らせコンテンツにアクセスするためのURL Cookieの設定は不要 */
  public zipUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SetCookieRequestEntry(item);
      });
      this.browserUrl = data.browserUrl;
      this.zipUrl = data.zipUrl;
    }
  }

  public withItems(items?: SetCookieRequestEntry[]): this {
    this.items = items;
    return this;
  }

  public withBrowserUrl(browserUrl?: string): this {
    this.browserUrl = browserUrl;
    return this;
  }

  public withZipUrl(zipUrl?: string): this {
    this.zipUrl = zipUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.browserUrl = this.browserUrl;
    data.zipUrl = this.zipUrl;
    return data;
  }

}
