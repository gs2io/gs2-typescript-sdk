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
  Job,
  JobResult,
  DeadLetterJob,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  JobEntry,
  JobResultBody,
} from './model';

import IResult from '../core/interface/IResult';

export class DescribeNamespacesResult implements IResult {
  /** ネームスペースのリスト */
  public items?: Namespace[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Namespace(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Namespace[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class CreateNamespaceResult implements IResult {
  /** 作成したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetNamespaceStatusResult implements IResult {
  /** None */
  public status?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.status = data.status;
    }
  }

  public withStatus(status?: string): this {
    this.status = status;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.status = this.status;
    return data;
  }

}

export class GetNamespaceResult implements IResult {
  /** ネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateNamespaceResult implements IResult {
  /** 更新したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteNamespaceResult implements IResult {
  /** 削除したネームスペース */
  public item?: Namespace;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Namespace(data.item);
    }
  }

  public withItem(item?: Namespace): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeJobsByUserIdResult implements IResult {
  /** ジョブのリスト */
  public items?: Job[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Job(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Job[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetJobByUserIdResult implements IResult {
  /** ジョブ */
  public item?: Job;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Job(data.item);
    }
  }

  public withItem(item?: Job): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PushByUserIdResult implements IResult {
  /** 追加した{model_name}の一覧 */
  public items?: Job[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Job(item);
      });
    }
  }

  public withItems(items?: Job[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class RunResult implements IResult {
  /** ジョブ */
  public item?: Job;
  /** ジョブの実行結果 */
  public result?: JobResultBody;
  /** None */
  public isLastJob?: boolean;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Job(data.item);
      this.result = new JobResultBody(data.result);
      this.isLastJob = data.isLastJob;
    }
  }

  public withItem(item?: Job): this {
    this.item = item;
    return this;
  }

  public withResult(result?: JobResultBody): this {
    this.result = result;
    return this;
  }

  public withIsLastJob(isLastJob?: boolean): this {
    this.isLastJob = isLastJob;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.result = this.result;
    data.isLastJob = this.isLastJob;
    return data;
  }

}

export class RunByUserIdResult implements IResult {
  /** ジョブ */
  public item?: Job;
  /** ジョブの実行結果 */
  public result?: JobResultBody;
  /** None */
  public isLastJob?: boolean;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Job(data.item);
      this.result = new JobResultBody(data.result);
      this.isLastJob = data.isLastJob;
    }
  }

  public withItem(item?: Job): this {
    this.item = item;
    return this;
  }

  public withResult(result?: JobResultBody): this {
    this.result = result;
    return this;
  }

  public withIsLastJob(isLastJob?: boolean): this {
    this.isLastJob = isLastJob;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    data.result = this.result;
    data.isLastJob = this.isLastJob;
    return data;
  }

}

export class DeleteJobByUserIdResult implements IResult {
  /** ジョブ */
  public item?: Job;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Job(data.item);
    }
  }

  public withItem(item?: Job): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class PushByStampSheetResult implements IResult {
  /** 追加した{model_name}の一覧 */
  public items?: Job[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Job(item);
      });
    }
  }

  public withItems(items?: Job[]): this {
    this.items = items;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    return data;
  }

}

export class DescribeDeadLetterJobsByUserIdResult implements IResult {
  /** デッドレタージョブのリスト */
  public items?: DeadLetterJob[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new DeadLetterJob(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: DeadLetterJob[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetDeadLetterJobByUserIdResult implements IResult {
  /** デッドレタージョブ */
  public item?: DeadLetterJob;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DeadLetterJob(data.item);
    }
  }

  public withItem(item?: DeadLetterJob): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteDeadLetterJobByUserIdResult implements IResult {
  /** デッドレタージョブ */
  public item?: DeadLetterJob;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new DeadLetterJob(data.item);
    }
  }

  public withItem(item?: DeadLetterJob): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
