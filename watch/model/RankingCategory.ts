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
import RankingCategoryScoreDistribution from './RankingCategoryScoreDistribution';

export default class RankingCategory implements IModel {
    private name: string|null = null;
    private scoreDistribution: RankingCategoryScoreDistribution[]|null = null;
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getScoreDistribution(): RankingCategoryScoreDistribution[]|null {
        return this.scoreDistribution;
    }
    public setScoreDistribution(scoreDistribution: RankingCategoryScoreDistribution[]|null) {
        this.scoreDistribution = scoreDistribution;
        return this;
    }
    public withScoreDistribution(scoreDistribution: RankingCategoryScoreDistribution[]|null): this {
        this.scoreDistribution = scoreDistribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingCategory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategory()
            .withName(data["name"])
            .withScoreDistribution(data.scoreDistribution ?
                data.scoreDistribution.map((item: {[key: string]: any}) => {
                    return RankingCategoryScoreDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "scoreDistribution": this.getScoreDistribution() ?
                this.getScoreDistribution()!.map((item: RankingCategoryScoreDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
