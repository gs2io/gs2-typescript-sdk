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
import ExperienceExperienceModelAddRankCapByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapByUserDistributionSegment from './ExperienceExperienceModelAddRankCapByUserDistributionSegment';

export default class ExperienceExperienceModelAddRankCapByUserDistribution implements IModel {
    private statistics: ExperienceExperienceModelAddRankCapByUserDistributionStatistics|null = null;
    private distribution: ExperienceExperienceModelAddRankCapByUserDistributionSegment[]|null = null;
    public getStatistics(): ExperienceExperienceModelAddRankCapByUserDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ExperienceExperienceModelAddRankCapByUserDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ExperienceExperienceModelAddRankCapByUserDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): ExperienceExperienceModelAddRankCapByUserDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: ExperienceExperienceModelAddRankCapByUserDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: ExperienceExperienceModelAddRankCapByUserDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperienceModelAddRankCapByUserDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelAddRankCapByUserDistribution()
            .withStatistics(ExperienceExperienceModelAddRankCapByUserDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return ExperienceExperienceModelAddRankCapByUserDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: ExperienceExperienceModelAddRankCapByUserDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
