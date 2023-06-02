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
import LimitNamespaceIncreaseDistributionStatistics from './LimitNamespaceIncreaseDistributionStatistics';
import LimitNamespaceIncreaseDistributionSegment from './LimitNamespaceIncreaseDistributionSegment';
import LimitNamespaceIncreaseDistribution from './LimitNamespaceIncreaseDistribution';

export default class LimitNamespaceDistributions implements IModel {
    private increase: LimitNamespaceIncreaseDistribution|null = null;
    public getIncrease(): LimitNamespaceIncreaseDistribution|null {
        return this.increase;
    }
    public setIncrease(increase: LimitNamespaceIncreaseDistribution|null) {
        this.increase = increase;
        return this;
    }
    public withIncrease(increase: LimitNamespaceIncreaseDistribution|null): this {
        this.increase = increase;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespaceDistributions()
            .withIncrease(LimitNamespaceIncreaseDistribution.fromDict(data["increase"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "increase": this.getIncrease()?.toDict(),
        };
    }
}
