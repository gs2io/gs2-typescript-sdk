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
 * スタック
 *
 * @author Game Server Services, Inc.
 *
 */
export class Stack implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stack:{stackName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** スタック */
  public stackId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** スタック名 */
  public name?: string;
  /** スタックの説明 */
  public description?: string;
  /** テンプレートデータ */
  public template?: string;
  /** 実行状態 */
  public status?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.stackId !== undefined) {
      this.stackId = data.stackId;
    } else {
      this.stackId = undefined;
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
    if (data && data.template !== undefined) {
      this.template = data.template;
    } else {
      this.template = undefined;
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

  public withStackId(stackId?: string): this {
    this.stackId = stackId;
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

  public withTemplate(template?: string): this {
    this.template = template;
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
    data.stackId = this.stackId;
    data.ownerId = this.ownerId;
    data.name = this.name;
    data.description = this.description;
    data.template = this.template;
    data.status = this.status;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 作成されたのリソース
 *
 * @author Game Server Services, Inc.
 *
 */
export class Resource implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string, resourceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stack:{stackName}:resource:{resourceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName)
      .replace('{resourceName}', resourceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getResourceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 作成されたのリソース */
  public resourceId?: string;
  /** 操作対象のリソース */
  public type?: string;
  /** 作成中のリソース名 */
  public name?: string;
  /** リクエストパラメータ */
  public request?: string;
  /** リソースの作成・更新のレスポンス */
  public response?: string;
  /** ロールバック操作の種類 */
  public rollbackContext?: string;
  /** ロールバック用のリクエストパラメータ */
  public rollbackRequest?: string;
  /** ロールバック時に依存しているリソースの名前 */
  public rollbackAfter?: string[];
  /** リソースを作成したときに Output に記録するフィールド */
  public outputFields?: OutputField[];
  /** このリソースが作成された時の実行 ID */
  public workId?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.resourceId !== undefined) {
      this.resourceId = data.resourceId;
    } else {
      this.resourceId = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.request !== undefined) {
      this.request = data.request;
    } else {
      this.request = undefined;
    }
    if (data && data.response !== undefined) {
      this.response = data.response;
    } else {
      this.response = undefined;
    }
    if (data && data.rollbackContext !== undefined) {
      this.rollbackContext = data.rollbackContext;
    } else {
      this.rollbackContext = undefined;
    }
    if (data && data.rollbackRequest !== undefined) {
      this.rollbackRequest = data.rollbackRequest;
    } else {
      this.rollbackRequest = undefined;
    }
    if (data && data.rollbackAfter !== undefined) {
      this.rollbackAfter = data.rollbackAfter as string[];
      for (let i = 0; i < data.rollbackAfter.length; i++) {
            this.rollbackAfter[i] = data.rollbackAfter[i];
      }
    } else {
      this.rollbackAfter = undefined;
    }
    if (data && data.outputFields !== undefined) {
      this.outputFields = data.outputFields as OutputField[];
      for (let i = 0; i < data.outputFields.length; i++) {
            this.outputFields[i] = new OutputField(data.outputFields[i]);
      }
    } else {
      this.outputFields = undefined;
    }
    if (data && data.workId !== undefined) {
      this.workId = data.workId;
    } else {
      this.workId = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withResourceId(resourceId?: string): this {
    this.resourceId = resourceId;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withRequest(request?: string): this {
    this.request = request;
    return this;
  }

  public withResponse(response?: string): this {
    this.response = response;
    return this;
  }

  public withRollbackContext(rollbackContext?: string): this {
    this.rollbackContext = rollbackContext;
    return this;
  }

  public withRollbackRequest(rollbackRequest?: string): this {
    this.rollbackRequest = rollbackRequest;
    return this;
  }

  public withRollbackAfter(rollbackAfter?: string[]): this {
    this.rollbackAfter = rollbackAfter as string[];
    if (rollbackAfter) {
      for (let i = 0; i < rollbackAfter!.length; i++) {
          this.rollbackAfter[i] = String(rollbackAfter![i]);
      }
    }
    return this;
  }

  public withOutputFields(outputFields?: OutputField[]): this {
    this.outputFields = outputFields as OutputField[];
    if (outputFields) {
      for (let i = 0; i < outputFields!.length; i++) {
          this.outputFields[i] = outputFields![i];
      }
    }
    return this;
  }

  public withWorkId(workId?: string): this {
    this.workId = workId;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.resourceId = this.resourceId;
    data.type = this.type;
    data.name = this.name;
    data.request = this.request;
    data.response = this.response;
    data.rollbackContext = this.rollbackContext;
    data.rollbackRequest = this.rollbackRequest;
    data.rollbackAfter = this.rollbackAfter;
    if (this.outputFields) {
      data.outputFields = this.outputFields.map((item) => item.toDict());
    }
    data.workId = this.workId;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * 実行中のスタック
 *
 * @author Game Server Services, Inc.
 *
 */
export class WorkingStack implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string): string {
    return 'grn:gs2:{region}:{ownerId}:working:{stackName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** 実行中のスタック */
  public stackId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** 実行中のスタック名 */
  public name?: string;
  /** 実行に対して割り振られる一意な ID */
  public workId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.stackId !== undefined) {
      this.stackId = data.stackId;
    } else {
      this.stackId = undefined;
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
    if (data && data.workId !== undefined) {
      this.workId = data.workId;
    } else {
      this.workId = undefined;
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

  public withStackId(stackId?: string): this {
    this.stackId = stackId;
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

  public withWorkId(workId?: string): this {
    this.workId = workId;
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
    data.stackId = this.stackId;
    data.ownerId = this.ownerId;
    data.name = this.name;
    data.workId = this.workId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 作成中のリソース
 *
 * @author Game Server Services, Inc.
 *
 */
export class WorkingResource implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string, resourceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:working:{stackName}:resource:{resourceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName)
      .replace('{resourceName}', resourceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getResourceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:working:{stackName}:resource:{resourceName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{resourceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 作成中のリソース */
  public resourceId?: string;
  /** 操作の種類 */
  public context?: string;
  /** 操作対象のリソース */
  public type?: string;
  /** 作成中のリソース名 */
  public name?: string;
  /** リクエストパラメータ */
  public request?: string;
  /** 依存しているリソースの名前 */
  public after?: string[];
  /** ロールバック操作の種類 */
  public rollbackContext?: string;
  /** ロールバック用のリクエストパラメータ */
  public rollbackRequest?: string;
  /** ロールバック時に依存しているリソースの名前 */
  public rollbackAfter?: string[];
  /** リソースを作成したときに Output に記録するフィールド */
  public outputFields?: OutputField[];
  /** 実行に対して割り振られる一意な ID */
  public workId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.resourceId !== undefined) {
      this.resourceId = data.resourceId;
    } else {
      this.resourceId = undefined;
    }
    if (data && data.context !== undefined) {
      this.context = data.context;
    } else {
      this.context = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.request !== undefined) {
      this.request = data.request;
    } else {
      this.request = undefined;
    }
    if (data && data.after !== undefined) {
      this.after = data.after as string[];
      for (let i = 0; i < data.after.length; i++) {
            this.after[i] = data.after[i];
      }
    } else {
      this.after = undefined;
    }
    if (data && data.rollbackContext !== undefined) {
      this.rollbackContext = data.rollbackContext;
    } else {
      this.rollbackContext = undefined;
    }
    if (data && data.rollbackRequest !== undefined) {
      this.rollbackRequest = data.rollbackRequest;
    } else {
      this.rollbackRequest = undefined;
    }
    if (data && data.rollbackAfter !== undefined) {
      this.rollbackAfter = data.rollbackAfter as string[];
      for (let i = 0; i < data.rollbackAfter.length; i++) {
            this.rollbackAfter[i] = data.rollbackAfter[i];
      }
    } else {
      this.rollbackAfter = undefined;
    }
    if (data && data.outputFields !== undefined) {
      this.outputFields = data.outputFields as OutputField[];
      for (let i = 0; i < data.outputFields.length; i++) {
            this.outputFields[i] = new OutputField(data.outputFields[i]);
      }
    } else {
      this.outputFields = undefined;
    }
    if (data && data.workId !== undefined) {
      this.workId = data.workId;
    } else {
      this.workId = undefined;
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

  public withResourceId(resourceId?: string): this {
    this.resourceId = resourceId;
    return this;
  }

  public withContext(context?: string): this {
    this.context = context;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withRequest(request?: string): this {
    this.request = request;
    return this;
  }

  public withAfter(after?: string[]): this {
    this.after = after as string[];
    if (after) {
      for (let i = 0; i < after!.length; i++) {
          this.after[i] = String(after![i]);
      }
    }
    return this;
  }

  public withRollbackContext(rollbackContext?: string): this {
    this.rollbackContext = rollbackContext;
    return this;
  }

  public withRollbackRequest(rollbackRequest?: string): this {
    this.rollbackRequest = rollbackRequest;
    return this;
  }

  public withRollbackAfter(rollbackAfter?: string[]): this {
    this.rollbackAfter = rollbackAfter as string[];
    if (rollbackAfter) {
      for (let i = 0; i < rollbackAfter!.length; i++) {
          this.rollbackAfter[i] = String(rollbackAfter![i]);
      }
    }
    return this;
  }

  public withOutputFields(outputFields?: OutputField[]): this {
    this.outputFields = outputFields as OutputField[];
    if (outputFields) {
      for (let i = 0; i < outputFields!.length; i++) {
          this.outputFields[i] = outputFields![i];
      }
    }
    return this;
  }

  public withWorkId(workId?: string): this {
    this.workId = workId;
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
    data.resourceId = this.resourceId;
    data.context = this.context;
    data.type = this.type;
    data.name = this.name;
    data.request = this.request;
    data.after = this.after;
    data.rollbackContext = this.rollbackContext;
    data.rollbackRequest = this.rollbackRequest;
    data.rollbackAfter = this.rollbackAfter;
    if (this.outputFields) {
      data.outputFields = this.outputFields.map((item) => item.toDict());
    }
    data.workId = this.workId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 発生したイベント
 *
 * @author Game Server Services, Inc.
 *
 */
export class Event implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string, eventName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stack:{stackName}:event:{eventName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName)
      .replace('{eventName}', eventName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getEventNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:event:{eventName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{eventName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 発生したイベント */
  public eventId?: string;
  /** イベント名 */
  public name?: string;
  /** イベントの種類 */
  public resourceName?: string;
  /** イベントの種類 */
  public type?: string;
  /** メッセージ */
  public message?: string;
  /** 日時 */
  public eventAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.eventId !== undefined) {
      this.eventId = data.eventId;
    } else {
      this.eventId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.resourceName !== undefined) {
      this.resourceName = data.resourceName;
    } else {
      this.resourceName = undefined;
    }
    if (data && data.type !== undefined) {
      this.type = data.type;
    } else {
      this.type = undefined;
    }
    if (data && data.message !== undefined) {
      this.message = data.message;
    } else {
      this.message = undefined;
    }
    if (data && data.eventAt !== undefined) {
      this.eventAt = data.eventAt;
    } else {
      this.eventAt = 0;
    }
  }

  public withEventId(eventId?: string): this {
    this.eventId = eventId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withResourceName(resourceName?: string): this {
    this.resourceName = resourceName;
    return this;
  }

  public withType(type?: string): this {
    this.type = type;
    return this;
  }

  public withMessage(message?: string): this {
    this.message = message;
    return this;
  }

  public withEventAt(eventAt?: number): this {
    this.eventAt = eventAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.eventId = this.eventId;
    data.name = this.name;
    data.resourceName = this.resourceName;
    data.type = this.type;
    data.message = this.message;
    data.eventAt = this.eventAt;
    return data;
  }

}


/**
 * アウトプット
 *
 * @author Game Server Services, Inc.
 *
 */
export class Output implements IModel {

  public static createGrn(region: string, ownerId: string, stackName: string, outputName: string): string {
    return 'grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{stackName}', stackName)
      .replace('{outputName}', outputName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{outputName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{outputName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getStackNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{outputName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getOutputNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{stackName}', '(.*)');
    grnFormat = grnFormat.replace('{outputName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** アウトプット */
  public outputId?: string;
  /** アウトプット名 */
  public name?: string;
  /** 値 */
  public value?: string;
  /** 作成日時 */
  public createdAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.outputId !== undefined) {
      this.outputId = data.outputId;
    } else {
      this.outputId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = undefined;
    }
    if (data && data.createdAt !== undefined) {
      this.createdAt = data.createdAt;
    } else {
      this.createdAt = 0;
    }
  }

  public withOutputId(outputId?: string): this {
    this.outputId = outputId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withValue(value?: string): this {
    this.value = value;
    return this;
  }

  public withCreatedAt(createdAt?: number): this {
    this.createdAt = createdAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.outputId = this.outputId;
    data.name = this.name;
    data.value = this.value;
    data.createdAt = this.createdAt;
    return data;
  }

}


/**
 * GitHubからリソースをチェックアウトしてくる設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class GitHubCheckoutSetting implements IModel {
  /** リソースの取得に使用するGitHub のAPIキー のGRN */
  public gitHubApiKeyId?: string;
  /** リポジトリ名 */
  public repositoryName?: string;
  /** ソースコードのファイルパス */
  public sourcePath?: string;
  /** コードの取得元 */
  public referenceType?: string;
  /** コミットハッシュ */
  public commitHash?: string;
  /** ブランチ名 */
  public branchName?: string;
  /** タグ名 */
  public tagName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.gitHubApiKeyId !== undefined) {
      this.gitHubApiKeyId = data.gitHubApiKeyId;
    } else {
      this.gitHubApiKeyId = undefined;
    }
    if (data && data.repositoryName !== undefined) {
      this.repositoryName = data.repositoryName;
    } else {
      this.repositoryName = undefined;
    }
    if (data && data.sourcePath !== undefined) {
      this.sourcePath = data.sourcePath;
    } else {
      this.sourcePath = undefined;
    }
    if (data && data.referenceType !== undefined) {
      this.referenceType = data.referenceType;
    } else {
      this.referenceType = undefined;
    }
    if (data && data.commitHash !== undefined) {
      this.commitHash = data.commitHash;
    } else {
      this.commitHash = undefined;
    }
    if (data && data.branchName !== undefined) {
      this.branchName = data.branchName;
    } else {
      this.branchName = undefined;
    }
    if (data && data.tagName !== undefined) {
      this.tagName = data.tagName;
    } else {
      this.tagName = undefined;
    }
  }

  public withGitHubApiKeyId(gitHubApiKeyId?: string): this {
    this.gitHubApiKeyId = gitHubApiKeyId;
    return this;
  }

  public withRepositoryName(repositoryName?: string): this {
    this.repositoryName = repositoryName;
    return this;
  }

  public withSourcePath(sourcePath?: string): this {
    this.sourcePath = sourcePath;
    return this;
  }

  public withReferenceType(referenceType?: string): this {
    this.referenceType = referenceType;
    return this;
  }

  public withCommitHash(commitHash?: string): this {
    this.commitHash = commitHash;
    return this;
  }

  public withBranchName(branchName?: string): this {
    this.branchName = branchName;
    return this;
  }

  public withTagName(tagName?: string): this {
    this.tagName = tagName;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.gitHubApiKeyId = this.gitHubApiKeyId;
    data.repositoryName = this.repositoryName;
    data.sourcePath = this.sourcePath;
    data.referenceType = this.referenceType;
    data.commitHash = this.commitHash;
    data.branchName = this.branchName;
    data.tagName = this.tagName;
    return data;
  }

}


/**
 * Output に記録するフィールド
 *
 * @author Game Server Services, Inc.
 *
 */
export class OutputField implements IModel {
  /** 名前 */
  public name?: string;
  /** フィールド名 */
  public fieldName?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.fieldName !== undefined) {
      this.fieldName = data.fieldName;
    } else {
      this.fieldName = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withFieldName(fieldName?: string): this {
    this.fieldName = fieldName;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.fieldName = this.fieldName;
    return data;
  }

}
