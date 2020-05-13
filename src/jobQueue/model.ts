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
    return 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}';
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
  /** ネームスペース名 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** ジョブキューにジョブが登録されたときののプッシュ通知 */
  public pushNotification?: NotificationSetting;
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
    if (data && data.pushNotification !== undefined && Object.keys(data.pushNotification).length > 0) {
      this.pushNotification = new NotificationSetting(data.pushNotification);
    } else {
      this.pushNotification = undefined;
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

  public withPushNotification(pushNotification?: NotificationSetting): this {
    this.pushNotification = pushNotification;
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
    if (this.pushNotification) {
      data.pushNotification = this.pushNotification.toDict();
    }
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ジョブ
 *
 * @author Game Server Services, Inc.
 *
 */
export class Job implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, jobName: string): string {
    return 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{jobName}', jobName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getJobNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** ジョブ */
  public jobId?: string;
  /** ジョブの名前 */
  public name?: string;
  /** ユーザーID */
  public userId?: string;
  /** ジョブの実行に使用するスクリプト のGRN */
  public scriptId?: string;
  /** 引数 */
  public args?: string;
  /** 現在のリトライ回数 */
  public currentRetryCount?: number;
  /** 最大試行回数 */
  public maxTryCount?: number;
  /** ソート用インデックス(現在時刻(ミリ秒).登録時のインデックス) */
  public index?: number;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.jobId !== undefined) {
      this.jobId = data.jobId;
    } else {
      this.jobId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.scriptId !== undefined) {
      this.scriptId = data.scriptId;
    } else {
      this.scriptId = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
    if (data && data.currentRetryCount !== undefined) {
      this.currentRetryCount = data.currentRetryCount;
    } else {
      this.currentRetryCount = 0;
    }
    if (data && data.maxTryCount !== undefined) {
      this.maxTryCount = data.maxTryCount;
    } else {
      this.maxTryCount = 0;
    }
    if (data && data.index !== undefined) {
      this.index = data.index;
    } else {
      this.index = 0;
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

  public withJobId(jobId?: string): this {
    this.jobId = jobId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withScriptId(scriptId?: string): this {
    this.scriptId = scriptId;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public withCurrentRetryCount(currentRetryCount?: number): this {
    this.currentRetryCount = currentRetryCount;
    return this;
  }

  public withMaxTryCount(maxTryCount?: number): this {
    this.maxTryCount = maxTryCount;
    return this;
  }

  public withIndex(index?: number): this {
    this.index = index;
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
    data.jobId = this.jobId;
    data.name = this.name;
    data.userId = this.userId;
    data.scriptId = this.scriptId;
    data.args = this.args;
    data.currentRetryCount = this.currentRetryCount;
    data.maxTryCount = this.maxTryCount;
    data.index = this.index;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * ジョブ実行結果
 *
 * @author Game Server Services, Inc.
 *
 */
export class JobResult implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, jobName: string, tryNumber: string): string {
    return 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{jobName}', jobName)
      .replace('{tryNumber}', tryNumber);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getJobNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getTryNumberFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{jobName}', '(.*)');
    grnFormat = grnFormat.replace('{tryNumber}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }
  /** ジョブ実行結果 */
  public jobResultId?: string;
  /** ジョブ */
  public jobId?: string;
  /** None */
  public tryNumber?: number;
  /** None */
  public statusCode?: number;
  /** レスポンスの内容 */
  public result?: string;
  /** 作成日時 */
  public tryAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.jobResultId !== undefined) {
      this.jobResultId = data.jobResultId;
    } else {
      this.jobResultId = undefined;
    }
    if (data && data.jobId !== undefined) {
      this.jobId = data.jobId;
    } else {
      this.jobId = undefined;
    }
    if (data && data.tryNumber !== undefined) {
      this.tryNumber = data.tryNumber;
    } else {
      this.tryNumber = 0;
    }
    if (data && data.statusCode !== undefined) {
      this.statusCode = data.statusCode;
    } else {
      this.statusCode = 0;
    }
    if (data && data.result !== undefined) {
      this.result = data.result;
    } else {
      this.result = undefined;
    }
    if (data && data.tryAt !== undefined) {
      this.tryAt = data.tryAt;
    } else {
      this.tryAt = 0;
    }
  }

  public withJobResultId(jobResultId?: string): this {
    this.jobResultId = jobResultId;
    return this;
  }

  public withJobId(jobId?: string): this {
    this.jobId = jobId;
    return this;
  }

  public withTryNumber(tryNumber?: number): this {
    this.tryNumber = tryNumber;
    return this;
  }

  public withStatusCode(statusCode?: number): this {
    this.statusCode = statusCode;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public withTryAt(tryAt?: number): this {
    this.tryAt = tryAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.jobResultId = this.jobResultId;
    data.jobId = this.jobId;
    data.tryNumber = this.tryNumber;
    data.statusCode = this.statusCode;
    data.result = this.result;
    data.tryAt = this.tryAt;
    return data;
  }

}


/**
 * デッドレタージョブ
 *
 * @author Game Server Services, Inc.
 *
 */
export class DeadLetterJob implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, deadLetterJobName: string): string {
    return 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{deadLetterJobName}', deadLetterJobName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{deadLetterJobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{deadLetterJobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{deadLetterJobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{deadLetterJobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getDeadLetterJobNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{deadLetterJobName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** デッドレタージョブ */
  public deadLetterJobId?: string;
  /** ジョブの名前 */
  public name?: string;
  /** ユーザーID */
  public userId?: string;
  /** ジョブの実行に使用するスクリプト のGRN */
  public scriptId?: string;
  /** 引数 */
  public args?: string;
  /** ジョブ実行結果 */
  public result?: JobResultBody[];
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.deadLetterJobId !== undefined) {
      this.deadLetterJobId = data.deadLetterJobId;
    } else {
      this.deadLetterJobId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.scriptId !== undefined) {
      this.scriptId = data.scriptId;
    } else {
      this.scriptId = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
    if (data && data.result !== undefined) {
      this.result = data.result as JobResultBody[];
      for (let i = 0; i < data.result.length; i++) {
            this.result[i] = new JobResultBody(data.result[i]);
      }
    } else {
      this.result = undefined;
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

  public withDeadLetterJobId(deadLetterJobId?: string): this {
    this.deadLetterJobId = deadLetterJobId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withScriptId(scriptId?: string): this {
    this.scriptId = scriptId;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public withResult(result?: JobResultBody[]): this {
    this.result = result as JobResultBody[];
    if (result) {
      for (let i = 0; i < result!.length; i++) {
          this.result[i] = result![i];
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
    data.deadLetterJobId = this.deadLetterJobId;
    data.name = this.name;
    data.userId = this.userId;
    data.scriptId = this.scriptId;
    data.args = this.args;
    if (this.result) {
      data.result = this.result.map((item) => item.toDict());
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
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
 * プッシュ通知設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class NotificationSetting implements IModel {
  /** プッシュ通知に使用する GS2-Gateway のネームスペース のGRN */
  public gatewayNamespaceId?: string;
  /** モバイルプッシュ通知へ転送するか */
  public enableTransferMobileNotification?: boolean;
  /** モバイルプッシュ通知で使用するサウンドファイル名 */
  public sound?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.gatewayNamespaceId !== undefined) {
      this.gatewayNamespaceId = data.gatewayNamespaceId;
    } else {
      this.gatewayNamespaceId = undefined;
    }
    if (data && data.enableTransferMobileNotification !== undefined) {
      this.enableTransferMobileNotification = data.enableTransferMobileNotification;
    } else {
      this.enableTransferMobileNotification = false;
    }
    if (data && data.sound !== undefined) {
      this.sound = data.sound;
    } else {
      this.sound = undefined;
    }
  }

  public withGatewayNamespaceId(gatewayNamespaceId?: string): this {
    this.gatewayNamespaceId = gatewayNamespaceId;
    return this;
  }

  public withEnableTransferMobileNotification(enableTransferMobileNotification?: boolean): this {
    this.enableTransferMobileNotification = enableTransferMobileNotification;
    return this;
  }

  public withSound(sound?: string): this {
    this.sound = sound;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.gatewayNamespaceId = this.gatewayNamespaceId;
    data.enableTransferMobileNotification = this.enableTransferMobileNotification;
    data.sound = this.sound;
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


/**
 * ジョブ
 *
 * @author Game Server Services, Inc.
 *
 */
export class JobEntry implements IModel {
  /** スクリプト のGRN */
  public scriptId?: string;
  /** 引数 */
  public args?: string;
  /** 最大試行回数 */
  public maxTryCount?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.scriptId !== undefined) {
      this.scriptId = data.scriptId;
    } else {
      this.scriptId = undefined;
    }
    if (data && data.args !== undefined) {
      this.args = data.args;
    } else {
      this.args = undefined;
    }
    if (data && data.maxTryCount !== undefined) {
      this.maxTryCount = data.maxTryCount;
    } else {
      this.maxTryCount = 0;
    }
  }

  public withScriptId(scriptId?: string): this {
    this.scriptId = scriptId;
    return this;
  }

  public withArgs(args?: string): this {
    this.args = args;
    return this;
  }

  public withMaxTryCount(maxTryCount?: number): this {
    this.maxTryCount = maxTryCount;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.scriptId = this.scriptId;
    data.args = this.args;
    data.maxTryCount = this.maxTryCount;
    return data;
  }

}


/**
 * ジョブの実行結果
 *
 * @author Game Server Services, Inc.
 *
 */
export class JobResultBody implements IModel {
  /** 試行回数 */
  public tryNumber?: number;
  /** ステータスコード */
  public statusCode?: number;
  /** レスポンスの内容 */
  public result?: string;
  /** 実行日時 */
  public tryAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.tryNumber !== undefined) {
      this.tryNumber = data.tryNumber;
    } else {
      this.tryNumber = 0;
    }
    if (data && data.statusCode !== undefined) {
      this.statusCode = data.statusCode;
    } else {
      this.statusCode = 0;
    }
    if (data && data.result !== undefined) {
      this.result = data.result;
    } else {
      this.result = undefined;
    }
    if (data && data.tryAt !== undefined) {
      this.tryAt = data.tryAt;
    } else {
      this.tryAt = 0;
    }
  }

  public withTryNumber(tryNumber?: number): this {
    this.tryNumber = tryNumber;
    return this;
  }

  public withStatusCode(statusCode?: number): this {
    this.statusCode = statusCode;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public withTryAt(tryAt?: number): this {
    this.tryAt = tryAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.tryNumber = this.tryNumber;
    data.statusCode = this.statusCode;
    data.result = this.result;
    data.tryAt = this.tryAt;
    return data;
  }

}
