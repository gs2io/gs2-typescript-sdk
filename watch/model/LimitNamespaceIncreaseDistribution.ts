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
import LimitNamespaceIncreaseDistributionStatistics from './LimitNamespaceIncreaseDistributionStatistics';
import LimitNamespaceIncreaseDistributionSegment from './LimitNamespaceIncreaseDistributionSegment';

export default class LimitNamespaceIncreaseDistribution implements IModel {
    private statistics: LimitNamespaceIncreaseDistributionStatistics|null = null;
    private distribution: LimitNamespaceIncreaseDistributionSegment[]|null = null;
    public getStatistics(): LimitNamespaceIncreaseDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: LimitNamespaceIncreaseDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: LimitNamespaceIncreaseDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): LimitNamespaceIncreaseDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: LimitNamespaceIncreaseDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: LimitNamespaceIncreaseDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitNamespaceIncreaseDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespaceIncreaseDistribution()
            .withStatistics(LimitNamespaceIncreaseDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return LimitNamespaceIncreaseDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: LimitNamespaceIncreaseDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
