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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Experience from '../model'

export class UpdateExperienceModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private experienceName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private defaultExperience: number|null = null;
    private defaultRankCap: number|null = null;
    private maxRankCap: number|null = null;
    private rankThresholdName: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getExperienceName(): string|null {
        return this.experienceName;
    }

    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }

    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
        return this;
    }

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getDefaultExperience(): number|null {
        return this.defaultExperience;
    }

    public setDefaultExperience(defaultExperience: number|null) {
        this.defaultExperience = defaultExperience;
        return this;
    }

    public withDefaultExperience(defaultExperience: number|null): this {
        this.defaultExperience = defaultExperience;
        return this;
    }

    public getDefaultRankCap(): number|null {
        return this.defaultRankCap;
    }

    public setDefaultRankCap(defaultRankCap: number|null) {
        this.defaultRankCap = defaultRankCap;
        return this;
    }

    public withDefaultRankCap(defaultRankCap: number|null): this {
        this.defaultRankCap = defaultRankCap;
        return this;
    }

    public getMaxRankCap(): number|null {
        return this.maxRankCap;
    }

    public setMaxRankCap(maxRankCap: number|null) {
        this.maxRankCap = maxRankCap;
        return this;
    }

    public withMaxRankCap(maxRankCap: number|null): this {
        this.maxRankCap = maxRankCap;
        return this;
    }

    public getRankThresholdName(): string|null {
        return this.rankThresholdName;
    }

    public setRankThresholdName(rankThresholdName: string|null) {
        this.rankThresholdName = rankThresholdName;
        return this;
    }

    public withRankThresholdName(rankThresholdName: string|null): this {
        this.rankThresholdName = rankThresholdName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateExperienceModelMasterRequest {
        return new UpdateExperienceModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThresholdName(data["rankThresholdName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThresholdName": this.getRankThresholdName(),
        };
    }
}