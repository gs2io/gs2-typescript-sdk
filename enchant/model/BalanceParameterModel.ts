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
import BalanceParameterValueModel from './BalanceParameterValueModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:balance:{parameterName}";

export default class BalanceParameterModel implements IModel {
    private balanceParameterModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private totalValue: number|null = null;
    private initialValueStrategy: string|null = null;
    private parameters: BalanceParameterValueModel[]|null = null;

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
    public getParameters(): BalanceParameterValueModel[]|null {
        return this.parameters;
    }
    public setParameters(parameters: BalanceParameterValueModel[]|null) {
        this.parameters = parameters;
        return this;
    }
    public withParameters(parameters: BalanceParameterValueModel[]|null): this {
        this.parameters = parameters;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BalanceParameterModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterModel()
            .withBalanceParameterModelId(data["balanceParameterModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
                data.parameters.map((item: {[key: string]: any}) => {
                    return BalanceParameterValueModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "balanceParameterModelId": this.getBalanceParameterModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters()!.map((item: BalanceParameterValueModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
