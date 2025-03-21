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

import * as Gs2Enhance from '../../enhance/model'
import BonusRate from './BonusRate';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}:rateModel:{rateName}";

export default class RateModel implements IModel {
    private rateModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private targetInventoryModelId: string|null = null;
    private acquireExperienceSuffix: string|null = null;
    private materialInventoryModelId: string|null = null;
    private acquireExperienceHierarchy: string[]|null = null;
    private experienceModelId: string|null = null;
    private bonusRates: Gs2Enhance.BonusRate[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRateName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rateName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rateName}', rateName ?? '');
    }
    public getRateModelId(): string|null {
        return this.rateModelId;
    }
    public setRateModelId(rateModelId: string|null) {
        this.rateModelId = rateModelId;
        return this;
    }
    public withRateModelId(rateModelId: string|null): this {
        this.rateModelId = rateModelId;
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

    public static fromDict(data: {[key: string]: any}): RateModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModel()
            .withRateModelId(data["rateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withAcquireExperienceSuffix(data["acquireExperienceSuffix"])
            .withMaterialInventoryModelId(data["materialInventoryModelId"])
            .withAcquireExperienceHierarchy(data.acquireExperienceHierarchy ?
                data.acquireExperienceHierarchy.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withBonusRates(data.bonusRates ?
                data.bonusRates.map((item: {[key: string]: any}) => {
                    return Gs2Enhance.BonusRate.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rateModelId": this.getRateModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "acquireExperienceSuffix": this.getAcquireExperienceSuffix(),
            "materialInventoryModelId": this.getMaterialInventoryModelId(),
            "acquireExperienceHierarchy": this.getAcquireExperienceHierarchy() ?
                this.getAcquireExperienceHierarchy()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "experienceModelId": this.getExperienceModelId(),
            "bonusRates": this.getBonusRates() ?
                this.getBonusRates()!.map((item: Gs2Enhance.BonusRate) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
