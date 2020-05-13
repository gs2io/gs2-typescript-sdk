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
    return 'grn:gs2:{region}:{ownerId}:version:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}';
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
  /** 説明文 */
  public description?: string;
  /** バージョンチェック通過後に改めて発行するプロジェクトトークンの権限判定に使用する ユーザ のGRN */
  public assumeUserId?: string;
  /** バージョンを承認したときに実行するスクリプト */
  public acceptVersionScript?: ScriptSetting;
  /** バージョンチェック時 に実行されるスクリプト のGRN */
  public checkVersionTriggerScriptId?: string;
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
    if (data && data.assumeUserId !== undefined) {
      this.assumeUserId = data.assumeUserId;
    } else {
      this.assumeUserId = undefined;
    }
    if (data && data.acceptVersionScript !== undefined && Object.keys(data.acceptVersionScript).length > 0) {
      this.acceptVersionScript = new ScriptSetting(data.acceptVersionScript);
    } else {
      this.acceptVersionScript = undefined;
    }
    if (data && data.checkVersionTriggerScriptId !== undefined) {
      this.checkVersionTriggerScriptId = data.checkVersionTriggerScriptId;
    } else {
      this.checkVersionTriggerScriptId = undefined;
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

  public withAssumeUserId(assumeUserId?: string): this {
    this.assumeUserId = assumeUserId;
    return this;
  }

  public withAcceptVersionScript(acceptVersionScript?: ScriptSetting): this {
    this.acceptVersionScript = acceptVersionScript;
    return this;
  }

  public withCheckVersionTriggerScriptId(checkVersionTriggerScriptId?: string): this {
    this.checkVersionTriggerScriptId = checkVersionTriggerScriptId;
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
    data.assumeUserId = this.assumeUserId;
    if (this.acceptVersionScript) {
      data.acceptVersionScript = this.acceptVersionScript.toDict();
    }
    data.checkVersionTriggerScriptId = this.checkVersionTriggerScriptId;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * バージョンマスター
 *
 * @author Game Server Services, Inc.
 *
 */
export class VersionModelMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, versionName: string): string {
    return 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{versionName}', versionName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getVersionNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** バージョンマスター */
  public versionModelId?: string;
  /** バージョン名 */
  public name?: string;
  /** バージョンマスターの説明 */
  public description?: string;
  /** バージョンのメタデータ */
  public metadata?: string;
  /** バージョンアップを促すバージョン */
  public warningVersion?: Version;
  /** バージョンチェックを蹴るバージョン */
  public errorVersion?: Version;
  /** 判定に使用するバージョン値の種類 */
  public scope?: string;
  /** 現在のバージョン */
  public currentVersion?: Version;
  /** 判定するバージョン値に署名検証を必要とするか */
  public needSignature?: boolean;
  /** 署名検証に使用する暗号鍵 のGRN */
  public signatureKeyId?: string;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.versionModelId !== undefined) {
      this.versionModelId = data.versionModelId;
    } else {
      this.versionModelId = undefined;
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
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.warningVersion !== undefined && Object.keys(data.warningVersion).length > 0) {
      this.warningVersion = new Version(data.warningVersion);
    } else {
      this.warningVersion = undefined;
    }
    if (data && data.errorVersion !== undefined && Object.keys(data.errorVersion).length > 0) {
      this.errorVersion = new Version(data.errorVersion);
    } else {
      this.errorVersion = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope;
    } else {
      this.scope = undefined;
    }
    if (data && data.currentVersion !== undefined && Object.keys(data.currentVersion).length > 0) {
      this.currentVersion = new Version(data.currentVersion);
    } else {
      this.currentVersion = undefined;
    }
    if (data && data.needSignature !== undefined) {
      this.needSignature = data.needSignature;
    } else {
      this.needSignature = false;
    }
    if (data && data.signatureKeyId !== undefined) {
      this.signatureKeyId = data.signatureKeyId;
    } else {
      this.signatureKeyId = undefined;
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

  public withVersionModelId(versionModelId?: string): this {
    this.versionModelId = versionModelId;
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

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withWarningVersion(warningVersion?: Version): this {
    this.warningVersion = warningVersion;
    return this;
  }

  public withErrorVersion(errorVersion?: Version): this {
    this.errorVersion = errorVersion;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope;
    return this;
  }

  public withCurrentVersion(currentVersion?: Version): this {
    this.currentVersion = currentVersion;
    return this;
  }

  public withNeedSignature(needSignature?: boolean): this {
    this.needSignature = needSignature;
    return this;
  }

  public withSignatureKeyId(signatureKeyId?: string): this {
    this.signatureKeyId = signatureKeyId;
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
    data.versionModelId = this.versionModelId;
    data.name = this.name;
    data.description = this.description;
    data.metadata = this.metadata;
    if (this.warningVersion) {
      data.warningVersion = this.warningVersion.toDict();
    }
    if (this.errorVersion) {
      data.errorVersion = this.errorVersion.toDict();
    }
    data.scope = this.scope;
    if (this.currentVersion) {
      data.currentVersion = this.currentVersion.toDict();
    }
    data.needSignature = this.needSignature;
    data.signatureKeyId = this.signatureKeyId;
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * バージョン
 *
 * @author Game Server Services, Inc.
 *
 */
export class Version implements IModel {
  /** メジャーバージョン */
  public major?: number;
  /** マイナーバージョン */
  public minor?: number;
  /** マイクロバージョン */
  public micro?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.major !== undefined) {
      this.major = data.major;
    } else {
      this.major = 0;
    }
    if (data && data.minor !== undefined) {
      this.minor = data.minor;
    } else {
      this.minor = 0;
    }
    if (data && data.micro !== undefined) {
      this.micro = data.micro;
    } else {
      this.micro = 0;
    }
  }

  public withMajor(major?: number): this {
    this.major = major;
    return this;
  }

  public withMinor(minor?: number): this {
    this.minor = minor;
    return this;
  }

  public withMicro(micro?: number): this {
    this.micro = micro;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.major = this.major;
    data.minor = this.minor;
    data.micro = this.micro;
    return data;
  }

}


/**
 * バージョン設定
 *
 * @author Game Server Services, Inc.
 *
 */
export class VersionModel implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, versionName: string): string {
    return 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{versionName}', versionName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getVersionNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** バージョン設定 */
  public versionModelId?: string;
  /** バージョンの種類名 */
  public name?: string;
  /** バージョンの種類のメタデータ */
  public metadata?: string;
  /** バージョンアップを促すバージョン */
  public warningVersion?: Version;
  /** バージョンチェックを蹴るバージョン */
  public errorVersion?: Version;
  /** 判定に使用するバージョン値の種類 */
  public scope?: string;
  /** 現在のバージョン */
  public currentVersion?: Version;
  /** 判定するバージョン値に署名検証を必要とするか */
  public needSignature?: boolean;
  /** 署名検証に使用する暗号鍵 のGRN */
  public signatureKeyId?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.versionModelId !== undefined) {
      this.versionModelId = data.versionModelId;
    } else {
      this.versionModelId = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.metadata !== undefined) {
      this.metadata = data.metadata;
    } else {
      this.metadata = undefined;
    }
    if (data && data.warningVersion !== undefined && Object.keys(data.warningVersion).length > 0) {
      this.warningVersion = new Version(data.warningVersion);
    } else {
      this.warningVersion = undefined;
    }
    if (data && data.errorVersion !== undefined && Object.keys(data.errorVersion).length > 0) {
      this.errorVersion = new Version(data.errorVersion);
    } else {
      this.errorVersion = undefined;
    }
    if (data && data.scope !== undefined) {
      this.scope = data.scope;
    } else {
      this.scope = undefined;
    }
    if (data && data.currentVersion !== undefined && Object.keys(data.currentVersion).length > 0) {
      this.currentVersion = new Version(data.currentVersion);
    } else {
      this.currentVersion = undefined;
    }
    if (data && data.needSignature !== undefined) {
      this.needSignature = data.needSignature;
    } else {
      this.needSignature = false;
    }
    if (data && data.signatureKeyId !== undefined) {
      this.signatureKeyId = data.signatureKeyId;
    } else {
      this.signatureKeyId = undefined;
    }
  }

  public withVersionModelId(versionModelId?: string): this {
    this.versionModelId = versionModelId;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withMetadata(metadata?: string): this {
    this.metadata = metadata;
    return this;
  }

  public withWarningVersion(warningVersion?: Version): this {
    this.warningVersion = warningVersion;
    return this;
  }

  public withErrorVersion(errorVersion?: Version): this {
    this.errorVersion = errorVersion;
    return this;
  }

  public withScope(scope?: string): this {
    this.scope = scope;
    return this;
  }

  public withCurrentVersion(currentVersion?: Version): this {
    this.currentVersion = currentVersion;
    return this;
  }

  public withNeedSignature(needSignature?: boolean): this {
    this.needSignature = needSignature;
    return this;
  }

  public withSignatureKeyId(signatureKeyId?: string): this {
    this.signatureKeyId = signatureKeyId;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.versionModelId = this.versionModelId;
    data.name = this.name;
    data.metadata = this.metadata;
    if (this.warningVersion) {
      data.warningVersion = this.warningVersion.toDict();
    }
    if (this.errorVersion) {
      data.errorVersion = this.errorVersion.toDict();
    }
    data.scope = this.scope;
    if (this.currentVersion) {
      data.currentVersion = this.currentVersion.toDict();
    }
    data.needSignature = this.needSignature;
    data.signatureKeyId = this.signatureKeyId;
    return data;
  }

}


