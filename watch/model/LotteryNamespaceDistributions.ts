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
import LotteryNamespaceDrawDistributionStatistics from './LotteryNamespaceDrawDistributionStatistics';
import LotteryNamespaceDrawDistributionSegment from './LotteryNamespaceDrawDistributionSegment';
import LotteryNamespaceDrawDistribution from './LotteryNamespaceDrawDistribution';
import LotteryNamespaceDrawAmountDistributionStatistics from './LotteryNamespaceDrawAmountDistributionStatistics';
import LotteryNamespaceDrawAmountDistributionSegment from './LotteryNamespaceDrawAmountDistributionSegment';
import LotteryNamespaceDrawAmountDistribution from './LotteryNamespaceDrawAmountDistribution';
import LotteryNamespaceDrawByUserDistributionStatistics from './LotteryNamespaceDrawByUserDistributionStatistics';
import LotteryNamespaceDrawByUserDistributionSegment from './LotteryNamespaceDrawByUserDistributionSegment';
import LotteryNamespaceDrawByUserDistribution from './LotteryNamespaceDrawByUserDistribution';
import LotteryNamespaceDrawAmountByUserDistributionStatistics from './LotteryNamespaceDrawAmountByUserDistributionStatistics';
import LotteryNamespaceDrawAmountByUserDistributionSegment from './LotteryNamespaceDrawAmountByUserDistributionSegment';
import LotteryNamespaceDrawAmountByUserDistribution from './LotteryNamespaceDrawAmountByUserDistribution';

export default class LotteryNamespaceDistributions implements IModel {
    private draw: LotteryNamespaceDrawDistribution|null = null;
    private drawAmount: LotteryNamespaceDrawAmountDistribution|null = null;
    private drawByUser: LotteryNamespaceDrawByUserDistribution|null = null;
    private drawAmountByUser: LotteryNamespaceDrawAmountByUserDistribution|null = null;
    public getDraw(): LotteryNamespaceDrawDistribution|null {
        return this.draw;
    }
    public setDraw(draw: LotteryNamespaceDrawDistribution|null) {
        this.draw = draw;
        return this;
    }
    public withDraw(draw: LotteryNamespaceDrawDistribution|null): this {
        this.draw = draw;
        return this;
    }
    public getDrawAmount(): LotteryNamespaceDrawAmountDistribution|null {
        return this.drawAmount;
    }
    public setDrawAmount(drawAmount: LotteryNamespaceDrawAmountDistribution|null) {
        this.drawAmount = drawAmount;
        return this;
    }
    public withDrawAmount(drawAmount: LotteryNamespaceDrawAmountDistribution|null): this {
        this.drawAmount = drawAmount;
        return this;
    }
    public getDrawByUser(): LotteryNamespaceDrawByUserDistribution|null {
        return this.drawByUser;
    }
    public setDrawByUser(drawByUser: LotteryNamespaceDrawByUserDistribution|null) {
        this.drawByUser = drawByUser;
        return this;
    }
    public withDrawByUser(drawByUser: LotteryNamespaceDrawByUserDistribution|null): this {
        this.drawByUser = drawByUser;
        return this;
    }
    public getDrawAmountByUser(): LotteryNamespaceDrawAmountByUserDistribution|null {
        return this.drawAmountByUser;
    }
    public setDrawAmountByUser(drawAmountByUser: LotteryNamespaceDrawAmountByUserDistribution|null) {
        this.drawAmountByUser = drawAmountByUser;
        return this;
    }
    public withDrawAmountByUser(drawAmountByUser: LotteryNamespaceDrawAmountByUserDistribution|null): this {
        this.drawAmountByUser = drawAmountByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDistributions()
            .withDraw(LotteryNamespaceDrawDistribution.fromDict(data["draw"]))
            .withDrawAmount(LotteryNamespaceDrawAmountDistribution.fromDict(data["drawAmount"]))
            .withDrawByUser(LotteryNamespaceDrawByUserDistribution.fromDict(data["drawByUser"]))
            .withDrawAmountByUser(LotteryNamespaceDrawAmountByUserDistribution.fromDict(data["drawAmountByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "draw": this.getDraw()?.toDict(),
            "drawAmount": this.getDrawAmount()?.toDict(),
            "drawByUser": this.getDrawByUser()?.toDict(),
            "drawAmountByUser": this.getDrawAmountByUser()?.toDict(),
        };
    }
}
