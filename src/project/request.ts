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
  Account,
  Project,
  BillingMethod,
  Receipt,
  Billing,
} from './model';

import { Gs2Request } from '@/gs2/core/model';

export class CreateAccountRequest extends Gs2Request {
  /** メールアドレス */
  public email?: string;
  /** フルネーム */
  public fullName?: string;
  /** 会社名 */
  public companyName?: string;
  /** パスワード */
  public password?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.email !== undefined) {
      this.email = data.email as string;
    } else {
      this.email = undefined;
    }
    if (data && data.fullName !== undefined) {
      this.fullName = data.fullName as string;
    } else {
      this.fullName = undefined;
    }
    if (data && data.companyName !== undefined) {
      this.companyName = data.companyName as string;
    } else {
      this.companyName = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
  }

  public withEmail(email?: string): this {
    this.email = email as string;
    return this;
  }

  public withFullName(fullName?: string): this {
    this.fullName = fullName as string;
    return this;
  }

  public withCompanyName(companyName?: string): this {
    this.companyName = companyName as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.email = this.email;
    data.fullName = this.fullName;
    data.companyName = this.companyName;
    data.password = this.password;
    return data;
  }

}

export class VerifyRequest extends Gs2Request {
  /** 有効化に使用するトークン */
  public verifyToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.verifyToken !== undefined) {
      this.verifyToken = data.verifyToken as string;
    } else {
      this.verifyToken = undefined;
    }
  }

  public withVerifyToken(verifyToken?: string): this {
    this.verifyToken = verifyToken as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.verifyToken = this.verifyToken;
    return data;
  }

}

export class SignInRequest extends Gs2Request {
  /** メールアドレス */
  public email?: string;
  /** パスワード */
  public password?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.email !== undefined) {
      this.email = data.email as string;
    } else {
      this.email = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
  }

  public withEmail(email?: string): this {
    this.email = email as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.email = this.email;
    data.password = this.password;
    return data;
  }

}

export class IssueAccountTokenRequest extends Gs2Request {
  /** GS2アカウントの名前 */
  public accountName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountName !== undefined) {
      this.accountName = data.accountName as string;
    } else {
      this.accountName = undefined;
    }
  }

  public withAccountName(accountName?: string): this {
    this.accountName = accountName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountName = this.accountName;
    return data;
  }

}

export class ForgetRequest extends Gs2Request {
  /** メールアドレス */
  public email?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.email !== undefined) {
      this.email = data.email as string;
    } else {
      this.email = undefined;
    }
  }

  public withEmail(email?: string): this {
    this.email = email as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.email = this.email;
    return data;
  }

}

export class IssuePasswordRequest extends Gs2Request {
  /** パスワードを再発行するために必要なトークン */
  public issuePasswordToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.issuePasswordToken !== undefined) {
      this.issuePasswordToken = data.issuePasswordToken as string;
    } else {
      this.issuePasswordToken = undefined;
    }
  }

  public withIssuePasswordToken(issuePasswordToken?: string): this {
    this.issuePasswordToken = issuePasswordToken as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.issuePasswordToken = this.issuePasswordToken;
    return data;
  }

}

export class UpdateAccountRequest extends Gs2Request {
  /** メールアドレス */
  public email?: string;
  /** フルネーム */
  public fullName?: string;
  /** 会社名 */
  public companyName?: string;
  /** パスワード */
  public password?: string;
  /** GS2アカウントトークン */
  public accountToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.email !== undefined) {
      this.email = data.email as string;
    } else {
      this.email = undefined;
    }
    if (data && data.fullName !== undefined) {
      this.fullName = data.fullName as string;
    } else {
      this.fullName = undefined;
    }
    if (data && data.companyName !== undefined) {
      this.companyName = data.companyName as string;
    } else {
      this.companyName = undefined;
    }
    if (data && data.password !== undefined) {
      this.password = data.password as string;
    } else {
      this.password = undefined;
    }
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
  }

  public withEmail(email?: string): this {
    this.email = email as string;
    return this;
  }

  public withFullName(fullName?: string): this {
    this.fullName = fullName as string;
    return this;
  }

  public withCompanyName(companyName?: string): this {
    this.companyName = companyName as string;
    return this;
  }

  public withPassword(password?: string): this {
    this.password = password as string;
    return this;
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.email = this.email;
    data.fullName = this.fullName;
    data.companyName = this.companyName;
    data.password = this.password;
    data.accountToken = this.accountToken;
    return data;
  }

}

