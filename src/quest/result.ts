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
  QuestGroupModelMaster,
  QuestModelMaster,
  CurrentQuestMaster,
  ResponseCache,
  Contents,
  ConsumeAction,
  AcquireAction,
  Reward,
  Config,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
  Progress,
  CompletedQuestList,
  QuestGroupModel,
  QuestModel,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

export class DescribeNamespacesResult implements IResult {
  /** クエストを分類するカテゴリーのリスト */
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
  /** 作成したクエストを分類するカテゴリー */
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
  /** クエストを分類するカテゴリー */
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
  /** 更新したクエストを分類するカテゴリー */
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
  /** 削除したクエストを分類するカテゴリー */
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

export class DescribeQuestGroupModelMastersResult implements IResult {
  /** クエストグループマスターのリスト */
  public items?: QuestGroupModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new QuestGroupModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: QuestGroupModelMaster[]): this {
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

export class CreateQuestGroupModelMasterResult implements IResult {
  /** 作成したクエストグループマスター */
  public item?: QuestGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestGroupModelMaster(data.item);
    }
  }

  public withItem(item?: QuestGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetQuestGroupModelMasterResult implements IResult {
  /** クエストグループマスター */
  public item?: QuestGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestGroupModelMaster(data.item);
    }
  }

  public withItem(item?: QuestGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateQuestGroupModelMasterResult implements IResult {
  /** 更新したクエストグループマスター */
  public item?: QuestGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestGroupModelMaster(data.item);
    }
  }

  public withItem(item?: QuestGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteQuestGroupModelMasterResult implements IResult {
  /** 削除したクエストグループマスター */
  public item?: QuestGroupModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestGroupModelMaster(data.item);
    }
  }

  public withItem(item?: QuestGroupModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeQuestModelMastersResult implements IResult {
  /** クエストモデルマスターのリスト */
  public items?: QuestModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new QuestModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: QuestModelMaster[]): this {
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

export class CreateQuestModelMasterResult implements IResult {
  /** 作成したクエストモデルマスター */
  public item?: QuestModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestModelMaster(data.item);
    }
  }

  public withItem(item?: QuestModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetQuestModelMasterResult implements IResult {
  /** クエストモデルマスター */
  public item?: QuestModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestModelMaster(data.item);
    }
  }

  public withItem(item?: QuestModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateQuestModelMasterResult implements IResult {
  /** 更新したクエストモデルマスター */
  public item?: QuestModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestModelMaster(data.item);
    }
  }

  public withItem(item?: QuestModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteQuestModelMasterResult implements IResult {
  /** 削除したクエストモデルマスター */
  public item?: QuestModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestModelMaster(data.item);
    }
  }

  public withItem(item?: QuestModelMaster): this {
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
  /** 現在有効なクエストマスター */
  public item?: CurrentQuestMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentQuestMaster(data.item);
    }
  }

  public withItem(item?: CurrentQuestMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentQuestMasterResult implements IResult {
  /** 現在有効なクエストマスター */
  public item?: CurrentQuestMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentQuestMaster(data.item);
    }
  }

  public withItem(item?: CurrentQuestMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentQuestMasterResult implements IResult {
  /** 更新した現在有効なクエストマスター */
  public item?: CurrentQuestMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentQuestMaster(data.item);
    }
  }

  public withItem(item?: CurrentQuestMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentQuestMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なクエストマスター */
  public item?: CurrentQuestMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentQuestMaster(data.item);
    }
  }

  public withItem(item?: CurrentQuestMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeProgressesByUserIdResult implements IResult {
  /** クエスト挑戦のリスト */
  public items?: Progress[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Progress(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Progress[]): this {
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

export class CreateProgressByUserIdResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetProgressResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;
  /** クエストグループ */
  public questGroup?: QuestGroupModel;
  /** クエストモデル */
  public quest?: QuestModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
      this.questGroup = new QuestGroupModel(data.questGroup);
      this.quest = new QuestModel(data.quest);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public withQuestGroup(questGroup?: QuestGroupModel): this {
    this.questGroup = questGroup;
    return this;
  }

  public withQuest(quest?: QuestModel): this {
    this.quest = quest;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.questGroup = this.questGroup;
    data.quest = this.quest;
    return data;
  }

}

export class GetProgressByUserIdResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;
  /** クエストグループ */
  public questGroup?: QuestGroupModel;
  /** クエストモデル */
  public quest?: QuestModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
      this.questGroup = new QuestGroupModel(data.questGroup);
      this.quest = new QuestModel(data.quest);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public withQuestGroup(questGroup?: QuestGroupModel): this {
    this.questGroup = questGroup;
    return this;
  }

  public withQuest(quest?: QuestModel): this {
    this.quest = quest;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.questGroup = this.questGroup;
    data.quest = this.quest;
    return data;
  }

}

export class StartResult implements IResult {
  /** クエストの開始処理の実行に使用するスタンプシート */
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

export class StartByUserIdResult implements IResult {
  /** クエストの開始処理の実行に使用するスタンプシート */
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

export class EndResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;
  /** 報酬付与処理の実行に使用するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Progress): this {
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

export class EndByUserIdResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;
  /** 報酬付与処理の実行に使用するスタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Progress): this {
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

export class DeleteProgressResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteProgressByUserIdResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateProgressByStampSheetResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
    }
  }

  public withItem(item?: Progress): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteProgressByStampTaskResult implements IResult {
  /** クエスト挑戦 */
  public item?: Progress;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Progress(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Progress): this {
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

export class DescribeCompletedQuestListsResult implements IResult {
  /** クエスト進行のリスト */
  public items?: CompletedQuestList[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CompletedQuestList(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: CompletedQuestList[]): this {
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

export class DescribeCompletedQuestListsByUserIdResult implements IResult {
  /** クエスト進行のリスト */
  public items?: CompletedQuestList[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new CompletedQuestList(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: CompletedQuestList[]): this {
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

export class GetCompletedQuestListResult implements IResult {
  /** クエスト進行 */
  public item?: CompletedQuestList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CompletedQuestList(data.item);
    }
  }

  public withItem(item?: CompletedQuestList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCompletedQuestListByUserIdResult implements IResult {
  /** クエスト進行 */
  public item?: CompletedQuestList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CompletedQuestList(data.item);
    }
  }

  public withItem(item?: CompletedQuestList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteCompletedQuestListByUserIdResult implements IResult {
  /** クエスト進行 */
  public item?: CompletedQuestList;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CompletedQuestList(data.item);
    }
  }

  public withItem(item?: CompletedQuestList): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeQuestGroupModelsResult implements IResult {
  /** クエストグループのリスト */
  public items?: QuestGroupModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new QuestGroupModel(item);
      });
    }
  }

  public withItems(items?: QuestGroupModel[]): this {
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

export class GetQuestGroupModelResult implements IResult {
  /** クエストグループ */
  public item?: QuestGroupModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestGroupModel(data.item);
    }
  }

  public withItem(item?: QuestGroupModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeQuestModelsResult implements IResult {
  /** Noneのリスト */
  public items?: QuestModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new QuestModel(item);
      });
    }
  }

  public withItems(items?: QuestModel[]): this {
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

export class GetQuestModelResult implements IResult {
  /** None */
  public item?: QuestModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new QuestModel(data.item);
    }
  }

  public withItem(item?: QuestModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
