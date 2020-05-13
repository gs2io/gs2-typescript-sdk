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
  Script,
  GitHubCheckoutSetting,
  LogSetting,
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

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class DescribeScriptsResult implements IResult {
  /** スクリプトのリスト */
  public items?: Script[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new Script(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: Script[]): this {
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

export class CreateScriptResult implements IResult {
  /** 作成したスクリプト */
  public item?: Script;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Script(data.item);
    }
  }

  public withItem(item?: Script): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class CreateScriptFromGitHubResult implements IResult {
  /** 作成したスクリプト */
  public item?: Script;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Script(data.item);
    }
  }

  public withItem(item?: Script): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetScriptResult implements IResult {
  /** スクリプト */
  public item?: Script;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Script(data.item);
    }
  }

  public withItem(item?: Script): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateScriptResult implements IResult {
  /** 更新したスクリプト */
  public item?: Script;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Script(data.item);
    }
  }

  public withItem(item?: Script): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class UpdateScriptFromGitHubResult implements IResult {
  /** 更新したスクリプト */
  public item?: Script;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Script(data.item);
    }
  }

  public withItem(item?: Script): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DeleteScriptResult implements IResult {

  constructor(
    data?: { [key: string]: any },
  ) {
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    return data;
  }

}

export class InvokeScriptResult implements IResult {
  /** ステータスコード */
  public code?: number;
  /** 戻り値 */
  public result?: string;
  /** スクリプトの実行時間(ミリ秒) */
  public executeTime?: number;
  /** 費用の計算対象となった時間(秒) */
  public charged?: number;
  /** 標準出力の内容のリスト */
  public output?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.code = data.code;
      this.result = data.result;
      this.executeTime = data.executeTime;
      this.charged = data.charged;
      this.output = data.output.map((item: { [key: string]: any }) => {
        return item;
      });
    }
  }

  public withCode(code?: number): this {
    this.code = code;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public withExecuteTime(executeTime?: number): this {
    this.executeTime = executeTime;
    return this;
  }

  public withCharged(charged?: number): this {
    this.charged = charged;
    return this;
  }

  public withOutput(output?: string[]): this {
    this.output = output;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.code = this.code;
    data.result = this.result;
    data.executeTime = this.executeTime;
    data.charged = this.charged;
    data.output = this.output;
    return data;
  }

}

export class DebugInvokeResult implements IResult {
  /** ステータスコード */
  public code?: number;
  /** 戻り値 */
  public result?: string;
  /** スクリプトの実行時間(ミリ秒) */
  public executeTime?: number;
  /** 費用の計算対象となった時間(秒) */
  public charged?: number;
  /** 標準出力の内容のリスト */
  public output?: string[];

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.code = data.code;
      this.result = data.result;
      this.executeTime = data.executeTime;
      this.charged = data.charged;
      this.output = data.output.map((item: { [key: string]: any }) => {
        return item;
      });
    }
  }

  public withCode(code?: number): this {
    this.code = code;
    return this;
  }

  public withResult(result?: string): this {
    this.result = result;
    return this;
  }

  public withExecuteTime(executeTime?: number): this {
    this.executeTime = executeTime;
    return this;
  }

  public withCharged(charged?: number): this {
    this.charged = charged;
    return this;
  }

  public withOutput(output?: string[]): this {
    this.output = output;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.code = this.code;
    data.result = this.result;
    data.executeTime = this.executeTime;
    data.charged = this.charged;
    data.output = this.output;
    return data;
  }

}
