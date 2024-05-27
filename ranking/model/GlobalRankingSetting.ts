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
import FixedTiming from './FixedTiming';
import Scope from './Scope';

export default class GlobalRankingSetting implements IModel {
    private uniqueByUserId: boolean|null = null;
    private calculateIntervalMinutes: number|null = null;
    private calculateFixedTiming: FixedTiming|null = null;
    private additionalScopes: Scope[]|null = null;
    private ignoreUserIds: string[]|null = null;
    private generation: string|null = null;
    public getUniqueByUserId(): boolean|null {
        return this.uniqueByUserId;
    }
    public setUniqueByUserId(uniqueByUserId: boolean|null) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }
    public withUniqueByUserId(uniqueByUserId: boolean|null): this {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }
    public getCalculateIntervalMinutes(): number|null {
        return this.calculateIntervalMinutes;
    }
    public setCalculateIntervalMinutes(calculateIntervalMinutes: number|null) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    }
    public withCalculateIntervalMinutes(calculateIntervalMinutes: number|null): this {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    }
    public getCalculateFixedTiming(): FixedTiming|null {
        return this.calculateFixedTiming;
    }
    public setCalculateFixedTiming(calculateFixedTiming: FixedTiming|null) {
        this.calculateFixedTiming = calculateFixedTiming;
        return this;
    }
    public withCalculateFixedTiming(calculateFixedTiming: FixedTiming|null): this {
        this.calculateFixedTiming = calculateFixedTiming;
        return this;
    }
    public getAdditionalScopes(): Scope[]|null {
        return this.additionalScopes;
    }
    public setAdditionalScopes(additionalScopes: Scope[]|null) {
        this.additionalScopes = additionalScopes;
        return this;
    }
    public withAdditionalScopes(additionalScopes: Scope[]|null): this {
        this.additionalScopes = additionalScopes;
        return this;
    }
    public getIgnoreUserIds(): string[]|null {
        return this.ignoreUserIds;
    }
    public setIgnoreUserIds(ignoreUserIds: string[]|null) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    }
    public withIgnoreUserIds(ignoreUserIds: string[]|null): this {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    }
    public getGeneration(): string|null {
        return this.generation;
    }
    public setGeneration(generation: string|null) {
        this.generation = generation;
        return this;
    }
    public withGeneration(generation: string|null): this {
        this.generation = generation;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GlobalRankingSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingSetting()
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withCalculateFixedTiming(FixedTiming.fromDict(data["calculateFixedTiming"]))
            .withAdditionalScopes(data.additionalScopes ?
                data.additionalScopes.map((item: {[key: string]: any}) => {
                    return Scope.fromDict(item);
                }
            ) : [])
            .withIgnoreUserIds(data.ignoreUserIds ?
                data.ignoreUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withGeneration(data["generation"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "calculateFixedTiming": this.getCalculateFixedTiming()?.toDict(),
            "additionalScopes": this.getAdditionalScopes() ?
                this.getAdditionalScopes()!.map((item: Scope) => {
                    return item.toDict();
                }
            ) : [],
            "ignoreUserIds": this.getIgnoreUserIds() ?
                this.getIgnoreUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "generation": this.getGeneration(),
        };
    }
}
