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
  AccessLog,
  AccessLogCount,
  IssueStampSheetLog,
  IssueStampSheetLogCount,
  ExecuteStampSheetLog,
  ExecuteStampSheetLogCount,
  ExecuteStampTaskLog,
  ExecuteStampTaskLogCount,
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
  /** カテゴリー名 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** ログの書き出し方法 */
  public type?: string;
  /** GCPのクレデンシャル */
  public gcpCredentialJson?: string;
  /** BigQueryのデータセット名 */
  public bigQueryDatasetName?: string;
  /** ログの保存期間(日) */
  public logExpireDays?: number;
  /** AWSのリージョン */
  public awsRegion?: string;
  /** AWSのアクセスキーID */
  public awsAccessKeyId?: string;
  /** AWSのシークレットアクセスキー */
  public awsSecretAccessKey?: string;
  /** Kinesis Firehose のストリーム名 */
  public firehoseStreamName?: string;

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
    if (data && data.type !== undefined) {
      this.type = data.type as string;
    } else {
      this.type = undefined;
    }
    if (data && data.gcpCredentialJson !== undefined) {
      this.gcpCredentialJson = data.gcpCredentialJson as string;
    } else {
      this.gcpCredentialJson = undefined;
    }
    if (data && data.bigQueryDatasetName !== undefined) {
      this.bigQueryDatasetName = data.bigQueryDatasetName as string;
    } else {
      this.bigQueryDatasetName = undefined;
    }
    if (data && data.logExpireDays !== undefined) {
      this.logExpireDays = data.logExpireDays as number;
    } else {
      this.logExpireDays = undefined;
    }
    if (data && data.awsRegion !== undefined) {
      this.awsRegion = data.awsRegion as string;
    } else {
      this.awsRegion = undefined;
    }
    if (data && data.awsAccessKeyId !== undefined) {
      this.awsAccessKeyId = data.awsAccessKeyId as string;
    } else {
      this.awsAccessKeyId = undefined;
    }
    if (data && data.awsSecretAccessKey !== undefined) {
      this.awsSecretAccessKey = data.awsSecretAccessKey as string;
    } else {
      this.awsSecretAccessKey = undefined;
    }
    if (data && data.firehoseStreamName !== undefined) {
      this.firehoseStreamName = data.firehoseStreamName as string;
    } else {
      this.firehoseStreamName = undefined;
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

  public withType(type?: string): this {
    this.type = type as string;
    return this;
  }

  public withGcpCredentialJson(gcpCredentialJson?: string): this {
    this.gcpCredentialJson = gcpCredentialJson as string;
    return this;
  }

  public withBigQueryDatasetName(bigQueryDatasetName?: string): this {
    this.bigQueryDatasetName = bigQueryDatasetName as string;
    return this;
  }

  public withLogExpireDays(logExpireDays?: number): this {
    this.logExpireDays = logExpireDays as number;
    return this;
  }

  public withAwsRegion(awsRegion?: string): this {
    this.awsRegion = awsRegion as string;
    return this;
  }

  public withAwsAccessKeyId(awsAccessKeyId?: string): this {
    this.awsAccessKeyId = awsAccessKeyId as string;
    return this;
  }

  public withAwsSecretAccessKey(awsSecretAccessKey?: string): this {
    this.awsSecretAccessKey = awsSecretAccessKey as string;
    return this;
  }

  public withFirehoseStreamName(firehoseStreamName?: string): this {
    this.firehoseStreamName = firehoseStreamName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    data.type = this.type;
    data.gcpCredentialJson = this.gcpCredentialJson;
    data.bigQueryDatasetName = this.bigQueryDatasetName;
    data.logExpireDays = this.logExpireDays;
    data.awsRegion = this.awsRegion;
    data.awsAccessKeyId = this.awsAccessKeyId;
    data.awsSecretAccessKey = this.awsSecretAccessKey;
    data.firehoseStreamName = this.firehoseStreamName;
    return data;
  }

}

