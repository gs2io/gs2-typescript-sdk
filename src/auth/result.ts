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

import IResult from '../core/interface/IResult';

export class LoginResult implements IResult {
  /** アクセストークン */
  public token?: string;
  /** ユーザーID */
  public userId?: string;
  /** 有効期限 */
  public expire?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.token = data.token;
      this.userId = data.userId;
      this.expire = data.expire;
    }
  }

  public withToken(token?: string): this {
    this.token = token;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withExpire(expire?: number): this {
    this.expire = expire;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.token = this.token;
    data.userId = this.userId;
    data.expire = this.expire;
    return data;
  }

}

export class LoginBySignatureResult implements IResult {
  /** アクセストークン */
  public token?: string;
  /** ユーザーID */
  public userId?: string;
  /** 有効期限 */
  public expire?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.token = data.token;
      this.userId = data.userId;
      this.expire = data.expire;
    }
  }

  public withToken(token?: string): this {
    this.token = token;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withExpire(expire?: number): this {
    this.expire = expire;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.token = this.token;
    data.userId = this.userId;
    data.expire = this.expire;
    return data;
  }

}
