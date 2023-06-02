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
import ShowcaseDisplayItemQuantityDistributionStatistics from './ShowcaseDisplayItemQuantityDistributionStatistics';
import ShowcaseDisplayItemQuantityDistributionSegment from './ShowcaseDisplayItemQuantityDistributionSegment';
import ShowcaseDisplayItemQuantityDistribution from './ShowcaseDisplayItemQuantityDistribution';

export default class ShowcaseDisplayItemDistributions implements IModel {
    private quantity: ShowcaseDisplayItemQuantityDistribution|null = null;
    public getQuantity(): ShowcaseDisplayItemQuantityDistribution|null {
        return this.quantity;
    }
    public setQuantity(quantity: ShowcaseDisplayItemQuantityDistribution|null) {
        this.quantity = quantity;
        return this;
    }
    public withQuantity(quantity: ShowcaseDisplayItemQuantityDistribution|null): this {
        this.quantity = quantity;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseDisplayItemDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItemDistributions()
            .withQuantity(ShowcaseDisplayItemQuantityDistribution.fromDict(data["quantity"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "quantity": this.getQuantity()?.toDict(),
        };
    }
}
