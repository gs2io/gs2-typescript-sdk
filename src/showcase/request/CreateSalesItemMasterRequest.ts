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

import * as Gs2Showcase from '../model'

export class CreateSalesItemMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private consumeActions: Gs2Showcase.ConsumeAction[]|null = null;
    private acquireActions: Gs2Showcase.AcquireAction[]|null = null;

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

    public getConsumeActions(): Gs2Showcase.ConsumeAction[]|null {
        return this.consumeActions;
    }

    public setConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }

    public withConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }

    public getAcquireActions(): Gs2Showcase.AcquireAction[]|null {
        return this.acquireActions;
    }

    public setAcquireActions(acquireActions: Gs2Showcase.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }

    public withAcquireActions(acquireActions: Gs2Showcase.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateSalesItemMasterRequest {
        return new CreateSalesItemMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.ConsumeAction.fromDict(item);
                }
            ) : [])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.AcquireAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Showcase.ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Showcase.AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}