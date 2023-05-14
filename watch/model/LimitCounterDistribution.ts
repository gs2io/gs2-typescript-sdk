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

export default class LimitCounterDistribution implements IModel {
    private maxValue: number|null = null;
    private usage: LimitCounterDistributionUsage[]|null = null;
    public getMaxValue(): number|null {
        return this.maxValue;
    }
    public setMaxValue(maxValue: number|null) {
        this.maxValue = maxValue;
        return this;
    }
    public withMaxValue(maxValue: number|null): this {
        this.maxValue = maxValue;
        return this;
    }
    public getUsage(): LimitCounterDistributionUsage[]|null {
        return this.usage;
    }
    public setUsage(usage: LimitCounterDistributionUsage[]|null) {
        this.usage = usage;
        return this;
    }
    public withUsage(usage: LimitCounterDistributionUsage[]|null): this {
        this.usage = usage;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitCounterDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterDistribution()
            .withMaxValue(data["maxValue"])
            .withUsage(data.usage ?
                data.usage.map((item: {[key: string]: any}) => {
                    return LimitCounterDistributionUsage.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "maxValue": this.getMaxValue(),
            "usage": this.getUsage() ?
                this.getUsage()!.map((item: LimitCounterDistributionUsage) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
