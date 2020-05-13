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
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:money:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** ネームスペース */
  public namespaceId?: string;
  /** オーナーID */
  public ownerId?: string;
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
  /** 未使用残高 */
  public balance?: number;
  /** ログの出力設定 */
  public logSetting?: LogSetting;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.namespaceId !== undefined) {
      this.namespaceId = data.namespaceId;
    } else {
      this.namespaceId = undefined;
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
    if (data && data.priority !== undefined) {
      this.priority = data.priority;
    } else {
      this.priority = undefined;
    }
    if (data && data.shareFree !== undefined) {
      this.shareFree = data.shareFree;
    } else {
      this.shareFree = false;
    }
    if (data && data.currency !== undefined) {
      this.currency = data.currency;
    } else {
      this.currency = undefined;
    }
    if (data && data.appleKey !== undefined) {
      this.appleKey = data.appleKey;
    } else {
      this.appleKey = undefined;
    }
    if (data && data.googleKey !== undefined) {
      this.googleKey = data.googleKey;
    } else {
      this.googleKey = undefined;
    }
    if (data && data.enableFakeReceipt !== undefined) {
      this.enableFakeReceipt = data.enableFakeReceipt;
    } else {
      this.enableFakeReceipt = false;
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
    if (data && data.balance !== undefined) {
      this.balance = data.balance;
    } else {
      this.balance = 0;
    }
    if (data && data.logSetting !== undefined && Object.keys(data.logSetting).length > 0) {
      this.logSetting = new LogSetting(data.logSetting);
    } else {
      this.logSetting = undefined;
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

  public withNamespaceId(namespaceId?: string): this {
    this.namespaceId = namespaceId;
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

  public withPriority(priority?: string): this {
    this.priority = priority;
    return this;
  }

  public withShareFree(shareFree?: boolean): this {
    this.shareFree = shareFree;
    return this;
  }

  public withCurrency(currency?: string): this {
    this.currency = currency;
    return this;
  }

  public withAppleKey(appleKey?: string): this {
    this.appleKey = appleKey;
    return this;
  }

  public withGoogleKey(googleKey?: string): this {
    this.googleKey = googleKey;
    return this;
  }

  public withEnableFakeReceipt(enableFakeReceipt?: boolean): this {
    this.enableFakeReceipt = enableFakeReceipt;
    return this;
  }

  public withCreateWalletScript(createWalletScript?: ScriptSetting): this {
    this.createWalletScript = createWalletScript;
    return this;
  }

  public withDepositScript(depositScript?: ScriptSetting): this {
    this.depositScript = depositScript;
    return this;
  }

  public withWithdrawScript(withdrawScript?: ScriptSetting): this {
    this.withdrawScript = withdrawScript;
    return this;
  }

  public withBalance(balance?: number): this {
    this.balance = balance;
    return this;
  }

  public withLogSetting(logSetting?: LogSetting): this {
    this.logSetting = logSetting;
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
    data.namespaceId = this.namespaceId;
    data.ownerId = this.ownerId;
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
    data.balance = this.balance;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ウォレット
 *
 * @author Game Server Services, Inc.
 *
 */
export class Wallet implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, slot: string): string {
    return 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{slot}', slot);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{slot}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{slot}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{slot}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{slot}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getSlotFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:wallet:{slot}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{slot}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** ウォレット */
  public walletId?: string;
  /** ユーザーID */
  public userId?: string;
  /** スロット番号 */
  public slot?: number;
  /** 有償課金通貨所持量 */
  public paid?: number;
  /** 無償課金通貨所持量 */
  public free?: number;
  /** 詳細 */
  public detail?: WalletDetail[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.walletId !== undefined) {
      this.walletId = data.walletId;
    } else {
      this.walletId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.slot !== undefined) {
      this.slot = data.slot;
    } else {
      this.slot = 0;
    }
    if (data && data.paid !== undefined) {
      this.paid = data.paid;
    } else {
      this.paid = 0;
    }
    if (data && data.free !== undefined) {
      this.free = data.free;
    } else {
      this.free = 0;
    }
    if (data && data.detail !== undefined) {
      this.detail = data.detail as WalletDetail[];
      for (let i = 0; i < data.detail.length; i++) {
            this.detail[i] = new WalletDetail(data.detail[i]);
      }
    } else {
      this.detail = undefined;
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

  public withWalletId(walletId?: string): this {
    this.walletId = walletId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withSlot(slot?: number): this {
    this.slot = slot;
    return this;
  }

  public withPaid(paid?: number): this {
    this.paid = paid;
    return this;
  }

  public withFree(free?: number): this {
    this.free = free;
    return this;
  }

  public withDetail(detail?: WalletDetail[]): this {
    this.detail = detail as WalletDetail[];
    if (detail) {
      for (let i = 0; i < detail!.length; i++) {
          this.detail[i] = detail![i];
      }
    }
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
    data.walletId = this.walletId;
    data.userId = this.userId;
    data.slot = this.slot;
    data.paid = this.paid;
    data.free = this.free;
    if (this.detail) {
      data.detail = this.detail.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * レシート
 *
 * @author Game Server Services, Inc.
 *
 */
export class Receipt implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, transactionId: string): string {
    return 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{transactionId}', transactionId);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{transactionId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{transactionId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{transactionId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{transactionId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getTransactionIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:money:{namespaceName}:user:{userId}:receipt:{transactionId}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{transactionId}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** レシート */
  public receiptId?: string;
  /** トランザクションID */
  public transactionId?: string;
  /** ユーザーID */
  public userId?: string;
  /** 種類 */
  public type?: string;
  /** スロット番号 */
  public slot?: number;
  /** 単価 */
  public price?: number;
  /** 有償課金通貨 */
  public paid?: number;
  /** 無償課金通貨 */
  public free?: number;
  /** 総数 */
  public total?: number;
  /** ストアプラットフォームで販売されているコンテンツID */
  public contentsId?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.receiptId !== undefined) {
      this.receiptId = data.receiptId;
    } else {
      this.receiptId = undefined;
    }
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.slot !== undefined) {
      this.slot = data.slot;
    } else {
      this.slot = 0;
    }
    if (data && data.price !== undefined) {
      this.price = data.price;
    } else {
      this.price = 0;
    }
    if (data && data.paid !== undefined) {
      this.paid = data.paid;
    } else {
      this.paid = 0;
    }
    if (data && data.free !== undefined) {
      this.free = data.free;
    } else {
      this.free = 0;
    }
    if (data && data.total !== undefined) {
      this.total = data.total;
    } else {
      this.total = 0;
    }
    if (data && data.contentsId !== undefined) {
      this.contentsId = data.contentsId;
    } else {
      this.contentsId = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withReceiptId(receiptId?: string): this {
    this.receiptId = receiptId;
    return this;
  }

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withSlot(slot?: number): this {
    this.slot = slot;
    return this;
  }

  public withPrice(price?: number): this {
    this.price = price;
    return this;
  }

  public withPaid(paid?: number): this {
    this.paid = paid;
    return this;
  }

  public withFree(free?: number): this {
    this.free = free;
    return this;
  }

  public withTotal(total?: number): this {
    this.total = total;
    return this;
  }

  public withContentsId(contentsId?: string): this {
    this.contentsId = contentsId;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.receiptId = this.receiptId;
    data.transactionId = this.transactionId;
    data.userId = this.userId;
    data.type = this.type;
    data.slot = this.slot;
    data.price = this.price;
    data.paid = this.paid;
    data.free = this.free;
    data.total = this.total;
    data.contentsId = this.contentsId;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * レスポンスキャッシュ
 *
 * @author Game Server Services, Inc.
 *
 */
export class ResponseCache implements IModel {

  public static createGrn(requestHash: string, ownerId: string, region: string): string {
    return 'grn:gs2:{region}:{ownerId}:hash:{requestHash}'
      .replace('{requestHash}', requestHash)
      .replace('{ownerId}', ownerId)
      .replace('{region}', region);
  }

  public static getRequestHashFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:hash:{requestHash}';
    grnFormat = grnFormat.replace('{requestHash}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{region}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** None */
  public region?: string;
  /** オーナーID */
  public ownerId?: string;
  /** レスポンスキャッシュ のGRN */
  public responseCacheId?: string;
  /** None */
  public requestHash?: string;
  /** APIの応答内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.region !== undefined) {
      this.region = data.region;
    } else {
      this.region = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.responseCacheId !== undefined) {
      this.responseCacheId = data.responseCacheId;
    } else {
      this.responseCacheId = undefined;
    }
    if (data && data.requestHash !== undefined) {
      this.requestHash = data.requestHash;
    } else {
      this.requestHash = undefined;
    }
    if (data && data.result !== undefined) {
      this.result = data.result;
    } else {
      this.result = undefined;
    }
  }

  public withRegion(region?: string): this {
    this.region = region;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withResponseCacheId(responseCacheId?: string): this {
    this.responseCacheId = responseCacheId;
    return this;
  }

  public withRequestHash(requestHash?: string): this {
    this.requestHash = requestHash;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.region = this.region;
    data.ownerId = this.ownerId;
    data.responseCacheId = this.responseCacheId;
    data.requestHash = this.requestHash;
    data.result = this.result;
    return data;
  }

}


/**
 * ウォレットの詳細
 *
 * @author Game Server Services, Inc.
 *
 */
export class WalletDetail implements IModel {
  /** 単価 */
  public price?: number;
  /** 所持量 */
  public count?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.price !== undefined) {
      this.price = data.price;
    } else {
      this.price = 0;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
  }

  public withPrice(price?: number): this {
    this.price = price;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.price = this.price;
    data.count = this.count;
    return data;
  }

}


/**
 * スクリプト設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class ScriptSetting implements IModel {
  /** 実行前に使用する GS2-Script のスクリプト のGRN */
  public triggerScriptId?: string;
  /** 完了通知の通知先 */
  public doneTriggerTargetType?: string;
  /** 完了時に使用する GS2-Script のスクリプト のGRN */
  public doneTriggerScriptId?: string;
  /** 完了時に使用する GS2-JobQueue のネームスペース のGRN */
  public doneTriggerQueueNamespaceId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.triggerScriptId !== undefined) {
      this.triggerScriptId = data.triggerScriptId;
    } else {
      this.triggerScriptId = undefined;
    }
    if (data && data.doneTriggerTargetType !== undefined) {
      this.doneTriggerTargetType = data.doneTriggerTargetType;
    } else {
      this.doneTriggerTargetType = undefined;
    }
    if (data && data.doneTriggerScriptId !== undefined) {
      this.doneTriggerScriptId = data.doneTriggerScriptId;
    } else {
      this.doneTriggerScriptId = undefined;
    }
    if (data && data.doneTriggerQueueNamespaceId !== undefined) {
      this.doneTriggerQueueNamespaceId = data.doneTriggerQueueNamespaceId;
    } else {
      this.doneTriggerQueueNamespaceId = undefined;
    }
  }

  public withTriggerScriptId(triggerScriptId?: string): this {
    this.triggerScriptId = triggerScriptId;
    return this;
  }

  public withDoneTriggerTargetType(doneTriggerTargetType?: string): this {
    this.doneTriggerTargetType = doneTriggerTargetType;
    return this;
  }

  public withDoneTriggerScriptId(doneTriggerScriptId?: string): this {
    this.doneTriggerScriptId = doneTriggerScriptId;
    return this;
  }

  public withDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId?: string): this {
    this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.triggerScriptId = this.triggerScriptId;
    data.doneTriggerTargetType = this.doneTriggerTargetType;
    data.doneTriggerScriptId = this.doneTriggerScriptId;
    data.doneTriggerQueueNamespaceId = this.doneTriggerQueueNamespaceId;
    return data;
  }

}


/**
 * ロギング通知設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class LogSetting implements IModel {
  /** ログの記録に使用する GS2-Log のネームスペース のGRN */
  public loggingNamespaceId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.loggingNamespaceId !== undefined) {
      this.loggingNamespaceId = data.loggingNamespaceId;
    } else {
      this.loggingNamespaceId = undefined;
    }
  }

  public withLoggingNamespaceId(loggingNamespaceId?: string): this {
    this.loggingNamespaceId = loggingNamespaceId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.loggingNamespaceId = this.loggingNamespaceId;
    return data;
  }

}
