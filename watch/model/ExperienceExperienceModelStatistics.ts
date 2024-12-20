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

export default class ExperienceExperienceModelStatistics implements IModel {
    private experience: number|null = null;
    private experienceAmount: number|null = null;
    private rankCap: number|null = null;
    private rankCapAmount: number|null = null;
    public getExperience(): number|null {
        return this.experience;
    }
    public setExperience(experience: number|null) {
        this.experience = experience;
        return this;
    }
    public withExperience(experience: number|null): this {
        this.experience = experience;
        return this;
    }
    public getExperienceAmount(): number|null {
        return this.experienceAmount;
    }
    public setExperienceAmount(experienceAmount: number|null) {
        this.experienceAmount = experienceAmount;
        return this;
    }
    public withExperienceAmount(experienceAmount: number|null): this {
        this.experienceAmount = experienceAmount;
        return this;
    }
    public getRankCap(): number|null {
        return this.rankCap;
    }
    public setRankCap(rankCap: number|null) {
        this.rankCap = rankCap;
        return this;
    }
    public withRankCap(rankCap: number|null): this {
        this.rankCap = rankCap;
        return this;
    }
    public getRankCapAmount(): number|null {
        return this.rankCapAmount;
    }
    public setRankCapAmount(rankCapAmount: number|null) {
        this.rankCapAmount = rankCapAmount;
        return this;
    }
    public withRankCapAmount(rankCapAmount: number|null): this {
        this.rankCapAmount = rankCapAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperienceModelStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelStatistics()
            .withExperience(data["experience"])
            .withExperienceAmount(data["experienceAmount"])
            .withRankCap(data["rankCap"])
            .withRankCapAmount(data["rankCapAmount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "experience": this.getExperience(),
            "experienceAmount": this.getExperienceAmount(),
            "rankCap": this.getRankCap(),
            "rankCapAmount": this.getRankCapAmount(),
        };
    }
}
