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
import FormationNamespaceUpdateByMoldDistributionStatistics from './FormationNamespaceUpdateByMoldDistributionStatistics';
import FormationNamespaceUpdateByMoldDistributionSegment from './FormationNamespaceUpdateByMoldDistributionSegment';
import FormationNamespaceUpdateByMoldDistribution from './FormationNamespaceUpdateByMoldDistribution';
import FormationNamespaceIncreaseCapacityByMoldDistributionStatistics from './FormationNamespaceIncreaseCapacityByMoldDistributionStatistics';
import FormationNamespaceIncreaseCapacityByMoldDistributionSegment from './FormationNamespaceIncreaseCapacityByMoldDistributionSegment';
import FormationNamespaceIncreaseCapacityByMoldDistribution from './FormationNamespaceIncreaseCapacityByMoldDistribution';

export default class FormationNamespaceDistributions implements IModel {
    private updateByMold: Gs2Watch.FormationNamespaceUpdateByMoldDistribution|null = null;
    private increaseCapacityByMold: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution|null = null;
    public getUpdateByMold(): Gs2Watch.FormationNamespaceUpdateByMoldDistribution|null {
        return this.updateByMold;
    }
    public setUpdateByMold(updateByMold: Gs2Watch.FormationNamespaceUpdateByMoldDistribution|null) {
        this.updateByMold = updateByMold;
        return this;
    }
    public withUpdateByMold(updateByMold: Gs2Watch.FormationNamespaceUpdateByMoldDistribution|null): this {
        this.updateByMold = updateByMold;
        return this;
    }
    public getIncreaseCapacityByMold(): Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution|null {
        return this.increaseCapacityByMold;
    }
    public setIncreaseCapacityByMold(increaseCapacityByMold: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution|null) {
        this.increaseCapacityByMold = increaseCapacityByMold;
        return this;
    }
    public withIncreaseCapacityByMold(increaseCapacityByMold: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution|null): this {
        this.increaseCapacityByMold = increaseCapacityByMold;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceDistributions()
            .withUpdateByMold(Gs2Watch.FormationNamespaceUpdateByMoldDistribution.fromDict(data["updateByMold"]))
            .withIncreaseCapacityByMold(Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution.fromDict(data["increaseCapacityByMold"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "updateByMold": this.getUpdateByMold()?.toDict(),
            "increaseCapacityByMold": this.getIncreaseCapacityByMold()?.toDict(),
        };
    }
}