/**
 * 承認したバージョン
 *
 * @author Game Server Services, Inc.
 *
 */
export class AcceptVersion implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string, userId: string, versionName: string): string {
    return 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName)
      .replace('{userId}', userId)
      .replace('{versionName}', versionName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNamespaceNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getUserIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getVersionNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');
    grnFormat = grnFormat.replace('{userId}', '(.*)');
    grnFormat = grnFormat.replace('{versionName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }
  /** 承認したバージョン */
  public acceptVersionId?: string;
  /** 承認したバージョン名 */
  public versionName?: string;
  /** ユーザーID */
  public userId?: string;
  /** 承認したバージョン */
  public version?: Version;
  /** 作成日時 */
  public createdAt?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.acceptVersionId !== undefined) {
      this.acceptVersionId = data.acceptVersionId;
    } else {
      this.acceptVersionId = undefined;
    }
    if (data && data.versionName !== undefined) {
      this.versionName = data.versionName;
    } else {
      this.versionName = undefined;
    }
    if (data && data.userId !== undefined) {
      this.userId = data.userId;
    } else {
      this.userId = undefined;
    }
    if (data && data.version !== undefined && Object.keys(data.version).length > 0) {
      this.version = new Version(data.version);
    } else {
      this.version = undefined;
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

  public withAcceptVersionId(acceptVersionId?: string): this {
    this.acceptVersionId = acceptVersionId;
    return this;
  }

  public withVersionName(versionName?: string): this {
    this.versionName = versionName;
    return this;
  }

  public withUserId(userId?: string): this {
    this.userId = userId;
    return this;
  }

  public withVersion(version?: Version): this {
    this.version = version;
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
    data.acceptVersionId = this.acceptVersionId;
    data.versionName = this.versionName;
    data.userId = this.userId;
    if (this.version) {
      data.version = this.version.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * バージョンの検証結果
 *
 * @author Game Server Services, Inc.
 *
 */
export class Status implements IModel {
  /** バージョン設定 */
  public versionModel?: VersionModel;
  /** 現在のバージョン */
  public currentVersion?: Version;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.versionModel !== undefined && Object.keys(data.versionModel).length > 0) {
      this.versionModel = new VersionModel(data.versionModel);
    } else {
      this.versionModel = undefined;
    }
    if (data && data.currentVersion !== undefined && Object.keys(data.currentVersion).length > 0) {
      this.currentVersion = new Version(data.currentVersion);
    } else {
      this.currentVersion = undefined;
    }
  }

  public withVersionModel(versionModel?: VersionModel): this {
    this.versionModel = versionModel;
    return this;
  }

  public withCurrentVersion(currentVersion?: Version): this {
    this.currentVersion = currentVersion;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.versionModel) {
      data.versionModel = this.versionModel.toDict();
    }
    if (this.currentVersion) {
      data.currentVersion = this.currentVersion.toDict();
    }
    return data;
  }

}


/**
 * 検証するバージョン
 *
 * @author Game Server Services, Inc.
 *
 */
export class TargetVersion implements IModel {
  /** バージョンの名前 */
  public versionName?: string;
  /** バージョン */
  public version?: Version;
  /** ボディ */
  public body?: string;
  /** 署名 */
  public signature?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.versionName !== undefined) {
      this.versionName = data.versionName;
    } else {
      this.versionName = undefined;
    }
    if (data && data.version !== undefined && Object.keys(data.version).length > 0) {
      this.version = new Version(data.version);
    } else {
      this.version = undefined;
    }
    if (data && data.body !== undefined) {
      this.body = data.body;
    } else {
      this.body = undefined;
    }
    if (data && data.signature !== undefined) {
      this.signature = data.signature;
    } else {
      this.signature = undefined;
    }
  }

  public withVersionName(versionName?: string): this {
    this.versionName = versionName;
    return this;
  }

  public withVersion(version?: Version): this {
    this.version = version;
    return this;
  }

  public withBody(body?: string): this {
    this.body = body;
    return this;
  }

  public withSignature(signature?: string): this {
    this.signature = signature;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.versionName = this.versionName;
    if (this.version) {
      data.version = this.version.toDict();
    }
    data.body = this.body;
    data.signature = this.signature;
    return data;
  }

}