export class GetNamespaceStatusRequest extends Gs2Request {
  /** カテゴリー名 */
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
  /** カテゴリー名 */
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
  /** カテゴリー名 */
  public namespaceName?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** ログの書き出し方法 */
  public type?: string;
  /** GCPのクレデンシャル */
  public gcpCredentialJson?: string;
  /** BigQueryのデータセット名 */
  public bigQueryDatasetName?: string;
  /** ログの保存期間(日) */
  public logExpireDays?: number;
  /** AWSのリージョン */
  public awsRegion?: string;
  /** AWSのアクセスキーID */
  public awsAccessKeyId?: string;
  /** AWSのシークレットアクセスキー */
  public awsSecretAccessKey?: string;
  /** Kinesis Firehose のストリーム名 */
  public firehoseStreamName?: string;

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
    if (data && data.type !== undefined) {
      this.type = data.type as string;
    } else {
      this.type = undefined;
    }
    if (data && data.gcpCredentialJson !== undefined) {
      this.gcpCredentialJson = data.gcpCredentialJson as string;
    } else {
      this.gcpCredentialJson = undefined;
    }
    if (data && data.bigQueryDatasetName !== undefined) {
      this.bigQueryDatasetName = data.bigQueryDatasetName as string;
    } else {
      this.bigQueryDatasetName = undefined;
    }
    if (data && data.logExpireDays !== undefined) {
      this.logExpireDays = data.logExpireDays as number;
    } else {
      this.logExpireDays = undefined;
    }
    if (data && data.awsRegion !== undefined) {
      this.awsRegion = data.awsRegion as string;
    } else {
      this.awsRegion = undefined;
    }
    if (data && data.awsAccessKeyId !== undefined) {
      this.awsAccessKeyId = data.awsAccessKeyId as string;
    } else {
      this.awsAccessKeyId = undefined;
    }
    if (data && data.awsSecretAccessKey !== undefined) {
      this.awsSecretAccessKey = data.awsSecretAccessKey as string;
    } else {
      this.awsSecretAccessKey = undefined;
    }
    if (data && data.firehoseStreamName !== undefined) {
      this.firehoseStreamName = data.firehoseStreamName as string;
    } else {
      this.firehoseStreamName = undefined;
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

  public withType(type?: string): this {
    this.type = type as string;
    return this;
  }

  public withGcpCredentialJson(gcpCredentialJson?: string): this {
    this.gcpCredentialJson = gcpCredentialJson as string;
    return this;
  }

  public withBigQueryDatasetName(bigQueryDatasetName?: string): this {
    this.bigQueryDatasetName = bigQueryDatasetName as string;
    return this;
  }

  public withLogExpireDays(logExpireDays?: number): this {
    this.logExpireDays = logExpireDays as number;
    return this;
  }

  public withAwsRegion(awsRegion?: string): this {
    this.awsRegion = awsRegion as string;
    return this;
  }

  public withAwsAccessKeyId(awsAccessKeyId?: string): this {
    this.awsAccessKeyId = awsAccessKeyId as string;
    return this;
  }

  public withAwsSecretAccessKey(awsSecretAccessKey?: string): this {
    this.awsSecretAccessKey = awsSecretAccessKey as string;
    return this;
  }

  public withFirehoseStreamName(firehoseStreamName?: string): this {
    this.firehoseStreamName = firehoseStreamName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.description = this.description;
    data.type = this.type;
    data.gcpCredentialJson = this.gcpCredentialJson;
    data.bigQueryDatasetName = this.bigQueryDatasetName;
    data.logExpireDays = this.logExpireDays;
    data.awsRegion = this.awsRegion;
    data.awsAccessKeyId = this.awsAccessKeyId;
    data.awsSecretAccessKey = this.awsSecretAccessKey;
    data.firehoseStreamName = this.firehoseStreamName;
    return data;
  }

}

export class DeleteNamespaceRequest extends Gs2Request {
  /** カテゴリー名 */
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

export class QueryAccessLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
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
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
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

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CountAccessLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類を集計軸に使用するか */
  public service?: boolean;
  /** マイクロサービスのメソッドを集計軸に使用するか */
  public method?: boolean;
  /** ユーザIDを集計軸に使用するか */
  public userId?: boolean;
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
    if (data && data.service !== undefined) {
      this.service = data.service as boolean;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as boolean;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as boolean;
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

  public withService(service?: boolean): this {
    this.service = service as boolean;
    return this;
  }

  public withMethod(method?: boolean): this {
    this.method = method as boolean;
    return this;
  }

  public withUserId(userId?: boolean): this {
    this.userId = userId as boolean;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class QueryIssueStampSheetLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
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
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as string;
    } else {
      this.action = undefined;
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

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action as string;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CountIssueStampSheetLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類を集計軸に使用するか */
  public service?: boolean;
  /** マイクロサービスのメソッドを集計軸に使用するか */
  public method?: boolean;
  /** ユーザIDを集計軸に使用するか */
  public userId?: boolean;
  /** 報酬アクションの種類を集計軸に使用するか */
  public action?: boolean;
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
    if (data && data.service !== undefined) {
      this.service = data.service as boolean;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as boolean;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as boolean;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as boolean;
    } else {
      this.action = undefined;
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

  public withService(service?: boolean): this {
    this.service = service as boolean;
    return this;
  }

  public withMethod(method?: boolean): this {
    this.method = method as boolean;
    return this;
  }

  public withUserId(userId?: boolean): this {
    this.userId = userId as boolean;
    return this;
  }

  public withAction(action?: boolean): this {
    this.action = action as boolean;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class QueryExecuteStampSheetLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
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
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as string;
    } else {
      this.action = undefined;
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

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action as string;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CountExecuteStampSheetLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類を集計軸に使用するか */
  public service?: boolean;
  /** マイクロサービスのメソッドを集計軸に使用するか */
  public method?: boolean;
  /** ユーザIDを集計軸に使用するか */
  public userId?: boolean;
  /** 報酬アクションの種類を集計軸に使用するか */
  public action?: boolean;
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
    if (data && data.service !== undefined) {
      this.service = data.service as boolean;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as boolean;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as boolean;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as boolean;
    } else {
      this.action = undefined;
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

  public withService(service?: boolean): this {
    this.service = service as boolean;
    return this;
  }

  public withMethod(method?: boolean): this {
    this.method = method as boolean;
    return this;
  }

  public withUserId(userId?: boolean): this {
    this.userId = userId as boolean;
    return this;
  }

  public withAction(action?: boolean): this {
    this.action = action as boolean;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class QueryExecuteStampTaskLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
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
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as string;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as string;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as string;
    } else {
      this.action = undefined;
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

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method as string;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId as string;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action as string;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}

export class CountExecuteStampTaskLogRequest extends Gs2Request {
  /** カテゴリー名 */
  public namespaceName?: string;
  /** マイクロサービスの種類を集計軸に使用するか */
  public service?: boolean;
  /** マイクロサービスのメソッドを集計軸に使用するか */
  public method?: boolean;
  /** ユーザIDを集計軸に使用するか */
  public userId?: boolean;
  /** 報酬アクションの種類を集計軸に使用するか */
  public action?: boolean;
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
    if (data && data.service !== undefined) {
      this.service = data.service as boolean;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method as boolean;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId as boolean;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action as boolean;
    } else {
      this.action = undefined;
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

  public withService(service?: boolean): this {
    this.service = service as boolean;
    return this;
  }

  public withMethod(method?: boolean): this {
    this.method = method as boolean;
    return this;
  }

  public withUserId(userId?: boolean): this {
    this.userId = userId as boolean;
    return this;
  }

  public withAction(action?: boolean): this {
    this.action = action as boolean;
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
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    data.xGs2DuplicationAvoider = this.xGs2DuplicationAvoider;
    return data;
  }

}
