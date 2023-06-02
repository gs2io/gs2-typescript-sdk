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
import MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics from './MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics';
import MatchmakingNamespaceWaitElapsedSecondsDistributionSegment from './MatchmakingNamespaceWaitElapsedSecondsDistributionSegment';

export default class MatchmakingNamespaceWaitElapsedSecondsDistribution implements IModel {
    private statistics: MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics|null = null;
    private distribution: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[]|null = null;
    public getStatistics(): MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespaceWaitElapsedSecondsDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceWaitElapsedSecondsDistribution()
            .withStatistics(MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return MatchmakingNamespaceWaitElapsedSecondsDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
