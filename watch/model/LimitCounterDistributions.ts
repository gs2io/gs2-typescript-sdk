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
import LimitCounterCounterDistributionStatistics from './LimitCounterCounterDistributionStatistics';
import LimitCounterCounterDistributionSegment from './LimitCounterCounterDistributionSegment';
import LimitCounterCounterDistribution from './LimitCounterCounterDistribution';

export default class LimitCounterDistributions implements IModel {
    private counter: LimitCounterCounterDistribution|null = null;
    public getCounter(): LimitCounterCounterDistribution|null {
        return this.counter;
    }
    public setCounter(counter: LimitCounterCounterDistribution|null) {
        this.counter = counter;
        return this;
    }
    public withCounter(counter: LimitCounterCounterDistribution|null): this {
        this.counter = counter;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitCounterDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounterDistributions()
            .withCounter(LimitCounterCounterDistribution.fromDict(data["counter"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "counter": this.getCounter()?.toDict(),
        };
    }
}
