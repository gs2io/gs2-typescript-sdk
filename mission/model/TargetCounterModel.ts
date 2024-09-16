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

export default class TargetCounterModel implements IModel {
    private counterName: string|null = null;
    private scopeType: string|null = null;
    private resetType: string|null = null;
    private conditionName: string|null = null;
    private value: number|null = null;
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
    public getScopeType(): string|null {
        return this.scopeType;
    }
    public setScopeType(scopeType: string|null) {
        this.scopeType = scopeType;
        return this;
    }
    public withScopeType(scopeType: string|null): this {
        this.scopeType = scopeType;
        return this;
    }
    public getResetType(): string|null {
        return this.resetType;
    }
    public setResetType(resetType: string|null) {
        this.resetType = resetType;
        return this;
    }
    public withResetType(resetType: string|null): this {
        this.resetType = resetType;
        return this;
    }
    public getConditionName(): string|null {
        return this.conditionName;
    }
    public setConditionName(conditionName: string|null) {
        this.conditionName = conditionName;
        return this;
    }
    public withConditionName(conditionName: string|null): this {
        this.conditionName = conditionName;
        return this;
    }
    public getValue(): number|null {
        return this.value;
    }
    public setValue(value: number|null) {
        this.value = value;
        return this;
    }
    public withValue(value: number|null): this {
        this.value = value;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TargetCounterModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TargetCounterModel()
            .withCounterName(data["counterName"])
            .withScopeType(data["scopeType"])
            .withResetType(data["resetType"])
            .withConditionName(data["conditionName"])
            .withValue(data["value"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterName": this.getCounterName(),
            "scopeType": this.getScopeType(),
            "resetType": this.getResetType(),
            "conditionName": this.getConditionName(),
            "value": this.getValue(),
        };
    }
}