/**
 * 署名検証に使用するバージョン
 *
 * @author Game Server Services, Inc.
 *
 */
export class SignTargetVersion implements IModel {
  /** None */
  public region?: string;
  /** オーナーID */
  public ownerId?: string;
  /** ネームスペース名 */
  public namespaceName?: string;
  /** バージョンの種類名 */
  public versionName?: string;
  /** バージョン */
  public version?: Version;

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
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.versionName !== undefined) {
      this.versionName = data.versionName;
    } else {
      this.versionName = undefined;
    }
    if (data && data.version !== undefined && Object.keys(data.version).length > 0) {
      this.version = new Version(data.version);
    } else {
      this.version = undefined;
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

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName;
    return this;
  }

  public withVersionName(versionName?: string): this {
    this.versionName = versionName;
    return this;
  }

  public withVersion(version?: Version): this {
    this.version = version;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.region = this.region;
    data.ownerId = this.ownerId;
    data.namespaceName = this.namespaceName;
    data.versionName = this.versionName;
    if (this.version) {
      data.version = this.version.toDict();
    }
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
 * 現在有効なバージョン
 *
 * @author Game Server Services, Inc.
 *
 */
export class CurrentVersionMaster implements IModel {

  public static createGrn(region: string, ownerId: string, namespaceName: string): string {
    return 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:version:{namespaceName}:';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{namespaceName}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }
  /** ネームスペース名 */
  public namespaceName?: string;
  /** マスターデータ */
  public settings?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.namespaceName !== undefined) {
      this.namespaceName = data.namespaceName;
    } else {
      this.namespaceName = undefined;
    }
    if (data && data.settings !== undefined) {
      this.settings = data.settings;
    } else {
      this.settings = undefined;
    }
  }

  public withNamespaceName(namespaceName?: string): this {
    this.namespaceName = namespaceName;
    return this;
  }

  public withSettings(settings?: string): this {
    this.settings = settings;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.namespaceName = this.namespaceName;
    data.settings = this.settings;
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
