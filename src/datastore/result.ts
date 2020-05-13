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
  DataObject,
  DataObjectHistory,
  ResponseCache,
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

export class DescribeDataObjectsResult implements IResult {
  /** データオブジェクトのリスト */
  public items?: DataObject[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DataObject(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DataObject[]): this {
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

export class DescribeDataObjectsByUserIdResult implements IResult {
  /** データオブジェクトのリスト */
  public items?: DataObject[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DataObject(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DataObject[]): this {
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

export class PrepareUploadResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** アップロード処理の実行に使用するURL */
  public uploadUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.uploadUrl = data.uploadUrl;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withUploadUrl(uploadUrl?: string): this {
    this.uploadUrl = uploadUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.uploadUrl = this.uploadUrl;
    return data;
  }

}

export class PrepareUploadByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** アップロード処理の実行に使用するURL */
  public uploadUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.uploadUrl = data.uploadUrl;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withUploadUrl(uploadUrl?: string): this {
    this.uploadUrl = uploadUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.uploadUrl = this.uploadUrl;
    return data;
  }

}

export class UpdateDataObjectResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateDataObjectByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PrepareReUploadResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** アップロード処理の実行に使用するURL */
  public uploadUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.uploadUrl = data.uploadUrl;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withUploadUrl(uploadUrl?: string): this {
    this.uploadUrl = uploadUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.uploadUrl = this.uploadUrl;
    return data;
  }

}

export class PrepareReUploadByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** アップロード処理の実行に使用するURL */
  public uploadUrl?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.uploadUrl = data.uploadUrl;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withUploadUrl(uploadUrl?: string): this {
    this.uploadUrl = uploadUrl;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.uploadUrl = this.uploadUrl;
    return data;
  }

}

export class DoneUploadResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DoneUploadByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteDataObjectResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteDataObjectByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PrepareDownloadResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadByUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadByGenerationResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadByGenerationAndUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadOwnDataResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadOwnDataByGenerationResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class PrepareDownloadOwnDataByGenerationAndUserIdResult implements IResult {
  /** データオブジェクト */
  public item?: DataObject;
  /** ファイルをダウンロードするためのURL */
  public fileUrl?: string;
  /** ファイルの容量 */
  public contentLength?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObject(data.item);
      this.fileUrl = data.fileUrl;
      this.contentLength = data.contentLength;
    }
  }

  public withItem(item?: DataObject): this {
    this.item = item;
    return this;
  }

  public withFileUrl(fileUrl?: string): this {
    this.fileUrl = fileUrl;
    return this;
  }

  public withContentLength(contentLength?: number): this {
    this.contentLength = contentLength;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.fileUrl = this.fileUrl;
    data.contentLength = this.contentLength;
    return data;
  }

}

export class DescribeDataObjectHistoriesResult implements IResult {
  /** データオブジェクト履歴のリスト */
  public items?: DataObjectHistory[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DataObjectHistory(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DataObjectHistory[]): this {
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

export class DescribeDataObjectHistoriesByUserIdResult implements IResult {
  /** データオブジェクト履歴のリスト */
  public items?: DataObjectHistory[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DataObjectHistory(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DataObjectHistory[]): this {
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

export class GetDataObjectHistoryResult implements IResult {
  /** データオブジェクト履歴 */
  public item?: DataObjectHistory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObjectHistory(data.item);
    }
  }

  public withItem(item?: DataObjectHistory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetDataObjectHistoryByUserIdResult implements IResult {
  /** データオブジェクト履歴 */
  public item?: DataObjectHistory;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DataObjectHistory(data.item);
    }
  }

  public withItem(item?: DataObjectHistory): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
