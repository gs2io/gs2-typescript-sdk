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
  Stack,
  Resource,
  WorkingStack,
  WorkingResource,
  Event,
  Output,
  GitHubCheckoutSetting,
  OutputField,
} from './model';

import IResult from '../core/interface/IResult';

export class DescribeStacksResult implements IResult {
  /** スタックのリスト */
  public items?: Stack[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Stack(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Stack[]): this {
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

export class CreateStackResult implements IResult {
  /** 作成したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateStackFromGitHubResult implements IResult {
  /** 作成したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ValidateResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class GetStackStatusResult implements IResult {
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

export class GetStackResult implements IResult {
  /** スタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateStackResult implements IResult {
  /** 更新したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateStackFromGitHubResult implements IResult {
  /** 更新したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStackResult implements IResult {
  /** 削除したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ForceDeleteStackResult implements IResult {
  /** 削除したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStackResourcesResult implements IResult {
  /** リソースを削除したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStackEntityResult implements IResult {
  /** 削除したスタック */
  public item?: Stack;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stack(data.item);
    }
  }

  public withItem(item?: Stack): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeResourcesResult implements IResult {
  /** 作成されたのリソースのリスト */
  public items?: Resource[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Resource(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Resource[]): this {
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

export class GetResourceResult implements IResult {
  /** 作成されたのリソース */
  public item?: Resource;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Resource(data.item);
    }
  }

  public withItem(item?: Resource): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeEventsResult implements IResult {
  /** 発生したイベントのリスト */
  public items?: Event[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Event(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Event[]): this {
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

export class GetEventResult implements IResult {
  /** 発生したイベント */
  public item?: Event;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Event(data.item);
    }
  }

  public withItem(item?: Event): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeOutputsResult implements IResult {
  /** アウトプットのリスト */
  public items?: Output[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Output(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Output[]): this {
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

export class GetOutputResult implements IResult {
  /** アウトプット */
  public item?: Output;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Output(data.item);
    }
  }

  public withItem(item?: Output): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
