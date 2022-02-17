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

import * as Gs2Exchange from '../model'

export class UpdateRateModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private rateName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private timingType: string|null = null;
    private lockTime: number|null = null;
    private enableSkip: boolean|null = null;
    private skipConsumeActions: Gs2Exchange.ConsumeAction[]|null = null;
    private acquireActions: Gs2Exchange.AcquireAction[]|null = null;
    private consumeActions: Gs2Exchange.ConsumeAction[]|null = null;

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

    public getTimingType(): string|null {
        return this.timingType;
    }

    public setTimingType(timingType: string|null) {
        this.timingType = timingType;
        return this;
    }

    public withTimingType(timingType: string|null): this {
        this.timingType = timingType;
        return this;
    }

    public getLockTime(): number|null {
        return this.lockTime;
    }

    public setLockTime(lockTime: number|null) {
        this.lockTime = lockTime;
        return this;
    }

    public withLockTime(lockTime: number|null): this {
        this.lockTime = lockTime;
        return this;
    }

    public getEnableSkip(): boolean|null {
        return this.enableSkip;
    }

    public setEnableSkip(enableSkip: boolean|null) {
        this.enableSkip = enableSkip;
        return this;
    }

    public withEnableSkip(enableSkip: boolean|null): this {
        this.enableSkip = enableSkip;
        return this;
    }

    public getSkipConsumeActions(): Gs2Exchange.ConsumeAction[]|null {
        return this.skipConsumeActions;
    }

    public setSkipConsumeActions(skipConsumeActions: Gs2Exchange.ConsumeAction[]|null) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    }

    public withSkipConsumeActions(skipConsumeActions: Gs2Exchange.ConsumeAction[]|null): this {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    }

    public getAcquireActions(): Gs2Exchange.AcquireAction[]|null {
        return this.acquireActions;
    }

    public setAcquireActions(acquireActions: Gs2Exchange.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }

    public withAcquireActions(acquireActions: Gs2Exchange.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public getConsumeActions(): Gs2Exchange.ConsumeAction[]|null {
        return this.consumeActions;
    }

    public setConsumeActions(consumeActions: Gs2Exchange.ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }

    public withConsumeActions(consumeActions: Gs2Exchange.ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateRateModelMasterRequest {
        return new UpdateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withEnableSkip(data["enableSkip"])
            .withSkipConsumeActions(data.skipConsumeActions ?
                data.skipConsumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Exchange.ConsumeAction.fromDict(item);
                }
            ) : [])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Exchange.AcquireAction.fromDict(item);
                }
            ) : [])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Exchange.ConsumeAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "enableSkip": this.getEnableSkip(),
            "skipConsumeActions": this.getSkipConsumeActions() ?
                this.getSkipConsumeActions()!.map((item: Gs2Exchange.ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Exchange.AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Exchange.ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}