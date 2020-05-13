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
  ExperienceModelMaster,
  ExperienceModel,
  ThresholdMaster,
  Threshold,
  CurrentExperienceMaster,
  Status,
  ResponseCache,
  GitHubCheckoutSetting,
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

export class DescribeExperienceModelMastersResult implements IResult {
  /** 経験値の種類マスターのリスト */
  public items?: ExperienceModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExperienceModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ExperienceModelMaster[]): this {
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

export class CreateExperienceModelMasterResult implements IResult {
  /** 作成した経験値の種類マスター */
  public item?: ExperienceModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ExperienceModelMaster(data.item);
    }
  }

  public withItem(item?: ExperienceModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetExperienceModelMasterResult implements IResult {
  /** 経験値の種類マスター */
  public item?: ExperienceModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ExperienceModelMaster(data.item);
    }
  }

  public withItem(item?: ExperienceModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateExperienceModelMasterResult implements IResult {
  /** 更新した経験値の種類マスター */
  public item?: ExperienceModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ExperienceModelMaster(data.item);
    }
  }

  public withItem(item?: ExperienceModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteExperienceModelMasterResult implements IResult {
  /** 削除した経験値の種類マスター */
  public item?: ExperienceModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ExperienceModelMaster(data.item);
    }
  }

  public withItem(item?: ExperienceModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeExperienceModelsResult implements IResult {
  /** 経験値・ランクアップ閾値モデルのリスト */
  public items?: ExperienceModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ExperienceModel(item);
      });
    }
  }

  public withItems(items?: ExperienceModel[]): this {
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

export class GetExperienceModelResult implements IResult {
  /** 経験値・ランクアップ閾値モデル */
  public item?: ExperienceModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ExperienceModel(data.item);
    }
  }

  public withItem(item?: ExperienceModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeThresholdMastersResult implements IResult {
  /** ランクアップ閾値マスターのリスト */
  public items?: ThresholdMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new ThresholdMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: ThresholdMaster[]): this {
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

export class CreateThresholdMasterResult implements IResult {
  /** 作成したランクアップ閾値マスター */
  public item?: ThresholdMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ThresholdMaster(data.item);
    }
  }

  public withItem(item?: ThresholdMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetThresholdMasterResult implements IResult {
  /** ランクアップ閾値マスター */
  public item?: ThresholdMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ThresholdMaster(data.item);
    }
  }

  public withItem(item?: ThresholdMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateThresholdMasterResult implements IResult {
  /** 更新したランクアップ閾値マスター */
  public item?: ThresholdMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ThresholdMaster(data.item);
    }
  }

  public withItem(item?: ThresholdMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteThresholdMasterResult implements IResult {
  /** 削除したランクアップ閾値マスター */
  public item?: ThresholdMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new ThresholdMaster(data.item);
    }
  }

  public withItem(item?: ThresholdMaster): this {
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
  /** 現在有効な経験値設定 */
  public item?: CurrentExperienceMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentExperienceMaster(data.item);
    }
  }

  public withItem(item?: CurrentExperienceMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentExperienceMasterResult implements IResult {
  /** 現在有効な経験値設定 */
  public item?: CurrentExperienceMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentExperienceMaster(data.item);
    }
  }

  public withItem(item?: CurrentExperienceMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentExperienceMasterResult implements IResult {
  /** 更新した現在有効な経験値設定 */
  public item?: CurrentExperienceMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentExperienceMaster(data.item);
    }
  }

  public withItem(item?: CurrentExperienceMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentExperienceMasterFromGitHubResult implements IResult {
  /** 更新した現在有効な経験値設定 */
  public item?: CurrentExperienceMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentExperienceMaster(data.item);
    }
  }

  public withItem(item?: CurrentExperienceMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeStatusesResult implements IResult {
  /** ステータスのリスト */
  public items?: Status[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Status[]): this {
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

export class DescribeStatusesByUserIdResult implements IResult {
  /** ステータスのリスト */
  public items?: Status[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Status[]): this {
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

export class GetStatusResult implements IResult {
  /** ステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetStatusByUserIdResult implements IResult {
  /** ステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetStatusWithSignatureResult implements IResult {
  /** ステータス */
  public item?: Status;
  /** 検証対象のオブジェクト */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
      this.body = data.body;
      this.signature = data.signature;
    }
  }

  public withItem(item?: Status): this {
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

export class AddExperienceByUserIdResult implements IResult {
  /** 加算後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetExperienceByUserIdResult implements IResult {
  /** 更新後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddRankCapByUserIdResult implements IResult {
  /** 加算後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRankCapByUserIdResult implements IResult {
  /** 更新後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStatusByUserIdResult implements IResult {
  /** ステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddExperienceByStampSheetResult implements IResult {
  /** 加算後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddRankCapByStampSheetResult implements IResult {
  /** 加算後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRankCapByStampSheetResult implements IResult {
  /** 更新後のステータス */
  public item?: Status;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Status(data.item);
    }
  }

  public withItem(item?: Status): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
