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
 * ネームスペース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Namespace implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:log:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:log:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:log:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:log:{namespaceName}';
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
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.gcpCredentialJson !== undefined) {
      this.gcpCredentialJson = data.gcpCredentialJson;
    } else {
      this.gcpCredentialJson = undefined;
    }
    if (data && data.bigQueryDatasetName !== undefined) {
      this.bigQueryDatasetName = data.bigQueryDatasetName;
    } else {
      this.bigQueryDatasetName = undefined;
    }
    if (data && data.logExpireDays !== undefined) {
      this.logExpireDays = data.logExpireDays;
    } else {
      this.logExpireDays = 0;
    }
    if (data && data.awsRegion !== undefined) {
      this.awsRegion = data.awsRegion;
    } else {
      this.awsRegion = undefined;
    }
    if (data && data.awsAccessKeyId !== undefined) {
      this.awsAccessKeyId = data.awsAccessKeyId;
    } else {
      this.awsAccessKeyId = undefined;
    }
    if (data && data.awsSecretAccessKey !== undefined) {
      this.awsSecretAccessKey = data.awsSecretAccessKey;
    } else {
      this.awsSecretAccessKey = undefined;
    }
    if (data && data.firehoseStreamName !== undefined) {
      this.firehoseStreamName = data.firehoseStreamName;
    } else {
      this.firehoseStreamName = undefined;
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

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withGcpCredentialJson(gcpCredentialJson?: string): this {
    this.gcpCredentialJson = gcpCredentialJson;
    return this;
  }

  public withBigQueryDatasetName(bigQueryDatasetName?: string): this {
    this.bigQueryDatasetName = bigQueryDatasetName;
    return this;
  }

  public withLogExpireDays(logExpireDays?: number): this {
    this.logExpireDays = logExpireDays;
    return this;
  }

  public withAwsRegion(awsRegion?: string): this {
    this.awsRegion = awsRegion;
    return this;
  }

  public withAwsAccessKeyId(awsAccessKeyId?: string): this {
    this.awsAccessKeyId = awsAccessKeyId;
    return this;
  }

  public withAwsSecretAccessKey(awsSecretAccessKey?: string): this {
    this.awsSecretAccessKey = awsSecretAccessKey;
    return this;
  }

  public withFirehoseStreamName(firehoseStreamName?: string): this {
    this.firehoseStreamName = firehoseStreamName;
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
    data.type = this.type;
    data.gcpCredentialJson = this.gcpCredentialJson;
    data.bigQueryDatasetName = this.bigQueryDatasetName;
    data.logExpireDays = this.logExpireDays;
    data.awsRegion = this.awsRegion;
    data.awsAccessKeyId = this.awsAccessKeyId;
    data.awsSecretAccessKey = this.awsSecretAccessKey;
    data.firehoseStreamName = this.firehoseStreamName;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * アクセスログ
 *
 * @author Game Server Services, Inc.
 *
 */
export class AccessLog implements IModel {
  /** 日時 */
  public timestamp?: number;
  /** リクエストID */
  public requestId?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** リクエストパラメータ */
  public request?: string;
  /** 応答内容 */
  public result?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.timestamp !== undefined) {
      this.timestamp = data.timestamp;
    } else {
      this.timestamp = 0;
    }
    if (data && data.requestId !== undefined) {
      this.requestId = data.requestId;
    } else {
      this.requestId = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.request !== undefined) {
      this.request = data.request;
    } else {
      this.request = undefined;
    }
    if (data && data.result !== undefined) {
      this.result = data.result;
    } else {
      this.result = undefined;
    }
  }

  public withTimestamp(timestamp?: number): this {
    this.timestamp = timestamp;
    return this;
  }

  public withRequestId(requestId?: string): this {
    this.requestId = requestId;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withRequest(request?: string): this {
    this.request = request;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.timestamp = this.timestamp;
    data.requestId = this.requestId;
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.request = this.request;
    data.result = this.result;
    return data;
  }

}


/**
 * アクセスログ集計
 *
 * @author Game Server Services, Inc.
 *
 */
export class AccessLogCount implements IModel {
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 回数 */
  public count?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.count = this.count;
    return data;
  }

}


