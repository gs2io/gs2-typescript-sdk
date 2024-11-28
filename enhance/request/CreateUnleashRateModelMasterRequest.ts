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

import * as Gs2Enhance from '../model'

export default class CreateUnleashRateModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private targetInventoryModelId: string|null = null;
    private gradeModelId: string|null = null;
    private gradeEntries: Gs2Enhance.UnleashRateEntryModel[]|null = null;

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
    public getTargetInventoryModelId(): string|null {
        return this.targetInventoryModelId;
    }
    public setTargetInventoryModelId(targetInventoryModelId: string|null) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    }
    public withTargetInventoryModelId(targetInventoryModelId: string|null): this {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    }
    public getGradeModelId(): string|null {
        return this.gradeModelId;
    }
    public setGradeModelId(gradeModelId: string|null) {
        this.gradeModelId = gradeModelId;
        return this;
    }
    public withGradeModelId(gradeModelId: string|null): this {
        this.gradeModelId = gradeModelId;
        return this;
    }
    public getGradeEntries(): Gs2Enhance.UnleashRateEntryModel[]|null {
        return this.gradeEntries;
    }
    public setGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[]|null) {
        this.gradeEntries = gradeEntries;
        return this;
    }
    public withGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[]|null): this {
        this.gradeEntries = gradeEntries;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateUnleashRateModelMasterRequest {
        return new CreateUnleashRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeEntries(data.gradeEntries ?
                data.gradeEntries.map((item: {[key: string]: any}) => {
                    return Gs2Enhance.UnleashRateEntryModel.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "gradeModelId": this.getGradeModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries()!.map((item: Gs2Enhance.UnleashRateEntryModel) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}