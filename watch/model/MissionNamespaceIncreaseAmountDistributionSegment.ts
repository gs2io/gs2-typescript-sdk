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

export default class MissionNamespaceIncreaseAmountDistributionSegment implements IModel {
    private counterName: string|null = null;
    private sum: number|null = null;
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
    public getSum(): number|null {
        return this.sum;
    }
    public setSum(sum: number|null) {
        this.sum = sum;
        return this;
    }
    public withSum(sum: number|null): this {
        this.sum = sum;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionNamespaceIncreaseAmountDistributionSegment|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseAmountDistributionSegment()
            .withCounterName(data["counterName"])
            .withSum(data["sum"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterName": this.getCounterName(),
            "sum": this.getSum(),
        };
    }
}
