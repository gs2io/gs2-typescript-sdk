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
import ShowcaseNamespaceBuyDistributionStatistics from './ShowcaseNamespaceBuyDistributionStatistics';
import ShowcaseNamespaceBuyDistributionSegment from './ShowcaseNamespaceBuyDistributionSegment';
import ShowcaseNamespaceBuyDistribution from './ShowcaseNamespaceBuyDistribution';

export default class ShowcaseNamespaceDistributions implements IModel {
    private buy: Gs2Watch.ShowcaseNamespaceBuyDistribution|null = null;
    public getBuy(): Gs2Watch.ShowcaseNamespaceBuyDistribution|null {
        return this.buy;
    }
    public setBuy(buy: Gs2Watch.ShowcaseNamespaceBuyDistribution|null) {
        this.buy = buy;
        return this;
    }
    public withBuy(buy: Gs2Watch.ShowcaseNamespaceBuyDistribution|null): this {
        this.buy = buy;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespaceDistributions()
            .withBuy(Gs2Watch.ShowcaseNamespaceBuyDistribution.fromDict(data["buy"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "buy": this.getBuy()?.toDict(),
        };
    }
}
