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
    private addExperienceByUser: ExperienceExperienceModelAddExperienceByUserDistribution|null = null;
    private addExperienceAmountByUser: ExperienceExperienceModelAddExperienceAmountByUserDistribution|null = null;
    private addRankCapByUser: ExperienceExperienceModelAddRankCapByUserDistribution|null = null;
    private addRankCapAmountByUser: ExperienceExperienceModelAddRankCapAmountByUserDistribution|null = null;
    public getAddExperienceByUser(): ExperienceExperienceModelAddExperienceByUserDistribution|null {
        return this.addExperienceByUser;
    }
    public setAddExperienceByUser(addExperienceByUser: ExperienceExperienceModelAddExperienceByUserDistribution|null) {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    }
    public withAddExperienceByUser(addExperienceByUser: ExperienceExperienceModelAddExperienceByUserDistribution|null): this {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    }
    public getAddExperienceAmountByUser(): ExperienceExperienceModelAddExperienceAmountByUserDistribution|null {
        return this.addExperienceAmountByUser;
    }
    public setAddExperienceAmountByUser(addExperienceAmountByUser: ExperienceExperienceModelAddExperienceAmountByUserDistribution|null) {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    }
    public withAddExperienceAmountByUser(addExperienceAmountByUser: ExperienceExperienceModelAddExperienceAmountByUserDistribution|null): this {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    }
    public getAddRankCapByUser(): ExperienceExperienceModelAddRankCapByUserDistribution|null {
        return this.addRankCapByUser;
    }
    public setAddRankCapByUser(addRankCapByUser: ExperienceExperienceModelAddRankCapByUserDistribution|null) {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    }
    public withAddRankCapByUser(addRankCapByUser: ExperienceExperienceModelAddRankCapByUserDistribution|null): this {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    }
    public getAddRankCapAmountByUser(): ExperienceExperienceModelAddRankCapAmountByUserDistribution|null {
        return this.addRankCapAmountByUser;
    }
    public setAddRankCapAmountByUser(addRankCapAmountByUser: ExperienceExperienceModelAddRankCapAmountByUserDistribution|null) {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    }
    public withAddRankCapAmountByUser(addRankCapAmountByUser: ExperienceExperienceModelAddRankCapAmountByUserDistribution|null): this {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceExperienceModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelDistributions()
            .withAddExperienceByUser(ExperienceExperienceModelAddExperienceByUserDistribution.fromDict(data["addExperienceByUser"]))
            .withAddExperienceAmountByUser(ExperienceExperienceModelAddExperienceAmountByUserDistribution.fromDict(data["addExperienceAmountByUser"]))
            .withAddRankCapByUser(ExperienceExperienceModelAddRankCapByUserDistribution.fromDict(data["addRankCapByUser"]))
            .withAddRankCapAmountByUser(ExperienceExperienceModelAddRankCapAmountByUserDistribution.fromDict(data["addRankCapAmountByUser"]));
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
