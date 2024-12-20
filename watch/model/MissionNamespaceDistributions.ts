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
import MissionNamespaceIncreaseDistributionStatistics from './MissionNamespaceIncreaseDistributionStatistics';
import MissionNamespaceIncreaseDistributionSegment from './MissionNamespaceIncreaseDistributionSegment';
import MissionNamespaceIncreaseDistribution from './MissionNamespaceIncreaseDistribution';
import MissionNamespaceIncreaseAmountDistributionStatistics from './MissionNamespaceIncreaseAmountDistributionStatistics';
import MissionNamespaceIncreaseAmountDistributionSegment from './MissionNamespaceIncreaseAmountDistributionSegment';
import MissionNamespaceIncreaseAmountDistribution from './MissionNamespaceIncreaseAmountDistribution';
import MissionNamespaceReceiveDistributionStatistics from './MissionNamespaceReceiveDistributionStatistics';
import MissionNamespaceReceiveDistributionSegment from './MissionNamespaceReceiveDistributionSegment';
import MissionNamespaceReceiveDistribution from './MissionNamespaceReceiveDistribution';

export default class MissionNamespaceDistributions implements IModel {
    private increase: Gs2Watch.MissionNamespaceIncreaseDistribution|null = null;
    private increaseAmount: Gs2Watch.MissionNamespaceIncreaseAmountDistribution|null = null;
    private receive: Gs2Watch.MissionNamespaceReceiveDistribution|null = null;
    public getIncrease(): Gs2Watch.MissionNamespaceIncreaseDistribution|null {
        return this.increase;
    }
    public setIncrease(increase: Gs2Watch.MissionNamespaceIncreaseDistribution|null) {
        this.increase = increase;
        return this;
    }
    public withIncrease(increase: Gs2Watch.MissionNamespaceIncreaseDistribution|null): this {
        this.increase = increase;
        return this;
    }
    public getIncreaseAmount(): Gs2Watch.MissionNamespaceIncreaseAmountDistribution|null {
        return this.increaseAmount;
    }
    public setIncreaseAmount(increaseAmount: Gs2Watch.MissionNamespaceIncreaseAmountDistribution|null) {
        this.increaseAmount = increaseAmount;
        return this;
    }
    public withIncreaseAmount(increaseAmount: Gs2Watch.MissionNamespaceIncreaseAmountDistribution|null): this {
        this.increaseAmount = increaseAmount;
        return this;
    }
    public getReceive(): Gs2Watch.MissionNamespaceReceiveDistribution|null {
        return this.receive;
    }
    public setReceive(receive: Gs2Watch.MissionNamespaceReceiveDistribution|null) {
        this.receive = receive;
        return this;
    }
    public withReceive(receive: Gs2Watch.MissionNamespaceReceiveDistribution|null): this {
        this.receive = receive;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceDistributions()
            .withIncrease(Gs2Watch.MissionNamespaceIncreaseDistribution.fromDict(data["increase"]))
            .withIncreaseAmount(Gs2Watch.MissionNamespaceIncreaseAmountDistribution.fromDict(data["increaseAmount"]))
            .withReceive(Gs2Watch.MissionNamespaceReceiveDistribution.fromDict(data["receive"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "increase": this.getIncrease()?.toDict(),
            "increaseAmount": this.getIncreaseAmount()?.toDict(),
            "receive": this.getReceive()?.toDict(),
        };
    }
}
