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
 * GS2アカウント
 *
 * @author Game Server Services, Inc.
 *
 */
export class Account implements IModel {

  public static createGrn(accountName: string): string {
    return 'grn:gs2:::gs2:account:{accountName}'
      .replace('{accountName}', accountName);
  }

  public static getAccountNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }
  /** GS2アカウント */
  public accountId?: string;
  /** None */
  public ownerId?: string;
  /** GS2アカウントの名前 */
  public name?: string;
  /** メールアドレス */
  public email?: string;
  /** フルネーム */
  public fullName?: string;
  /** 会社名 */
  public companyName?: string;
  /** パスワード */
  public password?: string;
  /** ステータス */
  public status?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.accountId !== undefined) {
      this.accountId = data.accountId;
    } else {
      this.accountId = undefined;
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
    if (data && data.email !== undefined) {
      this.email = data.email;
    } else {
      this.email = undefined;
    }
    if (data && data.fullName !== undefined) {
      this.fullName = data.fullName;
    } else {
      this.fullName = undefined;
    }
    if (data && data.companyName !== undefined) {
      this.companyName = data.companyName;
    } else {
      this.companyName = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password;
    } else {
      this.password = undefined;
    }
    if (data && data.status !== undefined) {
      this.status = data.status;
    } else {
      this.status = undefined;
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

  public withAccountId(accountId?: string): this {
    this.accountId = accountId;
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

  public withEmail(email?: string): this {
    this.email = email;
    return this;
  }

  public withFullName(fullName?: string): this {
    this.fullName = fullName;
    return this;
  }

  public withCompanyName(companyName?: string): this {
    this.companyName = companyName;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password;
    return this;
  }

  public withStatus(status?: string): this {
    this.status = status;
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
    data.accountId = this.accountId;
    data.ownerId = this.ownerId;
    data.name = this.name;
    data.email = this.email;
    data.fullName = this.fullName;
    data.companyName = this.companyName;
    data.password = this.password;
    data.status = this.status;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * プロジェクト
 *
 * @author Game Server Services, Inc.
 *
 */
export class Project implements IModel {

  public static createGrn(accountName: string, projectName: string): string {
    return 'grn:gs2:::gs2:account:{accountName}:project:{projectName}'
      .replace('{accountName}', accountName)
      .replace('{projectName}', projectName);
  }

  public static getAccountNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:project:{projectName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{projectName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getProjectNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:project:{projectName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{projectName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }
  /** プロジェクト */
  public projectId?: string;
  /** GS2アカウントの名前 */
  public accountName?: string;
  /** プロジェクト名 */
  public name?: string;
  /** プロジェクトの説明 */
  public description?: string;
  /** 契約プラン */
  public plan?: string;
  /** 支払い方法名 */
  public billingMethodName?: string;
  /** AWS EventBridge の設定 */
  public enableEventBridge?: string;
  /** 通知に使用するAWSアカウントのID */
  public eventBridgeAwsAccountId?: string;
  /** 通知に使用するAWSリージョン */
  public eventBridgeAwsRegion?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.projectId !== undefined) {
      this.projectId = data.projectId;
    } else {
      this.projectId = undefined;
    }
    if (data && data.accountName !== undefined) {
      this.accountName = data.accountName;
    } else {
      this.accountName = undefined;
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
    if (data && data.plan !== undefined) {
      this.plan = data.plan;
    } else {
      this.plan = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName;
    } else {
      this.billingMethodName = undefined;
    }
    if (data && data.enableEventBridge !== undefined) {
      this.enableEventBridge = data.enableEventBridge;
    } else {
      this.enableEventBridge = undefined;
    }
    if (data && data.eventBridgeAwsAccountId !== undefined) {
      this.eventBridgeAwsAccountId = data.eventBridgeAwsAccountId;
    } else {
      this.eventBridgeAwsAccountId = undefined;
    }
    if (data && data.eventBridgeAwsRegion !== undefined) {
      this.eventBridgeAwsRegion = data.eventBridgeAwsRegion;
    } else {
      this.eventBridgeAwsRegion = undefined;
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

  public withProjectId(projectId?: string): this {
    this.projectId = projectId;
    return this;
  }

  public withAccountName(accountName?: string): this {
    this.accountName = accountName;
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

  public withPlan(plan?: string): this {
    this.plan = plan;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName;
    return this;
  }

  public withEnableEventBridge(enableEventBridge?: string): this {
    this.enableEventBridge = enableEventBridge;
    return this;
  }

  public withEventBridgeAwsAccountId(eventBridgeAwsAccountId?: string): this {
    this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
    return this;
  }

  public withEventBridgeAwsRegion(eventBridgeAwsRegion?: string): this {
    this.eventBridgeAwsRegion = eventBridgeAwsRegion;
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
    data.projectId = this.projectId;
    data.accountName = this.accountName;
    data.name = this.name;
    data.description = this.description;
    data.plan = this.plan;
    data.billingMethodName = this.billingMethodName;
    data.enableEventBridge = this.enableEventBridge;
    data.eventBridgeAwsAccountId = this.eventBridgeAwsAccountId;
    data.eventBridgeAwsRegion = this.eventBridgeAwsRegion;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 支払い方法
 *
 * @author Game Server Services, Inc.
 *
 */
export class BillingMethod implements IModel {

  public static createGrn(accountName: string, billingMethodName: string): string {
    return 'grn:gs2:::gs2:account:{accountName}:billingMethod:{billingMethodName}'
      .replace('{accountName}', accountName)
      .replace('{billingMethodName}', billingMethodName);
  }

  public static getAccountNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:billingMethod:{billingMethodName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{billingMethodName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getBillingMethodNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:billingMethod:{billingMethodName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{billingMethodName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }
  /** 支払い方法 */
  public billingMethodId?: string;
  /** GS2アカウントの名前 */
  public accountName?: string;
  /** 名前 */
  public name?: string;
  /** 名前 */
  public description?: string;
  /** 支払い方法 */
  public methodType?: string;
  /** クレジットカードカスタマーID */
  public cardCustomerId?: string;
  /** カード署名 */
  public cardSignatureName?: string;
  /** カードブランド */
  public cardBrand?: string;
  /** 末尾4桁 */
  public cardLast4?: string;
  /** パートナーID */
  public partnerId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.billingMethodId !== undefined) {
      this.billingMethodId = data.billingMethodId;
    } else {
      this.billingMethodId = undefined;
    }
    if (data && data.accountName !== undefined) {
      this.accountName = data.accountName;
    } else {
      this.accountName = undefined;
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
    if (data && data.methodType !== undefined) {
      this.methodType = data.methodType;
    } else {
      this.methodType = undefined;
    }
    if (data && data.cardCustomerId !== undefined) {
      this.cardCustomerId = data.cardCustomerId;
    } else {
      this.cardCustomerId = undefined;
    }
    if (data && data.cardSignatureName !== undefined) {
      this.cardSignatureName = data.cardSignatureName;
    } else {
      this.cardSignatureName = undefined;
    }
    if (data && data.cardBrand !== undefined) {
      this.cardBrand = data.cardBrand;
    } else {
      this.cardBrand = undefined;
    }
    if (data && data.cardLast4 !== undefined) {
      this.cardLast4 = data.cardLast4;
    } else {
      this.cardLast4 = undefined;
    }
    if (data && data.partnerId !== undefined) {
      this.partnerId = data.partnerId;
    } else {
      this.partnerId = undefined;
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

  public withBillingMethodId(billingMethodId?: string): this {
    this.billingMethodId = billingMethodId;
    return this;
  }

  public withAccountName(accountName?: string): this {
    this.accountName = accountName;
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

  public withMethodType(methodType?: string): this {
    this.methodType = methodType;
    return this;
  }

  public withCardCustomerId(cardCustomerId?: string): this {
    this.cardCustomerId = cardCustomerId;
    return this;
  }

  public withCardSignatureName(cardSignatureName?: string): this {
    this.cardSignatureName = cardSignatureName;
    return this;
  }

  public withCardBrand(cardBrand?: string): this {
    this.cardBrand = cardBrand;
    return this;
  }

  public withCardLast4(cardLast4?: string): this {
    this.cardLast4 = cardLast4;
    return this;
  }

  public withPartnerId(partnerId?: string): this {
    this.partnerId = partnerId;
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
    data.billingMethodId = this.billingMethodId;
    data.accountName = this.accountName;
    data.name = this.name;
    data.description = this.description;
    data.methodType = this.methodType;
    data.cardCustomerId = this.cardCustomerId;
    data.cardSignatureName = this.cardSignatureName;
    data.cardBrand = this.cardBrand;
    data.cardLast4 = this.cardLast4;
    data.partnerId = this.partnerId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 領収書
 *
 * @author Game Server Services, Inc.
 *
 */
export class Receipt implements IModel {

  public static createGrn(accountName: string, receiptName: string): string {
    return 'grn:gs2:::gs2:account:{accountName}:receipt:{receiptName}'
      .replace('{accountName}', accountName)
      .replace('{receiptName}', receiptName);
  }

  public static getAccountNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:receipt:{receiptName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{receiptName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getReceiptNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:receipt:{receiptName}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{receiptName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }
  /** 領収書 */
  public receiptId?: string;
  /** GS2アカウントの名前 */
  public accountName?: string;
  /** 請求書名 */
  public name?: string;
  /** 請求月 */
  public date?: number;
  /** 請求金額 */
  public amount?: string;
  /** PDF URL */
  public pdfUrl?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.receiptId !== undefined) {
      this.receiptId = data.receiptId;
    } else {
      this.receiptId = undefined;
    }
    if (data && data.accountName !== undefined) {
      this.accountName = data.accountName;
    } else {
      this.accountName = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.date !== undefined) {
      this.date = data.date;
    } else {
      this.date = 0;
    }
    if (data && data.amount !== undefined) {
      this.amount = data.amount;
    } else {
      this.amount = undefined;
    }
    if (data && data.pdfUrl !== undefined) {
      this.pdfUrl = data.pdfUrl;
    } else {
      this.pdfUrl = undefined;
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

  public withReceiptId(receiptId?: string): this {
    this.receiptId = receiptId;
    return this;
  }

  public withAccountName(accountName?: string): this {
    this.accountName = accountName;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withDate(date?: number): this {
    this.date = date;
    return this;
  }

  public withAmount(amount?: string): this {
    this.amount = amount;
    return this;
  }

  public withPdfUrl(pdfUrl?: string): this {
    this.pdfUrl = pdfUrl;
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
    data.receiptId = this.receiptId;
    data.accountName = this.accountName;
    data.name = this.name;
    data.date = this.date;
    data.amount = this.amount;
    data.pdfUrl = this.pdfUrl;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 利用状況
 *
 * @author Game Server Services, Inc.
 *
 */
export class Billing implements IModel {

  public static createGrn(accountName: string, projectName: string, billingName: string): string {
    return 'grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}:{region}:{service}:{activityType}'
      .replace('{accountName}', accountName)
      .replace('{projectName}', projectName)
      .replace('{billingName}', billingName);
  }

  public static getAccountNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}:{region}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{projectName}', '(.*)');
    grnFormat = grnFormat.replace('{billingName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getProjectNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}:{region}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{projectName}', '(.*)');
    grnFormat = grnFormat.replace('{billingName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getBillingNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}:{region}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{accountName}', '(.*)');
    grnFormat = grnFormat.replace('{projectName}', '(.*)');
    grnFormat = grnFormat.replace('{billingName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** 利用状況 */
  public billingId?: string;
  /** プロジェクト名 */
  public projectName?: string;
  /** イベントの発生年 */
  public year?: number;
  /** イベントの発生月 */
  public month?: number;
  /** リージョン */
  public region?: string;
  /** サービスの種類 */
  public service?: string;
  /** イベントの種類 */
  public activityType?: string;
  /** 回数 */
  public unit?: number;
  /** 単位 */
  public unitName?: string;
  /** 料金 */
  public price?: number;
  /** 通貨 */
  public currency?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.billingId !== undefined) {
      this.billingId = data.billingId;
    } else {
      this.billingId = undefined;
    }
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName;
    } else {
      this.projectName = undefined;
    }
    if (data && data.year !== undefined) {
      this.year = data.year;
    } else {
      this.year = 0;
    }
    if (data && data.month !== undefined) {
      this.month = data.month;
    } else {
      this.month = 0;
    }
    if (data && data.region !== undefined) {
      this.region = data.region;
    } else {
      this.region = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.activityType !== undefined) {
      this.activityType = data.activityType;
    } else {
      this.activityType = undefined;
    }
    if (data && data.unit !== undefined) {
      this.unit = data.unit;
    } else {
      this.unit = 0;
    }
    if (data && data.unitName !== undefined) {
      this.unitName = data.unitName;
    } else {
      this.unitName = undefined;
    }
    if (data && data.price !== undefined) {
      this.price = data.price;
    } else {
      this.price = 0;
    }
    if (data && data.currency !== undefined) {
      this.currency = data.currency;
    } else {
      this.currency = undefined;
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

  public withBillingId(billingId?: string): this {
    this.billingId = billingId;
    return this;
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName;
    return this;
  }

  public withYear(year?: number): this {
    this.year = year;
    return this;
  }

  public withMonth(month?: number): this {
    this.month = month;
    return this;
  }

  public withRegion(region?: string): this {
    this.region = region;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withActivityType(activityType?: string): this {
    this.activityType = activityType;
    return this;
  }

  public withUnit(unit?: number): this {
    this.unit = unit;
    return this;
  }

  public withUnitName(unitName?: string): this {
    this.unitName = unitName;
    return this;
  }

  public withPrice(price?: number): this {
    this.price = price;
    return this;
  }

  public withCurrency(currency?: string): this {
    this.currency = currency;
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
    data.billingId = this.billingId;
    data.projectName = this.projectName;
    data.year = this.year;
    data.month = this.month;
    data.region = this.region;
    data.service = this.service;
    data.activityType = this.activityType;
    data.unit = this.unit;
    data.unitName = this.unitName;
    data.price = this.price;
    data.currency = this.currency;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}
