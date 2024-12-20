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
import FormationMoldCapacityDistributionStatistics from './FormationMoldCapacityDistributionStatistics';
import FormationMoldCapacityDistributionSegment from './FormationMoldCapacityDistributionSegment';
import FormationMoldCapacityDistribution from './FormationMoldCapacityDistribution';
import FormationMoldUpdateByIndexDistributionStatistics from './FormationMoldUpdateByIndexDistributionStatistics';
import FormationMoldUpdateByIndexDistributionSegment from './FormationMoldUpdateByIndexDistributionSegment';
import FormationMoldUpdateByIndexDistribution from './FormationMoldUpdateByIndexDistribution';

export default class FormationMoldDistributions implements IModel {
    private capacity: Gs2Watch.FormationMoldCapacityDistribution|null = null;
    private updateByIndex: Gs2Watch.FormationMoldUpdateByIndexDistribution|null = null;
    public getCapacity(): Gs2Watch.FormationMoldCapacityDistribution|null {
        return this.capacity;
    }
    public setCapacity(capacity: Gs2Watch.FormationMoldCapacityDistribution|null) {
        this.capacity = capacity;
        return this;
    }
    public withCapacity(capacity: Gs2Watch.FormationMoldCapacityDistribution|null): this {
        this.capacity = capacity;
        return this;
    }
    public getUpdateByIndex(): Gs2Watch.FormationMoldUpdateByIndexDistribution|null {
        return this.updateByIndex;
    }
    public setUpdateByIndex(updateByIndex: Gs2Watch.FormationMoldUpdateByIndexDistribution|null) {
        this.updateByIndex = updateByIndex;
        return this;
    }
    public withUpdateByIndex(updateByIndex: Gs2Watch.FormationMoldUpdateByIndexDistribution|null): this {
        this.updateByIndex = updateByIndex;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationMoldDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldDistributions()
            .withCapacity(Gs2Watch.FormationMoldCapacityDistribution.fromDict(data["capacity"]))
            .withUpdateByIndex(Gs2Watch.FormationMoldUpdateByIndexDistribution.fromDict(data["updateByIndex"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "capacity": this.getCapacity()?.toDict(),
            "updateByIndex": this.getUpdateByIndex()?.toDict(),
        };
    }
}
