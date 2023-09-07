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

import * as Gs2Formation from '../model'

export default class UpdateMoldModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private moldModelName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private formModelName: string|null = null;
    private initialMaxCapacity: number|null = null;
    private maxCapacity: number|null = null;

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
    public getMoldModelName(): string|null {
        return this.moldModelName;
    }
    public setMoldModelName(moldModelName: string|null) {
        this.moldModelName = moldModelName;
        return this;
    }
    public withMoldModelName(moldModelName: string|null): this {
        this.moldModelName = moldModelName;
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
    public getFormModelName(): string|null {
        return this.formModelName;
    }
    public setFormModelName(formModelName: string|null) {
        this.formModelName = formModelName;
        return this;
    }
    public withFormModelName(formModelName: string|null): this {
        this.formModelName = formModelName;
        return this;
    }
    public getInitialMaxCapacity(): number|null {
        return this.initialMaxCapacity;
    }
    public setInitialMaxCapacity(initialMaxCapacity: number|null) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    }
    public withInitialMaxCapacity(initialMaxCapacity: number|null): this {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    }
    public getMaxCapacity(): number|null {
        return this.maxCapacity;
    }
    public setMaxCapacity(maxCapacity: number|null) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    public withMaxCapacity(maxCapacity: number|null): this {
        this.maxCapacity = maxCapacity;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateMoldModelMasterRequest {
        return new UpdateMoldModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldModelName(data["moldModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withFormModelName(data["formModelName"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldModelName": this.getMoldModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "formModelName": this.getFormModelName(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
        };
    }
}