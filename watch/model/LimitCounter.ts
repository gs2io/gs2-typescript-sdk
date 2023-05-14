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
import LimitCounterDistributionUsage from './LimitCounterDistributionUsage';
import LimitCounterDistribution from './LimitCounterDistribution';

export default class LimitCounter implements IModel {
    private counterName: string|null = null;
    private distribution: LimitCounterDistribution[]|null = null;
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
    public getDistribution(): LimitCounterDistribution[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: LimitCounterDistribution[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: LimitCounterDistribution[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitCounter|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounter()
            .withCounterName(data["counterName"])
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return LimitCounterDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterName": this.getCounterName(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: LimitCounterDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
