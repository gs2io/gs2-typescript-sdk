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
import FormationFormSlotDistributionStatistics from './FormationFormSlotDistributionStatistics';
import FormationFormSlotDistributionSegment from './FormationFormSlotDistributionSegment';
import FormationFormSlotDistribution from './FormationFormSlotDistribution';
import FormationFormUsageDistributionStatistics from './FormationFormUsageDistributionStatistics';
import FormationFormUsageDistributionSegment from './FormationFormUsageDistributionSegment';
import FormationFormUsageDistribution from './FormationFormUsageDistribution';

export default class FormationFormDistributions implements IModel {
    private slot: Gs2Watch.FormationFormSlotDistribution|null = null;
    private usage: Gs2Watch.FormationFormUsageDistribution|null = null;
    public getSlot(): Gs2Watch.FormationFormSlotDistribution|null {
        return this.slot;
    }
    public setSlot(slot: Gs2Watch.FormationFormSlotDistribution|null) {
        this.slot = slot;
        return this;
    }
    public withSlot(slot: Gs2Watch.FormationFormSlotDistribution|null): this {
        this.slot = slot;
        return this;
    }
    public getUsage(): Gs2Watch.FormationFormUsageDistribution|null {
        return this.usage;
    }
    public setUsage(usage: Gs2Watch.FormationFormUsageDistribution|null) {
        this.usage = usage;
        return this;
    }
    public withUsage(usage: Gs2Watch.FormationFormUsageDistribution|null): this {
        this.usage = usage;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationFormDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationFormDistributions()
            .withSlot(Gs2Watch.FormationFormSlotDistribution.fromDict(data["slot"]))
            .withUsage(Gs2Watch.FormationFormUsageDistribution.fromDict(data["usage"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "slot": this.getSlot()?.toDict(),
            "usage": this.getUsage()?.toDict(),
        };
    }
}
