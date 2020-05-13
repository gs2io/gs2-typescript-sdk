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
  Account,
  Project,
  BillingMethod,
  Receipt,
  Billing,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

export class CreateAccountResult implements IResult {
  /** 作成したGS2アカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class VerifyResult implements IResult {
  /** 有効化したGS2アカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class SignInResult implements IResult {
  /** サインインしたGS2アカウント */
  public item?: Account;
  /** GS2-Console にアクセスするのに使用するトークン */
  public accountToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
      this.accountToken = data.accountToken;
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.accountToken = this.accountToken;
    return data;
  }

}

export class IssueAccountTokenResult implements IResult {
  /** GS2-Console にアクセスするのに使用するトークン */
  public accountToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.accountToken = data.accountToken;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    return data;
  }

}

export class ForgetResult implements IResult {
  /** パスワードを再発行するために必要なトークン */
  public issuePasswordToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.issuePasswordToken = data.issuePasswordToken;
    }
  }

  public withIssuePasswordToken(issuePasswordToken?: string): this {
    this.issuePasswordToken = issuePasswordToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.issuePasswordToken = this.issuePasswordToken;
    return data;
  }

}

export class IssuePasswordResult implements IResult {
  /** 新しいパスワード */
  public newPassword?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.newPassword = data.newPassword;
    }
  }

  public withNewPassword(newPassword?: string): this {
    this.newPassword = newPassword;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.newPassword = this.newPassword;
    return data;
  }

}

export class UpdateAccountResult implements IResult {
  /** 更新したGS2アカウント */
  public item?: Account;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Account(data.item);
    }
  }

  public withItem(item?: Account): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteAccountResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeProjectsResult implements IResult {
  /** プロジェクトのリスト */
  public items?: Project[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Project(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Project[]): this {
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

export class CreateProjectResult implements IResult {
  /** 作成したプロジェクト */
  public item?: Project;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Project(data.item);
    }
  }

  public withItem(item?: Project): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetProjectResult implements IResult {
  /** プロジェクト */
  public item?: Project;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Project(data.item);
    }
  }

  public withItem(item?: Project): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetProjectTokenResult implements IResult {
  /** サインインしたプロジェクト */
  public item?: Project;
  /** オーナーID */
  public ownerId?: string;
  /** プロジェクトトークン */
  public projectToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Project(data.item);
      this.ownerId = data.ownerId;
      this.projectToken = data.projectToken;
    }
  }

  public withItem(item?: Project): this {
    this.item = item;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withProjectToken(projectToken?: string): this {
    this.projectToken = projectToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.ownerId = this.ownerId;
    data.projectToken = this.projectToken;
    return data;
  }

}

export class UpdateProjectResult implements IResult {
  /** 更新したプロジェクト */
  public item?: Project;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Project(data.item);
    }
  }

  public withItem(item?: Project): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteProjectResult implements IResult {
  /** 削除したプロジェクト */
  public item?: Project;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Project(data.item);
    }
  }

  public withItem(item?: Project): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeBillingMethodsResult implements IResult {
  /** 支払い方法のリスト */
  public items?: BillingMethod[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new BillingMethod(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: BillingMethod[]): this {
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

export class CreateBillingMethodResult implements IResult {
  /** 作成した支払い方法 */
  public item?: BillingMethod;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BillingMethod(data.item);
    }
  }

  public withItem(item?: BillingMethod): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetBillingMethodResult implements IResult {
  /** 支払い方法 */
  public item?: BillingMethod;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BillingMethod(data.item);
    }
  }

  public withItem(item?: BillingMethod): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateBillingMethodResult implements IResult {
  /** 更新した支払い方法 */
  public item?: BillingMethod;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BillingMethod(data.item);
    }
  }

  public withItem(item?: BillingMethod): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteBillingMethodResult implements IResult {
  /** 削除した支払い方法 */
  public item?: BillingMethod;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BillingMethod(data.item);
    }
  }

  public withItem(item?: BillingMethod): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeReceiptsResult implements IResult {
  /** 領収書のリスト */
  public items?: Receipt[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Receipt(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Receipt[]): this {
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

export class DescribeBillingsResult implements IResult {
  /** 利用状況のリスト */
  public items?: Billing[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Billing(item);
      });
    }
  }

  public withItems(items?: Billing[]): this {
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
