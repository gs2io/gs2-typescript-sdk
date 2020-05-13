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
  Wallet,
  Receipt,
  ResponseCache,
  WalletDetail,
  ScriptSetting,
  LogSetting,
} from './model';

import { Gs2Request } from '@/gs2/core/model';

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
  /** ネームスペースの名前 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** 消費優先度 */
  public priority?: string;
  /** 無償課金通貨を異なるスロットで共有するか */
  public shareFree?: boolean;
  /** 通貨の種類 */
  public currency?: string;
  /** Apple AppStore のバンドルID */
  public appleKey?: string;
  /** Google PlayStore の秘密鍵 */
  public googleKey?: string;
  /** UnityEditorが出力する偽のレシートで決済できるようにするか */
  public enableFakeReceipt?: boolean;
  /** ウォレット新規作成したときに実行するスクリプト */
  public createWalletScript?: ScriptSetting;
  /** ウォレット残高加算したときに実行するスクリプト */
  public depositScript?: ScriptSetting;
  /** ウォレット残高消費したときに実行するスクリプト */
  public withdrawScript?: ScriptSetting;
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
    if (data && data.priority !== undefined) {
      this.priority = data.priority as string;
    } else {
      this.priority = undefined;
    }
    if (data && data.shareFree !== undefined) {
      this.shareFree = data.shareFree as boolean;
    } else {
      this.shareFree = undefined;
    }
    if (data && data.currency !== undefined) {
      this.currency = data.currency as string;
    } else {
      this.currency = undefined;
    }
    if (data && data.appleKey !== undefined) {
      this.appleKey = data.appleKey as string;
    } else {
      this.appleKey = undefined;
    }
    if (data && data.googleKey !== undefined) {
      this.googleKey = data.googleKey as string;
    } else {
      this.googleKey = undefined;
    }
    if (data && data.enableFakeReceipt !== undefined) {
      this.enableFakeReceipt = data.enableFakeReceipt as boolean;
    } else {
      this.enableFakeReceipt = undefined;
    }
    if (data && data.createWalletScript !== undefined && Object.keys(data.createWalletScript).length > 0) {
      this.createWalletScript = new ScriptSetting(data.createWalletScript);
    } else {
      this.createWalletScript = undefined;
    }
    if (data && data.depositScript !== undefined && Object.keys(data.depositScript).length > 0) {
      this.depositScript = new ScriptSetting(data.depositScript);
    } else {
      this.depositScript = undefined;
    }
    if (data && data.withdrawScript !== undefined && Object.keys(data.withdrawScript).length > 0) {
      this.withdrawScript = new ScriptSetting(data.withdrawScript);
    } else {
      this.withdrawScript = undefined;
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

  public withPriority(priority?: string): this {
    this.priority = priority as string;
    return this;
  }

  public withShareFree(shareFree?: boolean): this {
    this.shareFree = shareFree as boolean;
    return this;
  }

  public withCurrency(currency?: string): this {
    this.currency = currency as string;
    return this;
  }

  public withAppleKey(appleKey?: string): this {
    this.appleKey = appleKey as string;
    return this;
  }

  public withGoogleKey(googleKey?: string): this {
    this.googleKey = googleKey as string;
    return this;
  }

  public withEnableFakeReceipt(enableFakeReceipt?: boolean): this {
    this.enableFakeReceipt = enableFakeReceipt as boolean;
    return this;
  }

  public withCreateWalletScript(createWalletScript?: ScriptSetting): this {
    this.createWalletScript = createWalletScript as ScriptSetting;
    return this;
  }

  public withDepositScript(depositScript?: ScriptSetting): this {
    this.depositScript = depositScript as ScriptSetting;
    return this;
  }

  public withWithdrawScript(withdrawScript?: ScriptSetting): this {
    this.withdrawScript = withdrawScript as ScriptSetting;
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
    data.priority = this.priority;
    data.shareFree = this.shareFree;
    data.currency = this.currency;
    data.appleKey = this.appleKey;
    data.googleKey = this.googleKey;
    data.enableFakeReceipt = this.enableFakeReceipt;
    if (this.createWalletScript) {
      data.createWalletScript = this.createWalletScript.toDict();
    }
    if (this.depositScript) {
      data.depositScript = this.depositScript.toDict();
    }
    if (this.withdrawScript) {
      data.withdrawScript = this.withdrawScript.toDict();
    }
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class GetNamespaceStatusRequest extends Gs2Request {
  /** ネームスペースの名前 */
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
  /** ネームスペースの名前 */
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
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** 消費優先度 */
  public priority?: string;
  /** Apple AppStore のバンドルID */
  public appleKey?: string;
  /** Google PlayStore の秘密鍵 */
  public googleKey?: string;
  /** UnityEditorが出力する偽のレシートで決済できるようにするか */
  public enableFakeReceipt?: boolean;
  /** ウォレット新規作成したときに実行するスクリプト */
  public createWalletScript?: ScriptSetting;
  /** ウォレット残高加算したときに実行するスクリプト */
  public depositScript?: ScriptSetting;
  /** ウォレット残高消費したときに実行するスクリプト */
  public withdrawScript?: ScriptSetting;
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
    if (data && data.priority !== undefined) {
      this.priority = data.priority as string;
    } else {
      this.priority = undefined;
    }
    if (data && data.appleKey !== undefined) {
      this.appleKey = data.appleKey as string;
    } else {
      this.appleKey = undefined;
    }
    if (data && data.googleKey !== undefined) {
      this.googleKey = data.googleKey as string;
    } else {
      this.googleKey = undefined;
    }
    if (data && data.enableFakeReceipt !== undefined) {
      this.enableFakeReceipt = data.enableFakeReceipt as boolean;
    } else {
      this.enableFakeReceipt = undefined;
    }
    if (data && data.createWalletScript !== undefined && Object.keys(data.createWalletScript).length > 0) {
      this.createWalletScript = new ScriptSetting(data.createWalletScript);
    } else {
      this.createWalletScript = undefined;
    }
    if (data && data.depositScript !== undefined && Object.keys(data.depositScript).length > 0) {
      this.depositScript = new ScriptSetting(data.depositScript);
    } else {
      this.depositScript = undefined;
    }
    if (data && data.withdrawScript !== undefined && Object.keys(data.withdrawScript).length > 0) {
      this.withdrawScript = new ScriptSetting(data.withdrawScript);
    } else {
      this.withdrawScript = undefined;
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

  public withPriority(priority?: string): this {
    this.priority = priority as string;
    return this;
  }

  public withAppleKey(appleKey?: string): this {
    this.appleKey = appleKey as string;
    return this;
  }

  public withGoogleKey(googleKey?: string): this {
    this.googleKey = googleKey as string;
    return this;
  }

  public withEnableFakeReceipt(enableFakeReceipt?: boolean): this {
    this.enableFakeReceipt = enableFakeReceipt as boolean;
    return this;
  }

  public withCreateWalletScript(createWalletScript?: ScriptSetting): this {
    this.createWalletScript = createWalletScript as ScriptSetting;
    return this;
  }

  public withDepositScript(depositScript?: ScriptSetting): this {
    this.depositScript = depositScript as ScriptSetting;
    return this;
  }

  public withWithdrawScript(withdrawScript?: ScriptSetting): this {
    this.withdrawScript = withdrawScript as ScriptSetting;
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
    data.priority = this.priority;
    data.appleKey = this.appleKey;
    data.googleKey = this.googleKey;
    data.enableFakeReceipt = this.enableFakeReceipt;
    if (this.createWalletScript) {
      data.createWalletScript = this.createWalletScript.toDict();
    }
    if (this.depositScript) {
      data.depositScript = this.depositScript.toDict();
    }
    if (this.withdrawScript) {
      data.withdrawScript = this.withdrawScript.toDict();
    }
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    return data;
  }

}

export class DeleteNamespaceRequest extends Gs2Request {
  /** ネームスペースの名前 */
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

export class DescribeWalletsRequest extends Gs2Request {
  /** ネームスペースの名前 */
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

export class DescribeWalletsByUserIdRequest extends Gs2Request {
  /** ネームスペースの名前 */
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

export class QueryWalletsRequest extends Gs2Request {
  /** ネームスペースの名前 */
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

export class GetWalletRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** スロット番号 */
  public slot?: number;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
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
    data.slot = this.slot;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetWalletByUserIdRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public slot?: number;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
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
    data.slot = this.slot;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DepositByUserIdRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public slot?: number;
  /** 購入価格 */
  public price?: number;
  /** 付与する課金通貨の数量 */
  public count?: number;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
    }
    if (data && data.price !== undefined) {
      this.price = data.price as number;
    } else {
      this.price = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count as number;
    } else {
      this.count = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
    return this;
  }

  public withPrice(price?: number): this {
    this.price = price as number;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count as number;
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
    data.slot = this.slot;
    data.price = this.price;
    data.count = this.count;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class WithdrawRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** スロット番号 */
  public slot?: number;
  /** 消費する課金通貨の数量 */
  public count?: number;
  /** 有償課金通貨のみを対象とするか */
  public paidOnly?: boolean;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count as number;
    } else {
      this.count = undefined;
    }
    if (data && data.paidOnly !== undefined) {
      this.paidOnly = data.paidOnly as boolean;
    } else {
      this.paidOnly = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count as number;
    return this;
  }

  public withPaidOnly(paidOnly?: boolean): this {
    this.paidOnly = paidOnly as boolean;
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
    data.slot = this.slot;
    data.count = this.count;
    data.paidOnly = this.paidOnly;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class WithdrawByUserIdRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public slot?: number;
  /** 消費する課金通貨の数量 */
  public count?: number;
  /** 有償課金通貨のみを対象とするか */
  public paidOnly?: boolean;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count as number;
    } else {
      this.count = undefined;
    }
    if (data && data.paidOnly !== undefined) {
      this.paidOnly = data.paidOnly as boolean;
    } else {
      this.paidOnly = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count as number;
    return this;
  }

  public withPaidOnly(paidOnly?: boolean): this {
    this.paidOnly = paidOnly as boolean;
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
    data.slot = this.slot;
    data.count = this.count;
    data.paidOnly = this.paidOnly;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DepositByStampSheetRequest extends Gs2Request {
  /** スタンプシート */
  public stampSheet?: string;
  /** スタンプシートの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampSheet !== undefined) {
      this.stampSheet = data.stampSheet as string;
    } else {
      this.stampSheet = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampSheet(stampSheet?: string): this {
    this.stampSheet = stampSheet as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampSheet = this.stampSheet;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class WithdrawByStampTaskRequest extends Gs2Request {
  /** スタンプタスク */
  public stampTask?: string;
  /** スタンプタスクの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampTask !== undefined) {
      this.stampTask = data.stampTask as string;
    } else {
      this.stampTask = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampTask(stampTask?: string): this {
    this.stampTask = stampTask as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampTask = this.stampTask;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class DescribeReceiptsRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** None */
  public slot?: number;
  /** None */
  public begin?: number;
  /** None */
  public end?: number;
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
    if (data && data.slot !== undefined) {
      this.slot = data.slot as number;
    } else {
      this.slot = undefined;
    }
    if (data && data.begin !== undefined) {
      this.begin = data.begin as number;
    } else {
      this.begin = undefined;
    }
    if (data && data.end !== undefined) {
      this.end = data.end as number;
    } else {
      this.end = undefined;
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

  public withSlot(slot?: number): this {
    this.slot = slot as number;
    return this;
  }

  public withBegin(begin?: number): this {
    this.begin = begin as number;
    return this;
  }

  public withEnd(end?: number): this {
    this.end = end as number;
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
    data.slot = this.slot;
    data.begin = this.begin;
    data.end = this.end;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class GetByUserIdAndTransactionIdRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** トランザクションID */
  public transactionId?: string;
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
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId as string;
    } else {
      this.transactionId = undefined;
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

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId as string;
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
    data.transactionId = this.transactionId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class RecordReceiptRequest extends Gs2Request {
  /** ネームスペースの名前 */
  public namespaceName?: string;
  /** ユーザーID */
  public userId?: string;
  /** プラットフォームストアのコンテンツID */
  public contentsId?: string;
  /** レシート */
  public receipt?: string;
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
    if (data && data.contentsId !== undefined) {
      this.contentsId = data.contentsId as string;
    } else {
      this.contentsId = undefined;
    }
    if (data && data.receipt !== undefined) {
      this.receipt = data.receipt as string;
    } else {
      this.receipt = undefined;
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

  public withContentsId(contentsId?: string): this {
    this.contentsId = contentsId as string;
    return this;
  }

  public withReceipt(receipt?: string): this {
    this.receipt = receipt as string;
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
    data.contentsId = this.contentsId;
    data.receipt = this.receipt;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class RecordReceiptByStampTaskRequest extends Gs2Request {
  /** スタンプタスク */
  public stampTask?: string;
  /** スタンプタスクの署名検証に使用する 暗号鍵 のGRN */
  public keyId?: string;
  /** 重複実行回避機能に使用するID */
  public xGs2DuplicationAvoider?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stampTask !== undefined) {
      this.stampTask = data.stampTask as string;
    } else {
      this.stampTask = undefined;
    }
    if (data && data.keyId !== undefined) {
      this.keyId = data.keyId as string;
    } else {
      this.keyId = undefined;
    }
    if (data && data.xGs2DuplicationAvoider !== undefined) {
      this.xGs2DuplicationAvoider = data.xGs2DuplicationAvoider as string;
    } else {
      this.xGs2DuplicationAvoider = undefined;
    }
  }

  public withStampTask(stampTask?: string): this {
    this.stampTask = stampTask as string;
    return this;
  }

  public withKeyId(keyId?: string): this {
    this.keyId = keyId as string;
    return this;
  }

  public withXGs2DuplicationAvoider(xGs2DuplicationAvoider?: string): this {
    this.xGs2DuplicationAvoider = xGs2DuplicationAvoider as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stampTask = this.stampTask;
    data.keyId = this.keyId;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
