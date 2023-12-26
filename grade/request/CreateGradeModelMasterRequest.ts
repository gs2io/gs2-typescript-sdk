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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Grade from '../model'

export default class CreateGradeModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private defaultGrades: Gs2Grade.DefaultGradeModel[]|null = null;
    private experienceModelId: string|null = null;
    private gradeEntries: Gs2Grade.GradeEntryModel[]|null = null;
    private acquireActionRates: Gs2Grade.AcquireActionRate[]|null = null;

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
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
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
    public getDefaultGrades(): Gs2Grade.DefaultGradeModel[]|null {
        return this.defaultGrades;
    }
    public setDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[]|null) {
        this.defaultGrades = defaultGrades;
        return this;
    }
    public withDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[]|null): this {
        this.defaultGrades = defaultGrades;
        return this;
    }
    public getExperienceModelId(): string|null {
        return this.experienceModelId;
    }
    public setExperienceModelId(experienceModelId: string|null) {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public withExperienceModelId(experienceModelId: string|null): this {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public getGradeEntries(): Gs2Grade.GradeEntryModel[]|null {
        return this.gradeEntries;
    }
    public setGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[]|null) {
        this.gradeEntries = gradeEntries;
        return this;
    }
    public withGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[]|null): this {
        this.gradeEntries = gradeEntries;
        return this;
    }
    public getAcquireActionRates(): Gs2Grade.AcquireActionRate[]|null {
        return this.acquireActionRates;
    }
    public setAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[]|null) {
        this.acquireActionRates = acquireActionRates;
        return this;
    }
    public withAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[]|null): this {
        this.acquireActionRates = acquireActionRates;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateGradeModelMasterRequest {
        return new CreateGradeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultGrades(data.defaultGrades ?
                data.defaultGrades.map((item: {[key: string]: any}) => {
                    return Gs2Grade.DefaultGradeModel.fromDict(item);
                }
            ) : [])
            .withExperienceModelId(data["experienceModelId"])
            .withGradeEntries(data.gradeEntries ?
                data.gradeEntries.map((item: {[key: string]: any}) => {
                    return Gs2Grade.GradeEntryModel.fromDict(item);
                }
            ) : [])
            .withAcquireActionRates(data.acquireActionRates ?
                data.acquireActionRates.map((item: {[key: string]: any}) => {
                    return Gs2Grade.AcquireActionRate.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultGrades": this.getDefaultGrades() ?
                this.getDefaultGrades()!.map((item: Gs2Grade.DefaultGradeModel) => {
                    return item.toDict();
                }
            ) : [],
            "experienceModelId": this.getExperienceModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries()!.map((item: Gs2Grade.GradeEntryModel) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates()!.map((item: Gs2Grade.AcquireActionRate) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}