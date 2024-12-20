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

import * as Gs2Watch from '../../watch/model'
import RankingCategoryModelScoreDistributionStatistics from './RankingCategoryModelScoreDistributionStatistics';
import RankingCategoryModelScoreDistributionSegment from './RankingCategoryModelScoreDistributionSegment';
import RankingCategoryModelScoreDistribution from './RankingCategoryModelScoreDistribution';

export default class RankingCategoryModelDistributions implements IModel {
    private score: Gs2Watch.RankingCategoryModelScoreDistribution|null = null;
    public getScore(): Gs2Watch.RankingCategoryModelScoreDistribution|null {
        return this.score;
    }
    public setScore(score: Gs2Watch.RankingCategoryModelScoreDistribution|null) {
        this.score = score;
        return this;
    }
    public withScore(score: Gs2Watch.RankingCategoryModelScoreDistribution|null): this {
        this.score = score;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingCategoryModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModelDistributions()
            .withScore(Gs2Watch.RankingCategoryModelScoreDistribution.fromDict(data["score"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "score": this.getScore()?.toDict(),
        };
    }
}
