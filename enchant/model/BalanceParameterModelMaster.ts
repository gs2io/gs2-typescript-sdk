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

import * as Gs2Enchant from '../../enchant/model'
import BalanceParameterValueModel from './BalanceParameterValueModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:balance:{parameterName}";

export default class BalanceParameterModelMaster implements IModel {
    private balanceParameterModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private totalValue: number|null = null;
    private initialValueStrategy: string|null = null;
    private parameters: Gs2Enchant.BalanceParameterValueModel[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{parameterName}', '.*')
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
            .replace('{parameterName}', '.*')
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
            .replace('{parameterName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getParameterName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{parameterName}', '(.*)')
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
        if (this.getParameterName(grn) == null || this.getParameterName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        parameterName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{parameterName}', parameterName ?? '');
    }
    public getBalanceParameterModelId(): string|null {
        return this.balanceParameterModelId;
    }
    public setBalanceParameterModelId(balanceParameterModelId: string|null) {
        this.balanceParameterModelId = balanceParameterModelId;
        return this;
    }
    public withBalanceParameterModelId(balanceParameterModelId: string|null): this {
        this.balanceParameterModelId = balanceParameterModelId;
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
    public getTotalValue(): number|null {
        return this.totalValue;
    }
    public setTotalValue(totalValue: number|null) {
        this.totalValue = totalValue;
        return this;
    }
    public withTotalValue(totalValue: number|null): this {
        this.totalValue = totalValue;
        return this;
    }
    public getInitialValueStrategy(): string|null {
        return this.initialValueStrategy;
    }
    public setInitialValueStrategy(initialValueStrategy: string|null) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    }
    public withInitialValueStrategy(initialValueStrategy: string|null): this {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    }
    public getParameters(): Gs2Enchant.BalanceParameterValueModel[]|null {
        return this.parameters;
    }
    public setParameters(parameters: Gs2Enchant.BalanceParameterValueModel[]|null) {
        this.parameters = parameters;
        return this;
    }
    public withParameters(parameters: Gs2Enchant.BalanceParameterValueModel[]|null): this {
        this.parameters = parameters;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BalanceParameterModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterModelMaster()
            .withBalanceParameterModelId(data["balanceParameterModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
                data.parameters.map((item: {[key: string]: any}) => {
                    return Gs2Enchant.BalanceParameterValueModel.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "balanceParameterModelId": this.getBalanceParameterModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters()!.map((item: Gs2Enchant.BalanceParameterValueModel) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
