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

import * as Gs2Enhance from '../model'

export class UpdateRateModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private rateName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private targetInventoryModelId: string|null = null;
    private acquireExperienceSuffix: string|null = null;
    private materialInventoryModelId: string|null = null;
    private acquireExperienceHierarchy: string[]|null = null;
    private experienceModelId: string|null = null;
    private bonusRates: Gs2Enhance.BonusRate[]|null = null;

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

    public getRateName(): string|null {
        return this.rateName;
    }

    public setRateName(rateName: string|null) {
        this.rateName = rateName;
        return this;
    }

    public withRateName(rateName: string|null): this {
        this.rateName = rateName;
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

    public getAcquireExperienceSuffix(): string|null {
        return this.acquireExperienceSuffix;
    }

    public setAcquireExperienceSuffix(acquireExperienceSuffix: string|null) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    }

    public withAcquireExperienceSuffix(acquireExperienceSuffix: string|null): this {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    }

    public getMaterialInventoryModelId(): string|null {
        return this.materialInventoryModelId;
    }

    public setMaterialInventoryModelId(materialInventoryModelId: string|null) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    }

    public withMaterialInventoryModelId(materialInventoryModelId: string|null): this {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    }

    public getAcquireExperienceHierarchy(): string[]|null {
        return this.acquireExperienceHierarchy;
    }

    public setAcquireExperienceHierarchy(acquireExperienceHierarchy: string[]|null) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    }

    public withAcquireExperienceHierarchy(acquireExperienceHierarchy: string[]|null): this {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
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

    public getBonusRates(): Gs2Enhance.BonusRate[]|null {
        return this.bonusRates;
    }

    public setBonusRates(bonusRates: Gs2Enhance.BonusRate[]|null) {
        this.bonusRates = bonusRates;
        return this;
    }

    public withBonusRates(bonusRates: Gs2Enhance.BonusRate[]|null): this {
        this.bonusRates = bonusRates;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateRateModelMasterRequest {
        return new UpdateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withAcquireExperienceSuffix(data["acquireExperienceSuffix"])
            .withMaterialInventoryModelId(data["materialInventoryModelId"])
            .withAcquireExperienceHierarchy(data.acquireExperienceHierarchy ?
                data.acquireExperienceHierarchy.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withExperienceModelId(data["experienceModelId"])
            .withBonusRates(data.bonusRates ?
                data.bonusRates.map((item: {[key: string]: any}) => {
                    return Gs2Enhance.BonusRate.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "acquireExperienceSuffix": this.getAcquireExperienceSuffix(),
            "materialInventoryModelId": this.getMaterialInventoryModelId(),
            "acquireExperienceHierarchy": this.getAcquireExperienceHierarchy() ?
                this.getAcquireExperienceHierarchy()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "experienceModelId": this.getExperienceModelId(),
            "bonusRates": this.getBonusRates() ?
                this.getBonusRates()!.map((item: Gs2Enhance.BonusRate) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}