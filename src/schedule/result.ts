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
  EventMaster,
  Trigger,
  Event,
  CurrentEventMaster,
  ResponseCache,
  GitHubCheckoutSetting,
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

export class DescribeEventMastersResult implements IResult {
  /** イベントマスターのリスト */
  public items?: EventMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new EventMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: EventMaster[]): this {
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

export class CreateEventMasterResult implements IResult {
  /** 作成したイベントマスター */
  public item?: EventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new EventMaster(data.item);
    }
  }

  public withItem(item?: EventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetEventMasterResult implements IResult {
  /** イベントマスター */
  public item?: EventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new EventMaster(data.item);
    }
  }

  public withItem(item?: EventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateEventMasterResult implements IResult {
  /** 更新したイベントマスター */
  public item?: EventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new EventMaster(data.item);
    }
  }

  public withItem(item?: EventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteEventMasterResult implements IResult {
  /** 削除したイベントマスター */
  public item?: EventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new EventMaster(data.item);
    }
  }

  public withItem(item?: EventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeTriggersResult implements IResult {
  /** トリガーのリスト */
  public items?: Trigger[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Trigger(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Trigger[]): this {
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

export class DescribeTriggersByUserIdResult implements IResult {
  /** トリガーのリスト */
  public items?: Trigger[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Trigger(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Trigger[]): this {
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

export class GetTriggerResult implements IResult {
  /** トリガー */
  public item?: Trigger;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Trigger(data.item);
    }
  }

  public withItem(item?: Trigger): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetTriggerByUserIdResult implements IResult {
  /** トリガー */
  public item?: Trigger;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Trigger(data.item);
    }
  }

  public withItem(item?: Trigger): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class TriggerByUserIdResult implements IResult {
  /** 引いたトリガー */
  public item?: Trigger;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Trigger(data.item);
    }
  }

  public withItem(item?: Trigger): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteTriggerResult implements IResult {
  /** トリガー */
  public item?: Trigger;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Trigger(data.item);
    }
  }

  public withItem(item?: Trigger): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteTriggerByUserIdResult implements IResult {
  /** トリガー */
  public item?: Trigger;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Trigger(data.item);
    }
  }

  public withItem(item?: Trigger): this {
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
  /** イベントのリスト */
  public items?: Event[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Event(item);
      });
    }
  }

  public withItems(items?: Event[]): this {
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

export class DescribeEventsByUserIdResult implements IResult {
  /** イベントのリスト */
  public items?: Event[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Event(item);
      });
    }
  }

  public withItems(items?: Event[]): this {
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

export class DescribeRawEventsResult implements IResult {
  /** イベントのリスト */
  public items?: Event[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Event(item);
      });
    }
  }

  public withItems(items?: Event[]): this {
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

export class GetEventResult implements IResult {
  /** イベント */
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

export class GetEventByUserIdResult implements IResult {
  /** イベント */
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

export class GetRawEventResult implements IResult {
  /** イベント */
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

export class ExportMasterResult implements IResult {
  /** 現在有効なイベントスケジュールマスター */
  public item?: CurrentEventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentEventMaster(data.item);
    }
  }

  public withItem(item?: CurrentEventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentEventMasterResult implements IResult {
  /** 現在有効なイベントスケジュールマスター */
  public item?: CurrentEventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentEventMaster(data.item);
    }
  }

  public withItem(item?: CurrentEventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentEventMasterResult implements IResult {
  /** 更新した現在有効なイベントスケジュールマスター */
  public item?: CurrentEventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentEventMaster(data.item);
    }
  }

  public withItem(item?: CurrentEventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentEventMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なイベントスケジュールマスター */
  public item?: CurrentEventMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentEventMaster(data.item);
    }
  }

  public withItem(item?: CurrentEventMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
