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
import MatchmakingNamespaceResultDistributionStatistics from './MatchmakingNamespaceResultDistributionStatistics';
import MatchmakingNamespaceResultDistributionSegment from './MatchmakingNamespaceResultDistributionSegment';

export default class MatchmakingNamespaceResultDistribution implements IModel {
    private statistics: MatchmakingNamespaceResultDistributionStatistics|null = null;
    private distribution: MatchmakingNamespaceResultDistributionSegment[]|null = null;
    public getStatistics(): MatchmakingNamespaceResultDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MatchmakingNamespaceResultDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MatchmakingNamespaceResultDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): MatchmakingNamespaceResultDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: MatchmakingNamespaceResultDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: MatchmakingNamespaceResultDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespaceResultDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceResultDistribution()
            .withStatistics(MatchmakingNamespaceResultDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return MatchmakingNamespaceResultDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: MatchmakingNamespaceResultDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
