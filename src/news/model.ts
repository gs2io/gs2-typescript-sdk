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
    return 'grn:gs2:{region}:{ownerId}:news:{namespaceName}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{namespaceName}', namespaceName);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:news:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:news:{namespaceName}';
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
    let grnFormat = 'grn:gs2:{region}:{ownerId}:news:{namespaceName}';
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
  /** ネームスペースの名前 */
  public name?: string;
  /** ネームスペースの説明 */
  public description?: string;
  /** バージョン */
  public version?: string;
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
    if (data && data.version !== undefined) {
      this.version = data.version;
    } else {
      this.version = undefined;
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

  public withVersion(version?: string): this {
    this.version = version;
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
    data.version = this.version;
    if (this.logSetting) {
      data.logSetting = this.logSetting.toDict();
    }
    data.createdAt = this.createdAt;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * お知らせ記事
 *
 * @author Game Server Services, Inc.
 *
 */
export class News implements IModel {
  /** セクション名 */
  public section?: string;
  /** コンテンツ名 */
  public content?: string;
  /** 記事見出し */
  public title?: string;
  /** 配信期間を決定する GS2-Schedule のイベントID */
  public scheduleEventId?: string;
  /** タイムスタンプ */
  public timestamp?: number;
  /** Front Matter */
  public frontMatter?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.section !== undefined) {
      this.section = data.section;
    } else {
      this.section = undefined;
    }
    if (data && data.content !== undefined) {
      this.content = data.content;
    } else {
      this.content = undefined;
    }
    if (data && data.title !== undefined) {
      this.title = data.title;
    } else {
      this.title = undefined;
    }
    if (data && data.scheduleEventId !== undefined) {
      this.scheduleEventId = data.scheduleEventId;
    } else {
      this.scheduleEventId = undefined;
    }
    if (data && data.timestamp !== undefined) {
      this.timestamp = data.timestamp;
    } else {
      this.timestamp = 0;
    }
    if (data && data.frontMatter !== undefined) {
      this.frontMatter = data.frontMatter;
    } else {
      this.frontMatter = undefined;
    }
  }

  public withSection(section?: string): this {
    this.section = section;
    return this;
  }

  public withContent(content?: string): this {
    this.content = content;
    return this;
  }

  public withTitle(title?: string): this {
    this.title = title;
    return this;
  }

  public withScheduleEventId(scheduleEventId?: string): this {
    this.scheduleEventId = scheduleEventId;
    return this;
  }

  public withTimestamp(timestamp?: number): this {
    this.timestamp = timestamp;
    return this;
  }

  public withFrontMatter(frontMatter?: string): this {
    this.frontMatter = frontMatter;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.section = this.section;
    data.content = this.content;
    data.title = this.title;
    data.scheduleEventId = this.scheduleEventId;
    data.timestamp = this.timestamp;
    data.frontMatter = this.frontMatter;
    return data;
  }

}


/**
 * ニュース記事
 *
 * @author Game Server Services, Inc.
 *
 */
export class SetCookieRequestEntry implements IModel {
  /** 記事を閲覧できるようにするために設定してほしい Cookie のキー値 */
  public key?: string;
  /** 記事を閲覧できるようにするために設定してほしい Cookie の値 */
  public value?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.key !== undefined) {
      this.key = data.key;
    } else {
      this.key = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = undefined;
    }
  }

  public withKey(key?: string): this {
    this.key = key;
    return this;
  }

  public withValue(value?: string): this {
    this.value = value;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.key = this.key;
    data.value = this.value;
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
