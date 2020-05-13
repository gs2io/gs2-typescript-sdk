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

import { Gs2Request } from '../core/model';

export class DescribeUsersRequest extends Gs2Request {
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateUserRequest extends Gs2Request {
  /** ユーザー名 */
  public name?: string;
  /** ユーザの説明 */
  public description?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    return data;
  }

}

export class UpdateUserRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** ユーザの説明 */
  public description?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.description = this.description;
    return data;
  }

}

export class GetUserRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    return data;
  }

}

export class DeleteUserRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    return data;
  }

}

export class DescribeSecurityPoliciesRequest extends Gs2Request {
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class DescribeCommonSecurityPoliciesRequest extends Gs2Request {
  /** オーナーID */
  public ownerId?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId as string;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.ownerId = this.ownerId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateSecurityPolicyRequest extends Gs2Request {
  /** セキュリティポリシー名 */
  public name?: string;
  /** セキュリティポリシーの説明 */
  public description?: string;
  /** ポリシードキュメント */
  public policy?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.policy !== undefined) {
      this.policy = data.policy as string;
    } else {
      this.policy = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withPolicy(policy?: string): this {
    this.policy = policy as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    data.policy = this.policy;
    return data;
  }

}

export class UpdateSecurityPolicyRequest extends Gs2Request {
  /** セキュリティポリシー名 */
  public securityPolicyName?: string;
  /** セキュリティポリシーの説明 */
  public description?: string;
  /** ポリシードキュメント */
  public policy?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.securityPolicyName !== undefined) {
      this.securityPolicyName = data.securityPolicyName as string;
    } else {
      this.securityPolicyName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.policy !== undefined) {
      this.policy = data.policy as string;
    } else {
      this.policy = undefined;
    }
  }

  public withSecurityPolicyName(securityPolicyName?: string): this {
    this.securityPolicyName = securityPolicyName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withPolicy(policy?: string): this {
    this.policy = policy as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.securityPolicyName = this.securityPolicyName;
    data.description = this.description;
    data.policy = this.policy;
    return data;
  }

}

export class GetSecurityPolicyRequest extends Gs2Request {
  /** セキュリティポリシー名 */
  public securityPolicyName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.securityPolicyName !== undefined) {
      this.securityPolicyName = data.securityPolicyName as string;
    } else {
      this.securityPolicyName = undefined;
    }
  }

  public withSecurityPolicyName(securityPolicyName?: string): this {
    this.securityPolicyName = securityPolicyName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.securityPolicyName = this.securityPolicyName;
    return data;
  }

}

export class DeleteSecurityPolicyRequest extends Gs2Request {
  /** セキュリティポリシー名 */
  public securityPolicyName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.securityPolicyName !== undefined) {
      this.securityPolicyName = data.securityPolicyName as string;
    } else {
      this.securityPolicyName = undefined;
    }
  }

  public withSecurityPolicyName(securityPolicyName?: string): this {
    this.securityPolicyName = securityPolicyName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.securityPolicyName = this.securityPolicyName;
    return data;
  }

}

export class DescribeIdentifiersRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateIdentifierRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    return data;
  }

}

export class GetIdentifierRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** クライアントID */
  public clientId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.clientId !== undefined) {
      this.clientId = data.clientId as string;
    } else {
      this.clientId = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withClientId(clientId?: string): this {
    this.clientId = clientId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.clientId = this.clientId;
    return data;
  }

}

export class DeleteIdentifierRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** クライアントID */
  public clientId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.clientId !== undefined) {
      this.clientId = data.clientId as string;
    } else {
      this.clientId = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withClientId(clientId?: string): this {
    this.clientId = clientId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.clientId = this.clientId;
    return data;
  }

}

export class GetHasSecurityPolicyRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    return data;
  }

}

export class AttachSecurityPolicyRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** 割り当てるセキュリティポリシーのGRN */
  public securityPolicyId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.securityPolicyId !== undefined) {
      this.securityPolicyId = data.securityPolicyId as string;
    } else {
      this.securityPolicyId = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withSecurityPolicyId(securityPolicyId?: string): this {
    this.securityPolicyId = securityPolicyId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.securityPolicyId = this.securityPolicyId;
    return data;
  }

}

export class DetachSecurityPolicyRequest extends Gs2Request {
  /** ユーザー名 */
  public userName?: string;
  /** 剥奪するセキュリティポリシーのGRN */
  public securityPolicyId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userName !== undefined) {
      this.userName = data.userName as string;
    } else {
      this.userName = undefined;
    }
    if (data && data.securityPolicyId !== undefined) {
      this.securityPolicyId = data.securityPolicyId as string;
    } else {
      this.securityPolicyId = undefined;
    }
  }

  public withUserName(userName?: string): this {
    this.userName = userName as string;
    return this;
  }

  public withSecurityPolicyId(securityPolicyId?: string): this {
    this.securityPolicyId = securityPolicyId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userName = this.userName;
    data.securityPolicyId = this.securityPolicyId;
    return data;
  }

}

export class LoginRequest extends Gs2Request {
  /** クライアントID */
  public clientId?: string;
  /** クライアントシークレット */
  public clientSecret?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.clientId !== undefined) {
      this.clientId = data.clientId as string;
    } else {
      this.clientId = undefined;
    }
    if (data && data.clientSecret !== undefined) {
      this.clientSecret = data.clientSecret as string;
    } else {
      this.clientSecret = undefined;
    }
  }

  public withClientId(clientId?: string): this {
    this.clientId = clientId as string;
    return this;
  }

  public withClientSecret(clientSecret?: string): this {
    this.clientSecret = clientSecret as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.clientId = this.clientId;
    data.clientSecret = this.clientSecret;
    return data;
  }

}
