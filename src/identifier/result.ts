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
  User,
  SecurityPolicy,
  Identifier,
  AttachSecurityPolicy,
  ProjectToken,
} from './model';

import IResult from '@/gs2/core/interface/IResult';

export class DescribeUsersResult implements IResult {
  /** ユーザのリスト */
  public items?: User[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new User(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: User[]): this {
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

export class CreateUserResult implements IResult {
  /** 作成したユーザ */
  public item?: User;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new User(data.item);
    }
  }

  public withItem(item?: User): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateUserResult implements IResult {
  /** 更新後のユーザ */
  public item?: User;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new User(data.item);
    }
  }

  public withItem(item?: User): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetUserResult implements IResult {
  /** ユーザ */
  public item?: User;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new User(data.item);
    }
  }

  public withItem(item?: User): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteUserResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeSecurityPoliciesResult implements IResult {
  /** セキュリティポリシーのリスト */
  public items?: SecurityPolicy[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SecurityPolicy(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: SecurityPolicy[]): this {
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

export class DescribeCommonSecurityPoliciesResult implements IResult {
  /** セキュリティポリシーのリスト */
  public items?: SecurityPolicy[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SecurityPolicy(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: SecurityPolicy[]): this {
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

export class CreateSecurityPolicyResult implements IResult {
  /** 作成したセキュリティポリシー */
  public item?: SecurityPolicy;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SecurityPolicy(data.item);
    }
  }

  public withItem(item?: SecurityPolicy): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateSecurityPolicyResult implements IResult {
  /** 更新後のセキュリティポリシー */
  public item?: SecurityPolicy;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SecurityPolicy(data.item);
    }
  }

  public withItem(item?: SecurityPolicy): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetSecurityPolicyResult implements IResult {
  /** セキュリティポリシー */
  public item?: SecurityPolicy;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new SecurityPolicy(data.item);
    }
  }

  public withItem(item?: SecurityPolicy): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteSecurityPolicyResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeIdentifiersResult implements IResult {
  /** クレデンシャルのリスト */
  public items?: Identifier[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Identifier(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Identifier[]): this {
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

export class CreateIdentifierResult implements IResult {
  /** 作成したクレデンシャル */
  public item?: Identifier;
  /** クライアントシークレット */
  public clientSecret?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Identifier(data.item);
      this.clientSecret = data.clientSecret;
    }
  }

  public withItem(item?: Identifier): this {
    this.item = item;
    return this;
  }

  public withClientSecret(clientSecret?: string): this {
    this.clientSecret = clientSecret;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.clientSecret = this.clientSecret;
    return data;
  }

}

export class GetIdentifierResult implements IResult {
  /** クレデンシャル */
  public item?: Identifier;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Identifier(data.item);
    }
  }

  public withItem(item?: Identifier): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteIdentifierResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class GetHasSecurityPolicyResult implements IResult {
  /** セキュリティポリシーのリスト */
  public items?: SecurityPolicy[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SecurityPolicy(item);
      });
    }
  }

  public withItems(items?: SecurityPolicy[]): this {
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

export class AttachSecurityPolicyResult implements IResult {
  /** 新しくユーザーに割り当てたセキュリティポリシーのリスト */
  public items?: SecurityPolicy[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SecurityPolicy(item);
      });
    }
  }

  public withItems(items?: SecurityPolicy[]): this {
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

export class DetachSecurityPolicyResult implements IResult {
  /** 剥奪したあとユーザーに引き続き割り当てられているセキュリティポリシーのリスト */
  public items?: SecurityPolicy[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new SecurityPolicy(item);
      });
    }
  }

  public withItems(items?: SecurityPolicy[]): this {
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

export class LoginResult implements IResult {
  /** プロジェクトトークン */
  public accessToken?: string;
  /** Bearer */
  public tokenType?: string;
  /** 有効期間(秒) */
  public expiresIn?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.accessToken = data.accessToken;
      this.tokenType = data.tokenType;
      this.expiresIn = data.expiresIn;
    }
  }

  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public withTokenType(tokenType?: string): this {
    this.tokenType = tokenType;
    return this;
  }

  public withExpiresIn(expiresIn?: number): this {
    this.expiresIn = expiresIn;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accessToken = this.accessToken;
    data.tokenType = this.tokenType;
    data.expiresIn = this.expiresIn;
    return data;
  }

}