export class DeleteAccountRequest extends Gs2Request {
  /** GS2アカウントの名前 */
  public accountName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountName !== undefined) {
      this.accountName = data.accountName as string;
    } else {
      this.accountName = undefined;
    }
  }

  public withAccountName(accountName?: string): this {
    this.accountName = accountName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountName = this.accountName;
    return data;
  }

}

export class DescribeProjectsRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
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

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
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
    data.accountToken = this.accountToken;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateProjectRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
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
    if (data && data.plan !== undefined) {
      this.plan = data.plan as string;
    } else {
      this.plan = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName as string;
    } else {
      this.billingMethodName = undefined;
    }
    if (data && data.enableEventBridge !== undefined) {
      this.enableEventBridge = data.enableEventBridge as string;
    } else {
      this.enableEventBridge = undefined;
    }
    if (data && data.eventBridgeAwsAccountId !== undefined) {
      this.eventBridgeAwsAccountId = data.eventBridgeAwsAccountId as string;
    } else {
      this.eventBridgeAwsAccountId = undefined;
    }
    if (data && data.eventBridgeAwsRegion !== undefined) {
      this.eventBridgeAwsRegion = data.eventBridgeAwsRegion as string;
    } else {
      this.eventBridgeAwsRegion = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withPlan(plan?: string): this {
    this.plan = plan as string;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName as string;
    return this;
  }

  public withEnableEventBridge(enableEventBridge?: string): this {
    this.enableEventBridge = enableEventBridge as string;
    return this;
  }

  public withEventBridgeAwsAccountId(eventBridgeAwsAccountId?: string): this {
    this.eventBridgeAwsAccountId = eventBridgeAwsAccountId as string;
    return this;
  }

  public withEventBridgeAwsRegion(eventBridgeAwsRegion?: string): this {
    this.eventBridgeAwsRegion = eventBridgeAwsRegion as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.name = this.name;
    data.description = this.description;
    data.plan = this.plan;
    data.billingMethodName = this.billingMethodName;
    data.enableEventBridge = this.enableEventBridge;
    data.eventBridgeAwsAccountId = this.eventBridgeAwsAccountId;
    data.eventBridgeAwsRegion = this.eventBridgeAwsRegion;
    return data;
  }

}

export class GetProjectRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** プロジェクト名 */
  public projectName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName as string;
    } else {
      this.projectName = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.projectName = this.projectName;
    return data;
  }

}

export class GetProjectTokenRequest extends Gs2Request {
  /** プロジェクト名 */
  public projectName?: string;
  /** GS2アカウントトークン */
  public accountToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName as string;
    } else {
      this.projectName = undefined;
    }
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName as string;
    return this;
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.projectName = this.projectName;
    data.accountToken = this.accountToken;
    return data;
  }

}

export class UpdateProjectRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** プロジェクト名 */
  public projectName?: string;
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

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName as string;
    } else {
      this.projectName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.plan !== undefined) {
      this.plan = data.plan as string;
    } else {
      this.plan = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName as string;
    } else {
      this.billingMethodName = undefined;
    }
    if (data && data.enableEventBridge !== undefined) {
      this.enableEventBridge = data.enableEventBridge as string;
    } else {
      this.enableEventBridge = undefined;
    }
    if (data && data.eventBridgeAwsAccountId !== undefined) {
      this.eventBridgeAwsAccountId = data.eventBridgeAwsAccountId as string;
    } else {
      this.eventBridgeAwsAccountId = undefined;
    }
    if (data && data.eventBridgeAwsRegion !== undefined) {
      this.eventBridgeAwsRegion = data.eventBridgeAwsRegion as string;
    } else {
      this.eventBridgeAwsRegion = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withPlan(plan?: string): this {
    this.plan = plan as string;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName as string;
    return this;
  }

  public withEnableEventBridge(enableEventBridge?: string): this {
    this.enableEventBridge = enableEventBridge as string;
    return this;
  }

  public withEventBridgeAwsAccountId(eventBridgeAwsAccountId?: string): this {
    this.eventBridgeAwsAccountId = eventBridgeAwsAccountId as string;
    return this;
  }

  public withEventBridgeAwsRegion(eventBridgeAwsRegion?: string): this {
    this.eventBridgeAwsRegion = eventBridgeAwsRegion as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.projectName = this.projectName;
    data.description = this.description;
    data.plan = this.plan;
    data.billingMethodName = this.billingMethodName;
    data.enableEventBridge = this.enableEventBridge;
    data.eventBridgeAwsAccountId = this.eventBridgeAwsAccountId;
    data.eventBridgeAwsRegion = this.eventBridgeAwsRegion;
    return data;
  }

}

