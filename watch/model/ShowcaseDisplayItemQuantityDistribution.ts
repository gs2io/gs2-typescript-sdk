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

export default class ShowcaseDisplayItemQuantityDistribution implements IModel {
    private statistics: ShowcaseDisplayItemQuantityDistributionStatistics|null = null;
    private distribution: ShowcaseDisplayItemQuantityDistributionSegment[]|null = null;
    public getStatistics(): ShowcaseDisplayItemQuantityDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ShowcaseDisplayItemQuantityDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ShowcaseDisplayItemQuantityDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): ShowcaseDisplayItemQuantityDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: ShowcaseDisplayItemQuantityDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: ShowcaseDisplayItemQuantityDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseDisplayItemQuantityDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItemQuantityDistribution()
            .withStatistics(ShowcaseDisplayItemQuantityDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return ShowcaseDisplayItemQuantityDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: ShowcaseDisplayItemQuantityDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
