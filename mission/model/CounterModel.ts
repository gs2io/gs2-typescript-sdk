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

import * as Gs2Mission from '../../mission/model'
import VerifyAction from './VerifyAction';
import CounterScopeModel from './CounterScopeModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}";

export default class CounterModel implements IModel {
    private counterId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private scopes: Gs2Mission.CounterScopeModel[]|null = null;
    private challengePeriodEventId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
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
            .replace('{counterName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCounterName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{counterName}', '(.*)')
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
        if (this.getCounterName(grn) == null || this.getCounterName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        counterName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{counterName}', counterName ?? '');
    }
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
                    return Gs2Mission.CounterScopeModel.fromDict(item);
                }
            ) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterId": this.getCounterId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scopes": this.getScopes() ?
                this.getScopes()!.map((item: Gs2Mission.CounterScopeModel) => {
                    return item.toDict();
                }
            ) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    }
}
