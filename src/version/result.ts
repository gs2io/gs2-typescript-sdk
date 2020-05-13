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
  VersionModelMaster,
  Version,
  VersionModel,
  AcceptVersion,
  Status,
  TargetVersion,
  SignTargetVersion,
  ResponseCache,
  CurrentVersionMaster,
  ScriptSetting,
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

export class DescribeVersionModelMastersResult implements IResult {
  /** バージョンマスターのリスト */
  public items?: VersionModelMaster[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new VersionModelMaster(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: VersionModelMaster[]): this {
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

export class CreateVersionModelMasterResult implements IResult {
  /** 作成したバージョンマスター */
  public item?: VersionModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new VersionModelMaster(data.item);
    }
  }

  public withItem(item?: VersionModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetVersionModelMasterResult implements IResult {
  /** バージョンマスター */
  public item?: VersionModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new VersionModelMaster(data.item);
    }
  }

  public withItem(item?: VersionModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateVersionModelMasterResult implements IResult {
  /** 更新したバージョンマスター */
  public item?: VersionModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new VersionModelMaster(data.item);
    }
  }

  public withItem(item?: VersionModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteVersionModelMasterResult implements IResult {
  /** 削除したバージョンマスター */
  public item?: VersionModelMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new VersionModelMaster(data.item);
    }
  }

  public withItem(item?: VersionModelMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeVersionModelsResult implements IResult {
  /** バージョン設定のリスト */
  public items?: VersionModel[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new VersionModel(item);
      });
    }
  }

  public withItems(items?: VersionModel[]): this {
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

export class GetVersionModelResult implements IResult {
  /** バージョン設定 */
  public item?: VersionModel;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new VersionModel(data.item);
    }
  }

  public withItem(item?: VersionModel): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeAcceptVersionsResult implements IResult {
  /** 承認したバージョンのリスト */
  public items?: AcceptVersion[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new AcceptVersion(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: AcceptVersion[]): this {
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

export class DescribeAcceptVersionsByUserIdResult implements IResult {
  /** 承認したバージョンのリスト */
  public items?: AcceptVersion[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new AcceptVersion(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: AcceptVersion[]): this {
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

export class AcceptResult implements IResult {
  /** 承認したバージョン */
  public item?: AcceptVersion;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new AcceptVersion(data.item);
    }
  }

  public withItem(item?: AcceptVersion): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class AcceptByUserIdResult implements IResult {
  /** 承認したバージョン */
  public item?: AcceptVersion;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new AcceptVersion(data.item);
    }
  }

  public withItem(item?: AcceptVersion): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetAcceptVersionResult implements IResult {
  /** 承認したバージョン */
  public item?: AcceptVersion;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new AcceptVersion(data.item);
    }
  }

  public withItem(item?: AcceptVersion): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetAcceptVersionByUserIdResult implements IResult {
  /** 承認したバージョン */
  public item?: AcceptVersion;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new AcceptVersion(data.item);
    }
  }

  public withItem(item?: AcceptVersion): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteAcceptVersionResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DeleteAcceptVersionByUserIdResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class CheckVersionResult implements IResult {
  /** プロジェクトトークン */
  public projectToken?: string;
  /** バージョンの検証結果のリスト */
  public warnings?: Status[];
  /** バージョンの検証結果のリスト */
  public errors?: Status[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.projectToken = data.projectToken;
      this.warnings = data.warnings.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
      this.errors = data.errors.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
    }
  }

  public withProjectToken(projectToken?: string): this {
    this.projectToken = projectToken;
    return this;
  }

  public withWarnings(warnings?: Status[]): this {
    this.warnings = warnings;
    return this;
  }

  public withErrors(errors?: Status[]): this {
    this.errors = errors;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.projectToken = this.projectToken;
    if (this.warnings) {
      data.warnings = this.warnings.map((item) => item.toDict());
    }
    if (this.errors) {
      data.errors = this.errors.map((item) => item.toDict());
    }
    return data;
  }

}

export class CheckVersionByUserIdResult implements IResult {
  /** プロジェクトトークン */
  public projectToken?: string;
  /** バージョンの検証結果のリスト */
  public warnings?: Status[];
  /** バージョンの検証結果のリスト */
  public errors?: Status[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.projectToken = data.projectToken;
      this.warnings = data.warnings.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
      this.errors = data.errors.map((item: { [key: string]: any }) => {
        return new Status(item);
      });
    }
  }

  public withProjectToken(projectToken?: string): this {
    this.projectToken = projectToken;
    return this;
  }

  public withWarnings(warnings?: Status[]): this {
    this.warnings = warnings;
    return this;
  }

  public withErrors(errors?: Status[]): this {
    this.errors = errors;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.projectToken = this.projectToken;
    if (this.warnings) {
      data.warnings = this.warnings.map((item) => item.toDict());
    }
    if (this.errors) {
      data.errors = this.errors.map((item) => item.toDict());
    }
    return data;
  }

}

export class CalculateSignatureResult implements IResult {
  /** ボディ */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.body = data.body;
      this.signature = data.signature;
    }
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
    data.body = this.body;
    data.signature = this.signature;
    return data;
  }

}

export class ExportMasterResult implements IResult {
  /** 現在有効なバージョン */
  public item?: CurrentVersionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentVersionMaster(data.item);
    }
  }

  public withItem(item?: CurrentVersionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCurrentVersionMasterResult implements IResult {
  /** 現在有効なバージョン */
  public item?: CurrentVersionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentVersionMaster(data.item);
    }
  }

  public withItem(item?: CurrentVersionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentVersionMasterResult implements IResult {
  /** 更新した現在有効なバージョン */
  public item?: CurrentVersionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentVersionMaster(data.item);
    }
  }

  public withItem(item?: CurrentVersionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateCurrentVersionMasterFromGitHubResult implements IResult {
  /** 更新した現在有効なバージョン */
  public item?: CurrentVersionMaster;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new CurrentVersionMaster(data.item);
    }
  }

  public withItem(item?: CurrentVersionMaster): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
