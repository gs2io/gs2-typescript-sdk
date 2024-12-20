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

export default class ExperienceNamespaceStatistics implements IModel {
    private experience: number|null = null;
    private rankCap: number|null = null;
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

    public static fromDict(data: {[key: string]: any}): ExperienceNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceStatistics()
            .withExperience(data["experience"])
            .withRankCap(data["rankCap"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "experience": this.getExperience(),
            "rankCap": this.getRankCap(),
        };
    }
}
