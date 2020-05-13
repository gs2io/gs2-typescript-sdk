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
  FormModel,
  FormModelMaster,
  MoldModel,
  MoldModelMaster,
  CurrentFormMaster,
  Mold,
  Form,
  Slot,
  ResponseCache,
  SlotModel,
  SlotWithSignature,
  AcquireActionConfig,
  Config,
  GitHubCheckoutSetting,
  ScriptSetting,
  LogSetting,
  AcquireAction,
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

export class DescribeFormModelMastersResult implements IResult {
  /** フォームマスターのリスト */
  public items?: FormModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new FormModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: FormModelMaster[]): this {
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

export class CreateFormModelMasterResult implements IResult {
  /** 作成したフォームマスター */
  public item?: FormModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FormModelMaster(data.item);
    }
  }

  public withItem(item?: FormModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetFormModelMasterResult implements IResult {
  /** フォームマスター */
  public item?: FormModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FormModelMaster(data.item);
    }
  }

  public withItem(item?: FormModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateFormModelMasterResult implements IResult {
  /** 更新したフォームマスター */
  public item?: FormModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FormModelMaster(data.item);
    }
  }

  public withItem(item?: FormModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteFormModelMasterResult implements IResult {
  /** 削除したフォームマスター */
  public item?: FormModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new FormModelMaster(data.item);
    }
  }

  public withItem(item?: FormModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMoldModelsResult implements IResult {
  /** フォームの保存領域のリスト */
  public items?: MoldModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MoldModel(item);
      });
    }
  }

  public withItems(items?: MoldModel[]): this {
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

export class GetMoldModelResult implements IResult {
  /** フォームの保存領域 */
  public item?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MoldModel(data.item);
    }
  }

  public withItem(item?: MoldModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMoldModelMastersResult implements IResult {
  /** フォームの保存領域マスターのリスト */
  public items?: MoldModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new MoldModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: MoldModelMaster[]): this {
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

export class CreateMoldModelMasterResult implements IResult {
  /** 作成したフォームの保存領域マスター */
  public item?: MoldModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MoldModelMaster(data.item);
    }
  }

  public withItem(item?: MoldModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetMoldModelMasterResult implements IResult {
  /** フォームの保存領域マスター */
  public item?: MoldModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MoldModelMaster(data.item);
    }
  }

  public withItem(item?: MoldModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateMoldModelMasterResult implements IResult {
  /** 更新したフォームの保存領域マスター */
  public item?: MoldModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MoldModelMaster(data.item);
    }
  }

  public withItem(item?: MoldModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMoldModelMasterResult implements IResult {
  /** 削除したフォームの保存領域マスター */
  public item?: MoldModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new MoldModelMaster(data.item);
    }
  }

  public withItem(item?: MoldModelMaster): this {
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
  /** 現在有効なフォーム設定 */
  public item?: CurrentFormMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentFormMaster(data.item);
    }
  }

  public withItem(item?: CurrentFormMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentFormMasterResult implements IResult {
  /** 現在有効なフォーム設定 */
  public item?: CurrentFormMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentFormMaster(data.item);
    }
  }

  public withItem(item?: CurrentFormMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentFormMasterResult implements IResult {
  /** 更新した現在有効なフォーム設定 */
  public item?: CurrentFormMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentFormMaster(data.item);
    }
  }

  public withItem(item?: CurrentFormMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentFormMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なフォーム設定 */
  public item?: CurrentFormMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentFormMaster(data.item);
    }
  }

  public withItem(item?: CurrentFormMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeMoldsResult implements IResult {
  /** 保存したフォームのリスト */
  public items?: Mold[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Mold(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Mold[]): this {
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

export class DescribeMoldsByUserIdResult implements IResult {
  /** 保存したフォームのリスト */
  public items?: Mold[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Mold(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Mold[]): this {
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

export class GetMoldResult implements IResult {
  /** 保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class GetMoldByUserIdResult implements IResult {
  /** 保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class SetMoldCapacityByUserIdResult implements IResult {
  /** キャパシティを更新した保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class AddMoldCapacityByUserIdResult implements IResult {
  /** キャパシティを更新した保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class DeleteMoldResult implements IResult {
  /** 保存したフォーム */
  public item?: Mold;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteMoldByUserIdResult implements IResult {
  /** 保存したフォーム */
  public item?: Mold;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AddCapacityByStampSheetResult implements IResult {
  /** キャパシティ加算後の保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class SetCapacityByStampSheetResult implements IResult {
  /** 更新後の保存したフォーム */
  public item?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Mold(data.item);
      this.moldModel = new MoldModel(data.moldModel);
    }
  }

  public withItem(item?: Mold): this {
    this.item = item;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.moldModel = this.moldModel;
    return data;
  }

}

export class DescribeFormsResult implements IResult {
  /** フォームのリスト */
  public items?: Form[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Form(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Form[]): this {
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

export class DescribeFormsByUserIdResult implements IResult {
  /** フォームのリスト */
  public items?: Form[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Form(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Form[]): this {
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

export class GetFormResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class GetFormByUserIdResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class GetFormWithSignatureResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 署名対象の値 */
  public body?: string;
  /** 署名 */
  public signature?: string;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.body = data.body;
      this.signature = data.signature;
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
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

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.body = this.body;
    data.signature = this.signature;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class GetFormWithSignatureByUserIdResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 署名対象の値 */
  public body?: string;
  /** 署名 */
  public signature?: string;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.body = data.body;
      this.signature = data.signature;
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
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

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.body = this.body;
    data.signature = this.signature;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class SetFormByUserIdResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class SetFormWithSignatureResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class AcquireActionsToFormPropertiesResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** スタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.stampSheet = this.stampSheet;
    return data;
  }

}

export class DeleteFormResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class DeleteFormByUserIdResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** フォームの保存領域 */
  public moldModel?: MoldModel;
  /** フォームモデル */
  public formModel?: FormModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.moldModel = new MoldModel(data.moldModel);
      this.formModel = new FormModel(data.formModel);
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withMoldModel(moldModel?: MoldModel): this {
    this.moldModel = moldModel;
    return this;
  }

  public withFormModel(formModel?: FormModel): this {
    this.formModel = formModel;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.moldModel = this.moldModel;
    data.formModel = this.formModel;
    return data;
  }

}

export class AcquireActionToFormPropertiesByStampSheetResult implements IResult {
  /** フォーム */
  public item?: Form;
  /** 保存したフォーム */
  public mold?: Mold;
  /** スタンプシート */
  public stampSheet?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Form(data.item);
      this.mold = new Mold(data.mold);
      this.stampSheet = data.stampSheet;
    }
  }

  public withItem(item?: Form): this {
    this.item = item;
    return this;
  }

  public withMold(mold?: Mold): this {
    this.mold = mold;
    return this;
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.mold = this.mold;
    data.stampSheet = this.stampSheet;
    return data;
  }

}