export class DeleteProjectRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** プロジェクト名 */
  public projectName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName as string;
    } else {
      this.projectName = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.projectName = this.projectName;
    return data;
  }

}

export class DescribeBillingMethodsRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
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

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
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
    data.accountToken = this.accountToken;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class CreateBillingMethodRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** 名前 */
  public description?: string;
  /** 支払い方法 */
  public methodType?: string;
  /** クレジットカードカスタマーID */
  public cardCustomerId?: string;
  /** パートナーID */
  public partnerId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.methodType !== undefined) {
      this.methodType = data.methodType as string;
    } else {
      this.methodType = undefined;
    }
    if (data && data.cardCustomerId !== undefined) {
      this.cardCustomerId = data.cardCustomerId as string;
    } else {
      this.cardCustomerId = undefined;
    }
    if (data && data.partnerId !== undefined) {
      this.partnerId = data.partnerId as string;
    } else {
      this.partnerId = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withMethodType(methodType?: string): this {
    this.methodType = methodType as string;
    return this;
  }

  public withCardCustomerId(cardCustomerId?: string): this {
    this.cardCustomerId = cardCustomerId as string;
    return this;
  }

  public withPartnerId(partnerId?: string): this {
    this.partnerId = partnerId as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.description = this.description;
    data.methodType = this.methodType;
    data.cardCustomerId = this.cardCustomerId;
    data.partnerId = this.partnerId;
    return data;
  }

}

export class GetBillingMethodRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** 名前 */
  public billingMethodName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName as string;
    } else {
      this.billingMethodName = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.billingMethodName = this.billingMethodName;
    return data;
  }

}

export class UpdateBillingMethodRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** 名前 */
  public billingMethodName?: string;
  /** 名前 */
  public description?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName as string;
    } else {
      this.billingMethodName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.billingMethodName = this.billingMethodName;
    data.description = this.description;
    return data;
  }

}

export class DeleteBillingMethodRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** 名前 */
  public billingMethodName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.billingMethodName !== undefined) {
      this.billingMethodName = data.billingMethodName as string;
    } else {
      this.billingMethodName = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withBillingMethodName(billingMethodName?: string): this {
    this.billingMethodName = billingMethodName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.billingMethodName = this.billingMethodName;
    return data;
  }

}

export class DescribeReceiptsRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
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

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
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
    data.accountToken = this.accountToken;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class DescribeBillingsRequest extends Gs2Request {
  /** GS2アカウントトークン */
  public accountToken?: string;
  /** プロジェクト名 */
  public projectName?: string;
  /** イベントの発生年 */
  public year?: number;
  /** イベントの発生月 */
  public month?: number;
  /** サービスの種類 */
  public region?: string;
  /** サービスの種類 */
  public service?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.accountToken !== undefined) {
      this.accountToken = data.accountToken as string;
    } else {
      this.accountToken = undefined;
    }
    if (data && data.projectName !== undefined) {
      this.projectName = data.projectName as string;
    } else {
      this.projectName = undefined;
    }
    if (data && data.year !== undefined) {
      this.year = data.year as number;
    } else {
      this.year = undefined;
    }
    if (data && data.month !== undefined) {
      this.month = data.month as number;
    } else {
      this.month = undefined;
    }
    if (data && data.region !== undefined) {
      this.region = data.region as string;
    } else {
      this.region = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
  }

  public withAccountToken(accountToken?: string): this {
    this.accountToken = accountToken as string;
    return this;
  }

  public withProjectName(projectName?: string): this {
    this.projectName = projectName as string;
    return this;
  }

  public withYear(year?: number): this {
    this.year = year as number;
    return this;
  }

  public withMonth(month?: number): this {
    this.month = month as number;
    return this;
  }

  public withRegion(region?: string): this {
    this.region = region as string;
    return this;
  }

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.accountToken = this.accountToken;
    data.projectName = this.projectName;
    data.year = this.year;
    data.month = this.month;
    data.region = this.region;
    data.service = this.service;
    return data;
  }

}
