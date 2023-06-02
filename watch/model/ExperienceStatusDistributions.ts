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
import ExperienceStatusRankDistributionStatistics from './ExperienceStatusRankDistributionStatistics';
import ExperienceStatusRankDistributionSegment from './ExperienceStatusRankDistributionSegment';
import ExperienceStatusRankDistribution from './ExperienceStatusRankDistribution';
import ExperienceStatusRankCapDistributionStatistics from './ExperienceStatusRankCapDistributionStatistics';
import ExperienceStatusRankCapDistributionSegment from './ExperienceStatusRankCapDistributionSegment';
import ExperienceStatusRankCapDistribution from './ExperienceStatusRankCapDistribution';

export default class ExperienceStatusDistributions implements IModel {
    private rank: ExperienceStatusRankDistribution|null = null;
    private rankCap: ExperienceStatusRankCapDistribution|null = null;
    public getRank(): ExperienceStatusRankDistribution|null {
        return this.rank;
    }
    public setRank(rank: ExperienceStatusRankDistribution|null) {
        this.rank = rank;
        return this;
    }
    public withRank(rank: ExperienceStatusRankDistribution|null): this {
        this.rank = rank;
        return this;
    }
    public getRankCap(): ExperienceStatusRankCapDistribution|null {
        return this.rankCap;
    }
    public setRankCap(rankCap: ExperienceStatusRankCapDistribution|null) {
        this.rankCap = rankCap;
        return this;
    }
    public withRankCap(rankCap: ExperienceStatusRankCapDistribution|null): this {
        this.rankCap = rankCap;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceStatusDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatusDistributions()
            .withRank(ExperienceStatusRankDistribution.fromDict(data["rank"]))
            .withRankCap(ExperienceStatusRankCapDistribution.fromDict(data["rankCap"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "rank": this.getRank()?.toDict(),
            "rankCap": this.getRankCap()?.toDict(),
        };
    }
}
