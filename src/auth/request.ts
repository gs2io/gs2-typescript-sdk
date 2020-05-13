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
  AccessToken,
} from './model';

import { Gs2Request } from '../core/model';

export class LoginRequest extends Gs2Request {
  /** ユーザーID */
  public userId?: string;
  /** 現在時刻に対する補正値（現在時刻を起点とした秒数） */
  public timeOffset?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.timeOffset !== undefined) {
      this.timeOffset = data.timeOffset as number;
    } else {
      this.timeOffset = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withTimeOffset(timeOffset?: number): this {
    this.timeOffset = timeOffset as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.timeOffset = this.timeOffset;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class LoginBySignatureRequest extends Gs2Request {
  /** ユーザーID */
  public userId?: string;
  /** 署名の作成に使用した暗号鍵 のGRN */
  public keyId?: string;
  /** アカウント認証情報の署名対象 */
  public body?: string;
  /** 署名 */
  public signature?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.body !== undefined) {
      this.body = data.body as string;
    } else {
      this.body = undefined;
    }
    if (data && data.signature !== undefined) {
      this.signature = data.signature as string;
    } else {
      this.signature = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withBody(body?: string): this {
    this.body = body as string;
    return this;
  }

  public withSignature(signature?: string): this {
    this.signature = signature as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.userId = this.userId;
    data.keyId = this.keyId;
    data.body = this.body;
    data.signature = this.signature;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
