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

import IModel from '../core/interface/IModel';


/**
 * アクセストークン
 *
 * @author Game Server Services, Inc.
 *
 */
export class AccessToken implements IModel {
  /** オーナーID */
  public ownerId?: string;
  /** アクセストークン */
  public token?: string;
  /** ユーザーID */
  public userId?: string;
  /** 有効期限 */
  public expire?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.token !== undefined) {
      this.token = data.token;
    } else {
      this.token = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.expire !== undefined) {
      this.expire = data.expire;
    } else {
      this.expire = 0;
    }
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
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
    data.ownerId = this.ownerId;
    data.token = this.token;
    data.userId = this.userId;
    data.expire = this.expire;
    return data;
  }

}
