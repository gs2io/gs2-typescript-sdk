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

export default class TierModel implements IModel {
    private metadata: string|null = null;
    private raiseRankBonus: number|null = null;
    private entryFee: number|null = null;
    private minimumChangePoint: number|null = null;
    private maximumChangePoint: number|null = null;
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
    public getRaiseRankBonus(): number|null {
        return this.raiseRankBonus;
    }
    public setRaiseRankBonus(raiseRankBonus: number|null) {
        this.raiseRankBonus = raiseRankBonus;
        return this;
    }
    public withRaiseRankBonus(raiseRankBonus: number|null): this {
        this.raiseRankBonus = raiseRankBonus;
        return this;
    }
    public getEntryFee(): number|null {
        return this.entryFee;
    }
    public setEntryFee(entryFee: number|null) {
        this.entryFee = entryFee;
        return this;
    }
    public withEntryFee(entryFee: number|null): this {
        this.entryFee = entryFee;
        return this;
    }
    public getMinimumChangePoint(): number|null {
        return this.minimumChangePoint;
    }
    public setMinimumChangePoint(minimumChangePoint: number|null) {
        this.minimumChangePoint = minimumChangePoint;
        return this;
    }
    public withMinimumChangePoint(minimumChangePoint: number|null): this {
        this.minimumChangePoint = minimumChangePoint;
        return this;
    }
    public getMaximumChangePoint(): number|null {
        return this.maximumChangePoint;
    }
    public setMaximumChangePoint(maximumChangePoint: number|null) {
        this.maximumChangePoint = maximumChangePoint;
        return this;
    }
    public withMaximumChangePoint(maximumChangePoint: number|null): this {
        this.maximumChangePoint = maximumChangePoint;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TierModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TierModel()
            .withMetadata(data["metadata"])
            .withRaiseRankBonus(data["raiseRankBonus"])
            .withEntryFee(data["entryFee"])
            .withMinimumChangePoint(data["minimumChangePoint"])
            .withMaximumChangePoint(data["maximumChangePoint"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "metadata": this.getMetadata(),
            "raiseRankBonus": this.getRaiseRankBonus(),
            "entryFee": this.getEntryFee(),
            "minimumChangePoint": this.getMinimumChangePoint(),
            "maximumChangePoint": this.getMaximumChangePoint(),
        };
    }
}
