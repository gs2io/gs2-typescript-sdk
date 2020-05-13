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
  StaminaModelMaster,
  MaxStaminaTableMaster,
  RecoverIntervalTableMaster,
  RecoverValueTableMaster,
  CurrentStaminaMaster,
  StaminaModel,
  MaxStaminaTable,
  RecoverIntervalTable,
  RecoverValueTable,
  Stamina,
  ResponseCache,
  GitHubCheckoutSetting,
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

export class DescribeStaminaModelMastersResult implements IResult {
  /** スタミナモデルマスターのリスト */
  public items?: StaminaModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new StaminaModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: StaminaModelMaster[]): this {
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

export class CreateStaminaModelMasterResult implements IResult {
  /** 作成したスタミナモデルマスター */
  public item?: StaminaModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new StaminaModelMaster(data.item);
    }
  }

  public withItem(item?: StaminaModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetStaminaModelMasterResult implements IResult {
  /** スタミナモデルマスター */
  public item?: StaminaModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new StaminaModelMaster(data.item);
    }
  }

  public withItem(item?: StaminaModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateStaminaModelMasterResult implements IResult {
  /** 更新したスタミナモデルマスター */
  public item?: StaminaModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new StaminaModelMaster(data.item);
    }
  }

  public withItem(item?: StaminaModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStaminaModelMasterResult implements IResult {
  /** 削除したスタミナモデルマスター */
  public item?: StaminaModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new StaminaModelMaster(data.item);
    }
  }

  public withItem(item?: StaminaModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMaxStaminaTableMastersResult implements IResult {
  /** スタミナの最大値テーブルマスターのリスト */
  public items?: MaxStaminaTableMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MaxStaminaTableMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: MaxStaminaTableMaster[]): this {
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

export class CreateMaxStaminaTableMasterResult implements IResult {
  /** 作成したスタミナの最大値テーブルマスター */
  public item?: MaxStaminaTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MaxStaminaTableMaster(data.item);
    }
  }

  public withItem(item?: MaxStaminaTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMaxStaminaTableMasterResult implements IResult {
  /** スタミナの最大値テーブルマスター */
  public item?: MaxStaminaTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MaxStaminaTableMaster(data.item);
    }
  }

  public withItem(item?: MaxStaminaTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateMaxStaminaTableMasterResult implements IResult {
  /** 更新したスタミナの最大値テーブルマスター */
  public item?: MaxStaminaTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MaxStaminaTableMaster(data.item);
    }
  }

  public withItem(item?: MaxStaminaTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMaxStaminaTableMasterResult implements IResult {
  /** 削除したスタミナの最大値テーブルマスター */
  public item?: MaxStaminaTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MaxStaminaTableMaster(data.item);
    }
  }

  public withItem(item?: MaxStaminaTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeRecoverIntervalTableMastersResult implements IResult {
  /** スタミナ回復間隔テーブルマスターのリスト */
  public items?: RecoverIntervalTableMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new RecoverIntervalTableMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: RecoverIntervalTableMaster[]): this {
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

export class CreateRecoverIntervalTableMasterResult implements IResult {
  /** 作成したスタミナ回復間隔テーブルマスター */
  public item?: RecoverIntervalTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverIntervalTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverIntervalTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetRecoverIntervalTableMasterResult implements IResult {
  /** スタミナ回復間隔テーブルマスター */
  public item?: RecoverIntervalTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverIntervalTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverIntervalTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateRecoverIntervalTableMasterResult implements IResult {
  /** 更新したスタミナ回復間隔テーブルマスター */
  public item?: RecoverIntervalTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverIntervalTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverIntervalTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRecoverIntervalTableMasterResult implements IResult {
  /** 削除したスタミナ回復間隔テーブルマスター */
  public item?: RecoverIntervalTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverIntervalTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverIntervalTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeRecoverValueTableMastersResult implements IResult {
  /** スタミナ回復量テーブルマスターのリスト */
  public items?: RecoverValueTableMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new RecoverValueTableMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: RecoverValueTableMaster[]): this {
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

export class CreateRecoverValueTableMasterResult implements IResult {
  /** 作成したスタミナ回復量テーブルマスター */
  public item?: RecoverValueTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverValueTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverValueTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetRecoverValueTableMasterResult implements IResult {
  /** スタミナ回復量テーブルマスター */
  public item?: RecoverValueTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverValueTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverValueTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateRecoverValueTableMasterResult implements IResult {
  /** 更新したスタミナ回復量テーブルマスター */
  public item?: RecoverValueTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverValueTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverValueTableMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteRecoverValueTableMasterResult implements IResult {
  /** 削除したスタミナ回復量テーブルマスター */
  public item?: RecoverValueTableMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new RecoverValueTableMaster(data.item);
    }
  }

  public withItem(item?: RecoverValueTableMaster): this {
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
  /** 現在有効なスタミナマスター */
  public item?: CurrentStaminaMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentStaminaMaster(data.item);
    }
  }

  public withItem(item?: CurrentStaminaMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentStaminaMasterResult implements IResult {
  /** 現在有効なスタミナマスター */
  public item?: CurrentStaminaMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentStaminaMaster(data.item);
    }
  }

  public withItem(item?: CurrentStaminaMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentStaminaMasterResult implements IResult {
  /** 更新した現在有効なスタミナマスター */
  public item?: CurrentStaminaMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentStaminaMaster(data.item);
    }
  }

  public withItem(item?: CurrentStaminaMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentStaminaMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なスタミナマスター */
  public item?: CurrentStaminaMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentStaminaMaster(data.item);
    }
  }

  public withItem(item?: CurrentStaminaMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeStaminaModelsResult implements IResult {
  /** スタミナモデルのリスト */
  public items?: StaminaModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new StaminaModel(item);
      });
    }
  }

  public withItems(items?: StaminaModel[]): this {
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

export class GetStaminaModelResult implements IResult {
  /** スタミナモデル */
  public item?: StaminaModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new StaminaModel(data.item);
    }
  }

  public withItem(item?: StaminaModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeStaminasResult implements IResult {
  /** スタミナのリスト */
  public items?: Stamina[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Stamina(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Stamina[]): this {
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

export class DescribeStaminasByUserIdResult implements IResult {
  /** スタミナのリスト */
  public items?: Stamina[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Stamina(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Stamina[]): this {
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

export class GetStaminaResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetStaminaByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateStaminaByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ConsumeStaminaResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ConsumeStaminaByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class RecoverStaminaByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;
  /** スタミナ値の上限を超えて受け取れずに GS2-Inbox に転送したスタミナ値 */
  public overflowValue?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
      this.overflowValue = data.overflowValue;
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public withOverflowValue(overflowValue?: number): this {
    this.overflowValue = overflowValue;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.overflowValue = this.overflowValue;
    return data;
  }

}

export class RaiseMaxValueByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetMaxValueByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverIntervalByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverValueByUserIdResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetMaxValueByStatusResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverIntervalByStatusResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverValueByStatusResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteStaminaByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class RecoverStaminaByStampSheetResult implements IResult {
  /** スタミナ */
  public item?: Stamina;
  /** スタミナ値の上限を超えて受け取れずに GS2-Inbox に転送したスタミナ値 */
  public overflowValue?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
      this.overflowValue = data.overflowValue;
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public withOverflowValue(overflowValue?: number): this {
    this.overflowValue = overflowValue;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.overflowValue = this.overflowValue;
    return data;
  }

}

export class RaiseMaxValueByStampSheetResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetMaxValueByStampSheetResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverIntervalByStampSheetResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SetRecoverValueByStampSheetResult implements IResult {
  /** スタミナ */
  public item?: Stamina;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
    }
  }

  public withItem(item?: Stamina): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class ConsumeStaminaByStampTaskResult implements IResult {
  /** スタミナ */
  public item?: Stamina;
  /** スタンプタスクの実行結果を記録したコンテキスト */
  public newContextStack?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Stamina(data.item);
      this.newContextStack = data.newContextStack;
    }
  }

  public withItem(item?: Stamina): this {
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
