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

import IModel from '@/gs2/core/interface/IModel';


/**
 * ユーザ
 *
 * @author Game Server Services, Inc.
 *
 */
export class User implements IModel {

  public static createGrn(ownerId: string, userName: string): string {
    return 'grn:gs2::{ownerId}:identifier:user:{userName}'
      .replace('{ownerId}', ownerId)
      .replace('{userName}', userName);
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2::{ownerId}:identifier:user:{userName}';
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{userName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getUserNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2::{ownerId}:identifier:user:{userName}';
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{userName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }
  /** ユーザ */
  public userId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** ユーザー名 */
  public name?: string;
  /** ユーザの説明 */
  public description?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
    } else {
      this.description = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.ownerId = this.ownerId;
    data.name = this.name;
    data.description = this.description;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * セキュリティポリシー
 *
 * @author Game Server Services, Inc.
 *
 */
export class SecurityPolicy implements IModel {

  public static createGrn(ownerId: string, securityPolicyName: string): string {
    return 'grn:gs2::{ownerId}:identifier:securityPolicy:{securityPolicyName}'
      .replace('{ownerId}', ownerId)
      .replace('{securityPolicyName}', securityPolicyName);
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2::{ownerId}:identifier:securityPolicy:{securityPolicyName}';
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{securityPolicyName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getSecurityPolicyNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2::{ownerId}:identifier:securityPolicy:{securityPolicyName}';
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{securityPolicyName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }
  /** セキュリティポリシー */
  public securityPolicyId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** セキュリティポリシー名 */
  public name?: string;
  /** セキュリティポリシーの説明 */
  public description?: string;
  /** ポリシードキュメント */
  public policy?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.securityPolicyId !== undefined) {
      this.securityPolicyId = data.securityPolicyId;
    } else {
      this.securityPolicyId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description;
    } else {
      this.description = undefined;
    }
    if (data && data.policy !== undefined) {
      this.policy = data.policy;
    } else {
      this.policy = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withSecurityPolicyId(securityPolicyId?: string): this {
    this.securityPolicyId = securityPolicyId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description;
    return this;
  }

  public withPolicy(policy?: string): this {
    this.policy = policy;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.securityPolicyId = this.securityPolicyId;
    data.ownerId = this.ownerId;
    data.name = this.name;
    data.description = this.description;
    data.policy = this.policy;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * クレデンシャル
 *
 * @author Game Server Services, Inc.
 *
 */
export class Identifier implements IModel {
  /** オーナーID */
  public ownerId?: string;
  /** クライアントID */
  public clientId?: string;
  /** ユーザー名 */
  public userName?: string;
  /** クライアントシークレット */
  public clientSecret?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.clientId !== undefined) {
      this.clientId = data.clientId;
    } else {
      this.clientId = undefined;
    }
    if (data && data.userName !== undefined) {
      this.userName = data.userName;
    } else {
      this.userName = undefined;
    }
    if (data && data.clientSecret !== undefined) {
      this.clientSecret = data.clientSecret;
    } else {
      this.clientSecret = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withClientId(clientId?: string): this {
    this.clientId = clientId;
    return this;
  }

  public withUserName(userName?: string): this {
    this.userName = userName;
    return this;
  }

  public withClientSecret(clientSecret?: string): this {
    this.clientSecret = clientSecret;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.ownerId = this.ownerId;
    data.clientId = this.clientId;
    data.userName = this.userName;
    data.clientSecret = this.clientSecret;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * 割り当てられたセキュリティポリシー
 *
 * @author Game Server Services, Inc.
 *
 */
export class AttachSecurityPolicy implements IModel {
  /** ユーザ のGRN */
  public userId?: string;
  /** セキュリティポリシー のGRNのリスト */
  public securityPolicyIds?: string[];
  /** 作成日時 */
  public attachedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.securityPolicyIds !== undefined) {
      this.securityPolicyIds = data.securityPolicyIds as string[];
      for (let i = 0; i < data.securityPolicyIds.length; i++) {
            this.securityPolicyIds[i] = data.securityPolicyIds[i];
      }
    } else {
      this.securityPolicyIds = undefined;
    }
    if (data && data.attachedAt !== undefined) {
      this.attachedAt = data.attachedAt;
    } else {
      this.attachedAt = 0;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withSecurityPolicyIds(securityPolicyIds?: string[]): this {
    this.securityPolicyIds = securityPolicyIds as string[];
    if (securityPolicyIds) {
      for (let i = 0; i < securityPolicyIds!.length; i++) {
          this.securityPolicyIds[i] = String(securityPolicyIds![i]);
      }
    }
    return this;
  }

  public withAttachedAt(attachedAt?: number): this {
    this.attachedAt = attachedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.securityPolicyIds = this.securityPolicyIds;
    data.attachedAt = this.attachedAt;
    return data;
  }

}


/**
 * プロジェクトトークン
 *
 * @author Game Server Services, Inc.
 *
 */
export class ProjectToken implements IModel {
  /** プロジェクトトークン */
  public token?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.token !== undefined) {
      this.token = data.token;
    } else {
      this.token = undefined;
    }
  }

  public withToken(token?: string): this {
    this.token = token;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.token = this.token;
    return data;
  }

}
