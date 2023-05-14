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
import ExperienceRankDistribution from './ExperienceRankDistribution';

export default class ExperienceExperience implements IModel {
    private experienceName: string|null = null;
    private rankDistribution: ExperienceRankDistribution[]|null = null;
    public getExperienceName(): string|null {
        return this.experienceName;
    }
    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }
    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
        return this;
    }
    public getRankDistribution(): ExperienceRankDistribution[]|null {
        return this.rankDistribution;
    }
    public setRankDistribution(rankDistribution: ExperienceRankDistribution[]|null) {
        this.rankDistribution = rankDistribution;
        return this;
    }
    public withRankDistribution(rankDistribution: ExperienceRankDistribution[]|null): this {
        this.rankDistribution = rankDistribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperience|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperience()
            .withExperienceName(data["experienceName"])
            .withRankDistribution(data.rankDistribution ?
                data.rankDistribution.map((item: {[key: string]: any}) => {
                    return ExperienceRankDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "experienceName": this.getExperienceName(),
            "rankDistribution": this.getRankDistribution() ?
                this.getRankDistribution()!.map((item: ExperienceRankDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
