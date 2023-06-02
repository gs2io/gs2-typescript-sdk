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
import FormationMoldCapacityDistributionStatistics from './FormationMoldCapacityDistributionStatistics';
import FormationMoldCapacityDistributionSegment from './FormationMoldCapacityDistributionSegment';
import FormationMoldCapacityDistribution from './FormationMoldCapacityDistribution';
import FormationMoldUpdateByIndexDistributionStatistics from './FormationMoldUpdateByIndexDistributionStatistics';
import FormationMoldUpdateByIndexDistributionSegment from './FormationMoldUpdateByIndexDistributionSegment';
import FormationMoldUpdateByIndexDistribution from './FormationMoldUpdateByIndexDistribution';

export default class FormationMoldDistributions implements IModel {
    private capacity: FormationMoldCapacityDistribution|null = null;
    private updateByIndex: FormationMoldUpdateByIndexDistribution|null = null;
    public getCapacity(): FormationMoldCapacityDistribution|null {
        return this.capacity;
    }
    public setCapacity(capacity: FormationMoldCapacityDistribution|null) {
        this.capacity = capacity;
        return this;
    }
    public withCapacity(capacity: FormationMoldCapacityDistribution|null): this {
        this.capacity = capacity;
        return this;
    }
    public getUpdateByIndex(): FormationMoldUpdateByIndexDistribution|null {
        return this.updateByIndex;
    }
    public setUpdateByIndex(updateByIndex: FormationMoldUpdateByIndexDistribution|null) {
        this.updateByIndex = updateByIndex;
        return this;
    }
    public withUpdateByIndex(updateByIndex: FormationMoldUpdateByIndexDistribution|null): this {
        this.updateByIndex = updateByIndex;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationMoldDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldDistributions()
            .withCapacity(FormationMoldCapacityDistribution.fromDict(data["capacity"]))
            .withUpdateByIndex(FormationMoldUpdateByIndexDistribution.fromDict(data["updateByIndex"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "capacity": this.getCapacity()?.toDict(),
            "updateByIndex": this.getUpdateByIndex()?.toDict(),
        };
    }
}
