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
import RarityParameterCountModel from './RarityParameterCountModel';
import RarityParameterValueModel from './RarityParameterValueModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:rarity:{parameterName}";

export default class RarityParameterModel implements IModel {
    private rarityParameterModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private maximumParameterCount: number|null = null;
    private parameterCounts: RarityParameterCountModel[]|null = null;
    private parameters: RarityParameterValueModel[]|null = null;

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
    public getRarityParameterModelId(): string|null {
        return this.rarityParameterModelId;
    }
    public setRarityParameterModelId(rarityParameterModelId: string|null) {
        this.rarityParameterModelId = rarityParameterModelId;
        return this;
    }
    public withRarityParameterModelId(rarityParameterModelId: string|null): this {
        this.rarityParameterModelId = rarityParameterModelId;
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
    public getMaximumParameterCount(): number|null {
        return this.maximumParameterCount;
    }
    public setMaximumParameterCount(maximumParameterCount: number|null) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    }
    public withMaximumParameterCount(maximumParameterCount: number|null): this {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    }
    public getParameterCounts(): RarityParameterCountModel[]|null {
        return this.parameterCounts;
    }
    public setParameterCounts(parameterCounts: RarityParameterCountModel[]|null) {
        this.parameterCounts = parameterCounts;
        return this;
    }
    public withParameterCounts(parameterCounts: RarityParameterCountModel[]|null): this {
        this.parameterCounts = parameterCounts;
        return this;
    }
    public getParameters(): RarityParameterValueModel[]|null {
        return this.parameters;
    }
    public setParameters(parameters: RarityParameterValueModel[]|null) {
        this.parameters = parameters;
        return this;
    }
    public withParameters(parameters: RarityParameterValueModel[]|null): this {
        this.parameters = parameters;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RarityParameterModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterModel()
            .withRarityParameterModelId(data["rarityParameterModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMaximumParameterCount(data["maximumParameterCount"])
            .withParameterCounts(data.parameterCounts ?
                data.parameterCounts.map((item: {[key: string]: any}) => {
                    return RarityParameterCountModel.fromDict(item);
                }
            ) : [])
            .withParameters(data.parameters ?
                data.parameters.map((item: {[key: string]: any}) => {
                    return RarityParameterValueModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rarityParameterModelId": this.getRarityParameterModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "maximumParameterCount": this.getMaximumParameterCount(),
            "parameterCounts": this.getParameterCounts() ?
                this.getParameterCounts()!.map((item: RarityParameterCountModel) => {
                    return item.toDict();
                }
            ) : [],
            "parameters": this.getParameters() ?
                this.getParameters()!.map((item: RarityParameterValueModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