/**
 * スタンプシート発行ログ
 *
 * @author Game Server Services, Inc.
 *
 */
export class IssueStampSheetLog implements IModel {
  /** 日時 */
  public timestamp?: number;
  /** トランザクションID */
  public transactionId?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 引数 */
  public args?: string;
  /** スタンプタスク */
  public tasks?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.timestamp !== undefined) {
      this.timestamp = data.timestamp;
    } else {
      this.timestamp = 0;
    }
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
    if (data && data.tasks !== undefined) {
      this.tasks = data.tasks;
    } else {
      this.tasks = undefined;
    }
  }

  public withTimestamp(timestamp?: number): this {
    this.timestamp = timestamp;
    return this;
  }

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public withTasks(tasks?: string): this {
    this.tasks = tasks;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.timestamp = this.timestamp;
    data.transactionId = this.transactionId;
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.args = this.args;
    data.tasks = this.tasks;
    return data;
  }

}


/**
 * スタンプシート発行ログ集計
 *
 * @author Game Server Services, Inc.
 *
 */
export class IssueStampSheetLogCount implements IModel {
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 回数 */
  public count?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.count = this.count;
    return data;
  }

}


/**
 * スタンプシート実行ログ
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExecuteStampSheetLog implements IModel {
  /** 日時 */
  public timestamp?: number;
  /** トランザクションID */
  public transactionId?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 引数 */
  public args?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.timestamp !== undefined) {
      this.timestamp = data.timestamp;
    } else {
      this.timestamp = 0;
    }
    if (data && data.transactionId !== undefined) {
      this.transactionId = data.transactionId;
    } else {
      this.transactionId = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
  }

  public withTimestamp(timestamp?: number): this {
    this.timestamp = timestamp;
    return this;
  }

  public withTransactionId(transactionId?: string): this {
    this.transactionId = transactionId;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.timestamp = this.timestamp;
    data.transactionId = this.transactionId;
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.args = this.args;
    return data;
  }

}


/**
 * スタンプシート実行ログ集計
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExecuteStampSheetLogCount implements IModel {
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 回数 */
  public count?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.count = this.count;
    return data;
  }

}


/**
 * スタンプタスク実行ログ
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExecuteStampTaskLog implements IModel {
  /** 日時 */
  public timestamp?: number;
  /** タスクID */
  public taskId?: string;
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 引数 */
  public args?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.timestamp !== undefined) {
      this.timestamp = data.timestamp;
    } else {
      this.timestamp = 0;
    }
    if (data && data.taskId !== undefined) {
      this.taskId = data.taskId;
    } else {
      this.taskId = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
  }

  public withTimestamp(timestamp?: number): this {
    this.timestamp = timestamp;
    return this;
  }

  public withTaskId(taskId?: string): this {
    this.taskId = taskId;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.timestamp = this.timestamp;
    data.taskId = this.taskId;
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.args = this.args;
    return data;
  }

}


/**
 * スタンプタスク実行ログ集計
 *
 * @author Game Server Services, Inc.
 *
 */
export class ExecuteStampTaskLogCount implements IModel {
  /** マイクロサービスの種類 */
  public service?: string;
  /** マイクロサービスのメソッド */
  public method?: string;
  /** ユーザーID */
  public userId?: string;
  /** 報酬アクション */
  public action?: string;
  /** 回数 */
  public count?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.method !== undefined) {
      this.method = data.method;
    } else {
      this.method = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.action !== undefined) {
      this.action = data.action;
    } else {
      this.action = undefined;
    }
    if (data && data.count !== undefined) {
      this.count = data.count;
    } else {
      this.count = 0;
    }
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withMethod(method?: string): this {
    this.method = method;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withAction(action?: string): this {
    this.action = action;
    return this;
  }

  public withCount(count?: number): this {
    this.count = count;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.service = this.service;
    data.method = this.method;
    data.userId = this.userId;
    data.action = this.action;
    data.count = this.count;
    return data;
  }

}
