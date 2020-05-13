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
  Stack,
  Resource,
  WorkingStack,
  WorkingResource,
  Event,
  Output,
  GitHubCheckoutSetting,
  OutputField,
} from './model';

import { Gs2Request } from '../core/model';

export class DescribeStacksRequest extends Gs2Request {
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

export class CreateStackRequest extends Gs2Request {
  /** スタック名 */
  public name?: string;
  /** スタックの説明 */
  public description?: string;
  /** テンプレートデータ */
  public template?: string;

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
    if (data && data.template !== undefined) {
      this.template = data.template as string;
    } else {
      this.template = undefined;
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

  public withTemplate(template?: string): this {
    this.template = template as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    data.template = this.template;
    return data;
  }

}

export class CreateStackFromGitHubRequest extends Gs2Request {
  /** スタック名 */
  public name?: string;
  /** スタックの説明 */
  public description?: string;
  /** GitHubからソースコードをチェックアウトしてくる設定 */
  public checkoutSetting?: GitHubCheckoutSetting;

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
    if (data && data.checkoutSetting !== undefined && Object.keys(data.checkoutSetting).length > 0) {
      this.checkoutSetting = new GitHubCheckoutSetting(data.checkoutSetting);
    } else {
      this.checkoutSetting = undefined;
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

  public withCheckoutSetting(checkoutSetting?: GitHubCheckoutSetting): this {
    this.checkoutSetting = checkoutSetting as GitHubCheckoutSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.description = this.description;
    if (this.checkoutSetting) {
      data.checkoutSetting = this.checkoutSetting.toDict();
    }
    return data;
  }

}

export class ValidateRequest extends Gs2Request {
  /** テンプレートデータ */
  public template?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.template !== undefined) {
      this.template = data.template as string;
    } else {
      this.template = undefined;
    }
  }

  public withTemplate(template?: string): this {
    this.template = template as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.template = this.template;
    return data;
  }

}

export class GetStackStatusRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class GetStackRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class UpdateStackRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** スタックの説明 */
  public description?: string;
  /** テンプレートデータ */
  public template?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.template !== undefined) {
      this.template = data.template as string;
    } else {
      this.template = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withTemplate(template?: string): this {
    this.template = template as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    data.description = this.description;
    data.template = this.template;
    return data;
  }

}

export class UpdateStackFromGitHubRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** スタックの説明 */
  public description?: string;
  /** GitHubからソースコードをチェックアウトしてくる設定 */
  public checkoutSetting?: GitHubCheckoutSetting;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
    if (data && data.description !== undefined) {
      this.description = data.description as string;
    } else {
      this.description = undefined;
    }
    if (data && data.checkoutSetting !== undefined && Object.keys(data.checkoutSetting).length > 0) {
      this.checkoutSetting = new GitHubCheckoutSetting(data.checkoutSetting);
    } else {
      this.checkoutSetting = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public withDescription(description?: string): this {
    this.description = description as string;
    return this;
  }

  public withCheckoutSetting(checkoutSetting?: GitHubCheckoutSetting): this {
    this.checkoutSetting = checkoutSetting as GitHubCheckoutSetting;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    data.description = this.description;
    if (this.checkoutSetting) {
      data.checkoutSetting = this.checkoutSetting.toDict();
    }
    return data;
  }

}

export class DeleteStackRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class ForceDeleteStackRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class DeleteStackResourcesRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class DeleteStackEntityRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    return data;
  }

}

export class DescribeResourcesRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
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

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
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
    data.stackName = this.stackName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class GetResourceRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** 作成中のリソース名 */
  public resourceName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
    if (data && data.resourceName !== undefined) {
      this.resourceName = data.resourceName as string;
    } else {
      this.resourceName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public withResourceName(resourceName?: string): this {
    this.resourceName = resourceName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    data.resourceName = this.resourceName;
    return data;
  }

}

export class DescribeEventsRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
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

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
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
    data.stackName = this.stackName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class GetEventRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** イベント名 */
  public eventName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
    if (data && data.eventName !== undefined) {
      this.eventName = data.eventName as string;
    } else {
      this.eventName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public withEventName(eventName?: string): this {
    this.eventName = eventName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    data.eventName = this.eventName;
    return data;
  }

}

export class DescribeOutputsRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
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

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
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
    data.stackName = this.stackName;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class GetOutputRequest extends Gs2Request {
  /** スタック名 */
  public stackName?: string;
  /** アウトプット名 */
  public outputName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.stackName !== undefined) {
      this.stackName = data.stackName as string;
    } else {
      this.stackName = undefined;
    }
    if (data && data.outputName !== undefined) {
      this.outputName = data.outputName as string;
    } else {
      this.outputName = undefined;
    }
  }

  public withStackName(stackName?: string): this {
    this.stackName = stackName as string;
    return this;
  }

  public withOutputName(outputName?: string): this {
    this.outputName = outputName as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.stackName = this.stackName;
    data.outputName = this.outputName;
    return data;
  }

}
