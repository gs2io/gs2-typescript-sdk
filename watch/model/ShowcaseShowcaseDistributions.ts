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
import ShowcaseShowcaseBuyDistributionStatistics from './ShowcaseShowcaseBuyDistributionStatistics';
import ShowcaseShowcaseBuyDistributionSegment from './ShowcaseShowcaseBuyDistributionSegment';
import ShowcaseShowcaseBuyDistribution from './ShowcaseShowcaseBuyDistribution';

export default class ShowcaseShowcaseDistributions implements IModel {
    private buy: Gs2Watch.ShowcaseShowcaseBuyDistribution|null = null;
    public getBuy(): Gs2Watch.ShowcaseShowcaseBuyDistribution|null {
        return this.buy;
    }
    public setBuy(buy: Gs2Watch.ShowcaseShowcaseBuyDistribution|null) {
        this.buy = buy;
        return this;
    }
    public withBuy(buy: Gs2Watch.ShowcaseShowcaseBuyDistribution|null): this {
        this.buy = buy;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseShowcaseDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseDistributions()
            .withBuy(Gs2Watch.ShowcaseShowcaseBuyDistribution.fromDict(data["buy"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "buy": this.getBuy()?.toDict(),
        };
    }
}
