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
import ShowcaseDisplayItemStatistics from './ShowcaseDisplayItemStatistics';
import ShowcaseDisplayItemQuantityDistributionStatistics from './ShowcaseDisplayItemQuantityDistributionStatistics';
import ShowcaseDisplayItemQuantityDistributionSegment from './ShowcaseDisplayItemQuantityDistributionSegment';
import ShowcaseDisplayItemQuantityDistribution from './ShowcaseDisplayItemQuantityDistribution';
import ShowcaseDisplayItemDistributions from './ShowcaseDisplayItemDistributions';
const grnFormat: string = "";

export default class ShowcaseDisplayItem implements IModel {
    private displayItemId: string|null = null;
    private statistics: Gs2Watch.ShowcaseDisplayItemStatistics|null = null;
    private distributions: Gs2Watch.ShowcaseDisplayItemDistributions|null = null;

    public static isValid(grn: string): boolean {
        return true;
    }

    public static createGrn(
    ): string|null {
        return grnFormat;
    }
    public getDisplayItemId(): string|null {
        return this.displayItemId;
    }
    public setDisplayItemId(displayItemId: string|null) {
        this.displayItemId = displayItemId;
        return this;
    }
    public withDisplayItemId(displayItemId: string|null): this {
        this.displayItemId = displayItemId;
        return this;
    }
    public getStatistics(): Gs2Watch.ShowcaseDisplayItemStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.ShowcaseDisplayItemStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.ShowcaseDisplayItemStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.ShowcaseDisplayItemDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.ShowcaseDisplayItemDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.ShowcaseDisplayItemDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseDisplayItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withStatistics(Gs2Watch.ShowcaseDisplayItemStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.ShowcaseDisplayItemDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "displayItemId": this.getDisplayItemId(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
