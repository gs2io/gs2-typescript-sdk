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
  ScriptSetting,
  GitHubCheckoutSetting,
  MissionTaskModel,
  MissionTaskModelMaster,
  MissionGroupModelMaster,
  CounterModelMaster,
  CounterScopeModel,
  Config,
  ScopedValue,
  Namespace,
  CounterModel,
  MissionGroupModel,
  Counter,
  LogSetting,
  Complete,
  ResponseCache,
  AcquireAction,
  CurrentMissionMaster,
  NotificationSetting,
} from './model';

import IResult from '../core/interface/IResult';

export class DescribeMissionTaskModelsResult implements IResult {
  /** ミッションタスクのリスト */
  public items?: MissionTaskModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MissionTaskModel(item);
      });
    }
  }

  public withItems(items?: MissionTaskModel[]): this {
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

export class GetMissionTaskModelResult implements IResult {
  /** ミッションタスク */
  public item?: MissionTaskModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionTaskModel(data.item);
    }
  }

  public withItem(item?: MissionTaskModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMissionTaskModelMastersResult implements IResult {
  /** ミッションタスクマスターのリスト */
  public items?: MissionTaskModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MissionTaskModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: MissionTaskModelMaster[]): this {
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

export class CreateMissionTaskModelMasterResult implements IResult {
  /** 作成したミッションタスクマスター */
  public item?: MissionTaskModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionTaskModelMaster(data.item);
    }
  }

  public withItem(item?: MissionTaskModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMissionTaskModelMasterResult implements IResult {
  /** ミッションタスクマスター */
  public item?: MissionTaskModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionTaskModelMaster(data.item);
    }
  }

  public withItem(item?: MissionTaskModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateMissionTaskModelMasterResult implements IResult {
  /** 更新したミッションタスクマスター */
  public item?: MissionTaskModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionTaskModelMaster(data.item);
    }
  }

  public withItem(item?: MissionTaskModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMissionTaskModelMasterResult implements IResult {
  /** 削除したミッションタスク */
  public item?: MissionTaskModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionTaskModelMaster(data.item);
    }
  }

  public withItem(item?: MissionTaskModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMissionGroupModelMastersResult implements IResult {
  /** ミッショングループマスターのリスト */
  public items?: MissionGroupModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MissionGroupModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: MissionGroupModelMaster[]): this {
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

export class CreateMissionGroupModelMasterResult implements IResult {
  /** 作成したミッショングループマスター */
  public item?: MissionGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionGroupModelMaster(data.item);
    }
  }

  public withItem(item?: MissionGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMissionGroupModelMasterResult implements IResult {
  /** ミッショングループマスター */
  public item?: MissionGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionGroupModelMaster(data.item);
    }
  }

  public withItem(item?: MissionGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateMissionGroupModelMasterResult implements IResult {
  /** 更新したミッショングループマスター */
  public item?: MissionGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionGroupModelMaster(data.item);
    }
  }

  public withItem(item?: MissionGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMissionGroupModelMasterResult implements IResult {
  /** 削除したミッショングループ */
  public item?: MissionGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionGroupModelMaster(data.item);
    }
  }

  public withItem(item?: MissionGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeCounterModelMastersResult implements IResult {
  /** カウンターの種類マスターのリスト */
  public items?: CounterModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CounterModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: CounterModelMaster[]): this {
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

export class CreateCounterModelMasterResult implements IResult {
  /** 作成したカウンターの種類マスター */
  public item?: CounterModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CounterModelMaster(data.item);
    }
  }

  public withItem(item?: CounterModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCounterModelMasterResult implements IResult {
  /** カウンターの種類マスター */
  public item?: CounterModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CounterModelMaster(data.item);
    }
  }

  public withItem(item?: CounterModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCounterModelMasterResult implements IResult {
  /** 更新したカウンターの種類マスター */
  public item?: CounterModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CounterModelMaster(data.item);
    }
  }

  public withItem(item?: CounterModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCounterModelMasterResult implements IResult {
  /** 削除したカウンターの種類マスター */
  public item?: CounterModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CounterModelMaster(data.item);
    }
  }

  public withItem(item?: CounterModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

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

export class DescribeCounterModelsResult implements IResult {
  /** カウンターの種類のリスト */
  public items?: CounterModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CounterModel(item);
      });
    }
  }

  public withItems(items?: CounterModel[]): this {
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

export class GetCounterModelResult implements IResult {
  /** カウンターの種類 */
  public item?: CounterModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CounterModel(data.item);
    }
  }

  public withItem(item?: CounterModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMissionGroupModelsResult implements IResult {
  /** ミッショングループのリスト */
  public items?: MissionGroupModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MissionGroupModel(item);
      });
    }
  }

  public withItems(items?: MissionGroupModel[]): this {
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

export class GetMissionGroupModelResult implements IResult {
  /** ミッショングループ */
  public item?: MissionGroupModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MissionGroupModel(data.item);
    }
  }

  public withItem(item?: MissionGroupModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeCountersResult implements IResult {
  /** カウンターのリスト */
  public items?: Counter[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Counter(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Counter[]): this {
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

export class DescribeCountersByUserIdResult implements IResult {
  /** カウンターのリスト */
  public items?: Counter[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Counter(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Counter[]): this {
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

export class IncreaseCounterByUserIdResult implements IResult {
  /** 作成したカウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCounterResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCounterByUserIdResult implements IResult {
  /** カウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCounterByUserIdResult implements IResult {
  /** 削除したカウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class IncreaseByStampSheetResult implements IResult {
  /** カウンター加算後のカウンター */
  public item?: Counter;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Counter(data.item);
    }
  }

  public withItem(item?: Counter): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeCompletesResult implements IResult {
  /** 達成状況のリスト */
  public items?: Complete[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Complete(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Complete[]): this {
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

export class DescribeCompletesByUserIdResult implements IResult {
  /** 達成状況のリスト */
  public items?: Complete[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Complete(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Complete[]): this {
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

export class CompleteResult implements IResult {
  /** ミッションの達成報酬を受領するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.stampSheet = data.stampSheet;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class CompleteByUserIdResult implements IResult {
  /** ミッションの達成報酬を受領するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.stampSheet = data.stampSheet;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class ReceiveByUserIdResult implements IResult {
  /** 受領した達成状況 */
  public item?: Complete;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Complete(data.item);
    }
  }

  public withItem(item?: Complete): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCompleteResult implements IResult {
  /** 達成状況 */
  public item?: Complete;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Complete(data.item);
    }
  }

  public withItem(item?: Complete): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCompleteByUserIdResult implements IResult {
  /** 達成状況 */
  public item?: Complete;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Complete(data.item);
    }
  }

  public withItem(item?: Complete): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCompleteByUserIdResult implements IResult {
  /** 削除した達成状況 */
  public item?: Complete;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Complete(data.item);
    }
  }

  public withItem(item?: Complete): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ReceiveByStampTaskResult implements IResult {
  /** 達成状況 */
  public item?: Complete;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Complete(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Complete): this {
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
  /** 現在有効なミッション */
  public item?: CurrentMissionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMissionMaster(data.item);
    }
  }

  public withItem(item?: CurrentMissionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentMissionMasterResult implements IResult {
  /** 現在有効なミッション */
  public item?: CurrentMissionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMissionMaster(data.item);
    }
  }

  public withItem(item?: CurrentMissionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentMissionMasterResult implements IResult {
  /** 更新した現在有効なミッション */
  public item?: CurrentMissionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMissionMaster(data.item);
    }
  }

  public withItem(item?: CurrentMissionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentMissionMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なミッション */
  public item?: CurrentMissionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentMissionMaster(data.item);
    }
  }

  public withItem(item?: CurrentMissionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
