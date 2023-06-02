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
import MissionCounterCounterDistributionStatistics from './MissionCounterCounterDistributionStatistics';
import MissionCounterCounterDistributionSegment from './MissionCounterCounterDistributionSegment';
import MissionCounterCounterDistribution from './MissionCounterCounterDistribution';

export default class MissionCounterDistributions implements IModel {
    private counter: MissionCounterCounterDistribution|null = null;
    public getCounter(): MissionCounterCounterDistribution|null {
        return this.counter;
    }
    public setCounter(counter: MissionCounterCounterDistribution|null) {
        this.counter = counter;
        return this;
    }
    public withCounter(counter: MissionCounterCounterDistribution|null): this {
        this.counter = counter;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionCounterDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionCounterDistributions()
            .withCounter(MissionCounterCounterDistribution.fromDict(data["counter"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "counter": this.getCounter()?.toDict(),
        };
    }
}
