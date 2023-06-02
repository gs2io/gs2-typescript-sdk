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
import MissionNamespaceIncreaseAmountDistributionStatistics from './MissionNamespaceIncreaseAmountDistributionStatistics';
import MissionNamespaceIncreaseAmountDistributionSegment from './MissionNamespaceIncreaseAmountDistributionSegment';

export default class MissionNamespaceIncreaseAmountDistribution implements IModel {
    private statistics: MissionNamespaceIncreaseAmountDistributionStatistics|null = null;
    private distribution: MissionNamespaceIncreaseAmountDistributionSegment[]|null = null;
    public getStatistics(): MissionNamespaceIncreaseAmountDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MissionNamespaceIncreaseAmountDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MissionNamespaceIncreaseAmountDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): MissionNamespaceIncreaseAmountDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: MissionNamespaceIncreaseAmountDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: MissionNamespaceIncreaseAmountDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionNamespaceIncreaseAmountDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseAmountDistribution()
            .withStatistics(MissionNamespaceIncreaseAmountDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return MissionNamespaceIncreaseAmountDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: MissionNamespaceIncreaseAmountDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
