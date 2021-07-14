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

import IModel from '@/gs2/core/interface/IModel';
import { CounterScopeModel } from './CounterScopeModel';

export class CounterModel implements IModel {
    private counterId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private scopes: CounterScopeModel[]|null = null;
    private challengePeriodEventId: string|null = null;

    public getCounterId(): string|null {
        return this.counterId;
    }

    public setCounterId(counterId: string|null) {
        this.counterId = counterId;
        return this;
    }

    public withCounterId(counterId: string|null): this {
        this.counterId = counterId;
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

    public getScopes(): CounterScopeModel[]|null {
        return this.scopes;
    }

    public setScopes(scopes: CounterScopeModel[]|null) {
        this.scopes = scopes;
        return this;
    }

    public withScopes(scopes: CounterScopeModel[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): CounterModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterModel()
            .withCounterId(data["counterId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScopes(data.scopes ?
                data.scopes.map((item: {[key: string]: any}) => {
                    return CounterScopeModel.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterId": this.getCounterId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scopes": this.getScopes() ?
                this.getScopes()!.map((item: CounterScopeModel) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    }
}
