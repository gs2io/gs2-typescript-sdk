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

import IModel from '../../core/interface/IModel';

import * as Gs2Limit from '../../limit/model'

export default class GitHubCheckoutSetting implements IModel {
    private apiKeyId: string|null = null;
    private repositoryName: string|null = null;
    private sourcePath: string|null = null;
    private referenceType: string|null = null;
    private commitHash: string|null = null;
    private branchName: string|null = null;
    private tagName: string|null = null;
    public getApiKeyId(): string|null {
        return this.apiKeyId;
    }
    public setApiKeyId(apiKeyId: string|null) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    public withApiKeyId(apiKeyId: string|null): this {
        this.apiKeyId = apiKeyId;
        return this;
    }
    public getRepositoryName(): string|null {
        return this.repositoryName;
    }
    public setRepositoryName(repositoryName: string|null) {
        this.repositoryName = repositoryName;
        return this;
    }
    public withRepositoryName(repositoryName: string|null): this {
        this.repositoryName = repositoryName;
        return this;
    }
    public getSourcePath(): string|null {
        return this.sourcePath;
    }
    public setSourcePath(sourcePath: string|null) {
        this.sourcePath = sourcePath;
        return this;
    }
    public withSourcePath(sourcePath: string|null): this {
        this.sourcePath = sourcePath;
        return this;
    }
    public getReferenceType(): string|null {
        return this.referenceType;
    }
    public setReferenceType(referenceType: string|null) {
        this.referenceType = referenceType;
        return this;
    }
    public withReferenceType(referenceType: string|null): this {
        this.referenceType = referenceType;
        return this;
    }
    public getCommitHash(): string|null {
        return this.commitHash;
    }
    public setCommitHash(commitHash: string|null) {
        this.commitHash = commitHash;
        return this;
    }
    public withCommitHash(commitHash: string|null): this {
        this.commitHash = commitHash;
        return this;
    }
    public getBranchName(): string|null {
        return this.branchName;
    }
    public setBranchName(branchName: string|null) {
        this.branchName = branchName;
        return this;
    }
    public withBranchName(branchName: string|null): this {
        this.branchName = branchName;
        return this;
    }
    public getTagName(): string|null {
        return this.tagName;
    }
    public setTagName(tagName: string|null) {
        this.tagName = tagName;
        return this;
    }
    public withTagName(tagName: string|null): this {
        this.tagName = tagName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GitHubCheckoutSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GitHubCheckoutSetting()
            .withApiKeyId(data["apiKeyId"])
            .withRepositoryName(data["repositoryName"])
            .withSourcePath(data["sourcePath"])
            .withReferenceType(data["referenceType"])
            .withCommitHash(data["commitHash"])
            .withBranchName(data["branchName"])
            .withTagName(data["tagName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "apiKeyId": this.getApiKeyId(),
            "repositoryName": this.getRepositoryName(),
            "sourcePath": this.getSourcePath(),
            "referenceType": this.getReferenceType(),
            "commitHash": this.getCommitHash(),
            "branchName": this.getBranchName(),
            "tagName": this.getTagName(),
        };
    }
}
