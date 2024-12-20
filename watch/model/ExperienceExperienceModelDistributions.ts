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
import ExperienceExperienceModelAddExperienceByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceByUserDistributionSegment from './ExperienceExperienceModelAddExperienceByUserDistributionSegment';
import ExperienceExperienceModelAddExperienceByUserDistribution from './ExperienceExperienceModelAddExperienceByUserDistribution';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics from './ExperienceExperienceModelAddExperienceAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment from './ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment';
import ExperienceExperienceModelAddExperienceAmountByUserDistribution from './ExperienceExperienceModelAddExperienceAmountByUserDistribution';
import ExperienceExperienceModelAddRankCapByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapByUserDistributionSegment from './ExperienceExperienceModelAddRankCapByUserDistributionSegment';
import ExperienceExperienceModelAddRankCapByUserDistribution from './ExperienceExperienceModelAddRankCapByUserDistribution';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics from './ExperienceExperienceModelAddRankCapAmountByUserDistributionStatistics';
import ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment from './ExperienceExperienceModelAddRankCapAmountByUserDistributionSegment';
import ExperienceExperienceModelAddRankCapAmountByUserDistribution from './ExperienceExperienceModelAddRankCapAmountByUserDistribution';

export default class ExperienceExperienceModelDistributions implements IModel {
    private addExperienceByUser: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution|null = null;
    private addExperienceAmountByUser: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution|null = null;
    private addRankCapByUser: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution|null = null;
    private addRankCapAmountByUser: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution|null = null;
    public getAddExperienceByUser(): Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution|null {
        return this.addExperienceByUser;
    }
    public setAddExperienceByUser(addExperienceByUser: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution|null) {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    }
    public withAddExperienceByUser(addExperienceByUser: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution|null): this {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    }
    public getAddExperienceAmountByUser(): Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution|null {
        return this.addExperienceAmountByUser;
    }
    public setAddExperienceAmountByUser(addExperienceAmountByUser: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution|null) {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    }
    public withAddExperienceAmountByUser(addExperienceAmountByUser: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution|null): this {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    }
    public getAddRankCapByUser(): Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution|null {
        return this.addRankCapByUser;
    }
    public setAddRankCapByUser(addRankCapByUser: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution|null) {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    }
    public withAddRankCapByUser(addRankCapByUser: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution|null): this {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    }
    public getAddRankCapAmountByUser(): Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution|null {
        return this.addRankCapAmountByUser;
    }
    public setAddRankCapAmountByUser(addRankCapAmountByUser: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution|null) {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    }
    public withAddRankCapAmountByUser(addRankCapAmountByUser: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution|null): this {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperienceModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelDistributions()
            .withAddExperienceByUser(Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution.fromDict(data["addExperienceByUser"]))
            .withAddExperienceAmountByUser(Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution.fromDict(data["addExperienceAmountByUser"]))
            .withAddRankCapByUser(Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution.fromDict(data["addRankCapByUser"]))
            .withAddRankCapAmountByUser(Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution.fromDict(data["addRankCapAmountByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "addExperienceByUser": this.getAddExperienceByUser()?.toDict(),
            "addExperienceAmountByUser": this.getAddExperienceAmountByUser()?.toDict(),
            "addRankCapByUser": this.getAddRankCapByUser()?.toDict(),
            "addRankCapAmountByUser": this.getAddRankCapAmountByUser()?.toDict(),
        };
    }
}
