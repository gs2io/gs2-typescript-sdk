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
  Account,
  TakeOver,
  ResponseCache,
  ScriptSetting,
  LogSetting,
} from './model';

import { Gs2Request } from '../core/model';

export class DescribeNamespacesRequest extends Gs2Request {
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

export class CreateNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public name?: string;
  /** 説明文 */
  public description?: string;
  /** アカウント引き継ぎ時にパスワードを変更するか */
  public changePasswordIfTakeOver?: boolean;
  /** アカウント新規作成したときに実行するスクリプト */
  public createAccountScript?: ScriptSetting;
  /** 認証したときに実行するスクリプト */
  public authenticationScript?: ScriptSetting;
  /** 引き継ぎ情報登録したときに実行するスクリプト */
  public createTakeOverScript?: ScriptSetting;
  /** 引き継ぎ実行したときに実行するスクリプト */
  public doTakeOverScript?: ScriptSetting;
  /** ログの出力設定 */
  public logSetting?: LogSetting;

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
    if (data && data.changePasswordIfTakeOver !== undefined) {
      this.changePasswordIfTakeOver = data.changePasswordIfTakeOver as boolean;
    } else {
      this.changePasswordIfTakeOver = undefined;
    }
    if (data && data.createAccountScript !== undefined && Object.keys(data.createAccountScript).length > 0) {
      this.createAccountScript = new ScriptSetting(data.createAccountScript);
    } else {
      this.createAccountScript = undefined;
    }
    if (data && data.authenticationScript !== undefined && Object.keys(data.authenticationScript).length > 0) {
      this.authenticationScript = new ScriptSetting(data.authenticationScript);
    } else {
      this.authenticationScript = undefined;
    }
    if (data && data.createTakeOverScript !== undefined && Object.keys(data.createTakeOverScript).length > 0) {
      this.createTakeOverScript = new ScriptSetting(data.createTakeOverScript);
    } else {
      this.createTakeOverScript = undefined;
    }
    if (data && data.doTakeOverScript !== undefined && Object.keys(data.doTakeOverScript).length > 0) {
      this.doTakeOverScript = new ScriptSetting(data.doTakeOverScript);
    } else {
      this.doTakeOverScript = undefined;
    }
    if (data && data.logSetting !== undefined && Object.keys(data.logSetting).length > 0) {
      this.logSetting = new LogSetting(data.logSetting);
    } else {
      this.logSetting = undefined;
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

  public withChangePasswordIfTakeOver(changePasswordIfTakeOver?: boolean): this {
    this.changePasswordIfTakeOver = changePasswordIfTakeOver as boolean;
    return this;
  }

  public withCreateAccountScript(createAccountScript?: ScriptSetting): this {
    this.createAccountScript = createAccountScript as ScriptSetting;
    return this;
  }

  public withAuthenticationScript(authenticationScript?: ScriptSetting): this {
    this.authenticationScript = authenticationScript as ScriptSetting;
    return this;
  }

  public withCreateTakeOverScript(createTakeOverScript?: ScriptSetting): this {
    this.createTakeOverScript = createTakeOverScript as ScriptSetting;
    return this;
  }

  public withDoTakeOverScript(doTakeOverScript?: ScriptSetting): this {
    this.doTakeOverScript = doTakeOverScript as ScriptSetting;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    data.changePasswordIfTakeOver = this.changePasswordIfTakeOver;
    if (this.createAccountScript) {
      data.createAccountScript = this.createAccountScript.toDict();
    }
    if (this.authenticationScript) {
      data.authenticationScript = this.authenticationScript.toDict();
    }
    if (this.createTakeOverScript) {
      data.createTakeOverScript = this.createTakeOverScript.toDict();
    }
    if (this.doTakeOverScript) {
      data.doTakeOverScript = this.doTakeOverScript.toDict();
    }
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class GetNamespaceStatusRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class GetNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class UpdateNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** 説明文 */
  public description?: string;
  /** アカウント引き継ぎ時にパスワードを変更するか */
  public changePasswordIfTakeOver?: boolean;
  /** アカウント新規作成したときに実行するスクリプト */
  public createAccountScript?: ScriptSetting;
  /** 認証したときに実行するスクリプト */
  public authenticationScript?: ScriptSetting;
  /** 引き継ぎ情報登録したときに実行するスクリプト */
  public createTakeOverScript?: ScriptSetting;
  /** 引き継ぎ実行したときに実行するスクリプト */
  public doTakeOverScript?: ScriptSetting;
  /** ログの出力設定 */
  public logSetting?: LogSetting;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.changePasswordIfTakeOver !== undefined) {
      this.changePasswordIfTakeOver = data.changePasswordIfTakeOver as boolean;
    } else {
      this.changePasswordIfTakeOver = undefined;
    }
    if (data && data.createAccountScript !== undefined && Object.keys(data.createAccountScript).length > 0) {
      this.createAccountScript = new ScriptSetting(data.createAccountScript);
    } else {
      this.createAccountScript = undefined;
    }
    if (data && data.authenticationScript !== undefined && Object.keys(data.authenticationScript).length > 0) {
      this.authenticationScript = new ScriptSetting(data.authenticationScript);
    } else {
      this.authenticationScript = undefined;
    }
    if (data && data.createTakeOverScript !== undefined && Object.keys(data.createTakeOverScript).length > 0) {
      this.createTakeOverScript = new ScriptSetting(data.createTakeOverScript);
    } else {
      this.createTakeOverScript = undefined;
    }
    if (data && data.doTakeOverScript !== undefined && Object.keys(data.doTakeOverScript).length > 0) {
      this.doTakeOverScript = new ScriptSetting(data.doTakeOverScript);
    } else {
      this.doTakeOverScript = undefined;
    }
    if (data && data.logSetting !== undefined && Object.keys(data.logSetting).length > 0) {
      this.logSetting = new LogSetting(data.logSetting);
    } else {
      this.logSetting = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withChangePasswordIfTakeOver(changePasswordIfTakeOver?: boolean): this {
    this.changePasswordIfTakeOver = changePasswordIfTakeOver as boolean;
    return this;
  }

  public withCreateAccountScript(createAccountScript?: ScriptSetting): this {
    this.createAccountScript = createAccountScript as ScriptSetting;
    return this;
  }

  public withAuthenticationScript(authenticationScript?: ScriptSetting): this {
    this.authenticationScript = authenticationScript as ScriptSetting;
    return this;
  }

  public withCreateTakeOverScript(createTakeOverScript?: ScriptSetting): this {
    this.createTakeOverScript = createTakeOverScript as ScriptSetting;
    return this;
  }

  public withDoTakeOverScript(doTakeOverScript?: ScriptSetting): this {
    this.doTakeOverScript = doTakeOverScript as ScriptSetting;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting as LogSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.description = this.description;
    data.changePasswordIfTakeOver = this.changePasswordIfTakeOver;
    if (this.createAccountScript) {
      data.createAccountScript = this.createAccountScript.toDict();
    }
    if (this.authenticationScript) {
      data.authenticationScript = this.authenticationScript.toDict();
    }
    if (this.createTakeOverScript) {
      data.createTakeOverScript = this.createTakeOverScript.toDict();
    }
    if (this.doTakeOverScript) {
      data.doTakeOverScript = this.doTakeOverScript.toDict();
    }
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class DeleteNamespaceRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class DescribeAccountsRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
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

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
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
    data.namespaceName = this.namespaceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateAccountRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    return data;
  }

}

export class UpdateTimeOffsetRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アカウントID */
  public userId?: string;
  /** 現在時刻に対する補正値（現在時刻を起点とした秒数） */
  public timeOffset?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
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

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
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
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.timeOffset = this.timeOffset;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetAccountRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アカウントID */
  public userId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteAccountRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アカウントID */
  public userId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class AuthenticationRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** アカウントID */
  public userId?: string;
  /** 認証トークンの暗号化に使用する暗号鍵 のGRN */
  public keyId?: string;
  /** パスワード */
  public password?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
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
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.keyId = this.keyId;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeTakeOversRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
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
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
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

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeTakeOversByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
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
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
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

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CreateTakeOverRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スロット番号 */
  public type?: number;
  /** 引き継ぎ用ユーザーID */
  public userIdentifier?: string;
  /** パスワード */
  public password?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.userIdentifier !== undefined) {
      this.userIdentifier = data.userIdentifier as string;
    } else {
      this.userIdentifier = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withUserIdentifier(userIdentifier?: string): this {
    this.userIdentifier = userIdentifier as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.type = this.type;
    data.userIdentifier = this.userIdentifier;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CreateTakeOverByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public type?: number;
  /** 引き継ぎ用ユーザーID */
  public userIdentifier?: string;
  /** パスワード */
  public password?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.userIdentifier !== undefined) {
      this.userIdentifier = data.userIdentifier as string;
    } else {
      this.userIdentifier = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withUserIdentifier(userIdentifier?: string): this {
    this.userIdentifier = userIdentifier as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.type = this.type;
    data.userIdentifier = this.userIdentifier;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetTakeOverRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スロット番号 */
  public type?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.type = this.type;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetTakeOverByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public type?: number;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.type = this.type;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateTakeOverRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スロット番号 */
  public type?: number;
  /** 古いパスワード */
  public oldPassword?: string;
  /** 新しいパスワード */
  public password?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.oldPassword !== undefined) {
      this.oldPassword = data.oldPassword as string;
    } else {
      this.oldPassword = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withOldPassword(oldPassword?: string): this {
    this.oldPassword = oldPassword as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.type = this.type;
    data.oldPassword = this.oldPassword;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class UpdateTakeOverByUserIdRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public type?: number;
  /** 古いパスワード */
  public oldPassword?: string;
  /** 新しいパスワード */
  public password?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.oldPassword !== undefined) {
      this.oldPassword = data.oldPassword as string;
    } else {
      this.oldPassword = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withOldPassword(oldPassword?: string): this {
    this.oldPassword = oldPassword as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.type = this.type;
    data.oldPassword = this.oldPassword;
    data.password = this.password;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteTakeOverRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スロット番号 */
  public type?: number;
  /** 引き継ぎ用ユーザーID */
  public userIdentifier?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;
  /** アクセストークン */
  public accessToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.userIdentifier !== undefined) {
      this.userIdentifier = data.userIdentifier as string;
    } else {
      this.userIdentifier = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withUserIdentifier(userIdentifier?: string): this {
    this.userIdentifier = userIdentifier as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }
  public withAccessToken(accessToken?: string): this {
    this.accessToken = accessToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.type = this.type;
    data.userIdentifier = this.userIdentifier;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DeleteTakeOverByUserIdentifierRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public type?: number;
  /** 引き継ぎ用ユーザーID */
  public userIdentifier?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.userIdentifier !== undefined) {
      this.userIdentifier = data.userIdentifier as string;
    } else {
      this.userIdentifier = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withUserIdentifier(userIdentifier?: string): this {
    this.userIdentifier = userIdentifier as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.userId = this.userId;
    data.type = this.type;
    data.userIdentifier = this.userIdentifier;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DoTakeOverRequest extends Gs2Request {
  /** ネームスペース名 */
  public namespaceName?: string;
  /** スロット番号 */
  public type?: number;
  /** 引き継ぎ用ユーザーID */
  public userIdentifier?: string;
  /** パスワード */
  public password?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName as string;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type as number;
    } else {
      this.type = undefined;
    }
    if (data && data.userIdentifier !== undefined) {
      this.userIdentifier = data.userIdentifier as string;
    } else {
      this.userIdentifier = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName as string;
    return this;
  }

  public withType(type?: number): this {
    this.type = type as number;
    return this;
  }

  public withUserIdentifier(userIdentifier?: string): this {
    this.userIdentifier = userIdentifier as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.type = this.type;
    data.userIdentifier = this.userIdentifier;
    data.password = this.password;
    return data;
  }

}
