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
import ExperienceNamespaceAddExperienceByExperienceDistributionStatistics from './ExperienceNamespaceAddExperienceByExperienceDistributionStatistics';
import ExperienceNamespaceAddExperienceByExperienceDistributionSegment from './ExperienceNamespaceAddExperienceByExperienceDistributionSegment';
import ExperienceNamespaceAddExperienceByExperienceDistribution from './ExperienceNamespaceAddExperienceByExperienceDistribution';
import ExperienceNamespaceAddRankCapByExperienceDistributionStatistics from './ExperienceNamespaceAddRankCapByExperienceDistributionStatistics';
import ExperienceNamespaceAddRankCapByExperienceDistributionSegment from './ExperienceNamespaceAddRankCapByExperienceDistributionSegment';
import ExperienceNamespaceAddRankCapByExperienceDistribution from './ExperienceNamespaceAddRankCapByExperienceDistribution';

export default class ExperienceNamespaceDistributions implements IModel {
    private addExperienceByExperience: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution|null = null;
    private addRankCapByExperience: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution|null = null;
    public getAddExperienceByExperience(): Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution|null {
        return this.addExperienceByExperience;
    }
    public setAddExperienceByExperience(addExperienceByExperience: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution|null) {
        this.addExperienceByExperience = addExperienceByExperience;
        return this;
    }
    public withAddExperienceByExperience(addExperienceByExperience: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution|null): this {
        this.addExperienceByExperience = addExperienceByExperience;
        return this;
    }
    public getAddRankCapByExperience(): Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution|null {
        return this.addRankCapByExperience;
    }
    public setAddRankCapByExperience(addRankCapByExperience: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution|null) {
        this.addRankCapByExperience = addRankCapByExperience;
        return this;
    }
    public withAddRankCapByExperience(addRankCapByExperience: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution|null): this {
        this.addRankCapByExperience = addRankCapByExperience;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceDistributions()
            .withAddExperienceByExperience(Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution.fromDict(data["addExperienceByExperience"]))
            .withAddRankCapByExperience(Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution.fromDict(data["addRankCapByExperience"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "addExperienceByExperience": this.getAddExperienceByExperience()?.toDict(),
            "addRankCapByExperience": this.getAddRankCapByExperience()?.toDict(),
        };
    }
}
