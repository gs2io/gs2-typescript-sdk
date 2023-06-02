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
import LotteryLotteryDrawResultDistributionStatistics from './LotteryLotteryDrawResultDistributionStatistics';
import LotteryLotteryDrawResultDistributionSegment from './LotteryLotteryDrawResultDistributionSegment';
import LotteryLotteryDrawResultDistribution from './LotteryLotteryDrawResultDistribution';

export default class LotteryLotteryDistributions implements IModel {
    private drawResult: LotteryLotteryDrawResultDistribution|null = null;
    public getDrawResult(): LotteryLotteryDrawResultDistribution|null {
        return this.drawResult;
    }
    public setDrawResult(drawResult: LotteryLotteryDrawResultDistribution|null) {
        this.drawResult = drawResult;
        return this;
    }
    public withDrawResult(drawResult: LotteryLotteryDrawResultDistribution|null): this {
        this.drawResult = drawResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryLotteryDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryDistributions()
            .withDrawResult(LotteryLotteryDrawResultDistribution.fromDict(data["drawResult"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "drawResult": this.getDrawResult()?.toDict(),
        };
    }
}
