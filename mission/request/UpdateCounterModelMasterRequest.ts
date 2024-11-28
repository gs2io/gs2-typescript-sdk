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

import * as Gs2Mission from '../model'

export default class UpdateCounterModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private counterName: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private scopes: Gs2Mission.CounterScopeModel[]|null = null;
    private challengePeriodEventId: string|null = null;

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
    public getCounterName(): string|null {
        return this.counterName;
    }
    public setCounterName(counterName: string|null) {
        this.counterName = counterName;
        return this;
    }
    public withCounterName(counterName: string|null): this {
        this.counterName = counterName;
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
    public getScopes(): Gs2Mission.CounterScopeModel[]|null {
        return this.scopes;
    }
    public setScopes(scopes: Gs2Mission.CounterScopeModel[]|null) {
        this.scopes = scopes;
        return this;
    }
    public withScopes(scopes: Gs2Mission.CounterScopeModel[]|null): this {
        this.scopes = scopes;
        return this;
    }
    public getChallengePeriodEventId(): string|null {
        return this.challengePeriodEventId;
    }
    public setChallengePeriodEventId(challengePeriodEventId: string|null) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }
    public withChallengePeriodEventId(challengePeriodEventId: string|null): this {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateCounterModelMasterRequest {
        return new UpdateCounterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withScopes(data.scopes ?
                data.scopes.map((item: {[key: string]: any}) => {
                    return Gs2Mission.CounterScopeModel.fromDict(item);
                }
            ) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "scopes": this.getScopes() ?
                this.getScopes()!.map((item: Gs2Mission.CounterScopeModel) => {
                    return item.toDict();
                }
            ) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    }
}