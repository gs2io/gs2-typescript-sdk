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

import * as Gs2Enchant from '../model'

export default class CreateRarityParameterModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private maximumParameterCount: number|null = null;
    private parameterCounts: Gs2Enchant.RarityParameterCountModel[]|null = null;
    private parameters: Gs2Enchant.RarityParameterValueModel[]|null = null;

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
    public getParameterCounts(): Gs2Enchant.RarityParameterCountModel[]|null {
        return this.parameterCounts;
    }
    public setParameterCounts(parameterCounts: Gs2Enchant.RarityParameterCountModel[]|null) {
        this.parameterCounts = parameterCounts;
        return this;
    }
    public withParameterCounts(parameterCounts: Gs2Enchant.RarityParameterCountModel[]|null): this {
        this.parameterCounts = parameterCounts;
        return this;
    }
    public getParameters(): Gs2Enchant.RarityParameterValueModel[]|null {
        return this.parameters;
    }
    public setParameters(parameters: Gs2Enchant.RarityParameterValueModel[]|null) {
        this.parameters = parameters;
        return this;
    }
    public withParameters(parameters: Gs2Enchant.RarityParameterValueModel[]|null): this {
        this.parameters = parameters;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateRarityParameterModelMasterRequest {
        return new CreateRarityParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMaximumParameterCount(data["maximumParameterCount"])
            .withParameterCounts(data.parameterCounts ?
                data.parameterCounts.map((item: {[key: string]: any}) => {
                    return Gs2Enchant.RarityParameterCountModel.fromDict(item);
                }
            ) : [])
            .withParameters(data.parameters ?
                data.parameters.map((item: {[key: string]: any}) => {
                    return Gs2Enchant.RarityParameterValueModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "maximumParameterCount": this.getMaximumParameterCount(),
            "parameterCounts": this.getParameterCounts() ?
                this.getParameterCounts()!.map((item: Gs2Enchant.RarityParameterCountModel) => {
                    return item.toDict();
                }
            ) : [],
            "parameters": this.getParameters() ?
                this.getParameters()!.map((item: Gs2Enchant.RarityParameterValueModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}